import React, {PropTypes} from 'react';

import { validateToken} from '../helpers/token';
import ProfileContainer from './ProfileContainer';
import Error from './Error';

const ProfileWrapper = (props) => {
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

ProfileWrapper.propTypes = {
  location: PropTypes.object
};



export default ProfileWrapper;
