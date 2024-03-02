// Desestructuración.
// Asignacion Desestructurante.

const persona = {
    nombre: 'Yeyo',
    edad: 26,
    clave: 'Foster',
    rango: 'Soldado'
};

// const { nombre, edad, clave } = persona;

// console.log(clave);
// console.log(edad);
// console.log(clave);

const retornaPersona = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latLng: {
            lat: 14.1234,
            lng: -12.3232
        }
    };
};


const { nombreClave, anios, latLng: { lat, lng } } = retornaPersona(persona);

console.log(nombreClave, anios, lat, lng);