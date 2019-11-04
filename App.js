import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combinedReducer from "./Reducers";
import Home from "./Components/Home";
import Setting from "./Components/Setting";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Create our stack navigator
let AppNavigator = createStackNavigator(
  {
    Home: Home,
    Setting: Setting
  },
  {
    initialRouteName: "Home"
  }
);

// Connect the screens to Redux
// let App = connect(state => );

// And the app container
let AppContainer = createAppContainer(AppNavigator);
// import * as serviceWorker from './serviceWorker';

const store = createStore(
  combinedReducer
  // window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

// serviceWorker.unregister();
