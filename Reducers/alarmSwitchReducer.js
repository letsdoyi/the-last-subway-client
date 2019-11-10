import common from '../Constants/common';
import actionTypes from '../Constants/actionTypes';
const { CURRENT_LOCATION } = common;
const { SAVED_ALARM_SETTING, RESET_STATE } = actionTypes;

function alarmSwitchReducer(state = false, action) {
  console.log('alarmSwitchReducer ON');
  switch (action.type) {
    case SAVED_ALARM_SETTING:
      return true;

    case RESET_STATE:
      return false;

    default:
      return state;
  }
}
export default alarmSwitchReducer;
