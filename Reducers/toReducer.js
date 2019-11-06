import actionTypes from '../Constants/actionTypes';
const {
  GOT_CURRENT_LOCATION,
  SET_VALUE_OF_TO,
  CHANGED_MARKER_LOCATION,
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
        value: 'Current Location',
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
      console.log('toReducer SET_VALUE_OF_TO ON');
      return {
        ...state,
        value: action.data,
      };

    // case TYPED_TO:
    //   return {
    //     value: action.data,
    //     ...state,
    //   };

    default:
      return state;
  }
}
export default toReducer;
