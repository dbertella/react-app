import React from 'react';
import Router from 'react-router';
let {Link} = Router;


var Header = React.createClass({
	render: function () {
		return (
			<header>
				<Link to="/">Index</Link>
				<Link to="/about">About</Link>
				<Link to="/recipe/1">Recipe</Link>
			</header>
		);
	}
});

export default Header;
