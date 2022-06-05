import React from "react";
import {
  Dimensions, StyleSheet,
  Text,
  View,
  Image,ScrollView,
  FlatList,
  TouchableOpacity
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
Categories = [
  {
    id: 1,
    image: "https://source.unsplash.com/1024x768/?nature",
    name:'Plumbers',
    title:4.5,
    value:'(70,488)'
  },
  {
    id: 2,
    image:  "https://source.unsplash.com/1024x768/?water",
    name:'Cleaning ',
    title:3.5,
    value:'(70,488)'
  },
  {
    id: 3,
    image: "https://source.unsplash.com/1024x768/?girl",
    name:'Home tutor',
    title:4,
    value:'(70,488)'
  },
  {
    id: 4,
    image:   "https://source.unsplash.com/1024x768/?tree",
    name:'Home tutor',
    title:4.5,
    value:'(70,488)'
  }

]
Categories1 = [
  {
    id: 1,
    image: "https://source.unsplash.com/1024x768/?nature",
    name:'Cleaning',
    title:4.5,
    value:'(70,488)'
  },
  {
    id: 2,
    image:  "https://source.unsplash.com/1024x768/?water",
    name:'Electrician',
    title:3.5,
    value:'(70,488)'
  },
  {
    id: 3,
    image: "https://source.unsplash.com/1024x768/?girl",
    name:'Plumbers',
    title:4,
    value:'(70,488)'
  },
  {
    id: 4,
    image:   "https://source.unsplash.com/1024x768/?tree",
    name:'Home tutor',
    title:4.5,
    value:'(70,488)'
  }

]
Categories2 = [
  {
    id: 1,
    image: "https://source.unsplash.com/1024x768/?nature",
    name:'Disnfication',
    title:4.5,
    value:'(70,488)'
  },
  {
    id: 2,
    image:  "https://source.unsplash.com/1024x768/?water",
    name:'Carpenters',
    title:3.5,
    value:'(70,488)'
  },
  {
    id: 3,
    image: "https://source.unsplash.com/1024x768/?girl",
    name:'Plumbers',
    title:4,
    value:'(70,488)'
  },
  {
    id: 4,
    image:   "https://source.unsplash.com/1024x768/?tree",
    name:'Home tutor',
    title:4.5,
    value:'(70,488)'
  }]
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
Item = ({ item }) => {
  return (
    
    <View style={{flex:1}}>
      <ScrollView horizontal={true}>
        <View style={{ width: '100%', paddingLeft: 8,flexDirection:'row',flex:1}}>
          <View style={{flexDirection:'column'}} >
            <TouchableOpacity  onPress={()=>{Actions.subcategorymain({CategoryName:item.name,Image:item.image})}} >
            <Image
              style={{
                 height:130,
                 width:130,
                 borderRadius:10
              }}
              resizeMode='contain' source={{ uri: item.image }}
              ></Image>
              <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center',alignSelf:'center'}}>
              <Text style={{fontSize:13,
                color:'#414141',
                alignSelf:'center',
                fontWeight:'bold',
               
                }}>{item.name}</Text>
              {/* <Text style={{fontSize:13,paddingBottom:3,color:'#414141'}}>{item.subject}</Text> */}
              <View style={{marginTop:20}}></View>
              </View>
              
       
         </TouchableOpacity>
          </View>
         <View style={{width:6}}></View>
        </View>
      
      </ScrollView>

    </View>
  )
}
Item = ({ item }) => {
  return (
    <View style={{flex:1}}>
      <ScrollView horizontal={true}>
        <View style={{ width: '100%', paddingLeft: 8,flexDirection:'row',flex:1}}>
          <View style={{flexDirection:'column'}} >
            <TouchableOpacity  onPress={()=>{Actions.subcategorymain({CategoryName:item.name,Image:item.image})}} >
            <Image
              style={{
                 height:170,
                 width:150,
                 borderRadius:10
              }}
              resizeMode='contain' source={{ uri: item.image }}
              ></Image>
              <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center',alignSelf:'center'}}>
              <Text style={{fontSize:13,
                color:'#414141',
                alignSelf:'center',
                fontWeight:'bold',
               
                }}>{item.name}</Text>
              {/* <Text style={{fontSize:13,paddingBottom:3,color:'#414141'}}>{item.subject}</Text> */}
              <View style={{marginTop:20}}></View>
              </View>
              
       
         </TouchableOpacity>
          </View>
         <View style={{width:6}}></View>
        </View>
      
      </ScrollView>

    </View>
  )
}
Item = ({ item }) => {
  return (
    <View style={{flex:1}}>
      <ScrollView horizontal={true}>
        <View style={{ width: '100%', paddingLeft: 8,flexDirection:'row',flex:1}}>
          <View style={{flexDirection:'column'}} >
            <TouchableOpacity onPress={()=>{Actions.subcategorymain({CategoryName:item.name,Image:item.image})}}  >
            <Image
              style={{
                 height:130,
                 width:130,
                 borderRadius:10
                 
              }}
              resizeMode='contain' source={{ uri: item.image }}
              ></Image>
              <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center',alignSelf:'center'}}>
              <Text style={{fontSize:13,
                color:'#414141',
                alignSelf:'center',
                fontWeight:'bold',
               
                }}>{item.name}</Text>
              {/* <Text style={{fontSize:13,paddingBottom:3,color:'#414141'}}>{item.subject}</Text> */}
              <View style={{marginTop:20}}></View>
              </View>
              
       
         </TouchableOpacity>
          </View>
         <View style={{width:6}}></View>
        </View>
      
      </ScrollView>

    </View>
  )
}
  render() {
   
    
    
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
       <Text style={{fontSize:15,fontWeight:'bold',paddingLeft:12,paddingTop:7}}>All Categories</Text>
       <FlatList
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={Categories}
          renderItem={({ item }) => this.Item({ item })}
          keyExtractor={item => item.id}
        />
        <View style={{marginTop:10}}></View>
      <FlatList
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={Categories1}
          renderItem={({ item }) => this.Item({ item })}
          keyExtractor={item => item.id}
        />
        <View style={{marginTop:10}}></View>
         <FlatList
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={Categories2}
          renderItem={({ item }) => this.Item({ item })}
          keyExtractor={item => item.id}/> 
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
