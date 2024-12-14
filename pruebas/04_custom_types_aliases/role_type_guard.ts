type Role = "admin" | "user" | "editor";

function performAction(action: string | number, role: Role) {
    if (role === "admin" && typeof action === "number") {
        // ...
    }
}

let adminRole: Role = "admin";
performAction("clear log", adminRole);

/*
Este código combina tipos literales, unión de tipos y una función con lógica condicional
basada en tipos y valores. Vamos a desglosarlo:

1. Declaración del tipo Role

type Role = "admin" | "user" | "editor";

Role: Es un tipo literal que permite solo tres valores específicos:
"admin"
"user"
"editor"
Esto limita las asignaciones al tipo Role, asegurando que solo roles válidos puedan usarse
en el código.


2. Definición de la función performAction

function performAction(action: string | number, role: Role) {
    if (role === "admin" && typeof action === "number") {
        // ...
    }
}
Parámetros de la función
action: string | number:

Puede ser de tipo string o number. Esto permite flexibilidad, ya que diferentes roles o
acciones podrían usar distintos tipos de datos.


role: Role: Este parámetro debe ser uno de los valores definidos en el tipo Role
("admin", "user", "editor").

Condicional dentro de la función
if (role === "admin" && typeof action === "number") {
    // ...
}
El condicional verifica dos condiciones:

Que el valor de role sea "admin".
Que el tipo de action sea number.
Si ambas condiciones son verdaderas, se ejecuta el bloque de código dentro del if.
De lo contrario, no pasa nada.

Esto permite manejar casos específicos según el tipo de usuario (role) y el tipo de
acción (action).

3. Declaración y uso de la función
let adminRole: Role = "admin";
performAction("clear log", adminRole);
adminRole: Es una variable de tipo Role con el valor "admin".
Esto cumple con las restricciones definidas en el tipo Role.
Llamada a la función:

Se pasa "clear log" como action y adminRole como role.
Dentro de la función, el condicional no se ejecuta porque el tipo de action es string,
y no cumple con la segunda condición (typeof action === "number").
 */