import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';

export default function MyMapView(props) {
  console.log('MyMapView props:', props);
  const { screenProps } = props;
  const { Marker, PROVIDER_GOOGLE } = MapView;

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.mapStyle}
      region={{
        latitude: screenProps.to.location.latitude + 0.001,
        longitude: screenProps.to.location.longitude + 0.001,
        latitudeDelta: 0.01,
        longitudeDelta: 0.0321,
      }}
      showsUserLocation={true}>
      <Marker
        draggable
        description="Destination"
        coordinate={{
          latitude: screenProps.to.location.latitude,
          longitude: screenProps.to.location.longitude,
        }}
        onDragEnd={e => {
          const latitude = e.nativeEvent.coordinate.latitude;
          const longitude = e.nativeEvent.coordinate.longitude;
          console.log(e.nativeEvent);
          screenProps.onMarkerChange(latitude, longitude);
        }}></Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: '100%',
    height: '60%',
  },
});
