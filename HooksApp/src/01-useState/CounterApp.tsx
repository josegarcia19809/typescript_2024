import {useState} from "react";

function CounterApp() {

    const [counter, setCounter] = useState<number>(0);
    const [counterObj, setCounterObj] = useState<{
        counter1: number,
        counter2: number,
        counter3: number
    }>
    ({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const {counter1, counter2, counter3} = counterObj;

    return (
        <>
            <h1>Counter App: {counter}</h1>
            <h1>Counter 1: {counter1}</h1>
            <h1>Counter 2: {counter2}</h1>
            <h1>Counter 3: {counter3}</h1>
            <hr/>
            <button className="btn btn-success" onClick={() => {
                setCounter(counter + 1)
                setCounterObj(
                    {
                        ...counterObj,
                        counter1: counter1 + 1,
                    }
                )
            }}
            >+1
            </button>
            <button>-1</button>
        </>
    );
}

export default CounterApp
;