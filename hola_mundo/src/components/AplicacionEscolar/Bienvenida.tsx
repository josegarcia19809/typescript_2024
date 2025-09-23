import {type CSSProperties} from "react"

const Bienvenida = () => {
    // Paleta de colores
    const colors = {
        indianRed: '#CD5C5C',
        darkSalmon: '#E9967A',
        white: '#FFFFFF',
        black: '#000000',
    };
    // Estilos para el encabezado (Header)
    const headerStyle: CSSProperties = {
        backgroundColor: colors.indianRed,
        color: colors.white,
        padding: '1.5rem',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    };

    return (
        <header style={headerStyle}>
            <h1>Bienvenido al portal escolar</h1>
        </header>
    )
}

export default Bienvenida