import React from "react";
import {
  Dimensions, StyleSheet,
  Text,
  View,
  Image
} from "react-native";
import {
  Container,
  Drawer,
  Header,
  Title,
  Left,
  Right,
  Body,
  ActionSheet,
  Button
}
  from "native-base";
  import rem from '../../../style/scale'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Sidemenu from '../LoginUserAndSP/SideMenuLoginUser';
import { TextInput } from "react-native-gesture-handler";
import { Actions } from 'react-native-router-flux';
// import TabMenu from '../LoginUserAndSP/SubCategorySPList';
// import { Rating, Button } from 'react-native-elements';
export default class ContectForm extends React.Component {
  constructor(props) {
    super(props);
    // alert('hi')

  }
  closeDrawer() {
    this.drawer._root.close()
  }
  openDrawer() {
    this.drawer._root.open()
  }

  render() {
    return (
      <Drawer
        openDrawerOffset={1 - (WIDTH*0.7 / Dimensions.get('window').width)}
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidemenu navigator={this.navigator} />
        }
        onClose={() => this.closeDrawer()} >
        <Container style={{ backgroundColor: "#fff" }}>
          <Header style={{ height:HEIGHT*0.08, zIndex: 100,backgroundColor:'#fff',borderBottomWidth:0.5,borderColor:'#efefef'}}>
            <Left style={{marginLeft:-10}}>
              <Button
                transparent
                onPress={() => this.openDrawer()}
                >
             <Image  source={require('../../../image/menu.png')} style={styles.image} />
              </Button>
            </Left>
            <Body style={{marginRight:WIDTH*0.2}}>
              <View style={{flexDirection:'row'}}>
              <Text style={{color:'#1448be', fontWeight:'bold',fontSize:20}}>Peer</Text>
              <Text style={{color:'#00000', fontWeight:'bold',fontSize:20}}>2</Text>
              <Text style={{color:'#1448be', fontWeight:'bold',fontSize:20}}>Peer</Text>
              </View>
            </Body>
         <Right>
           <View style={{flexDirection:'row'}}>
           <Button
                transparent
                // onPress={() => this.openDrawer()}
                >
             <Image  source={require('../../../image/cart.png')} style={styles.image} />
            
              </Button>
            
              <Image  source={require('../../../image/search.png')} style={{width:20,height:20,marginLeft:1,marginTop:15}} />
            
           </View>
         </Right>
          </Header>
          <View style={styles.mapView}>
          
          </View>
          <View style={{justifyContent:'center',backgroundColor:'#fff'}}>
            <Text style={styles.contect}>Contact</Text>
            <View style={{alignItems:'center',height:WIDTH*1,backgroundColor:'#fff'}}>
              <Text style={{fontWeight:'bold',fontSize:16}}>Service Provider Name</Text>
              <View style={{width:'100%'}}>
                <Text style={styles.subject}>Subject</Text>
                <TextInput 
              multiline
              numberOfLines={10}
              style={styles.subjectBox}
                />
              </View>
              <View style={{width:'100%'}}>
                <Text style={styles.subject}>Message</Text>
                <TextInput 
              multiline
              numberOfLines={10}
              style={styles.messagetBox}
                />
              </View>
          <Button
               style={styles.sendButton}>
            <Text style={{color:'#fff'}}>Send</Text>
          </Button>
            </View>
          </View>

        </Container>

      </Drawer>
     
    );
  }
}
const styles = StyleSheet.create({
  mapView: {
    width: WIDTH * 1,
    backgroundColor: 'red',

  },
  image:{
    width:20,
    height:20,
  },
  contect:{
    fontSize:18,
    paddingLeft:13,
    fontWeight:'bold'
  },
  subject:{
   paddingLeft:rem*1,
    paddingTop:rem*2,
    fontSize:16,
    fontWeight:'bold'
  },
  subjectBox:{
    height: Math.max(52, 0),
    width:'95%',
  backgroundColor:'#fff',
  marginTop:rem*1,
  marginLeft:rem*0.7,
borderWidth:0.3,
borderColor:'#000'},

messagetBox:{
  height: Math.max(85, 10),
  width:'95%',
backgroundColor:'#fff',
marginTop:rem*1,
marginLeft:rem*0.7,
borderWidth:0.3,
borderColor:'#000'},

sendButton:{
  marginTop:rem*2,
  marginLeft:rem*10,
  backgroundColor:'#587cd2',
  justifyContent:'center',
  alignItems:'center',
  width:'35%',
  height:Math.max(37,0),
  width:'28%',
  borderWidth:1 ,
  borderColor:'#dcdcdc'
}
});
