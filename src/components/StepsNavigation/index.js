import React from 'react';
import styled from 'styled-components';

const wrappwrapp = styled.div`
  min-height:100%;
  position:relative;
`


const StepsNavigationWrapper = styled.div`
  height: 135px;
  padding: 0 40px;
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
  cursor: pointer;
`

const NextWrapper = styled.p`
  display: inline-block;
  padding: 0 15px;
  padding: 0 76px;
  margin: 5.25px 5.6px;
  height: 52px;
  line-height: 52px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 100px;
  background: linear-gradient(90deg, #04D4EA 0%, #27A5E5 100%);
  color: #FFFFFF;
  border: none;
  cursor: pointer;
`

const StepsNavigation = ({genres, onToggleGenre, onDecrementStep, onIncrementStep}) => {
  return (
    <wrappwrapp>
    <StepsNavigationWrapper>
      <PreviousWrapper
        onClick={onDecrementStep} >
        &lt; Previous Step
      </PreviousWrapper>
      <NextWrapper
        onClick={onIncrementStep}
      >
        {"CONTINUE"}
      </NextWrapper>
    </StepsNavigationWrapper>
    </wrappwrapp>
  );
}

export default StepsNavigation;
