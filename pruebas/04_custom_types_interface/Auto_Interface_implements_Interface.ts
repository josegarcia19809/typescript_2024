interface Carro {
    llantas: number;
    modelo: string;
}

interface Volvo extends Carro {
    seguro: boolean;
}

const volvo: Volvo = {
    llantas: 4,
    modelo: "sedan",
    seguro: true
};


console.log(volvo);

/*
Carro es una interfaz que describe un contrato para los objetos que representen un carro.
Define dos propiedades obligatorias:
llantas: Debe ser un número (number).
modelo: Debe ser una cadena (string).


La interfaz Volvo extiende a la interfaz Carro. Esto significa que:
Hereda las propiedades definidas en Carro (llantas y modelo).
Agrega una nueva propiedad obligatoria: seguro, que debe ser un valor booleano (boolean).
Ahora, cualquier objeto que implemente la interfaz Volvo debe cumplir tanto con los requisitos
de Carro como con los nuevos de Volvo.

Se crea una variable volvo del tipo Volvo.
El objeto asignado a esta variable debe cumplir con:
Las propiedades heredadas de Carro:
llantas: Se asigna el valor 4.
modelo: Se asigna el valor "sedan".
La propiedad adicional de Volvo:
seguro: Se asigna el valor true.

Conceptos Clave
Extensión de Interfaces:

Usar extends permite que una interfaz herede propiedades de otra. Esto ayuda a modelar
jerarquías y relaciones más complejas de forma reutilizable y organizada.
Uso de Interfaces Extendidas:

Los objetos que implementan la interfaz extendida (Volvo) deben cumplir con todas las
propiedades de la interfaz base (Carro) más las propiedades adicionales.
 */