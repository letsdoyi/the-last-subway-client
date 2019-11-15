import React from 'react';
import { View, Text } from 'react-native';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import SelectedLocations from '../SelectedLocations';

describe('SelectedLocations Component', () => {
  const screenProps = {
    from: { value: 'from location' },
    to: { value: 'to location' },
  };
  const wrapper = shallow(<SelectedLocations screenProps={screenProps} />);
  it('should render from value Text', () => {
    wrapper
      .find(View)
      .find(Text)
      .contains('from location');
  });

  it('should render to value Text', () => {
    wrapper
      .find(View)
      .find(Text)
      .contains('to location');
  });
});
