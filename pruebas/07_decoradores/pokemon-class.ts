function printToConsole(constructor: Function) {
    console.log(constructor)
}

// @ts-ignore
@printToConsole
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co'

    constructor(
        public name: string
    ) {
    }

}

const pokemon: Pokemon = new Pokemon('pokemon');
console.log(pokemon.name);

/*
Código explicado
Función decoradora: printToConsole
Esta función actúa como un decorador que se aplicará a la clase Pokemon.
Recibe un argumento constructor que es la función constructora de la clase que se decora.
Dentro de la función, simplemente imprime el constructor en la consola:
typescript
Copiar código
function printToConsole(constructor: Function) {
    console.log(constructor);
}
Decorador aplicado a la clase
La línea @printToConsole aplica el decorador printToConsole a la clase Pokemon.
Cuando la clase Pokemon es definida o instanciada, el decorador es ejecutado automáticamente.
Esto significa que el decorador imprime el constructor de la clase Pokemon en la consola
al momento de la ejecución.


Clase Pokemon
Propiedades:
publicApi: Una propiedad pública con un valor inicial fijo ('https://pokeapi.co').
Constructor:
Recibe un argumento name que se guarda como una propiedad pública en la clase.

Ejemplo de instancia:

const pikachu = new Pokemon('Pikachu');
console.log(pikachu.name); // Pikachu
console.log(pikachu.publicApi); // https://pokeapi.co


Uso de @ts-ignore
La línea // @ts-ignore está ignorando posibles errores del compilador TypeScript relacionados
con el uso del decorador.
Esto puede deberse a que los decoradores no siempre están habilitados en TypeScript, a menos
que configures el archivo tsconfig.json con "experimentalDecorators": true.
Ejecución paso a paso
Definición de la clase:

Cuando TypeScript compila el código y encuentra la clase Pokemon, aplica el decorador
printToConsole.
Decorador ejecutado:

printToConsole recibe como argumento el constructor de la clase Pokemon.

En la consola se imprime algo como:
[class Pokemon]
Creación de instancias:

Puedes crear instancias de la clase Pokemon, pero esto no afecta al decorador, ya que este se
ejecuta solo en el momento de definir la clase.
¿Para qué sirve este patrón?
Uso común de decoradores:

Registro de clases: Agregar clases a un registro global.
Modificación de clases: Alterar o extender la funcionalidad de las clases.
Depuración: Como en este caso, imprimir información para depuración.
Aplicaciones reales:

Validar clases o métodos.
Automatizar tareas (como en frameworks como Angular).
 */