import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './components/App';

ReactDOM.render(
  <Provider
    store={createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))}
  >
    <App />
  </Provider>,
  document.querySelector('#root')
);

/*
Action Creators -> Actions {type:'Get_User', payload: id} -> dispatch -> reducers -> store
*/
