const addnumbers = (a: number, b: number) => a + b;
const greet = (name: String) => `Hola ${name}`;
const saveTheWorld = () => "El mundo no se está salvando";

let suma: (a: number, b: number) => number = addnumbers;
let saludo: (name: string) => string = greet;
let mensaje: () => string = saveTheWorld;

console.log(suma(5, 8));
console.log(saludo("Luis"));
console.log(mensaje());
