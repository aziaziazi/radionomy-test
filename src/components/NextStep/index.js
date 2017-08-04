import React from 'react';
import styled from 'styled-components';

const NextWrapper = styled.p`

`

const NextStep = ({onDecrementStep}) => {
  return (
    <div>
      <NextWrapper onClick={onDecrementStep} >
        Continue
      </NextWrapper>
    </div>
    );
}

export default NextStep;
