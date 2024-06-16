let flash: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
} = {
    name: "Barry Allen",
    age: 18,
    powers: ["Super velocidad", "Viajar en el tiempo"],
};

console.log(flash);

flash = {
    name: "Barry Allen",
    powers: ["Super velocidad", "Viajar en el tiempo"],
    getName() {
        return this.name;
    },
};

console.log(flash.getName!());
