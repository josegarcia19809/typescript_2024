// Sistema de facturación que calcula totales
const factura: {
    folio: string;
    cliente: string;
    conceptos: {
        descripcion: string;
        cantidad: number;
        precio: number;
    }[];
    iva: number;
} = {
    folio: "F-2025-001",
    cliente: "Tecnosoft SA",
    conceptos: [
        { descripcion: "Teclado", cantidad: 2, precio: 350 },
        { descripcion: "Mouse", cantidad: 1, precio: 200 },
    ],
    iva: 0.16,
};

console.log(factura);

// Calcula subtotal, iva y total
let subtotal = 0;
for (let i = 0; i < factura.conceptos.length; i++){
    subtotal += factura.conceptos[i].cantidad * factura.conceptos[i].precio;
}

const impuesto = subtotal * factura.iva;
const total = subtotal + impuesto;
console.log({subtotal, impuesto, total});

