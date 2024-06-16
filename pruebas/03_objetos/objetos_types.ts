type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
}

let flashH: Hero = {
    name: "Barry Allen",
    age: 18,
    powers: ["Super velocidad", "Viajar en el tiempo"],
};

let supermanH: Hero = {
    name: "Clark Kent",
    age: 18,
    powers: ["Super velocidad", "Super fuerza"],
    getName() {
        return this.name;
    },
}

console.log(flashH);
console.log(supermanH);
console.log(supermanH.getName!());

