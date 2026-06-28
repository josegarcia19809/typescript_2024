import type { ReactNode } from "react";
import "./Tarjeta.css";

interface TarjetaProps {
    titulo: string;
    cantidad: number;
    activo: boolean;
    children: ReactNode;
};

const Tarjeta = ({ titulo, cantidad, activo, children }: TarjetaProps) => {
    return (
        <div className="tarjeta">
            <h2 className="tarjeta-titulo">{titulo}</h2>

            <p className="tarjeta-cantidad">
                Cantidad: <strong>{cantidad}</strong>
            </p>

            <p className={activo ? "estado activo" : "estado inactivo"}>
                {activo ? "✅ Activo" : "❌ Inactivo"}
            </p>

            <hr />

            <div className="tarjeta-contenido">
                {children}
            </div>
        </div>
    );
};

export default Tarjeta;