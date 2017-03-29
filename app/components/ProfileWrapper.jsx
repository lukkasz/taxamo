import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';

import { validateToken} from '../helpers/token';
import ProfileContainer from './ProfileContainer';


const ProfileWrapper = (props) => {
  const token = props.location.query.token || null;
  
  if (!validateToken(token)) {
   browserHistory.push('/');
  }
  
  sessionStorage.setItem('token', token);
  
  return (
    <div>
      <ProfileContainer />
    </div>
  );
};


ProfileWrapper.propTypes = {
  location: PropTypes.object
};



export default ProfileWrapper;
