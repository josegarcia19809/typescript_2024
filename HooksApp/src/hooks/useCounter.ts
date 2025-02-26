import {useState} from "react";

export const useCounter = (initialValue: number = 10) => {
    const [counter, setCounter] = useState<number>(initialValue);

    const increment = (): void => {
        setCounter(counter + 1);
    }

    const decrement = (value: number = 1): void => {
        setCounter(counter - value);
    }

    const reset = (): void => {
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}