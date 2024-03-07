import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
    test('usContext debe retornar un objecto', () => {
        const clave = 'yeyo123';
        const edad = 27;
        const testUser = {
            clave: clave,
            edad: edad,
            nombre: 'Roberto'
        };


        const user = usContext(testUser);

        expect(user).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    });
});