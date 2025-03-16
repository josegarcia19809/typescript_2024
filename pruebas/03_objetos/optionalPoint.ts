type Point = {
    x: number;
    y: number;
    z?: number; // Este es el parámetro opcional
}

const point: Point = {x: 1, y: 1};
console.log(point);

const point2: Point = {x: 2, y: 2, z: 3};
console.log(point2);