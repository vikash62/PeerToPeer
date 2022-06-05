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
import Sidemenu from '../LoginUserAndSP/SideMenuLoginUser';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabMenu from '../LoginUserAndSP/SubCategorySPList';
import { Rating} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export default class DrawerLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state={
  subCategoryTitle:this.props.Key
    }
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
    SubCategoryList = [
      {
        id: 1,
        image: "https://source.unsplash.com/1024x768/?nature",
        name: 'Bathroom , ',
        names:'Kitchen',
        subject: 'Rahul Kumar',
        title: 4.5,
        value: '(70,488)'
      },
      {
        id: 2,
        image: "https://source.unsplash.com/1024x768/?water",
        name: 'Bathroom , ',
        names:'Sofa',
        subject: 'Ramesh Pashwan ',
        title: 3.5,
        value: '(70,488)'
      },
      {
        id: 3,
        image: "https://source.unsplash.com/1024x768/?girl",
        name: 'Sofa , ',
        names:'Window',
        subject: 'Anuj Raj ',
        title: 4,
        value: '(70,488)'
      },
      {
        id: 4,
        image: "https://source.unsplash.com/1024x768/?tree",
        name: 'Sofa , ',
        names:'Car',
        subject: 'Satyam Sharma ',
        title: 4.5,
        value: '(70,488)'
      },
      {
        id: 5,
        image: 'https://www.gstatic.com/webp/gallery/1.jpg',
        name: 'Sofa , ',
        names:'Car',
        subject: 'Rahul Prajapati',
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
            
              <Image  source={require('../../../image/search.png')} style={{width:15,height:15,marginLeft:1,marginTop:27}} />
            
           </View>
         </Right>
          </Header>
          <View style={styles.mapView}>
          
          </View>
 
          <Container style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView StyleSheet={{marginBottom:30}}>
        <View style={{}}>
    { this.state.subCategoryTitle==''?
    <Text style={styles.serviceTitle}>{this.state.subCategoryTitle}</Text>
    :<Text style={styles.serviceTitle}>Services</Text>
    }
          {
            SubCategoryList.map((item, index) => {
              return (
         
                <View style={{ justifyContent: 'center', alignItems: 'center',marginTop:4 }} >
            
                    <View style={styles.containerView}  >
                  
                  <View style={{ flexDirection: 'row',marginLeft:8 }} onStartShouldSetResponder={ ()=>{Actions.SpDetailDrawer({names:item.subject
                  ,tag1:item.name,tag2:item.names
                  })}}>
                 
                      <Image
                        style={{
                          height: 94,
                          width: 120,
                          marginTop:15
                        }}
                        source={{ uri: item.image }}
                      ></Image>
                         <View style={{flexDirection:'column'}}>
                    <Text key={item.subject} style={styles.serviceProviderName}>{item.subject}</Text>
                  <View style={{flexDirection:'row',marginTop:15}}>
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
                      <Button style={styles.contectButton} 
                       onPress={()=>{this.ContectForm()}}>
                          <Image 
                          style={{height:18,width:18,marginLeft:1,marginTop:5}}
                          source={require('../../../image/contact.png')}
                          />
                          <Text style={{fontSize:15,paddingLeft:4}}>Contact</Text>
                      </Button>
                       
                      <Button style={styles.contectButtonS} 
                        onPress={()=>{this.ContectForm()}}>
                       <Image 
                          style={{height:16,width:16,marginLeft:2}}
                          source={require('../../../image/calls.png')}
                          />
                          <Text style={{fontSize:15,paddingLeft:6,color:'#fff'}}>CALL US</Text>
                      </Button>
                      </View>
                    </View>
                    </View>
                    <View style={styles.rating}>
                <Rating
                
              style={styles.ratingstyle}
              onFinishRating={this.ratingCompleted}
              imageSize={10.5}
              readonly
              
            //  startingValue={rating}
              startingValue={item.title}
            />
            <Text style={styles.ratingNumber}>{item.title} {item.value} </Text>
           </View>
           <View style={styles.tegView}>
                      <Text style={{color:'#484848'}}>{item.name}</Text>
                      <Text style={{color:'#484848'}}>{item.names}</Text>
           </View>   
           <View style={{marginTop:14}}></View>
                  </View>
        
                  <View style={{marginTop:7}}></View>
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
    marginTop:20
  },
  images:{
    height:20,
    width:18,
    marginTop:22
  },serviceTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    paddingLeft: rem * 1.5,
    paddingTop: 2
  },
  containerView: {
    shadowOpacity: 100,
    width: '95%',
    backgroundColor: '#fff',
    borderWidth:2,
    borderColor:'#f5f5f5',
    
  },
  serviceProviderName:{
    fontWeight:'bold',
    fontSize:14,
    paddingLeft:17,
    paddingTop:16
  },
  rating:{flexDirection:'row',
  position:'absolute',
   top:rem*2.9,
   left:rem*11.7
},
ratingNumber:{
position:'absolute',
left:rem*5,
bottom:rem*0.0,
color:'#484848'

},
tegView:{
  flexDirection:'row',
position:'absolute',
top:rem*4.6,
left:rem*11.7
},
contectButton:{
  width:rem*7.5,
  height:rem*2.4,
  marginTop:rem*2.3,
  marginLeft:rem*0.5,
  backgroundColor:'#fff',
  opacity:2,
  shadowOpacity:12,
  borderWidth:0.2,
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
  borderWidth:0.2,
  borderColor:'#000'  ,
  flexDirection:'row',
  alignSelf:'center',
  justifyContent:'center',
  alignItems:'center',
  alignContent:'center',
  borderRadius:5
},
ratingstyle:{
  marginBottom:6,
  marginRight:rem*20
}
});
