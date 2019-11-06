import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MapInput from './MapInputs';
import MyMapInputs from './MyMapInputs';
import MyMapView from './MyMapView';

export default function MyMapContainer(props) {
  async function getLocationAsync() {
    const { status } = await Permissions.askAsync(
      Permissions.LOCATION
    );
    console.log('permission status:', status);
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      console.log('location:', location);
    } else {
      throw new Error('Location permission not granted');
    }
  }
  getLocationAsync();

  return (
    <>
      <MapInputs styles={styles.container} />
      <MyMapView styles={styles.container} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
