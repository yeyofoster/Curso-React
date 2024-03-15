import { fireEvent, render, screen } from "@testing-library/react";
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

    test('Debe de incrementar con el botón +1', () => {
        render(
            <CounterApp value={initialValue} />
        );
        fireEvent.click(screen.getByText('+1'));

        expect(screen.getByText(`${initialValue + 1}`)).toBeTruthy();
    });

    test('Debe de disminuir con el botón -1', () => {
        render(
            <CounterApp value={initialValue} />
        );
        fireEvent.click(screen.getByText('-1'));

        expect(screen.getByText(`${initialValue - 1}`)).toBeTruthy();
    });

    test('Debe de funcionar el botón reset', () => {
        render(
            <CounterApp value={initialValue} />
        );
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect(screen.getByText(`${initialValue}`)).toBeTruthy();
    });
});