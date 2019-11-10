import actionTypes from '../Constants/actionTypes';
const { SET_CURRENT_TIME } = actionTypes;

function currentTimeUnitMilisecondReducer(state = new Date().getTime(), action) {
  switch (action.type) {
    case SET_CURRENT_TIME:
      return action.data;

    default:
      return state;
  }
}

export default currentTimeUnitMilisecondReducer;
