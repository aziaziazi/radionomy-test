import React from 'react';
import styled from 'styled-components';

const PreviousWrapper = styled.p`
  height: 16px;
  color: #18A4E8;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
`

const PreviousStep = ({onDecrementStep}) => {
  return (
    <div>
      <PreviousWrapper onClick={onDecrementStep} >
        &lt; Previous Step
      </PreviousWrapper>
    </div>
    );
}

export default PreviousStep;
