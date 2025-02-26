import {useCounter} from "../hooks/useCounter.ts";

function CounterWithCustomHook() {

    const {counter} = useCounter();
    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <button className="btn btn-primary">+1</button>
            <button className="btn btn-danger">Reset</button>
            <button className="btn btn-secondary">-1</button>
        </>
    );
}

export default CounterWithCustomHook;