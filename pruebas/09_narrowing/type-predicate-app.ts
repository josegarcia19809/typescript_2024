interface Cat {
    name: string;
    numLives: number;
}

interface Dog {
    name: string;
    breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
    if (isCat(animal)) {
        return "Meow";
    } else {
        return "Woof!";
    }
}

// Uso
console.log(makeNoise({ name: "Michi", numLives: 9 }));
console.log(makeNoise({ name: "Firulais", breed: "Labrador" }));
