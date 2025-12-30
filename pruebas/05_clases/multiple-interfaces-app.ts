interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Jacket implements Colorful, Printable {
    constructor(
        public brand: string,
        public color: string
    ) {
    }

    print(): void {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}

// Uso
const jacket1 = new Jacket("Prada", "black");
jacket1.print();
