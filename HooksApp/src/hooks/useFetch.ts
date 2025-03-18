import {useEffect, useState} from "react";

type FetchState<T> = {
    data: T | null;
    isLoading: boolean;
    hasError: boolean;
    error: Error | null;
}

function UseFetch<T>(url: string) {

    const [state, setState] = useState<FetchState<T>>({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }

    useEffect(() => {
        getFetch();
    }, [url]);

    const getFetch = async () => {
        setLoadingState();
        try {
            const response = await fetch(url);

            // sleep
            await new Promise(resolve => setTimeout(resolve, 500));
            if (!response.ok) {
                throw new Error("Could not find pokemon");
            }
            const data: T = await response.json();
            setState({
                data: data,
                isLoading: false,
                hasError: false,
                error: null,
            })
        } catch (err) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: err as Error
            });
        }
    }
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}

export default UseFetch;