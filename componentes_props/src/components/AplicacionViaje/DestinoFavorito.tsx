type DestinoFavoritoProps = {
    destino: string;
}
const DestinoFavorito = ({destino}: DestinoFavoritoProps) => {
    return (
        <div>
            <p>{destino}</p>
        </div>
    )
}

export default DestinoFavorito