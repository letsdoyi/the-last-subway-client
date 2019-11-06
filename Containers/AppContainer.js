import React from 'react';
import { connect } from 'react-redux';
import actionTypes from '../Constants/actionTypes';
import AppNavigator from '../Navigators/AppNavigator';

const { TYPED_FROM, TYPED_TO } = actionTypes;

const mapStateToProps = state => {
  return {
    from: state.from,
    to: state.to,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFromChange: TypedValue => {
      dispatch({
        type: TYPED_FROM,
        data: TypedValue,
      });
    },
    // onToChange: (dispatch) => {

    // }
  };
};

const AppContainer = props => {
  return <AppNavigator screenProps={props} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
