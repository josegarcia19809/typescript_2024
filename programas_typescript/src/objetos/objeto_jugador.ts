// objeto_jugador.ts

// Una base de datos deportiva actualiza estadísticas de jugadores

const jugador: {
    nombre: string;
    posicion: string;
    goles: number;
} = {
    nombre: "Messi",
    posicion: "Delantero",
    goles: 820,
};

console.log(jugador);

// Incrementa en 1 el número de goles
jugador.goles++;
console.log(`${jugador.nombre} ahora tiene ${jugador.goles} goles`);
