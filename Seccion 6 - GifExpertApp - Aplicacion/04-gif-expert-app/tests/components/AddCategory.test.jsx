import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    const onNewCategory = jest.fn();

    const inputValue = 'SpongeBob';

    test('Debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: inputValue } });

        expect(input.value).toBe(inputValue);
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar onNewCategory si el input esta vacío', () => {
        render(<AddCategory onNewCategory={onNewCategory} />);
        onNewCategory.mockClear();

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: '' } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
});