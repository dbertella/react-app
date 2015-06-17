import React from 'react';
import Router from 'react-router';
//import Header from './components/shared/Header.jsx';
import Root from './components/shared/Root.jsx';
import Index from './components/index/Index.jsx';
import About from './components/about/About.jsx';
let {DefaultRoute, Route, Link, RouteHandler} = Router;

window.React = React;

var routes = (
	<Route handler={Root} path="/">
		<DefaultRoute handler={Index}/>
		<Route path="about" handler={About}/>
	</Route>
);

Router.run(routes, Router.HashLocation, (Handler) => {
	React.render(<Handler/>, document.getElementById('content'));
});
