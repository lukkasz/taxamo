import { 
  FETCH_SUBSCRIPTION_SUCCESS,
  UPDATE_SUBSCRIPTION_SUCCESS
} from '../constants/actionTypes';

const INITIAL_STATE = {planId:null, nextPaymentDate: null};

const subscription = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SUBSCRIPTION_SUCCESS:
    case UPDATE_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        planId: action.payload.plan.id,
        nextPaymentDate: action.payload.trial_end,
      };

    default:
      return state;
  }
};

export default subscription;