import actionTypes from '../Constants/actionTypes';
const { SET_ALARM_TIMERS, RESET_STATE } = actionTypes;

function alarmTimersReducer(state = [], action) {
  switch (action.type) {
    case SET_ALARM_TIMERS:
      return [...action.data];

    case RESET_STATE:
      return [];

    default:
      return state;
  }
}

export default alarmTimersReducer;
