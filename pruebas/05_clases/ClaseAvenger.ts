class Avenger {
    private name: string;
    private team: string;
    public realName?: string;
    static avgAge: number = 35;

    constructor(name: string, team: string, realName?: string) {
        this.name = name;
        this.team = team;
        this.realName = realName;
    }
}

const antman = new Avenger("Antman", "Capitan");

console.log(antman)
console.log(Avenger.avgAge)

/*
Propiedades de la clase:

name (privada): Almacena el nombre del Avenger.
team (privada): Indica a qué equipo pertenece.
realName (opcional, pública): Representa el nombre real del Avenger. El símbolo ? indica que
esta propiedad es opcional.
avgAge (estática): Es un valor compartido entre todas las instancias de la clase. En este caso,
se define como 35 y puede ser accedida directamente desde la clase sin crear una instancia.

Constructor: Este métod0 especial se ejecuta automáticamente cuando se crea una nueva
    instancia de la clase. Aquí se inicializan las propiedades name, team, y
    opcionalmente realName, utilizando los valores proporcionados al crear el objeto.

    2. Creación de una instancia
En la última línea del código, se crea una instancia de la clase Avenger llamada antman:

Se pasa "Antman" como name y "Capitan" como team.
No se especifica realName, por lo que queda como undefined.

3. Propiedad estática
La propiedad avgAge es estática, lo que significa que no depende de una instancia específica
de la clase. Se puede acceder directamente desde la clase así:
console.log(Avenger.avgAge); // Imprime: 35
 */