import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  position: relative;
  height: 80px;
  padding: 0 40px;
  @media (max-width: 700px) {
    margin-bottom: 22px;
  }
`
const Img = styled.img`
  position: absolute;
  top: 50%;
  height: 40px;
  margin-top: -20px;

  @media (max-width: 700px) {
    position: relative;
    display: block;
    margin -20px auto 20px auto;
  }
`

const ShoutCastLogo = () => (
  <LogoWrapper>
    <Img src="./logo.svg" alt="ShoutCast Logo"/>
  </LogoWrapper>
);

export default ShoutCastLogo;
