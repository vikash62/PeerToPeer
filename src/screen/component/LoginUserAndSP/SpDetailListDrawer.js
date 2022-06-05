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
  Left,
  Right,
  Button,
  Body
}from "native-base";
import { Actions } from 'react-native-router-flux';
  import rem from '../../../style/scale';
  import { Rating} from 'react-native-elements';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

import Sidemenu from './SideMenuLoginUser';
import { ScrollView } from "react-native-gesture-handler";
export default class SpDetailListDrawer extends React.Component {
  constructor(props) {
    super(props);
this.state={
  name:this.props.names,
}
// alert(JSON.stringify(this.state.name))
  }
  ContectForm=()=>{
    Actions.contectForm();
  }
  closeDrawer() {
    this.drawer._root.close()
  }
  openDrawer() {
    this.drawer._root.open()
  }

  render() {
    Review = [
      {
        id: 1,
        image: "https://source.unsplash.com/1024x768/?nature",
        name: 'comment meaning, definition, what is comment: an opinion that you express about ... about someone or something SYN remarkcomment on/about his comments ... ',
        subject: 'Choudhary Raja',
        title: 4.5,
        value: '(70,488)'
      },
      {
        id: 2,
        image: "https://source.unsplash.com/1024x768/?water",
        name: 'Tag 1  comment meaning, definition, what is comment: an opinion that you express about ... about someone or something SYN remarkcomment on/about his comments ... ',
        subject: 'Sumit baba',
        title: 3.5,
        value: '(70,488)'
      },
      {
        id: 3,
        image: "https://source.unsplash.com/1024x768/?girl",
        name: 'Tag 1  comment meaning, definition, what is comment: an opinion that you express about ... about someone or something SYN remarkcomment on/about his comments ... ',
        subject: 'Rahul kumar',
        title: 4,
        value: '(70,488)'
      },
      {
        id: 4,
        image: "https://source.unsplash.com/1024x768/?tree",
        name: 'Tag 1  comment meaning, definition, what is comment: an opinion that you express about ... about someone or something SYN remarkcomment on/about his comments ... ',
        subject: 'Sumit KR',
        title: 4.5,
        value: '(70,488)'
      },
      {
        id: 5,
        image: 'https://www.gstatic.com/webp/gallery/1.jpg',
        name: 'Tag 1 comment meaning, definition, what is comment: an opinion that you express about ... about someone or something SYN remarkcomment on/about his comments ... ',
        subject: 'Choudhary ji',
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
        <Container style={{ backgroundColor: "#fff" }}>
          <Header style={{ height:HEIGHT*0.08, zIndex: 100,backgroundColor:'#fff',borderBottomWidth:0.5,borderColor:'#ececec'}}>
            <Left style={{marginLeft:-10}}>
            <Button
                transparent
                onPress={() => this.openDrawer()}
                >
             <Image  source={require('../../../image/menu.png')} style={styles.image} />
             </Button>
            </Left>
            <Body style={{marginRight:WIDTH*0.2,marginTop:17}}>
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
              <Image  source={require('../../../image/search.png')} style={{width:18,height:18,marginLeft:1,marginTop:25}} />
            
           </View>
         </Right>
          </Header>
          {/* <View style={styles.mapView}>
          
          </View> */}
 <ScrollView style={{paddingBottom:30}}>
          <View style={{}}>
            <Text style={styles.serviceTitle}>Service Title</Text>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10}} >

              <View style={styles.containerView}  >

                <View style={{ shadowOpacity:1,flexDirection: 'row', borderBottomWidth: 1,height:rem*10,borderColor:'#ececec'}}>

                  <Image
                    style={{
                      height: 110,
                      width: 110,
                      marginTop:5,marginLeft:10,
                      borderRadius:5
                    }}
                  source={require('../../../image/g.jpeg')}
                  ></Image>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.serviceProviderName}>{this.state.name} </Text>
                    <View style={{ flexDirection: 'row',marginTop:rem*2.6 }}>
                    <Button style={styles.contectButton}
                    onPress={()=>{this.ContectForm()}}  >
                          <Image 
                          style={{height:16,width:16,marginLeft:2,marginTop:6}}
                          source={require('../../../image/contact.png')}
                        
                          />
                          <Text style={{fontSize:12,paddingLeft:3}}>CONTACT</Text>
                      </Button>
                      <Button style={styles.contectButtonS} 
                       onPress={()=>{this.ContectForm()}}
                       >
                       <Image 
                          style={{height:14,width:14,marginLeft:3,marginTop:3}}
                          source={require('../../../image/calls.png')}
                          />
                          <Text style={{fontSize:11,paddingLeft:7,color:'#fff'}}>CALL US</Text>
                      </Button>
                    </View>
                  </View>
                </View>
                <View style={styles.rating}>
                  <Rating
                    style={{position:'absolute',bottom:rem*0.4}}
                    onFinishRating={this.ratingCompleted}
                    imageSize={10}
                    readonly

                    //  startingValue={rating}
                    startingValue={4}
                  />
                  <Text style={styles.ratingNumber}>4.5(71,23)</Text>
                </View>
                <View style={styles.tegView}>
                  <Text style={{color:'#484848'}}>{this.props.tag1}</Text>
                  <Text style={{color:'#484848'}}>{this.props.tag2}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }} >
                  <View style={styles.containerViewss}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>About</Text>
                    <Text style={{ fontSize: 12, paddingBottom: 15,color:'#484848' }}>hsgdhsagds A foundational component for inputting text into the app via a keyboard. Props provide ... If true , the text input can be multiple lines. The default ...
                    satisfy them. In order to create a valid string for PasswordRules take a look to
              the Apple Docs.In this Example of MultiLine Text / Break Text in React Native, we will see how can you break the text in multi line using a new line character.</Text>
                  </View>
                </View>
              </View>
              <View style={{ marginTop: 0 }}></View>
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', }} >

  <View style={styles.containerViews} >
  <Text style={{alignSelf:'flex-start',paddingLeft:10,paddingTop:10,fontSize:17,fontWeight:'bold'}}>Reviews</Text>
  {
   Review.map((item, index) => {
              return (
                <View style={{ justifyContent: 'center',alignItems: 'center',marginTop:-rem*0.2}} >
                    <View style={styles.containerViews}  >
                  <View style={{ flexDirection: 'row',borderBottomWidth:0.167,borderBottomColor:'#ececec',height:rem*8.8}}>
                      <Image
                        style={{
                          height: 80,
                          width: 80,
                          marginTop:rem*1.5,
                          borderRadius:5
                        }}
                         source={{ uri: item.image }}
                      ></Image>
                         <View style={{flexDirection:'column'}}>
                    <Text key={item.subject} style={styles.serviceProviderNames}>{item.subject}</Text>
                    <View style={{flexDirection:'column'}}>
                    <View >
                <Rating
         
              onFinishRating={this.ratingCompleted}
              imageSize={9}
              readonly
              style={styles.ratings}
            //  startingValue={rating}
              startingValue={item.title}
            />
            <View style={{flex:0.8,width:'89%'}}>
             <Text style={{paddingLeft:13,fontSize:11,  flexWrap: 'wrap',color:'#484848'}}>{item.name}</Text>
             </View>
                  </View>
           
                  </View>
                    </View>
                    </View>
                  
                  </View><View style={{marginTop:0}}></View>
                </View>
           
              )
            })}
  </View>
  
  </View>
  </ScrollView>
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
    marginLeft:12
  },
  images:{
    height:20,
    width:18,
    marginTop:22,
    
  },serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: rem * 1.5,
    paddingTop: 10
  },
  containerViewss:{
    shadowOpacity: 100,
    width: '95%',
    backgroundColor: '#fff',
   
  },
  containerView: {
    shadowOpacity: 100,
    width: '95%',
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor:'#ececec',

  },
  containerViews:{
    shadowOpacity: 100,
    width: '95%',
    backgroundColor: '#fff',

  },
  serviceProviderNames: {
    fontWeight: 'bold',
    fontSize: 13,
    padding:15
  },
  serviceProviderName: {
    fontWeight: 'bold',
    fontSize: 13,
    paddingTop:5,
    paddingLeft:15
  },
  rating: {
    flexDirection: 'row',
    position: 'absolute',
    top: rem * 3.4,
    left: rem * 10.8
  },
  ratings: {
position:'absolute',
bottom:rem*0,
left:13
  },
  ratingNumber: {
    fontSize:12,
    position: 'absolute',
    left: rem * 5,
    bottom: rem * 0.02,
    color:'#484848'
  },
  tegView: {
    flexDirection: 'row',
    position: 'absolute',
    top: rem * 4.5,
    left: rem * 10.8
  },
  contectButton:{
    width:rem*7.5,
    height:rem*2.4,
    marginTop:rem*2.3,
    marginLeft:rem*0.5,
    backgroundColor:'#fff',
    opacity:2,
    shadowOpacity:12,
    borderWidth:0.167,
    borderColor:'#000',
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    borderRadius:5
  },
  contectButtonS:{
    width:rem*7.5,
    height:rem*2.4,
    marginTop:rem*2.3,
    marginLeft:rem*0.7,
    backgroundColor:'#5078d4',
    opacity:2,
    shadowOpacity:12,
    borderWidth:0.167,
    borderColor:'#ececec'  ,
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    borderRadius:5
  },
});
