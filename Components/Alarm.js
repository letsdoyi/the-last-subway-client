import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function Alarm(props) {
  // console.log('SetAlarm props:', props);
  const { container, header, title, front } = styles;
  return (
    <View style={container}>

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
