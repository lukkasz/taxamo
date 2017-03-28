import jwt_decode from 'jwt-decode';

export const getTokenData = (token) => {
  let decodedToken;
  try {
    decodedToken = jwt_decode(token);
  } catch (e) {
    decodedToken = null;
  }
  
  return decodedToken;
};

export const validateToken = (token) => {
  try {
    jwt_decode(token);
    return true;
  } catch (e)  {
    return false;
  }
}

