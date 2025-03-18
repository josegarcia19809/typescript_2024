import useFetch from "../hooks/useFetch.ts";
import {useCounter} from "../hooks/useCounter.ts";
import LoadingMessage from "./LoadingMessage.tsx";
import PokemonCard from "./PokemonCard.tsx";

type PokemonData = {
    id: number;
    name: string;
    sprites: {
        front_default: string;
        back_default: string;
        back_shiny: string;
        front_shiny: string;
    }
}

function MultipleCustomHooks() {

    const {counter, decrement, increment} = useCounter(1);
    const {data, isLoading} =
        useFetch<PokemonData>(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    return (
        <>
            <h1>Información de Pokemon</h1>
            <hr/>

            {isLoading ?
                <LoadingMessage/> :
                <PokemonCard
                    id={data?.id ?? 1}
                    name={data?.name ?? "Desconocido"}
                    sprites={[
                        data?.sprites.front_default ?? "",
                        data?.sprites.back_default ?? "",
                        data?.sprites.back_shiny ?? "",
                        data?.sprites.front_shiny ?? ""
                    ]}
                />}
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            {/*<h2>{data?.name}</h2>*/}

            <button className="btn btn-primary mt-2"
                    onClick={() => {
                        return counter > 1 ? decrement() : null
                    }}>
                Anterior
            </button>
            <button className="btn btn-primary mt-2"
                    onClick={() => {
                        increment()
                    }}>
                Siguiente
            </button>
        </>
    )
        ;
}

export default MultipleCustomHooks;