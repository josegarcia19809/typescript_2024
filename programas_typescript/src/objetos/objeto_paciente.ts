const paciente: {
    id: string;
    edad: number;
    signos: { temperatura: number; frecuenciaCardiaca: number; spO2: number };
} = {
    id: "PX-1022",
    edad: 34,
    signos: {
        temperatura: 37.8,
        frecuenciaCardiaca: 88,
        spO2: 97.0,
    }
}
console.log(paciente);

// Ejercicio: alerta si temperatura > 37.5 o spO2 < 95.
const alerta =
    paciente.signos.temperatura > 37.5 || paciente.signos.spO2 < 95
        ? "ALERTA"
        : "OK"

console.log(`Paciente ${paciente.id}: ${alerta}`)