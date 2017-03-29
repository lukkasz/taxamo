import {
  FETCH_DATA_FAILURE,
  UPDATE_SUBSCRIPTION_FAILURE,
  RESET_DATA_ERROR
} from '../constants/actionTypes';

const error = (state=null, action) => {
  switch(action.type) {
    case FETCH_DATA_FAILURE:
    case UPDATE_SUBSCRIPTION_FAILURE:
      return action.payload.error.message;
    case RESET_DATA_ERROR:
      return null;
    default:
      return state;
  }
};

export default error;