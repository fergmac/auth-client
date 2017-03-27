import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRouter, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/Signin';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} >
      <Route path="/" component={App} />
      <Route path="/signin" component={Signin} />
    </Router>
  </Provider>
  , document.querySelector('.container'));
