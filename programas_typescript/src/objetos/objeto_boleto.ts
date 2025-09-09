// objeto_boleto.ts

// Una app de cine imprime los detalles del boleto de un cliente

const boleto: {
    pelicula: string;
    sala: number;
    asiento: string;
} = {
    pelicula: "Avengers: Endgame",
    sala: 3,
    asiento: "B12",
};

console.log(boleto);

// Imprimir cada atributo por separado
console.log(boleto.pelicula);
console.log(boleto.asiento);
console.log(boleto.sala);

// Muestra un mensaje con los datos del boleto
console.log(
    `Película: ${boleto.pelicula}, sala: ${boleto.sala}, asiento: ${boleto.asiento}`
);
