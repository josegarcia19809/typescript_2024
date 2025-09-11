// calificaciones_estudiantes.ts

const calificaciones: number[] = [9, 7, 10, 8, 6];

// Contar cuántos aprobaron (>=8)
let contador = 0
calificaciones.forEach((calificacion) => {
    if (calificacion >= 8) {
        contador++;
    }
});
console.log(`Total de aprobados: ${contador}`);
