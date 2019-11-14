import actionTypes from '../Constants/actionTypes';
const { GOT_DEPARTURE_TIME_INFO, RESET_STATE } = actionTypes;

function departureTimeInfoReducer(state = {}, action) {
  switch (action.type) {
    case GOT_DEPARTURE_TIME_INFO:
      const text = action.data.text;
      const timeZone = action.data.time_zone;
      const valueUnitMilisecond = action.data.value * 1000;

      return {
        text,
        timeZone,
        valueUnitMilisecond,
      };

    case RESET_STATE:
      return {};

    default:
      return state;
  }
}

export default departureTimeInfoReducer;
