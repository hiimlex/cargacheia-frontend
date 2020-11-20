import React, { useEffect, useState } from "react";
import "./styles.css";
import { Navbar, Card } from "../../components";
import { useParams } from 'react-router-dom';

import Loader from 'react-loader-spinner';

import { AnuncioRoutes } from './../../network';

import logoImg from "../../assets/logo.svg";

// Fazer as requisições para pegar os dados e jogar dentro do card com useState e etc

export default function Pedidos() {
	let { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [pedidos, setPedidos] = useState([]);

	async function getPedidos() {
		setLoading(true);
		const data = await AnuncioRoutes.getPedidos(id);

		setPedidos(data);
		setLoading(false);
	}

	useEffect(() => {
		getPedidos();
	}, [])

	return (
		<div className="dashboard-container">
			<Navbar  />
			<div className="dashboard-content">
				{/* Fazer Scrollview com os cards mantendo a imagem do lado parada no web, no mobile a imagem vai ser retirada */}
				<div className="cards">
				{loading ? (
						<Loader
						type="Puff"
						color="#00BFFF"
						height={100}
						width={100}
						timeout={3000} //3 secs
					 />
					) : (pedidos.length === 0 ? <span>Não há pedidos ainda.</span> : pedidos.map((pedido) => {
						return (
							<Card 
							companyName={pedido.empresa}
							departure={pedido.partida}
							destination={pedido.destino}
							distance={3000}
							weight={pedido.peso}
							price={23}
							/>
						)
					}))}
					</div>
				<div>
					<img
						src={logoImg}
						alt="Sabão Juá"
						className="logo-img"
					/>
				</div>
			</div>
		</div>
	);
}
