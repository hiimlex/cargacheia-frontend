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
						{location.pathname === '/pedidos' ? "Anúncios / Pedidos" : 'Anúncios' }
					</Link>
				</li>
				<div className="vl"></div>
				<li>
					<Link
						className={location.pathname === "/cadastrar" ? "link-route active" : "link-route"}
						to="/cadastrar"
					>
						Cadastrar
					</Link>
				</li>
			</ul>
		</nav>
		<span className="message-under-nav">{message}</span>
	</>);
}