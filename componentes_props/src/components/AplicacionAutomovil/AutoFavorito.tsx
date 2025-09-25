type AutoFavoritoProps = {
    marca: string;
}

const AutoFavorito = ({marca}: AutoFavoritoProps) => {
    return (
        <div>
            <p>{marca}</p>
        </div>
    );
};

export default AutoFavorito;