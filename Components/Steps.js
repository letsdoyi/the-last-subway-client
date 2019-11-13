import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Button } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      customStyles: {
        stepIndicatorSize: 13,
        currentStepIndicatorSize: 13,
        separatorStrokeWidth: 7,
        currentStepStrokeWidth: 2,
        stepStrokeCurrentColor: '#000000',
        stepStrokeWidth: 2,
        separatorUnFinishedColor: props.screenProps.color,
        stepStrokeUnFinishedColor: '#000000',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 1,
        currentStepIndicatorLabelFontSize: 0,
        stepIndicatorLabelCurrentColor: '#ffffff',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#ffffff',
        labelColor: '#ffffff',
        labelSize: 0,
        currentStepLabelColor: '#fff',
      },
    };
  }
  onPageChange(position) {
    this.setState({ currentPosition: position });
  }

  render() {
    return (
      <View style={{ height: '100%', }}>
        <StepIndicator
          direction={'vertical'}
          stepCount={2}
          customStyles={this.state.customStyles}
          currentPosition={this.state.currentPosition}
        />
      </View>
    );
  }
}
