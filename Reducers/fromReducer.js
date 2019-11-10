import common from '../Constants/common';
import actionTypes from '../Constants/actionTypes';
const { GOT_CURRENT_LOCATION, TYPED_FROM, RESET_STATE } = actionTypes;
const { CURRENT_LOCATION } = common;
const initialState = {
  value: '',
  location: {
    latitude: '',
    longitude: '',
  },
};

export function fromReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_CURRENT_LOCATION:
      return {
        value: CURRENT_LOCATION,
        location: {
          latitude: action.data[0],
          longitude: action.data[1],
        },
      };

    case TYPED_FROM:
      return {
        value: action.data,
        ...state,
      };

    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
}
export default fromReducer;
