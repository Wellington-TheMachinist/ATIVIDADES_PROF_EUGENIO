/*
1. Fazer um programa que gere dois conjuntos aleatórios de 10 números 
inteiros. Calcule e escreva um terceiro conjunto fruto da intercalação dos 
dois primeiros.
*/

const saidaVetorUmC = document.getElementById("idOutVetorUm");
const saidaVetorDoisC = document.getElementById("idOutVetorDois");
const saidaVetorIntercaladoC = document.getElementById("idOutVetorIntercalado");
let arrayUm = [];
let arrayDois = [];
let arrayIntercalado = [];
function gerarValorAleatorio(){
   const arrayNotas = [] ;
   for(let pos = 0; pos < 10; pos++){
   arrayNotas[pos] = Math.floor(Math.random() * 100);
   //calcularFatorial(arrayNotas[pos]);
   }
    return arrayNotas;
}



function gerarVetorUmAleatorio(){
    
    arrayUm = gerarValorAleatorio();

    saidaVetorUmC.innerText = arrayUm;
    
    return arrayUm;
}

function gerarVetorDoisAleatorio(){
    
    arrayDois = gerarValorAleatorio();

    saidaVetorDoisC.innerText = arrayDois;

    return arrayDois;
}

function gerarVetorIntercalado(arrayUm,arrayDois){
   let indice = 0;
   let index = 0; 
   while (indice<20){
arrayIntercalado[indice]=arrayUm[index];
indice++;
arrayIntercalado[indice]=arrayDois[index];
indice++;
index++;
   }
    return arrayIntercalado;
}


function teste(){
    saidaVetorIntercaladoC.innerText=gerarVetorIntercalado(arrayUm,arrayDois);
}