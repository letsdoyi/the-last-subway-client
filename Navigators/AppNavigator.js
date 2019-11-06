import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import Home from '../Components/Home';
import SetAlarm from '../Components/SetAlarm';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Create our stack navigator
const AppNavigator = createStackNavigator(
  {
    Home: Home,
    SetAlarm: SetAlarm,
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
