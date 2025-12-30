function identity<T>(item: T): T {
    return item;
}

// Uso
console.log(identity<number>(7));
console.log(identity<string>("hello"));
console.log(identity(true));
