interface Admin {
    permisions: string[]
}

interface User {
    userName: string
}

interface AdminRole extends User, Admin {
}

let admin: AdminRole;

admin = {
    permisions: ["login"],
    userName: "luis",
}

console.log(admin)

/*
Este código utiliza interfaces y el concepto de herencia en TypeScript para describir un tipo
más complejo (AdminRole) que combina las propiedades de otras dos interfaces (Admin y User).

1. Declaración de las interfaces base

interface Admin {
    permisions: string[];
}

interface User {
    userName: string;
}

Admin: Define un objeto con una propiedad:
permisions: un arreglo de cadenas (string[]), que representa los permisos de un administrador.
User: Define un objeto con una propiedad:
userName: un string, que representa el nombre de usuario.


2. Herencia con extends

interface AdminRole extends User, Admin {}

La interfaz AdminRole extiende las interfaces User y Admin, lo que significa que:
AdminRole hereda todas las propiedades de ambas interfaces.
Esto crea una interfaz que combina las propiedades de Admin (permisions) y User (userName).
El resultado es que cualquier objeto que implemente AdminRole debe incluir:

permisions: un arreglo de cadenas (string[]).
userName: un string.


3. Declaración y asignación de la variable admin

let admin: AdminRole;

admin = {
    permisions: ["login"],
    userName: "luis",
};

Declaración:
La variable admin se declara con el tipo AdminRole.
Esto significa que cualquier valor asignado debe cumplir con las propiedades combinadas
de Admin y User.

Asignación:
Se asigna un objeto que tiene:
permisions: un arreglo con un valor "login".
userName: el string "luis".
Este objeto cumple con la estructura de AdminRole, por lo que es válido.


4. Comportamiento en ejecución
Cuando imprimes la variable admin, obtendrás el objeto que combina las propiedades de
las interfaces heredadas:

// Salida:
{
    permisions: ["login"],
    userName: "luis"
}


Ventajas de usar extends en interfaces
    Reutilización y modularidad:
    Permite construir tipos más complejos a partir de otros más simples, facilitando el
    mantenimiento y la reutilización del código.

    Evita duplicación de código:
    No necesitas redefinir las propiedades de Admin y User dentro de AdminRole.

    Validación estricta:
    TypeScript verifica que los objetos que implementen AdminRole incluyan todas las
    propiedades heredadas.

    Extensibilidad:
    Puedes extender múltiples interfaces, como en este caso (extends User, Admin),
    para combinar varios comportamientos.
 */