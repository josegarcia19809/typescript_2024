type ProductoProps = {
    stock: number;
    nombre: string;
    disponible: boolean;
}

const Producto = ({stock, nombre, disponible}: ProductoProps) => {
    return (
        <div style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px"
        }}>
            <h2>Producto: {nombre}</h2>
            <p>Cantidad en stock: {stock}</p>
            <p>{disponible ? "✅Está disponible" : "❌No está disponible"}</p>
        </div>
    )
}

export default Producto