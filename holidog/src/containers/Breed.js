import React, { Component } from 'react';
import axios from 'axios';

class Breed extends Component {
	state = {
		image: null
	}

	componentDidMount() {
		//console.log(this.props.match.params)
		const breedName = this.props.match.params.breed;
		//console.log(`https://dog.ceo/api/breed/${breedName}/images/random`)
		axios.get(`https://dog.ceo/api/breed/${breedName}/images/random`)
			.then(res => {
				console.log(res.data)
				this.setState({image: res.data.message});
			})
	}

	render() {
		return (
			<div>
				<img src={this.state.image} />
			</div>
		);
	}
}

export default Breed;