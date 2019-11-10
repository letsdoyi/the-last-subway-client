import common from '../Constants/common';
import actionTypes from '../Constants/actionTypes';

const { CURRENT_LOCATION } = common;
const {
  GOT_CURRENT_LOCATION,
  SET_VALUE_OF_TO,
  CHANGED_MARKER_LOCATION,
  RESET_STATE
} = actionTypes;
const initialState = {
  value: '',
  location: {
    latitude: '',
    longitude: '',
  },
};

export function toReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_CURRENT_LOCATION:
      return {
        value: 'WHERE TO',
        location: {
          latitude: action.data[0],
          longitude: action.data[1],
        },
      };

    case CHANGED_MARKER_LOCATION:
      return {
        value: '',
        location: {
          latitude: action.data[0],
          longitude: action.data[1],
        },
      };

    case SET_VALUE_OF_TO:
      return {
        ...state,
        value: action.data,
      };

    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
}
export default toReducer;
