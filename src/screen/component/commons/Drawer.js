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
  Button,
  Body,
  ActionSheet,
}
  from "native-base";
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Sidemenu from '../commons/Sidemenu';

import Icon from 'react-native-vector-icons/FontAwesome';
import TabBars from '../commons/TabBar';
export default class HomeScreen_Header extends React.Component {
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
        content={<Sidemenu navigator={this.navigator} />
        }
        onPress={() => this.closeDrawer()} >
        <Container style={{ backgroundColor: "#fff" }}>
          <Header style={{sheight:HEIGHT*0.08,zIndex: 100,backgroundColor:'#fff',borderBottomWidth:0.5,borderColor:'#ececec'}}>
            <Left style={{marginLeft:-10}}>
              <Button
                transparent
                onPress={() => this.openDrawer()}
                >
             <Image  source={require('../../../image/menu.png')} style={styles.image} />
              </Button>
            </Left>
            <Body style={{marginRight:WIDTH*0.38,marginTop:17}}>
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
             <Image  source={require('../../../image/cart.png')} style={styles.images} />
            
              </Button>
            
              <Image  source={require('../../../image/search.png')} style={{width:15,height:15,marginLeft:1,marginTop:27}} />
            
           </View>
         </Right>
          </Header>
          <View style={styles.mapView}>
          
          </View>
 <TabBars/>
            {/* <TabMenu /> */}
    
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
    marginTop:20,
  },
  images:{
    height:20,
    width:18,
    marginTop:22
  }
});
