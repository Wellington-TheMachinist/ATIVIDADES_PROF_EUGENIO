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



function buscar(arrayDois,numero){
    for(let aux = 0;aux<arrayDois.length;aux++){
           if(arrayDois[aux]==numero){
            return true;
           }
}
return false;
}

function verificarIdentidade(arrayUm,arrayDois){
    for(let auxi=0;auxi<arrayUm.length;auxi++){
        if(buscar(arrayDois,arrayUm[auxi])=== false) return false;
    }
    return true;
}



/*
function CompararVetores(vetor1,vetor2){
    let vetorUm= vetor1;
    let vetorDois = vetor2;
    let contador=0;
        for(let aux = 0;aux<2;aux++){
            for(let ina=0;ina<2;ina++){
               console.log(vetor1[aux]+" vs "+vetor2[ina]);
    
               if(vetorUm[aux]==vetorDois[ina]){
               return true;
               }   
}
               return false;
}
if(contador==2){
return arrayUm+" e "+arrayDois+" são identicos.";
}else{
return arrayUm+" e "+arrayDois+" não são identicos.";
}


}
*/
function mostrarResultado(){
    
    saidaResultadoC.innerText=verificarIdentidade(arrayUm,arrayDois);

  
}