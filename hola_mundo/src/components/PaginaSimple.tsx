import  { type CSSProperties } from 'react';

function PaginaSimple() {
    // Paleta de colores
    const colors = {
        indianRed: '#CD5C5C',
        darkSalmon: '#E9967A',
        white: '#FFFFFF',
        black: '#000000', // El nuevo color negro para el texto
    };

    // Estilos para el encabezado (Header)
    const headerStyle: CSSProperties = {
        backgroundColor: colors.indianRed,
        color: colors.white,
        padding: '1.5rem',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    };

    // Estilos para el contenido principal (Main)
    const mainStyle: CSSProperties = {
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: colors.black, // Se cambia a negro para mejor contraste
    };

    // Estilos para el pie de página (Footer)
    const footerStyle: CSSProperties = {
        backgroundColor: colors.darkSalmon,
        color: colors.white,
        padding: '1.5rem',
        textAlign: 'center',
        marginTop: '3rem',
    };

    return (
        <div>
            {/* Encabezado (Header) */}
            <header style={headerStyle}>
                <h1>Mi Blog Personal</h1>
            </header>

            {/* Contenido principal */}
            <main style={mainStyle}>
                <h2>¡Bienvenidos a mi espacio!</h2>
                <p>
                    Este sitio web es un ejemplo simple y estilizado con una paleta de colores cálida.
                    El encabezado y el pie de página utilizan los tonos **IndianRed** y **DarkSalmon** para crear una apariencia cohesiva y atractiva.
                </p>
            </main>

            {/* Pie de página (Footer) */}
            <footer style={footerStyle}>
                <p>Diseñado con amor y React usando tu paleta de colores.</p>
            </footer>
        </div>
    );
}

export default PaginaSimple;