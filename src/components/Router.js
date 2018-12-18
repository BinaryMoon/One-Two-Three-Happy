import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "../screens/NotFound";
import Home from '../screens/Home';
import About from '../screens/About';
import Archives from '../screens/Archives';
import ArchiveTag from '../screens/ArchiveTag';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/archive/" component={Archives} />
			<Route exact path="/about/" component={About} />
			<Route exact path="/tag/:tag/" component={ArchiveTag} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
