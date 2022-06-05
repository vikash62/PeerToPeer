import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Buttons from '../custom/Buttons'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export default class Screen extends Component {
  userPress = () => {
    Actions.sliderIntro({test:'User'});
  }
  gymPress = () => {
    Actions.sliderIntro();
  }

  render() {
    return (
     <ImageBackground source={require('../Image/background.jpeg')}  style={styles.container}>
        <View style={styles.buttons}>
          <Buttons title="User" actionOne={() => this.userPress()} />
          <View style={styles.button1}>
            <Buttons title="Gym" actionOne={() => this.gymPress()} />
          </View>
        </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#000"
  },
  buttons: {
    marginTop: HEIGHT * 0.40,
   
  },
  button1: {
    marginTop: HEIGHT * 0.15
  }
});


