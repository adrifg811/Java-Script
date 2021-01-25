'use strict';

const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2, 5, 7];
// Hay más de una forma de resolver este ejercicio, aquí hay dos.
// Utilizando for:

let acc = 0;

for (let i = 0; i < notas.length; i++) {
  acc += notas[i];
};

console.log('Con el bucle FOR la puntuación final es ' + acc);

// Utilizando un for ... of:

let puntuacion = 0;

for (let score of notas) {
  puntuacion += score;
};
console.log('Con el bucle FOR OF la puntuación final es ' + puntuacion);