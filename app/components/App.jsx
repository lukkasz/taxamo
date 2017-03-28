import React, {PropTypes} from 'react';

import {getTokenData, validateToken} from '../helpers/token';
import ProfileContainer from './ProfileContainer';
import Error from './Error';

const App = (props) => {
  sessionStorage.clear();
  const token = props.location.query.token;
 
  if (!validateToken(token)) {
    return (
      <Error message={'Wrong Token'}/>
    );
  }
  
  sessionStorage.setItem('token', token);
  
  return (
    <div>
      <ProfileContainer />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.object
};



export default App;
