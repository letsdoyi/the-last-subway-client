import common from '../Constants/common';
import actionTypes from '../Constants/actionTypes';
const { CURRENT_LOCATION } = common;
const { GOT_CURRENT_LOCATION, TYPED_FROM, SAVED_ALARM_SETTING } = actionTypes;

function alarmSwitchReducer(state = false, action) {
  switch (action.type) {
    case SAVED_ALARM_SETTING:
      return on;

    default:
      return state;
  }
}
export default alarmSwitchReducer;
