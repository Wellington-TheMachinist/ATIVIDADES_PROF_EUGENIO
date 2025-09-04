/*6. Escrever um programa que leia um número de 3 dígitos e o
inverta, escrevendo o número lido e o invertido.
*/

let numero = 382;

let A = numero/100;
let B = (numero%100)/10;
let C = (numero%100)%10;

console.log(numero);
console.log(Math.trunc(C)+""+Math.trunc(B)+""+Math.trunc(A));