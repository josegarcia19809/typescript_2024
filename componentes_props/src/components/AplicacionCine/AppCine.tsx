import Cartelera from "./Cartelera";
import DespedidaCine from "./DespedidaCine";
import PeliculaFavorita from "./PeliculaFavorita";

const AppCine = () => {
    return (
        <div>
            <Cartelera titulo="🎬Bienvenido a ReactCine"/>
            <PeliculaFavorita pelicula="Spiderman 🕷️🕸️"/>
            <PeliculaFavorita pelicula="Tiburon 🦈"/>
            <PeliculaFavorita pelicula="El padrino 🤵🏻‍♂️"/>
            <DespedidaCine mensaje="🎥¡Nos vemos en la próxima función!"/>
        </div>
    );
};

export default AppCine;
