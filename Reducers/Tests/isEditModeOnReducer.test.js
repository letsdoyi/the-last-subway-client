import isEditModeOnReducer from '../isEditModeOnReducer';
import actionTypes from '../../Constants/actionTypes';
const { SET_IS_EDIT_MODE_ON_TO, RESET_STATE } = actionTypes;
const initialState = false;

describe('isEditModeOnReducer', () => {
  it('should provide initial state', () => {
    expect(isEditModeOnReducer(undefined, {})).toBe(initialState);
  });

  it('should handle SET_IS_EDIT_MODE_ON_TO actionType', () => {
    expect(
      isEditModeOnReducer(initialState, {
        type: SET_IS_EDIT_MODE_ON_TO,
        data: true,
      })
    ).toBe(true);
    expect(
      isEditModeOnReducer(initialState, {
        type: SET_IS_EDIT_MODE_ON_TO,
        data: false,
      })
    ).toBe(false);
  });

  it('should handle RESET_STATE actionType', () => {
    expect(
      isEditModeOnReducer(true, {
        type: RESET_STATE,
        data: undefined,
      })
    ).toBe(false);
  });
});
