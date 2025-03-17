import {useEffect, useState} from "react";

type FetchState<T> = {
    data: T | null;
    isLoading: boolean;
    hasError: boolean;
    error: Error | null;
}

function UseFetch<T>() {

    const [state, setState] = useState<FetchState<T>>({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });


    useEffect(() => {
        getFetch();
    }, []);

    const getFetch = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
            if (!response.ok) {
                throw new Error("Could not find pokemon");
            }
            const data: T = await response.json();
            console.log({data});
        } catch (err) {
            setState({data: null, isLoading: false, hasError: true, error: err as Error});
        }
    }
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}

export default UseFetch;