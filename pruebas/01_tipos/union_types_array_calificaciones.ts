/*
🎯 Ejemplo: Lista de calificaciones y comentarios
Imagina que un sistema escolar guarda calificaciones que pueden ser:
un número (la calificación)
o un texto (cuando el alumno no presentó)
 */

// Un arreglo que puede tener números o textos
let calificaciones: (number | string)[];

// Asignamos valores
calificaciones = [10, 9, 8, "NP", 7, "Pendiente"];


for (let calificacion of calificaciones) {
    if (typeof calificacion === "number") {
        console.log(`Calificación numérica: ${calificacion}`);
    } else {
        console.log(`Observación: ${calificacion}`);
    }
}
