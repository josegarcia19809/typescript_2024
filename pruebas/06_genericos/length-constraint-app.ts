interface Lengthy {
    length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2;
}

// Uso
console.log(printDoubleLength("Hola mundo"));
// printDoubleLength(123); ❌ Error
