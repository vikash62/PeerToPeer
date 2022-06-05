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
import { Rating, AirbnbRating } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
GymGallery = [
  {
    id: 1,
    image: "https://source.unsplash.com/1024x768/?nature",
    name:'Bathroom Cleaning',
    title:4.5,
    value:'(70,488)'
  },
  {
    id: 2,
    image:  "https://source.unsplash.com/1024x768/?water",
    name:'Kitchan Cleaning',
    title:3.5,
    value:'(70,488)'
  },
  {
    id: 3,
    image: "https://source.unsplash.com/1024x768/?girl",
    name:'Sofa Cleaning',
    title:4,
    value:'(70,488)'
  },
  {
    id: 4,
    image:   "https://source.unsplash.com/1024x768/?tree",
    name:'Window Cleaning',
    title:4.5,
    value:'(70,488)'
  },
  {
    id: 5,
    image: 'https://www.gstatic.com/webp/gallery/1.jpg',
    name:'Door Cleaning',
    title:5,
    value:'(70,488)'
  },

  {
    id: 6,
    image:'http://placeimg.com/640/480/any',
    name:'Sofa Cleaning',
    title:5,
    value:'(70,488)'
  },
  {
    id: 4,
    image:'http://placeimg.com/640/480/any',
    name:'Bathroom Cleaning',
    title:5,
    value:'(70,488)'
  },
  {
    id: 5,
    image: 'https://www.gstatic.com/webp/gallery/1.jpg',
    name:'Kitchan Cleaning',
    title:5,
    value:'(70,488)'
  },

  {
    id: 6,
    image: 'http://placeimg.com/640/480/any',
    name:'Door Cleaning',
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
          <View style={{ borderRadius: 50, height: '100%', width: '100%', paddingLeft: 8,flexDirection:'row' }}>
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
                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:13,
                  position:'absolute',
                  color:'#414141',
                  alignSelf:'center',
                  fontWeight:'bold',
                  top:-rem*0.5,
                  }}>{item.name}</Text>
                {/* <Text style={{fontSize:13,paddingBottom:3,color:'#414141'}}>{item.subject}</Text> */}
                </View>
                <View style={{flexDirection:'row',marginTop:22}}>
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
       <View style={{marginTop:20}}></View>
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
          data={GymGallery}
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
        left:rem*4,
       bottom:0.1,
        fontSize:13,
        color:'#414141'
    }
});

export default GymGallerys;