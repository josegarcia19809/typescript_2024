let role: "admin" | "user" | "editor";

role = "admin";
role = "user";
role = "editor";

console.log(role)

/*
El código demuestra el uso de tipos literales en TypeScript, donde una variable solo
puede contener un conjunto específico de valores predefinidos.

1. Declaración del tipo literal

let role: "admin" | "user" | "editor";

La variable role está declarada con un tipo literal, que es una unión de los
valores "admin", "user", y "editor".
Esto significa que role solo puede contener uno de esos tres valores específicos.
TypeScript asegura que no puedas asignar un valor fuera de estos literales.


2. Asignaciones válidas

role = "admin";
role = "user";
role = "editor";

Cada asignación es válida porque "admin", "user", y "editor" son parte del tipo literal de role.


3. Asignaciones inválidas
Si intentas asignar un valor que no esté incluido en los literales definidos,
TypeScript generará un error:

role = "guest"; // Error: El valor '"guest"' no es asignable al tipo '"admin" | "user" | "editor"'.
role = "administrator"; // Error: El valor '"administrator"' no es asignable al tipo
                        '"admin" | "user" | "editor"'.


Ventajas de los tipos literales
Restricción del conjunto de valores válidos:
Los tipos literales son útiles cuando una variable solo debe aceptar un conjunto limitado de
valores predefinidos.
Esto es común para roles de usuario, estados de una aplicación, opciones de configuración, etc.

Prevención de errores:
TypeScript evita asignaciones incorrectas, reduciendo errores en tiempo de ejecución.

Autocompletado y documentación:
Los editores con soporte para TypeScript (como Visual Studio Code) proporcionan autocompletado
para los valores permitidos:

role = ""; // El editor sugerirá "admin", "user", y "editor".

Ejemplo en contexto
Supongamos que tienes un sistema donde los usuarios pueden tener roles específicos.
El uso de tipos literales garantiza que solo se asignen roles válidos:

function assignRole(role: "admin" | "user" | "editor") {
    console.log(`Role assigned: ${role}`);
}

assignRole("admin"); // Válido
assignRole("guest"); // Error: El valor '"guest"' no es asignable al tipo
                        '"admin" | "user" | "editor"'.
En este caso, los tipos literales permiten un control estricto sobre los valores aceptados,
mejorando la confiabilidad del código.
 */