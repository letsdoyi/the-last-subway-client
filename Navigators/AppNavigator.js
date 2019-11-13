import React from 'react';
import Home from '../Components/Home';
import SetLocation from '../Components/SetLocation';
import AlarmTimer from '../Components/AlarmTimer';
import SelectedLocations from '../Components/SelectedLocations';
import MultipleSelection from '../Components/MultipleSelection';
import SettingManager from '../Components/SettingManager';
import DirectionDetails from '../Components/DirectionDetails';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Text } from 'react-native';
// Create our stack navigator

function navigationOptionss(title) {
  return {
    headerTitle: (
      <View style={{ width: '100%' }}>
        <Text style={{ color: '#000', fontSize: 18, textAlign: 'center' }}>
          {title}
        </Text>
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
    SetLocation: {
      screen: SetLocation,
      navigationOptions: navigationOptionss('Set Location'),
    },
    AlarmTimer: {
      screen: AlarmTimer,
      navigationOptions: navigationOptionss('AlarmTimer'),
    },
    MultipleSelection: {
      screen: MultipleSelection,
      navigationOptions: navigationOptionss('AHEAD OF TIME ACTIVE'),
    },
    SelectedLocations: {
      screen: SelectedLocations,
      navigationOptions: navigationOptionss('SelectedLocations'),
    },
    SettingManager: {
      screen: SettingManager,
      navigationOptions: navigationOptionss('SettingManager'),
    },
    DirectionDetails: {
      screen: DirectionDetails,
      navigationOptions: navigationOptionss('DirectionDetails'),
    }
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
