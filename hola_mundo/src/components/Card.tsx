// Card.tsx

// Definimos el tipo de las props
type CardProps = {
    titulo: string;        // string
    cantidad: number;      // number
    activo: boolean;       // boolean
};

// Componente funcional que recibe props tipadas
const Card = ({titulo, cantidad, activo}: CardProps) => {
    return (
        <div style={{border: "1px solid gray", padding: "10px", margin: "10px"}}>
            <h2>{titulo}</h2>
            <p>📊 Cantidad: {cantidad}</p>
            <p>{activo ? "✅ Activo" : "❌ Inactivo"}</p>
        </div>
    );
};

export default Card;
