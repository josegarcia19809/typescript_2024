export interface Pokemon {
    id: number;
    name: string;
    // Agrega las propiedades necesarias según la estructura de datos de la API
}

// @ts-ignore
export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

    if (!response.ok) {
        throw new Error(`Error al obtener el Pokémon con ID ${pokemonId}`);
    }

    const data: Pokemon = await response.json();
    return data;
};