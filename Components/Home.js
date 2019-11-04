import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home(props) {
  return (
    <>
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Set Alarm"
          onPress={() => {
            props.navigation.navigate('SetAlarm', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}></Button>
      </View>
    </>
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
