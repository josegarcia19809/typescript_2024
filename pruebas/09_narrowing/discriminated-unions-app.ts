interface Rooster {
    name: string;
    weight: number;
    age: number;
    kind: "rooster";
}

interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: "cow";
}

interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: "pig";
}

interface Sheep {
    name: string;
    weight: number;
    age: number;
    kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
    switch (animal.kind) {
        case "pig":
            return "Oink!";
        case "cow":
            return "Moooo!";
        case "rooster":
            return "Cockadoodledoo!";
        case "sheep":
            return "Baaa!";
        default:
            const _exhaustiveCheck: never = animal;
            return _exhaustiveCheck;
    }
}

// Uso
const stevie: Rooster = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));
