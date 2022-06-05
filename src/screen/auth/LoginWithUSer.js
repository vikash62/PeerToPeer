import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  ImageBackground,
  ScrollView, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Button , Image} from 'react-native-elements';
const WIDTH = Dimensions.get('window').width;
import rem from '../../style/scale';
import { Actions } from 'react-native-router-flux';
const HEIGHT = Dimensions.get('window').height;
export default  class LoginWithUser extends Component {
  
  render() {
    return (
      <ImageBackground 
      style={{height:HEIGHT*1,width:WIDTH*1}}
      source={require('../../image/background.png')}>
      <View style={styles.container}>
        <ScrollView style={{marginBottom:30}}>
     <View style={{height:WIDTH*1,width:'100%'}}>
 {/* <Button
 buttonStyle={styles.loginWithEmail}
 titleStyle={{color:'#000',paddingRight:0,}}
 Image={
   <Image
   style={{height:50,width:50}}
   source={require('../../image/background.png')}
   />
 }
 title='Login In With Email'
 /> */}
 <TouchableOpacity style={styles.loginWithEmail} onPress={()=>{Actions.loginForm()}}>
 <Image
   style={{height:18,width:18}}
   source={require('../../image/email.png')}
   />
   <Text style={{fontSize:16,paddingLeft:10,color:'#424242'}}>Login in with Email</Text>
 </TouchableOpacity>
     <View style={{flexDirection:'row'}}>
<View style={{width:'35%',borderBottomWidth:1,borderColor:'#fff',marginTop:rem*4,marginLeft:rem*3}}></View>
<Text style={styles.orText}>   OR</Text>
<View style={{width:'35%',borderBottomWidth:1,borderColor:'#fff',marginTop:rem*4,marginLeft:rem*3.5}}></View>
     </View>

     </View>
     {/* <Button
 buttonStyle={styles.Gmail}
 titleStyle={{color:'#000',paddingRight:0,}}
 title='Sign In With Google'
 /> */}
  <TouchableOpacity style={styles.Gmail}>
 <Image
   style={{height:25,width:25}}
   source={require('../../image/google-plus.png')}
   />
   <Text style={{fontSize:16,paddingLeft:10,color:'#424242',fontWeight:'normal'}}>Sign In With Google</Text>
 </TouchableOpacity>
 <Text onPress={()=>{Actions.Login()}}
  style={styles.newhere}>New here? Create an account</Text>
  </ScrollView>
      </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container: {
flex:1,
height:'100%'
  },
loginWithEmail:{
  backgroundColor:'#fff',
  width:'70%',
marginTop:rem*20,
marginLeft:rem*5,
height:Math.max(40,0),
justifyContent:'center',
alignItems:'center',
flexDirection:'row'
},
orText:{
position:'absolute',
top:rem*3.3,
left:rem*13.7,
  color:'#fff'
},
Gmail:{
  backgroundColor:'#fff',
  width:'70%',
marginTop:rem*20,
marginLeft:rem*5,
height:Math.max(40,0),
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
 marginTop:rem*2,
marginLeft:rem*5
},
newhere:{
  color:'#fff',
  alignSelf:'center',
  alignContent:"center",
  paddingLeft:10,
  paddingTop:rem*17
}
 
});



