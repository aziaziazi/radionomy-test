import React from 'react';
import styled from 'styled-components';

const PreviousWrapper = styled.p`

`

const PreviousStep = ({onDecrementStep}) => {
  return (
    <div>
      <PreviousWrapper onClick={onDecrementStep} >
        Previous Step
      </PreviousWrapper>
    </div>
    );
}

export default PreviousStep;
