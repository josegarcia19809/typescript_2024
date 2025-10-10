import './LibroDigital.css';

type LibroDigitalProps = {
    titulo: string;
    autor: string;
};

const LibroDigital = ({ titulo, autor }: LibroDigitalProps) => {

    const marcarLeido = () => {
        console.log(`Libro leído: ${titulo} - ${autor}`);
    }

    const reservar = () => {
        console.log(`Reservar libro: ${titulo}`);
    }

    const recomendar = () => {
        console.log(`Recomendar libro: ${titulo}`);
    }


    return (
        <section className="libro">
            <span className="libro-info">
                {titulo} - {autor}
            </span>
            <div className="libro-botones">
                <button onClick={marcarLeido}
                        className="btn btn-leido">📖 Leído</button>
                <button onClick={reservar}
                        className="btn btn-reservar">📚 Reservar</button>
                <button onClick={recomendar}
                        className="btn btn-recomendar">🌟 Recomendar
                </button>
            </div>
        </section>
    );
};

export default LibroDigital;
