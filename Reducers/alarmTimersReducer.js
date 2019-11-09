import actionTypes from '../Constants/actionTypes';
const { SET_ALARM_TIMERS } = actionTypes;

function alarmTimersReducer(state = [], action) {
  switch (action.type) {
    case SET_ALARM_TIMERS:
      return [...action.data];

    default:
      return state;
  }
}

export default alarmTimersReducer;
