import actionTypes from '../Constants/actionTypes';
const { SET_IS_DIRECTION_DETAILS_TO, RESET_STATE } = actionTypes;

function isDirectionDetailsOnReducer (state = false, action) {
  console.log('alarmSwitchReducer ON');
  switch (action.type) {
    case SET_IS_DIRECTION_DETAILS_TO:
      return action.data;

    case RESET_STATE:
      return false;

    default:
      return state;
  }
}
export default isDirectionDetailsOnReducer;
