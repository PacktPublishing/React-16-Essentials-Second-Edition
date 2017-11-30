import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class MyPortal extends Component {
  constructor(...args) {
    super(...args);
    this.el = document.createElement('strong');
  }

  componentWillMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return createPortal(
      this.props.children,
      this.el
    );
  }
};

export default MyPortal;
