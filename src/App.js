import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import ContentContainer from './containers/ContentContainer';
import FooterContainer from './containers/FooterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <ContentContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
