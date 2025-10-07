type ArticuloEnCarrito = {
    nombreProducto: string;
    cantidad: number;
};

const articulosEnCarrito: ArticuloEnCarrito[] = [
    {nombreProducto: "🎮 Nintendo Switch 2", cantidad: 1},
    {nombreProducto: "🕷️ Control Pro", cantidad: 2},
    {nombreProducto: "🏃🏻‍♂️ Super Smash", cantidad: 5},
];

const AppCarritoLista = () => {
    return (
        <>
            <h1>🛒 Carrito de compras</h1>
            <ul>
                {articulosEnCarrito.map(({nombreProducto, cantidad}) => (
                    <li key={nombreProducto}>
                        {`Producto: ${nombreProducto} | cantidad: ${cantidad}`}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default AppCarritoLista;
