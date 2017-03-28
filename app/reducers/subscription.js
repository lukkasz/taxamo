import { combineReducers } from 'redux';

const INITIAL_STATE = {planId:null, nextPaymentDate: null, loading:false};

const subscription = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_SUBSCRIPTION_REQUEST':
      return {...state, loading: true}  
    case 'FETCH_SUBSCRIPTION_SUCCESS':
      return {
        ...state,
        planId: action.payload.plan.id,
        //subscriptionId: action.payload.id,
        nextPaymentDate: action.payload.trial_end,
        loading: false
      }
    // case 'FETCH_SUBSCRIPTION_FAILURE':
    //   return {...state, error: action.payload, loading: false}
    case 'UPDATE_SUBSCRIPTION_SUCCESS':
      return {
        ...state,
        planId: action.payload.plan.id,
        nextPaymentDate: action.payload.trial_end
      }
    default:
      return state
  }
}

export default subscription;