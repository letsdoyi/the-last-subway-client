import React, { Component } from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import { Button } from 'react-native-elements';

import MultiSelect from 'react-native-multiple-select';

const items = [
  {
    id: '-1',
    name: 'For testing',
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
  state = {
    isSelectedItemsDone: false,
    selectedItems: [],
  };

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems }, () =>
      console.log('Selected Items: ', selectedItems)
    );
  };

  render() {
    const { selectedItems } = this.state;
    const searchIcon = <View></View>;
    const { screenProps, navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.multiSelectContainer}>
          <MultiSelect
            autofocus={false}
            style={{ backgroundColor: '#fff', height: '50%' }}
            items={items}
            uniqueKey="id"
            hideDropdown={true}
            onSelectedItemsChange={this.onSelectedItemsChange}
            searchIcon={searchIcon}
            selectedItems={selectedItems}
            selectText="   PICK ALARM TIMES"
            searchInputPlaceholderText="Search Items..."
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor="#CCC"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{ color: '#CCC', height: 0 }}
            submitButtonColor="#CCC"
            submitButtonText="Submit"
            // hideTags={true}
          />
        </View>
        <View style={styles.button}>
          <Button
            buttonStyle={{ backgroundColor: 'black' }}
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
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  multiSelectContainer: {
    width: '90%',
    height: 400,
  },
  button: {
    position: 'absolute',
    left: '50%',
    bottom: '20%',
    transform: [{ translateX: -Dimensions.get('window').width * 0.45 }],
    width: '90%',
    backgroundColor: '#000',
  },
});
