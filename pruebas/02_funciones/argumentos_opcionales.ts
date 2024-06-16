const nombreCompletoOpcional = (nombre: string, apellido?: string): string => {
    return `${nombre} ${apellido || "Sin apellidos"}`;
};

const nombreIronmanOpcional: string = nombreCompletoOpcional("Tony");
console.log(nombreIronmanOpcional);
