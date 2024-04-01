import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react-dom/test-utils";

describe('Pruebas en el useCounter', () => {
    test('Debe de retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('Debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
    });

    test('Debe de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;
        act(() => {
            increment();
            increment(5);
        });
        expect(result.current.counter).toBe(16);
    });

    test('Debe de disminuir el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement } = result.current;
        act(() => {
            decrement();
            decrement(5);
        });
        expect(result.current.counter).toBe(4);
    });

    test('Debe de dar reset al contador', () => {
        const initialValue = 50;
        const { result } = renderHook(() => useCounter(initialValue));
        const { increment, reset } = result.current;
        act(() => {
            increment(100);
            reset();
        });
        expect(result.current.counter).toBe(initialValue);
    });
});