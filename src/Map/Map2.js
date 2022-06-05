import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, PermissionsAndroid, Text,Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polygon, Marker, Callout } from 'react-native-maps'
import Geocoder from 'react-native-geocoding';
import rem from '../style/scale';
import Geolocation from 'react-native-geolocation-service';
import { Button } from 'native-base';

var Width = Dimensions.get('window').width; //full width
var Height = Dimensions.get('window').height; //full height

export default class Map2 extends Component {

  constructor(props) {
    super(props)

    this.state = {
      markers: [],
      isMapReady: true,
      position: '',
      initialPosition: {
        longitude: 0,
        latitude: 0,
        longitudeDelta: 0,
        latitudeDelta: 0
      },

      markerPosition: {
        longitude: 0,
        latitude: 0
      },
      coordinates: [
       
        { latitude: 28.596825, longitude: 77.3230393,name:'Head office', image: require('../image/sliderThree.png') },

      ]

    }

  }
  onMapLayout = () => {
    this.setState({ isMapReady: true });
  }
    //  watchID: ?number = null
  async requestLocationPermission() {
    const chckLocationPermission = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (chckLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
      alert("You've access for the location");
    } else {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            'title': 'Cool Location App required Location permission',
            'message': 'We required Location permission in order to get device location ' +
              'Please grant us.'
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // alert("You've access for the location");
        } else {
          // alert("You don't have access for the location");
        }
      } catch (err) {
        alert(err)
      }
    }
  };
  componentDidMount() {
    this.requestLocationPermission();

    Geolocation.getCurrentPosition((position) => {

      // alert(JSON.stringify(position))

      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }

      this.setState({ initialPosition: initialRegion })
      this.setState({ markerPosition: initialRegion })
      this.setState({ position: position })
    },

      (error) => alert(JSON.stringify(error)))

    this.watchID = Geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }

      this.setState({ initialPosition: lastRegion })
      this.setState({ markerPosition: lastRegion })
    })

  }

  componentWillUnmount() {
    Geolocation.clearWatch(this.watchID)
  }

  onMapLayout = () => {
    this.setState({ isMapReady: true });
  }

  // onCarouselItemChange = (index) => {
  //   let location = this.state.coordinates[index];

  //   this._map.animateToRegion({
  //     latitude: location.latitude,
  //     longitude: location.longitude,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421
  //   });

  //   this.state.markers[index].showCallout()
  // }

  onMarkerPressed = (location,index) => {
   
    this._map.animateToRegion({
      latitude:location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    });
  //  this._carousel.snapToItem(index);
  }
  // renderCarouselItem = ({ item }) =>
  //   <View style={styles.cardContainer}>
  //     <Text style={styles.cardTitle}>{item.name}</Text>
  //     <Image style={styles.cardImage} source={item.image} />
  //     </View>
  render() {
    const { position } = this.state
    return (

      <View style={styles.container}>

        <MapView style={styles.mapStyle} initialRegion={this.state.initialPosition}
          provider={PROVIDER_GOOGLE}
          loadingIndicatorColor="#e21d1d"
          onLayout={this.onMapLayout}
          ref={map => this._map = map}
          showsUserLocation={true}
        
        >
          <Polygon
            key={this.state.coordinates}
            coordinates={this.state.coordinates}
            strokeWidth={2}
            strokeColor={false}
          // fillColor={'rgba(100, 100, 200, 0.3)'}
          />
          {this.state.isMapReady &&
            <MapView.Marker
              coordinate={this.state.markerPosition}
              title={"You Are hare"}
              description={"hi"}
            >
            </MapView.Marker>
          }
          <MapView.Circle
            key={this.state.markerPosition}
            center={this.state.markerPosition}
            radius={500}
            strokeWidth={1}
            strokeColor={'#1a66ff'}
            fillColor={'rgba(230,238,255,0.5)'}
          />
          {
            this.state.coordinates.map((marker, index) => (
              <Marker
                key={marker.name}
                title={marker.name}
                 ref={ref => this.state.markers[index] = ref}
                 onPress={() => this.onMarkerPressed(marker, index)}
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              >
                <Callout>
                  <Text key={Marker.name}>{marker.name}</Text>
                  {/* <Image source={require(URL)}/> */}
                </Callout>

              </Marker>
            ))
          }
        </MapView>
        {/* <Button
           ref={(c) => { this._carousel = c; }}
           data={this.state.coordinates}
          //  renderItem={this.renderCarouselItem}
          //  onPress={(index) => this.onCarouselItemChange(index)}
        /> */}
      </View>

    )

  }

}

const styles = {
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 600,
    width: 450,
    flex: 1,
   // backgroundColor:'#fff'
  },

  mapStyle: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: Width>=391?rem*33: rem*25,
    width: '100%',
  }

}