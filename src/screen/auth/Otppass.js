import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import rem from '../../style/scale'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { Button ,} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Checkbox from 'react-native-custom-checkbox';

var tempCheckValues = [];


export default  class Forgetpass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icEye: 'visibility-off',
      isPassword: true,
      name:"", 
      email: "",
      password: "",
      otp:"",
      isLoading: true,
      emailError:"",
      passwordError:"",
      checkBoxChecked: [],
      isCheck: false,
      msg2:'',
      msg1:'',
      msg6:''
      
    }
  }
nameValidation=(text)=>{
  this.setState({
    name:text
  })
}
emailvalidation=(text)=>{
  this.setState({
    email:text
  })
}
passwordValidatio=(text)=>{
  this.setState({
    password:text
  })
}
otpValidation=(Number)=>{
  this.setState({
    otp:Number
  })
}
  myfun=()=>
  {
    
     const phon = /^[0]?[789]\d{9}$/;
     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     var passw = /^(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
     let Passwords=passw.test(this.state.password);
     
     const{email,password,otp} = this.state;
      if(this.state.otp=='' || Passwords=='')
 { 
     if(this.state.otp==''){
         this.setState({
           msg6:'Please Enter Otp'
         })   
            
  }else{
    this.setState({
      msg6:''
    })
  }

  if(Passwords==''){
    this.setState({
      msg2:'Please use alpha-numberic password with uppercase'
    })
  }
  else{
    this.setState({
      msg2:''
    })
  }
 
}
else{
   Actions.home()
       
}
  }
  checkClicked = async () => {
    await this.setState(prevState => ({
      isCheck: !prevState.isCheck,
    })); // setState is async function.

    // Call function type prop with return values.
    this.props.clicked && this.props.clicked(this.props.value, this.state.isCheck);
  }
  changePwdType = () => {
    const { isPassword } = this.state;
    // set new state value
    this.setState({
      icEye: isPassword ? "visibility" : "visibility-off",
      isPassword: !isPassword,
    });

  };
  checkBoxChanged(id, value) {

    this.setState({
      checkBoxChecked: tempCheckValues
    })

    var tempCheckBoxChecked = this.state.checkBoxChecked;
    tempCheckBoxChecked[id] = !value;

    this.setState({
      checkBoxChecked: tempCheckBoxChecked
    })
  
  }

  render() {
    const products = [{
      id: 1,
      text:'Email me detail and recomdation'
    }];
    const {  isPassword } = this.state;
    
    return (
      <ImageBackground 
      style={{height:HEIGHT*1,width:WIDTH*1}}
      source={require('../../image/background.png')}>
      <View style={styles.container}>
        <ScrollView style={{marginBottom:30}}>
    <Text style={styles.welcomeback}>Confirmation password</Text>
 
    <View style={{flex:1}}>
    
    <TextInput
placeholder='Prease enter OTP'
placeholderTextColor="#fff"
style={styles.Email}
multiline={true}
underlineColorAndroid='transparent'
onChangeText={this.otpValidation}

/>
<Text style={{color:"white",fontSize:13,textAlign:"center"}}>{this.state.msg6}</Text>
<TextInput
placeholder='Please enter new Password'
placeholderTextColor="#fff"
style={styles.Email}
multiline={true}
underlineColorAndroid='transparent'
onChangeText={this.passwordValidatio}

/>
<Text style={{color:"white",fontSize:13,textAlign:"center"}}>{this.state.msg2}</Text>
    <TextInput
placeholder='Confirm Password'
placeholderTextColor="#fff"
style={styles.Email}
multiline={true}
underlineColorAndroid='transparent'

/>
 {/* <Text style={{color:"white",fontSize:13,textAlign:"center"}}>{this.state.msg1}</Text> */}
 
<Button
     buttonStyle={styles.signiinButtin}
     title='Submit '
     titleStyle={{color:'#000'}}
      onPress={this.myfun}
    // onPress={()=>{Actions.home()}}
     />
 
    
    </View>
  </ScrollView>
      </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container: {

  },
welcomeback:{
  fontSize:22,
  fontWeight:'bold',
  color:'#fff',
  paddingTop:rem*4,
  // paddingLeft:rem*10,
  alignSelf:'center'
},
signiinButtin:{
  width:'90%',
  marginTop:rem*2,
  alignSelf:'center',
  backgroundColor:'#fff'
},
forgotpass:{
  color:'#fff',
  paddingTop:rem*5,
  alignSelf:'center'
},
passwordHide:{
  width:30,
position:'absolute',
// position:'ate',
right:rem*2,
top:rem*3,
// bottom:0,
// left:0
// marginLeft:50
},
Email:{
  width:'90%',
  borderBottomWidth:0.6,
  borderBottomColor:'#fff',
  paddingVertical: 0,
  fontSize:rem*1.3,
  marginTop:rem*3,
  fontWeight:'normal',
  marginLeft:20
},
 
});



