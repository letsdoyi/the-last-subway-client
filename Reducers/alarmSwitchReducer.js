import actionTypes from '../Constants/actionTypes';
const {
  SAVED_ALARM_SETTING,
  RESET_STATE,
  EDIT_ALARM_SETTING,
  SET_IS_ALARM_ON_TO,
} = actionTypes;

function alarmSwitchReducer(state = false, action) {
  switch (action.type) {
    case SAVED_ALARM_SETTING:
      return true;

    case RESET_STATE:
      return false;

    case EDIT_ALARM_SETTING:
      return false;

    case SET_IS_ALARM_ON_TO:
      return action.data;

    default:
      return state;
  }
}
export default alarmSwitchReducer;
