import React from 'react';
import Router from 'react-router';

let {Link, RouteHandler} = Router;

window.React = React;

var Root = React.createClass({
	render: function () {
		return (
			<div>
				<header>
					<Link to="/">Index</Link>
					<Link to="/about">About</Link>
				</header>
				<RouteHandler />
			</div>
		);
	}
});

export default Root;
