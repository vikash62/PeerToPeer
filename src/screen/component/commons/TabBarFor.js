import React, { Component } from 'react';
import { Container,ScrollableTab, Header, Content,TabHeading, Tab, Tabs } from 'native-base';
import { Dimensions, ScrollView, StyleSheet, Text, View, TouchableHighlight,Image,TouchableOpacity } from 'react-native'
// import Test from './Test';
// import Test2 from './Test2';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
class TabBar extends Component {
  render() {
    return (
      <Container>
        <Tabs 
          tabBarPosition='top' locked='false'
          tabBarBackgroundColor='black'
          activeTabStyle={{height:200}}
          tabBarUnderlineStyle={{backgroundColor:'white'}}
          tabContainerStyle={{marginBottom:5, height: HEIGHT*0.08,backgroundColor:'black' }}
          renderTabBar={() => <ScrollableTab style={{ backgroundColor: "white" }} />}
          >
        <Tab heading={ 
          <TabHeading style={{backgroundColor : 'black'}}>
            <Text style={styles.tabColor}>Category One</Text>
          </TabHeading>
        }>
          {/* <Test /> */}
        </Tab>
        
        <Tab heading={
          <TabHeading style={{backgroundColor : 'black'}}>
            <Text style={styles.tabColor}>Category Two</Text>
          </TabHeading>
        }>
          {/* <Test2 /> */}
        </Tab>

        <Tab heading={
          <TabHeading style={{backgroundColor : 'black'}}>
            <Text style={styles.tabColor}>Category Three</Text>
          </TabHeading>
        }>
          {/* <Test2 /> */}
        </Tab>

        <Tab heading={
          <TabHeading style={{backgroundColor : 'black'}}>
            <Text style={styles.tabColor}>Category Four</Text>
          </TabHeading>
        }>
          {/* <Test2 /> */}
        </Tab>

        <Tab heading={
          <TabHeading style={{backgroundColor : 'black'}}>
            <Text style={styles.tabColor}>Category Five</Text>
          </TabHeading>
        }>
          {/* <Test2 /> */}
        </Tab>
      </Tabs>
    </Container>
    );
  }
}
var styles = StyleSheet.create({
  tabColor:{
    color:'white',
    fontSize:17,
    marginBottom:20
  }
})
export default TabBar