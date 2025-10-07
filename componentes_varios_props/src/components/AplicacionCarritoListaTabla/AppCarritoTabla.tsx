type ArticuloEnCarrito = {
    nombreProducto: string;
    cantidad: number;
};

const articulosEnCarrito: ArticuloEnCarrito[] = [
    { nombreProducto: "🎮 Nintendo Switch 2", cantidad: 1 },
    { nombreProducto: "🕷️ Control Pro", cantidad: 2 },
    { nombreProducto: "🏃🏻‍♂️ Super Smash", cantidad: 5 },
];

const AppCarritoTabla = () => {
    return (
        <>
            <h1>🛒 Carrito de compras</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Nombre de producto</th>
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

export default AppCarritoTabla;
