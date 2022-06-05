import React, { Component } from 'react';
import { Container, TabHeading, Tab, Tabs } from 'native-base';
import { StyleSheet, Dimensions, Text, Image, View, TouchableOpacity, AsyncStorage } from 'react-native';
import subcategorymain from './commons/Subcategorymain'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class TabsExample extends Component {
  render() {
    return (
    <View style={{flexDirection:"row"}}>
        <Tabs tabBarPosition='bottom' locked='false' 
      tabBarBackgroundColor={'#000'}
      headerTintColor= '#fff'
      tabBarUnderlineStyle = {{backgroundColor: 'non'}}
        tabContainerStyle={{height:60,backgroundColor:'#000'}}>
        <Tab heading={<TabHeading style={{backgroundColor: '#7b7b7b',flexDirection:'column'}}>
                 <Icon name="home" size={20} style={{color: '#bfbfbf'}} />
                 <Text style={{color:'#fff'}}>Home</Text>
               </TabHeading>}>
           {/* <Tab1 /> */}
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: '#7b7b7b',flexDirection:'column'}}>
          <Image  style={{height:20,width:20}} source={require('../../image/mybooking.png')} />
          <Text  style={{color:'#fff'}}>Search Props</Text>
           
               </TabHeading>}>
            {/* <Tab2 /> */}
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: '#7b7b7b',flexDirection:'column'}}>
         <Image  style={{height:35,width:30,position:'absolute',top:3}} 
         source={require('../../image/helpcenter.png')} />
              <Text  style={{color:'#fff',paddingTop:19}}>Messages</Text>
               </TabHeading>}>
            {/* <Tab3 /> */}
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: '#7b7b7b',flexDirection:'column'}}>
          <Icon name="user" size={20} style={{color: '#bfbfbf'}} />
               <Text  style={{color:'#fff'}}>Profile</Text>
               </TabHeading>}>
            {/* <Tab3 /> */}
          </Tab>
        </Tabs>
        </View>
    );
  }
}