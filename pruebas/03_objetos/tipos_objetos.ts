function printName(person: { first: string, last: string }): void {
    console.log(`${person.first} ${person.last}`);
}

printName({first: 'Jose', last: 'Garcia'});

let coordinate: {x: number, y: number} = {x: 10, y: 20};
console.log(coordinate)
console.log(coordinate.x);
console.log(coordinate.y);

function randomCoordinate(): { x: number; y: number } {
    return { x: Math.random(), y: Math.random() };
}

console.log(randomCoordinate());