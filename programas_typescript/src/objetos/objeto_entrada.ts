// objeto_entrada.ts

// Sistema de boletería que valida la disponibilidad

const entrada: {
    evento: string,
    precio: number,
    disponible: boolean
} =
{
    evento: "Coldplay en México",
    precio: 1800,
    disponible: true
}

console.log(entrada);

// Verifica si aún está disponible
console.log(
    entrada.disponible 
        ? `La entrada para ${entrada.evento} cuesta $${entrada.precio}`
        : `Entradas agotadas para evento ${entrada.evento}`
);

