import React from 'react';
import LocationItem from '../LocationItem';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { Text, TouchableOpacity } from 'react-native';

describe('LocationItem Component', () => {
  const wrapper = shallow(<LocationItem />);
  it('should render LocationItem', () => {
    expect(wrapper.find(TouchableOpacity).find(Text).length).toBe(1);
  });
});
