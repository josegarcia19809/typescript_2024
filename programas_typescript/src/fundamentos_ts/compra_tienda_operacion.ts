
// Simulación de compra en una tienda

const producto: string = "Dulces perrones 🐶";
const precio: number = 2;
const descuento: number = 10;
const cantidadComprada: number = 8;
const pagoCliente: number = 200;

// Calcular el precio con descuento
const precioConDescuento: number = precio -
    (precio * descuento / 100.00);
const pagoTotal: number = precioConDescuento * cantidadComprada;
const cambio: number = pagoCliente - pagoTotal;

console.log(`Producto: ${producto}`);
console.log(`Precio original: ${precio}`);
console.log(`Descuento: ${descuento}`);
console.log(`Precio con descuento: ${precioConDescuento}`);
console.log(`Cantidad comprada: ${cantidadComprada}`);
console.log(`Pago total: ${pagoTotal}`);
console.log(`Pago cliente: ${pagoCliente}`);
console.log(`Cambio: ${cambio}`);

