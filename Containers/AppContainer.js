import React from 'react';
import { connect } from 'react-redux';
import actionTypes from '../Constants/actionTypes';
import AppNavigator from '../Navigators/AppNavigator';
import currentTimeUnitMilisecondReducer from '../Reducers/currentTimeUnitMilisecondReducer';

const {
  GOT_CURRENT_LOCATION,
  SET_VALUE_OF_TO,
  TYPED_FROM,
  CHANGED_MARKER_LOCATION,
  GOT_DIRECTIONS,
  SET_ALARM_TIMERS,
  SAVED_ALARM_SETTING,
  GOT_DEPARTURE_TIME_INFO,
  SET_CURRENT_TIME,
  RESET_STATE,
  EDIT_ALARM_SETTING,
  SET_IS_DIRECTION_DETAILS_TO
} = actionTypes;

const mapStateToProps = state => {
  return {
    from: state.from,
    to: state.to,
    alarmTimers: state.alarmTimers,
    isAlarmOn: state.isAlarmOn,
    directions: state.directions,
    isReadyToGetDirections: state.isReadyToGetDirections,
    departureTimeInfo: state.departureTimeInfo,
    currentTimeUnitMilisecond: state.currentTimeUnitMilisecond,
    isDirectionDetailsOn: state.isDirectionDetailsOn
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
    setValueOfTo: text => {
      console.log('setValueOfTo ON');
      dispatch({
        type: SET_VALUE_OF_TO,
        data: text,
      });
    },
    setDirections: directions => {
      dispatch({
        type: GOT_DIRECTIONS,
        data: directions,
      });
    },
    setAlarmTimers: alarmTimers => {
      dispatch({
        type: SET_ALARM_TIMERS,
        data: alarmTimers,
      });
    },
    saveAlarmSetting: () => {
      dispatch({
        type: SAVED_ALARM_SETTING,
      });
    },
    setDepartureTimeInfo: info => {
      dispatch({
        type: GOT_DEPARTURE_TIME_INFO,
        data: info,
      });
    },
    setCurrentTime: timeUnitMilisecond => {
      dispatch({
        type: SET_CURRENT_TIME,
        data: timeUnitMilisecond,
      });
    },
    resetState: () => {
      console.log('resetState ON');
      dispatch({
        type: RESET_STATE,
      });
    },
    editAlarmSetting: () => {
      dispatch({
        type: EDIT_ALARM_SETTING
      })
    },
    setIsDirectionDetailsTo: boolean => {
      dispatch({
        type: SET_IS_DIRECTION_DETAILS_TO,
        data: boolean
      });
    }
  };
};

const AppContainer = props => {
  return <AppNavigator screenProps={props} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
