import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";

describe('Pruebas en <MultipleCustomHooks />', () => {
    test('Debe de mostrar el componente por defecto', () => {
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('Información de Pokemon'));

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        expect(nextButton);
    });
});