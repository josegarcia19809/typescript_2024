import {genericFunctionArrow} from "./utils";
import {Villain} from "./villain";

const deadpool={
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Villain>(deadpool).name);
console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);

/*
Este código está escrito en TypeScript y realiza las siguientes acciones:

Importación de módulos y tipos:

genericFunctionArrow se importa desde el archivo utils. Esta función genérica probablemente
realiza algún tipo de operación o transformación.
Villain se importa desde el archivo villain. Es una interfaz o clase que define las propiedades
que un "villano" debe tener.
Definición de un objeto:

Se define un objeto llamado deadpool que representa al personaje Deadpool con las propiedades:
name: Nombre del personaje, como lo conocen todos.
realName: Nombre real del personaje.
dangerLevel: Nivel de peligro del personaje.
Llamada a una función genérica:

Se usa genericFunctionArrow<Villain>, pasando deadpool como argumento.
<Villain> indica que la función se está utilizando con el tipo genérico Villain. Esto significa
que el objeto devuelto por la función será tratado como si tuviera las propiedades de la
interfaz o clase Villain.
Impresión en la consola:

Se imprimen en la consola las propiedades name y dangerLevel del resultado devuelto por la
función genericFunctionArrow.
Posibles detalles:
La función genérica genericFunctionArrow<T> permite trabajar con un tipo específico (T) en
el momento de su uso, haciendo el código más flexible y reutilizable.
La interfaz Villain probablemente tiene definidas las propiedades name y dangerLevel, lo que
asegura que el código sea compatible.
Si necesitas detalles más específicos sobre qué hace genericFunctionArrow o cómo está definida
la interfaz Villain, sería necesario revisar esos archivos. En este caso, el propósito del
código parece ser demostrar el uso de funciones genéricas y tipos en TypeScript.
 */