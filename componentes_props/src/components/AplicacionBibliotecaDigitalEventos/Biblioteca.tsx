import './Biblioteca.css';
import LibroDigital from "./LibroDigital";

type Libro = {
    titulo: string;
    autor: string;
};

const libros: Libro[] = [
    {titulo: "🛡️ Don Quijote de la Mancha", autor: "Miguel de Cervantes ⚔️"},
    {titulo: "🌳 Cien años de soledad", autor: "Gabriel García M 🌅"},
    {titulo: "🪐 El principito", autor: "Antoine de Saint-Exupéry 👑"},
    {titulo: "👁️ 1984", autor: "George Orwell 🕵️‍♂️"},
    {titulo: "💖 Orgullo y prejuicio", autor: "Jane Austen 🎩"},
];


const Biblioteca = () => {
    return (
        <div className="biblioteca-contenedor">
            <h1 className="biblioteca-titulo">📚 Biblioteca digital</h1>
            <div className="lista-libros">
                {libros.map((libro: Libro) => (
                    <LibroDigital
                        key={libro.titulo}
                        titulo={libro.titulo}
                        autor={libro.autor}
                    />
                ))}
            </div>
        </div>
    );
};

export default Biblioteca;
