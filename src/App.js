import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import ContentContainer from './containers/ContentContainer';
import FooterContainer from './containers/FooterContainer';


const AppWrapper = styled.div`
  position: relative;
  margin: 0;
  padding-bottom: 50px;
  min-height: 100%;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <HeaderContainer />
        <ContentContainer />
        <FooterContainer />
      </AppWrapper>
    );
  }
}

export default App;
