let nombre: string = "José";
let numero: number = 123;
let isBoolean: boolean = true;

console.log(nombre, numero, isBoolean);

let hoy: Date = new Date();

hoy = new Date('2019-07-23');
console.log(hoy);

let cualquiera: any;
cualquiera = nombre;
cualquiera = numero;
cualquiera = isBoolean;
cualquiera = hoy;

