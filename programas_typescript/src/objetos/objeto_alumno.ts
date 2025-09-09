// Una escuela necesita verificar si un alumno pasó la materia

const alumno: {
    nombre: string,
    edad: number,
    calificacion: number
} = {
    nombre: "María",
    edad: 20,
    calificacion: 9,
};

console.log(alumno);


// Muestra si el alumno aprobó (>=8)
if (alumno.calificacion >= 8) {
    console.log(`${alumno.nombre} aprobó con ${alumno.calificacion}`);
} else {
    console.log(`${alumno.nombre} no aprobó con ${alumno.calificacion}`);
}