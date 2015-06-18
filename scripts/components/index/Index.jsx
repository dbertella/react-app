import React from 'react';
import _ from 'lodash';

let Filter = React.createClass({
	getInitialState: function() {
		return { 
			showElements: false
		};
	},
	showList: function(visible) {
		this.setState({ showElements: !visible });
	},
	render: function () {
		let props = this.props,
		list = props.data.map((el, i) => <div key={i} onClick={props.filterElements.bind(null, el.id)}>{el.title}</div>),
		filterTitle = props.activeFilter.title;
		return (
			<div className="filter" onClick={this.showList.bind(null, this.state.showElements)}>
				{filterTitle}
				<div className="list">
					{ this.state.showElements ? list : null }
				</div>
			</div>
			);
	}
});

let Filters = React.createClass({

	getTitleActive: function (data, id) {
		var active = _.find(data, {'id': id});

		if (active) {
			return active;
		} else {
			return data[0];
		}
	},
	render: function () {

		let products = [
			{
				id: 0,
				title: 'Tutti i prodotti'
			},
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
				id: 0,
				title: 'Tutti i piatti'
			},
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
				<Filter data={products} 
						filterElements={this.props.filterElements} 
						activeFilter={this.getTitleActive(products, this.props.activeFilter)} />
				<Filter data={sides} 
						filterElements={this.props.filterElements} 
						activeFilter={this.getTitleActive(sides, this.props.activeFilter)}/>
			</div>
			);
	}
});

let Recipes = React.createClass({

	render: function () {

		let recipesData = this.props.data,
		recipesList = recipesData.map((recipe, i) => 
			<div key={i}>
				<img src="http://placehold.it/350x150" />
				<h2>{recipe.title}</h2>
			</div>);

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
				recipesFiltered: recipesData,
				titleFilterBlockId: 0
			};
		},

		filterElements: function (id) {
			let recipesFiltered = this.state.recipesFiltered;

			if (id) {
				recipesData.forEach((el) => {
					if (el.tag === id) {
						recipesFiltered = [];
						recipesFiltered.push(el);
					}
				});
			} else {
				recipesFiltered = recipesData;
			}


			this.setState({
				recipesFiltered: recipesFiltered,
				titleFilterBlockId: id
			});
		},

		render: function () {
			let recipesFiltered = this.state.recipesFiltered,
				titleFilterBlockId = this.state.titleFilterBlockId;
			return (
				<div className="container">
					<Filters filterElements={this.filterElements} activeFilter={titleFilterBlockId} />
					<Recipes data={recipesFiltered} />
				</div>
				);
		}

	});


	let Index = React.createClass({

		render: function () {

			return (
				<main>
					<h1>
						Prova le prelibatezze della cucina di<br />
						Snello Gusto e Benessere
					</h1>
					<RecipesContainer />
				</main>
			);
		}
	});

	export default Index;
