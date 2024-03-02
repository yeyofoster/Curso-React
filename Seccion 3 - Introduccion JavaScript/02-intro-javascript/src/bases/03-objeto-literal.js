const persona = {
    nombre: 'Yeyo',
    apellido: 'Foster',
    edad: 27,
    direccion: {
        ciudad: 'Ecatepec',
        cp: 55210,
        lat: 19.6172500,
        lng: -99.0660100,
    }
};

// console.table(persona);

const persona2 = { ...persona };
persona2.nombre = 'Pedrito';

console.log(persona);
console.log(persona2);