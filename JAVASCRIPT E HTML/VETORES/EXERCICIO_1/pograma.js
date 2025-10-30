/*
1. Fazer um programa que leia um conjunto (array) com n números inteiros digitados 
pelo usuário via teclado. 
Calcular:
 • A amplitude do conjunto (Amplitude = o maior número do conjunto - o menor 
número do conjunto). Ex: Para {3, 8, 1, 5}, a amplitude é 8 - 1 = 7; 
• A média aritmetica do conjunto;
 • Mostrar o conjunto em ordem inversa;
 
*/

 const notaC  = document.getElementById("idInNota");
const botaoIncluirC = document.getElementById("btnIncluirNota");
const botaoCalcularC = document.getElementById("btnCalcular");
const resultadoC = document.getElementById("idOnResultado");
const resultC = document.getElementById("idOnMedia");
const arrayTeste = [];

const arrayNotas = [];
function acaoBotaoIncluirNota(){
    const nota = Number(notaC.value);
    arrayNotas.push(nota);
    console.log(arrayNotas);
    resultadoC.innerText = arrayNotas.join(" | ");
}



function calcularAmplitude(){
   let menorNota=definirMenorNota(arrayNotas);
   let maiorNota=definirMaiorNota(arrayNotas); 
   let amplitude= maiorNota-menorNota;
   
   return amplitude;

}



function definirMaiorNota(arrayNotas){
   let maiorNota = 0;
      maiorNota = arrayNotas[0];
      for(valor of arrayNotas){
         if(valor > maiorNota)  maiorNota = valor;
      }
      return maiorNota;
   }


function definirMenorNota(arrayNotas){
   let menorNota = 0;
   let relatorioNotas = "";
      menorNota = arrayNotas[0];
      for(valor of arrayNotas){
         if(valor < menorNota)  menorNota = valor;
      }
      return menorNota;
   }


function calcularMedia(arrayNotas){
let media = 0;
 
   if(arrayNotas.length == 0) media = 0;
   else{
   
      for(valor of arrayNotas){
         media += valor;
       
      }
      media = media/arrayNotas.length;

      return media;
   }
   
}

function inverterVetor(arrayNotas){
    
    const arrayTeste = [];
      
    let ir =arrayNotas.length-1;
    for(let ar =0;ar<arrayNotas.length;ar++){
        
    arrayTeste[ar]=arrayNotas[ir];
ir--;
    }

    return arrayTeste;

}


function mostrarDados(){

   let media = calcularMedia(arrayNotas);
   let amplitude = calcularAmplitude(arrayNotas);
   let vetorInvertido = inverterVetor(arrayNotas);

   let saida = " MÉDIA : "+media+"\n AMPLITUDE : "+amplitude+"\n VETOR INVERTIDO : "+vetorInvertido;

   resultC.innerText = saida;


}


