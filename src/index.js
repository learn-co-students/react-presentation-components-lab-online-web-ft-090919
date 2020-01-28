import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

let simplerComponentClick = () => {
  alert('Clicked on SimplerComponent!')
}

ReactDOM.render(

  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={simplerComponentClick} />
  </div>,
  document.getElementById('root')
);
