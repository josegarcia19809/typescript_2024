import { useState } from "react";
import "./ContadorGoles.css";

type JugadorProps = {
    nombre: string;
    golesIniciales: number;
    foto: string;
};

const ContadorGoles = ({ nombre, golesIniciales, foto }: JugadorProps) => {
    const [cantidad, setCantidad] = useState(golesIniciales);

    const manejarIncremento = () => setCantidad(cantidad + 1);
    const manejarDecremento = () => {
        if (cantidad > 0) setCantidad(cantidad - 1);
    };

    return (
        <div className="card-jugador">
            <img src={foto} alt={nombre} className="jugador-foto" />
            <h2 className="jugador-nombre">{nombre}</h2>
            <div className="contador">
                <button className="btn menos" onClick={manejarDecremento}>-1</button>
                <span className="goles">{cantidad}</span>
                <button className="btn mas" onClick={manejarIncremento}>+1</button>
            </div>
        </div>
    );
};

export default ContadorGoles;
