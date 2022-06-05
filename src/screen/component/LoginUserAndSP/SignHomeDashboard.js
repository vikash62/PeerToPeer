
import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text
} from 'react-native';
import { Header } from 'react-native-elements'
import DrawerMenu from '../LoginUserAndSP/DrawerLogin'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class SignHomeDashboard extends Component  {
   render() {
  return (

<View style={styles.container}> 
{/* <Header
          leftComponent={{ icon: 'menu', color: '#fff', paddingBottom: 20 }}
          centerComponent={{ text: 'Home', style: { color: '#fff', paddingBottom: 20, fontSize: 17} }}
         
          containerStyle={{
            backgroundColor: '#3D6DCC',
            justifyContent: 'space-around',
            height: HEIGHT * 0.09
          }}
        /> */}
        <DrawerMenu/>
</View>
  );
   }
};

const styles = StyleSheet.create({
    container:{
 flex:1
}
});


