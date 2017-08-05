import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import radionomyApp from './reducers'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(radionomyApp)

const Index = () => (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
registerServiceWorker();
