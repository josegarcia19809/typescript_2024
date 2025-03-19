function sumar(...nums: number[]): number {
    return nums.reduce((total, num) => total + num, 0);
}

console.log(sumar(2, 3));
console.log(sumar(2, 3, 5, 8));

// We can have named params and then collect the rest into an array:
function nombreCompleto(nombre: string, apellido: string, ...titulos: string[]) {
    console.log("nombre:", nombre);
    console.log("apellido:", apellido);
    console.log("Titulos:", titulos);
}

nombreCompleto("José", "García", "Ingeniero", "Sr")

// We can use rest parameters in arrow functions!
const multiplicar = (...num: number[]) => {
    return num.reduce((total, num) => total * num, 1);
}

console.log(multiplicar(3, 2))
console.log(multiplicar(3, 2, 5))