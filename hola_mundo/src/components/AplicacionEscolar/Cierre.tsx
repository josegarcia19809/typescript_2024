import {type CSSProperties} from "react"

const Cierre = () => {
    // Paleta de colores
    const colors = {
        indianRed: '#CD5C5C',
        darkSalmon: '#E9967A',
        white: '#FFFFFF',
        black: '#000000',
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
        <footer style={footerStyle}>
            <p>Recuerda estudiar todos los días</p>
        </footer>
    )
}

export default Cierre