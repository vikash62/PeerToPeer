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
    HomeDash=()=>{
        Actions.profileScreenOfSp();
            }
            openDrawer=()=>{
              this.setState({
                  openDrawer:false
              })
            }
    render() {
        return (
            <Content style={{ backgroundColor: '#efefef' }}>
            <View style={styles.menuIcon}>
            <Button
                transparent
                onClose={() => this.openDrawer()}
                >
             <Image  source={require('../../../image/menu.png')} style={styles.image} />
              </Button>
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
                    <Text style={styles.SignLogin}>Welcome</Text>
                    <Text style={styles.Signup}> Vikash</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                   <Text style={{color:'#1448be',paddingTop:15,paddingLeft:2,fontSize:18}}>Categories</Text>
                    <Text style={styles.seealltext}  onPress={()=>{Actions.allCategory()}}>See All</Text>
                    <Icon name='long-arrow-right'size={15} color='#b5b5b5' style={styles.arrowleft}
                     onPress={()=>{Actions.allCategory()}}
                    />
                </View>
                </View>
                <View style={styles.Drawer_list}>
                    <View style={styles.Drawer_name_lists} >
                        <Text style={styles.HomeTutor} onPress={()=>{Actions.userLoginWiths({Category:'Home Tutor'})}}> Home Tutor</Text>
                    </View>
                    <View style={styles.Drawer_name_lists}>
                  
                        <Text style={styles.text_View} onPress={()=>{Actions.userLoginWiths({Category:'Cleaner'})}} > Cleaning</Text>
                    </View>  
                     <View style={styles.Drawer_name_lists}>
                        <Text style={styles.text_Viewhistory} onPress={()=>{Actions.userLoginWiths({Category:'Electrician'})}}>Electrician</Text>
                    </View>
                    <View style={styles.Drawer_name_lists}>
                        <Text style={styles.carpenter} onPress={()=>{Actions.userLoginWiths({Category:'Carpenter'})}}>Carpenter</Text>
                    </View> 
                    <View style={styles.Drawer_name_lists}>
                        <Text style={styles.text_Views} onPress={()=>{Actions.userLoginWiths({Category:'Computer'})}}>Computer</Text>
                    </View>
                    <View style={styles.Drawer_name_listsp} 
                        //  onStartShouldSetResponder={ ()=>this.Login()}
                    >
                        <View style={{flexDirection:'row',marginLeft:7}}>
                        <Text style={styles.text_Viewsp}  onPress={ ()=>this.HomeDash()}>SP Profile</Text>
                        <Text style={styles.text_Viewsp}  onPress={ ()=>this.Login()}>  |  Log Out</Text>
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
        width: '92%',
        borderBottomColor: '#8aa4e1',
        borderBottomWidth: 1,
        paddingBottom:5,
        marginLeft:13
       
    },
    SignLogin: {
        color: "#454545",
        fontSize: 15,
        marginTop: HEIGHT * 0.006,
        marginLeft: WIDTH * 0.012,
        fontFamily:'Roboto-Italic',
        fontWeight:'bold'
    },
    Signup: {
        color: "#0d45bc",
        fontSize: 15,
        marginTop: HEIGHT * 0.006,
        fontFamily:'Roboto-Italic',fontWeight:'bold',
        marginLeft:WIDTH*0.32,
        color:'#1448be',
    
    },
    Drawer_list: {
         flexDirection:'column',
        height: HEIGHT * 1,
        marginTop: 0,
        width:'91%',
        marginLeft:13
    },

    Drawer_name_lists: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.7,
        height: HEIGHT * 0.07,
        borderBottomColor: '#8aa2e0',
        flexDirection:'column'
    },
    Drawer_name_listsp:{
        borderBottomWidth: 0.5,
        height: HEIGHT * 0.07,
        borderBottomColor: '#8aa2e0',
        flexDirection:'column',
        justifyContent:'center',
   
    },

    HomeTutor:{
        color: '#000',
        fontSize: 15,
        fontFamily: 'roboto',
        paddingRight:WIDTH*0.36,
        fontFamily:'Roboto-Italic'
    },
    carpenter:{
        color: '#000',
        fontSize: 15,
        fontFamily: 'roboto',
        paddingRight:WIDTH*0.41,
        fontFamily:'Roboto-Italic'
    },
    text_View: {
        color: '#000',
        fontSize: 15,
        fontFamily: 'roboto',
        paddingRight:WIDTH*0.43,
        fontFamily:'Roboto-Italic'
    },
    text_Views: {
        color: '#000',
        fontSize: 15,
        fontFamily: 'roboto',
        paddingRight:WIDTH*0.42,
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
        marginTop:WIDTH*0.16,
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
          fontSize:12,
          paddingTop:WIDTH*0.045,
          paddingLeft:WIDTH*0.22,
          color:'#b5b5b5'
      },
      arrowleft:{
          marginTop:WIDTH*0.045,
          marginLeft:10
      }
});
