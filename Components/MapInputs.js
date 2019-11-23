import React, { Fragment } from 'react';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import {
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
  View,
} from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import common from '../Constants/common';
import LocationItem from './LocationItem';
import credentials from '../credentials';
import { colors } from '../Constants/styles';

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
  inputIconSetWrapper: {
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  textInput: {
    width: '90%',
    height: 35,
    margin: 3,
    color: colors.white,
  },
  backgroudColorLightGray: {
    backgroundColor: colors.backgroundLightGray,
  },
  backgroudColorDarkGray: {
    backgroundColor: colors.backgroundDarkGray,
  },
  fromIcon: {
    width: '10%',
    height: 35,
  },
});

export default function MapInput(props) {
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
            <View
              style={[
                styles.inputIconSetWrapper,
                styles.backgroudColorLightGray,
              ]}>
              <Entypo
                style={styles.fromIcon}
                name="dot-single"
                size={38}
                color={colors.iosBlue}
              />
              <TextInput
                style={[styles.textInput]}
                value={inputValue}
                onChangeText={fromInputValue => {
                  screenProps.onFromInputChange(fromInputValue);
                  handleTextChange(fromInputValue);
                }}
                placeholder={CURRENT_LOCATION}
                placeholderTextColor={colors.iosBlue}
              />
            </View>
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
            <View
              testID="google"
              style={[
                styles.inputIconSetWrapper,
                styles.backgroudColorDarkGray,
              ]}>
              <MaterialCommunityIcons
                style={styles.fromIcon}
                name="square-medium-outline"
                size={38}
                color={colors.white}
              />
              <TextInput
                style={styles.textInput}
                value={screenProps.to.value || inputValue}
                onChangeText={handleTextChange}
                placeholder={'Where to?'}
                placeholderTextColor={colors.white}
              />
            </View>
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
