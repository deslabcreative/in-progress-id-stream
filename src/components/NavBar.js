import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';


class Navigation extends Component {
  render() {
    return (
      <header>
        <span className="logo">Id.</span>
        <span className="username-nav">Jayden Szekely</span>
      </header>
    );
  }
}

export default Navigation;
