import React, { useEffect, useState } from "react";
import "./styles.css";
import { Navbar, CardAnuncio } from "../../components";

import Loader from 'react-loader-spinner';

import { useHistory } from 'react-router-dom';

import { AnuncioRoutes } from './../../network';

import logoImg from "../../assets/logo.svg";

export default function Dashboard() {
	const history = useHistory();
	const [loading, setLoading] = useState(true);
	const [anuncios, setAnuncios] = useState([])

	async function getAnuncios () {
		setLoading(true);
		const data = await AnuncioRoutes.getAll();

		console.log(data);

		setAnuncios(data);
		setLoading(false);
	}

	useEffect(() => {
		getAnuncios();
	}, [])

	return (
		<div className="dashboard-container-anuncio">
			<Navbar />
			<div className="dashboard-content-anuncio">
				{/* Fazer Scrollview com os cards mantendo a imagem do lado parada no web, no mobile a imagem vai ser retirada */}
				<div className="cards-anuncio">
					{loading ? (
						<Loader
						type="Puff"
						color="#00BFFF"
						height={100}
						width={100}
						timeout={3000} //3 secs
					 />
					) : (
						anuncios.map((anuncio) => {
							return (
								<CardAnuncio 
								onClick={() => history.push(`/pedidos/${anuncio.id}`)}
								destination={anuncio.destino}
								returnDate={anuncio.data_volta}
								vehicle={{
									tipo_veiculo: "VUC",
									comprimento: "6,3",
									largura_comportada: "2,3",
									peso_bruto_maximo: "3000",
									placa: "HVL-0121"	
								}}
								/>
							)
							
						})
					)}
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
