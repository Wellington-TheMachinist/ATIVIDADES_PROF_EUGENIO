/*
2. Fazer um programa para ler os valores dos coeficientes A,B e
C de uma equação quadrática. Calcular e imprimir o valor do
discriminante (delta). Delta = B2 - 4 * A * C.
*/

let coeficienteA = 4;
let coeficienteB = 5;
let coeficienteC = 6;

function discriminante(valor1,valor2,valor3){
    let delta = Math.pow(valor2,2) - 4*valor1*valor3;
    return delta;

}

console.log("O discriminante da equação quadrática corresponde a : "+discriminante(coeficienteA,coeficienteB,coeficienteC));