// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean

function imprimirLinea() {
    console.log(".".repeat(100));
}

const highScore: number | boolean = true;
console.log(highScore);
imprimirLinea();


// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)

let stuff: number[] | string[] = [1, 2, 3, 4]
console.log(stuff);
imprimirLinea();

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"
let skillLevel: SkillLevel;
skillLevel = "Beginner";
console.log(skillLevel);
imprimirLinea();


// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)

type SkiSchoolStudent = {
    name: String,
    age: Number,
    sport: "ski" | "snowboard",
    level: SkillLevel,
}

const student: SkiSchoolStudent = {
    name: "Maria",
    age: 18,
    sport: "ski",
    level: "Advanced"
};

console.log(student);

// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number

type RGB = {
    r: number,
    g: number,
    b: number,
}

type HSL = {
    h: number,
    s: number,
    l: number,
}

// Create an array called colors that can hold a mixture of RGB and HSL color types

const colors: (HSL | RGB)[] = [
    {r: 0, g: 0, b: 0},
    {r: 10, g: 20, b: 30},
    {h: 12, s: 23, l: 4},
]

for (const color of colors) {
    if ("r" in color) {
        // Aquí TypeScript sabe que es RGB
        console.log("RGB:", color);
    } else {
        // Aquí sabe que es HSL
        console.log("HSL:", color);
    }
}

imprimirLinea();
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format

function greet(name: string | string[]) {
    if (typeof name === "string") console.log(`Hello ${name}!`);
    else {
        for (const namePerson of name) {
            console.log(`Hello, ${namePerson}`);
        }
    }

}

greet("Rox")
greet(["Yuridia", "Mark", "John"])
