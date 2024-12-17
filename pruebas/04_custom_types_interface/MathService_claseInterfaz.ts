interface MathService {
    add(a: number, b: number): number;

    subtract(a: number, b: number): number;
}

// Implementamos la interfaz en una clase
class BasicMathService implements MathService {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }
}

// Usamos la clase
const mathService: MathService = new BasicMathService();
console.log(mathService.add(1, 2));
console.log(mathService.subtract(10, 2));
console.log()

