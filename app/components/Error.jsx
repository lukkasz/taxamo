import React, {PropTypes} from 'react';
import { Link } from 'react-router';

function Error(props) {
  return (
    <div className="alert alert-danger">
      Error: {props.message}
      <Link className="pull-right" to="/">Go Home</Link>
    </div>
  );
}

export default Error;