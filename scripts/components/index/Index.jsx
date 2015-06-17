import React from 'react';

let Filter = React.createClass({
	render: function () {
		let props = this.props,
			list = props.data.map((el, i) => <div key={i} onClick={props.filterElements.bind(null, el.id)}>{el.title}</div>);
		return (
			<div className="filter">
				{ list }
			</div>
		);
	}
});

let Filters = React.createClass({
	render: function () {

		let products = [
			{
				id: 51,
				title: 'Proscitto cotto'
			},
			{
				id: 52,
				title: 'Salame'
			},
			{
				id: 53,
				title: 'Bresaola'
			}
		];
		let sides = [
			{
				id: 111,
				title: 'Primo Piatto'
			},
			{
				id: 112,
				title: 'Secondo Piatto'
			},
			{
				id: 113,
				title: 'Dessert'
			}
		];

		return (
			<div className="filters">
				<Filter data={products} filterElements={this.props.filterElements} />
				<Filter data={sides} filterElements={this.props.filterElements} />
			</div>
		);
	}
});

let Recipes = React.createClass({

	render: function () {

		let recipesData = this.props.data,
			recipesList = recipesData.map((recipe, i) => <div key={i}>{recipe.title}</div>);

		return (
			<div>
				{ recipesList }
			</div>
		);
	}
});

var recipesData = [
	{
		id: 1,
		title: 'recipe 1',
		tag: 51//[51, 52, 111]
	},
	{
		id: 2,
		title: 'recipe 2',
		tag: 52//[52, 112]
	},
	{
		id: 3,
		title: 'recipe 3',
		tag: 53//[53, 113, 112]
	}
];


let RecipesContainer = React.createClass({
	getInitialState: function () {
		return {
			recipesFiltered: recipesData
		};
	},

	filterElements: function (id) {
		let recipesFiltered = this.state.recipesFiltered;

		recipesData.forEach((el) => {

			console.log(el.tag, id);
			if (el.tag === id) {
				recipesFiltered = [];
				recipesFiltered.push(el);
			}
		});

		this.setState({
			recipesFiltered: recipesFiltered
		});
	},

	render: function () {

		return (
			<div className="container">
				<Filters filterElements={this.filterElements}/>
				<Recipes data={this.state.recipesFiltered} />
			</div>
		);
	}

});


let Index = React.createClass({

	render: function () {

		return (
			<main>
				<h1>Prova le prelibatezze della cucina di Snello Gusto e Benessere</h1>
				<RecipesContainer />
			</main>
		);
	}
});

export default Index;
