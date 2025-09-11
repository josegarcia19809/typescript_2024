// asistencia_alumnos.ts

const asistencia: boolean[] = [true, false, true, true, false]

// Contar cuántos alumnos asistieron
let presentes = 0
asistencia.forEach((asistio) => {
    if (asistio) {
        presentes++;
    }
})
console.log(`Asistieron ${presentes} alumnos`);
