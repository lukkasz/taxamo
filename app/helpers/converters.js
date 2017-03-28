
export const convertToCurrency = (amount) => {
  return (amount/100).toFixed( 2 );
};

export const frequency = (count, interval) => {
  if (count !== 1) {
    return count + '-' + interval;
  }
  return interval;
};

export const calculateColumnNumber = (numberOfItems) => {
  switch( numberOfItems) {
    case 1: 
      return 'col-md-4 col-md-offset-4 plan-col';
    case 2: 
      return 'col-md-6 plan-col';
    default: 
      return 'col-md-4 plan-col';
  }
}