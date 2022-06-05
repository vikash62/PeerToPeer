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
  Body,
  Button,
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
// import { Rating, Button } from 'react-native-elements';
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
  Actions.contectForm();
}
  render() {
    Review = [
      {
        id: 1,
        image: "https://source.unsplash.com/1024x768/?nature",
        name: 'comment meaning, definition, what is comment: an opinion that you express about ... about someone or something SYN remarkcomment on/about his comments ... ',
        subject: 'Service Provider Name ',
        title: 4.5,
        value: '(70,488)'
      },
      {
        id: 2,
        image: "https://source.unsplash.com/1024x768/?water",
        name: 'Tag 1  comment meaning, definition, what is comment: an opinion that you express about ... about someone or something SYN remarkcomment on/about his comments ... ',
        subject: 'Service Provider Name ',
        title: 3.5,
        value: '(70,488)'
      },
      {
        id: 3,
        image: "https://source.unsplash.com/1024x768/?girl",
        name: 'Tag 1  comment meaning, definition, what is comment: an opinion that you express about ... about someone or something SYN remarkcomment on/about his comments ... ',
        subject: 'Service Provider Name ',
        title: 4,
        value: '(70,488)'
      },
      {
        id: 4,
        image: "https://source.unsplash.com/1024x768/?tree",
        name: 'Tag 1  comment meaning, definition, what is comment: an opinion that you express about ... about someone or something SYN remarkcomment on/about his comments ... ',
        subject: 'Service Provider Name ',
        title: 4.5,
        value: '(70,488)'
      },
      {
        id: 5,
        image: 'https://www.gstatic.com/webp/gallery/1.jpg',
        name: 'Tag 1 comment meaning, definition, what is comment: an opinion that you express about ... about someone or something SYN remarkcomment on/about his comments ... ',
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
        <ScrollView StyleSheet={{ marginBottom: 30 }}>
          <View style={{}}>
            <Text style={styles.serviceTitle}>Service Title</Text>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }} >

              <View style={styles.containerView}  >

                <View style={{ flexDirection: 'row', borderBottomWidth: 0.2 }}>

                  <Image
                    style={{
                      height: 130,
                      width: 130
                    }}
                    resizeMode='contain' source={require('../../../image/g.jpeg')}
                  ></Image>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.serviceProviderName}>Service Provider Name </Text>
                    <View style={{ flexDirection: 'row' }}>
                    <Button style={styles.contectButton}      onPress={()=>{this.ContectForm()}}>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                        {/* <Icon
                        style={{marginLeft:rem*1.4}}
                            name="envelope"
                            size={15}
                            color="#335fcb"
                          /> */}
                           <Image 
                          style={{height:10,width:10}}
                          source={require('../../../image/contact.png')}
                          />
                        <Text style={{fontSize:14,color:'#000',paddingLeft:3}}>Contect</Text>
                        </View>
                        </Button>
                    
                      <Button style={styles.contectButtonS}   onPress={()=>{Actions.message()}}>
                      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                        <Icon
                        style={{marginLeft:rem*1.8}}
                            name="phone"
                            size={15}
                            color="#335fcb"
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
                    startingValue={4}
                  />
                  <Text style={styles.ratingNumber}>4.5(71,23)</Text>
                </View>
                <View style={styles.tegView}>
                  <Text>Tag 1   </Text>
                  <Text>Tag 2</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }} >
                  <View style={styles.containerView}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>About</Text>
                    <Text style={{ fontSize: 14, paddingBottom: 15 }}>hsgdhsagds A foundational component for inputting text into the app via a keyboard. Props provide ... If true , the text input can be multiple lines. The default ...
                    satisfy them. In order to create a valid string for PasswordRules take a look to
              the Apple Docs.In this Example of MultiLine Text / Break Text in React Native, we will see how can you break the text in multi line using a new line character.</Text>
                  </View>
                </View>
              </View>
              <View style={{ marginTop: 10 }}></View>
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }} >

  <View style={styles.containerView} >
  {
            Review.map((item, index) => {
              return (
         
                <View style={{ justifyContent: 'center', borderBottomWidth:0.5,alignItems: 'center',marginTop:10 }} >
            
                    <View style={styles.containerView}  >
                  <View style={{ flexDirection: 'row' }}>
                 
                      <Image
                        style={{
                          height: 80,
                          width: 80,
                          marginTop:rem*0.7
                        }}
                        resizeMode='contain' source={{ uri: item.image }}
                      ></Image>
                         <View style={{flexDirection:'column'}}>
                    <Text key={item.subject} style={styles.serviceProviderName}>{item.subject}</Text>
                    <View style={{flexDirection:'column'}}>
                    <View >
                <Rating
         
              onFinishRating={this.ratingCompleted}
              imageSize={12}
              readonly
              style={styles.ratings}
            //  startingValue={rating}
              startingValue={item.title}
            />
            <View style={{flex:0.8,width:'89%'}}>
             <Text style={{paddingLeft:13,fontSize:11,  flexWrap: 'wrap'}}>{item.name}</Text>
             </View>
                  </View>
           
                  </View>
                    </View>
                    </View>
                  
                  </View><View style={{marginTop:5}}></View>
                </View>
           
              )
            })}
  </View>
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
  serviceTitle: {
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
  serviceProviderName: {
    fontWeight: 'bold',
    fontSize: 16,
    padding:10
  },
  rating: {
    flexDirection: 'row',
    position: 'absolute',
    top: rem * 3.3,
    left: rem * 11.7
  },
  ratings: {
position:'absolute',
bottom:rem*4.3,
left:13
  },
  ratingNumber: {
    position: 'absolute',
    left: rem * 5,
    bottom: rem * 0.01
  },
  tegView: {
    flexDirection: 'row',
    position: 'absolute',
    top: rem * 4.3,
    left: rem * 11.7
  },
  contectButton: {
    width: rem * 7.5,
    height: rem * 2.4,
    marginTop: rem * 2.8,
    marginLeft: rem * 0.5,
    backgroundColor: '#efefef',
    opacity: 2,
    shadowOpacity: 12,
    borderWidth: 0.2,
    borderColor: '#000'
  },
  contectButtonS: {
    width: rem * 7.5,
    height: rem * 2.4,
    marginTop: rem * 2.8,
    marginLeft: rem * 0.7,
    backgroundColor: '#5078d4',
    opacity: 2,
    shadowOpacity: 12,
    borderWidth: 0.2,
    borderColor: '#000'
  }
});
