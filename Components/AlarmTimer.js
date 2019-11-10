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
import {
  minuteToStringHourMinite,
  secondsToStringHourMiniteSecond,
} from '../Utils/utils';

export default function AlarmTimer(props) {
  // console.log('SetAlarm props:', props);
  const { screenProps } = props;
  const { container, header, title, front } = styles;
  const alarmTimers = screenProps.alarmTimers.map(timerValue => {
    switch (timerValue) {
      case '-1':
        return '10 secs from now';
      case '0':
        return 'On time';
      default:
        return minuteToStringHourMinite(timerValue);
    }
  });
  const timers = [];
  const departuretime = screenProps.departureTimeInfo.valueUnitMilisecond;
  const currentTime = screenProps.currentTimeUnitMilisecond;
  const differentUnitMilisecond = departuretime - currentTime;
  const differentFromNow = secondsToStringHourMiniteSecond(
    parseInt(differentUnitMilisecond / 1000)
  );
  if (differentFromNow === 0 || !screenProps.isAlarmOn) {
    timers.forEach(timer => {
      clearTimeout(timer);
    });
  }
  const timer = setTimeout(
    () => screenProps.setCurrentTime(parseInt(new Date().getTime())),
    1000
  );
  timers.push(timer);

  return (
    <View style={styles.container}>
      <Switch style={styles.switch} value={screenProps.isAlarmOn} />
      <Text style={styles.title}>LEAVE AT</Text>
      <Text style={styles.time}>{screenProps.departureTimeInfo.text}</Text>
      <Text style={styles.hour}>{differentFromNow}</Text>
      <Text style={styles.time}>Icon</Text>
      <Text style={styles.timersList}>{alarmTimers.join(', ')}</Text>
    </View>
  );
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const screenRatio = (width * height) / 100;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: height * 0.08,
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
