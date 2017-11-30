import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Multi from './Multi';
import MultiWithString from './MultiWithString';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Multi/>
        <MultiWithString/>
      </div>
    );
  }
}

export default App;
