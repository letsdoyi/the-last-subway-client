import React, { Fragment } from 'react';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import {
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  Dimensions,
  View,
} from 'react-native';
import common from '../Constants/common';
import LocationItem from './LocationItem';
import credentials from '../credentials';

const { CURRENT_LOCATION } = common;
const { GOOGLE } = credentials;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Dimensions.get('window').width * 0.2,
    left: '50%',
    transform: [{ translateX: -Dimensions.get('window').width * 0.45 }],
    width: '90%',
  },
  textInput: {
    height: 35,
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    margin: 3
  },
});

export default function MapInput(props) {
  // console.log('MapInput props:', props);
  const { screenProps } = props;

  return (
    <View style={styles.container}>
      <GoogleAutoComplete
        apiKey={GOOGLE.APIKEY}
        debounce={300}
        language="en"
        minLength={2}
        components="country:us">
        {({ inputValue, handleTextChange, locationResults, fetchDetails }) => (
          <Fragment>
            {console.log('inputValue', inputValue)}
            <TextInput
              style={styles.textInput}
              value={inputValue}
              onChangeText={fromInputValue => {
                screenProps.onFromInputChange(fromInputValue);
                handleTextChange(fromInputValue);
              }}
              placeholder={CURRENT_LOCATION}
            />
            <ScrollView style={{ maxHeight: 100 }}>
              {locationResults.map((el, i) => (
                <LocationItem
                  {...el}
                  fetchDetails={fetchDetails}
                  key={String(i)}
                />
              ))}
            </ScrollView>
          </Fragment>
        )}
      </GoogleAutoComplete>

      <GoogleAutoComplete
        apiKey={GOOGLE.APIKEY}
        debounce={300}
        language="en"
        minLength={2}
        components="country:ko">
        {({ inputValue, handleTextChange, locationResults, fetchDetails }) => (
          <Fragment>
            <TextInput
              style={styles.textInput}
              value={screenProps.to.value || inputValue}
              onChangeText={handleTextChange}
              placeholder={'Where to?'}
            />
            <ScrollView style={{ maxHeight: 100 }}>
              {locationResults.map((el, i) => (
                <LocationItem
                  {...el}
                  fetchDetails={fetchDetails}
                  key={String(i)}
                />
              ))}
            </ScrollView>
          </Fragment>
        )}
      </GoogleAutoComplete>
    </View>
  );
}
