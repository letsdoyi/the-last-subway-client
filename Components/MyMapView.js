import React from 'react';
import MapView from 'react-native-maps';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function MyMapView(props) {
  // console.log('MyMapView props:', props);
  const { screenProps } = props;
  const { Marker, PROVIDER_GOOGLE } = MapView;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: -1,
    },
    pinIcon: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: [{ translateX: -30 * 0.5 }, { translateY: -30 * 0.7 }],
      shadowColor: 'black',
      shadowOpacity: 0.5,
      shadowRadius: 5,
      //ios
      shadowOffset: { width: 1, height: 6 },
      textShadowRadius: 10,
      //android
      textShadowOffset: { width: 1, height: 2 },
    },
  });

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        // region={this.getMapRegion()}
        initialRegion={{
          latitude: screenProps.to.location.latitude,
          longitude: screenProps.to.location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.0321,
        }}
        // region={{
        //   latitude: screenProps.to.location.latitude,
        //   longitude: screenProps.to.location.longitude,
        //   latitudeDelta: 0.01,
        //   longitudeDelta: 0.0321,
        // }}
        showsUserLocation={true}
        onRegionChangeComplete={region => {
          screenProps.onMarkerChange(region.latitude, region.longitude);
        }}>
        {/* <Marker
        description="Destination"
        // coordinate={this.getMapRegion()}
        coordinate={{
          latitude: screenProps.to.location.latitude,
          longitude: screenProps.to.location.longitude,
        }}
        onDragEnd={e => {
          const latitude = e.nativeEvent.coordinate.latitude;
          const longitude = e.nativeEvent.coordinate.longitude;
          console.log(e.nativeEvent);
          screenProps.onMarkerChange(latitude, longitude);}}
      ></Marker> */}
      </MapView>
      <MaterialIcons
        style={styles.pinIcon}
        name="location-on"
        size={45}
        color="#000000"
      />
    </>
  );
}
