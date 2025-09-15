// AutoFavorito.tsx

type AutoFavoritoProps = {
    marca: string;        // p. ej. "Ferrari"
    emoji?: string;       // opcional: por defecto "🏎️"
};

const AutoFavorito = ({marca, emoji = "🏎️"}: AutoFavoritoProps) => {
    return <p>{emoji} Mi auto favorito es el {marca}</p>;
};

export default AutoFavorito;
