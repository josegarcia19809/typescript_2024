type PeliculaFavoritaProps = {
    pelicula: string
}

const PeliculaFavorita = ({pelicula}: PeliculaFavoritaProps) => {
    return (
        <div>
            <p>🍿 Mi pelicula favorita es {pelicula} </p>
        </div>
    )
}

export default PeliculaFavorita