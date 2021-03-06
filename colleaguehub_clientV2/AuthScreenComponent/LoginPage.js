import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {signUp_User, clearError, loginUser, setLoading} from '../redux/actions/authAction'
import LinearGradient from 'react-native-linear-gradient';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
import { Madoka } from 'react-native-textinput-effects';
import {connect } from 'react-redux'




class LoginPage extends Component {
   
    constructor(){
        super();
        this.state={
          email:'',
           password:'',
        }
      }
      


   
       
  render() {
    const {errors} = this.props.auth
   
    return (
      <View style={{position:'relative'}}>
        <LinearGradient  colors={['#00A9FE', '#0068E7']} style={{width: 100 + '%', height: 100 +'%',overflow:'hidden'}} start={{x: 0.2, y: 0.2}} end={{x: 0.65, y: 0.65}} >
        <ScrollView>
           <View style={{flex: 1,marginTop:30, paddingHorizontal:10, alignItems:'center',  }}>
           <Text style={{fontSize:28, 
            color:'white',
            fontFamily:'Quicksand-Bold',
            marginTop:20, marginBottom:20}}>
               Login
          </Text>
              <View style={{width:100+'%', marginTop:10}}>

              <Madoka
                    label={'Email'}
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.email}                
                    borderColor={'#fff'}
                    labelStyle={{ color: '#fff' }}
                    inputStyle={{ color: '#fff' }}
                />
              </View>
              {
                errors.email == null ? (
                  <View></View>
                ): (
                  <View style={{width:100+'%', backgroundColor: 'rgba(255, 0, 0, 0.6)', borderRadius:5}}>
                    <Text style={{color:'#fff',padding:10, textAlign:'center'}}>{errors.email}</Text>
                  </View>
                )
              }
              <View style={{width:100+'%', marginTop:10}}>
              <Madoka
                    label={'Password'}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}     
                    secureTextEntry={true}            
                    borderColor={'#fff'}
                    labelStyle={{ color: '#fff' }}
                    inputStyle={{ color: '#fff' }}
                />
              </View>
              {
                errors.password == null ? (
                  <View></View>
                ): (
                  <View style={{width:100+'%', backgroundColor: 'rgba(255, 0, 0, 0.6)', borderRadius:5}}>
                    <Text style={{color:'#fff',padding:10, textAlign:'center'}}>{errors.password}</Text>
                  </View>
                )
              }
            
              <View style={{flexDirection:'row',marginTop:WIDTH/5,padding:10, justifyContent:'space-between', width:92+'%'}}>
              <View style={{}}>
              <View style={{opacity:1,width: 60,borderRadius:30, height:60,borderColor:'#fff', borderWidth:2,alignItems:'center', justifyContent:'center' }}>
                <TouchableOpacity onPress={()=>{
                      this.props.navigation.navigate('Login')
                      this.props.clearError()
                      }} style={{width:100+'%', height:100+'%',alignItems:'center', justifyContent:'center'}}>
                     <FontAwesome name="chevron-left" size={30} color="#fff"/>
                 </TouchableOpacity>
                </View>
              </View>

               <View>
             <View style={{opacity:1,width: 60,borderRadius:30, height:60,borderColor:'#fff', borderWidth:2,alignItems:'center', justifyContent:'center' }}>
              <TouchableOpacity onPress={()=>{
                  this.props.loginUser(this.state)
                  // this.props.setLoading()
                  // this.props.clearError()
                 
                   }} style={{width:100+'%', height:100+'%',alignItems:'center', justifyContent:'center'}}>
                  <FontAwesome name="chevron-right" size={30} color="#fff"/>
              </TouchableOpacity>
          </View>
          </View>
              
              </View>
            
            
                    
          </View>
          </ScrollView>
          </LinearGradient>
      </View>
    )
  }
}

const mapStateToProps = (state)=> {
    return {
      auth: state.auth
    }
  }

export default connect(mapStateToProps, {signUp_User, clearError, loginUser, setLoading})(LoginPage)

const styles = StyleSheet.create({ 
     image:{
    height: HEIGHT/3.6,
    width:HEIGHT/3.6,
    borderRadius:HEIGHT/2,
    borderColor:'white',
    borderWidth:2
  },

})