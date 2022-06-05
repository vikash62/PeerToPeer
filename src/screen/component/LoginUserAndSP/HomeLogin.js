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
// import HomeSlider from '../../intro slider/HomeSlider';
import rem from '../../../style/scale';
import CategoryItem from './CategoryItemLogin';
// import CleaningView from '../commons/Cleaning';
import TabBars from '../LoginUserAndSP/SignHomeDashboard'
import { Actions } from 'react-native-router-flux';
export default  class HomeLogin extends Component {
  constructor(props) {
    super(props);
   this.state={

   }
 
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{marginBottom:1}}>
        {/* <View style={{flexDirection:'row',marginTop:10,marginLeft:rem*0.5}}>
    <Icon  name="map-marker" size={18} color='#3851a3' />
    <Text style={{color:'#b1b1b1',fontSize:12,paddingLeft:5,paddingTop:2}}>Street no 2, H-block</Text>
    </View>
     <View style={{ height: HEIGHT * 0.2,width:WIDTH*0.95,marginLeft:rem*0.7,marginTop:rem*.5 }}>
           
          </View> */}
  <View style={{height:WIDTH*rem*0.052}}>
    <View style={{flexDirection:'row'}}>
      {
        this.props.Category=='' ?
        <Text style={styles.homeTutor}>{this.props.Category}</Text> :
        <Text style={styles.homeTutor}>Cleaning</Text>
      }
     
    <View style={{alignSelf:'center',flexDirection:'row',marginLeft:rem*13}}>
    <Text style={styles.manageCategory} onPress={()=>{Actions.allCategory()}}>All Category</Text>
    <Icon name='long-arrow-right'size={20} color='#7391d9' style={styles.arrowleft}/>
    </View>
    </View>
    <CategoryItem/>
  </View>
  <View style={{marginBottom:rem*20}}>
  <CategoryItem/>
  </View>
  {/* <View style={{height:WIDTH*rem*0.052,marginBottom:rem*5}}>
    <Text style={styles.homeTutor}>Cleaning</Text>
    <CleaningView/>
  </View> */}
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
    paddingLeft:10,
    fontSize:17
  
  },
  manageCategory:{
    fontWeight:'200',
    paddingTop:12,
    paddingLeft:10,
    color:'#1747b3',
   alignSelf:'center'
  },
  arrowleft:{
  top:rem*1,
  left:5
  }
 
});



