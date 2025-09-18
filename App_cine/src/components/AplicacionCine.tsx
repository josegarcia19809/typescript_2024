import type {CSSProperties} from "react";

const AplicacionCine = () => {
    const tituloPelicula: string = "Inception";
    const director: string = "Christopher Nolan";
    const duracion: number = 148;
    const disponible: boolean = true;

    type InfoEstreno = {
        pais: string;
        año: number;
    }

    const infoEstreno: InfoEstreno = {
        pais: "Estados Unidos",
        año: 2010
    };

    // Estilos
    const estiloCaja: CSSProperties = {
        backgroundColor: '#FFF3E0',
        borderRadius: 15,
        padding: 12,
        marginTop: 25,
        fontFamily: "Arial"
    }

    return (
        <div style={estiloCaja}>
            <h1>🎥 {tituloPelicula}</h1>
            <h3>🎬 Director: {director}</h3>
            <p>🕣 Duración: {duracion} minutos</p>
            <p>{disponible
                ? "✅ Si está disponible"
                : "❌ No está disponible"}
            </p>
            <div>
                <p>🇺🇸 País: {infoEstreno.pais}</p>
                <p>🗓️ Año: {infoEstreno.año}</p>
            </div>
        </div>
    );
};

export default AplicacionCine;
