import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';
import rem from '../../../style/scale';
import { ScrollView } from 'react-native-gesture-handler';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width;
import { Actions } from 'react-native-router-flux';
import { Rating, AirbnbRating } from 'react-native-elements';

Categorytittle = [
  {
    id: 1,
    image: "https://source.unsplash.com/1024x768/?nature",
    name:'Name here...1',
    subject:'Physics',
    title:4.5,
    value:'(70,488)'
  },
  {
    id: 2,
    image:  "https://source.unsplash.com/1024x768/?water",
    name:'Name here...2',
    subject:'Chemistry',
    title:3.5,
    value:'(70,488)'
  },
  {
    id: 3,
    image: "https://source.unsplash.com/1024x768/?girl",
    name:'Name here...3',
    subject:'Math',
    title:4,
    value:'(70,488)'
  },
  {
    id: 4,
    image:   "https://source.unsplash.com/1024x768/?tree",
    name:'Name here...4',
    subject:'Biology',
    title:4.5,
    value:'(70,488)'
  },
  {
    id: 5,
    image: 'https://www.gstatic.com/webp/gallery/1.jpg',
    name:'Name here...5',
    subject:'Science',
    title:5,
    value:'(70,488)'
  },

  {
    id: 6,
    image:'http://placeimg.com/640/480/any',
    name:'Name here...',
    subject:'computer',
    title:5,
    value:'(70,488)'
  },
  {
    id: 7,
    image:'http://placeimg.com/640/480/any',
    name:'Name here...',
    subject:'Chemistry',
    title:5,
    value:'(70,488)'
  },
  {
    id: 8,
    image: 'https://www.gstatic.com/webp/gallery/1.jpg',
    name:'Name here...',
    subject:'Chemistry',
    title:5,
    value:'(70,488)'
  },

  {
    id: 9,
    image: 'http://placeimg.com/640/480/any',
    name:'Name here...',
    subject:'Chemistry',
    title:5,
    value:'(70,488)'
  }

]

class GymGallerys extends Component {
  constructor() {
    super();
    this.state = () => {
       
    }
  }

  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }
  Item = ({ item }) => {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View style={{ height: '100%', width: '100%', paddingLeft: 8,flexDirection:'row' }}>
            <View style={{flexDirection:'column'}} >
            <TouchableOpacity onPress={()=>{Actions.commonDrawerSubcategory()}}>
              <Image
                style={{
                   height:130,
                   width:130,
                   borderRadius:10
                }}
                resizeMode='contain' source={{ uri: item.image }}
                ></Image>
                {/* <Text style={{fontSize:13,fontWeight:'bold'}}>{item.name}</Text> */}
                <Text style={{fontSize:13,
                  position:'absolute',
                  color:'#414141',
                  alignSelf:'center',
                  fontWeight:'bold',
                  top:rem*9.4
                  }}>{item.subject}</Text>
                <View style={{flexDirection:'row',marginTop:15}}>
                <Rating
              style={styles.ratingstyle}
              onFinishRating={this.ratingCompleted}
              imageSize={9}
              readonly
            //  startingValue={rating}
              startingValue={item.title}
            />
            <Text style={styles.ratingNumber}>{item.title} {item.value} </Text>
            
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
      <View style={styles.container}>
        <FlatList
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={Categorytittle}
          renderItem={({ item }) => this.Item({ item })}
          keyExtractor={item => item.id}
        />
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
    ratingstyle:{
        marginRight:rem*7
    },
    ratingNumber:{
        position:'absolute',
        left:rem*5,
       bottom:0.45,
       fontSize:12,
       color:'#414141'
    }
});

export default GymGallerys;