import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  ScrollView,
  Switch,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {
  minuteToStringHourMinite,
  secondsToStringHourMiniteSecond,
} from '../Utils/utils';
import SetAlarm from './SetAlarm';

export default function AlarmTimer(props) {
  // console.log('SetAlarm props:', props);
  // const { screenProps } = props;
  const { container, header, title, front } = styles;
  const alarmTimers = props.screenProps.alarmTimers.map(timerValue => {
    switch (timerValue) {
      case '-1':
        return 'Now';
      case '0':
        return 'On time';
      default:
        return minuteToStringHourMinite(timerValue);
    }
  });
  const timers = [];
  // const textContainerStyleArr = [styles.textContainer];
  const timersListArr = [styles.timersList];
  const iconStyleArr = [styles.bellIcon];
  const departuretime = props.screenProps.departureTimeInfo.valueUnitMilisecond;
  const currentTime = props.screenProps.currentTimeUnitMilisecond;
  const differenceUnitMilisecond = departuretime - currentTime;
  differenceFromNow = secondsToStringHourMiniteSecond(
    parseInt(differenceUnitMilisecond / 1000)
  );
  if (Number(differenceFromNow) <= 0 || !props.screenProps.isAlarmOn) {
    timers.forEach(timer => {
      clearTimeout(timer);
    });
    // textContainerStyleArr.push(styles.opacity);
    iconStyleArr.push(styles.opacity);
    timersListArr.push(styles.opacity);
  }
  if (props.screenProps.isAlarmOn) {
    const timer = setTimeout(
      () => props.screenProps.setCurrentTime(parseInt(new Date().getTime())),
      1000
    );
    timers.push(timer);
  }

  return (
    <View style={styles.container}>
      <Switch
        style={styles.switch}
        value={props.screenProps.isAlarmOn}
        onValueChange={() =>
          props.screenProps.setIsAlarmOnTo(!props.screenProps.isAlarmOn)
        }
      />
      <ScrollView scrollEnabled={true}>
        <TouchableHighlight
          style={styles.textContainer}
          onPress={() => {
            props.screenProps.setIsDirectionDetailsTo(true);
          }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.title}>LEAVE AT</Text>
            <Text style={styles.time}>
              {props.screenProps.departureTimeInfo.text}
            </Text>
            <Text style={styles.hour}>{differenceFromNow}</Text>
            <Image
              style={iconStyleArr}
              source={require('../assets/bell.png')}
              resizeMode={'cover'}
            />
            <Text style={timersListArr}>{alarmTimers.join(' | ')}</Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.blank}></Text>
      </ScrollView>
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
    paddingHorizontal: 10,
    backgroundColor: '#ddd',
  },
  textContainer: {
    backgroundColor: '#aaa',
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
    width: width * 0.9,
    fontSize: height / 30,
    textAlign: 'center',
    marginBottom: screenRatio * 0.005,
  },
  opacity: {
    opacity: 0.3,
  },
  bellIcon: {
    width: 30,
    height: 30,
    marginBottom: screenRatio * 0.005,
  },
  blank: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
});
