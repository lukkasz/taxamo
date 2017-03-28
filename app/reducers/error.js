const error = (state=null, action) => {
  switch(action.type) {
    case 'FETCH_DATA_FAILURE':
    case 'UPDATE_SUBSCRIPTION_FAILURE':
      return action.payload.error.message;
    case 'RESET_ERROR_DATA':
      return null;
    default:
      return state;
  }
};

export default error;