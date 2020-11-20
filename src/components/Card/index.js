import React from 'react';
import PropTypes from 'prop-types';
import { FiMapPin, FiFlag } from 'react-icons/fi'
import './styles.css';

export default function Card (props) {
    return (
    <div className="card">
        <div className="card-container">
            <div className="info-anuncio">
                <div className="card-info">
                    <div className="avatar"></div>
                    <div className="info-empresa">
                        {/* Pega da api */}
                        <span><b>{props.companyName}</b></span>
                        <p>Suporta:{" "}<b>4T</b></p>
                    </div>
                </div>
                <div className="preco-info">
                    <span><b>{props.price}R$</b></span>
                    <p><FiMapPin color="#777777" size={12} />{" "}distância: {"  "}<b>{props.distance} KM</b></p>
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
                    />{" "}
                    <span style={{ color: "#30b18a", fontSize: 20, marginBottom: -12, }}>•</span>
                    <span style={{ color: "#30b18a", fontSize: 20 }}>•</span>
                    <FiMapPin
                        size={20}
                        color="#30B18A"
                        style={{ fontWeight: "bold" }}
                    />
                </div>
                <div className="tracker-info">
                    <span><b>{props.departure}</b></span>
                    <hr className="hr" />
                    <span><b>{props.destination}</b></span>
                </div>
            </div>
        </div>
    </div>
    )
}

Card.propTypes = {
    companyName: PropTypes.string,
    price: PropTypes.number,
    distance: PropTypes.number,
    destination: PropTypes.string,
    departure: PropTypes.string
}