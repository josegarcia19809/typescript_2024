// Un hotel administra qué habitaciones están libres o reservadas

const habitacion: {
    numero: number,
    ocupada: boolean,
    huesped?: string
} = {
    numero: 101,
    ocupada: false,
    huesped: "Luis"
};

// Verifica si la habitación está ocupada y muestra su huesped
if (habitacion.ocupada) {
    console.log(`La habitación ${habitacion.numero} está ocupada por ${habitacion.huesped}`);
} else {
    console.log(`La habitación ${habitacion.numero} está disponible`);
}