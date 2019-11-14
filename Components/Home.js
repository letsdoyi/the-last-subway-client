import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import SettingManager from './SettingManager';
import SelectedLocations from './SelectedLocations';
import AlarmTimer from './AlarmTimer';
import DirectionDetails from './DirectionDetails';
import { Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';

//for noticifation
import { Notifications } from 'expo';
import registerForLocalNotificationAsync from '../Notifications/registerForLocalNotificationAsync';
// import registerForPushNotificationsAsync from '../Notifications/registerForPushNotificationsAsync';

import { GOOGLE_API } from '../Constants/Apis';
const { DIRECTIONS, GEOCODE } = GOOGLE_API;

import credentials from '../credentials';
const { GOOGLE } = credentials;

export default function Home(props) {
  // console.info('HOME props:', props);
  const { screenProps, navigation } = props;
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
      // console.log('fetchPlaceDetailsBy ON');
      // console.log('latitude,longitude', latitude, longitude);
      if (latitude && longitude) {
        const response = await axios.get(GEOCODE.URL, {
          params: {
            latlng: `${latitude},${longitude}`,
            language: GEOCODE.LANGUAGE,
            key: GOOGLE.APIKEY,
          },
        });
        console.log('response:', response);
        if (response.status === 200) {
          const formattedAddress = response.data.results[0].formatted_address;
          setValueOfTo(formattedAddress);
        } else if (response.status === 500) {
          setValueOfTo('Please choose another location');
        } else {
          setValueOfTo('Loading...');
        }
      } else if (value) {
        //location Search by name
      }
    }
  }, [to.location.longitude]);

  // console.log('isAlarmOn', isAlarmOn);
  // console.log('isReadyToGetDirections:', isReadyToGetDirections);

  useEffect(() => {
    const selectedTimers = alarmTimers;
    fetchDirectionsAsync();
    // console.log('departureTimeInfo:', departureTimeInfo);
    if (Object.values(departureTimeInfo).length === 0) {
      // console.log('no departureTimeInfo');
    } else {
      selectedTimers.forEach(timerValueUnitMinute => {
        // console.log('selectedTimers:', timerValueUnitMinute);
        // console.log('잘나오나', departureTimeInfo.valueUnitMilisecond);
        triggerLocalNotificationFunction(
          timerValueUnitMinute,
          departureTimeInfo.valueUnitMilisecond
        );
      });
    }

    async function fetchDirectionsAsync() {
      const milisecondsOfoneDay = 1000 * 60 * 60 * 24;
      const tomorrow2amUnitsecond =
        (new Date().setHours(2, 0, 0, 0) + milisecondsOfoneDay) / 1000;
      // console.log(
      //   'tomorrow2am vscode에서는 왜 다르게 나오는지 질문하기:',
      //   new Date(tomorrow3amUnitsecond * 1000)
      // );

      const {
        MODE,
        TRANSIT_MODE,
        TRANSIT_ROUTING_PREFERENCE,
        LANGUAGE,
      } = DIRECTIONS;
      const response = await axios.get(DIRECTIONS.URL, {
        params: {
          origin: `${from.location.latitude},${from.location.longitude}`,
          destination: `${to.location.latitude},${to.location.longitude}`,
          mode: MODE.TRANSIT,
          transit_mode: TRANSIT_MODE.SUBWAY,
          transit_routing_preference:
            TRANSIT_ROUTING_PREFERENCE.FEWER_TRANSFERS,
          arrival_time: `${tomorrow2amUnitsecond}`,
          language: LANGUAGE.KO,
          key: GOOGLE.APIKEY,
        },
      });
      if (isAlarmOn && isReadyToGetDirections) {
        const directionsApiResult = response.data;
        console.log('directionsApiResult:', directionsApiResult);
        if (directionsApiResult.status === 'OK') {
          // console.log(
          //   'status 확인:',
          //   directionsApiResult.routes[0].legs[0].departure_time
          // );
          setDepartureTimeInfo(
            directionsApiResult.routes[0].legs[0].departure_time
          );
          setDirections(directionsApiResult.routes[0]);
        } else {
          // console.log('Cannot get Any directions info');
          alert('Cannot get Any directions info, Try again!');
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

  let contexts;
  if (!to.value || !from.value || !departureTimeInfo.text) {
    contexts = (
      <View style={styles.container}>
        <MaterialCommunityIcons
          style={styles.pinIcon}
          name="bus-clock"
          size={100}
          color="#fff"
        />
        <Button
          buttonStyle={{
            backgroundColor: 'transparent',
            width: 200,
          }}
          titleStyle={{ fontWeight: '800', color: '#fff' }}
          title="SET ALARM"
          onPress={() => {
            props.navigation.navigate('SetLocation', {});
          }}></Button>
      </View>
    );
  } else if (!props.screenProps.isDirectionDetailsOn) {
    contexts = (
      <View>
        <SettingManager
          style={styles.settingManager}
          navigation={navigation}
          screenProps={screenProps}
        />
        <SelectedLocations
          style={styles.selectedLocations}
          screenProps={screenProps}
        />
        <AlarmTimer
          style={styles.alarmTimers}
          navigation={navigation}
          screenProps={screenProps}
        />
      </View>
    );
  } else {
    contexts = (
      <View>
        <SettingManager
          style={styles.settingManager}
          navigation={navigation}
          screenProps={screenProps}
        />
        <SelectedLocations
          style={styles.selectedLocations}
          screenProps={screenProps}
        />
        <DirectionDetails
          style={styles.alarmTimers}
          navigation={navigation}
          screenProps={screenProps}
        />
      </View>
    );
  }
  return <View style={styles.container}>{contexts}</View>;
}
let width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  settingManager: {
    flex: 1,
    width: width,
  },
  selectedLocations: {
    flex: 0.5,
    width: width,
  },
  alarmTimers: {
    flex: 2,
    width: width,
  },
  pinIcon: {
    width: 100,
    marginLeft: 20
    // shadowColor: 'white',
    // shadowOpacity: 0.5,
    // shadowRadius: 5,
    // //ios
    // shadowOffset: { width: 1, height: 6 },
    // textShadowRadius: 10,
    // //android
    // textShadowOffset: { width: 1, height: 2 },
  },
});
