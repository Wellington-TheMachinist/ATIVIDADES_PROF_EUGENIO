/*
3. O número 3025 possui a seguinte característica:

• 30 + 25 = 55
• 552 = 3025

Fazer um algoritmo que leia um número inteiro de 4 dígitos e
calcule se este tem a característica descrita acima.
Obs.: Usuário ideal - ele não irá digitar valores incorretos.

*/

const numeroC = document.getElementById("idInNumero");
const resultadoC = document.getElementById("idOutTexto");

function calcularNumero(numero){
    if(numero == Math.pow((Math.trunc(numero/100))+(numero%100),2)){
    return " Sim ";

}else
if(numero != Math.pow((Math.trunc(numero/100))+(numero%100),2)){
    return " Não ";
    
}
}


function mostrarNumero(){
    
const controle = calcularNumero(Number(numeroC.value))
    resultadoC.innerText = "O numero "+Number(numeroC.value)+ controle +" Possui as características pedidas";

}