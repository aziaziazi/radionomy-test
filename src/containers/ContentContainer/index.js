import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

import StepNumber from '../../components/StepNumber';
import Step2 from '../../components/Step2';

import {
  toggle_genre,
  toggle_expend,
} from '../../actions'

// TODO: move styles in a component, should't be in the container
const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 862px;
  max-width: 100%;
  padding: 0 40px 110px 40px; // 110px: adjust according to footer height.
`

class ContentContainer extends Component {

  // Separated the Step Number and StepContent:
  // Steps contents can be very different from one to another
  // even if they reuse some components. I can create them
  // as "Step1", "Step2",...
  // Step Number is always the same, only it's value change.
  render() {
    return (
      <ContentWrapper>
        <StepNumber step={this.props.step} />
        <Step2
          genres={this.props.genres}
          onToggleGenre={this.props.onToggleGenre}
          onExpend={this.props.onExpend}
        />
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.step,
    genres: state.genres,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleGenre: (genreID) => {
      dispatch(toggle_genre(genreID));
    },
    onExpend: (genreID) => {
      dispatch(toggle_expend(genreID));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
