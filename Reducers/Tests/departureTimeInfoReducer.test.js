import departureTimeInfoReducer from '../departureTimeInfoReducer';
import actionTypes from '../../Constants/actionTypes';
const { GOT_DEPARTURE_TIME_INFO, RESET_STATE } = actionTypes;

const initialState = {};

describe('departureTimeInfoReducer', () => {
  it('should provide initial state', () => {
    expect(Object.keys(departureTimeInfoReducer(undefined, {})).length).toBe(0);
  });
  it('should handle GOT_DEPARTURE_TIME_INFO actionType', () => {
    const result = departureTimeInfoReducer(initialState, {
      type: GOT_DEPARTURE_TIME_INFO,
      data: {
        text: 'textString',
        time_zone: 'timeZoneString',
        value: 1,
      },
    });
    expect(result).toHaveProperty('text', 'textString');
    expect(result).toHaveProperty('timeZone', 'timeZoneString');
    expect(result).toHaveProperty('valueUnitMilisecond', 1000);
  });
  it('should handle RESET_STATE action', () => {
    expect(
      Object.keys(
        departureTimeInfoReducer(initialState, { type: RESET_STATE, data: {} })
      )
    ).toHaveLength(0);
  });
});
