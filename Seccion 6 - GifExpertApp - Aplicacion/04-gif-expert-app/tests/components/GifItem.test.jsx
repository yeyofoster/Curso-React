import { render } from "@testing-library/react";
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
});