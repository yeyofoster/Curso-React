import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import Heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp.js', () => {
    test('getHeroeById debe retornar un heroe por ID', () => {
        const heroeById = getHeroeById(1);

        expect(heroeById).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById debe retornar undefined', () => {
        const heroeById = getHeroeById(100);
        expect(heroeById).toBeFalsy();
    });

    // Tareas:
    // Debe de retornar un arreglo con los heroes de DC
    // length === 3
    // toEqual al arreglo filtrado
    test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroesByOwner = getHeroesByOwner(owner);
        expect(heroesByOwner.length).toBe(3);

        expect(heroesByOwner).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
        expect(heroesByOwner).toEqual(Heroes.filter( (heroe) => heroe.owner === owner ));
    });


    // Debe de retornar un arreglo con los heroes de Marvel
    // length === 2
    test('getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroesByOwner = getHeroesByOwner(owner);
        expect(heroesByOwner.length).toBe(2);
        expect(heroesByOwner).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
        expect(heroesByOwner).toEqual(Heroes.filter( (heroe) => heroe.owner === owner ));
    });
});