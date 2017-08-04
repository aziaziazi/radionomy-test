import React from 'react';

import Paper from 'material-ui/Paper';

const NextStep = ({onIncrementStep}) => {
  return (
    <div>
      <Paper onClick={onIncrementStep} >
        <h1>NextStep</h1>
      </Paper>
    </div>
    );
}

export default NextStep;
