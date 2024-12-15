type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void
};

const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data);
    }
}

/*
En el código proporcionado, se usa una interfaz genérica (DataStorage<T>) para definir una
estructura de datos flexible que puede trabajar con cualquier tipo específico que se
especifique al utilizarla.

DataStorage<T> es un tipo genérico, donde T es un parámetro de tipo. Este parámetro
representa un tipo que será decidido cuando el tipo genérico sea instanciado.
Propiedades:
storage: T[]: Un arreglo que almacenará elementos del tipo T.
add(data: T): void: Un método que recibe un parámetro data del tipo T y no devuelve nada.
Aquí, DataStorage<T> se concreta como DataStorage<string>, lo que significa que el
parámetro T ahora es el tipo string.
Esto define que:
storage será un arreglo de cadenas (string[]).
El método add solo aceptará valores de tipo string.
En el método add, se utiliza this.storage.push(data) para agregar un nuevo elemento
al arreglo storage.
 */
textStorage.add("box")
textStorage.add("textmarker")
textStorage.add("scisors")
textStorage.add("glue")

console.log(textStorage.storage)

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number
}

const userStorage: DataStorage<User> = {
    storage: [],
    add(user: User) {
        this.storage.push(user);
    }
}

// Agregar usuarios al almacenamiento
userStorage.add({ name: "Alice", age: 25, isAdmin: true, id: "A001" });
userStorage.add({ name: "Bob", age: 30, isAdmin: false, id: 1002 });

// Mostrar los usuarios almacenados
console.log(userStorage.storage);

/*
Explicación de funcionamiento
Estructura genérica DataStorage<T>:
Gracias al uso de DataStorage<User>, se garantiza que solo objetos del tipo User
puedan ser almacenados en el arreglo storage.
 */