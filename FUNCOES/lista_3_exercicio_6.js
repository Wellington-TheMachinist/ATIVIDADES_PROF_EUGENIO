/*
6. Escrever um programa que leia um número de 3 dígitos e o
inverta, escrevendo o número lido e o invertido.
*/

let numero1 = 592;

function inverterNumero(valor1){
    let val1=Math.trunc((valor1%100)%10);
    let val2 = Math.trunc((valor1%100)/10);
    let val3 = Math.trunc(valor1/100);
    return val1*100+val2*10+val3;
}
console.log(inverterNumero(numero1));