import React from 'react';
import { Link, IndexLink } from 'react-router';

function Nav() {
  return (
    <nav className="navbar navbar-default navbar-taxamo">
      <div className="container">
        <div className="navbar-header">
         <IndexLink to ="/" className="navbar-brand" activeClassName="active-link">Taxamo</IndexLink> 
        </div>
        <ul className="nav navbar-nav navbar-nav-taxamo">
          <li><Link activeClassName="active-link" to="/profile/" query={{ token: window.token }}>Profile</Link></li>
        </ul>
      </div>
    </nav>  
  );
}

export default Nav;
