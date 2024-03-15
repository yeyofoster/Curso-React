import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en el <CounterApp />', () => {
    const initialValue = 100;

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(
            <CounterApp value={initialValue} />
        );

        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial de 100', () => {
        render(
            <CounterApp value={initialValue} />
        );
        expect(screen.getByText(initialValue)).toBeTruthy();
        expect(screen.getByRole('heading', { level: 2 })
            .innerHTML
        ).toContain(`${initialValue}`);
    });
});