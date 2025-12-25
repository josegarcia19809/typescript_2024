/*
🛒 Ejemplo ampliado: Productos en una tienda

Imagina una tienda pequeña donde se quiere guardar información simple de los productos en un solo arreglo.

El arreglo puede contener:

🏷️ Nombre del producto → string

💰 Precio del producto → number
 */
let productos: (string | number)[] = [
    "Café",
    "Pan",
    25,
    15
];


productos.push("Café");
productos.push(25);

productos.push("Pan");
productos.push(15);

productos.push("Jugo");
productos.push(20);

// Recorrer el arreglo e identificar el tipo
for (let item of productos) {
    if (typeof item === "string") {
        console.log(`🛍️ Producto: ${item}`);
    } else {
        console.log(`💲 Precio: $${item}`);
    }
}

console.log("-".repeat(100));


// Calcular el total de precios
let total: number = 0;

for (let item of productos) {
    if (typeof item === "number") {
        total += item;
    }
}

console.log(`💰 Total a pagar: $${total}`);

