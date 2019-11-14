import actionTypes from '../Constants/actionTypes';
const { SET_IS_EDIT_MODE_ON_TO, RESET_STATE } = actionTypes;

function isEditModeOnReducer(state = false, action) {
  switch (action.type) {
    case SET_IS_EDIT_MODE_ON_TO:
      return action.data;

    case RESET_STATE:
      return false;

    default:
      return state;
  }
}
export default isEditModeOnReducer;
