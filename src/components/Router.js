import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "../screens/NotFound";

import Home from '../screens/Home';
import Archives from '../screens/Archives';
import ArchiveTag from '../screens/ArchiveTag';

// import About from '../screens/About';
const About = lazy( () => import( '../screens/About' ) );

const Router = () => (
	<BrowserRouter>
		<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/archive/" component={Archives} />
				<Route exact path="/about/" component={About} />
				<Route exact path="/tag/:tag/" component={ArchiveTag} />
				<Route component={NotFound} />
			</Switch>
		</Suspense>
	</BrowserRouter>
);

export default Router;


