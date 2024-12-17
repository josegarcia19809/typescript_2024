interface MathService {
    add(a: number, b: number): number;

    subtract(a: number, b: number): number;
}

// Creamos un objeto, esto ya es independiente de la clase
const operaciones: MathService = {
    add(a: number, b: number): number {
        return a + b;
    },

    subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log(operaciones.add(4, 2));
console.log(operaciones.subtract(12, 7));

