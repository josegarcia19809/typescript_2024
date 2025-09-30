type TarjetaProps = {
    titulo: string;
    cantidad: number;
    activo: boolean;
};

const Tarjeta = ({titulo, cantidad, activo}: TarjetaProps) => {
    return (
        <div
            style={{
                border: "1px solid gray",
                padding: "10px",
                margin: "10px",
            }}
        >
            <h2>{titulo}</h2>
            <p>Cantidad: {cantidad}</p>
            <p>{activo ? "✅Activo" : "❌Inactivo"}</p>
        </div>
    );
};

export default Tarjeta;
