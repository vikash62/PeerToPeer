
import React, { Component } from 'react';
import {
  View,
  Text,ImageBackground,ScrollView,StyleSheet,TextInput,TouchableOpacity

} from 'react-native';
import rem from '../../../style/scale'
import Dropdown from "./Dropdown"
import Dropdown1 from "./Dropdown1"

 export default class Service extends Component{
 
  render()
  {
    return(
        <ImageBackground 
        style={{flex:1}} 
        source={require('../../../image/background.png')}>
          <ScrollView style={{marginBottom:30}}>
   
          <Text style={{textAlign:"center",color:"white",fontWeight:"bold",fontSize:22,paddingTop:20}}> SERVICES</Text>
     <View style={{paddingTop:20}}>
         <Dropdown/>      
           <Dropdown1/>
           </View>
            <Text style={{color:"white",paddingTop:20,paddingLeft:10,fontSize:16}}> Enter Service discription</Text>
          
            <TextInput 
              multiline
              numberOfLines={10}
              style={styles.messagetBox}
                />
                <Text style={{color:"white",paddingTop:35,paddingLeft:8}} > Tag Other Services Provided By you </Text>
                <View style={{alignItems:"center",paddingTop:80}}>
      <TouchableOpacity style={styles.userbtn}   >
          <Text style={{fontWeight:"bold",textAlign:"center"}}>SUBMIT</Text>
      </TouchableOpacity>
      </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
// subjectBox:{
//     height: Math.max(52, 0),
//     width:'95%',
//   backgroundColor:'#fff',
//   marginTop:rem*1,
//   marginLeft:rem*0.7,
// borderWidth:0.3,
// borderColor:'#000'},
messagetBox:{
  height: Math.max(95, 10),
  width:'76%',
backgroundColor:'#fff',
marginTop:rem*1,
marginLeft:rem*5,
borderWidth:0.5,
borderColor:'#000'},
createAccButton:{
    width:rem*10.8,
    backgroundColor:'#e6e8e7',
    marginLeft:rem*5.5,
    marginTop:5,
    borderRadius:5,
    marginLeft:89
  },
  userbtn:{
    backgroundColor:'white',
    padding:10,
    width:'55%',
    
    
  }
})