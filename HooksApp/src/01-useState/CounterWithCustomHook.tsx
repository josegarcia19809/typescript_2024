import {useCounter} from "../hooks/useCounter";

function CounterWithCustomHook() {

    const {counter, increment, decrement, reset} = useCounter();
    const valueDecrement:number = 2;
    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <button className="btn btn-primary" onClick={() => increment()}>+1</button>
            <button className="btn btn-danger" onClick={() => reset()}>Reset</button>
            <button className="btn btn-secondary" onClick={() => decrement(valueDecrement)}>
                -{valueDecrement}
            </button>
        </>
    );
}

export default CounterWithCustomHook;