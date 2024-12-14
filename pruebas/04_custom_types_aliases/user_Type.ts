type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number
}

let user: User = {
    name: "Max",
    age: 34,
    isAdmin: true,
    id: 'abc'
}

console.log(user);

/*
    El código utiliza un tipo personalizado llamado User para describir la estructura de
    un objeto que representa a un usuario. Esto permite asegurar que el objeto cumpla
    con una forma específica al momento de ser declarado o manipulado.


    Definición del tipo User:

    type User = {
        name: string;
        age: number;
        isAdmin: boolean;
        id: string | number;
    }
    El tipo User es un alias para un objeto que debe tener las siguientes propiedades:
    name: un string.
    age: un number.
    isAdmin: un boolean.
    id: puede ser un string o un number.


    Declaración del objeto user:

        let user: User = {
            name: "Max",
            age: 34,
            isAdmin: true,
            id: 'abc'
        }
    Se declara una variable user con el tipo User.
    Se asigna un objeto que cumple con las propiedades definidas:
        name es "Max", un string.
        age es 34, un number.
        isAdmin es true, un boolean.
        id es 'abc', un string (válido porque id permite string o number).


    Impresión del objeto:
    Muestra el objeto user completo en la consola:
        {
          name: "Max",
          age: 34,
          isAdmin: true,
          id: "abc"
        }

    Ventajas de usar un tipo:
    Claridad: Cualquier desarrollador que lea el código sabe exactamente qué propiedades
    debe tener un objeto del tipo User.
    Detección de errores: Si intentas agregar o faltar alguna propiedad, TypeScript
    generará un error.

        user.id = true; // Error: El tipo 'boolean' no es asignable a 'string | number'.
        user.lastName = "Doe"; // Error: La propiedad 'lastName' no existe en el tipo 'User'.
 */