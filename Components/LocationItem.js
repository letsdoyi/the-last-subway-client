import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function LocationItem(props) {
  const { description } = props;

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
