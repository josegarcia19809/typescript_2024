const grupo: {
    materia: string,
    alumnos: {
        nombre: string,
        calificaciones: number[]
    }[]
} = {
    materia: "Programación",
    alumnos: [
        {nombre: "Rosa", calificaciones: [9, 10, 8]},
        {nombre: "Luis", calificaciones: [7, 10, 7]},
    ]
}

console.log(grupo)

// Ejercicio: calcula promedio por alumno.
for (let i = 0; i < grupo.alumnos.length; i++) {
    let totalCalificacion = 0;
    for (let j = 0; j < grupo.alumnos[i].calificaciones.length; j++) {
        totalCalificacion += grupo.alumnos[i].calificaciones[j]
    }
    const promedio = totalCalificacion / grupo.alumnos[i].calificaciones.length;
    console.log(`${grupo.alumnos[i].nombre}: ${promedio.toFixed(2)}`);
}
