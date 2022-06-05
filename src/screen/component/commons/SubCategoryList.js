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
import { ScrollView } from 'react-native-gesture-handler';
import rem from '../../../style/scale';
import CategoryItem from '../LoginUserAndSP/CategoryItemLogin';
// import CleaningView from '../commons/Cleaning';
import TabBars from '../LoginUserAndSP/SignHomeDashboard'
import { Actions } from 'react-native-router-flux';
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
        onClose={() => this.closeDrawer()} >
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
    <Text style={styles.homeTutor}>{this.props.Key}</Text>  
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
  },
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
