function merge<T extends object, U extends object>(
    object1: T,
    object2: U
) {
    return {
        ...object1,
        ...object2,
    };
}

// Uso
const combo = merge({ name: "Colt" }, { pets: ["Blue", "Elton"] });
console.log(combo);
