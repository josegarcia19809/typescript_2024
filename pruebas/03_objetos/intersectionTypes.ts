type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

// Se puede crear un tipo a partir de las otras 2
type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
}

console.log(happyFace);

// Se puede anexar una propiedad más
type AnimatedColorfulCircle = Circle & Colorful & { animated: boolean }

const happyFaceAnimated: AnimatedColorfulCircle = {
    radius: 3,
    color: "yellow",
    animated: true
}
console.log(happyFaceAnimated);