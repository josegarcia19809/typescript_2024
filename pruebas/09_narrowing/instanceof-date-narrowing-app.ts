function printFullDate(date: string | Date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString());
    }
}

// Uso
printFullDate(new Date());
printFullDate("2025-01-01");
