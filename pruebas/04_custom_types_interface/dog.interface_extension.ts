// models/dog.interface.ts

interface Dog {
    name: string;
    age: number;
    breed: string;

    bark(): string;
}

// Extensión de interfaz
interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "Bark!";
    },
    job: "guide dog",
};

console.log(chewy);
console.log()
console.log(chewy.job);