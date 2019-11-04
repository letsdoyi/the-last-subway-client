import React from 'react';
import MyMapView from './MyMapView';
import MapInput from './MapInput';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function SetAlarm(props) {
  console.log('props:', props);
  return (
    <>
      <View style={styles.header}>
        <Text>Cancel</Text>
        <Text style={styles.title}>Set Alarm</Text>
        <Text onPress={() => {}}>Save</Text>
      </View>
      <View style={styles.container}>
        <View />
        <TextInput placeholder="Current Location"></TextInput>
      </View>
      <View style={styles.container}>
        <View />
        <TextInput placeholder="Where to?"></TextInput>
        <MapInput />
        <MyMapView />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>AHEAD OF TIME ACTIVE</Text>
        <View style={styles.list}>
          <Button title="5 mins"></Button>
          <Button title="10 mins"></Button>
          <Button title="15 mins"></Button>
          <Button title="1 hour"></Button>
          <Button title="1.5 hours"></Button>
          <Button title="2 hours"></Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title: {
    fontWeight: '700',
  },
  container: {
    flexDirection: 'column',
  },
  list:{
    flexDirection: 'row'
  }
});
