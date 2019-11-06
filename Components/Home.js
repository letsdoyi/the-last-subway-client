import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
        origin: '37.50588,127.059594',
        destination: '37.650037,127.043383',
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
          console.log('formatted_address', response.data.results[0].formatted_address);
          const formattedAddress = response.data.results[0].formatted_address;
          screenProps.setValueOfTo(formattedAddress);
        } else {
          screenProps.setValueOfTo('loading');
        }
      } else if (name) {
      }
    };
    fetchPlaceDetailsBy(
      screenProps.to.value,
      screenProps.to.location.latitude,
      screenProps.to.location.longitude
    );
  }, [screenProps.to.value]);

  return (
    <>
      <View style={styles.container}>
        <Text>Home</Text>
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
});
