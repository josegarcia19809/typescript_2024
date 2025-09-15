type ArticuloEnCarrito = {
    nombreProducto: string;
    cantidad: number;
};

const articulosEnCarrito: ArticuloEnCarrito[] = [
    { nombreProducto: 'Nintendo Switch 2', cantidad: 1 },
    { nombreProducto: 'Control Pro', cantidad: 2 },
    { nombreProducto: 'Super Smash', cantidad: 5 },
];

const AplicacionCarritoTabla = () => {
    return (
        <>
            <h1>Carrito de compras</h1>
            <table border={1} cellPadding={5} style={{ borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                </tr>
                </thead>
                <tbody>
                {articulosEnCarrito.map(({ nombreProducto, cantidad }) => (
                    <tr key={nombreProducto}>
                        <td>{nombreProducto}</td>
                        <td>{cantidad}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default AplicacionCarritoTabla;
