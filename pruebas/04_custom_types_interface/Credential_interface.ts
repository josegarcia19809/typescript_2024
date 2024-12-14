interface Credentials {
    email: string;
    password: string;
}

let credentials: Credentials;

credentials = {
    email: "josegarcia@gmail.com",
    password: "12345678",
}

console.log(credentials);

/*
    El código define una interfaz llamada Credentials que sirve para describir la
    estructura de un objeto en TypeScript. Las interfaces son similares a los
    tipos personalizados (type), pero ofrecen más flexibilidad para casos avanzados.

Explicación paso a paso:
Definición de la interfaz:

    interface Credentials {
        email: string;
        password: string;
    }

La interfaz Credentials describe un objeto que debe tener las siguientes
propiedades obligatorias:
email: un valor de tipo string.
password: un valor de tipo string.
Nota: Las interfaces no generan código en JavaScript, sirven solo en tiempo de compilación
para verificar los tipos.

Declaración de la variable:

let credentials: Credentials;
Aquí se declara la variable credentials, indicando que su valor debe cumplir con la estructura
definida en la interfaz Credentials.
Asignación de un objeto válido:

    credentials = {
        email: "josegarcia@gmail.com",
        password: "12345678",
    };
Se asigna un objeto que cumple con los requisitos de la interfaz:
    email tiene un valor de tipo string: "josegarcia@gmail.com".
    password tiene un valor de tipo string: "12345678".
Si faltara alguna propiedad o tuviera un tipo incorrecto, TypeScript lanzaría un error.

    credentials = { email: "josegarcia@gmail.com" }; // Error: Falta la propiedad 'password'.
    credentials = { email: "josegarcia@gmail.com", password: 12345678 }; // Error: 'password'
    debe ser cadena
 */