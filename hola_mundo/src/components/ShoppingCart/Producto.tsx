import "./Producto.css"
import {useState} from "react";

type ProductoProps = {
    nombre: string;
    cantidad: number;
}

const Producto = ({nombre, cantidad}: ProductoProps) => {
    const [contador, setContador] = useState(cantidad);
    const manejarSumar = () => {
        setContador(contador + 1);
    };

    const manejarRestar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };
    return (
        <>
            <section className="item-row">
                <span className="item-text">
                    {nombre}
                </span>
                <button onClick={manejarSumar}>+1</button>
                <span>{contador}</span>
                <button onClick={manejarRestar}>-1</button>
            </section>
        </>
    );
};

export default Producto;