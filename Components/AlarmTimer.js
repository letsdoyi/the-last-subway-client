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
import SetLocation from './SetLocation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AlarmTimer(props) {
  // console.log('SetLocation props:', props);
  // const { screenProps } = props;
  const { container, header, title, front } = styles;
  const alarmTimers = props.screenProps.alarmTimers.map((timerValue) => {
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
  const hourStyleArr = [styles.hour];
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
    iconStyleArr.push(styles.gray);
    timersListArr.push(styles.gray);
    hourStyleArr.push(styles.gray);
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
      <View style={styles.switchWrapper}>
        <Text style={styles.switchTitle}>Leaving Time Schedule</Text>
        <Switch
          style={styles.switch}
          value={props.screenProps.isAlarmOn}
          onValueChange={() =>
            props.screenProps.setIsAlarmOnTo(!props.screenProps.isAlarmOn)
          }
        />
      </View>
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
            <Text style={hourStyleArr}>{differenceFromNow}</Text>
            <MaterialCommunityIcons
              style={iconStyleArr}
              name="bell"
              size={30}
              color="#ff9d0a"
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
    top: height * 0.05,
    height: '50%',
    flexDirection: 'column',
    borderWidth: 1,
    paddingVertical: 50,
    paddingHorizontal: 10,
    backgroundColor: '#000',
  },
  textContainer: {
  },
  switchWrapper:{
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row',
    borderColor: 'rgb(99,99,102)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: screenRatio * 0.01,
  },
  switchTitle:{
    color: '#fff',
    fontWeight: '500',
    fontSize: 20
  },
  switch: {
  },
  title: {
    fontSize: height / 20,
    textAlign: 'center',
    marginBottom: screenRatio * 0.005,
    color: '#fff'
  },
  time: {
    fontSize: height / 30,
    textAlign: 'center',
    marginBottom: screenRatio * 0.005,
    color: '#fff'
  },
  hour: {
    fontSize: height / 15,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: screenRatio * 0.005,
    color: '#fff'
  },
  timersList: {
    width: width * 0.9,
    fontSize: height / 30,
    textAlign: 'center',
    marginBottom: screenRatio * 0.005,
    color: '#ff9d0a'
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
  gray: {
    color: 'rgb(99,99,102)'
  }
});
