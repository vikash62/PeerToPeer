import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,

} from 'react-native';
import rem from '../../style/scale';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { Button ,} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export default  class Redio extends Component {
  constructor() {
    super();
    this.state = {
         data: ['User','Serviceprovider'],
             checked:''
      
    }
    // alert(this.state.checked)
  
  }


  render() {
   
    return (
      
     <View style={styles.container}> 
     <Text style={{paddingLeft:25,color:"white",fontSize:17}}> i am a</Text>
        {
          this.state.data.map((data,key)=>{
            return(
              <View>
                 {this.state.checked==key?
                  <TouchableOpacity style ={styles.btn}
                  onPress={()=>{this.setState({checked:key}),alert(key)}}
                  >
                   
                    <Image style={styles.img} source={{uri:'data:image/png;base64,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'}}>
                    </Image>
                 <Text>{data}</Text>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style ={styles.btn}
                  onPress={()=>{this.setState({checked:key}),alert(key)}}>
                   
                  <Image  style={styles.img}  source={{uri:'data:image/png;base64,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'}}>
                  </Image>
               <Text style={{color:"white" ,paddingLeft:10}}>{data}</Text>
                </TouchableOpacity>
                }
                </View>
            )

          })
        }
     </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
     flexDirection:"row"
  },
  img :{
    height:20,
    width:20,
    backgroundColor:"blue"
  },
  btn:{
    flexDirection:"row",
    paddingLeft:35
 
  }
});


