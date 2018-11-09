import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    breeds: {}
  }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        //console.log(res.data);
        this.setState({breeds: res.data.message})
      })
  }

  render() {
    const breeds = this.state.breeds;
    let name = []
    Object.keys(breeds).map(function(key, index){
      //console.log(key)
      name.push(
        <h4>{key}</h4>
      )
    })

    return (
      <div className="App">
        {name}
      </div>
    );
  }
}

export default App;
