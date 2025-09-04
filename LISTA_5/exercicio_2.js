/*

2. Desenvolver um algoritmo para calcular e imprimir o preço
final de um carro. O valor do preço inicial de fábrica é
fornecido por um meio de entrada. O carro pode ter as
seguintes opções:
• (S,N) Ar condicionado: R$ 1750,00
• (S,N) Pintura Metálica: R$ 800,00
• (S,N) Vidro Elétrico: R$ 1200,00
• (S,N) Direção Hidráulica: R$ 2000,00.
• Obs.: Usuário ideal - ele não irá digitar valores
incorretos.

*/

let precoCarro = 55000;
let precoFinalCarro = precoCarro;

let arCondicionado = false;
let pinturaMetalica = false;
let vidroEletrico = false;
let direcaoHidraulica = false;

if(arCondicionado==true){
    precoFinalCarro+=1750;
}
if(pinturaMetalica==true){
    precoFinalCarro+=800;
}
if(vidroEletrico==true){
    precoFinalCarro+=1200;
}
if(direcaoHidraulica==true){
    precoFinalCarro+=2000;
}

console.log("o preço final do carro será : R$"+precoFinalCarro);