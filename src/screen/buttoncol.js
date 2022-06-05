import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';
// import rem from '../../../style/scale';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { Button ,} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Checkbox from 'react-native-custom-checkbox';
var tempCheckValues = [];

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedButton: null };
        this.selectionOnPress = this.selectionOnPress.bind(this);
    }
    
    selectionOnPress(userType) {
        this.setState({ selectedButton: userType });
    }
    
    render() {
        return (
            <View>
                <Text style={{fontSize:12}}>
                    Choose Type of User
                </Text>
                <TouchableOpacity style={styles.submit}
                    onPress={() => this.selectionOnPress("BASIC")}
                >
                    <Text
                        style={{
                            backgroundColor:
                                this.state.selectedButton === "BASIC"
                                    ? "red"
                                    : "grey"
                        }}
                    >
                        <Text style={styles.switchButtonsText}>BASIC</Text>
                    </Text>
                </TouchableOpacity>
    
                <TouchableOpacity style= {styles.submit}
                    onPress={() => this.selectionOnPress("INTERMEDIATE")}
                >
                    <Text
                        style={{
                            backgroundColor:
                                this.state.selectedButton === "INTERMEDIATE"
                                    ? "red"
                                    : "grey"
                        }}
                    >
                        <Text style={styles.switchButtonsText}>
                            INTERMEDIATE
                        </Text>
                    </Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.submit}
                    onPress={() => this.selectionOnPress("ADVANCED")}
                >
                    <Text
                        style={{
                            backgroundColor:
                                this.state.selectedButton === "ADVANCED"
                                    ? "red"
                                    : "grey"
                        }}
                    >
                        <Text style={styles.switchButtonsText}>
                            INTERMEDIATE
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
    }
   const styles =StyleSheet.create({
    submit:{
        width:'30%',
        height:Math.max(35,0),
        backgroundColor:'#e6e8e7',
        marginTop:rem*4,
      alignSelf:'center',
      borderRadius:4,
      }
   })
   