import React from 'react';
import _ from 'lodash';
import mockData from '../../../mock.data.json';


let recipesData = mockData.recipesData,
	products = mockData.products,
	sides = mockData.sides;

let Filter = React.createClass({
	render: function () {
		let props = this.props,
		list = props.data.map((el, i) => <div key={i} onClick={props.filterElements.bind(null, el.id)}>{el.title}</div>),
		filterTitle = props.activeFilter.title;
		return (
			<div className="filter" onClick={props.showList.bind(null, props.showElements, filterTitle)}>
				{filterTitle}
				<div className="list">
					{ this.props.showElements ? list : null }
				</div>
			</div>
		);
	}
});

let Filters = React.createClass({
	getInitialState: function () {
		return {
			showProdElements: false,
			showSideElements: false
		};
	},
	showList: function (visible, filterTitle) {

		let titles = _.pluck(products, 'title');
		if (titles.indexOf(filterTitle) >= 0 ) {
			this.setState({
				showProdElements: !visible,
				showSideElements: false
			});
		} else {
			this.setState({
				showProdElements: false,
				showSideElements: !visible
			});
		}
	},
	getTitleActive: function (data, id) {
		var active = _.find(data, {'id': id});
		if (active) {
			return active;
		} else {
			return data[0];
		}
	},
	render: function () {

		let style = {
			display: 'flex',
			flexFlow: 'row wrap',
			justifyContent: 'center'
		};

		// let filterList = [products, sides].map(function (el) {

		// 	return (
		// 		<Filter data={el}
		// 				filterElements={this.props.filterElements}
		// 				activeFilter={this.getTitleActive(el, this.props.activeFilter)}
		// 				showList={this.showList}
		// 				showElements={this.state.showElements} />
		// 	);
		// });
		return (
			<div className="filters" style={style}>

				<Filter data={products}
						filterElements={this.props.filterElements}
						activeFilter={this.getTitleActive(products, this.props.activeFilter)}
						showList={this.showList}
						showElements={this.state.showProdElements} />
				<Filter data={sides}
						filterElements={this.props.filterElements}
						activeFilter={this.getTitleActive(sides, this.props.activeFilter)}
						showList={this.showList}
						showElements={this.state.showSideElements} />
			</div>
		);
	}
});

let Recipes = React.createClass({

	render: function () {

		let data = this.props.data,
			recipesList = data.map((recipe, i) =>
				<a key={i} href={'#/recipe/' + recipe.id}>
					<img src="http://placehold.it/350x150" />
					<h2>{recipe.title}</h2>
					<p>
						{recipe.tag.map((tag, j) => <span key={j}>{tag} </span>)}
					</p>
				</a>);
		let style = {
			display: 'flex',
			flexFlow: 'row wrap',
			justifyContent: 'space-around'
		};
		return (
			<div style={style}>
				{ recipesList }
			</div>
		);
	}
});

let RecipesContainer = React.createClass({
	getInitialState: function () {
		return {
			recipesFiltered: recipesData,
			titleFilterBlockId: 0
		};
	},

	filterElements: function (id) {
		let recipesFiltered = [];

		if (id !== '0') {
			recipesData.forEach((el) => {
				if (el.tag.indexOf(id) > -1) {
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
		let style = {textAlign: 'center'};
		return (
			<main>
				<h1 style={style}>
					Prova le prelibatezze della cucina di<br />
					Snello Gusto e Benessere
				</h1>
				<RecipesContainer />
			</main>
		);
	}
});

export default Index;
