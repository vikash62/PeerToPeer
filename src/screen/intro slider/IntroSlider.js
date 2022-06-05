import React from 'react';
import { StyleSheet, View, Text, Image ,ImageBackground,Dimensions,Button} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import rem from '../../style/scale';
import { TouchableHighlight } from 'react-native-gesture-handler';
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").width;
import Login from '../../screen/auth/HomeDashbord';
import { Actions } from 'react-native-router-flux';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  } 
  _renderNextButton = () => {
    return (
      <View style={{backgroundColor:'#ec306c', width:rem*13.5,
      height:rem*3,
      borderTopLeftRadius:20,
      justifyContent:'center',
      alignItems:'center',
      borderBottomLeftRadius:20,}}>
     <Text style={{color:'#fff',fontSize:18,paddingRight:65}}>Skip</Text>
      </View>
    );
  };
  _onDone = () => {
    this.setState({ showRealApp: true  });
  };
  _onSkip = () => {
    this.setState({ showRealApp: true });
  };
  _renderItem = ({ item }) => {
    return (
      <ImageBackground source={require('../../image/sliderBackground.jpg')}
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 20,
          backgroundColor:'#000'
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={{}}>
        <Image style={styles.image} source={item.image} />
        </View>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={{color:'#454545',fontWeight:'normal',position:'absolute',top:rem*53.2}}>@2020 All Copyright Reserves</Text>
      </ImageBackground>
    );
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        <View style={{flex:1}} >
      <Text onPress={Actions.home({type:'reset'})}>Hey</Text>
        </View>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          showSkipButton={true}
          showDoneButton={false}
          showNextButton={false}
          showDoneButton={true}
          onSkip={this._onSkip}
          buttonStyle={styles.buttonSkip}
          dotStyle={{backgroundColor:'#454545',marginBottom:rem*8}}
          activeDotStyle={{backgroundColor:'#ee0652',marginBottom:rem*8}}
           doneLabel='skip'
           buttonTextStyle={{paddingRight:30}}
           goToSlide={2}
          //  renderNextButton={{backgroundColor:'blue'}}
          renderDoneButton={this._renderNextButton}
           paginationStyle={{ marginRight:WIDTH>=400?rem*22: rem*22}}
        />

      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width:300,
    height:260,
    shadowOpacity:5,
opacity:5,
alignSelf:'center',

position:'relative',
top:rem*0,bottom:rem*10
  },
  text: {
    fontSize: 27,
    fontWeight:'bold',
    color: '#134bb8',
    textAlign: 'center',
    //paddingVertical: 30,
    fontStyle:'normal',
    fontFamily:'Poppins',
    fontWeight:'normal',
    // paddingBottom:rem*14,
    position:'relative',
    bottom:rem*11
    
  },
  title: {
    fontSize: 14,
    color: '#7a7b7d',
    textAlign: 'center',
    marginBottom: 16,
    position:'absolute',
    fontFamily:'Poppins',
    fontStyle:'normal',
    top:WIDTH>400?WIDTH*rem*0.0635:  WIDTH* rem*0.102
  },
  buttonSkip:{
    backgroundColor:'s1'?'#411db1':'#000',
    width:rem*10,
    height:rem*3,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    left:rem*18.5,bottom:10
  }
});

const slides = [
  {
    key: 's1',
    text: 'Choose a Tutor by reading Reviews',
    image: require('../../image/sliderOne.png'),
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title:'Search from the pool of our data easy to connect',
    text: 'Get A Home Tutor Easily',
    image: require('../../image/sliderTwo.png'),
    backgroundColor: '#febe29',    
  },
  {
    key: 's3',
    title:'Signup Now Search Students',
    text: 'Are You a Home Tutor?',
    image: require('../../image/sliderThree.png'),
    backgroundColor: '#22bcb5',
    
  },
];