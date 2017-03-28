import {combineReducers} from 'redux';

import plansReducer from './plans';
import subscriptionReducer from './subscription';
import fetchingReducer from './fetching';
import errorReducer from './error';

const taxamoApp = combineReducers({
  plans: plansReducer,
  subscription: subscriptionReducer,
  fetching: fetchingReducer,
  error: errorReducer
});

export default taxamoApp;