'use strict';

const dni = prompt('Introduce los números de tu DNI para obtener tu letra:');

console.log('dni', dni);

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if (dni < 0 || dni > 99999999) {
  alert('El número introducido no es correcto');
} else {
  const letraseleccionada = letras[dni%23];
  alert('Tu letra del DNI es '+ letraseleccionada);
};

