// puntuaciones_juegos.ts

const puntuaciones: number[] = [120, 250, 310, 100, 95];

// Calcular el puntaje total
let total = 0;
puntuaciones.forEach((puntos) => {
    total += puntos;
});
console.log(`Total de puntos: ${total}`);
