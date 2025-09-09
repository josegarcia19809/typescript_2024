// objeto_bicicleta.ts

// App de renta de bicicletas calcula tarifas por hora

const bicicleta: {
    id: string;
    color: string;
    precioHora: number;
} = {
    id: "BICI-101",
    color: "roja",
    precioHora: 25,
};
console.log(bicicleta);

// Calcula el costo de rentarla por 4 horas
const costoRenta = bicicleta.precioHora * 4;
console.log(`Costo por 4 horas: $${costoRenta}`);
