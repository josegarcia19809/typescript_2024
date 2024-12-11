function add(a: number, b: number): number {
    return a + b;
}


console.log(add(7, 6))

function calculate(a: number, b: number, calcFn: (a: number, b: number) => number) {
    console.log(calcFn(a, b));
}

// El tercer parámetro quye recibe es una función que tiene esta firma:
// calcFn: (a: number, b: number) => number)

calculate(3, 12, add)
// add cumple con la firma solicitada
