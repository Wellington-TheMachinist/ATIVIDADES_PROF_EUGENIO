/*
1. Fazer um programa que gere dois conjuntos aleatórios de 10 números 
inteiros. Calcule e escreva um terceiro conjunto fruto da intercalação dos 
dois primeiros.
*/

const saidaVetorUmC = document.getElementById("idOutVetorUm");
const saidaVetorDoisC = document.getElementById("idOutVetorDois");
const saidaVetorIntercaladoC = document.getElementById("idOutVetorIntercalado");
const saidaProdutoEscalarC = document.getElementById("idOutProdutoEscalar");
let arrayUm = [];
let arrayDois = [];
let arrayIntercalado = [];
function gerarValorAleatorio(){
   const arrayNotas = [] ;
   for(let pos = 0; pos < 5; pos++){
   arrayNotas[pos] = Math.floor(Math.random() * 20);
   //calcularFatorial(arrayNotas[pos]);
   }
    return arrayNotas;
}



function gerarVetorUm(){
    
    arrayUm = gerarValorAleatorio();

    saidaVetorUmC.innerText = arrayUm;
    
    return arrayUm;
}

function gerarVetorDois(){
    
    arrayDois = gerarValorAleatorio();

    saidaVetorDoisC.innerText = arrayDois;

    return arrayDois;
}


function gerarProdutoEscalar(arrayUm,arrayDois){

 let indice = 0;
   let index = 0;
   let somador = 0; 
   while (indice<(arrayUm.length)){
index=0;
    
index+=arrayUm[indice]*arrayDois[indice];

somador+=index;
indice++;
console.log(somador+" , ")

   }
    return somador;


}

function mostrarProdutoEscalar(){
    
    saidaProdutoEscalarC.innerText=gerarProdutoEscalar(arrayUm,arrayDois);

   
}