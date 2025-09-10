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

let valorPrestacao = 500;
let taxaJuros = 20;
let tempoAtraso = 10;

function valorAtualizadoPrestacao(valor1,valor2,valor3){

    return valor1+(valor1*(valor2/100)*valor3);

}

console.log("O valor atualizado da prestação corresponde a : R$ "+
    valorAtualizadoPrestacao(valorPrestacao,taxaJuros,tempoAtraso)
);