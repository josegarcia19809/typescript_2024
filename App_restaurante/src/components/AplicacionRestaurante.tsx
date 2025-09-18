import type {CSSProperties} from "react";

const AplicacionRestaurante = () => {
    const nombreRestaurante: string = "La Pizzeria React 🍽️";
    const platilloEspecial: string = "Pizza de Pepperoni";
    const precio: number = 150;
    const disponibilidad: boolean = false;

    type InfoRestaurante = {
        calle: string;
        ciudad: string;
    }

    const infoRestaurante: InfoRestaurante = {
        calle: "Av. Principal 123",
        ciudad: "Atlacomulco"
    }

    // Declarar los estilos
    const estiloCaja: CSSProperties = {
        backgroundColor: "#FFF3E0",
        borderRadius: 15,
        padding: 12,
        marginTop: 25,
        fontFamily: "Arial"
    }


    return (
        <div style={estiloCaja}>
            <h1>{nombreRestaurante}</h1>
            <h3>🍕 Platillo especial: {platilloEspecial}</h3>
            <p>💲 Precio: ${precio}</p>
            <p>
                {disponibilidad
                    ? "✅ Está disponible"
                    : "❌ No está disponible"}
            </p>
            <div>
                <p>🏘️ Calle: {infoRestaurante.calle}</p>
                <p>🏙️ Ciudad: {infoRestaurante.ciudad}</p>
            </div>
        </div>
    );
};

export default AplicacionRestaurante;
