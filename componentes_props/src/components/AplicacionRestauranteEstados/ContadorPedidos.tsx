import { useState } from "react";
import "./ContadorPedidos.css";

type PedidoProps = {
    platillo: string;
    pedidosIniciales: number;
    imagen: string;
};

const ContadorPedidos = ({ platillo, pedidosIniciales, imagen }: PedidoProps) => {
    const [cantidad, setCantidad] = useState(pedidosIniciales);

    const manejadorIncremento = () => {
        setCantidad(cantidad + 1);
    };

    const manejadorReseteo = () => {
        setCantidad(0);
    };

    return (
        <section className="pedido-contenedor">
            <img src={imagen} alt={platillo} className="pedido-imagen" />
            <span className="pedido-nombre">{platillo}</span>
            <div className="pedido-controles">
                <button className="btn-pedido" onClick={manejadorIncremento}>
                    Agregar
                </button>
                <span className="pedido-cantidad">{cantidad}</span>
                <button className="btn-reset" onClick={manejadorReseteo}>
                    Resetear
                </button>
            </div>
        </section>
    );
};

export default ContadorPedidos;
