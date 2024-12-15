function merge<T, U>(a: T, b: U) {
    return {
        ...a,
        ...b
    };
}

const user = merge<{ name: string }, { age: number }>({name: "Alice"}, {age: 18});

const newUser = merge({name: "Luis"}, {age: 25});

console.log(user.name, user.age)
console.log(newUser.name, newUser.age)

/*
El código muestra una función genérica llamada merge que combina dos objetos utilizando
el operador de propagación (...). Vamos a analizar su funcionamiento y los conceptos clave.

Función Genérica:
La función merge utiliza dos parámetros de tipo genérico, T y U.
Esto permite que la función acepte dos objetos de cualquier tipo, a y b, sin
restricciones iniciales.


Uso del Operador de Propagación (...):
Combina las propiedades de los objetos a y b en un nuevo objeto. Si hay claves repetidas,
las propiedades de b sobrescriben a las de a.


Tipo de Retorno:
El tipo de retorno de merge es una combinación de los tipos T y U, es decir, T & U
(la intersección de ambos tipos).

2. Uso de la función merge
a. Llamada con tipos explícitos
const user = merge<{ name: string }, { age: number }>({ name: "Alice" }, { age: 18 });
Aquí se especifican los tipos genéricos explícitamente:

T = { name: string }: El primer objeto tiene una propiedad name de tipo string.
U = { age: number }: El segundo objeto tiene una propiedad age de tipo number.
Resultado:
user: { name: string, age: number } = { name: "Alice", age: 18 }


b. Llamada con inferencia de tipos
const newUser = merge({ name: "Luis" }, { age: 25 });
Aquí no se especifican los tipos genéricos; TypeScript infiera automáticamente los tipos:
T = { name: string }: Derivado de { name: "Luis" }.
U = { age: number }: Derivado de { age: 25 }.

Resultado:
newUser: { name: string, age: number } = { name: "Luis", age: 25 }


Conceptos Clave
Tipos Genéricos (T y U):
Son marcadores de posición que representan tipos específicos definidos en el momento
de invocar la función.


Inferencia de Tipos:
Si no especificas explícitamente los tipos genéricos, TypeScript los deduce automáticamente
a partir de los argumentos pasados.


Intersección de Tipos (T & U):
Combina los tipos de T y U en un nuevo tipo que tiene todas sus propiedades.
En resumen, la función merge es un ejemplo típico de cómo los genéricos en TypeScript
permiten crear funciones reutilizables, flexibles y seguras en términos de tipos.
 */