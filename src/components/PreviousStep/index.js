import React from 'react';

import Paper from 'material-ui/Paper';

const PreviousStep = ({onDecrementStep}) => {
  return (
    <div>
      <Paper onClick={onDecrementStep} >
        <h1>Previous Step</h1>
      </Paper>
    </div>
    );
}

export default PreviousStep;
