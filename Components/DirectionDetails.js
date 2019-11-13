import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Switch,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {
  minuteToStringHourMinite,
  secondsToStringHourMiniteSecond,
} from '../Utils/utils';
import Steps from './Steps';
import { Ionicons } from '@expo/vector-icons';

export default function AlarmTimer(props) {
  console.log('SetLocation props:', props);
  // const { screenProps } = props;
  const { container, header, title, front } = styles;
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

  //mock data
  // const directions = {
  //   bounds: {
  //     northeast: {
  //       lat: 37.508735,
  //       lng: 127.0617779,
  //     },
  //     southwest: {
  //       lat: 37.505858,
  //       lng: 127.0553893,
  //     },
  //   },
  //   copyrights: '지도 데이터 ©2019 SK telecom',
  //   legs: [
  //     {
  //       arrival_time: {
  //         text: '오전 3:00',
  //         time_zone: 'Asia/Seoul',
  //         value: 1573495200,
  //       },
  //       departure_time: {
  //         text: '오전 2:19',
  //         time_zone: 'Asia/Seoul',
  //         value: 1573492740,
  //       },
  //       distance: {
  //         text: '1.3 km',
  //         value: 1348,
  //       },
  //       duration: {
  //         text: '41분',
  //         value: 2460,
  //       },
  //       end_address: '대한민국 서울특별시 강남구 대치동 956-1',
  //       end_location: {
  //         lat: 37.505858,
  //         lng: 127.059187,
  //       },
  //       start_address: '대한민국 서울특별시 강남구 대치동 956-1',
  //       start_location: {
  //         lat: 37.505858,
  //         lng: 127.059187,
  //       },
  //       steps: [
  //         {
  //           distance: {
  //             text: '0.4 km',
  //             value: 393,
  //           },
  //           duration: {
  //             text: '7분',
  //             value: 394,
  //           },
  //           end_location: {
  //             lat: 37.508733,
  //             lng: 127.061779,
  //           },
  //           html_instructions: '한국무역센터.삼성역까지 도보',
  //           polyline: {
  //             points: 'sj|cF}fofW}PeO',
  //           },
  //           start_location: {
  //             lat: 37.505858,
  //             lng: 127.059187,
  //           },
  //           steps: [
  //             {
  //               distance: {
  //                 text: '0.4 km',
  //                 value: 393,
  //               },
  //               duration: {
  //                 text: '7분',
  //                 value: 394,
  //               },
  //               end_location: {
  //                 lat: 37.508733,
  //                 lng: 127.061779,
  //               },
  //               polyline: {
  //                 points: 'sj|cF}fofW}PeO',
  //               },
  //               start_location: {
  //                 lat: 37.505858,
  //                 lng: 127.059187,
  //               },
  //               travel_mode: 'WALKING',
  //             },
  //           ],
  //           travel_mode: 'WALKING',
  //         },
  //         {
  //           distance: {
  //             text: '0.6 km',
  //             value: 607,
  //           },
  //           duration: {
  //             text: '1분',
  //             value: 72,
  //           },
  //           end_location: {
  //             lat: 37.50671699999999,
  //             lng: 127.055391,
  //           },
  //           html_instructions: '버스 상계주공7단지행',
  //           polyline: {
  //             points: 'q||cFcwofWA?Nj@nC|LpFnW@B',
  //           },
  //           start_location: {
  //             lat: 37.508733,
  //             lng: 127.061779,
  //           },
  //           transit_details: {
  //             arrival_stop: {
  //               location: {
  //                 lat: 37.50671699999999,
  //                 lng: 127.055391,
  //               },
  //               name: '포스코건너편',
  //             },
  //             arrival_time: {
  //               text: '오전 2:53',
  //               time_zone: 'Asia/Seoul',
  //               value: 1573494826,
  //             },
  //             departure_stop: {
  //               location: {
  //                 lat: 37.508733,
  //                 lng: 127.061779,
  //               },
  //               name: '한국무역센터.삼성역',
  //             },
  //             departure_time: {
  //               text: '오전 2:52',
  //               time_zone: 'Asia/Seoul',
  //               value: 1573494754,
  //             },
  //             headsign: '상계주공7단지',
  //             headway: 1620,
  //             line: {
  //               agencies: [
  //                 {
  //                   name: '서울특별시버스운송사업조합',
  //                   url:
  //                     'http://www.odsay.com/Bus/Seoul_Main.asp?CID=1000&LMenu=1',
  //                 },
  //               ],
  //               color: '#374ff2',
  //               name: '서울 간선버스',
  //               short_name: 'N13',
  //               text_color: '#ffffff',
  //               vehicle: {
  //                 icon:
  //                   'http//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png',
  //                 name: '버스',
  //                 type: 'BUS',
  //               },
  //             },
  //             num_stops: 1,
  //           },
  //           travel_mode: 'TRANSIT',
  //         },
  //         {
  //           distance: {
  //             text: '0.3 km',
  //             value: 348,
  //           },
  //           duration: {
  //             text: '6분',
  //             value: 349,
  //           },
  //           end_location: {
  //             lat: 37.505858,
  //             lng: 127.059187,
  //           },
  //           html_instructions:
  //             '대한민국 서울특별시 강남구 대치동 956-1까지 도보',
  //           polyline: {
  //             points: '_p|cFeonfWjDwV',
  //           },
  //           start_location: {
  //             lat: 37.50671699999999,
  //             lng: 127.055391,
  //           },
  //           steps: [
  //             {
  //               distance: {
  //                 text: '0.3 km',
  //                 value: 348,
  //               },
  //               duration: {
  //                 text: '6분',
  //                 value: 349,
  //               },
  //               end_location: {
  //                 lat: 37.505858,
  //                 lng: 127.059187,
  //               },
  //               polyline: {
  //                 points: '_p|cFeonfWjDwV',
  //               },
  //               start_location: {
  //                 lat: 37.50671699999999,
  //                 lng: 127.055391,
  //               },
  //               travel_mode: 'WALKING',
  //             },
  //           ],
  //           travel_mode: 'WALKING',
  //         },
  //       ],
  //       traffic_speed_entry: [],
  //       via_waypoint: [],
  //     },
  //   ],
  //   overview_polyline: {
  //     points: 'sj|cF}fofW_QeO~ChNrFrWjDwV',
  //   },
  //   summary: '월-일: 오전 12:00~오후 11:59 · 30분마다',
  //   warnings: [
  //     '도보 경로는 베타 서비스입니다. 주의 – 이 경로에는 인도 또는 보행 경로가 누락되었을 수도 있습니다.',
  //   ],
  //   waypoint_order: [],
  // };
  let stepsSummaryArr = [];
  // const context = directions.legs[0].steps.map(step => {
  const context = props.screenProps.directions.legs.map(leg => {
    return leg.steps.map(step => {
      step.html_instructions = step.html_instructions.replace('대한민국 ', '');
      if (step.travel_mode === 'WALKING') {
        stepsSummaryArr.push({
          travel_mode: step.travel_mode,
          duration: { text: step.duration.text, value: step.duration.value },
        });
        return (
          <View style={styles.routesContainer}>
            <View style={styles.leftSection}>
              <Image
                style={{ width: 20, height: 20 }}
                source={{
                  uri:
                    'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_directions_walk_48px-512.png',
                }}
                resizeMode={'cover'}
              />
            </View>
            <View style={styles.separatorSection}>
              <Steps screenProps={{ color: '#ddd' }} style={styles.steps} />
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.contextBody}>{step.html_instructions}</Text>
              <Text>
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
          <View style={styles.routesContainer}>
            <View style={styles.leftSection}>
              <Image
                style={{
                  width: 15,
                  height: 15,
                }}
                source={{
                  uri: `http:${step.transit_details.line.vehicle.icon}`,
                }}
                resizeMode={'cover'}
              />
              {/* <Text>{step.transit_details.line.vehicle.type}</Text> */}
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
                    // color: step.transit_details.line.color,
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
        justifyContent: 'center',
        alignItems: 'center',
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
      stepStyleArr.push({ backgroundColor: '#fff' });
      if (index === 0) {
        stepStyleArr.push(leftHalfCircleStyle);
      } else if (index === stepsSummaryArr.length - 1) {
        stepStyleArr.push(rightHalfCircleStyle);
      }
      return (
        <View style={stepStyleArr}>
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
        <View style={stepStyleArr}>
          <View>
            <Text
              style={{
                color: '#ffffff',
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
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            name="ios-arrow-back"
            size={30}
            color="#000000"
          />
          <Text style={styles.backText}>Back</Text>
        </View>
      </TouchableHighlight>
      <ScrollView scrollEnabled={true}>
        <View style={styles.timesContainer}>
          <View style={styles.totalTimeContainer}>
            <Text style={styles.time}>
              {props.screenProps.directions.legs[0].duration.text}
            </Text>
            <Text>
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
    backgroundColor: '#ddd',
  },
  textContainer: {
    height: screenRatio * 0.015,
    backgroundColor: '#aaaaaa',
    justifyContent: 'center',
  },
  timesContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: screenRatio * 0.005,
  },
  totalTimeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: screenRatio * 0.001,
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
    paddingRight: 10,
  },
  hour: {
    fontSize: height / 15,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: screenRatio * 0.005,
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
    justifyContent: 'center',
  },
  separatorSection: {
    position: 'relative',
    width: 13,
  },
  rightSection: {
    position: 'relative',
    flex: 8,
    justifyContent: 'space-between',
    padding: width * 0.02,
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
  },
  contextBody: {
    fontSize: height / 50,
  },
  stops: {
    paddingVertical: 10,
  },
  steps: {
    alignContent: 'center',
  },
  blank: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  backText: {
    fontSize: 18,
    paddingLeft: 10,
    justifyContent: 'center',
  },
});
