import React from 'react';
import ReactDOM from 'react-dom';

const listOfItems = (
  <ul className="list-of-items">
    <li className="item-1">Item 1</li>
    <li className="item-2">Item 2</li>
    <li className="item-3">Item 3</li>
  </ul>
);

ReactDOM.render(
  listOfItems,
  document.getElementById('react-application')
);
