import EstudianteMiembro from "./EstudianteMiembro";
import "./GrupoEstudiantes.css"

type Estudiante = {
    nombre: string;
    grupo: string;
}

const estudiantes: Estudiante[] = [
    {nombre: "👩‍🎓 Ana López", grupo: "3A"},
    {nombre: "👨‍🏫 Carlos Ruiz", grupo: "3A"},
    {nombre: "👩‍💻 María Pérez", grupo: "3B"},
    {nombre: "👨‍🔬 José Torres", grupo: "3B"},
];

const GrupoEstudiantes = () => {
    return (
        <div className="contenedor-estudiantes">
            <h1 className="titulo">📋 Lista de estudiantes</h1>
            {estudiantes.map((estudiante: Estudiante) => (
                <EstudianteMiembro
                    key={estudiante.nombre}
                    nombre={estudiante.nombre}
                    grupo={estudiante.grupo}
                />
            ))}
        </div>
    )
}

export default GrupoEstudiantes