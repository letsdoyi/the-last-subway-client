import React from 'react';
import MyMapContainer from './MyMapContainer';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function SetAlarm(props) {
  // console.log('SetAlarm props:', props);
  const { container, header, title, front } = styles;
  return (
    <View style={container}>
      <View style={header}>
        <Text>Cancel</Text>
        <Text style={title}>Set Alarm</Text>
        <Text onPress={() => {}}>Save</Text>
      </View>
      <View style={styles.container}>
        {/* <TextInput placeholder="Current Location"></TextInput> */}
      </View>
      <View style={styles.container}>
        {/* <TextInput placeholder="Where to?" /> */}
        <MyMapContainer
          style={styles.container}
          screenProps={props.screenProps}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>AHEAD OF TIME ACTIVE</Text>
        <ScrollView horizontal={true} style={styles.list}>
          <Button title="5 mins"></Button>
          <Button title="10 mins"></Button>
          <Button title="15 mins"></Button>
          <Button title="1 hour"></Button>
          <Button title="1.5 hours"></Button>
          <Button title="2 hours"></Button>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // height: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title: {
    fontWeight: '700',
  },
  container: {
    minHeight: 20,
    flexDirection: 'column',
    // backgroundColor: '#ddd'
  },
  list: {
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },
  flexOne: {
    flex: 1,
  },

  flexTwo: {
    flex: 2,
  },

  front: {
    zIndex: 100,
  },
});
