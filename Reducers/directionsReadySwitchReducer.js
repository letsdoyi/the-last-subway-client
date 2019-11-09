import common from '../Constants/common';
import actionTypes from '../Constants/actionTypes';
const { CURRENT_LOCATION } = common;
const { SAVED_ALARM_SETTING, GOT_DIRECTIONS } = actionTypes;

function directionsReadySwitchReducer(state = false, action) {
  console.log('directionsReadySwitchReducer ON');
  switch (action.type) {
    case SAVED_ALARM_SETTING:
      return true;

    case GOT_DIRECTIONS:
      return false;

    default:
      return false;
  }
}
export default directionsReadySwitchReducer;
