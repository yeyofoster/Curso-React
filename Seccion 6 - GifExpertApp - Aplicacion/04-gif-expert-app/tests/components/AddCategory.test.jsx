import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    const onNewCategory = (newCategory) => {
        console.log(newCategory);
    };

    test('Debe de cambiar el valor de la caja de texto', () => {
        const newValue = 'SpongeBob';
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: newValue } });

        expect(input.value).toBe(newValue);
    });
});