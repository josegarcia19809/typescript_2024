type ArticuloEnCarrito = {
    nombreProducto: string;
    cantidad: number;
};

const articulosEnCarrito: ArticuloEnCarrito[] = [
    {nombreProducto: 'Nintendo Switch 2', cantidad: 1},
    {nombreProducto: 'Control Pro', cantidad: 2},
    {nombreProducto: 'Super Smash', cantidad: 5},
];

const AplicacionCarrito = () => {
    return (
        <>
            <h1>Carrito de compras</h1>
            <ul>
                {articulosEnCarrito.map(({nombreProducto, cantidad}) => (
                    <li key={nombreProducto}>
                        {`Producto: ${nombreProducto} | Cantidad: ${cantidad}`}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default AplicacionCarrito;


