type CarritoItemProps = {
    precio: number;
    comprado: boolean;
    producto: string;
};

const CarritoItem = ({precio, comprado, producto}: CarritoItemProps) => {
    return (
        <div
            style={{
                border: "2px solid green",
                padding: "10px",
                margin: "10px",
            }}
        >
            <h1>Nombre del producto: {producto}</h1>
            <p>Precio: {precio}</p>
            <p>{comprado ? "🛒Comprado" : "📌No comprado"}</p>
        </div>
    );
};

export default CarritoItem;
