import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {
    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
        screen.debug();
    });

    test('Debe de tener el titulo "GifExpertApp" en un elemento h1', () => {
        render(<GifExpertApp />);
        const titulo = screen.getByRole('heading', { level: 1 });
        expect(titulo);
        expect(titulo.innerHTML).toBe('GifExpertApp');
    });
});