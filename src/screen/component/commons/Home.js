import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  FlatList,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import HomeSlider from '../../intro slider/HomeSlider';
import rem from '../../../style/scale';
import Tution from '../commons/Tution';
import CleaningView from '../commons/Cleaning';
export default  class Home extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{marginBottom:1}}>
        <View style={{flexDirection:'row',marginTop:5,marginLeft:rem*0.5}}>
    <Icon  name="map-marker" size={13} color='#3851a3'  style={{marginTop:4}}/>
    <Text style={{color:'#484848',fontSize:13,paddingLeft:5,paddingTop:2}}>Street no 2, H-block</Text>
    </View>
     <View style={{ height: HEIGHT * 0.2,width:WIDTH*0.95,marginLeft:rem*0.7,marginTop:rem*.5 }}>
            <HomeSlider />
          </View>
  <View style={{height:WIDTH*rem*0.045,}}>
    <Text style={styles.homeTutor}>Home Tutors </Text>
    <Tution/>
  </View>
  <View style={{height:WIDTH*rem*0.052,marginBottom:rem*5}}>
    <Text style={styles.homeTutor}>Cleaning</Text>
    <CleaningView/>
  </View>
  </ScrollView>

      </View>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  imageSlider:{
    height:WIDTH*1,
    width:WIDTH*rem*1
  },
  homeTutor:{
    fontWeight:'bold',
    paddingTop:12,
    paddingLeft:10
  }
 
});



