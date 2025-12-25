type MetodoPago = "efectivo" | "tarjeta" | "transferencia";

let pago: MetodoPago;

pago = "efectivo";        // ✅
console.log(pago);
pago = "tarjeta";         // ✅
console.log(pago);
// pago = "cheque";          // ❌
