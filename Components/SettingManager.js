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

export default function SettingManager(props) {
  const { screenProps } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.element}>DELETE</Text>
      <Text style={styles.element}>EDIT</Text>
    </View>
  );
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const screenRatio = (width * height) / 100;
const styles = StyleSheet.create({
  container: {
    height: height * 0.12,
    backgroundColor:'#ddd',
    justifyContent: 'space-between',
    alignItems:'flex-end',
    flexDirection: 'row',
    paddingHorizontal: width * 0.05,
  },
  element: {
    fontSize: height / 50,
    textAlign: 'center',
    marginBottom: screenRatio * 0.005,
  },
});
