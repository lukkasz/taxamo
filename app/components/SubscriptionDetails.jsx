import React, { PropTypes }from 'react';
import moment from 'moment';

import {convertToCurrency, frequency} from '../helpers/converters';

function SubscriptionDetails({plans, subscription}) {
  const currentPlan = plans.byId[subscription.planId];
  const {metadata, interval, interval_count, amount, currency} = currentPlan;
  return(
    <div className="col-md-8 col-md-offset-2 subscription-details">
      <div className="subscription-details-header clearfix">
        <h3>You are currently enrolled in <span className="plan-name">{subscription.planId}</span> plan</h3>
        <p className="pull-right">Interval: <span className="plan-frequency">{frequency(interval_count, interval)}</span></p>
      </div>
      
      <p className="plan-description">{metadata.description || 'No descripton'}</p>
      <div className="next-payment bg-info">
        <p>Your next payment is on <strong>{moment.unix(subscription.nextPaymentDate).format("DD.MM.YYYY")}</strong> 
         and you will be charged for <strong>{ convertToCurrency(amount) } {currency}</strong></p>
      </div>
    </div>
  );
}

SubscriptionDetails.propTypes = {
  plans: PropTypes.object.isRequired,
  subscription: PropTypes.object.isRequired
};


export default SubscriptionDetails;