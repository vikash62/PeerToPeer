import React from "react";
import {
  Dimensions, StyleSheet,
  Text,
  View,
  Image,ScrollView
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
  import rem from '../../../style/scale';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Sidemenu from '../commons/Sidemenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabMenu from '../LoginUserAndSP/SubCategorySPList';
import { Rating} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export default class CommonDrawer extends React.Component {
  constructor(props) {
    super(props);
  }
  closeDrawer() {
    this.drawer._root.close()
  }
  openDrawer() {
    this.drawer._root.open()
  }

ContectForm=()=>{
Actions.contectForm()
}
  render() {
    SubCategoryList = [
      {
        id: 1,
        image: "https://source.unsplash.com/1024x768/?nature",
        name: 'Tag 1   ',
        names:'Tag 2',
        subject: 'Service Provider Name ',
        title: 4.5,
        value: '(70,488)'
      },
      {
        id: 2,
        image: "https://source.unsplash.com/1024x768/?water",
        name: 'Tag 1   ',
        names:'Tag 2',
        subject: 'Service Provider Name ',
        title: 3.5,
        value: '(70,488)'
      },
      {
        id: 3,
        image: "https://source.unsplash.com/1024x768/?girl",
        name: 'Tag 1   ',
        names:'Tag 2',
        subject: 'Service Provider Name ',
        title: 4,
        value: '(70,488)'
      },
      {
        id: 4,
        image: "https://source.unsplash.com/1024x768/?tree",
        name: 'Tag 1   ',
        names:'Tag 2',
        subject: 'Service Provider Name ',
        title: 4.5,
        value: '(70,488)'
      },
      {
        id: 5,
        image: 'https://www.gstatic.com/webp/gallery/1.jpg',
        name: 'Tag 1  ',
        names:'Tag 2',
        subject: 'Service Provider Name ',
        title: 5,
        value: '(70,488)'
      },]
    return (
      <Drawer
        openDrawerOffset={1 - (WIDTH*0.7 / Dimensions.get('window').width)}
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidemenu navigator={this.navigator} />
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
 
          <Container style={{ flex: 1, backgroundColor: '#efefef' }}>
        <ScrollView StyleSheet={{marginBottom:30}}>
        <View style={{}}>
    <Text style={styles.serviceTitle}>{this.props.Key}</Text>
          {
            SubCategoryList.map((item, index) => {
              return (
         
                <View style={{ justifyContent: 'center', alignItems: 'center',marginTop:10 }} >
            
                    <View style={styles.containerView}  >
                  
                  <View style={{ flexDirection: 'row' }} onStartShouldSetResponder={ ()=>{Actions.SubDetailWithouLogin()}}>
                 
                      <Image
                        style={{
                          height: 130,
                          width: 130
                        }}
                        resizeMode='contain' source={{ uri: item.image }}
                      ></Image>
                         <View style={{flexDirection:'column'}}>
                    <Text key={item.subject} style={styles.serviceProviderName}>{item.subject}</Text>
                  <View style={{flexDirection:'row'}}>
                    {/* <Button
                    onPress={()=>{this.ContectForm()}}
                        title="CONTACT"
                        buttonStyle={styles.contectButton}
                        icon={
                          <Icon
                            name="envelope"
                            size={15}
                            color="#335fcb"
                          />
                        }
                        titleStyle={{fontSize:14,color:'#000',paddingLeft:5}}
                      /> */}
                      <Button style={styles.contectButton}      onPress={()=>{this.ContectForm()}}>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                        {/* <Icon
                        style={{marginLeft:rem*1.5,marginRight:10}}
                            name="envelope"
                            size={15}
                            color="#335fcb"
                          /> */}
                           <Image 
                          style={{height:10,width:10}}
                          source={require('../../../image/contact.png')}
                          />
                        <Text style={{fontSize:14,color:'#000',paddingRight:10}}>Contect</Text>
                        </View>
                        </Button>
                    
                      <Button style={styles.contectButtonS}   onPress={()=>{Actions.message()}}>
                      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                      <Image 
                          style={{height:10,width:10}}
                          source={require('../../../image/calls.png')}
                          />
                        <Text style={{fontSize:14,color:'#000',paddingLeft:5}}>Call Us</Text>
                        </View>
                      </Button>
                      </View>
                    </View>
                    </View>
                    <View style={styles.rating}>
                <Rating
              style={styles.ratingstyle}
              onFinishRating={this.ratingCompleted}
              imageSize={12}
              readonly
              
            //  startingValue={rating}
              startingValue={item.title}
            />
            <Text style={styles.ratingNumber}>{item.title} {item.value} </Text>
           </View>
           <View style={styles.tegView}>
                      <Text>{item.name}</Text>
                      <Text>{item.names}</Text>
           </View>   
                  </View>
        
                  <View style={{marginTop:10}}></View>
                </View>
           
              )
            })}
        </View>
        </ScrollView>
      </Container>
    
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
  },serviceTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    paddingLeft: rem * 1.5,
    paddingTop: 10
  },
  containerView: {
    shadowOpacity: 1,
    width: '95%',
    backgroundColor: '#fff',
  },
  serviceProviderName:{
    fontWeight:'bold',
    fontSize:16,
    padding:15
  },
  rating:{flexDirection:'row',
  position:'absolute',
   top:rem*3.3,
   left:rem*11.7
},
ratingNumber:{
position:'absolute',
left:rem*5,
bottom:rem*0.01
},
tegView:{
  flexDirection:'row',
position:'absolute',
top:rem*4.3,
left:rem*11.7
},
contectButton:{
  width:rem*7.5,
  height:rem*2.4,
  marginTop:rem*2.3,
  marginLeft:rem*0.5,
  backgroundColor:'#efefef',
  opacity:2,
  shadowOpacity:12,
  borderWidth:0.2,
  borderColor:'#000'
},
contectButtonS:{
  width:rem*7.5,
  height:rem*2.4,
  marginTop:rem*2.3,
  marginLeft:rem*0.7,
  backgroundColor:'#5078d4',
  opacity:2,
  shadowOpacity:12,
  borderWidth:0.2,
  borderColor:'#000',
  borderRadius:5
}
});
