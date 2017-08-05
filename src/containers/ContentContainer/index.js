import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

import StepNumber from '../../components/StepNumber';
import Step2 from '../../components/Step2';

import {
  toggle_genre,
} from '../../actions'

const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 822px;
  max-width: 100vw;
  padding: 0 40px;
`

class ContentContainer extends Component {
  render() {
    return (
      <ContentWrapper>
        <StepNumber step={this.props.step} />
        <Step2
          genres={this.props.genres}
          onToggleGenre={this.props.onToggleGenre}
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
