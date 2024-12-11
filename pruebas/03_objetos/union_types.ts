type Heroe = {
    name: string;
    age?: number;
    powers: string[];
    getName?: (name: string) => string;
}

let myCustomVariable: (string | number | Heroe) = "José";
console.log(myCustomVariable);
console.log(typeof myCustomVariable);
// @ts-ignore
console.log("-".repeat(100));

myCustomVariable = 20
console.log(myCustomVariable);
console.log(typeof myCustomVariable);
// @ts-ignore
console.log("-".repeat(100));

myCustomVariable = {
    name: "Clark Kent",
    age: 18,
    powers: ["Super velocidad", "Super fuerza"],
    getName(name) {
        return name;
    },
}
// Accediendo a las propiedades del tipo Heroe de forma segura
if (typeof myCustomVariable === "object" && myCustomVariable !== null) {
    const heroe = myCustomVariable as Heroe;
    console.log(heroe);
    if (heroe.getName) {
        console.log(heroe.getName(heroe.name));
    }
}
console.log(typeof myCustomVariable);
// @ts-ignore
console.log("-".repeat(100));

