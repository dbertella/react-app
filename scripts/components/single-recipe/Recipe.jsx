import React from 'react';
import _ from 'lodash';
import mockData from '../../../mock.data.json';

let recipesData = mockData.recipesData;

let Recipe = React.createClass({
	getInitialState: function () {
		return {
			recipe: []
		};
	},
	componentDidMount: function () {
		// from the path `/inbox/messages/:id`
		var id = String(this.props.params.id);

		this.setState({
			recipe: _.find(recipesData, {'id': id})
		});
	},
	render: function () {
		let recipe = this.state.recipe,
			tags = null;
		// var tag = this.state.recipe.tag.map((t) => <span>{t}</span>);
		//console.log(recipe.tag, tag);

			if (recipe.tag) {
				tags = recipe.tag.map((t) => <span>{t} </span>);
			}

		return (
			<main>
				<img src="http://placehold.it/350x150" />
				<h2>{recipe.title}</h2>
				<p>
					{ tags }
				</p>
			</main>
		);
	}
});

export default Recipe;
