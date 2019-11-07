import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//for noticifation
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import Constants from 'expo-constants';

import { googleAPI } from '../Constants/Apis';
import credentials from '../credentials';
import moment from 'moment';
import axios from 'axios';

const { GOOGLE } = credentials;
const { directions, geocode } = googleAPI;
console.log(directions);

export default function Home(props) {
  // console.log('HOME props:', props);
  const { screenProps } = props;
  const localTimeOfTomarrow = moment()
    .add(1, 'days')
    .format('YYYY-MM-DD');
  const tomorrow3AMUnitSeconds =
    new Date(`${localTimeOfTomarrow}T03:00:00`).getTime() / 1000;
  console.log('localTimeOfTomarrow:', localTimeOfTomarrow);

  const fetchDirections = async () => {
    const response = await axios.get(directions.URL, {
      params: {
        origin: `${screenProps.to.location.latitude},${screenProps.to.location.longitude}`,
        destination: `${screenProps.from.location.latitude},${screenProps.from.location.longitude}`,
        mode: directions.MODE,
        transit_mode: directions.TRANSIT_MODE,
        arrival_time: `${tomorrow3AMUnitSeconds}`,
        language: directions.LANGUAGE,
        key: GOOGLE.APIKEY,
      },
    });
    console.info('response:', response);
  };
  // fetchDirections();

  useEffect(() => {
    const fetchPlaceDetailsBy = async (name = null, lat = null, lon = null) => {
      console.log('fetchPlaceDetailsBy ON');
      console.log('lat,lon', lat, lon);
      if (lat && lon) {
        console.log('geocode API ON');
        const response = await axios.get(geocode.URL, {
          params: {
            latlng: `${lat},${lon}`,
            language: geocode.LANGUAGE,
            key: GOOGLE.APIKEY,
          },
        });
        if (response.status === 200) {
          const formattedAddress = response.data.results[0].formatted_address;
          screenProps.setValueOfTo(formattedAddress);
        } else {
          screenProps.setValueOfTo('loading');
        }
      } else if (name) {
      }
    };
    if (screenProps.to.value !== 'Current Location') {
      fetchPlaceDetailsBy(
        screenProps.to.value,
        screenProps.to.location.latitude,
        screenProps.to.location.longitude
      );
    }
  }, [screenProps.to.value]);

  ///////////////////
  //notification

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      let token = await Notifications.getExpoPushTokenAsync();
      console.log('token:', token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  };

  registerForPushNotificationsAsync();
  Notifications.addListener(handleNotification);

  function handleNotification() {
    console.log('handleNotification on')
    notification.data = 'ONONON';
  }

  const notification = {
    data: 'hello',
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Home</Text>
        <Text>{notification.data}</Text>
        <Button
          title="Set Alarm"
          onPress={() => {
            props.navigation.navigate('SetAlarm', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}></Button>
      </View>
    </>
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
