import {type CSSProperties} from "react"

const MateriaFavorita = () => {

    // Paleta de colores
    const colors = {
        indianRed: '#CD5C5C',
        darkSalmon: '#E9967A',
        white: '#FFFFFF',
        black: '#000000',
    };
    // Estilos para el contenido principal (Main)
    const mainStyle: CSSProperties = {
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: colors.black, // Se cambia a negro para mejor contraste
    };
    return (
        <div style={mainStyle}>
            <p>Mi materia favorita es Matemáticas</p>
        </div>
    )
}

export default MateriaFavorita