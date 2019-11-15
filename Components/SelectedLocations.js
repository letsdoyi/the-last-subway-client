import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function SelectedLocations(props) {
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
    top: 50,
    left: '50%',
    transform: [
      { translateX: -Dimensions.get('window').width * 0.45 },
    ],
    backgroundColor:'#000'
  },
  textBox: {
    width: '90%',
    height: 35,
    fontSize: 16,
    color: '#ff9d0a',
    margin: 3,
    paddingLeft: 10,
    lineHeight: 35,
    backgroundColor: 'rgba(44,44,46, 1)',
  },
});
