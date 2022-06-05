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
  ScrollView,
  Pressable
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
      icEye: 'visibility-off',
      isPassword: true,
      name:"", 
      email: "",
      password: "",
      isLoading: true,
      emailError:"",
      passwordError:"",
      checkBoxChecked: [],
      isCheck: false,
      
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
  myfun=()=>
  {
    const phon = /^[0]?[789]\d{9}$/;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passw = /^(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    let passwords = passw.test(this.state.password)
    let emails = reg.test(this.state.email)
   

    const{name,email,password,phone} = this.state;
      if (this.state.emails=='' || passwords=='' || name=='' )

     {
    if(this.state.name==''){
      this.setState({
        msg:'Please enter name'
      })
    }
    else {
      this.setState({
        msg:''
      })
    }
    if(emails==''){
      this.setState({
        msg1:'Please enter valid email'
      })
    }
    else {
      this.setState({
        msg1:''
      })
    }
  
    if (passwords==''){
      this.setState({
        msg2:'Please use alpha-numberic password with uppercase'
      })
    }
    else {
      this.setState({
        msg2:''
      })
    }
  }
  else{
    Actions.profileScreenOfSp()
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
  // 
  }


  render() {
    const products = [{
      id: 1,
      text:'Email me detail and recomdation'
    }];
    // const [buttonPresses , setButtonPresses] = usestate(0);
    
    return (
   <ImageBackground    source={require('../../image/background.png')}
    style={styles.container}
   >
     <ScrollView style={{}}>
<View style={{alignItems:'center'}}>
<Text style={styles.createText}>Create  Account</Text>
    
<TextInput
placeholder={'Name'}
placeholderTextColor="#fff"
style={styles.name}
multiline={true}
underlineColorAndroid='transparent'
onChangeText={
    this.nameValidation
}
/>
<Text style={{color:"white",fontSize:14}}>{this.state.msg}</Text>
<TextInput
placeholder='Email'
placeholderTextColor="#fff"
style={styles.Email}
multiline={true}
underlineColorAndroid='transparent'
onChangeText={
 this.emailvalidation
}
/>
<Text style={{color:"white",fontSize:13}}>{this.state.msg1}</Text>
<TextInput
placeholder={'Password(Min 6 characters)'}
placeholderTextColor="#fff"
style={styles.Email}
multiline={true}
underlineColorAndroid='transparent'
secureTextEntry
//{...this.props}
//ref={this.getRef}
//secureTextEntry={isPassword}
onChangeText={this.passwordValidatio}
/>
<Text style={{color:"white",fontSize:13}}>{this.state.msg2}</Text>
<TouchableOpacity onPress={()=>{this.changePwdType()}} style={styles.passwordHide}>
              {this.state.isPassword ? 
              <Image
                style={{width: 22, height: 22}}
                source={require('../../image/visibility.png')}
              />
               :
               <Image
                style={{width: 22, height: 22,color:'#000'}}
                source={require('../../image/show.png')}
              />
              }
            </TouchableOpacity>
</View>
<View style={{marginTop:rem*2}}>
  <Text style={styles.iamA}>I'm a</Text>
  <View style={styles.selectContainer}>
    <View style={styles.buttonStyle}>
      <Pressable style={({pressed})=>[
        styles.userButton,
        {backgroundColor:pressed ? 'red':'white'},
        // styles.userButton,
      ]}>
  {/* //  title="User"
  //  buttonStyle={styles.userButton}
  //  titleStyle={{color:'#454545',fontWeight:'bold'}} */}
    <Text style={{color:'#454545',fontWeight:'bold',textAlign:"center",paddingTop:8}}> User</Text>
      </Pressable>
      <Text style={styles.orText}>- Or -</Text>
      {/* <Button 
   title="Service Provider"
   buttonStyle={ styles.spButton}
   titleStyle={{color:'#454545',fontWeight:'normal'}}
      /> */}
       <Pressable style={({pressed})=>[
        styles.userButton,
        {backgroundColor:pressed ? 'red':'white'},
        // styles.userButton,
      ]}>
  {/* //  title="User"
  //  buttonStyle={styles.userButton}
  //  titleStyle={{color:'#454545',fontWeight:'bold'}} */}
    <Text style={{color:'#454545',fontWeight:'bold',textAlign:"center",paddingTop:8}}> Serviceprovider</Text>
      </Pressable>
    </View>
  </View>
  <View style={{marginLeft:'5.2%',borderBottomWidth:0.2,borderBottomColor:'#fff',marginTop:rem*3,width:'90%'}}></View>
<View style={{marginTop:rem*2,flexDirection:'row'}}>
  <View style={{flexDirection:'column'}}>
<Text style={{color:'#e6e8e7',fontSize:rem*1.2,marginLeft:rem*1,fontWeight:'100'}}>Already have an</Text>
<Text style={{color:'#e6e8e7',fontSize:rem*1.2,marginLeft:rem*1,fontWeight:'100'}}>account ?</Text>
<Text style={{color:'#fff',fontSize:rem*1.4,marginLeft:rem*1,fontWeight:'bold'}} onPress={()=>{Actions.loginForm()}}>Login</Text>
</View>
<Button
   title="Create account"
   buttonStyle={ styles.createAccButton}
   titleStyle={{color:'#000'}}
   onPress={this.myfun}
   //  onPress={()=>{Actions.profileScreenOfSp()}}
      />
</View>
</View>
<View style={{alignItems:'center',marginTop:rem*3}}>
<Text style={{color:'#fff'}}>By clicking on 'Create account' you agree to our </Text>
<Text style={{color:'#fff',textDecorationLine:"underline"}}>terms of use and privacy policy </Text>
</View>

</ScrollView>
   </ImageBackground>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  createText:{
    fontSize:18,
    color:'#fff',
    paddingTop:rem*2,
  },
  name:{
    width:'90%',
    borderBottomWidth:0.6,
    borderBottomColor:'#fff',
    paddingVertical: 0,
    fontSize:rem*1.3,
    marginTop:rem*2,
    fontWeight:'normal'
  },
  Email:{
    width:'90%',
    borderBottomWidth:0.6,
    borderBottomColor:'#fff',
    paddingVertical: 0,
    fontSize:rem*1.3,
    marginTop:rem*2.5,
    fontWeight:'normal'
  },
  passwordHide:{
    position:'absolute',
    top:rem*18,
    left:rem*25
  },
  iamA:{
    color:'#fff',
    fontSize:rem*1.3,
    paddingLeft:'6%',
    fontWeight:'bold'
  },
  userButton:{
    width:rem*10.5,
    height:rem*2.7,
    marginLeft:rem*1.5,
    backgroundColor:'#e6e8e7',
    borderRadius:5
  },
  buttonStyle:{
    flexDirection:'row',
    marginTop:20
  },
  orText:{
    color:'#fff',
    fontSize:rem*1.3,
    paddingLeft:10
  },
  spButton:{
    width:rem*10.8,
    backgroundColor:'#e6e8e7',
  position:'absolute',
  left:rem*1,
  borderRadius:5
  },
  createAccButton:{
    width:rem*10.8,
    backgroundColor:'#e6e8e7',
    marginLeft:rem*5.5,
    marginTop:5,
    borderRadius:5,
    marginLeft:89
  }
 
});


