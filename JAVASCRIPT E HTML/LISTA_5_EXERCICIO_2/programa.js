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

const valorCarroC  = document.getElementById("idInValorInicial");
const arC = document.getElementById("idInAr");
const pinturaC = document.getElementById("idInPintura");
const vidroC = document.getElementById("idInVidro");
const direcaoC = document.getElementById("idInDirecao");
const saidaa = document.getElementById("outTexto");


function calcularValorCarro(valorInicial,ar,pintura,vidro,direcao){

    if(ar=="TRUE"){
        valorInicial+=1750;
    }
    if(pintura=="TRUE"){
        valorInicial+=800;
    }
    if(vidro=="TRUE"){
        valorInicial+=1200;
    }
    if(direcao=="TRUE"){
        valorInicial+=2000;
    }

    return valorInicial;
}


function testar(){
    const valorFinalCarro = calcularValorCarro(Number(valorCarroC.value),arC.value,pinturaC.value,vidroC.value,direcaoC.value);

    saidaa.innerText = "O valor final do carro será : R$" +valorFinalCarro;
}