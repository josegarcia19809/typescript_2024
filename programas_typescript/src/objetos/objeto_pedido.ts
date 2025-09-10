const pedido: {
    id: string,
    cliente: { nombre: string, vip: boolean },
    items: { sku: string, piezas: number, precio: number }[],
    envio: { tipo: "estandar" | "express", costo: number }
} = {
    id: "PED-9001",
    cliente: {nombre: "María López", vip: true},
    items: [
        {sku: "A1", piezas: 2, precio: 300},
        {sku: "B2", piezas: 1, precio: 1200},
    ],
    envio: {tipo: "express", costo: 150},
}

// Ejercicio: calcula total; si es VIP, 10% de descuento en productos (no en envío).

let totalProductos = 0;
for (let i = 0; i < pedido.items.length; i++) {
    totalProductos += pedido.items[i].piezas * pedido.items[i].precio;
}

const descuento = pedido.cliente.vip ? totalProductos * 0.1 : 0;
const totalPedido = totalProductos - descuento + pedido.envio.costo;
console.log({totalProductos, descuento, envio: pedido.envio.costo, totalPedido});

