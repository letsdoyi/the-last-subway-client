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
import { Icon } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { initialState } from 'react-native-google-autocomplete';

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
    currentLocationIconWrapper: {
      position: 'absolute',
      bottom: '15%',
      right: 10,
    },
  });
  const initialRegion = {
    latitude: screenProps.to.location.latitude,
    longitude: screenProps.to.location.longitude,
    latitudeDelta: 0.045,
    longitudeDelta: 0.045,
  };
  const backToCurrent = () => {
    map.animateToRegion({
      latitude: screenProps.from.location.latitude,
      longitude: screenProps.from.location.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
    });
  };

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={initialRegion}
        showsUserLocation={true}
        showsCompass={true}
        ref={map => {
          this.map = map;
        }}
        onRegionChangeComplete={region => {
          screenProps.onMarkerChange(region.latitude, region.longitude);
        }}></MapView>
      <MaterialIcons
        style={styles.pinIcon}
        name="location-on"
        size={45}
        color="#000000"
      />
      <View style={styles.currentLocationIconWrapper}>
        <Icon
          raised
          name="my-location"
          type="material"
          color="black"
          onPress={() => backToCurrent()}
        />
      </View>
    </>
  );
}
