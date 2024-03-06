import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objecto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'yeyofoster'
        };

        const user = getUser();

        expect(testUser).toEqual(user);


    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Yeyo';
        const user = getUsuarioActivo(name);

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    });
});