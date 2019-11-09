import actionTypes from '../Constants/actionTypes';
const { SAVED_ALARM_TIMERS } = actionTypes;

function alarmTimersReducer(state = [], action) {
  switch (action.type) {
    case SAVED_ALARM_TIMERS:
      console.log('in alarmTimersReducer:',action.data);
      return [...action.data];

    default:
      console.log('in alarmTimersReducer default')
      return state;
  }
}

export default alarmTimersReducer;
