import React from 'react';
import { Text } from 'react-native';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import SettingManager from '../SettingManager';
import { TouchableHighlight } from 'react-native-gesture-handler';

describe('SettingManager Component DELETE', () => {
  window.alert = jest.fn();
  const deletePressOn = jest.fn();
  const screenProps = { resetState: deletePressOn };
  const wrapper = shallow(<SettingManager screenProps={screenProps} />);
  it('should render DELETE', () => {
    expect(
      wrapper
        .find(TouchableHighlight)
        .at(0)
        .find(Text)
        .contains('DELETE')
    ).toBe(true);
  });
  test('DELETE Press On', () => {
    wrapper
      .find(TouchableHighlight)
      .at(0)
      .simulate('press');
    expect(deletePressOn).toHaveBeenCalled();
  });
});

describe('SettingManager Component EDIT', () => {
  const editPressOn = jest.fn();
  const screenProps = { setIsEditModeOnTo: editPressOn };
  const navigation = { navigate: jest.fn() };
  const wrapper = shallow(
    <SettingManager screenProps={screenProps} navigation={navigation} />
  );
  it('should render EDIT', () => {
    expect(
      wrapper
        .find(TouchableHighlight)
        .at(1)
        .find(Text)
        .contains('EDIT')
    ).toBe(true);
  });

  test('EDIT press On', () => {
    wrapper
      .find(TouchableHighlight)
      .at(1)
      .simulate('press');
    expect(editPressOn).toHaveBeenCalled();
    expect(navigation.navigate).toHaveBeenCalledWith('SetLocation', {});
  });
});
