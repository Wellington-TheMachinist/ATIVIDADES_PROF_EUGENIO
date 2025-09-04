/*
1. Números quadrados perfeitos são aqueles cuja raiz quadrada
é um número inteiro. Exemplo 144. Fazer um algoritmo que
dado um número inteiro positivo, calcule e escreva se este é
ou não quadrado perfeito.
Obs.: Usuário ideal - ele não irá digitar valores incorretos.
*/

let numero = 145;

if(Math.pow(Math.trunc(Math.sqrt(numero) ),2)==numero){
    console.log("este número é um quadrado perfeito");
}
if(Math.sqrt(numero)%1 !==0){
    console.log("este número não é um quadrado perfeito");
}