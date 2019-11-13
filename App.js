import React, { Component } from 'react';
import AppContainer from './Containers/AppContainer'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducer from './Reducers';
import Home from './Components/Home';
import SetLocation from './Components/SetLocation';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  // composeWithDevTools(applyMiddleware(...middlewares))
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

// // Create our stack navigator
// const AppNavigator = createStackNavigator(
//   {
//     Home: Home,
//     SetLocation: SetLocation,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );
// // const middlewares = applyMiddleware(
// //   debuggerAPI,
// //   exportState,
// //   reduxAPI
// // );

// // Connect the screens to Redux
// // let App = connect(state => );

// // And the app container
// let AppContainer = createAppContainer(AppNavigator);
// // import * as serviceWorker from './serviceWorker';

// const store = createStore(
//   combinedReducer
//   // composeWithDevTools(applyMiddleware(...middlewares))
// );

// export default class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <AppContainer />
//       </Provider>
//     );
//   }
// }

// // serviceWorker.unregister();


