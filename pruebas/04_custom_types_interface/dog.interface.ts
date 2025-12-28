// models/dog.interface.ts

// Se añadirán más propiedades y métodos
interface Dog {
    name: string;
    age: number;
}


interface Dog {
    breed: string;

    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return "WOOF WOOF!";
    },
};

console.log(elton)
console.log()
const {name, age, breed} = elton;
console.log(name, age, breed);
console.log()
console.log(elton.bark());