import React from 'react';
import styled from 'styled-components';

import Chip from '../Chip';

const StepsNavigationWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 135px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, #FFFFFF 0%, #E4F1FF 100%);
`

const PreviousWrapper = styled.p`
  height: 16px;
  color: #18A4E8;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
`

const StepsNavigation = ({genres, onToggleGenre, onDecrementStep, onIncrementStep}) => {
  return (
    <StepsNavigationWrapper>
      <PreviousWrapper
        onClick={onDecrementStep} >
        &lt; Previous Step
      </PreviousWrapper>
      <Chip
        type={"continue"}
        label={"CONTINUE"}
        onClick={onIncrementStep}
        selected
      />
    </StepsNavigationWrapper>
  );
}

export default StepsNavigation;
