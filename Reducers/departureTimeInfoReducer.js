import actionTypes from '../Constants/actionTypes';
const { GOT_DEPARTURE_TIME_INFO } = actionTypes;

function departureTimeInfoReducer(state = {}, action) {
  console.log('departureTimeInfoReducer ON');
  switch (action.type) {
    case GOT_DEPARTURE_TIME_INFO:
      const text = action.data.text;
      const timeZone = action.data.time_zone;
      const valueUnitMilisecond = action.data.value * 1000;

      return {
        text,
        timeZone,
        valueUnitMilisecond
      };
    default:
      return state;
  }
}

export default departureTimeInfoReducer;
