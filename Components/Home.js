import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';

//for noticifation
import { Notifications } from 'expo';
import registerForLocalNotificationAsync from '../Notifications/registerForLocalNotificationAsync';
import registerForPushNotificationsAsync from '../Notifications/registerForPushNotificationsAsync';

import moment from 'moment';
import { GOOGLE_API } from '../Constants/Apis';
const { DIRECTIONS, GEOCODE } = GOOGLE_API;

import credentials from '../credentials';
const { GOOGLE } = credentials;

export default function Home(props) {
  // console.info('HOME props:', props);
  const { screenProps } = props;
  const {
    to,
    setValueOfTo,
    from,
    isAlarmOn,
    directions,
    setDirections,
    alarmTimers,
    isReadyToGetDirections,
    setDepartureTimeInfo,
    departureTimeInfo,
  } = screenProps;
  console.log('alarmTimers from HOME:', alarmTimers.length);
  //Whenever to.value is changed,
  useEffect(() => {
    if (to.value !== 'Current Location') {
      fetchPlaceDetailsBy(
        to.value,
        to.location.latitude,
        to.location.longitude
      );
    }

    async function fetchPlaceDetailsBy(
      value = null,
      latitude = null,
      longitude = null
    ) {
      console.log('fetchPlaceDetailsBy ON');
      console.log('latitude,longitude', latitude, longitude);
      if (latitude && longitude) {
        console.log('GEOCODE_API ON');
        const response = await axios.get(GEOCODE.URL, {
          params: {
            latlng: `${latitude},${longitude}`,
            language: GEOCODE.LANGUAGE,
            key: GOOGLE.APIKEY,
          },
        });
        if (response.status === 200) {
          const formattedAddress = response.data.results[0].formatted_address;
          setValueOfTo(formattedAddress);
        } else {
          setValueOfTo('loading');
        }
      } else if (value) {
        //location Search by name
      }
    }
  }, [to.value]);

  console.log('isAlarmOn', isAlarmOn);
  console.log('isReadyToGetDirections:', isReadyToGetDirections);

  useEffect(() => {
    const selectedTimers = alarmTimers;
    fetchDirectionsAsync();
    console.log('departureTimeInfo:', departureTimeInfo);
    if (Object.values(departureTimeInfo).length === 0) {
      console.log('no departureTimeInfo');
    } else {
      selectedTimers.forEach(timerValueUnitMinute => {
        console.log('selectedTimers:', timerValueUnitMinute);
        console.log('잘나오나', departureTimeInfo.valueUnitMilisecond);
        triggerLocalNotificationFunction(
          timerValueUnitMinute,
          departureTimeInfo.valueUnitMilisecond
        );
      });
    }

    async function fetchDirectionsAsync() {
      // const localTimeOfTomarrow = moment()
      //   .add(1, 'days')
      //   .format('YYYY-MM-DD');
      // const tomorrow3AMUnitSecond =
      //   new Date(`${localTimeOfTomarrow}T03:00:00`).getTime() / 1000;
      // console.log('localTimeOfTomarrow:', new Date(tomorrow3AMUnitSecond * 1000));
      const milisecondsOfoneDay = 1000 * 60 * 60 * 24;
      const tomorrow3amUnitsecond =
        (new Date().setHours(3, 0, 0, 0) + milisecondsOfoneDay) / 1000;
      console.log(
        'tomorrow3am vscode에서는 왜 다르게 나오는지 질문하기:',
        new Date(tomorrow3amUnitsecond * 1000)
      );

      const response = await axios.get(DIRECTIONS.URL, {
        params: {
          origin: `${to.location.latitude},${to.location.longitude}`,
          destination: `${from.location.latitude},${from.location.longitude}`,
          mode: DIRECTIONS.MODE,
          transit_mode: DIRECTIONS.TRANSIT_MODE,
          arrival_time: `${tomorrow3amUnitsecond}`,
          language: DIRECTIONS.LANGUAGE,
          key: GOOGLE.APIKEY,
        },
      });
      if (isAlarmOn && isReadyToGetDirections) {
        const directionsApiResult = response.data;
        console.log(
          'directionsApiResult:',
          directionsApiResult
        );
        if (directionsApiResult.status === 'OK') {
          console.log(
            'status 확인:',
            directionsApiResult.routes[0].legs[0].departure_time
          );
          setDepartureTimeInfo(
            directionsApiResult.routes[0].legs[0].departure_time
          );
          setDirections(directionsApiResult.routes[0]);
        } else {
          console.log('Cannot get Any directions info');
          alart('Cannot get Any directions info, Try again!');
        }
      }
    }
  }, [isReadyToGetDirections]);

  // async function triggerPushNotificationFunction() {
  //   await registerForPushNotificationsAsync();
  // }

  async function triggerLocalNotificationFunction(
    timerValueUnitMinute,
    departureTimeValueUnitMilisecond
  ) {
    await registerForLocalNotificationAsync(
      timerValueUnitMinute,
      departureTimeValueUnitMilisecond
    );
  }

  Notifications.addListener(handleNotification);

  function handleNotification() {
    // console.log('handleNotification on');
    props.navigation.navigate('Alarm', {
      itemId: 86,
      otherParam: 'anything you want here',
    });
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Set Alarm first</Text>
      <Button
        title="Set Alarm"
        onPress={() => {
          props.navigation.navigate('SetAlarm', {});
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
