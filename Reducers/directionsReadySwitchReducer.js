import actionTypes from '../Constants/actionTypes';
const { SAVED_ALARM_SETTING, GOT_DIRECTIONS, RESET_STATE } = actionTypes;

function directionsReadySwitchReducer(state = false, action) {
  switch (action.type) {
    case SAVED_ALARM_SETTING:
      return true;

    case GOT_DIRECTIONS:
      return false;

    case RESET_STATE:
      return false;

    default:
      return false;
  }
}
export default directionsReadySwitchReducer;
