// Exportamos una función para imprimir un objeto
export const printObject = (argument: any): void => {
    console.log(argument);
};

// Exportamos una función genérica
export function genericFunction<T>(argument: T): T {
    return argument;
}

// Exportamos una función flecha genérica
export const genericFunctionArrow = <T>(argument: T) => argument;