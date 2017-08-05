import React from 'react';
import styled from 'styled-components';

const H4Wrapper = styled.h4`
  height: 15px;
  color: #C1CEDC;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  margin: 2px;
`

const StepNumber = ({step}) => {
  return (
    <H4Wrapper>STEP {step} TO 5</H4Wrapper>
  );
}

export default StepNumber;
