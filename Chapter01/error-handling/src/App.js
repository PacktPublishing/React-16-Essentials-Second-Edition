import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyError from './MyError';

class App extends Component {
  state = {}

  componentDidCatch(err) {
    this.setState({ err: err.message });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p><MyError err={this.state.err}/></p>
      </div>
    );
  }
}

export default App;
