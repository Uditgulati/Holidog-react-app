import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Breed from './containers/Breed';
import FetchBreed from './containers/FetchBreed';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Route exact path="/" component={FetchBreed} />
        <Route exact path="/:breed" component={Breed} />
      </div>
    );
  }
}

export default withRouter(App);
