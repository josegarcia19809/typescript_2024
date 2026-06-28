import Producto from "../components/Producto/Producto.tsx";


const PaginaProductos = () => {
    return (
        <div>
            <Producto nombre="Lata de chiles" precio={20} disponible={true}>
                <h3>Libre de acidos</h3>
            </Producto>

            <Producto
                nombre="Laptop Gamer"
                precio={25999}
                disponible={true}
            >
                <button>Agregar al carrito</button>
            </Producto>

            <Producto
                nombre="Monitor 27 pulgadas"
                precio={5999}
                disponible={false}
            >
                <p>Producto temporalmente sin existencias.</p>
            </Producto>
        </div>
    );
};

export default PaginaProductos;