type TacoFavoritoProps = {
    taco: string
}

const TacoFavorito = ({taco}: TacoFavoritoProps) => {
    return (
        <div>
            <p>Mis tacos favoritos son de {taco} </p>
        </div>
    )
}

export default TacoFavorito