import { combineReducers } from 'redux';
import loginReducer from '../Reducers/loginReducer';
import fromReducer from './fromReducer';
import toReducer from './toReducer';
import alarmSwitchReducer from './alarmSwitchReducer';
import directionsReducer from './directionsReducer';
import alarmTimersReducer from './alarmTimersReducer';
import directionsReadySwitchReducer from './directionsReadySwitchReducer';

export default combineReducers({
  // isLoggedIn: loginReducer,
  from: fromReducer,
  to: toReducer,
  alarmTimers: alarmTimersReducer,
  isAlarmOn: alarmSwitchReducer,
  directions: directionsReducer,
  isReadyToGetDirections: directionsReadySwitchReducer
});
