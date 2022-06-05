import React from "react";
import {
  Dimensions, StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from "react-native";
import {
  Container,
  Drawer,
  Header,
  Title,
  Left,
  Right,
  Button,
  Body,
  ActionSheet,
}
  from "native-base";
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import ServicemessageSideBar from '../ServiceProfileSideBar';
import rem from '../../../style/scale';
  import Message from './Message'

export default class ServiceProvider extends React.Component {
  constructor(props) {
    super(props);
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
        content={<ServicemessageSideBar navigator={this.navigator} />
        }
        onClose={() => this.closeDrawer()} >
        <Container style={{ backgroundColor: "#efefef" }}>
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
        <View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
             
          {/* <Text>Hello Service Provider</Text> */}
        </View>
           {/* <ServiceProvider/> */}
            {/* <TabMenu />  */}
       <Message/>
        </Container>
        <View style={{width:'100%'}}>
                {/* <Text style={styles.subject}>Reply to..........</Text> */}
                <TextInput  
                placeholder='Reply to...........'
                placeholderTextColor="black"
              multiline
              numberOfLines={10}
              style={styles.messagetBox}
                />
              </View>
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
     paddingTop:rem*5,
     fontSize:16,
     fontWeight:'bold'
   },
   messagetBox:{
    height: Math.max(85, 10),
    width:'95%',
  backgroundColor:'#fff',
  marginTop:rem*2,
  marginBottom:rem*0.6,
  marginLeft:rem*0.7,
  borderWidth:0.8,
  borderColor:'black'},
});
