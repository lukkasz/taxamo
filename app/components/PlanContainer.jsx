import React from 'react';
import { connect } from 'react-redux';

import {updateSubscription} from '../actions';

import Plan from './Plan';

function mapStateToProps(state) {
  return {
    planId: state.subscription.planId
  }
}

export default connect(
  mapStateToProps,
  {updateSubscription}
  )(Plan);