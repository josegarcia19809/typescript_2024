interface Cliente {
    id: number;
    name: string;
    email: string;
    phone?: string; // Campo opcional
    orders: number[]; // Lista de IDs de pedidos
    getDetails?: () => string; // Método opcional
}

// Instancia de un cliente sin métod0 `getDetails`
let cliente1: Cliente = {
    id: 101,
    name: "José García",
    email: "josegarcia@gmail.com",
    orders: [1001, 1002]
}


// Instancia de un cliente con métod0 `getDetails`
let cliente2: Cliente = {
    id: 102,
    name: "Carolina G",
    email: "caro@gmail.com",
    phone: "71212000",
    orders: [1003],
    getDetails() {
        return `
        Cliente: ${this.name}, 
        Email: ${this.email}, 
        Teléfono: ${this.phone ?? 'No disponible'}`;
    }
}

// Uso de los clientes
console.log(cliente1.name);
console.log(cliente1.orders);
console.log()

console.log(cliente2.getDetails ? cliente2.getDetails() : 'Detalles no disponibles');
console.log()


// Función que muestra detalles del cliente
const printClientDetails = (cliente: Cliente) => {
    console.log(`ID: ${cliente.id}`);
    console.log(`Nombre: ${cliente.name}`);
    console.log(`Email: ${cliente.email}`);
    console.log(`Pedidos: ${cliente.orders.length} pedidos registrados.`);
}

printClientDetails(cliente1)
console.log()
printClientDetails(cliente2)

/*
Detalles del Ejemplo:
Interfaz Cliente:

Define la estructura de los objetos Cliente, incluyendo:
Propiedades obligatorias como id, name, email, y orders.
Propiedades opcionales como phone y el método getDetails.
Instancias de Clientes:

cliente1: No incluye el métod0 getDetails.
cliente2: Incluye el métod0 getDetails, que devuelve una descripción detallada del cliente.
Uso del métod0 Opcional:

Se verifica si el métod0 getDetails está definido antes de llamarlo.
Función printClienteDetails:

Muestra un resumen de los datos de cualquier cliente, enfatizando el uso de la interfaz
para garantizar que los datos sean consistentes.
 */