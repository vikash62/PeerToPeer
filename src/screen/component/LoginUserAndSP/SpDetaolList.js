// import React, { Component } from 'react';
// import { Container, Header, Content, Tabs } from 'native-base';
// import { Dimensions } from 'react-native'
// import {
//   StyleSheet,

//   View,
//   Text,
//   FlatList,
//   Image
// } from 'react-native';
// import {
//   Button,
// }
//   from "native-base";
// const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;
// import rem from '../../../style/scale';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Rating} from 'react-native-elements';
// import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
// import SignHomeDashboard from './CommonDrawer'
// import { Actions } from 'react-native-router-flux';
// export default class TabBar extends Component {
//   constructor(props) {
//     super(props);
// this.state={

// }
// alert(JSON.stringify(props.names))
//   }
//   ContectForm=()=>{
//     Actions.contectForm();
//   }
//   render() {
//     Review = [
//       {
//         id: 1,
//         image: "https://source.unsplash.com/1024x768/?nature",
//         name: 'comment meaning, definition, what is comment: an opinion that you express about ... about someone or something SYN remarkcomment on/about his comments ... ',
//         subject: 'Service Provider Name ',
//         title: 4.5,
//         value: '(70,488)'
//       },
//       {
//         id: 2,
//         image: "https://source.unsplash.com/1024x768/?water",
//         name: 'Tag 1  comment meaning, definition, what is comment: an opinion that you express about ... about someone or something SYN remarkcomment on/about his comments ... ',
//         subject: 'Service Provider Name ',
//         title: 3.5,
//         value: '(70,488)'
//       },
//       {
//         id: 3,
//         image: "https://source.unsplash.com/1024x768/?girl",
//         name: 'Tag 1  comment meaning, definition, what is comment: an opinion that you express about ... about someone or something SYN remarkcomment on/about his comments ... ',
//         subject: 'Service Provider Name ',
//         title: 4,
//         value: '(70,488)'
//       },
//       {
//         id: 4,
//         image: "https://source.unsplash.com/1024x768/?tree",
//         name: 'Tag 1  comment meaning, definition, what is comment: an opinion that you express about ... about someone or something SYN remarkcomment on/about his comments ... ',
//         subject: 'Service Provider Name ',
//         title: 4.5,
//         value: '(70,488)'
//       },
//       {
//         id: 5,
//         image: 'https://www.gstatic.com/webp/gallery/1.jpg',
//         name: 'Tag 1 comment meaning, definition, what is comment: an opinion that you express about ... about someone or something SYN remarkcomment on/about his comments ... ',
//         subject: 'Service Provider Name ',
//         title: 5,
//         value: '(70,488)'
//       },]
//     return (
//       <Container style={{ flex: 1, backgroundColor: '#fff' }}>
//         <ScrollView StyleSheet={{ marginBottom: 30 }}>
//           <View style={{}}>
//             <Text style={styles.serviceTitle}>Service Title</Text>

//             <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -rem*0.5}} >

//               <View style={styles.containerView}  >

//                 <View style={{ shadowOpacity:1,flexDirection: 'row', borderBottomWidth: 5,height:'40%',borderColor:'#f5f5f5'}}>

//                   <Image
//                     style={{
//                       height: 110,
//                       width: 110,
//                       marginTop:5,marginLeft:10,
//                       borderRadius:5
//                     }}
//                   source={require('../../../image/g.jpeg')}
//                   ></Image>
//                   <View style={{ flexDirection: 'column' }}>
//                     <Text style={styles.serviceProviderName}>Service Provider Name </Text>
//                     <View style={{ flexDirection: 'row',marginTop:rem*2.6 }}>
//                     <Button style={styles.contectButton}  onPress={()=>{this.ContectForm()}}>
//                           <Image 
//                           style={{height:18,width:18,marginLeft:1,marginTop:5}}
//                           source={require('../../../image/contact.png')}
//                           />
//                           <Text style={{fontSize:15,paddingLeft:4}}>Contact</Text>
//                       </Button>
//                       <Button style={styles.contectButtonS} 
//                         onPress={()=>{Actions.message()}}>
//                        <Image 
//                           style={{height:16,width:16,marginLeft:3}}
//                           source={require('../../../image/calls.png')}
//                           />
//                           <Text style={{fontSize:15,paddingLeft:6,color:'#fff'}}>CALL US</Text>
//                       </Button>
//                     </View>
//                   </View>
//                 </View>
//                 <View style={styles.rating}>
//                   <Rating
//                     style={{position:'absolute',bottom:rem*0.4}}
//                     onFinishRating={this.ratingCompleted}
//                     imageSize={10}
//                     readonly

//                     //  startingValue={rating}
//                     startingValue={4}
//                   />
//                   <Text style={styles.ratingNumber}>4.5(71,23)</Text>
//                 </View>
//                 <View style={styles.tegView}>
//                   <Text style={{color:'#484848'}}>Tag 1   </Text>
//                   <Text style={{color:'#484848'}}>Tag 2</Text>
//                 </View>
//                 <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }} >
//                   <View style={styles.containerViewss}>
//                     <Text style={{ fontSize: 16, fontWeight: 'bold' }}>About</Text>
//                     <Text style={{ fontSize: 13, paddingBottom: 15,color:'#484848' }}>hsgdhsagds A foundational component for inputting text into the app via a keyboard. Props provide ... If true , the text input can be multiple lines. The default ...
//                     satisfy them. In order to create a valid string for PasswordRules take a look to
//               the Apple Docs.In this Example of MultiLine Text / Break Text in React Native, we will see how can you break the text in multi line using a new line character.</Text>
//                   </View>
//                 </View>
//               </View>
//               <View style={{ marginTop: 0 }}></View>
//             </View>
//           </View>
//           <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -rem*12 }} >

//   <View style={styles.containerViews} >
//   <Text style={{alignSelf:'flex-start',paddingLeft:20,fontSize:20,fontWeight:'bold'}}>Review</Text>
//   {
//             Review.map((item, index) => {
//               return (
         
//                 <View style={{ justifyContent: 'center',alignItems: 'center',marginTop:5}} >
 
//                     <View style={styles.containerViews}  >
//                   <View style={{ flexDirection: 'row',borderBottomWidth:0.5,borderBottomColor:'#ececec',height:rem*8.8}}>
                 
//                       <Image
//                         style={{
//                           height: 80,
//                           width: 80,
//                           marginTop:rem*1.5,
//                           borderRadius:5
//                         }}
//                          source={{ uri: item.image }}
//                       ></Image>
//                          <View style={{flexDirection:'column'}}>
//                     <Text key={item.subject} style={styles.serviceProviderNames}>{item.subject}</Text>
//                     <View style={{flexDirection:'column'}}>
//                     <View >
//                 <Rating
         
//               onFinishRating={this.ratingCompleted}
//               imageSize={9}
//               readonly
//               style={styles.ratings}
//             //  startingValue={rating}
//               startingValue={item.title}
//             />
//             <View style={{flex:0.8,width:'89%'}}>
//              <Text style={{paddingLeft:13,fontSize:11,  flexWrap: 'wrap',color:'#484848'}}>{item.name}</Text>
//              </View>
//                   </View>
           
//                   </View>
//                     </View>
//                     </View>
                  
//                   </View><View style={{marginTop:0}}></View>
//                 </View>
           
//               )
//             })}
//   </View>
//   </View>
//         </ScrollView>
//       </Container>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   serviceTitle: {
//     fontSize: 19,
//     fontWeight: 'bold',
//     paddingLeft: rem * 1.5,
//     paddingTop: 10
//   },
//   containerViewss:{
//     shadowOpacity: 100,
//     width: '95%',
//     backgroundColor: '#fff',
  
//   },
//   containerView: {
//     shadowOpacity: 100,
//     width: '95%',
//     backgroundColor: '#fff',
//     borderWidth:2,
//     borderColor:'#f5f5f5',

//   },
//   containerViews:{
//     shadowOpacity: 100,
//     width: '95%',
//     backgroundColor: '#fff',
   
//   },
//   serviceProviderNames: {
//     fontWeight: 'bold',
//     fontSize: 13,
//     padding:15
//   },
//   serviceProviderName: {
//     fontWeight: 'bold',
//     fontSize: 13,
//     paddingTop:5,
//     paddingLeft:15
//   },
//   rating: {
//     flexDirection: 'row',
//     position: 'absolute',
//     top: rem * 3.4,
//     left: rem * 10.8
//   },
//   ratings: {
// position:'absolute',
// bottom:rem*0,
// left:13
//   },
//   ratingNumber: {
//     fontSize:12,
//     position: 'absolute',
//     left: rem * 5,
//     bottom: rem * 0.02,
//     color:'#484848'
//   },
//   tegView: {
//     flexDirection: 'row',
//     position: 'absolute',
//     top: rem * 4.5,
//     left: rem * 10.8
//   },
//   contectButton:{
//     width:rem*7.5,
//     height:rem*2.4,
//     marginTop:rem*2.3,
//     marginLeft:rem*0.5,
//     backgroundColor:'#fff',
//     opacity:2,
//     shadowOpacity:12,
//     borderWidth:0.2,
//     borderColor:'#000',
//     flexDirection:'row',
//     alignSelf:'center',
//     justifyContent:'center',
//     alignItems:'center',
//     alignContent:'center',
//     borderRadius:5
//   },
//   contectButtonS:{
//     width:rem*7.5,
//     height:rem*2.4,
//     marginTop:rem*2.3,
//     marginLeft:rem*0.7,
//     backgroundColor:'#5078d4',
//     opacity:2,
//     shadowOpacity:12,
//     borderWidth:0.2,
//     borderColor:'#000'  ,
//     flexDirection:'row',
//     alignSelf:'center',
//     justifyContent:'center',
//     alignItems:'center',
//     alignContent:'center',
//     borderRadius:5
//   },
// });