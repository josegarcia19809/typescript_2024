type CarteleraProps = {
    titulo: string;
};

const Cartelera = ({titulo}: CarteleraProps) => {
    return (
        <header>
            <h1>{titulo}</h1>
        </header>
    );
};

export default Cartelera;
