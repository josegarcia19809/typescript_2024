function numberIdentity(item: number): number {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

function booleanIdentity(item: boolean): boolean {
    return item;
}

// Uso
console.log(numberIdentity(5));
console.log(stringIdentity("hello"));
console.log(booleanIdentity(true));
