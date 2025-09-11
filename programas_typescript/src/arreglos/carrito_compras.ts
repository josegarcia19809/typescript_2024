// carrito_compras.ts

const productos: string[] = ["Pan 🥐", "Leche 🥛", "Huevo 🥚", "Cereal 🥣"]

// Mostrar productos con forEach
productos.forEach((producto, i) => {
    console.log(`${i+1}. ${producto}`);
})

// Agregar un producto y mostrar la lista completa
productos.push("Queso 🧀")
console.log(`Lista actualizada: ${productos}`);
