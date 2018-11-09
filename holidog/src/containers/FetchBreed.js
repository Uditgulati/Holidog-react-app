import React, { Component } from 'react';
import axios from 'axios';

class FetchBreed extends Component {
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

  showBreed = (breed) => {
    this.props.history.push('/' + breed);
  }

	render() {
		const breeds = this.state.breeds;
    let name = []
    Object.keys(breeds).map((key,index) => {
      //console.log(key)
      name.push(
        
          <h4 onClick={this.showBreed.bind(this,key)}>{key}</h4>
        
      )
    })
		return (
			<div>
				{name}
			</div>
		);
	}
}

export default FetchBreed;