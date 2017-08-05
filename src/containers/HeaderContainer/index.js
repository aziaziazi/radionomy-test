import React, { Component } from 'react';
import { connect } from 'react-redux'

import ShoutCastLogo from '../../components/ShoutCastLogo';

class HeaderContainer extends Component {
  render() {
    return (
      <ShoutCastLogo />
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
