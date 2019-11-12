import { combineReducers } from 'redux';
import fromReducer from './fromReducer';
import toReducer from './toReducer';
import alarmSwitchReducer from './alarmSwitchReducer';
import directionsReducer from './directionsReducer';
import alarmTimersReducer from './alarmTimersReducer';
import directionsReadySwitchReducer from './directionsReadySwitchReducer';
import departureTimeInfoReducer from './departureTimeInfoReducer';
import currentTimeUnitMilisecondReducer from './currentTimeUnitMilisecondReducer';
import isDirectionDetailsOnReducer from './isDirectionDetailsOnReducer';

export default combineReducers({
  from: fromReducer,
  to: toReducer,
  alarmTimers: alarmTimersReducer,
  isAlarmOn: alarmSwitchReducer,
  directions: directionsReducer,
  isReadyToGetDirections: directionsReadySwitchReducer,
  departureTimeInfo: departureTimeInfoReducer,
  currentTimeUnitMilisecond: currentTimeUnitMilisecondReducer,
  isDirectionDetailsOn: isDirectionDetailsOnReducer,
});
