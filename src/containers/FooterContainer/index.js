import React, { Component } from 'react';
import { connect } from 'react-redux'

import StepsNavigation from '../../components/StepsNavigation';

import {
  increment_step,
  decrement_step
} from '../../actions'

class FooterContainer extends Component {
  render() {
    return (
      <StepsNavigation
          onDecrementStep={this.props.onDecrementStep}
          onIncrementStep={this.props.onIncrementStep}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementStep: () => {
      dispatch(increment_step());
    },
    onDecrementStep: () => {
      dispatch(decrement_step());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
