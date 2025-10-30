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

function gerarVetorIntercalado(arrayUm,arrayDois){
   let vetorIntercalado = [];
    let indice = 0;
   let index = 0; 
   while (indice<(arrayUm.length+arrayDois.length)){
vetorIntercalado[indice]=arrayUm[index];
indice++;
vetorIntercalado[indice]=arrayDois[index];
indice++;
index++;
   }
    arrayIntercalado = vetorIntercalado;
    return vetorIntercalado;
}

function ordenarVetorIntercalado(){
    return arrayIntercalado.sort((a, b) => a - b);
}



function mostrarVetorIntercalado(){
    saidaVetorIntercaladoC.innerText=gerarVetorIntercalado(arrayUm,arrayDois);
    saidaProdutoEscalarC.innerText=ordenarVetorIntercalado(arrayIntercalado);

   
}