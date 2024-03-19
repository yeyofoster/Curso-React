import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    const onNewCategory = (newCategory) => {
        console.log(newCategory);
    };

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
    });
});