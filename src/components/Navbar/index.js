import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
	const [message, setMessage] = useState();

	const location = useLocation();

	useEffect(() => {
		function onRouteChange() {
			if (location.pathname === "/") {
				setMessage("Listando todos os anúncios!")
				return;
			}
			
			if (location.pathname === "/cadastrar") {
				setMessage("Informe os dados para cadastrar uma viagem!")
				return;
			}

			if (location.pathname === "/pedidos") {
				setMessage("Esses são todos os pedidos do anúncio!")
				return;
			}

			if (location.pathname === "/veiculos") {
				setMessage("Informe os dados para cadastrar um novo veículo!")
				return;
			}
		};

		onRouteChange();
	}, [location])

	return (<>
		<header>
			<span>Dashboard</span>
		</header>
		<nav>
			<ul>
				<li>
					<Link className={location.pathname === "/" || location.pathname === '/pedidos' ? "link-route active" : "link-route"} to="/">
						Anúncios
					</Link>
				</li>
				<div className="vl"></div>
				<li>
					<Link
						className={location.pathname === "/cadastrar" ? "link-route active" : "link-route"}
						to="/cadastrar"
					>
						Cadastrar Viagem
					</Link>
				</li>
				<div className="vl"></div>
				<li>
					<Link
						className={location.pathname === "/veiculos" ? "link-route active" : "link-route"}
						to="/veiculos"
					>
						Cadastrar Veículo
					</Link>
				</li>
			</ul>
		</nav>
		<span className="message-under-nav">{message}</span>
	</>);
}