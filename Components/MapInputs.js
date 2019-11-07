import React, { Fragment } from 'react';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import { TextInput, ScrollView, Button, Dimensions } from 'react-native';
import common from '../Constants/common';
import LocationItem from './LocationItem';
import credentials from '../credentials';

const { CURRENT_LOCATION } = common;
const { GOOGLE } = credentials;

export default function MapInput(props) {
  console.log('MapInput props:', props);
  const { screenProps } = props;

  return (
    <>
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
              style={{
                height: 40,
                width: 300,
                borderWidth: 1,
                paddingHorizontal: 16,
              }}
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
            {/* {console.log('locationResults', locationResults)} */}
            <TextInput
              style={{
                height: 40,
                width: 300,
                borderWidth: 1,
                paddingHorizontal: 16,
              }}
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
    </>
  );
}
