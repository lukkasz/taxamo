import axios from 'axios';
import querystring from 'querystring';

const HEADER = {'Authorization': 'Bearer sk_test_g6rDvSYh0cPVO1bBsSTuEC8H'};
const ROOT_URL = 'https://api.stripe.com/v1';

export const FETCH_PLANS_SUCCESS = 'FETCH_PLANS_SUCCESS';
export const FETCH_SUBSCRIPTION_SUCCESS = 'FETCH_SUBSCRIPTION_SUCCESS';

export const UPDATE_SUBSCRIPTION_REQUEST = 'UPDATE_SUBSCRIPTION_REQUEST';
export const UPDATE_SUBSCRIPTION_SUCCESS = 'UPDATE_SUBSCRIPTION_SUCCESS';
export const UPDATE_SUBSCRIPTION_FAILURE = 'UPDATE_SUBSCRIPTION_FAILURE';

export const RESET_DATA_ERROR = 'RESET_DATA_ERROR';
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Plan async action
export const fetchPlans = () => (dispatch)  => {
  return axios({
    url: `${ROOT_URL}/plans`,
    headers: HEADER
  })
  .then((response) => {
    return dispatch({
      type: FETCH_PLANS_SUCCESS,
      payload: response.data
    });
  });
};

// Subscription async action
export const fetchSubscription = (subscriptionId) => (dispatch)  => {
  return axios({
    url: `${ROOT_URL}/subscriptions/${subscriptionId}`,
    headers: HEADER
  })
  .then((response) => {
    return dispatch({
      type: FETCH_SUBSCRIPTION_SUCCESS,
      payload: response.data
    });
  });
};

// Fetch async data (plans and subscription);
export const fetchData = (subscriptionId) => (dispatch) => {
  dispatch({
    type: FETCH_DATA_REQUEST
  });
  Promise.all([
    dispatch(fetchPlans()),
    dispatch(fetchSubscription(subscriptionId))
  ]).then(()=>{
    dispatch({
      type: FETCH_DATA_SUCCESS
    });
  }).catch((e)=>{
    dispatch({
      type: FETCH_DATA_FAILURE,
      payload: e.data
    });
  });
};


export const updateSubscription = (subscriptionId, plan) => (dispatch) => {
  dispatch({
    type: UPDATE_SUBSCRIPTION_REQUEST
  });
  
  return axios({
    method: 'post',
    url: `${ROOT_URL}/subscriptions/${subscriptionId}`,
    headers: HEADER,
    data: querystring.stringify({
      plan
    })
  })
  .then((response) => {
    return dispatch({
        type: UPDATE_SUBSCRIPTION_SUCCESS,
        payload: response.data
      });
    }, (err) => {
      return dispatch({
        type: UPDATE_SUBSCRIPTION_FAILURE,
        payload: err.data
      });
    });
};

export const resetDataError = () => {
  return {
    type: RESET_DATA_ERROR
  };
};


