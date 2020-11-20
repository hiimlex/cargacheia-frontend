import React from "react";
import "./styles.css";
import { FiMapPin, FiFlag } from "react-icons/fi";
import { Navbar, Card } from "../../components"

import logoImg from "../../assets/logo.svg";

// Fazer as requisições para pegar os dados e jogar dentro do card com useState e etc

export default function Dashboard() {

	return (
		<div className="dashboard-container">
			<Navbar />
			<div className="dashboard-content">
				{/* Fazer Scrollview com os cards mantendo a imagem do lado parada no web, no mobile a imagem vai ser retirada */}
				<div className="cards">
					<Card 
					maxWeight={4000}
					companyName="Nome da Empresa" 
					departure="Juazeiro do Norte" 
					destination="Fortaleza"
					distance={50}
					price={20}
					/>

					<Card 
					maxWeight={300}
					companyName="Nome da Empresa" 
					departure="Natal" 
					destination="Rio de Janeiro"
					distance={50}
					price={20}
					/>
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
