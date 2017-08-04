import React, { Component } from 'react';
import { connect } from 'react-redux'

class HeaderContainer extends Component {
  render() {
    return (
      <div>
        ShoutCast Logo
      </div>
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
