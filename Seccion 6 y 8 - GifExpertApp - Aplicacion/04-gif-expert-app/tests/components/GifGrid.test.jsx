import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => {
    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        const gifs = [
            {
                "id": "7NOl0pDVjdbumf57y0",
                "title": "Scream Yell GIF by Xbox",
                "url": "https://media1.giphy.com/media/7NOl0pDVjdbumf57y0/giphy-downsized-medium.gif?cid=4870f1087bjithrpz3nyngvtoab6mv5r4oc0fl9njiscfsuh&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g"
            },
            {
                "id": "ECvlptev6UZCGeSikQ",
                "title": "Get Ready Trailer GIF by BANDAI NAMCO",
                "url": "https://media3.giphy.com/media/ECvlptev6UZCGeSikQ/giphy.gif?cid=4870f1087bjithrpz3nyngvtoab6mv5r4oc0fl9njiscfsuh&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});