/*
3. Faça um programa que leia as 3 notas de um aluno e calcule a
média final deste. Considerar que a média é ponderada e que
o peso das notas é: 2,3 e 5, respectivamente.
*/
const pesoUm  = 2;
const pesoDois = 3;
const pesoTres = 5;
const notaUm = 9 *pesoUm;
const notaDois = 8 * pesoDois;
const notaTres = 4 * pesoTres;

const mediaFinal = (notaUm + notaDois + notaTres) / (pesoUm + pesoDois + pesoTres);

console.log(mediaFinal);

