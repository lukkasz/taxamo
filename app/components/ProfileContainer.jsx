import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Profile from './Profile';

const mapStateToProps = (state) => ({
  plans: state.plans,
  subscription: state.subscription,
  isFetching: state.fetching,
  error: state.error
});

export default connect(mapStateToProps, actions)(Profile);