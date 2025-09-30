import CarritoItem from "./CarritoItem";

const AppCarrito = () => {
    return (
        <div>
            <h1>Carrito de compras</h1>
            <CarritoItem precio={299} comprado={true} producto="Audifonos" />
            <CarritoItem
                precio={1500}
                comprado={false}
                producto="Silla gamer"
            />
            <CarritoItem precio={75} comprado={true} producto="Monitor 4K" />
        </div>
    );
};

export default AppCarrito;
