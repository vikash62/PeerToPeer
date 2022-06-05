
import React,{Component,} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

import MapView, { PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';
import { Marker } from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Screen1 extends Component
{ 
    state ={
      coordinate:{
      latitude :24.817081,
         longitude :84.633949
         
    }
  }
  
render(){
  let {latitude,longitude}=this.state.coordinate
  return(
<View style= {styles.map}>
  
     <MapView
      // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       initialRegion={{
         latitude,
         longitude, 
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421
       }}
       showsUserLocation={true}
       showsMyLocationButton={true}
       onPress = {(e)=>{this.setState({
        coordinate: e.nativeEvent.coordinate
       })}}
       onMapReady ={()=>{this.setState({marginBottom:0})}}
      //onRegionChange={()=>{}}
      //onRegionChangeComplete={(region)=>this.setState({
        //coordinate:region
      //})}
      >

     <Marker
      coordinate={{
        latitude ,
        longitude
      }}
      title= "i am here"
     // description="des"
    />
  
     </MapView>
</View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 600,
       width: 450,
       justifyContent: 'flex-end',
       alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });