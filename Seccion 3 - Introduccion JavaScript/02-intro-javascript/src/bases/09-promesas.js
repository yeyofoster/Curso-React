import { getHeroeById } from "./08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const p1 = getHeroeById(2);
//         resolve(p1);
//         // reject('No se pudo encontrar el heroe.');
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('Heroe', heroe);
// }).catch(err => console.warn('Error', err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1 != null) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar el heroe');
            }
        }, 2000);
    });
};

getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.warn);

getHeroeByIdAsync(100)
    .then(console.log)
    .catch(console.warn);