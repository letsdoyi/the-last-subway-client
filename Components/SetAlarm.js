import React from 'react';
import MyMapContainer from './MyMapContainer';
import MultipleSelection from './MultipleSelection';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Dimensions,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { relativeTimeRounding } from 'moment';

export default function SetAlarm(props) {
  // console.log('SetAlarm props:', props);
  const { container, header, title, containerWrapper } = styles;
  return (
    <View style={containerWrapper}>
      <View style={[header]}>
        <Text>Cancel</Text>
        <Text style={title}>Set Alarm</Text>
        <Text onPress={() => {}}>Save</Text>
      </View>

      <MyMapContainer style={{}} screenProps={props.screenProps} />

      <View style={styles.buttonTomultipleSelection}>
        <Button
          style={{}}
          title="DONE"
          onPress={() => {
            props.navigation.navigate('MultipleSelection');
          }}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    position: 'relative',
    flexDirection: 'column',
  },
  header: {
    position: 'absolute',
    top: 0,
    minHeight: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title: {
    width: '45%',
    lineHeight: 80,
    paddingLeft: 10,
  },
  myMapContainer: {
    position: 'absolute',
    top: 0,
  },
  buttonTomultipleSelection: {
    position: 'absolute',
    left: '50%',
    bottom: '20%',
    transform: [{ translateX: -Dimensions.get('window').width * 0.45 }],
    width: '90%',
    backgroundColor: '#000',
  },
});
