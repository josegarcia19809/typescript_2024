type Point = {
    x: number;
    y: number;
}

let coordinate: Point = {x: 12, y: 10};

function randomCoordinate(): Point {
    return {x: Math.random(), y: Math.random()}
}

function doublePoint(point: Point): Point {
    return {x: point.x * 2, y: point.y * 2};
}

console.log(randomCoordinate());
console.log(doublePoint(coordinate));