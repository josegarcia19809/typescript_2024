// velocidades_autos.ts

const velocidades: number[] = [80, 95, 100, 120, 110];
// Calcular el promedio de dichas velocidades
let total = 0;
velocidades.forEach((velocidad) => {
    total += velocidad;
});
const promedio = total / velocidades.length;
console.log(`Promedio de velocidades: ${promedio}`);
