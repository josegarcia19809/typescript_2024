// precios_frutas.ts

const precios: number[] = [12.00, 23.40, 21.80, 65.30]

// Sacar el promedio de precios
let suma = 0;
precios.forEach((precio) => {
    console.log(`$${precio.toFixed(2)}`);
    suma += precio
});

const promedio = suma / precios.length;
console.log(`El promedio es $${promedio.toFixed(2)}`);
