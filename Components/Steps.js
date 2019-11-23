import React, { Component } from 'react';
import { View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { colors } from '../Constants/styles';

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
        stepStrokeCurrentColor: colors.black,
        stepStrokeWidth: 2,
        separatorUnFinishedColor: props.screenProps.color,
        stepStrokeUnFinishedColor: colors.black,
        stepIndicatorUnFinishedColor: colors.white,
        stepIndicatorCurrentColor: colors.white,
        stepIndicatorLabelFontSize: 1,
        currentStepIndicatorLabelFontSize: 0,
        stepIndicatorLabelCurrentColor: colors.white,
        stepIndicatorLabelFinishedColor: colors.white,
        stepIndicatorLabelUnFinishedColor: colors.white,
        labelColor: colors.white,
        labelSize: 0,
        currentStepLabelColor: colors.white,
      },
    };
  }
  onPageChange(position) {
    this.setState({ currentPosition: position });
  }

  render() {
    return (
      <View style={{ height: '100%' }}>
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
