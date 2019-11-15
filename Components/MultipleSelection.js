import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

import MultiSelect from 'react-native-multiple-select';

const items = [
  {
    id: '-1',
    name: 'Now (For testing)',
  },
  {
    id: '0',
    name: 'On time',
  },
  {
    id: '5',
    name: '5 min',
  },
  {
    id: '10',
    name: '10 min',
  },
  {
    id: '15',
    name: '15 min',
  },
  {
    id: '30',
    name: '30 min',
  },
  {
    id: '60',
    name: '1 hour',
  },
  {
    id: '90',
    name: '1.5 hour',
  },
  {
    id: '120',
    name: '2 hour',
  },
];

export default class multiSelectWrapper extends Component {
  constructor(props) {
    super(props);
    if (props.screenProps.isEditModeOn === true) {
      this.state = {
        isSelectedItemsDone: false,
        selectedItems: props.screenProps.alarmTimers,
      };
    } else {
      this.state = {
        isSelectedItemsDone: false,
        selectedItems: [],
      };
    }
  }

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;
    const searchIcon = <View></View>;
    const { screenProps, navigation } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>AHEAD OF TIME ACTIVE</Text>
        </View>
        <View style={styles.multiSelectContainer}>
          <MultiSelect
            autofocus={false}
            styleInputGroup={{ backgroundColor: '#000' }}
            styleDropdownMenuSubsection={{
              backgroundColor: '#000',
              borderWidth: 0,
            }}
            styleTextDropdownSelected={{ color: '#FF9D0A' }}
            styleDropdownMenu={{ backgroundColor: '#000' }}
            styleTextDropdown={{ color: '#FF9D0A', fontWeight: '700' }}
            styleItemsContainer={{ backgroundColor: '#000' }}
            styleRowList={{ marginBottom: 3 }}
            items={items}
            uniqueKey="id"
            hideDropdown={true}
            onSelectedItemsChange={this.onSelectedItemsChange}
            searchIcon={searchIcon}
            selectedItems={selectedItems}
            selectText="  ALARM TIMES"
            searchInputPlaceholderText="Search Items..."
            tagRemoveIconColor="#FF9D0A"
            tagBorderColor="#FF9D0A"
            tagTextColor="#FF9D0A"
            selectedItemTextColor="#FF9D0A"
            selectedItemIconColor="#FF9D0A"
            itemTextColor="#fff"
            itemFontSize={16}
            displayKey="name"
            searchInputPlaceholderText=""
            fontSize={16}
            textInputProps={{ editable: false }}
            hideSubmitButton={true}
          />
        </View>
        <View style={styles.button}>
          <Button
            buttonStyle={{
              backgroundColor: 'rgba(99,99,102,.5)',
            }}
            titleStyle={{ fontWeight: '500' }}
            title="DONE"
            onPress={() => {
              if (selectedItems.length) {
                screenProps.setAlarmTimers(selectedItems);
                screenProps.saveAlarmSetting();
                this.setState({ isSelectedItemsDone: true });
                alert('Success');
                navigation.navigate('Home');
              } else {
                alert('Pick any alarm time!');
              }
            }}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    top: '5%',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 50,
    fontWeight: '900',
    fontSize: 20,
  },
  multiSelectContainer: {
    width: '90%',
    height: 400,
  },
  button: {
    position: 'absolute',
    left: '50%',
    bottom: '10%',
    transform: [{ translateX: -Dimensions.get('window').width * 0.45 }],
    width: '90%',
    backgroundColor: '#000',
  },
});
