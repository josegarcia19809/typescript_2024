type BienvenidaAutomovilProps = {
    mensaje: string
}

const BienvenidaAutomovil = ({mensaje}: BienvenidaAutomovilProps) => {
    return (
        <header>
            <h1>{mensaje}</h1>
        </header>
    );
};

export default BienvenidaAutomovil;