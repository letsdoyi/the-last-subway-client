import actionTypes from '../Constants/actionTypes';
const { GOT_DIRECTIONS } = actionTypes;

function directionsReducer(state = {}, action) {
  console.log('directionsReducer ON');
  switch (action.type) {
    case GOT_DIRECTIONS:
      console.log('directions are setting... :', action.data);
      return {
        ...action.data,
      };
    default:
      return state;
  }
}

export default directionsReducer;
