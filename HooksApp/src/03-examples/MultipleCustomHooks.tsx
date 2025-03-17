import useFetch from "../hooks/useFetch.ts";

function MultipleCustomHooks() {

    const {data, hasError, isLoading} = useFetch("https://pokeapi.co/api/v2/pokemon/1");
    return (
        <>
            <h1>Información de Pokemon</h1>
            <hr/>

            {isLoading && <p>Cargando...</p>}
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <h2>{data?.name}</h2>
        </>
    );
}

export default MultipleCustomHooks;