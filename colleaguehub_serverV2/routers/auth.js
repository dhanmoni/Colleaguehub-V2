const express = require('express');
const router = express.Router();
 const User = require('../models/userModel')
 const Profile = require('../models/profileModel')
 const Post = require('../models/postModel')

 const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require('passport')

const multer = require('multer')
require('dotenv').config()
const mongoose = require('mongoose')
const fs = require('fs')
const validateProfile = require('../validation/profileError')
const validateRegister = require('../validation/registerError')
const validateLogin = require('../validation/LoginError')




router.get('/testing', (req, res)=> {
    console.log(req.query)
    res.json({message:'Success'})
})


//Login and Signup
router.post("/signup", async(req, res, next) => {
    const {errors, isValid } = validateRegister(req.body)
    if(!isValid){
        
         return res.status(400).json(errors)
    }
    User.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length >= 1) {
            errors.email = 'Looks like you are already registered. Please go back and login to continue';
            return res.status(401).json(errors);  
        } else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err
              });
            }
             else {
              const user = new User({
               _id: mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash,
                name: req.body.name,
                profileImage:'',
                first_name : req.body.name.split(" ")[0],
              
              });
              user
                .save()
                .then(result => {
                   
                    const payload = {
                        email: result.email,
                        id: result._id,
                        name: result.name,
                        first_name: result.first_name,
                        profileImage:result.profileImage,
                    }
                    //sign token
                    jwt.sign(
                     payload ,
                     process.env.JWT_KEY,
                    
                     (err, token)=>{
                         res.json({
                             success: true,
                             token:  token
                         })
                     }
                 );
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                  });
                });
            }
          });
        }
      });
  });
  

  router.post("/login", (req, res, next) => {

    const {errors, isValid } = validateLogin(req.body)
    if(!isValid){
        
         return res.status(400).json(errors)
    }

    User.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length < 1) {
           
                errors.email = 'Email not found! Please go back and register.'
                return res.status(404).json(errors) 
            
        }
        bcrypt.compare(req.body.password, user[0].password
          ).then(
              isMatched=> {
                if (isMatched) {
                    
                  const payload = {
                    
                      email: user[0].email,
                      id: user[0].id,
                      profileImage:user[0].profileImage,
                        name: user[0].name,
                        first_name: user[0].first_name,
                        
                  }
                  //sign token
                  jwt.sign(
                   payload ,
                   process.env.JWT_KEY,
                  (err, token)=>{
                       res.json({
                           success: true,
                           token:  token
                       })
                   }
               );
              }
              else{
                errors.password= 'Email and password pair is incorrect'
                return res.status(400).json(errors)
            }
              }
           
          ).catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
  
router.get('/current',
  passport.authenticate('jwt', {session: false}),
     (req, res)=>{
         console.log(req.user)
         res.json({
             id: req.user.id,
             name: req.user.name,
             email: req.user.email
          
         })
     }
)



router.delete('/user' , passport.authenticate('jwt', {session: false}), (req, res)=> {
    User.findOneAndDelete({_id: req.user.id})
    .then(()=>{
       
        Profile.findOneAndDelete({ userdata: req.user.id })
        .then(()=> {
            Post.findOneAndDelete({userdata:req.user.id})
            .then(
                ()=> res.json({ success: 'true' }))
        })
        
    }).catch(err=> res.status(500).json({message: 'Something went wrong!'}))
})
















module.exports = router;