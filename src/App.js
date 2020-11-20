import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Anunciar from "./pages/Anunciar";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/cadastrar" component={Anunciar} />
			</Switch>
		</Router>
	);
}

export default App;
