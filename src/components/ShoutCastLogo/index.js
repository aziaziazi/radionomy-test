import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  position: relative;
  height: 80px;
  padding-left: 40px;
`
const Img = styled.img`
  position: absolute;
  top: 50%;
  height: 40px;
  margin-top: -20px;
`

const ShoutCastLogo = () => (
  <LogoWrapper>
    <Img src="./logo.svg" alt="ShoutCast Logo"/>
  </LogoWrapper>
);

export default ShoutCastLogo;
