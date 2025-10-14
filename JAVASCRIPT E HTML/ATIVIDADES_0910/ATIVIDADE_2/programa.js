/*
2. A série de Fibonacci é formada pela seguinte seqüência: 1, 1, 2, 3, 5,
8, 13, 21, 34, 55, ... . Escreva um algoritmo que leia um número inteiro
positivo n, calcule e escreva o n-ésimo termo da série.
Exemplo: n = 8 => termo = 21.
*/

const numero_C = document.getElementById("idInNumero");

const resultado_C = document.getElementById("idOutResultado");




function calcularFibonacci(numero){
let texto = "1 \n";
let aux=1;
let h=1
let ha=1   
while(aux <numero){


ha1=ha;
ha+=h;
h=ha1;



texto+=""+ha1+"\n";
aux++
}
return texto
}


function mostrarDados(){
    let saida = calcularFibonacci(Number(numero_C.value));

    resultado_C.innerText = saida;
    
}