const producto: { nombre: string; precio: number; disponible: boolean } = {
    nombre: "Laptop",
    precio: 15000,
    disponible: true,
};

// Ejercicio: Si el producto está disponible, muestra su precio.
if (producto.disponible) {
    console.log(`El producto ${producto.nombre} cuesta $${producto.precio}`);
} else {
    console.log(`El producto ${producto.nombre} no está disponible`);
}
