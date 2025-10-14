/*
1. Fazer um algoritmo que calcule e escreva a multiplicação de dois
números N1 e N2 lidos do teclado. Obs.: a máquina que ira executar
este algoritmo somente sabe: adicionar e subtrair.
Exemplo: 2 * 4 = 8 na máquina em questão é 2 + 2 + 2 + 2 = 8.
*/
const numero_C = document.getElementById("idInNumero");
const numero_2_C = document.getElementById("idInNumeroDois");
const resultado_C = document.getElementById("idOutResultado");

function multiplicarSomando(numero1,numero2){
    let acumulador=0;
    for(let aux=0;aux<numero1;aux++){
        acumulador+=numero2;
    }
    return acumulador;
}

console.log(multiplicarSomando(4,4));

function mostrarDados(){
    let saida = multiplicarSomando(Number(numero_C.value),Number(numero_2_C.value));

    resultado_C.innerText = saida;
}