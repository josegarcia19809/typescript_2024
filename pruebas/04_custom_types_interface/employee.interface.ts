// models/employee.interface.ts

interface Person {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

// Extiende múltiples interfaces
interface Engineer extends Person, Employee {
    level: string;
    languages: string[];
}

const thomas: Engineer = {
    email: "thomas@gmail.com",
    languages: ["Java", "Python"],
    level: "junior",
    name: "Thomas Anderson",
    id: 21837
};

const pierre: Engineer = {
    name: "Pierre",
    id: 123897,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JS", "Python"],
};

console.log(thomas);
console.log()
console.log(pierre);