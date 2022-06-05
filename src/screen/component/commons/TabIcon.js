/*
  file created date : 28-jan-2020
  file created by : prince
  all tab icon use in this file
*/
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

//import iconScaling from '../app/iconScaling';

//const { tabIconSize } = iconScaling;

const WIDTH = Dimensions.get('window').width; //get window width
const HEIGHT = Dimensions.get('window').height; // get window height

const dashBoardActive = require('../../../image/home.png');
const dashBoardInactive =require('../../../image/home.png');

const giftActive = require('../../../image/booking.png');
const giftInactive = require('../../../image/booking.png');

const helpActive  =  require('../../../image/help.png');
const helpInactive = require('../../../image/help.png');

const userActive = require('../../../image/profile.png');
const userInactive = require('../../../image/profile.png');



const iconsList = { dashBoardActive, dashBoardInactive, userActive, userInactive, helpActive, helpInactive, giftActive, giftInactive};

const styles = StyleSheet.create({
 
  tabContainer: {
    //flex: 1,
    alignItems:'center',
    alignSelf:'center',
    justifyContent: 'flex-start',
    width: '100%',
  
    //height: 180,
    //backgroundColor: '#38424b',

    
  },
  textContainer: {
    
    // paddingTop: '.5rem',
  },
  iconContainer: {
    
    height:80,
    // width: '.5rem',
    alignItems: 'flex-end',
  },
  tab: {
    height:18,
    width:30,
marginTop:HEIGHT*0.051
  }
})

export default class TabIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { subtitle, focused, tabIcon } = this.props;
    const icon = focused ? tabIcon + 'Active' : tabIcon + 'Inactive';
    return (
      <View style={styles.tabContainer}>
        <View style={styles.iconContainer}>
          <Image source = {iconsList[icon]}
            resizeMode = {'contain'}
            style={styles.tab}
          />
        </View>
      </View>
    );
  }
}