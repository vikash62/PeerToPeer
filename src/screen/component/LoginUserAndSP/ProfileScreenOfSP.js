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
import rem from '../../../style/scale';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { Button ,} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Checkbox from 'react-native-custom-checkbox';
var tempCheckValues = [];


  class ProfileScreenOfSP extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      name:"", 
      email: "",
      city:"",
      password: "",
      isLoading: true,
      checkBoxChecked: [],
      isCheck: false,
      zipcode:""
      
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

phonevalidation=(text)=>{
  this.setState({
    phone:text
  })
}
passwordValidatio=(text)=>{
  this.setState({
    password:text
  })
}
cityValidation=(text)=>{
  this.setState({
    city:text
  })
}
zipcodeValidation=(text)=>{
  this.setState({
    zipcode:Number
  })
}


  myfun=()=>
  {
    const phon = /^[0]?[789]\d{9}$/;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   //var passw = /^(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

   let phones=phon.test(this.state.phone);
   let emails = reg.test(this.state.email);

    const{name,email,phone,address,city,zipcode} = this.state;
    
    if(this.state.name=='' || emails=='' || phones=='' || city=='' || zipcode=='' ||address=='')
    { 

    if(this.state.name==''){
      this.setState({
        msg:'Please enter the name'
      })
    }
    else {
      this.setState({
        msg:''
      })
    }
    if(this.state.zipcode==''){
      this.setState({
        msg6:'Please enter zipcode'
      })
    }
    else {
      this.setState({
        msg6:''
      })
    }
    if (this.state.city==''){
      this.setState({
        msg5:'Please fill city'
      })
    }
    else {
      this.setState({
        msg5:''
      })
    }
    
    if (this.state.password==''){
      this.setState({
        msg4:'Please fill full address'
      })
    }
    else {
      this.setState({
        msg4:''
      })
    }
  
    if(this.state.address==''){
      this.setState({
        msg3:'Please enter full address'
      })
    }
    else {
      this.setState({
        msg3:''
      })
    }
    if (emails==''){
      this.setState({
        msg1:'Please enter valid email'
      })
    }
    else {
      this.setState({
        msg1:''
      })
    }
  
    if (phones==''){
      this.setState({
        msg2:'Please enter valid contact number'
      })
    }
    else {
      this.setState({
        msg2:''
      })
    }
  }
  else{
    Actions.home()
  }
}
  render() {
    return (
      <ImageBackground 
      style={{flex:1}}
      source={require('../../../image/background.png')}>
        <ScrollView style={{marginBottom:30}}>
      <View style={styles.container}>
    <Text style={styles.compleateProfileText}>Complete Profile</Text>
    <View style={{width:'100%'}}>
      <TextInput
       style={styles.name}
       placeholder='Name'
       placeholderTextColor="#fff"
multiline={true}
underlineColorAndroid='transparent'
{...this.props}
ref={this.getRef}
onChangeText={
  this.nameValidation
}
      />
      <Text style={{color:"white",fontSize:14,paddingLeft:95}}>{this.state.msg}</Text>
       <TextInput
       style={styles.email}
       placeholder='Email'
       placeholderTextColor="#fff"
multiline={true}
underlineColorAndroid='transparent'
{...this.props}
ref={this.getRef}
onChangeText={
  this.emailvalidation
 }
      />
      <Text style={{color:"white",fontSize:14,paddingLeft:90}}>{this.state.msg1}</Text>
             <TextInput
       style={styles.email}
       placeholder='Phone Contact'
       placeholderTextColor="#fff"
multiline={true}
underlineColorAndroid='transparent'
{...this.props}
ref={this.getRef}
onChangeText={
  this.phonevalidation
}
      />
       <Text style={{color:"white",fontSize:14,paddingLeft:80}}>{this.state.msg2}</Text>
     <TextInput
       style={styles.email}
       placeholder='Address'
       placeholderTextColor="#fff"
multiline={true}
underlineColorAndroid='transparent'
{...this.props}
ref={this.getRef}
 onChangeText={this.passwordValidatio}
   
      />

<Text style={{color:"white",fontSize:14,paddingLeft:90}}>{this.state.msg4}</Text>
 
<View style={{flexDirection:'row',alignSelf:'center'}}>
<TextInput
       style={styles.City}
       placeholder='City'
       placeholderTextColor="#fff"
multiline={true}
underlineColorAndroid='transparent'
{...this.props}
ref={this.getRef}
onChangeText={this.cityValidation}

      />

<TextInput
       style={styles.zipcode}
       placeholder='Zipcode'
       placeholderTextColor="#fff"
multiline={true}
underlineColorAndroid='transparent'
{...this.props}
ref={this.getRef}
onChangeText={this.zipcodeValidation}
      />
</View>
<View style={{flexDirection:"row"}}>
<Text style={{color:"white",fontSize:14,paddingLeft:20}}>{this.state.msg5}</Text> 

<Text style={{color:"white",fontSize:14,paddingLeft:90}}>{this.state.msg6}</Text>
</View>
<View style={{flexDirection:'row',alignSelf:'center'}}>
<TextInput
       style={styles.uploadProfile}
       placeholder='Upload Profile Picture'
       placeholderTextColor="#fff"
multiline={true}
underlineColorAndroid='transparent'
{...this.props}
ref={this.getRef}
      />
      <Button
      title='Upload'
      titleStyle={{color:'#454545',fontWeight:'100',fontSize:15}}
      buttonStyle={styles.upload}
      />
</View>
    </View>
    

      </View>
      <View style={{}}>
      <Button  onPress={this.myfun}
      title='Submit'
      titleStyle={{color:'#454545',fontWeight:'100',fontSize:15}}
      buttonStyle={styles.submit}
      />
      </View>
      </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
   container:{
        alignItems:'center'
    },
compleateProfileText:{
  fontSize:17,
  fontWeight:'bold',
  paddingTop:rem*2.5,
  color:'#fff'
},
name:{
  width:'95%',
  borderBottomWidth:0.9,
  borderColor:'#fff',
  paddingVertical: 0,
  alignSelf:'center',
   fontSize:15,
   marginTop:rem*1,
   fontWeight:'normal',
},
email:{
  width:'95%',
  borderBottomWidth:0.8,
  borderColor:'#fff',
  paddingVertical: 0,
  alignSelf:'center',
   fontSize:15,
   marginTop:rem*3,
   fontWeight:'normal'
},
City:{
  width:'40%',
  borderBottomWidth:0.8,
  borderColor:'#fff',
  paddingVertical: 0,
  alignSelf:'center',
   fontSize:15,
   marginTop:rem*3,
   fontWeight:'normal',
   marginRight:rem*1.5
},zipcode:{
  width:'45%',
  borderBottomWidth:0.8,
  borderColor:'#fff',
  paddingVertical: 0,
  alignSelf:'center',
   fontSize:15,
   marginTop:rem*3,
   fontWeight:'normal',
   marginLeft:20
},
uploadProfile:{
  width:'60%',
  borderBottomWidth:0.8,
  borderColor:'#fff',
  paddingVertical: 0,
  alignSelf:'center',
   fontSize:15,
   marginTop:rem*3,
   fontWeight:'normal',
  //  marginRight:rem*1.5
  marginLeft:rem*3
},
upload:{
  width:'65%',
  height:Math.max(35,0),
  backgroundColor:'#e6e8e7',
  marginTop:rem*3,
   marginLeft:rem*1.5,
   borderRadius:4
},
submit:{
  width:'30%',
  height:Math.max(35,0),
  backgroundColor:'#e6e8e7',
  marginTop:rem*4,
alignSelf:'center',
borderRadius:4,
}
});

export default ProfileScreenOfSP;