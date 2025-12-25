function combinar(a: string | number, b: string | number): string | number {
    if (typeof a === "string" && typeof b === "string") {
        return `${a} con ${b}`;
    }

    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }

    throw new Error("Tipos de datos no válidos");
}


const pedidoEspecial = combinar("Café", "Pan dulce");
const totalProductos = combinar(2, 3);

console.log(pedidoEspecial);   // Café con Pan dulce
console.log(totalProductos);   // 5
