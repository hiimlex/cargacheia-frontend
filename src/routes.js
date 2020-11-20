import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Anuncios, Cadastrar, Pedidos, Veiculos } from './pages';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Anuncios} />
				<Route path="/cadastrar" component={Cadastrar} />
				<Route path="/pedidos/:id" component={Pedidos} />
				<Route path="/veiculos" component={Veiculos} />
			</Switch>
		</Router>
	);
}

export default App;
