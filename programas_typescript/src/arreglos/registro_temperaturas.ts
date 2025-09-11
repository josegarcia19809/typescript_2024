// registro_temperaturas.ts

// Se tienen las temperaturas de una semana, se quiere saber cuál fue la temperatura más baja

const temperaturas: number[] = [22, 25, 21, 23, 24, 18, 19];

let minima = temperaturas[0]
temperaturas.forEach((temperatura) => {
    if (temperatura < minima) {
        minima = temperatura
    }
});

console.log(`Temperatura mínima ${minima}º`);
