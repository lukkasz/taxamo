import React, {PropTypes} from 'react';
import {convertToCurrency, calculateColumnNumber} from '../helpers/converters';
import {getTokenData} from '../helpers/token';

import {frequency} from '../helpers/converters';

function Plan ({plan, planId, updateSubscription, numOfplans}) {
  const decodedToken = getTokenData(sessionStorage.getItem('token'));
  const headingClass = 'plan-'+plan.name;
  const btnClass = planId === plan.id ? 'btn btn-lg btn-block btn-active' : 'btn btn-block btn-lg btn-' + plan.name;
  const planClass = planId === plan.id ? 'plan-card plan-selected' : 'plan-card';
  
  return(
    <div className={calculateColumnNumber(numOfplans)}>
      <div className={planClass}>
          <h3 className="plan-title">{plan.name}</h3>
        <div className="plan-price">
          <h4 
            className={headingClass}
            > 
              {plan.currency.toUpperCase()} {convertToCurrency(plan.amount)}
                <span className="plan-interval">/{frequency(plan.interval_count, plan.interval)}</span>
          </h4>
        </div>
        <div className="plan-description">
          {plan.metadata.description || 'No description'}
        </div>
        <div className="plan-cta">
          <button
            disabled={planId === plan.id}
            className={btnClass}
            onClick={() => 
              updateSubscription(decodedToken.subscriptionId, plan.id)
            }>
              {planId === plan.id ? 'Current plan' : 'Choose plan'}
          </button>
        </div>
      </div>  
    </div>
  );
}

Plan.propTypes = {
  plan: PropTypes.object.isRequired,
  planId: PropTypes.string.isRequired,
  updateSubscription: PropTypes.func.isRequired,
  numOfplans: PropTypes.number
};

export default Plan;