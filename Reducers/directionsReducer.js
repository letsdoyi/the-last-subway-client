import actionTypes from '../Constants/actionTypes';
const { GOT_DIRECTIONS, RESET_STATE } = actionTypes;

function directionsReducer(state = {}, action) {
  switch (action.type) {
    case GOT_DIRECTIONS:
      return {
        ...action.data,
      };
    case RESET_STATE:
      return {};

    default:
      return state;
  }
}

export default directionsReducer;
