function someDemo(x: string | number, y: string | boolean) {
    if (x === y) {
        x.toUpperCase();
    }
}

// Uso
someDemo("hi", "hi");
