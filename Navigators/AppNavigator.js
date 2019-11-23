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
import { colors, aligns } from '../Constants/styles';

function navigationOptions(
  title,
  backgroundColor = colors.black,
  fontColor = colors.transparent
) {
  return {
    headerTitle: (
      <View style={{ width: '100%' }}>
        <Text
          style={{ color: fontColor, fontSize: 18, textAlign: aligns.center }}>
          {title}
        </Text>
      </View>
    ),
    headerTransparent: true,
    headerStyle: { borderBottomWidth: 0, backgroundColor: backgroundColor },
  };
}
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: navigationOptions('Home', colors.black),
    },
    SetLocation: {
      screen: SetLocation,
      navigationOptions: navigationOptions('Set Location', colors.transparent),
    },
    AlarmTimer: {
      screen: AlarmTimer,
      navigationOptions: navigationOptions('AlarmTimer', colors.black),
    },
    MultipleSelection: {
      screen: MultipleSelection,
      navigationOptions: navigationOptions(
        'AHEAD OF TIME ACTIVE',
        colors.black
      ),
    },
    SelectedLocations: {
      screen: SelectedLocations,
      navigationOptions: navigationOptions('SelectedLocations', colors.black),
    },
    SettingManager: {
      screen: SettingManager,
      navigationOptions: navigationOptions(
        'SettingManager',
        colors.transparent
      ),
    },
    DirectionDetails: {
      screen: DirectionDetails,
      navigationOptions: navigationOptions('DirectionDetails', colors.black),
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
