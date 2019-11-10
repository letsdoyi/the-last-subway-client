import actionTypes from '../Constants/actionTypes';
const { SET_CURRENT_TIME, RESET_STATE } = actionTypes;

function currentTimeUnitMilisecondReducer(state = new Date().getTime(), action) {
  switch (action.type) {
    case SET_CURRENT_TIME:
      return action.data;

    case RESET_STATE:
      return new Date().getTime();

    default:
      return state;
  }
}

export default currentTimeUnitMilisecondReducer;
