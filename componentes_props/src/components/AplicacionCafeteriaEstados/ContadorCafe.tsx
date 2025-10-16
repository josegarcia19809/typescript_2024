import { useState } from "react";
import "./ContadorCafe.css";

type BebidaProps = {
    tipoCafe: string;
    cantidadInicial: number;
    imagen: string;
};

const ContadorCafe = ({ tipoCafe, cantidadInicial, imagen }: BebidaProps) => {
    
    const [contador, setContador] = useState(cantidadInicial);

    const manejarSumar = () => {
        setContador(contador + 1);
    }

    const manejarRestar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }
    
    return (
        <section className="cafe-contenedor">
            <img src={imagen} alt={tipoCafe} className="cafe-imagen" />
            <span className="cafe-tipo">{tipoCafe}</span>
            <div className="cafe-controles">
                <button onClick={manejarSumar} className="btn-cafe">+1</button>
                <span className="cafe-cantidad">{contador}</span>
                <button onClick={manejarRestar} className="btn-cafe">-1</button>
            </div>
        </section>
    );
};

export default ContadorCafe;
