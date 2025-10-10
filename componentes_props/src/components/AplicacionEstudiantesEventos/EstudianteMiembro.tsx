import './EstudianteMiembro.css';

type EstudianteProps = {
    nombre: string;
    grupo: string;
};

const EstudianteMiembro = ({nombre, grupo}: EstudianteProps) => {

    const manejarParticipacion = () => {
        console.log(`El estudiante ${nombre} participó en clase`);
    }

    const manejarAsistencia = () => {
        console.log(`El estudiante ${nombre} asistió a clases`);
    }

    const manejarTarea = () => {
        console.log(`El estudiante ${nombre} entregó la tarea`);
    }

    return (
        <section className="estudiante">
            <span className="estudiante-nombre">
                {nombre} - {grupo}
            </span>
            <div className="botones">
                <button onClick={manejarParticipacion}
                        className="btn btn-participo">🙋‍♂️
                    Participó
                </button>
                <button onClick={manejarAsistencia}
                        className="btn btn-asistio">📅 Asistió</button>
                <button onClick={manejarTarea}
                        className="btn btn-tarea">📘 Entregó tarea</button>
            </div>
        </section>
    );
};

export default EstudianteMiembro;
