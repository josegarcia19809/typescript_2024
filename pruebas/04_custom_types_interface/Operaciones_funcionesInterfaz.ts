interface addTwoNumbers {
    (a: number, b: number): number;
}

let sumar: addTwoNumbers;

sumar = (a: number, b: number): number => {
    return a + b;
}

console.log(sumar(4, 2))


/*
Esta interfaz describe el tipo de una función.
Especifica que cualquier función que implemente addTwoNumbers debe:
Recibir dos argumentos, a y b, ambos de tipo number.
Devolver un valor de tipo number.
Nota: Esta interfaz no define una clase ni un objeto, solo un contrato para funciones.

Aquí declaramos una variable sumar de tipo addTwoNumbers.
Esto significa que sumar solo puede almacenar una función que cumpla con las reglas
definidas en la interfaz.

Creamos una función que toma dos argumentos a y b, ambos de tipo number, y devuelve su suma
(también un number).
Esta función cumple con las reglas establecidas por la interfaz addTwoNumbers, por lo que puede
ser asignada a la variable sumar.
 */