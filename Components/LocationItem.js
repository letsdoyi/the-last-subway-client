import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors, aligns} from '../Constants/styles';

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
    backgroundColor: colors.white,
    alignItems: aligns.center,
    justifyContent: aligns.center,
  },
});
