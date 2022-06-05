import React, { Component } from 'react';
import { Container, Header, Content,  Tabs } from 'native-base';
import {Dimensions} from 'react-native'
import {
  StyleSheet,
  
  View,
  Text,
  FlatList,
  Image
} from 'react-native';
import Home from './Home';
// import Tab1 from './tabOne';
// import Tab2 from './tabTwo';
// import Tab3 from './tabThree';
// import Tab1 from '../commons/Home';
// import Tab2 from '../../auth/Register';
// import Tab3 from '../../component/commons/Map';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export default class TabBar extends Component {
  render() {
    return (
      <Container style={{flex:1}}>

        <Home/>
      
        {/* <Tab/> */}
        {/* <Tabs tabBarPosition='bottom' locked='false'
        tabBarBackgroundColor='#222930'
        activeTabStyle={{height:200}}
         tabBarUnderlineStyle={{backgroundColor:'non'}}
         tabContainerStyle={{ height: HEIGHT*0.07 }}
          >
          <Tab heading="Home" name="Home">
            <Tab1 />
          </Tab>
          <Tab heading="work" name="work" >
            <Tab2 />
          </Tab>
          <Tab heading="profile" name="profile">
            <Tab3 />
          </Tab>
        </Tabs> */}
      </Container>
    );
  }
}