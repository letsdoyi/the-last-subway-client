import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Switch,
  Dimensions,
} from 'react-native';

export default function AlarmTimer(props) {
  // console.log('SetAlarm props:', props);
  const { container, header, title, front } = styles;
  return (
    <View style={styles.container}>
      <Switch style={styles.switch} />
      <Text style={styles.title}>LEAVE AT</Text>
      <Text style={styles.time}>leaving time</Text>
      <Text style={styles.hour}>Hour Minute</Text>
      <Text style={styles.time}>Icon</Text>
      <Text style={styles.timersList}>5 min, 10 min, 15 min</Text>
    </View>
  );
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const screenRatio = (width * height) / 100;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: height * 0.12,
    height: '50%',
    flexDirection: 'column',
    borderWidth: 1,
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: '#ddd',
  },
  switch: {
    marginBottom: screenRatio * 0.01,
  },
  title: {
    fontSize: height / 20,
    textAlign: 'center',
    marginBottom: screenRatio * 0.005,
  },
  time: {
    fontSize: height / 30,
    textAlign: 'center',
    marginBottom: screenRatio * 0.005,
  },
  hour: {
    fontSize: height / 15,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: screenRatio * 0.005,
  },
  timersList: {
    fontSize: height / 30,
    textAlign: 'center',
    marginBottom: screenRatio * 0.005,
  },
});
