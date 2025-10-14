/*
3. Fazer um algoritmo que calcule e escreva o valor de . Os
valores de X e Y(inteiros) serão lidos do teclado. A máquina que ira
executar este algoritmo somente sabe: adicionar, subtrair, multiplicar e
dividir.
Exemplo: 24

= 16 na máquina em questão é 2 * 2 * 2 * 2 = 16.
*/

const numero_C = document.getElementById("idInNumero");
const numero_2_C = document.getElementById("idInNumeroDois");
const resultado_C = document.getElementById("idOutResultado");

function potenciando(numeroX,numeroY){
    let acumulador=numeroX;
    for(let aux=1;aux<numeroY;aux++){
       
        acumulador*=numeroX;
        
    }
    return acumulador;
}



function mostrarDados(){
    let saida = potenciando(Number(numero_C.value),Number(numero_2_C.value));

    resultado_C.innerText = saida;
}