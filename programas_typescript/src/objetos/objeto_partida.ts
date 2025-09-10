const partida: {
    jugador: {
        nick: string,
        nivel: number
    },
    estado: "en_curso" | "pausada" | "finalizada",
    log: string[]
}
    = {
    jugador: {nick: "ShadowFox", nivel: 12},
    estado: "en_curso",
    log: []
}

// Ejercicio: pausa la partida y registra un mensaje en log.
partida.estado = "pausada";
partida.log.push("Partida pausada por usuario")
console.log(partida)