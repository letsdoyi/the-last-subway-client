import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MapInputs from './MapInputs';
import MyMapView from './MyMapView';

export default function MyMapContainer(props) {
  // console.log('MyMapContainer props:', props);
  const { screenProps } = props;
  useEffect(props => {
    async function getLocationAsync() {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      console.log('permission status:', status);
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        console.log('current location:', location);
        const { latitude, longitude } = location.coords;
        console.log('latitude:', latitude);
        screenProps.setCurrentLocationToFrom(latitude, longitude);
        // console.log('after setCurrentLocation:', screenProps);
      } else {
        throw new Error('Location permission not granted');
      }
    }
    getLocationAsync();
  }, {});

  console.log('MyMapContainer props:', screenProps);
  console.log(
    'MyMapContainer props:',
    screenProps.from.location.longitude,
    screenProps.from.location.latitude
  );
  return (
    <View styles={styles.container}>
      {!!screenProps.from.location.longitude &&
        !!screenProps.from.location.latitude && (
          <>
            <MapInputs
              screenProps={props.screenProps}
            />
            <MyMapView
              styles={styles.mapView}
              screenProps={props.screenProps}
            />
          </>
        )}
      {(!screenProps.from.location.longitude ||
        !screenProps.from.location.latitude) && <Text>Loading</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapView: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // marginTop: -100,
    zIndex: -100,
  }
});
