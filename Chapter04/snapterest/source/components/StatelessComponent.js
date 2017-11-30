import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class StatelessComponent extends Component {
  render() {
    return (<h1 className="header">Stateless React Component</h1>);
  }
});

ReactDOM.render(
  <StatelessComponent/>,
  document.getElementById('react-application')
);
