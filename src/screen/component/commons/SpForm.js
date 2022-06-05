import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  ImageBackground,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView,  } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import rem from '../../../style/scale';

export default  class SpDetail extends Component {
  state = {
    checked: false,
  };
  render() {
    Services = [
      {
        id: 1,
        service:'Cleaning',
        name:'Bathroom Cleaning',
        name1:'Kitchen cleaning',
        name2:'Sofa Cleaning'
      },
      {
        id: 2,
        service:'Home Tutor',
        name:'School                     ',
        name1:'Professional     ',
        name2:'Office               '
      },
      {
        id: 3,
        service:'Carpentors',
        name:'Door                       ',
        name1:'Bed                     ',
        name2:'Window           '
      },
     ]
    return (
      <ImageBackground 
      style={{height:HEIGHT*1,width:WIDTH*1}}
      source={require('../../../image/background.png')}>
      <View style={styles.container}>
        <ScrollView style={{marginBottom:1}}>
      <Text style={styles.select}>Select You Services</Text>
      <View >
        {
      Services.map((item, index) => { 
            return (
              <View style={{marginRight:rem*10}}>
                <Text style={styles.serviceText}>{item.service}</Text>
                <View style={{marginLeft:rem*1,alignItems:'center',alignSelf:'center'}}>
<CheckBox
  center
  containerStyle={{backgroundColor:'non'}}
  title={item.name }
  checkedIcon='check-square-o'
  uncheckedIcon='square-o'
  checked={this.state.checked}
  onPress={() => this.setState({ checked: !this.state.checked })}
  wrapperStyle={{backgroundColor:'non'}}
  textStyle={{color:'#000',fontSize:16}}
/>
<CheckBox
  containerStyle={{backgroundColor:'non',}}
  center
  title={item.name1 }
  checkedIcon='check-square-o'
  uncheckedIcon='square-o'
  checked={this.state.checked}
  onPress={() => this.setState({ checked: !this.state.checked })}
  wrapperStyle={{backgroundColor:'non'}}
  textStyle={{color:'#000',fontSize:16,paddingRight:21}}
/>
<CheckBox
  containerStyle={{backgroundColor:'non'}}
  center
  title={item.name2 }
  checkedIcon='check-square-o'
  uncheckedIcon='square-o'
  checked={this.state.checked}
  onPress={() => this.setState({ checked: !this.state.checked })}
  wrapperStyle={{backgroundColor:'non'}}
  textStyle={{color:'#000',fontSize:16,paddingRight:36}}
/>
</View>

              </View>
            )})
  }
  <TouchableOpacity style={{backgroundColor:'#fff',width:100,borderRadius:5,height:40,alignSelf:'center',marginTop:20,justifyContent:'center',alignContent:'center'}}>
<Text style={styles.save}>Save</Text>
  </TouchableOpacity>
      </View>
  </ScrollView>

      </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container: {
alignSelf:'center',

  },
  select:{
    fontSize:22,
    color:'#fff',
    fontWeight:'bold',
    paddingTop:rem*2,
  paddingLeft:rem*5
  },
  serviceText:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold',
    marginTop:20
  },
  save:{
    alignSelf:'center',
    fontSize:16,
    fontWeight:'bold'
  }
 
});



