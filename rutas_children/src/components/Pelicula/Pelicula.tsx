import type {PropsWithChildren} from "react";
import "./Pelicula.css";

interface PeliculaProps extends PropsWithChildren {
    titulo: string;
    duracion: number;
    estreno: boolean;
}

const Pelicula = ({
                      titulo,
                      estreno,
                      duracion,
                      children,
                  }: PeliculaProps) => {
    return (
        <div className="pelicula">
            <h2 className="pelicula-titulo">{titulo}</h2>

            <p className="pelicula-duracion">
                Duración: <strong>{duracion} minutos</strong>
            </p>

            <p className={estreno ? "estado estreno" : "estado clasico"}>
                {estreno ? "🎬 En cartelera" : "📀 Clásico"}
            </p>

            <hr/>

            <div className="pelicula-contenido">
                {children}
            </div>
        </div>
    );
};

export default Pelicula;