import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {
  minuteToStringHourMinite,
  secondsToStringHourMiniteSecond,
} from '../Utils/utils';
import Steps from './Steps';
import {colors, aligns} from '../Constants/styles'
import { Ionicons } from '@expo/vector-icons';

export default function AlarmTimer(props) {
  const alarmTimers = props.screenProps.alarmTimers.map(timerValue => {
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
  const departuretime = props.screenProps.departureTimeInfo.valueUnitMilisecond;
  const currentTime = props.screenProps.currentTimeUnitMilisecond;
  const differentUnitMilisecond = departuretime - currentTime;
  differentFromNow = secondsToStringHourMiniteSecond(
    parseInt(differentUnitMilisecond / 1000)
  );
  if (differentFromNow === 0 || !props.screenProps.isAlarmOn) {
    timers.forEach(timer => {
      clearTimeout(timer);
    });
  }
  if (props.screenProps.isAlarmOn) {
    const timer = setTimeout(
      () => props.screenProps.setCurrentTime(parseInt(new Date().getTime())),
      1000
    );
    timers.push(timer);
  }

  let stepsSummaryArr = [];
  const context = props.screenProps.directions.legs.map((leg) => {
    return leg.steps.map((step, index) => {
      if (step.travel_mode === 'WALKING') {
        stepsSummaryArr.push({
          travel_mode: step.travel_mode,
          duration: { text: step.duration.text, value: step.duration.value },
        });
        return (
          <View style={styles.routesContainer} key={index}>
            <View style={styles.leftSection}>
              <Image
                style={{
                  width: 15,
                  height: 15,
                  marginLeft: 5,
                }}
                source={{
                  uri:
                    'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_directions_walk_48px-512.png',
                }}
                resizeMode={'cover'}
              />
            </View>
            <View style={styles.separatorSection}>
              <Steps screenProps={{ color: colors.lightGray }} style={styles.steps} />
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.contextBody}>{step.html_instructions}</Text>
              <Text style={styles.stops}>
                Walk {step.duration.text} | {step.distance.text}
              </Text>
            </View>
          </View>
        );
      } else {
        stepsSummaryArr.push({
          travel_mode: step.travel_mode,
          duration: { text: step.duration.text, value: step.duration.value },
          lineColor: step.transit_details.line.color,
          lineText: step.transit_details.line.short_name,
        });
        return (
          <View style={styles.routesContainer} key={index}>
            <View style={styles.leftSection}>
              <Image
                style={{
                  width: 15,
                  height: 15,
                  marginLeft: 5,
                }}
                source={{
                  uri: `http:${step.transit_details.line.vehicle.icon}`,
                }}
                resizeMode={'cover'}
              />
            </View>
            <View style={styles.separatorSection}>
              <Steps
                screenProps={{ color: step.transit_details.line.color }}
                style={styles.steps}
              />
            </View>
            <View style={styles.rightSection}>
              <Text
                style={[
                  {
                    backgroundColor: step.transit_details.line.color,
                    color: step.transit_details.line.text_color,
                    padding: 10,
                    fontWeight: '700',
                  },
                  styles.lineText,
                  styles.contextTitle,
                ]}>
                {step.transit_details.line.short_name}
              </Text>
              <Text style={[styles.textBold, styles.contextTitle]}>
                {step.transit_details.departure_stop.name},{' '}
                {step.transit_details.departure_time.text}
              </Text>
              <Text style={[styles.stops]}>
                {' '}
                > Ride {step.transit_details.num_stops} stops (
                {step.duration.text}){' '}
              </Text>
              <Text style={[styles.textBold, styles.contextTitle]}>
                {step.transit_details.headsign},{' '}
                {step.transit_details.arrival_time.text}
              </Text>
            </View>
          </View>
        );
      }
    });
  });
  const totalDurationValue =
    props.screenProps.directions.legs[0].duration.value;
  const lineGraphHeight = 15;
  stepsSummaryArr = stepsSummaryArr.map((step, index) => {
    const stepStyleArr = [
      {
        width: (step.duration.value / totalDurationValue) * width * 0.9,
        minWidth: 20,
        height: lineGraphHeight,
        justifyContent: aligns.center,
        alignItems: aligns.center,
        flexDirection: 'row',
      },
    ];
    const leftHalfCircleStyle = {
      borderTopLeftRadius: lineGraphHeight,
      borderBottomLeftRadius: lineGraphHeight,
    };
    const rightHalfCircleStyle = {
      borderTopRightRadius: lineGraphHeight,
      borderBottomRightRadius: lineGraphHeight,
    };
    if (step.travel_mode === 'WALKING') {
      stepStyleArr.push({ backgroundColor: colors.white });
      if (index === 0) {
        stepStyleArr.push(leftHalfCircleStyle);
      } else if (index === stepsSummaryArr.length - 1) {
        stepStyleArr.push(rightHalfCircleStyle);
      }
      return (
        <View style={stepStyleArr} key={index}>
          <View>
            <Text
              style={{
                fontSize: 10,
              }}>
              {step.duration.text}
            </Text>
          </View>
        </View>
      );
    } else {
      stepStyleArr.push({ backgroundColor: step.lineColor });
      if (index === 0) {
        stepStyleArr.push(leftHalfCircleStyle);
      } else if (index === stepsSummaryArr.length - 1) {
        stepStyleArr.push(rightHalfCircleStyle);
      }
      return (
        <View style={stepStyleArr} key={index}>
          <View>
            <Text
              style={{
                color: colors.white,
                fontSize: 10,
              }}>
              {step.duration.text}
            </Text>
          </View>
        </View>
      );
    }
  });

  return (
    <View style={[styles.container, styles.scrollView]}>
      <TouchableHighlight
        style={styles.textContainer}
        onPress={() => {
          props.screenProps.setIsDirectionDetailsTo(false);
        }}>
        <View style={{ flexDirection: 'row', alignItems: aligns.center }}>
          <Ionicons name="ios-arrow-back" size={30} color= {colors.iosBlue} />
          <Text style={styles.backText}>Back</Text>
        </View>
      </TouchableHighlight>
      <ScrollView scrollEnabled={true}>
        <View style={styles.timesContainer}>
          <View style={styles.totalTimeContainer}>
            <Text style={styles.time}>
              {props.screenProps.directions.legs[0].duration.text}
            </Text>
            <Text style={styles.contextBody}>
              {props.screenProps.directions.legs[0].departure_time.text} ~
              {props.screenProps.directions.legs[0].arrival_time.text}
            </Text>
          </View>
          <View
            style={{
              width: width - 20,
              flexDirection: 'row',
              marginBottom: screenRatio * 0.001,
            }}>
            {stepsSummaryArr}
          </View>
          <Text
            style={{
              fontSize: 10,
              color: colors.white,
            }}>
            심야버스의 소요시간은 정확하지 않을 수 있습니다.
          </Text>
        </View>
        {context}
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
    flexDirection: 'column',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.black,
  },
  textContainer: {
    height: screenRatio * 0.015,
    justifyContent: aligns.center,
  },
  timesContainer: {
    flexDirection: 'column',
    justifyContent: aligns.center,
    marginBottom: screenRatio * 0.005,
  },
  totalTimeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: screenRatio * 0.001,
  },
  stepsSummaryArr: {},
  switch: {
    marginBottom: screenRatio * 0.01,
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
    paddingRight: 10,
    color: colors.white,
  },
  hour: {
    fontSize: height / 15,
    textAlign: aligns.center,
    fontWeight: '700',
    marginBottom: screenRatio * 0.005,
    color: colors.white,
  },
  separator: {
    marginHorizontal: 20,
  },
  routesContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: screenRatio * 0.001,
  },
  leftSection: {
    width: 20,
    justifyContent: aligns.center,
    backgroundColor: colors.darkGray,
  },
  separatorSection: {
    position: 'relative',
    width: 13,
    backgroundColor: colors.darkGray,
  },
  rightSection: {
    position: 'relative',
    flex: 8,
    justifyContent: 'space-between',
    padding: width * 0.02,
    backgroundColor: colors.darkGray,
  },
  lineText: {
    position: 'absolute',
    top: width * 0.02,
    right: width * 0.02,
  },
  textBold: {
    fontWeight: '700',
  },
  contextTitle: {
    fontSize: height / 45,
    color: colors.white,
  },
  contextBody: {
    fontSize: height / 50,
    color: colors.white,
  },
  stops: {
    paddingVertical: 10,
    color: colors.white,
  },
  steps: {
    alignContent: aligns.center,
  },
  blank: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  backText: {
    fontSize: 18,
    paddingLeft: 10,
    justifyContent: aligns.center,
    color: colors.iosBlue,
  },
});
