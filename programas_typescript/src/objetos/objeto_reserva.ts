// objeto_reserva.ts

// Este sistema de reservas calcula la duración de la estancia

const reserva: {
    huesped: string,
    desde: Date,
    hasta: Date,
    habitacion: number
} = {
    huesped: "José Luis García",
    desde: new Date("2025-09-10"),
    hasta: new Date("2025-09-13"),
    habitacion: 402
};

// Calcula noches (diferencia en días)
const ms = reserva.hasta.getTime() - reserva.desde.getTime()
const noches = Math.ceil(ms / (1000 * 60 * 60 * 24));
console.log(`Noches reservadas ${noches}`);
