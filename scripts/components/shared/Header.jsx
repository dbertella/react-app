import React from 'react';
import Router from 'react-router';
let Link = Router;


var Header = React.createClass({
	render: function () {
		return (
			<header>
				<Link to="/index">Index</Link>
				<Link to="/about">About</Link>
			</header>
		);
	}
});

export default Header;
