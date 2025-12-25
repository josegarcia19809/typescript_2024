function cambiarEstado(estado: "pendiente" | "en_camino" | "entregado") {
    console.log(`📦 El pedido está: ${estado}`);
}

cambiarEstado("pendiente");   // ✅
cambiarEstado("entregado");   // ✅
// cambiarEstado("cancelado");   // ❌
