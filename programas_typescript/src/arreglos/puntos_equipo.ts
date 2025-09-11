// puntos_equipo.ts

// Declaren el arreglo: puntos
const puntos: number[] = [23, 34, 45, 65, 21];

// Encontrar el puntaje más alto
let maximo = puntos[0];
puntos.forEach((puntuacion) => {
    if (puntuacion > maximo) {
        maximo = puntuacion;
    }
});

console.log(`Máxima puntuación: ${maximo}`);
