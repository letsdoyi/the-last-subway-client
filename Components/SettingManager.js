import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Switch,
  Dimensions,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function SettingManager(props) {
  // let { screenProps, navigation } = props;
  // console.log('resetState:', screenProps.resetState);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          alert('Successfully Deleted');
          props.screenProps.resetState();
        }}
        style={[styles.elementWrapper, { paddingRight: 50 }]}>
        <Text style={styles.element}>DELETE</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => {
          props.screenProps.setIsEditModeOnTo(true);
          props.navigation.navigate('SetLocation', {});
        }}
        style={[styles.elementWrapper, { paddingLeft: 50 }]}>
        <Text style={styles.element}>EDIT</Text>
      </TouchableHighlight>
    </View>
  );
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const screenRatio = (width * height) / 100;
const styles = StyleSheet.create({
  container: {
    height: height * 0.15,
    backgroundColor: '#000',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: width * 0.05,
  },
  elementWrapper: {
    paddingTop: 10,
    paddingBottom: 0,
  },
  element: {
    fontSize: height / 50,
    textAlign: 'center',
    marginBottom: screenRatio * 0.005,
    color: '#ff9d0a',
  },
});
