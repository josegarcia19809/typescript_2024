import type {CSSProperties} from "react";

const SaludoZoologico = () => {
    const colors = {
        forestGreen: '#228B22',   // Verde bosque 🌳
        mossGreen: '#8FBC8F',     // Verde musgo 🍃
        earthBrown: '#8B4513',    // Marrón tierra 🪵
        skyBlue: '#87CEEB',       // Azul cielo ☁️
        cream: '#F5F5DC',         // Beige/crema suave 🌾
        white: '#FFFFFF',         // Blanco puro ✨
        charcoal: '#333333',      // Gris oscuro elegante ⚫
    };

    // Estilos para el encabezado (Header)
    const headerStyle: CSSProperties = {
        backgroundColor: colors.forestGreen, // Verde bosque 🌳
        color: colors.white,
        padding: '1.5rem',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    };

    return (
        <header style={headerStyle}>
            <h1>🦁 Bienvenido al zoológico React</h1>
        </header>
    )
}

export default SaludoZoologico