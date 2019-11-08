import React from 'react';
import Home from '../Components/Home';
import SetAlarm from '../Components/SetAlarm';
import Alarm from '../Components/Alarm';
import MultipleSelection from '../Components/MultipleSelection';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Text } from 'react-native';
// Create our stack navigator

function navigationOptionss(title) {
  return {
    headerTitle: (
      <View style={{ width: '100%'}}>
        <Text style={{ color: '#000', fontSize: 18, textAlign: 'center' }}>{title}</Text>
      </View>
    ),
    headerTransparent: true,
    headerStyle: { borderBottomWidth: 0 },
  };
}
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: navigationOptionss('Home'),
    },
    SetAlarm: {
      screen: SetAlarm,
      navigationOptions: navigationOptionss('Set Alarm'),
    },
    Alarm: {
      screen: Alarm,
      navigationOptions: navigationOptionss('Alarm'),
    },
    MultipleSelection: {
      screen: MultipleSelection,
      navigationOptions: navigationOptionss('AHEAD OF TIME ACTIVE'),
    },
  },
  {
    initialRouteName: 'Home',
  }
);
// const middlewares = applyMiddleware(
//   debuggerAPI,
//   exportState,
//   reduxAPI
// );

export default createAppContainer(AppNavigator);
