import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  FlatList
} from 'react-native';
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
  import Sidemenu from '../commons/Sidemenu';
import rem from '../../../style/scale';
// import { ScrollView } from 'react-native-gesture-handler';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width;
import Swipeout from 'react-native-swipeout';
import { Rating, AirbnbRating } from 'react-native-elements';
import { call } from 'react-native-reanimated';
// var Swipeout = require('react-native-swipe-out')


class Message extends Component {
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
    var swipeoutBtns = [
      {
        component: (
          <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
          >
            <Image source={require('../../../image/reply.png')} />
            <Text style={{fontSize:13,position:'absolute',top:rem*5,bottom:0}}>Reply</Text>
          </View>
          
        ),
        backgroundColor: '#ececec',
        underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
        onPress: () => {
          console.log("Delete Item");
        },
       
      },{
      component: (
        <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              
            }}
        >
          <Image source={require('../../../image/call.png')} />
          <Text style={{color:'#fff'}}>Call</Text>
        </View>
      ),
      backgroundColor: '#1547c0',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      
      onPress: () => {
        console.log("Delete Item");
      },
    }
    ]

    ImageOfMessage = [
      {
        id: 1,
        image: "https://source.unsplash.com/1024x768/?nature",
        name:'Name here...',
        subject:' See example/index.ios.js for a more detailed example. See the Wiki usage tips. To use swipeout behind a iOS-style listitem, try react-native-listitem.',
        title:4.5,
        date:'20/07/2020'
      },
      {
        id: 2,
        image:  "https://source.unsplash.com/1024x768/?water",
        name:'Name here...',
        subject:'See example/index.ios.js for a more detailed example. See the Wiki usage tips. To use swipeout behind a iOS-style listitem, try react-native-listitem.',
        title:3.5,
        date:'20/07/2020'
      },
      {
        id: 3,
        image: "https://source.unsplash.com/1024x768/?girl",
        name:'Name here...',
        subject:'See example/index.ios.js for a more detailed example. See the Wiki usage tips. To use swipeout behind a iOS-style listitem, try react-native-listitem.',
        title:4,
        date:'20/07/2020'
      },
      {
        id: 4,
        image:   "https://source.unsplash.com/1024x768/?tree",
        name:'Name here...',
        subject:'See example/index.ios.js for a more detailed example. See the Wiki usage tips. To use swipeout behind a iOS-style listitem, try react-native-listitem.',
        title:4.5,
        date:'20/07/2020'
      },
      {
        id: 5,
        image: 'https://www.gstatic.com/webp/gallery/1.jpg',
        name:'Name here...',
        subject:'See example/index.ios.js for a more detailed example. See the Wiki usage tips. To use swipeout behind a iOS-style listitem, try react-native-listitem.',
        title:5,
        date:'20/07/2020'
      },
    
      {
        id: 6,
        image:'http://placeimg.com/640/480/any',
        name:'Name here...',
        subject:'See example/index.ios.js for a more detailed example. See the Wiki usage tips. To use swipeout behind a iOS-style listitem, try react-native-listitem.',
        title:5,
        date:'20/07/2020'
      },
      {
        id: 4,
        image:'http://placeimg.com/640/480/any',
        name:'Name here...',
        subject:'See example/index.ios.js for a more detailed example. See the Wiki usage tips. To use swipeout behind a iOS-style listitem, try react-native-listitem.',
        title:5,
        date:'20/07/2020'
      },
      {
        id: 5,
        image: 'https://www.gstatic.com/webp/gallery/1.jpg',
        name:'Name here...',
        subject:'See example/index.ios.js for a more detailed example. See the Wiki usage tips. To use swipeout behind a iOS-style listitem, try react-native-listitem.',
        title:5,
        date:'20/07/2020'
      },
    
      {
        id: 6,
        image: 'http://placeimg.com/640/480/any',
        name:'Name here...',
        subject:'See example/index.ios.js a iOS-style listitem, try react-native-listitem.',
        title:5,
        date:'20/07/2020'
      }
    
    ]
    return (
      <Drawer
      openDrawerOffset={1 - (WIDTH*0.7 / Dimensions.get('window').width)}
      ref={(ref) => { this.drawer = ref; }}
      content={<Sidemenu navigator={this.navigator} />
      }
      onClose={() => this.closeDrawer()} >
      <Container style={{ backgroundColor: "#fff" }}>
        <Header style={{ height:HEIGHT*0.08, zIndex: 100,backgroundColor:'#fff',borderBottomWidth:0.5,borderColor:'#efefef'}}>
          <Left>
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
        <View style={styles.container}>
        <ScrollView  style={{marginBottom:30}}>
        <Text style={{paddingLeft:8,fontSize:20,fontWeight:'bold'}}>Message</Text>

  <View  style={{marginTop:20}}>
    <View style={{shadowOpacity: 100,
    width: '95%',
    backgroundColor: '#fff',
    borderWidth:2,
    borderColor:'#f5f5f5',
    alignSelf:'center'}}>
      {
          ImageOfMessage.map((item, index) => {
            return (
              <Swipeout right={swipeoutBtns}
              autoClose="true"
              buttonWidth={rem*4}
              >
          <View style={{borderBottomWidth:0.1,borderColor:'#ececec',backgroundColor:'#fff',height:rem*8.5}}> 
          <View style={{flexDirection:'row'}}>
            <Image 
            style={{height:80,width:80,marginTop:10}}
             source={{ uri: item.image }}
            />
            <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.date}>{item.date}</Text>
            </View>
            <Text  style={{paddingTop:6,paddingLeft:10,flexWrap:'wrap'}}>Message</Text>
            <Text style={{flexDirection: 'column',paddingLeft:7,flexWrap:'wrap',flexGrow:1,flexShrink:1,fontSize:11}}>{item.subject}</Text>
            </View>
          </View>

             </View>
             <View style={{marginTop:1}}></View>
             </Swipeout>
            )})
      }
    </View>
  </View>
  </ScrollView>
      </View>
  
      </Container>

    </Drawer>
   
  );
}
}


const styles = StyleSheet.create({
    container:{
        // backgroundColor:'#000'
    },
    ratingNumber:{
        position:'absolute',
        left:rem*5,
       bottom:0.5
        
    },
    userName:{

      fontFamily:'Poppins',
      paddingTop:6,
      paddingLeft:6,
      fontWeight:'bold'
    },date:{
      paddingTop:6,
      paddingLeft:rem*7
    },
    mapView: {
      width: WIDTH * 1,
     
      backgroundColor: 'red',
  
    },
    image:{
      width:20,
      height:20,
    }
});

export default Message;