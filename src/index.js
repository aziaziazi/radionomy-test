import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import radionomyApp from './reducers'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// I choosed to use MUI because there's already build-in Chips and Auto-Complete
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


let store = createStore(radionomyApp)

const Index = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
registerServiceWorker();
