/*
1. Fazer um programa que gere dois conjuntos aleatórios de 10 números 
inteiros. Calcule e escreva um terceiro conjunto fruto da intercalação dos 
dois primeiros.
*/

const saidaVetorUmC = document.getElementById("idOutVetorUm");
const saidaVetorDoisC = document.getElementById("idOutVetorDois");
const saidaVetorIntercaladoC = document.getElementById("idOutVetorIntercalado");
const saidaResultadoC = document.getElementById("idOutResultado");
let arrayUm = [] ;
let arrayDois = [];

function gerarValorAleatorio(){
   const arrayNotas = [] ;
   for(let pos = 0; pos < 2; pos++){
   arrayNotas[pos] = Math.floor(Math.random() * 10);
   
   }
    return arrayNotas;
}



function gerarVetorUm(arrayUm){
   
    arrayUm = gerarValorAleatorio();

    saidaVetorUmC.innerText = arrayUm;
    
    return arrayUm;
}

function gerarVetorDois(arrayDois){
    
    arrayDois = gerarValorAleatorio();

    saidaVetorDoisC.innerText = arrayDois;

    return arrayDois;
}




function CompararVetores(vetor1,vetor2){
    let vetorUm= vetor1;
    let vetorDois = vetor2;
    let contador=0;
for(let aux = 0;aux<2;aux++){
    for(let ina=0;ina<2;ina++){
    console.log(vetor1[aux]+" vs "+vetor2[ina]);
    
    if(vetorUm[aux]==vetorDois[ina]){
     contador++;
     vetorDois[ina]=100;
    }   
}
}
if(contador==2){
return arrayUm+" e "+arrayDois+" são identicos.";
}else{
return arrayUm+" e "+arrayDois+" não são identicos.";
}


}
function mostrarResultado(){
     gerarVetorUm(arrayUm);
     gerarVetorDois(arrayDois);
    //saidaResultadoC.innerText=CompararVetores(arrayUm,arrayDois);

  
}