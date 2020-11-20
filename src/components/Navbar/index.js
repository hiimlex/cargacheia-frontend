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
			} else if (location.pathname === "/cadastrar") {
				setMessage("Informe os dados para cadastrar seu anúncio!")
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
					<Link className={location.pathname === "/" ? "link-route active" : "link-route"} to="/">
						Anúncios
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