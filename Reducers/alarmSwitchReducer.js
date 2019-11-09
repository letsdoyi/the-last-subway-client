import common from '../Constants/common';
import actionTypes from '../Constants/actionTypes';
const { CURRENT_LOCATION } = common;
const { SAVED_ALARM_SETTING } = actionTypes;

function alarmSwitchReducer(state = false, action) {
  console.log('alarmSwitchReducer ON');
  switch (action.type) {
    case SAVED_ALARM_SETTING:
      console.log('SAVED_ALARM_SETTING:', action.data);
      return true;

    default:
      return state;
  }
}
export default alarmSwitchReducer;
