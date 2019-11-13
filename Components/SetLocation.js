import React from 'react';
import MyMapContainer from './MyMapContainer';
import MultipleSelection from './MultipleSelection';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

export default function SetLocation(props) {
  // console.log('SetLocation props:', props);
  const { container, header, title, containerWrapper } = styles;
  return (
    <View style={containerWrapper}>
      <MyMapContainer style={{}} screenProps={props.screenProps} />
      <View style={styles.buttonTomultipleSelection}>
        <Button
          buttonStyle={{ backgroundColor: 'black' }}
          titleStyle={{ fontWeight: '500' }}
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
    bottom: '5%',
    transform: [{ translateX: -Dimensions.get('window').width * 0.45 }],
    width: '90%',
    color: '#fff',
  },
});
