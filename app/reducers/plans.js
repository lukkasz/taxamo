import {combineReducers} from 'redux';

const INITIAL_STATE = {byId:{}, allIds:[]};

// Helper for convertin Array to ObjectById
const covertToById = (array) => 
  array.reduce((acc, val) => {
    acc[val.id] = {...val};
    return acc;
  }, {});
  
const getAllIds = (array) => 
  array.map((item) => 
    item.id 
  );


const plans = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case 'FETCH_PLANS_SUCCESS':
      return { 
        ...state, 
        byId: covertToById(action.payload.data), 
        allIds: getAllIds(action.payload.data)
      };
   default:
     return state;
  }
};


export default plans;

