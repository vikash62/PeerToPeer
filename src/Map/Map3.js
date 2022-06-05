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
import rem from '../style/scale'
import Map2 from './Map2'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { Button ,} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Checkbox from 'react-native-custom-checkbox';
var tempCheckValues = [];


export default  class Forgetpass extends Component {
  constructor(props) {
    super(props);
   
      
    }
  


  render() {
    
    return (
      <ImageBackground 
      style={{height:HEIGHT*1,width:WIDTH*1}}
      source={require("../image/background.png")}>
            <ScrollView style={{marginBottom:30}}>
      <View style={styles.container}>
 
    <Text style={styles.welcomeback}>choose current loaction</Text>
     <View> 
       <Map2/>
     </View>
     <View style={{paddingTop:350}}>
       <Text style={{fontSize:18,color:"white",textAlign:"center"}}>--or--</Text>
    <TextInput
placeholder='Enter your full Address manually'
placeholderTextColor="#fff"
style={styles.Email}
multiline={true}
underlineColorAndroid='transparent'
onChangeText=
{ this.emailvalidation}
/>
</View>
     <View style={{paddingTop:50}}>

     <Button
     buttonStyle={styles.signiinButtin}
     title='PEER TO PEER '
     titleStyle={{color:'#000'}}
     onPress={this.myfun}
     />
      
      </View>
    </View>
    </ScrollView>
   
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
  paddingTop:rem*1,
  // paddingLeft:rem*10,
  alignSelf:'center'
},
signiinButtin:{
  width:'90%',
  marginTop:rem*0.1,
  alignSelf:'center',
  backgroundColor:'#fff',

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



