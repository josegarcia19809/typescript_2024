// Bienvenida.tsx

type BienvenidaProps = {
    mensaje: string;  // prop requerida
};

const Bienvenida = ({mensaje}: BienvenidaProps) => {
    return <h1>{mensaje}</h1>;
};

export default Bienvenida;