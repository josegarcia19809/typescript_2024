const mostrarNombre = (nombre: string, ...restArgs: string[]): string => {
    return `${nombre} ${restArgs.join(' ')}`;
}

const superman: string = mostrarNombre("Clark", "J", "Kent");
console.log(superman);
