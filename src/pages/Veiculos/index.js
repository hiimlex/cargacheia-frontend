import React from "react";
import { Navbar, Input, Button } from "./../../components";
import "./styles.css";

export default function Veiculos() {

	return (
		<div className="anunciar-container">
			<Navbar />

			<div className="cadastro-container">
				<hr />
				<br />
				<span className="title">Cadastrar Veículo</span>

				<div className="form">
					<Input label="Tipo do Veículo" placeholder="Ex: Truck" />
					<Input label="Comprimento" />
				</div>

				<div className="form">
					<Input label="Largura Comportada" />
					<Input label="Peso Bruto Máximo" />
				</div>

				<Input label="Placa do Veículo" />

				<Button label="Cadastrar" />
			</div>
		</div>
	);
}
