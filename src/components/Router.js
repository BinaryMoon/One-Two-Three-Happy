import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "../screens/NotFound";
import Home from '../screens/Home';
import About from '../screens/About';
import Archive from '../screens/Archive';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/archive/" component={Archive} />
			<Route exact path="/about/" component={About} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
