import React, { Component } from 'react';
import axios from 'axios';

class Breed extends Component {
	state = {
		image: []
	}

	componentDidMount() {
		//console.log(this.props.match.params)
		const breedName = this.props.match.params.breed;
		//console.log(`https://dog.ceo/api/breed/${breedName}/images/random`)
		axios.get(`https://dog.ceo/api/breed/${breedName}/images/random/5`)
			.then(res => {
				console.log(res.data)
				this.setState({image: res.data.message});
			})
	}

	render() {
		const images = this.state.image.map(img => {
			return <img src={img} width="200px" height="200px" />;
		})

		return (
			<div>
				{images}
			</div>
		);
	}
}

export default Breed;