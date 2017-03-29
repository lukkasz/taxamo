import React, {Component, PropTypes} from 'react';
import {getTokenData} from '../helpers/token';

import SubscriptionDetails from './SubscriptionDetails';
import PlansList from './PlansList';
import Error from './Error';
    
class Profile extends Component {
  
  constructor(props){
    super(props);
    this.decodedToken = getTokenData(sessionStorage.getItem('token'));
  }

  
  componentDidMount(){
    this.props.resetDataError();
    this.props.fetchData(this.decodedToken.subscriptionId);
  }
  
  render(){
    const { subscription, plans, isFetching, error } = this.props;
    
    if (isFetching || (!plans.allIds.length && !subscription.planId)) {
      return <div className="loading">Loading&#8230;</div>;
    } 
    
    if (error) {
      return <Error message={error} />; 
    }

    return (
      <div className="profile-container">
        <SubscriptionDetails subscription={subscription} plans={plans}/>
        <hr />
        <PlansList plansById={plans.byId} allowedPlans={this.decodedToken.allowedPlansId}  />
      </div>
    );
  
  }   
}

Profile.propTypes = {
  subscription: PropTypes.object.isRequired,
  plans: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.null
  ])
};

export default Profile;
