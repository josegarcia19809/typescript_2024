const nombreCompleto = (nombre: string, apellido: string): string => {
    return `${nombre} ${apellido}`;
};

const nombreIronman: string = nombreCompleto("Tony", "Stark");
console.log(nombreIronman);
