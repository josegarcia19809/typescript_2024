import Producto from "./Producto";

type ProductoM = {
    nombre: string;
    cantidad: number;
};

const productos: ProductoM[] = [
    {nombre: "Nintendo Switch 2", cantidad: 1},
    {nombre: "Pro Controller", cantidad: 2},
    {nombre: "Super Smash", cantidad: 4},
    {nombre: "Super Mario", cantidad: 3},
];

const CarritoCompras = () => {
    return (
        <div>
            <h1>Carrito de compras</h1>
            {productos.map((producto: ProductoM) => (
                <Producto
                    key={producto.nombre}
                    nombre={producto.nombre}
                    cantidad={producto.cantidad}
                />
            ))}
        </div>
    );
};

export default CarritoCompras;
