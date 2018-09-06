import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import GroupBar from './components/GroupBar';
import Login from './components/Login';
import Home from './components/Home';
import AssetManager from './components/AssetManager';
import ComposeBar from './components/ComposeBar';
import MessageStream from './components/MessageStream';
import './App.css';


const Stream = () => (
  <div>
    <GroupBar />
    <AssetManager />
    <ComposeBar />
    <MessageStream />
  </div>
)


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route path='/stream' component={Stream} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />
        </div>
      </BrowserRouter>
      
    );
  }
}


export default App;