import Pelicula from "../components/Pelicula/Pelicula";

const PaginaPeliculas = () => {
    return (
        <div className="contenedor-peliculas">
            <Pelicula
                titulo="Interstellar"
                duracion={169}
                estreno={false}
            >
                <p>🎬 Director: Christopher Nolan.</p>
            </Pelicula>

            <Pelicula
                titulo="Avatar: Fire and Ash"
                duracion={192}
                estreno={true}
            >
                <button>Comprar boletos</button>
            </Pelicula>

            <Pelicula
                titulo="Spider-Man: Beyond the Spider-Verse"
                duracion={140}
                estreno={true}
            >
                <p>🕷️ Próximamente en cines.</p>
            </Pelicula>

            <Pelicula
                titulo="The Matrix"
                duracion={136}
                estreno={false}
            >
                <p>🤖 Ciencia ficción que revolucionó el cine.</p>
            </Pelicula>

            <Pelicula
                titulo="Toy Story"
                duracion={81}
                estreno={false}
            >
                <p>🧸 Una aventura para toda la familia.</p>
            </Pelicula>

            <Pelicula
                titulo="Dune: Part Two"
                duracion={166}
                estreno={true}
            >
                <button>Ver horarios</button>
            </Pelicula>
        </div>
    );
};

export default PaginaPeliculas;