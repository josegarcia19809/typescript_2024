import type { PropsWithChildren } from "react";
import "./Producto.css";

type ProductoProps = PropsWithChildren<{
    nombre: string;
    precio: number;
    disponible: boolean;
}>;

const Producto = ({
                      nombre,
                      precio,
                      disponible,
                      children,
                  }: ProductoProps) => {
    return (
        <div className="producto">
            <h2 className="producto-nombre">{nombre}</h2>

            <p className="producto-precio">
                Precio: <strong>${precio}</strong>
            </p>

            <p className={disponible ? "estado disponible" : "estado agotado"}>
                {disponible ? "🟢 Disponible" : "🔴 Agotado"}
            </p>

            <hr />

            <div className="producto-contenido">
                {children}
            </div>
        </div>
    );
};

export default Producto;