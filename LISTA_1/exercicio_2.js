/*
2. Fazer um programa para ler os valores dos coeficientes A,B e
C de uma equação quadrática. Calcular e imprimir o valor do
discriminante (delta). Delta = B2 - 4 * A * C.
*/

let A = 2;
let B = 5;
let C = 2;

const delta = Math.pow(B,2) - (4*A*C);

console.log("O valor do discriminante (delta) é " + delta);