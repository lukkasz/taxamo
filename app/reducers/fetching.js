const fetching = (state=false, action) => {
  switch(action.type) {
    case 'FETCH_DATA_REQUEST':
    case 'UPDATE_SUBSCRIPTION_REQUEST':
      return true;
    case 'FETCH_DATA_SUCCESS':
    case 'FETCH_DATA_FAILURE':
    case 'UPDATE_SUBSCRIPTION_SUCCESS':
    case 'UPDATE_SUBSCRIPTION_FAILURE':
      return false
    
    default:
      return state;
  }
}

export default fetching;