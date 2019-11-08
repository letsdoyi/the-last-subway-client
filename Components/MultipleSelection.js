import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Button } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const items = [
  {
    id: '0',
    name: 'ON TIME',
  },
  {
    id: '5m',
    name: '5 MINS',
  },
  {
    id: '10m',
    name: '10 MINS',
  },
  {
    id: '15m',
    name: '15 MINS',
  },
  {
    id: '30m',
    name: '30 MINS',
  },
  {
    id: '1h',
    name: '1 HOUR',
  },
  {
    id: '1.5h',
    name: '1.5 HOURS',
  },
  {
    id: '2h',
    name: '2 HOURS',
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
    // console.log('multiSelectWrapper:', this.props);

    return (
      <View style={styles.container}>
        <View style={styles.multiSelectContainer}>
          <MultiSelect
            autofocus={false}
            style={{ backgroundColor: '#000' }}
            items={items}
            uniqueKey="id"
            hideDropdown={true}
            onSelectedItemsChange={this.onSelectedItemsChange}
            searchIcon={searchIcon}
            selectedItems={selectedItems}
            selectText="PICK ALARM TIMES"
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
            style={{}}
            title="DONE"
            onPress={() => {
              if (selectedItems.length) {
                screenProps.setAlarmTimers(selectedItems);
                console.log('set AlarmTimers to store:', selectedItems);
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
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  multiSelectContainer: {
    width: '80%',
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
