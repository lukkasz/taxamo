import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import ProfileWrapper from './ProfileWrapper';
import FirstPage from './FirstPage';


const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={FirstPage} />
      <Route path="/profile" component={ProfileWrapper} />
    </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;