import type {CSSProperties} from "react";

const MensajeFinalZoologico = () => {
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

    // Estilos para el pie de página (Footer)
    const footerStyle: CSSProperties = {
        backgroundColor: colors.earthBrown, // Marrón tierra 🪵
        color: colors.cream,                // Texto en tono cálido 🌾
        padding: '1rem',
        textAlign: 'center',
        marginTop: '2rem',
        boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1)',
    };

    return (
        <footer style={footerStyle}>
            🐒 Cuida siempre a los animales
        </footer>
    )
}

export default MensajeFinalZoologico