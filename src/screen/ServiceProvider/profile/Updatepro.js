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
// import ServiceprofileDrawer from './ServiceprofileDrawer'
var tempCheckValues = [];


  class Updatepro extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      name:"", 
      email: "",
      city:"",
      password: "",
      buildingno:"",
      buildingname:"",
      street:"",
      locality:"",
      state:"",
      country:"",
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
buildingnoValidation=(text)=>{
    this.setState({
      buildingno:text
    })
  }
  buildingnameValidation=(text)=>{
    this.setState({
      buildingname:text
    })
  }
  streetValidation=(text)=>{
    this.setState({
      street:text
    })
  }
  localityValidation=(text)=>{
    this.setState({
      locality:text
    })
  }
  stateValidation=(text)=>{
    this.setState({
      state:text
    })
  }
  countryValidation=(text)=>{
    this.setState({
      country:text
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

    const{name,email,password,phone,address,city,zipcode,buildingname,buildingno,street,
    locality,state,country} = this.state;
    if(this.state.name===''){
      this.setState({
        msg:'Please enter the name'
      })
    }
    else if(this.state.name!==''){
      this.setState({
        msg:''
      })
    }
    if(this.state.buildingno===''){
        this.setState({
          msg7:'Please enter building no'
        })
      }
      else if(this.state.buildingno!==''){
        this.setState({
          msg7:''
        })
      }
      if(this.state.buildingname===''){
        this.setState({
          msg8:'Please enter the building name'
        })
      }
      else if(this.state.buildingname!==''){
        this.setState({
          msg8:''
        })
      }
      if(this.state.street===''){
        this.setState({
          msg9:'Please enter Street address'
        })
      }
      else if(this.state.street!==''){
        this.setState({
          msg9:''
        })
      }
      if(this.state.locality===''){
        this.setState({
          msg10:'Please enter locality'
        })
      }
      else if(this.state.locality!==''){
        this.setState({
          msg10:''
        })
      }
      if(this.state.state===''){
        this.setState({
          msg11:'Please enter state'
        })
      }
      else if(this.state.state!==''){
        this.setState({
          msg11:''
        })
      }
      if(this.state.country===''){
        this.setState({
          msg12:'Please enter country name'
        })
      }
      else if(this.state.country!==''){
        this.setState({
          msg12:''
        })
      }
    if(this.state.zipcode===''){
      this.setState({
        msg6:'Please enter zipcode'
      })
    }
    else if(this.state.zipcode!==''){
      this.setState({
        msg6:''
      })
    }
    if (this.state.city===''){
      this.setState({
        msg5:'Please fill city'
      })
    }
    else if(this.state.city!==''){
      this.setState({
        msg5:''
      })
    }
    
    if (this.state.password===''){
      this.setState({
        msg4:'Please fill full address'
      })
    }
    else if(this.state.password!==''){
      this.setState({
        msg4:''
      })
    }
  
    if(this.state.address===''){
      this.setState({
        msg3:'Please enter full address'
      })
    }
    else if(this.state.address!==''){
      this.setState({
        msg3:''
      })
    }
    if(reg.test(this.state.email)===false){
      this.setState({
        msg1:'Please enter valid email'
      })
    }
    else if(reg.test(this.state.email)===true){
      this.setState({
        msg1:''
      })
    }
  
    if (phon.test(this.state.phone)===false){
      this.setState({
        msg2:'Please enter contact number'
      })
    }
    else if(phon.test(this.state.phone)===true){
      this.setState({
        msg2:''
      })
    }
  }
 
  render() {
    return (
      <ImageBackground 
      style={{flex:1}}
      source={require('../../../image/background.png')}>
        <ScrollView style={{marginBottom:30}}>
      <View style={styles.container}>
        {/* <ServiceprofileDrawer/> */}
    <Text style={styles.compleateProfileText}>Update Profile</Text>
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
      <Text style={{color:"white",fontSize:14,textAlign:"center"}}>{this.state.msg}</Text>
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
      <Text style={{color:"white",fontSize:14,textAlign:"center"}}>{this.state.msg1}</Text>
             <TextInput
       style={styles.email}
       placeholder='Mobile No'
       placeholderTextColor="#fff"
multiline={true}
underlineColorAndroid='transparent'
{...this.props}
ref={this.getRef} 
onChangeText={
  this.phonevalidation
}
      />
       <Text style={{color:"white",fontSize:14,textAlign:"center"}}>{this.state.msg2}</Text>
     
     <Text style={{color:"white",paddingTop:18,paddingLeft:10,fontWeight:"bold"}}> Address To Contact</Text>
     <View style={{paddingLeft:30}}>
     <TextInput
       style={styles.email}
       placeholder='Building No'
       placeholderTextColor="#fff"
multiline={true}
underlineColorAndroid='transparent'
{...this.props}
ref={this.getRef}
 onChangeText={this.buildingnoValidation}
   
      />

<Text style={{color:"white",fontSize:14,textAlign:"center"}}>{this.state.msg7}</Text>
 
<TextInput
       style={styles.email}
       placeholder='Building Name'
       placeholderTextColor="#fff"
multiline={true}
underlineColorAndroid='transparent'
{...this.props}
ref={this.getRef}
 onChangeText={this.buildingnameValidation}
   
      />

<Text style={{color:"white",fontSize:14,textAlign:"center"}}>{this.state.msg8}</Text>

<TextInput
       style={styles.email}
       placeholder='Street Address'
       placeholderTextColor="#fff"
multiline={true}
underlineColorAndroid='transparent'
{...this.props}
ref={this.getRef}
 onChangeText={this.streetValidation}
   
      />
<Text style={{color:"white",fontSize:14,textAlign:"center"}}>{this.state.msg9}</Text>
<TextInput
       style={styles.email}
       placeholder='Locality'
       placeholderTextColor="#fff"
multiline={true}
underlineColorAndroid='transparent'
{...this.props}
ref={this.getRef}
 onChangeText={this.localityValidation}
   
      />

<Text style={{color:"white",fontSize:14,textAlign:"center"}}>{this.state.msg10}</Text>

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

<Text style={{color:"white",fontSize:14,paddingLeft:70}}>{this.state.msg6}</Text>
</View>
<View style={{flexDirection:'row',alignSelf:'center'}}>
<TextInput
       style={styles.City}
       placeholder='State'
       placeholderTextColor="#fff"
multiline={true}
underlineColorAndroid='transparent'
{...this.props}
ref={this.getRef}
onChangeText={this.stateValidation}
      />

<TextInput
       style={styles.zipcode}
       placeholder='Country'
       placeholderTextColor="#fff"
multiline={true}
underlineColorAndroid='transparent'
{...this.props}
ref={this.getRef}
onChangeText={this.countryValidation}
      />
</View>

<View style={{flexDirection:"row"}}>
<Text style={{color:"white",fontSize:14,paddingLeft:20}}>{this.state.msg11}</Text> 

<Text style={{color:"white",fontSize:13,paddingLeft:30}}>{this.state.msg12}</Text>
</View>
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
      title='BROWSE'
      titleStyle={{color:'#454545',fontWeight:'100',fontSize:15}}
      buttonStyle={styles.upload}
      />
</View>
<View style={{flexDirection:'row',alignSelf:'center'}}>
<TextInput
       style={styles.uploadProfile1}
       placeholder='Upload Id Proof with Address'
       placeholderTextColor="#fff"
multiline={true}
underlineColorAndroid='transparent'
{...this.props}
ref={this.getRef}
      />
      <Button
      title='BROWSE'
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
  fontSize:19,
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
   fontSize:14.6,
   marginTop:rem*3,
   fontWeight:'normal',
  //  marginRight:rem*1.5
  marginLeft:rem*3
},
uploadProfile1:{
    width:'60%',
    borderBottomWidth:0.8,
    borderColor:'#fff',
    paddingVertical: 0,
    alignSelf:'center',
     fontSize:14.5,
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

export default Updatepro;