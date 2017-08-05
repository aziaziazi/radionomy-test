import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

import StepsNavigation from '../../components/StepsNavigation';

import {
  increment_step,
  decrement_step
} from '../../actions'

const FooterContainerWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`

class FooterContainer extends Component {
  render() {
    return (
      <FooterContainerWrapper>
        <StepsNavigation
          onDecrementStep={this.props.onDecrementStep}
          onIncrementStep={this.props.onIncrementStep}
        />
      </FooterContainerWrapper>
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
