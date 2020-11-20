import React from "react";
import "./styles.css";
import { Navbar, Card } from "../../components"

import logoImg from "../../assets/logo.svg";

// Fazer as requisições para pegar os dados e jogar dentro do card com useState e etc

export default function Pedidos() {

	return (
		<div className="dashboard-container">
			<Navbar  />
			<div className="dashboard-content">
				{/* Fazer Scrollview com os cards mantendo a imagem do lado parada no web, no mobile a imagem vai ser retirada */}
				<div className="cards">
					<Card 
                    companyName="Teste"
                    departure="Fortaleza"
                    destination="Juazeiro do Norte"
                    distance={3000}
                    weight={2000}
                    price={2000}
					/>

                    <Card 
                    companyName="Teste"
                    departure="Fortaleza"
                    destination="Juazeiro do Norte"
                    distance={3000}
                    weight={2000}
                    price={2000}
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
