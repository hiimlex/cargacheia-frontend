import React from "react";
import "./styles.css";
import { FiMapPin, FiFlag } from "react-icons/fi";
import Navbar from "../../components/Navbar"

import logoImg from "../../assets/logo.svg";

// Fazer as requisições para pegar os dados e jogar dentro do card com useState e etc

export default function Dashboard() {

	return (
		<div className="dashboard-container">
			<Navbar />
			<div className="dashboard-content">
				{/* Fazer Scrollview com os cards mantendo a imagem do lado parada no web, no mobile a imagem vai ser retirada */}
				<div className="cards">
					<div className="card">
						<div className="card-container">
							<div className="info-anuncio">
								<div className="card-info">
									<div className="avatar"></div>
									<div className="info-empresa">
										{/* Pega da api */}
										<span>
											<b>
												nome da
												empresa
											</b>
										</span>
										<p>
											Suporta:{" "}
											<b>4T</b>
										</p>
									</div>
								</div>
								<div className="preco-info">
									<span>
										<b>30R$</b>
									</span>
									<p>
										<FiMapPin
											color="#777777"
											size={12}
										></FiMapPin>{" "}
										distância: {"  "}
										<b>102 KM</b>
									</p>
								</div>
							</div>
							<hr className="hr" />
							<div className="info-position">
								<div className="route-trace">
									<FiFlag
										size={20}
										color="#30B18A"
										style={{
											fontWeight:
												"bold",
										}}
									></FiFlag>{" "}
									<span
										style={{
											color:
												"#30b18a",
											fontSize: 20,
											marginBottom: -12,
										}}
									>
										•
									</span>
									<span
										style={{
											color:
												"#30b18a",
											fontSize: 20,
										}}
									>
										•
									</span>
									<FiMapPin
										size={20}
										color="#30B18A"
										style={{
											fontWeight:
												"bold",
										}}
									></FiMapPin>
								</div>
								<div className="tracker-info">
									<span>
										<b>
											Local de
											Partida
										</b>
									</span>
									<hr className="hr" />
									<span>
										<b>Destino</b>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-container">
							<div className="info-anuncio">
								<div className="card-info">
									<div className="avatar"></div>
									<div className="info-empresa">
										{/* Pega da api */}
										<span>
											<b>
												nome da
												empresa
											</b>
										</span>
										<p>
											Suporta:{" "}
											<b>4T</b>
										</p>
									</div>
								</div>
								<div className="preco-info">
									<span>
										<b>30R$</b>
									</span>
									<p>
										<FiMapPin
											color="#777777"
											size={12}
										></FiMapPin>{" "}
										distância: {"  "}
										<b>102 KM</b>
									</p>
								</div>
							</div>
							<hr className="hr" />
							<div className="info-position">
								<div className="route-trace">
									<FiFlag
										size={20}
										color="#30B18A"
										style={{
											fontWeight:
												"bold",
										}}
									></FiFlag>{" "}
									<span
										style={{
											color:
												"#30b18a",
											fontSize: 20,
											marginBottom: -12,
										}}
									>
										•
									</span>
									<span
										style={{
											color:
												"#30b18a",
											fontSize: 20,
										}}
									>
										•
									</span>
									<FiMapPin
										size={20}
										color="#30B18A"
										style={{
											fontWeight:
												"bold",
										}}
									></FiMapPin>
								</div>
								<div className="tracker-info">
									<span>
										<b>
											Local de
											Partida
										</b>
									</span>
									<hr className="hr" />
									<span>
										<b>Destino</b>
									</span>
								</div>
							</div>
						</div>
					</div>
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
