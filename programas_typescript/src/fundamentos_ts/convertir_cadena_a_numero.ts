const numero1: string = "20";
const numero2: string = "20.2";
const numero3: string = "Uno"; // no es un número válido

console.log(Number.parseInt(numero1));
// 👉 Resultado: 20 (entero)

console.log(Number.parseFloat(numero2));
// 👉 Resultado: 20.2 (decimal)

console.log(Number.parseInt(numero3));
// 👉 Resultado: NaN (Not a Number)
