
import React, { Component } from 'react';
import {
  View,
  Text,StyleSheet,Picker,Button
} from 'react-native';
import { color, set } from 'react-native-reanimated';


 export default class Dropdown1 extends Component{
     constructor (){
         super();
         this.state={
              PickerValue:''
         }
     };
     clickme=()=>{
         var data =this.state.PickerValue;
           if(data==""){
               alert("please select an option")
           } else{
            alert(data)
           }
         
     }
  render()
  {
    return(
      <View style={{width:"60%",flexDirection:"row",paddingLeft:10}}>
         <Text style={{paddingTop:15,paddingRight:10,color:"white"}}> Your Service Sub-Category</Text>
         
         <Picker
         style={{width:"80%",color:"white"}}
         selectedValue={this.state.PickerValue}
         onValueChange={(itemValue,itemIndex)=>this.setState({PickerValue
            :  itemValue})}
         >
             <Picker.Item label="Select an option" value=""/>
             <Picker.Item label="Home Tutor" value="Home Tutor"/>
             <Picker.Item label="Cleaning" value="Cleaning"/>
             <Picker.Item label="Electrician" value="Electrician"/>
             <Picker.Item label="Carpenter" value="Carpenter"/>
             <Picker.Item label="Computer" value="Computer"/>
        
         </Picker>
      
         {/* <Button title="click me" onPress={this.clickme}/> */}
      </View>
       
    );
  }
}