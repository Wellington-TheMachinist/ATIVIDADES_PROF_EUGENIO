/*
1. Fazer um algoritmo que leia um número inteiro positivo, calcule e
escreva se o número lido é um número perfeito ou não. Número
perfeito é aquele cuja soma de seus divisores, exceto ele próprio, é
igual ao número.
Exemplo: 6 é um número perfeito porque 1 + 2 + 3 = 6.
8 não é um número perfeito porque 1 + 2 + 4 = 7
*/

const numero_C = document.getElementById("idInNumero");
const resultadoC = document.getElementById("idOutResultado");

function destacarDivisores(numero){
    let controle=0;
    for(let aux=(numero-1);aux>=1;aux--){
       
        if(numero%aux==0){
            controle+=aux;
        }
    }
    if(controle==numero){
        return "sim"
    }else{
        return "não"
    }

}


function verificarNumeroPerfeito(numero){
somaDivisores = 0;
for (divisor = 1;divisor<= numero/2;divisor++){
    if(numero%divisor===0) somaDivisores+=divisor;
}
return (somaDivisores===numero)
}

function mostrarResultado(){
    let resultado = destacarDivisores(Number(numero_C.value));

    resultadoC.innerText = resultado;
}

function acaoBotaoExecutar(){
    const numero = Number(numero_C.value);

    let saida = "RESULTADO DA VERIFICAÇÃO \n";

    if(verificarNumeroPerfeito(numero)===true)
        saida+="O numero "+numero+" é Número perfeito \n"
    else saida+="O numero "+numero+" não é Número perfeito \n"
}
