import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import FirstPage from './FirstPage';

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={FirstPage} />
      <Route path="/profile" component={App} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;