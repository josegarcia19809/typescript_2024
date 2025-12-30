interface Colorful {
    color: string;
}

class Bike implements Colorful {
    constructor(public color: string) {}
}

// Uso
const bike1 = new Bike("red");
console.log(bike1.color);
