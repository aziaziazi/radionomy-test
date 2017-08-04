import React from 'react';
import styled from 'styled-components';

const H4Wrapper = styled.h4`
  height: 15px;
  width: 70px;
  color: #C1CEDC;
  font-family: "Proxima Nova";
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  text-align: center;
`

const StepNumber = ({step}) => {
  return (
    <H4Wrapper>STEP {step} TO 5</H4Wrapper>
  );
}

export default StepNumber;
