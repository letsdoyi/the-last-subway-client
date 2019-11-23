import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {
  minuteToStringHourMinite,
  secondsToStringHourMiniteSecond,
} from '../Utils/utils';
import { colors, aligns } from '../Constants/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AlarmTimer(props) {
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
    iconStyleArr.push(styles.gray);
    timersListArr.push(styles.gray);
    hourStyleArr.push(styles.gray);
  } else {
    const timer = setTimeout(
      () => props.screenProps.setCurrentTime(parseInt(new Date().getTime())),
      1000
    );
    timers.push(timer);
  }
  if (props.screenProps.isAlarmOn) {
  }

  return (
    <View style={styles.container}>
      <View style={styles.switchWrapper}>
        <Text style={styles.switchTitle}>Leaving Time Schedule</Text>
        <Switch
          value={props.screenProps.isAlarmOn}
          onValueChange={() =>
            props.screenProps.setIsAlarmOnTo(!props.screenProps.isAlarmOn)
          }
        />
      </View>
      <ScrollView scrollEnabled={true}>
        <TouchableHighlight
          onPress={() => {
            props.screenProps.setIsDirectionDetailsTo(true);
          }}>
          <View
            style={{
              justifyContent: aligns.center,
              alignItems: aligns.center,
            }}>
            <Text style={styles.title}>LEAVE AT</Text>
            <Text style={styles.time}>
              {props.screenProps.departureTimeInfo.text}
            </Text>
            <Text style={hourStyleArr}>{differenceFromNow}</Text>
            <MaterialCommunityIcons
              style={iconStyleArr}
              name="bell"
              size={30}
              color={colors.orange}
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
    height: '50%',
    top: 50,
    flexDirection: 'column',
    borderWidth: 1,
    marginTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 10,
    backgroundColor: colors.blank,
  },
  switchWrapper: {
    justifyContent: 'space-between',
    alignItems: aligns.center,
    flexDirection: 'row',
    borderColor: colors.gray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: screenRatio * 0.01,
  },
  switchTitle: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 20,
  },
  title: {
    fontSize: height / 20,
    textAlign: aligns.center,
    marginBottom: screenRatio * 0.005,
    color: colors.white,
  },
  time: {
    fontSize: height / 30,
    textAlign: aligns.center,
    marginBottom: screenRatio * 0.005,
    color: colors.white,
  },
  hour: {
    fontSize: height / 15,
    textAlign: aligns.center,
    fontWeight: '700',
    marginBottom: screenRatio * 0.005,
    color: colors.white,
  },
  timersList: {
    width: width * 0.9,
    fontSize: height / 30,
    textAlign: aligns.center,
    marginBottom: screenRatio * 0.005,
    color: colors.orange,
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
    color: colors.gray,
  },
});
