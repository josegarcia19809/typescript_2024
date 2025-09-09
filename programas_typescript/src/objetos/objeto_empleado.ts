const empleado: {
    nombre: string;
    sueldoBase: number;
    bono?: number; // opcional
} = {nombre: "Rosa", sueldoBase: 12000};

// Ejercicio: calcula sueldo final considerando bono si existe.
const sueldoFinal = empleado.sueldoBase + (empleado.bono ?? 0);
console.log(`Sueldo de ${empleado.nombre}: $${sueldoFinal}`);