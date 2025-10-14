const pesoC = document.getElementById("idInPeso");
const nomeC = document.getElementById("idInNome");
const resultadoC = document.getElementById("idOutResultado");




function calcularPeso(peso){

    return (peso*2.64)/9.87

}

function mostrarPeso(){
let hahaha = calcularPeso(Number(pesoC.value));
 resultadoC.innerText =   "O PESO DO "+nomeC.value+" EM JÚPITER SERIA "+hahaha+" KILOGRAMAS"; 

}