import React, { Component } from 'react';
import { Container, Header, Content, Tabs } from 'native-base';
import { Dimensions } from 'react-native'
import {
  StyleSheet,

  View,
  Text,
  FlatList,
  Image
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import rem from '../../../style/scale';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rating, Button } from 'react-native-elements';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import  SignHomeDashboard from './CommonDrawer'
import { Actions } from 'react-native-router-flux';
export default class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state=()=>{

    }
    //  alert(JSON.stringify(props))
  }
ContectForm=()=>{
  Actions.contectForm();
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
      <Container style={{ flex: 1, backgroundColor: '#efefef' }}>
        <ScrollView StyleSheet={{marginBottom:30}}>
        <View style={{}}>
    <Text style={styles.serviceTitle}>{this.props.Key}</Text>
          {
            SubCategoryList.map((item, index) => {
              return (
         
                <View style={{ justifyContent: 'center', alignItems: 'center',marginTop:10 }} >
            
                    <View style={styles.containerView}  >
                  
                  <View style={{ flexDirection: 'row' }} onStartShouldSetResponder={ ()=>{Actions.SpDetailDrawer()}}>
                 
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
                    <Button
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
                      />
                        <Button
                        title="CALL US"
                        buttonStyle={styles.contectButtonS}
                        onPress={()=>{Actions.message()}}
                        icon={
                          <Icon
                            name="phone"
                            size={15}
                            color="#335fcb"
                          />
                        }
                        titleStyle={{fontSize:14,color:'#000',paddingLeft:5}}
                      />
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
                      <Text style={{color:'#484848'}}>{item.name}</Text>
                      <Text style={{color:'#484848'}}>{item.names}</Text>
           </View>   
                  </View>
        
                  <View style={{marginTop:10}}></View>
                </View>
           
              )
            })}
        </View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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
bottom:rem*0.01,
color:'#484848'
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
  backgroundColor:'#6285d6',
  opacity:2,
  shadowOpacity:12,
  borderWidth:0.2,
  borderColor:'#000'
}
});