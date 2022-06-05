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


export default  class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
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

  myfun=()=>
  {
   
    var passw = /^(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    const{email} = this.state;
    
    if(passw.test(this.state.password)===false){
      this.setState({
        msg1:'please enter valid Password'
      })
    }
    else if(passw.test(this.state.password)===true){
      this.setState({
        msg1:''
      })
    }

    if (passw.test(this.state.password)===false){
      this.setState({
        msg2:'Please use alpha-numberic password with uppercase'
      })
    }
    else if(passw.test(this.state.password)===true){
      this.setState({
        msg2:''
      })
       //Actions.home();
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
    <Text style={styles.welcomeback}>Reset your password</Text>
 
    <View style={{flex:1}}>
   
    <TextInput
placeholder='Enter old Password'
placeholderTextColor="#fff"
style={styles.Email}
multiline={true}
underlineColorAndroid='transparent'
onChangeText={this.passwordValidatio}
/>
<Text style={{color:"white",fontSize:13,textAlign:"center"}}>{this.state.msg1}</Text>
<TextInput
placeholder='Enter new Password'
placeholderTextColor="#fff"
style={styles.Email}
multiline={true}
underlineColorAndroid='transparent'
onChangeText={this.passwordValidatio}
/>
<Text style={{color:"white",fontSize:13,textAlign:"center"}}>{this.state.msg2}</Text>
<TextInput
placeholder='Re-enter new password'
placeholderTextColor="#fff"
style={styles.Email}
multiline={true}
underlineColorAndroid='transparent'
onChangeText=
{ this.emailvalidation}
/>
<Button
     buttonStyle={styles.signiinButtin}
     title='Submit '
     titleStyle={{color:'#000'}}
     onPress={this.myfun}
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
  marginTop:rem*3,
  alignSelf:'center',
  backgroundColor:'#fff'
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



