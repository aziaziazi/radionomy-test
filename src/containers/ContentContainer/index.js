import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

import StepNumber from '../../components/StepNumber';
import Step2 from '../../components/Step2';

import {
  toggle_genre,
  toggle_expend,
} from '../../actions'

const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 782px;
  max-width: calc(100% - 80px);
  padding: 0 40px 118px 40px;

`

class ContentContainer extends Component {
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
