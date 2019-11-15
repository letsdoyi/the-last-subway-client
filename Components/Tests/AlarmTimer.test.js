import React from 'react';
import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import AlarmTimer from '../AlarmTimer';

describe('AlarmTimer component', () => {
  const screenProps = {
    alarmTimers: [],
    departureTimeInfo: { valueUnitMilisecond: 123 },
    isAlarmOn: true,
    setIsDirectionDetailsTo: jest.fn(),
  };

  const wrapper = shallow(<AlarmTimer screenProps={screenProps} />);
  it('should render Leaving Time Schedule Text', () => {
    expect(
      wrapper
        .find(View)
        .find(View)
        .find(Text)
        .contains('Leaving Time Schedule')
    ).toBe(true);
  });
  it('should handle TouchableHighlight press', () => {
    wrapper
      .find(View)
      .find(ScrollView)
      .find(TouchableHighlight)
      .simulate('press');
    expect(screenProps.setIsDirectionDetailsTo).toHaveBeenCalledWith(true);
  });
  it('should render LEAVE AT TEXT', () => {
    const text = wrapper
      .find(View)
      .find(ScrollView)
      .find(TouchableHighlight)
      .find(View)
      .find(Text);
    expect(text.contains('LEAVE AT')).toBe(true);
  });
});
