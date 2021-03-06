import React from 'react';
import MyMapContainer from './MyMapContainer';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { colors } from '../Constants/styles';

export default function SetLocation(props) {
  const { containerWrapper } = styles;
  const { to, from } = props.screenProps;
  let button;
  if (
    Math.abs(
      parseFloat(to.location.latitude).toFixed(3) -
        parseFloat(from.location.latitude).toFixed(3)
    ) > 0.001 ||
    Math.abs(
      parseFloat(to.location.longitude).toFixed(3) -
        parseFloat(from.location.longitude).toFixed(3)
    ) > 0.001
  ) {
    button = (
      <Button
        buttonStyle={{ backgroundColor: colors.black }}
        titleStyle={{ fontWeight: '500' }}
        title="DONE"
        onPress={() => {
          props.navigation.navigate('MultipleSelection');
        }}></Button>
    );
  } else {
    button = <Text></Text>;
  }
  return (
    <View style={containerWrapper}>
      <MyMapContainer screenProps={props.screenProps} />
      <View style={styles.buttonTomultipleSelection}>{button}</View>
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
    bottom: '5%',
    transform: [{ translateX: -Dimensions.get('window').width * 0.45 }],
    width: '90%',
    color: colors.white,
  },
});
