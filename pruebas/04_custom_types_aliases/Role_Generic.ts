type Role = "admin" | "user" | "editor";

let roles: Array<Role>;
roles = ["admin", "editor"];

console.log(roles);

/*
En el código proporcionado, se habla de tipos genéricos porque se utiliza Array<Role>,
donde Array es un tipo genérico predefinido en TypeScript. Esto significa que Array puede
aceptar cualquier tipo como parámetro genérico para definir qué tipo de elementos almacenará.

Desglose:
Tipo Genérico:

Array<T> es una declaración genérica en TypeScript. La T es un parámetro de tipo que
permite especificar qué tipo de datos contendrá el arreglo.
En este caso, T se reemplaza con el tipo Role.

Tipo Literal:
Role es un tipo literal definido como "admin" | "user" | "editor". Esto significa que una
variable de tipo Role solo puede contener uno de esos tres valores específicos.


Uso del Tipo Genérico:
Al declarar roles: Array<Role>, se define un arreglo que solo puede contener valores del tipo
Role. Es decir, los elementos del arreglo solo pueden ser "admin", "user", o "editor".
Luego, cuando se asigna ["admin", "editor"] a roles, TypeScript valida que los valores en el
arreglo coincidan con las opciones permitidas por el tipo Role.

Ventaja de los Tipos Genéricos:
El uso de tipos genéricos permite:
Flexibilidad: Puedes usar Array<T> con cualquier tipo, lo que hace que las definiciones sean
reutilizables.
Verificación de Tipos: TypeScript asegura que los datos en el arreglo cumplen con el tipo
especificado, evitando errores en tiempo de compilación.
En resumen, se habla de tipos genéricos porque Array utiliza un tipo genérico (T) que,
en este caso, se concreta como Role. Esto permite que el arreglo roles sea estrictamente tipado.
 */