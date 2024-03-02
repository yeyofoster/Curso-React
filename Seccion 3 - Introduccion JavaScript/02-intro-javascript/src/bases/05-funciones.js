// Funciones en JS
// const saludar = function (nombre) {
//     return `Hola ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola ${nombre}`
};

const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => 'Hola Mundo!';

// console.log(saludar('Yeyo'));

console.log(saludar2('Yeyo'));
console.log(saludar3('Foster'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'yeyofoster'
});

const user = getUser();

console.log(user);

// Tarea
// 1. Transformar a una funcion de flecha.
// 2. Tiene que retornar  un  objeto implicito.
// 3. Pruebas

// Funcion original.
// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'ABC123',
//         username: 'yeyofoster'
//     };
// };

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('yeyofoster');
console.log(usuarioActivo);