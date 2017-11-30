import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Application from './components/Application';
import { initializeStreamOfTweets } from './utils/WebAPIUtils';
import store from './stores';

initializeStreamOfTweets(store);

ReactDOM.render(
  <Provider store={store}>
    <Application/>
  </Provider>,
  document.getElementById('react-application')
);
