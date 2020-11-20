import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Dashboard} />
			</Switch>
		</Router>
	);
}

export default App;
