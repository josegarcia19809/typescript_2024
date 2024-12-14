function add(a: number, b: number): number {
    return a + b;
}

type AddFn = (a: number, b: number) => number;


function calculate(a: number, b: number, calcFn: AddFn) {
    console.log(calcFn(a, b));
}

calculate(3, 12, add)

/*
    La declaración type AddFn = (a: number, b: number) => number;
    define un tipo de función en TypeScript. Esto sirve para describir la estructura de una
    función que puedes usar como parámetro o asignar a una variable.

    En este caso:

    AddFn es un tipo personalizado que representa una función.
    La función debe recibir exactamente dos parámetros:
    a y b de tipo number.
    Debe devolver un valor de tipo number.
    Esto significa que cualquier función que tenga esta firma (estructura) será compatible con
    el tipo AddFn.

    Por ejemplo:

    const multiply: AddFn = (a, b) => a * b; // Esto es válido porque sigue la estructura.

    En el código que muestras, AddFn se usa para garantizar que el tercer parámetro de la
    función calculate sea una función que cumpla con esta estructura.
    Esto ayuda a evitar errores y a mantener el código más claro y seguro.
 */

