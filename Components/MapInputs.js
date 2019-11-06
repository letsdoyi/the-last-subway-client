import React, { Fragment } from 'react';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import { TextInput, ScrollView, Button, Dimensions } from 'react-native';
import LocationItem from './LocationItem';
import credentials from '../credentials';

export default function MapInput(props) {
  console.log('MapInput props:', props);
  const { screenProps } = props;
  const { GOOGLE } = credentials;

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
            {/* {console.log('locationResults', locationResults)} */}
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
              placeholder={'Current Location'}
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
        components="country:us">
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
              value={inputValue}
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
