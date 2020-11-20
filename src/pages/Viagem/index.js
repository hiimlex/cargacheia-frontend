import React from "react";
import { Navbar, Button, Input } from "../../components/";
import "./styles.css";

export default function Viagem() {

	return (
		<div className="anunciar-container">
			<Navbar />

			<div className="cadastro-container">
				<hr />
				<br />
				<span className="title">Cadastrar Viagem</span>

				<div className="form">
					<Input label="Destino da Viagem" placeholder="Ex: Fortaleza" />
					<Input label="Data de Volta" placeholder="Formato: dd/mm/aaaa" />
				</div>

				<Input label="Veículo Utilizado" />

				<Button label="Cadastrar" />
			</div>
		</div>
	);
}
