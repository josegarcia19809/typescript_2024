import type {CSSProperties} from "react";

const AnimalFavorito = () => {
    // Paleta de colores ecológica
    const colors = {
        forestGreen: '#228B22',   // Verde bosque 🌳
        mossGreen: '#8FBC8F',     // Verde musgo 🍃
        earthBrown: '#8B4513',    // Marrón tierra 🪵
        skyBlue: '#87CEEB',       // Azul cielo ☁️
        cream: '#F5F5DC',         // Beige/crema suave 🌾
        white: '#FFFFFF',         // Blanco puro ✨
        charcoal: '#333333',      // Gris oscuro elegante ⚫
    };

    // Estilos para el contenido principal (Main)
    const mainStyle: CSSProperties = {
        backgroundColor: colors.cream,       // Fondo cálido y natural 🌾
        color: colors.charcoal,              // Texto gris oscuro para buena legibilidad ⚫
        padding: '2rem',
        minHeight: '20vh',                   // Que ocupe gran parte de la pantalla
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '1.5rem',                       // Espaciado entre secciones
    };

    return (
        <div style={mainStyle}>
            <p>🐼 Mi animal favorito es el panda</p>
        </div>
    )
}

export default AnimalFavorito