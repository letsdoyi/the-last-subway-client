import React, { Component } from 'react';
import AppContainer from './Containers/AppContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducer from './Reducers';

const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
