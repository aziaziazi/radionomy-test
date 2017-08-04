import React, { Component } from 'react';
import { connect } from 'react-redux'

import StepNumber from '../../components/StepNumber';
import Step2 from '../../components/Step2';

import {
  toggle_genre,
} from '../../actions'

class ContentContainer extends Component {
  render() {
    return (
      <div>
        <StepNumber step={this.props.step} />
        <Step2
          genres={this.props.genres}
          onToggleGenre={this.props.onToggleGenre}
        />
      </div>
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
    onToggleGenre: (genre) => {
      dispatch(toggle_genre(genre));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
