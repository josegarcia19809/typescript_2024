// objeto_cantante.ts
// Una app de música almacena información básica de artistas
const cantante: {
    nombre: string,
    genero: string,
    edad: number
} = {
    nombre: "Shakira",
    genero: "Pop",
    edad: 47
};

// Imprime todo el objeto
console.log(cantante);

// Imprime atributos por separado
console.log(cantante.nombre);
console.log(cantante.genero);
console.log(cantante.edad);

// Muestra un mensaje con su nombre y género musical
console.log(`${cantante.nombre} canta principalmente ${cantante.genero}`);


