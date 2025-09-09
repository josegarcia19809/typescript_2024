// objeto_ticket.ts

// Punto de venta con cálculo interno

const ticket: {
    items: {
        nombre: string;
        cantidad: number;
        precio: number;
    }[];
    total(): number;
} = {
    items: [
        {nombre: "Leche", cantidad: 2, precio: 23.5},
        {nombre: "Pan", cantidad: 1, precio: 18.0},
        {nombre: "Huevos", cantidad: 1, precio: 45.0},
    ],
    total() {
        let totalTicket = 0;
        for (let i = 0; i < this.items.length; i++) {
            totalTicket += this.items[i].cantidad * this.items[i].precio;
        }
        return totalTicket;
    },
};

console.log(`El total es $${ticket.total()}`);
