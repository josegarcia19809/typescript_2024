type Admin = {
    permisions: string[]
}

type User = {
    userName: string
}

type AdminRole = Admin & User

let admin: AdminRole;

admin = {
    permisions: ["login"],
    userName: "luis",
}

console.log(admin);


/*
El código utiliza tipos personalizados (type) en TypeScript para definir estructuras de datos
y combina dos tipos existentes (Admin y User) mediante un operador de intersección (&).
Esto permite crear un nuevo tipo que combine las propiedades de ambos.

1. Declaración de tipos Admin y User
typescript
Copiar código
type Admin = {
    permisions: string[];
}

type User = {
    userName: string;
}

Admin: Describe un objeto con una propiedad:
permisions: un arreglo de cadenas (string[]), que representa una lista de permisos
    del administrador.
User: Describe un objeto con una propiedad:
userName: un string, que representa el nombre de usuario.

2. Tipo combinado AdminRole

type AdminRole = Admin & User;
El operador de intersección (&) combina las propiedades de los tipos Admin y User en un
nuevo tipo AdminRole.

Un objeto de tipo AdminRole debe incluir todas las propiedades de ambos tipos:
permisions (de Admin).
userName (de User).
Nota: Si hubiera propiedades con el mismo nombre en ambos tipos, TypeScript requeriría
que ambas coincidan en tipo.

3. Declaración y asignación de la variable admin

let admin: AdminRole;

admin = {
    permisions: ["login"],
    userName: "luis",
};

Declaración:
La variable admin se declara con el tipo AdminRole.
Esto significa que cualquier valor asignado a admin debe cumplir con las propiedades
combinadas de Admin y User.

Asignación:
Se asigna un objeto que incluye:
permisions: un arreglo con un elemento "login".
userName: el string "luis".
Este objeto cumple con las propiedades requeridas por AdminRole.
Comportamiento en ejecución
Cuando imprimes o utilizas la variable admin, obtendrás un objeto que incluye todas
las propiedades del tipo combinado:

// Salida:
{
    permisions: ["login"],
    userName: "luis"
}

Ventajas del operador de intersección (&)
Reutilización de tipos: Permite combinar múltiples tipos existentes sin duplicar definiciones.
Verificación de tipos estricta:
Si faltara una propiedad, TypeScript generaría un error:

admin = {
    permisions: ["login"]
};
// Error: Falta la propiedad 'userName'.

Compatibilidad con otros tipos:
El operador & también funciona con tipos primitivos, funciones y uniones.
Este patrón es útil para manejar objetos que deben cumplir con múltiples roles o
características, como en este caso, un administrador que también es un usuario.
 */