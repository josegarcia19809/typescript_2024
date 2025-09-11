// destinos_turisticos.ts

const destinos: string[] = ["Cancún 🌴", "Acapulco 🌊", "Mazatlán 🦈", "Puerto Vallarta 🐟"];

// Mostrar todos los destinos que empicen con la letra C
destinos.forEach((destino) => {
    if (destino.startsWith('C')) {
        console.log(destino);
    }
})