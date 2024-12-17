// Crear interfaces

interface Auto {
    encender: boolean;
    velocidadMaxima: number;

    acelerar(): void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto: Auto): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
}

const batimovil: Auto = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
}

console.log(batimovil)
conducirBatimovil(batimovil);
console.log()


// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
    reir: boolean;
    comer: boolean;
    llorar: boolean;
}

const guason: Guason = {
    reir: true,
    comer: true,
    llorar: false
}

const reir = (guason: Guason): void => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}

console.log(guason)
reir(guason);
console.log()


// Cree una interfaz para la siguiente funcion

interface CiudadGotica {
    (ciudadanos: string[]): number;
}

const ciudadGotica: CiudadGotica = (ciudadanos: string[]): number => {
    return ciudadanos.length;
}

const ciudadanos: string[] = ["Bruce Wayne", "Selina Kyle", "Alfred"];
console.log(ciudadanos)
console.log(ciudadGotica(ciudadanos));
console.log()

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface PersonaI {
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: boolean;

    imprimirBio(): void;
}

class Persona implements PersonaI {

    edad: number;
    estadoCivil: boolean;
    nombre: string;
    sexo: string;

    imprimirBio() {
    }
}

const persona1: PersonaI = new Persona();
persona1.nombre = "Juan Pérez";
persona1.edad = 30;
persona1.sexo = "Masculino";
persona1.estadoCivil = true;

persona1.imprimirBio = function () {
    console.log(`${this.nombre}, de ${this.edad} años, sexo: ${this.sexo}, 
    estado civil: ${this.estadoCivil ? "Casado" : "Soltero"}.`);
};

// Uso del método
persona1.imprimirBio();