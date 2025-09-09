// objeto_receta.ts

// App de cocina que ajusta cantidades

const receta: {
    nombre: string;
    porciones: number;
    ingredientes: {
        nombre: string;
        gramos: number;
    }[];
} = {
    nombre: "Galletas de avena",
    porciones: 4,
    ingredientes: [
        {nombre: "Avena", gramos: 200},
        {nombre: "Mantequilla", gramos: 100},
        {nombre: "Azúcar", gramos: 80},
    ],
};

// Mostrar la receta
console.log(receta);

// Mostrar cada atributo
console.log(receta.nombre);
console.log(receta.porciones);
console.log(receta.ingredientes);

// Calcula gramos totales
let totalGramos = 0

for (let i = 0; i < receta.ingredientes.length; i++) {
    totalGramos += receta.ingredientes[i].gramos;
}

console.log(`Total de gramos utilizados: ${totalGramos}`);


