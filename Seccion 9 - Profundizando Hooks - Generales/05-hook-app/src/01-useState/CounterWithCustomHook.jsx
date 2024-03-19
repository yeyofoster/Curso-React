import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(5);
    const step = 5;

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />

            <button className="btn btn-primary" onClick={() => increment(step)}>+1</button>
            <button className="btn btn-secondary" onClick={reset}>Reset</button>
            <button className="btn btn-danger" onClick={() => decrement(step)}>-1</button>
        </>
    );
};