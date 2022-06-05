import React from 'react';
import { StyleSheet, Dimensions, Text, Image, View, TouchableOpacity, AsyncStorage } from 'react-native';
import {
    Container, ListItem,
    Header, Title, Left, Right, Button,
    Body, Content, Card, CardItem
} from "native-base";
import rem from '../../../style/scale';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export default class SideBar extends React.Component {
    Login=()=>{
Actions.Login();
    }
    openDrawer=()=>{
        this.drawer._root.close()
    }
    render() {
        return (
            <Content style={{ backgroundColor: 'white' }}>
            <View style={styles.menuIcon}>
            
             <Image  source={require('../../../image/menu.png')} 
             style={styles.image} />
            
              <View style={{flexDirection:'row',marginTop:8}}>
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
                    <Text style={styles.SignLogin} onPress={()=>{Actions.loginWithUser()}}>Sign In |</Text>
                    <Text style={styles.Signup} onPress={()=>{Actions.Login()}}> Sign Up </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                   <Text style={{color:'#0148bc',paddingTop:15,paddingLeft:6,fontWeight:'bold',fontSize:18}}>Categories</Text>
                    <Text style={styles.seealltext}  onPress={()=>{Actions.allCategory()}}>See All</Text>
                    <Icon name='long-arrow-right'size={15} color='#b5b5b5' style={styles.arrowleft}
                     onPress={()=>{Actions.allCategory()}}
                    />
                </View>
                </View>
                <View style={styles.Drawer_list}>
                    <View style={styles.Drawer_name_lists} >
                        <Text style={styles.HomeTutor} onPress={()=>{Actions.homelogin({Key:'Home Tutor'})}}> Home Tutor</Text>
                    </View>
                    <View style={styles.Drawer_name_lists}>
                  
                        <Text style={styles.text_View} onPress={()=>{Actions.homelogin({Key:'Cleaner'})}}> Cleaning</Text>
                    </View>  
                     <View style={styles.Drawer_name_lists}>
                        <Text style={styles.text_Viewhistory} onPress={()=>{Actions.homelogin({Key:'Electrician'})}}>Electrician</Text>
                    </View>
                    <View style={styles.Drawer_name_lists}>
                        <Text style={styles.carpenter} onPress={()=>{Actions.homelogin({Key:'Carpenter'})}}>Carpenter</Text>
                    </View>
                    <View style={styles.Drawer_name_lists}>
                        <Text style={styles.text_Views} onPress={()=>{Actions.homelogin({Key:'Computer'})}}>Computer</Text>
                    </View>
                    {/* <View style={styles.Drawer_name_lists} 
                         onStartShouldSetResponder={ ()=>this.Login()}
                    >
                        <Text style={styles.text_Views} >Log Out</Text>
                    </View> */}
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
        width: '92%',
        borderBottomColor: '#8aa4e1',
        borderBottomWidth: 1,
        paddingBottom:5,
        marginLeft:13
       
    },
    SignLogin: {
        color: "#424242",
        fontSize: 15,
        marginTop: HEIGHT * 0.006,
        marginLeft: WIDTH * 0.015,
        fontFamily:'Roboto-Italic',
        fontWeight:'bold'
    },
    Signup: {
        color: "#424242",
        fontSize: 15,
        marginTop: HEIGHT * 0.006,
        fontFamily:'Roboto-Italic',fontWeight:'bold'

    },
    Drawer_list: {
         flexDirection:'column',
        height: HEIGHT * 1,
        marginTop: 0,
        width:'91%',
        marginLeft:14
    },

    Drawer_name_lists: {
      flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        height: HEIGHT * 0.07,
        borderBottomColor: '#8aa2e0'
    },
    HomeTutor:{
        color: '#000',
        fontSize: 15,
        fontFamily: 'roboto',
        paddingRight:WIDTH*0.36,
        fontFamily:'Roboto-Italic'
    },
    carpenter:{
        color: '#424242',
        fontSize: 15,
        fontFamily: 'roboto',
        paddingRight:WIDTH*0.41,
        fontFamily:'Roboto-Italic'
    },
    text_View: {
        color: '#424242',
        fontSize: 15,
        fontFamily: 'roboto',
        paddingRight:WIDTH*0.43,
        fontFamily:'Roboto-Italic'
    },
    text_Views: {
        color: '#424242',
        fontSize: 15,
        fontFamily: 'roboto',
        paddingRight:WIDTH*0.42,
        fontFamily:'Roboto-Italic'
    },
    text_Viewhistory:{
        color: '#424242',
        fontSize: 15,
        fontFamily: 'roboto',
        paddingRight:rem*11.2,
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
        marginTop:WIDTH*0.10,
        marginLeft:WIDTH*0.005
      },
      menuIcon:{
          flexDirection:'row',
          height:WIDTH*0.2,
          borderBottomWidth:0.5,
          borderColor:'#8aa2e0',
          width:'92%',
          marginLeft:14
      },
      peertopeerText:{
          fontSize:20,
          fontWeight:'bold',
          color:'#1448be',
          paddingTop:WIDTH*0.075,
          paddingLeft:10
      },
      seealltext:{
          fontSize:11.5,
          paddingTop:WIDTH*0.045,
          paddingLeft:WIDTH*0.2,
          color:'#424242'
      },
      arrowleft:{
          marginTop:WIDTH*0.045,
          marginLeft:10
      }
});
