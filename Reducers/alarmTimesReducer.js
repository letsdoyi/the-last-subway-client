import actionTypes from '../Constants/actionTypes';
const { SAVED_ALARM_TIMERS } = actionTypes;

function alarmTimersReducer(state = [], action) {
  switch (action.type) {
    case SAVED_ALARM_TIMERS:
      return [...state];
    default:
      return state;
  }
}

export default alarmTimersReducer;
