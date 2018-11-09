import React, { Component } from 'react';
import axios from 'axios';
import { SplitButton, MenuItem,ButtonToolbar } from 'react-bootstrap';

class FetchBreed extends Component {
	state = {
    	breeds: {},
    	images: []
  	}

	componentDidMount() {
	    axios.get('https://dog.ceo/api/breeds/list/all')
	      .then(res => {
	        //console.log(res.data);
	        this.setState({breeds: res.data.message})
	      })

	    axios.get('https://dog.ceo/api/breeds/image/random/6')
	    	.then(res => {
	    		this.setState({images: res.data.message})
	    	})
	}

  
  	showBreed = (breed) => {
    	this.props.history.push('/' + breed);
  	}

	render() {
		const breeds = this.state.breeds;
    	let name = [];
  
    	Object.keys(breeds).map((key,index) => {
      		name.push(
	        <div>
	          <h4 onClick={this.showBreed.bind(this,key)}>{key}</h4>
          	</div>
      		)
     	})

     	const BUTTONS = ['Primary'];

		function renderDropdownButton(title, i) {
		  return (
		    <SplitButton bsSize="large"
		      bsStyle={title.toLowerCase()}
		      title="Select Breed"
		      key={i}
		      id={`split-button-basic-${i}`}
		    >
		      <MenuItem eventKey="1" style={{height: 200 ,overflowY: 'scroll'}}>{name}</MenuItem>
		    </SplitButton>
		  );
		}

		return (
			<div style={{display: 'inline-block'}}>
				<h2 style={{color: 'darkorchid', fontFamily: 'courier', fontWeight: 'bold'}}>Hi! Welcome!</h2><br />
				<ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
			</div>
		);
	}
}

export default FetchBreed;