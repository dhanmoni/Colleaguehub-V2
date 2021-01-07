
import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity,ActivityIndicator,ToastAndroid, Image, Dimensions,ImageBackground,StatusBar, ScrollView, Button, Alert, AsyncStorage, FlatList, NetInfo, Easing, Animated} from 'react-native';
import {connect} from 'react-redux'

import Icon from 'react-native-vector-icons/FontAwesome5'

import LinearGradient from 'react-native-linear-gradient';
const HEIGHT_MIN = Dimensions.get('window').height;
const WIDTH_MIN = Dimensions.get('window').width;

class blockedUser extends Component {
    static navigationOptions = {
        header: null, 
    
      }
  render() {
    let bgcolor;
    let textcolor;
    let cardcolor;
    let iconcolor;
    
    if(this.props.auth.nightmode == true){
      bgcolor= '#303030'
      textcolor= '#fff'
      cardcolor='#424242'
      iconcolor='#fff'
    } else {
      bgcolor= '#fff'
      textcolor= '#333'
      cardcolor='#fff'
      iconcolor='#002463'
    }
    return (
        <View style={{flex: 1,
            backgroundColor:bgcolor,
           }}>
          
          <View style={{backgroundColor:'transparent',flexDirection: 'row', height: HEIGHT_MIN/10, width:WIDTH_MIN, borderBottomLeftRadius:15, borderBottomRightRadius:15,overflow:'hidden'}}>
           <LinearGradient  colors={['#00c6ff', '#0073ff']} style={{width: 100 + '%', height: 100 +'%',}}  start={{x: 0.1, y: 0.1}} end={{x: 0.5, y: 0.5}} >
             <View style={{flexDirection:'row', alignItems:'center',width: 100 + '%', height: 100 +'%',justifyContent:'center', paddingHorizontal:20}}>
             <Icon style={{position:"absolute",marginTop:20, left:20, zIndex:100000}} name="chevron-circle-left" size={26} color="#fff" onPress={()=> this.props.navigation.navigate('Settings')}/>
             <View> 
             <Text numberOfLines={1} style={{fontSize:24, fontFamily:'Quicksand-Bold',textAlign:'center' ,color:'#fff',}}>Blocked Users</Text>
             </View>
           
                 
             </View>
            
   
           </LinearGradient> 
           </View>
           <View style={{backgroundColor:bgcolor}}>

           </View>
      </View>
    )
  }
}
const mapStateToProps = (state)=> {
    return {
      auth: state.auth
    }
  }
  

const styles = StyleSheet.create({})

export default connect(mapStateToProps,{})(blockedUser)