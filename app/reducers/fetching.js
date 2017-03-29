import {
  FETCH_DATA_REQUEST,
  UPDATE_SUBSCRIPTION_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  UPDATE_SUBSCRIPTION_SUCCESS,
  UPDATE_SUBSCRIPTION_FAILURE
} from '../constants/actionTypes';

const fetching = (state=false, action) => {
  switch(action.type) {
    case FETCH_DATA_REQUEST:
    case UPDATE_SUBSCRIPTION_REQUEST:
      return true;
    
    case FETCH_DATA_SUCCESS:
    case FETCH_DATA_FAILURE:
    case UPDATE_SUBSCRIPTION_SUCCESS:
    case UPDATE_SUBSCRIPTION_FAILURE:
      return false;
    
    default:
      return state;
  }
};

export default fetching;