/*
6. Escrever um programa que leia um número de 3 dígitos e o
inverta, escrevendo o número lido e o invertido.
*/

let numero1 = 359;

function inverterNumero(valor1){
    let val1=(Math.trunc((valor1%100)%10)*100)+Math.trunc((valor1%100)/10)*10+Math.trunc(valor1/100);
    
    return val1;
}
console.log(inverterNumero(numero1));