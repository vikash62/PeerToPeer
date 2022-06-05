import React from 'react';
import { StyleSheet, Dimensions, Text, Image, View, TouchableOpacity, AsyncStorage } from 'react-native';
import {
    Container, ListItem,
    Header, Title, Left, Right, Button,
    Body, Content, Card, CardItem
} from "native-base";
import rem from '../../style/scale';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export default class ServiceProileSideBar extends React.Component {
    Login=()=>{
Actions.loginForm();
    }
    HomeDash=()=>{
        Actions.profileScreenOfSp();
            }
    render() {
        return (
            <Content style={{ backgroundColor: 'white' }}>
            <View style={styles.menuIcon}>
            <Button
                transparent
                // onPress={() => this.openDrawer()}
                >
             <Image  source={require('../../image/menu.png')} style={styles.image} />
              </Button>
              <View style={{flexDirection:'row'}}>
              <Text style={styles.peertopeerText}>Peer</Text>
              <Text style={{
                  fontSize:20,
                  fontWeight:'bold',
                  color:'#000',
                  paddingTop:WIDTH*0.075,
                 
              }}>2</Text>
               <Text style={{
                  fontSize:20,
                  fontWeight:'bold',
                  color:'#1448be',
                  paddingTop:WIDTH*0.075,
                 
              }}>Peer</Text>
              </View>
              {/* <Button>
              <Image  source={require=('../../../image/menu.png') } 
              style={{width:20,height:20}}
              />
              </Button> */}
            </View>

                <View style={styles.avterView}>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.SignLogin}>Welcome</Text>
                    <Text style={styles.Signup}> Vikash</Text>
                
                </View>
                <View style={{marginTop:20}}></View>
                {/* <View style={{flexDirection:'row'}}>
                   <Text style={{color:'#1448be',paddingTop:15,paddingLeft:15}}>CATEGORIES</Text>
                    <Text style={styles.seealltext}>See All</Text>
                    <Icon name='long-arrow-right'size={15} color='#b5b5b5' style={styles.arrowleft}/>
                </View> */}
                </View>
                <View style={styles.Drawer_list}>
                    <View style={styles.Drawer_name_lists} >
                        <Text style={styles.HomeTutor}
                        onPress={()=>{Actions.serviceproProviderDrawer({Key:'Cleaner'})}} > My Profile</Text>
                    </View>
                    <View style={styles.Drawer_name_lists}>
                  
                        <Text style={styles.text_View} onPress={()=>{Actions.serviceProviderDrawer()}} >My Services</Text>
                    </View>  
                     <View style={styles.Drawer_name_lists}>
                        <Text style={styles.text_Viewhistory} onPress={()=>{Actions.servicemessageProviderDrawer()}}>Message</Text>
                    </View>
                
                    <View style={styles.Drawer_name_listsp} 
                        //  onStartShouldSetResponder={ ()=>this.Login()}
                    >
                        <View style={{flexDirection:'row',marginLeft:15}}>
                        <Text style={styles.text_Viewsp}  onPress={ ()=>this.Login()}>   Log Out</Text>
                    </View>
                    </View>
                </View>

            </Content>
        );
    }
}
const styles = StyleSheet.create({
    AvterImageProfile: {
        height: 140,
        width: 140,
        marginLeft: '30%',
        marginTop: 5,
    },
    avterView: {
        width: WIDTH * 1,
        borderBottomColor: '#8aa2e0',
        borderBottomWidth: 0.5,
        paddingBottom:5,
        paddingTop:20
       
    },
    SignLogin: {
        color: "#454545",
        fontSize: 15,
        marginTop: HEIGHT * 0.006,
        marginLeft: WIDTH * 0.05,
        fontFamily:'Roboto-Italic',
        fontWeight:'bold'
    },
    Signup: {
        color: "#0d45dc",
        fontSize: 15,
        marginTop: HEIGHT * 0.006,
        fontFamily:'Roboto-Italic',fontWeight:'bold',
        marginLeft:WIDTH*0.28,
        color:'#1448be'

    },
    Drawer_list: {
         flexDirection:'column',
        height: HEIGHT * 1,
        marginTop: 0
    },

    Drawer_name_lists: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.2,
        height: HEIGHT * 0.07,
        borderBottomColor: '#000',
        flexDirection:'column'
    },
    Drawer_name_listsp:{
        borderBottomWidth: 0.5,
        height: HEIGHT * 0.07,
        borderBottomColor: '#000',
        flexDirection:'column',
        justifyContent:'center',
   
    },

    HomeTutor:{
        color: '#000',
        fontSize: 15,
        fontFamily: 'roboto',
        paddingRight:WIDTH*0.41,
        fontFamily:'Roboto-Italic'
    },
    carpenter:{
        color: '#000',
        fontSize: 15,
        fontFamily: 'roboto',
        paddingRight:WIDTH*0.43,
        fontFamily:'Roboto-Italic'
    },
    text_View: {
        color: '#000',
        fontSize: 15,
        fontFamily: 'roboto',
        paddingRight:WIDTH*0.38,
        fontFamily:'Roboto-Italic'
    },
    text_Views: {
        color: '#000',
        fontSize: 15,
        fontFamily: 'roboto',
        paddingRight:WIDTH*0.44,
        fontFamily:'Roboto-Italic'
    },
    text_Viewsp:{
        color: '#454545',
        fontFamily: 'roboto',
        paddingRight:WIDTH*0,
        fontFamily:'Roboto-Italic',
    },
    text_Viewhistory:{
        color: '#000',
        fontSize: 15,
        // fontWeight:'bold',
        fontFamily: 'roboto',
        paddingRight:rem*12.5,
        fontFamily:'Roboto-Italic'
    },
    icon_color:{
        color:'#ffffff',
        paddingRight:WIDTH*0.05
    },
    leftIcon_style:{
        color:'#ffffff',
        paddingLeft:WIDTH*0.04
    },
    image:{
        width:25,
        height:25,
        marginTop:WIDTH*0.1,
        marginLeft:WIDTH*0.045
      },
      menuIcon:{
          flexDirection:'row',
          height:WIDTH*0.2,
          borderBottomWidth:1,
          borderColor:'#000'
      },
      peertopeerText:{
          fontSize:20,
          fontWeight:'bold',
          color:'#1448be',
          paddingTop:WIDTH*0.075,
          paddingLeft:10
      },
      seealltext:{
          fontSize:12,
          paddingTop:WIDTH*0.045,
          paddingLeft:WIDTH*0.24,
          color:'#b5b5b5'
      },
      arrowleft:{
          marginTop:WIDTH*0.045,
          marginLeft:10
      }
});
