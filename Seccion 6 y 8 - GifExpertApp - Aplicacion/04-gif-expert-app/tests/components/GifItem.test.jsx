import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {
    const title = 'SpongeBob';
    const url = 'https://media2.giphy.com/media/UvOcKPHrkKSLm/giphy.gif?cid=4870f108qcwv9zr5t2s8hsm4wv7azmc4o0l6m0bqe25jpqd9&ep=v1_gifs_search&rid=giphy.gif&ct=g';


    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(
            <GifItem title={title} url={url} />
        );

        expect(container).toMatchSnapshot;
    });

    test('Debe de mostrar la imagen con el URL y ALT indicado', () => {
        render(<GifItem title={title} url={url} />);

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});