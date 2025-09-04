/*
4. Fazer um programa que calcule e escreva o valor de uma
prestação em atraso, utilizando a fórmula abaixo:
Valor atualizado da prestação = valor da prestação + (valor
da prestação*(taxa de juros/100)*tempo de atraso).
Onde:
valor da prestação = valor da prestação a ser paga;
taxa de juros = valor do juro cobrado pelo atraso;
tempo de atraso = quantidade de dias em atraso;

*/

const valorPrestacao = 1500;
const taxaJuros = 10;
const tempoDeAtraso = 2;


const valorAtualizadoPrestacao = valorPrestacao+(valorPrestacao*(taxaJuros/100)*tempoDeAtraso);

console.log("Valor atualizado da prestacao : R$ " + valorAtualizadoPrestacao);