import React from 'react';

import Nav from './Nav';

function App(props) {
  return (
    <div>
      <Nav />
      <div className="container app-container">
        {props.children}
      </div>
    </div>  
  );
}

export default App;