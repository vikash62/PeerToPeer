import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,

} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { Button ,} from 'react-native-elements';
//import { Actions } from 'react-native-router-flux';


export default  class Home extends Component {
    state={
        avatarSource:null
    }
 Selectimage = async() =>
 {
    ImagePicker.showImagePicker({noData:true,mediaType:"photo"},(response)=>{
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
        
      
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      
          this.setState({
            avatarSource:  response.uri,
          });
        }
      });
 }

  render() {
    return (
   <ImageBackground    source={require('../../image/background.png')}
    style={{flex:1}}
   >
     
<View style={{alignItems:'center',justifyContent:"center"}}>
   {
     this.state.avatarSource && <Image source={{uri:this.state.avatarSource}}
      style={{height:"40%",width:"30%",resizeMode:"contain"}}/>

   }
   <Button title="select image" onPress={this.Selectimage}/>
   
</View>

   </ImageBackground>

    );
  }
};


