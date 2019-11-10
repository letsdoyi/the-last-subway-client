import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Dimensions,
} from 'react-native';

export default function SelectedLocations(props) {
  // console.log('SelectedLocations props:', props);
  const { screenProps } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textBox}>{screenProps.from.value}</Text>
      <Text style={styles.textBox}>{screenProps.to.value}</Text>
    </View>
  );
}
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    width: width,
    top: height * 0.05,
    left: '50%',
    transform: [{ translateX: -Dimensions.get('window').width * 0.45 }],
    backgroundColor: '#fff',
  },
  textBox: {
    width: '90%',
    height: 35,
    backgroundColor: '#fff',
    borderWidth: 1,
    margin: 3,
    paddingLeft: 10,
    lineHeight: 35,
  },
});
