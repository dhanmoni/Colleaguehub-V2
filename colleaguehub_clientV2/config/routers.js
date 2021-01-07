import React from 'react'
import { Text, View, Image } from 'react-native'
import {createMaterialTopTabNavigator,createTabNavigator,createBottomTabNavigator, createSwitchNavigator, createStackNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import HomeScreen from '../MainScreenComponent/HomeScreen';
import SearchScreen from '../MainScreenComponent/SearchScreen';
import UserScreen from '../MainScreenComponent/UserScreen';
import UserScreen2 from '../MainScreenComponent/UserScreen2';

import ProfileItem from '../profiles/profileItem'
import StoryScreen from '../MainScreenComponent/StoryScreen'

import SignUpPage from '../AuthScreenComponent/SignUpPage'
import CreateProfile1 from '../AuthScreenComponent/CreateProfile1'
import CreateProfile2 from '../AuthScreenComponent/CreateProfile2'

import RegisterPage from '../AuthScreenComponent/RegisterPage'
import UploadAvatar from '../AuthScreenComponent/UploadAvatar'
import LoginPage from '../AuthScreenComponent/LoginPage'

import PostScreen from '../PostActionScreenComponent/PostScreen'
import CommentPage from '../PostActionScreenComponent/CommentPage'
import LikesPage from '../PostActionScreenComponent/LikesPage'

import EditProfile from '../SettingsRelatedScreenComponent/editProfile'
import NotificationSetting from '../SettingsRelatedScreenComponent/notificationSetting'
import UpgradetoPro from '../SettingsRelatedScreenComponent/upgradetoPro'
import BlockedUser from '../SettingsRelatedScreenComponent/BlockedUser'
import AccountPage from '../SettingsRelatedScreenComponent/AccountPage'
import SettingPage from '../SettingsRelatedScreenComponent/settingsPage'
import LinearGradient from 'react-native-linear-gradient';




export const UserStack = createStackNavigator(
  {
  User:{
    screen:UserScreen2
  },
  Settings:{
    screen: SettingPage
    
  },
  EditProfile:{
    screen: EditProfile
  },
  NotificationSetting:{
    screen: NotificationSetting
  },
  UpgradetoPro:{
    screen:UpgradetoPro
  },
  BlockedUser:{
    screen:BlockedUser
  },
  AccountPage:{
    screen:AccountPage
  }
  
}
)

UserStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

export const StoryStack = createStackNavigator(
  {
  StoryScreen:{
    screen:StoryScreen
  },
  PostScreen:{
    screen: PostScreen
    
  },
  CommentPage:{
    screen:CommentPage
  },
  LikesPage: {
    screen: LikesPage
  }
  
}
)

StoryStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

export const LoginPageTab = createSwitchNavigator({
  Login: {
    screen: SignUpPage
  },
  RegisterPage:{
    screen:RegisterPage
  },
  LoginPage:{
    screen: LoginPage
  }
 
})

export const CreatePropfilePage = createSwitchNavigator({
  
  CreateProfile1: {
    screen: CreateProfile1
  },
  CreateProfile2: {
    screen: CreateProfile2
  },
  UploadAvatar:{
    screen: UploadAvatar
  }
 
})


export const HomeStack = createStackNavigator(
  {
  HomeScreen:{
    screen:HomeScreen
  },
  ProfileItem:{
    screen: ProfileItem
    
  },
  
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
)
HomeStack.navigationOptions = ({ navigation }) => {
 
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};


 export const Tabs = createBottomTabNavigator(
     {



     

      Story: { 
        screen: StoryStack,
        navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon:
          ({ focused }) => (
            focused ?
            
            <Icon name="home"  size={33} style={{}} color="#0073ff"/>
            :
            <Icon name="home"  size={30} style={{}} color="#808080" />
          )
      },
      
      },
      
     
    
      Home: { 
        screen: HomeStack,
        navigationOptions: {
        tabBarLabel: 'User',
        tabBarIcon:
          ({ focused }) => (
            focused ?
            
            <FontAwesome5 name="user-friends"  size={29} style={{}} color='#0073ff' />
            :
            (<FontAwesome5 name="user-friends"  size={25} style={{}} color="#808080" />)
          )
      },
      },
        
         
          Search:{
            screen: SearchScreen,
            navigationOptions: {
              tabBarLabel: 'Search',
              
              tabBarIcon:
              ({ focused }) => (
                focused ?
           
            <Icon name="search"  size={29} style={{}} color='#0073ff' />
            :  <Icon name="search"  size={25} style={{}} color="#808080" />
              )
               
           },
           },
     
           User: { 
            screen:UserStack,
              navigationOptions: {
              tabBarLabel: 'User',
             
              tabBarIcon:
              ({ focused }) => (
                focused ?
          
            <FontAwesome5 name="user-alt"  size={25} style={{}} color='#0073ff' />
            :
                <FontAwesome5 name="user-alt"  size={22} style={{}} color="#808080" />
              )
            },
            
            },
  
         
         
          
 },
 
 {
        
    tabBarPosition: 'bottom',
    tabBarOptions: {
      
       showLabel: false,
       showIcon: true,
       style:{
        backgroundColor: '#fff',
       
        padding: 0, margin:0, 
        
       },
       tabStyle: {
        margin: 0,
        padding:0
      },
       iconStyle: {
       
        padding:0},
       indicatorStyle:{
           opacity:0
       }
    }
 }

 ) 

//  <View style={{alignItems:'center',borderWidth:1.5, borderColor:'#fff', justifyContent:'center',backgroundColor:'#002463', borderRadius:25, height:50, width:50,position:'absolute'}}>
                //     
                // </View>

 