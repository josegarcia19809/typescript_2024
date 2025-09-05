//-------------------------------- Operaciones
// 💡 Ejercicio: Simulación de Compra en una Tienda

const producto: string = "Dulces perrones 🐶";
const precio: number = 2;
const descuento: number = 10;
const cantidadComprada: number = 8;
const pagoCliente: number = 200;

// Calcular el precio con descuento
const precioConDescuento: number = precio - (precio * descuento / 100.00);
const pagoTotal: number = precioConDescuento * cantidadComprada;
const cambio: number = pagoCliente - pagoTotal;

console.log(`🛍️ Producto: ${producto}`);
console.log(`Precio original: ${precio}`);
console.log(`Descuento: ${descuento}`);
console.log(`Precio con descuento: ${precioConDescuento}`);
console.log(`Cantidad comprada: ${cantidadComprada}`);
console.log(`Pago total: ${pagoTotal}`);
console.log(`💵 Cliente pagó: $${pagoCliente}`);
console.log(`Cambio: ${cambio}`);

// Cálculo de módulo para saber cuántas monedas de $5 usaría
let monedas5: number = Math.floor(cambio / 5);
let restante: number = cambio % 5;
console.log(`🧮 Se pueden dar ${monedas5} monedas de $5 y sobra $${restante}`);
console.log("-".repeat(100))