// gestion_pacientes.ts

// Módulo físico
type Fisico = {
    estatura: number; // en cm
    peso: number;     // en kg
};

// Módulo médico
type Medico = {
    tipoSangre: string;
};

// Intersección para un paciente completo
type Paciente = Fisico & Medico & {
    edad: number;
};

const juan: Paciente = {
    estatura: 175,
    peso: 70,
    tipoSangre: "O+",
    edad: 32,
};

console.log(juan);
