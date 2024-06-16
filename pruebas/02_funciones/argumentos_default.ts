const nombreCompletoDefault = (
    nombre: string,
    apellido?: string,
    upper: boolean = false
): string => {
    if (upper) {
        return `${nombre} ${apellido || "Sin apellidos"}`.toUpperCase();
    }
    return `${nombre} ${apellido || "Sin apellidos"}`;
};

const nombreIronmanDefault: string = nombreCompletoDefault("Tony", "Stark");
console.log(nombreIronmanDefault);

const nombreIronmanDefault2: string = nombreCompletoDefault("Tony", "Stark", true);
console.log(nombreIronmanDefault2);