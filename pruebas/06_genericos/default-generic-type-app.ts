function makeEmptyArray<T = number>(): T[] {
    return [];
}

// Uso
const nums = makeEmptyArray();
const bools = makeEmptyArray<boolean>();
console.log(nums);
console.log(bools);