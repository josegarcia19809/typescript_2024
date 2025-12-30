function getRandomElement<T>(list: T[]): T | undefined {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

// Uso
console.log(getRandomElement(["a", "b", "c"]));
console.log(getRandomElement([5, 6, 21, 354]));
