import currentTimeUnitMilisecondReducer from '../currentTimeUnitMilisecondReducer';
import actionTypes from '../../Constants/actionTypes';

const { SET_CURRENT_TIME, RESET_STATE } = actionTypes;
const initialState = new Date().getTime();

describe('currentTimeUnitMilisecondReducer', () => {
  it('should provide initial state', () => {
    expect(currentTimeUnitMilisecondReducer(undefined, {})).toBeLessThanOrEqual(
      new Date().getTime()
    );
  });
  it('should handle SET_CURRENT_TIME actionType', () => {
    expect(
      currentTimeUnitMilisecondReducer(initialState, {
        type: SET_CURRENT_TIME,
        data: 1000,
      })
    ).toBe(1000);
  });
  it('should handle RESET_STATE actionType', () => {
    expect(
      currentTimeUnitMilisecondReducer(undefined, {
        type: RESET_STATE,
        data: new Date().getTime(),
      })
    ).toBe(new Date().getTime());
  });
});
