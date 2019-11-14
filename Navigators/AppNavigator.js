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

function navigationOptions(title, backgroundColor = '#000', fontColor = 'transparent') {
  return {
    headerTitle: (
      <View style={{ width: '100%'}}>
        <Text style={{ color: fontColor, fontSize: 18, textAlign: 'center' }}>
          {title}
        </Text>
      </View>
    ),
    headerTransparent: true,
    headerStyle: { borderBottomWidth: 0, backgroundColor: backgroundColor},
  };
}
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: navigationOptions('Home', '#000'),
    },
    SetLocation: {
      screen: SetLocation,
      navigationOptions: navigationOptions('Set Location', 'transparent'),
    },
    AlarmTimer: {
      screen: AlarmTimer,
      navigationOptions: navigationOptions('AlarmTimer', '#000'),
    },
    MultipleSelection: {
      screen: MultipleSelection,
      navigationOptions: navigationOptions('AHEAD OF TIME ACTIVE', '#000'),
    },
    SelectedLocations: {
      screen: SelectedLocations,
      navigationOptions: navigationOptions('SelectedLocations', '#000'),
    },
    SettingManager: {
      screen: SettingManager,
      navigationOptions: navigationOptions('SettingManager', '#000'),
    },
    DirectionDetails: {
      screen: DirectionDetails,
      navigationOptions: navigationOptions('DirectionDetails', '#000'),
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
