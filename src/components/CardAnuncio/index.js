import React from 'react';
import PropTypes from 'prop-types';
import { FiMapPin } from 'react-icons/fi';
import './styles.css';

export default function CardAnuncio (props) {
    return (
    <div onClick={props.onClick} className="card-anuncio">
        <div className="top">
            <div className="destination">
                <b><FiMapPin style={{ fontSize: 25 }} /> DESTINO:</b> {props.destination}
            </div>

            <div className="return-date">
                {props.returnDate}
            </div>
        </div>

        <div className="bottom">
            <div className="vehicle-container">
                <div className="vehicle-info">
                    Tipo de Veículo: {props.vehicle.tipo_veiculo}
                </div>

                <div className="vehicle-info">
                    Comprimento do Veículo: {props.vehicle.comprimento}
                </div>
            </div>

            <div className="vehicle-container" style={{ alignItems: 'flex-end' }}>
                <div className="vehicle-info">
                    Largura Comportada: {props.vehicle.largura_comportada}
                </div>

                <div className="vehicle-info">
                    Peso Bruto Máximo: {props.vehicle.peso_bruto_maximo}
                </div>
            </div>
        </div>
    </div>
    )
}

CardAnuncio.propTypes = {
    destination: PropTypes.string,
    returnDate: PropTypes.string,
    vehicle: PropTypes.object,
    onClick: PropTypes.func
}