import React, {PropTypes} from 'react';

import PlanContainer from './PlanContainer';

function PlansList({plansById, allowedPlans}) {
  const numOfplans = allowedPlans.length || 0;
  
  return (
    <div>
      { allowedPlans.map((plan) => 
        <PlanContainer key={plan} plan={plansById[plan]} numOfplans={numOfplans}/>
      )}
    </div>
  );
}

PlansList.propTypes = {
  allowedPlans: PropTypes.array.isRequired,
  plansById: PropTypes.object.isRequired
};

export default PlansList;