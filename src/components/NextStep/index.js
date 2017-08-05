import React from 'react';
import styled from 'styled-components';

import Chip from '../Chip';

const NextStep = ({onIncrementStep}) => {
  const renderNextStep = () => (
      <Chip
        type={"continue"}
        label={"CONTINUE"}
        onClick={onIncrementStep}
      />
  )

  return (
    <div>
      { renderNextStep() }
    </div>
  )
}

export default NextStep;
