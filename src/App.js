import React, { Component } from 'react';
import NavBar from './components/NavBar';
import GroupBar from './components/GroupBar';
import AssetManager from './components/AssetManager';
import ComposeBar from './components/ComposeBar';
import MessageStream from './components/MessageStream';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <GroupBar />
        <AssetManager />
        <ComposeBar />
        <MessageStream />
      </div>
    );
  }
}



export default App;
