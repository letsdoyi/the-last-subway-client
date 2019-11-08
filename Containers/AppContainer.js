import React from 'react';
import { connect } from 'react-redux';
import actionTypes from '../Constants/actionTypes';
import AppNavigator from '../Navigators/AppNavigator';

const { GOT_CURRENT_LOCATION, SET_VALUE_OF_TO, TYPED_FROM, CHANGED_MARKER_LOCATION, GOT_DIRECTIONS } = actionTypes;
const mapStateToProps = state => {
  return {
    from: state.from,
    to: state.to,
    timers: state.timers,
    isAlarmOn: state.isAlarmOn,
    directions: state.directions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentLocationToFrom: (lat, lon) => {
      dispatch({
        type: GOT_CURRENT_LOCATION,
        data: [Number(lat), Number(lon)],
      });
    },
    onFromInputChange: TypedValue => {
      dispatch({
        type: TYPED_FROM,
        data: TypedValue,
      });
    },
    onMarkerChange: (lat, lon) => {
      dispatch({
        type: CHANGED_MARKER_LOCATION,
        data: [Number(lat), Number(lon)],
      });
    },
    setValueOfTo: (text) => {
      console.log('setValueOfTo ON');
      dispatch({
        type: SET_VALUE_OF_TO,
        data: text,
      });
    },
    setTimer: (timer) => {

    },
    setDirections: (directions) => {
      dispatch({
        type:GOT_DIRECTIONS,
        data: directions
      })
    }

    // onToChange: (dispatch) => {

    // }
  };
};

const AppContainer = props => {
  return <AppNavigator screenProps={props} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
