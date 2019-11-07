import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';

export default function LocationItem(props) {
  const { description, fetchDetails } = props;
  // console.log('LocationItem Props');
  // console.log(props);

  return (
    <TouchableOpacity style={styles.container}>
      <Text>{description}</Text>
    </TouchableOpacity>
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
