interface Credentials {
    email: string;
    password: string;
}

interface Credentials {
    mode: string;
}

class AuthCredential implements Credentials {
    email: string;
    password: string;
    userName: string;
    mode: string;

    constructor(email: string, password: string, mode: string, userName: string) {
        this.email = email;
        this.password = password;
        this.mode = mode;
        this.userName = userName;
    }
}

function login(credential: Credentials) {
    console.log(credential);
}

login(new AuthCredential("test@example.com", "12345", "admin", "tester"));

/*
1. Interfaces con fusión de declaraciones

interface Credentials {
    email: string;
    password: string;
}

interface Credentials {
    mode: string;
}

En TypeScript, las interfaces con el mismo nombre se fusionan automáticamente.
Esto significa que los miembros definidos en ambas interfaces se combinan en una sola:

La interfaz final Credentials tendrá las siguientes propiedades obligatorias:
email: string
password: string
mode: string



2. Clase que implementa una interfaz

class AuthCredential implements Credentials {
    email: string;
    password: string;
    userName: string;
    mode: string;
}
La clase AuthCredential utiliza la palabra clave implements para implementar la interfaz
Credentials. Esto obliga a la clase a definir todas las propiedades de la interfaz.
Adicionalmente, la clase puede incluir propiedades extra que no están en la interfaz,
como userName en este caso.
El resultado es que la clase AuthCredential tiene estas propiedades:

email (de Credentials)
password (de Credentials)
mode (de Credentials)
userName (definida solo en la clase)


3. Función que recibe un objeto del tipo Credentials

function login(credential: Credentials) {
    console.log(credential);
}
La función login acepta un parámetro credential que debe cumplir con la interfaz Credentials.
Esto significa que el objeto pasado a esta función debe tener las propiedades email,
password y mode.


4. Creación de un objeto con la clase AuthCredential
Para que la clase AuthCredential sea funcional, debes inicializar las propiedades en el
constructor:

class AuthCredential implements Credentials {
    email: string;
    password: string;
    mode: string;
    userName: string;

    constructor(email: string, password: string, mode: string, userName: string) {
        this.email = email;
        this.password = password;
        this.mode = mode;
        this.userName = userName;
    }
}

login(new AuthCredential("test@example.com", "12345", "admin", "tester"));
Tiene las propiedades requeridas por Credentials (email, password, mode).

Propiedades extra:

La función login no utiliza userName porque no forma parte de Credentials.
Sin embargo, TypeScript no genera error porque las propiedades adicionales no invalidan
un objeto que implemente la interfaz.

Fusión de interfaces:

La capacidad de fusionar interfaces permite añadir funcionalidades incrementales
sin modificar directamente la definición original.
Esto es útil en proyectos grandes con extensibilidad en mente.
 */