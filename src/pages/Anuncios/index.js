import React from "react";
import "./styles.css";
import { Navbar, CardAnuncio } from "../../components";

import { useHistory } from 'react-router-dom';

import logoImg from "../../assets/logo.svg";

// Fazer as requisições para pegar os dados e jogar dentro do card com useState e etc

export default function Dashboard() {

	const history = useHistory();

	return (
		<div className="dashboard-container-anuncio">
			<Navbar />
			<div className="dashboard-content-anuncio">
				{/* Fazer Scrollview com os cards mantendo a imagem do lado parada no web, no mobile a imagem vai ser retirada */}
				<div className="cards-anuncio">
					<CardAnuncio 
					onClick={() => history.push('/pedidos')}
					destination="Fortaleza"
					returnDate={'25/08/2000'}
					vehicle={{
						tipo_veiculo: "VUC",
						comprimento: "6,3",
						largura_comportada: "2,3",
						peso_bruto_maximo: "3000",
						placa: "HVL-0121"	
					}}
					/>

					<CardAnuncio 
					onClick={() => history.push('/pedidos')}
					destination="Fortaleza"
					returnDate={'25/08/2000'}
					vehicle={{
						tipo_veiculo: "VUC",
						comprimento: "6,3",
						largura_comportada: "2,3",
						peso_bruto_maximo: "3000",
						placa: "HVL-0121"	
					}}
					/>
				</div>

				<div className="img-container">
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
