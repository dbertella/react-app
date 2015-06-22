import React from 'react';
import Router from 'react-router';
import Header from './Header.jsx';

let {Link, RouteHandler} = Router;

window.React = React;

var Root = React.createClass({
	render: function () {
		return (
			<div>
				<Header />
				<RouteHandler />
			</div>
		);
	}
});

export default Root;
