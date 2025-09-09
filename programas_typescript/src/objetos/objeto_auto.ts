// objeto_auto.ts

// Un taller mecánico revisa el kilometraje de los autos para recomendar servicio.

const auto: {
    marca: string,
    modelo: string,
    kilometros: number
} = {
    marca: "Toyota",
    modelo: "Corolla",
    kilometros: 45000
};

console.log(auto);

// Indica si el auto necesita servicio (si supera los 40,000 km)
if (auto.kilometros > 40000) {
    console.log(`El automovil de marca ${auto.marca} y modelo ${auto.modelo} necesita servicio`);
}
else {
    console.log(`El automovil de marca ${auto.marca} y modelo ${auto.modelo} no necesita servicio`);
}
