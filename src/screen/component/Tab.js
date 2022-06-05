import React, { Component } from 'react';
import { Container, TabHeading, Tab, Tabs } from 'native-base';
import { StyleSheet, Dimensions, Text, Image, View, TouchableOpacity, AsyncStorage } from 'react-native';
import Tab1 from './commons/Home';
import Tab2 from './commons/Tution';
import Tab3 from '../auth/Login';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
   
        <Tabs tabBarPosition='bottom' locked='false' 
      tabBarBackgroundColor={'#000'}
      headerTintColor= '#fff'
      tabBarUnderlineStyle = {{backgroundColor: 'non'}}
        tabContainerStyle={{height:60,backgroundColor:'#000'}}>
        <Tab heading={<TabHeading style={{backgroundColor: '#7b7b7b',flexDirection:'column'}}>
                 <Icon name="home" size={20} style={{color: '#bfbfbf'}} />
                 <Text style={{color:'#fff'}}>Home</Text>
               </TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: '#7b7b7b',flexDirection:'column'}}>
          <Image  style={{height:20,width:20}} source={require('../../image/mybooking.png')} />
          <Text  style={{color:'#fff'}}>My Booking</Text>
           
               </TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: '#7b7b7b',flexDirection:'column'}}>
         <Image  style={{height:35,width:30,position:'absolute',top:3}} 
         source={require('../../image/helpcenter.png')} />
              <Text  style={{color:'#fff',paddingTop:19}}>Help Center</Text>
               </TabHeading>}>
            <Tab3 />
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: '#7b7b7b',flexDirection:'column'}}>
          <Icon name="user" size={20} style={{color: '#bfbfbf'}} />
               <Text  style={{color:'#fff'}}>Profile</Text>
               </TabHeading>}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}