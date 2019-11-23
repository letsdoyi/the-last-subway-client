import alarmTimersReducer from '../alarmTimersReducer';
import actionTypes from '../../Constants/actionTypes';

const { SET_ALARM_TIMERS, RESET_STATE } = actionTypes;

describe('alarmTimersReducer', () => {
  const initialState = [];
  it('should provide the initial state', () => {
    expect(alarmTimersReducer(undefined, {})).toHaveLength(0);
  });
  it('should handle SET_ALARM_TIMERS actionType', () => {
    expect(
      alarmTimersReducer(initialState, {
        type: SET_ALARM_TIMERS,
        data: [1, 2, 3],
      })
    ).toHaveLength(3);
  });
  it('should handle RESET_STATE actionType', () => {
    expect(
      alarmTimersReducer([1, 2, 3], {
        type: RESET_STATE,
        data: [4, 5, 6],
      })
    ).toHaveLength(0);
  });
});
