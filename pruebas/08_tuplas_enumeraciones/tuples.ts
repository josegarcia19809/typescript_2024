// tuples.ts

// Tupla RGB
const color: [number, number, number] = [255, 0, 45];

// Tipo de respuesta HTTP
type HTTPResponse = [number, string];

// Ejemplo de uso
const goodRes: HTTPResponse = [200, "OK"];

// Arreglo de tuplas
const responses: HTTPResponse[] = [
    [404, "Not Found"],
    [200, "OK"],
];

console.log(color);
console.log(goodRes);
console.log(responses);