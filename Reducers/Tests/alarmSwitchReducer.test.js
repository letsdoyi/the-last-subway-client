import alarmSwitchReducer from '../alarmSwitchReducer';
import actionTypes from '../../Constants/actionTypes';

const { SAVED_ALARM_SETTING, SET_IS_ALARM_ON_TO } = actionTypes;

describe('alarmSwitchReducer', () => {
  const initialState = false;
  it('should provide the initial state', () => {
    expect(alarmSwitchReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SAVED_ALARM_SETTING action', () => {
    expect(alarmSwitchReducer(false, { type: SAVED_ALARM_SETTING })).toEqual(true);
  });

  it('should handle RESET_STATE action', () => {
    expect(
      alarmSwitchReducer(false, { type: SET_IS_ALARM_ON_TO, data: true })
    ).toEqual(true);
  });
});
