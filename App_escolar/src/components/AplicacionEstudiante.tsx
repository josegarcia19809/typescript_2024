import type { CSSProperties } from "react";

function AplicacionEstudiante() {
    // Variables con tipos explícitos
    const nombreEstudiante: string = "María López";
    const calificacion: number = 9;
    const estaInscrita: boolean = false;
    const materiasFavoritas: string[] = [
        "Matemáticas",
        "Historia",
        "Programación",
    ];

    // Objeto con type
    type InfoEscolar = {
        grupo: string;
        campus: string;
    };

    const infoEscolar: InfoEscolar = {
        grupo: "9-B",
        campus: "TES Atlacomulco",
    };

    // estilos tipados con CSSProperties
    const estiloCaja: CSSProperties = {
        backgroundColor: '#FFF3E0',
        borderRadius: 15,
        padding: 12,
        marginTop: 25,
        fontFamily: 'Arial'
    };

    // Agregar carrera y asignatura
    return (
        <div style={estiloCaja}>
            <h1>👩🏼‍🔧{nombreEstudiante}</h1>
            <h3>📊 Calificación: {calificacion}</h3>
            <h2>{estaInscrita ? "✅Inscrita" : "❌No inscrita"}</h2>
            <p>📕 Materias favoritas: {materiasFavoritas.join(", ")}</p>
            <div>
                <p>🏣 Grupo: {infoEscolar.grupo}</p>
                <p>📍 Campus: {infoEscolar.campus}</p>
            </div>
        </div>
    );
}

export default AplicacionEstudiante;
