import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.svg";

export default function Dashboard() {
	return (
		<div className="dashboard-container">
			<header>
				<span>Dashboard</span>
				<div className="vl"></div>
			</header>
			<nav>
				<ul>
					<li>
						<Link className="link-route active" to="/">
							Lista de anúncios
						</Link>
					</li>
					<li>
						<Link className="link-route">
							Cadastrar anúncio
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
