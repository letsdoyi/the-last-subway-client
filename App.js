import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combinedReducer from "./Reducers";
import Setting from "./Components/Home";
import Home from "./Components/Setting";
// import Navigation from "./Containers/Navigation";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Create our stack navigator
let RootStack = createStackNavigator({
  Home: Home,
  Setting: Setting
});

// Connect the screens to Redux
// let App = connect(state => );

// And the app container
let Navigation = createAppContainer(RootStack);
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
        <Navigation />
      </Provider>
    );
  }
}

// serviceWorker.unregister();
