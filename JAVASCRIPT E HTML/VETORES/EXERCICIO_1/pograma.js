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
const mediaTurmaC = document.getElementById("idOnMedia");
const arrayTeste = [];

const arrayNotas = [];
function acaoBotaoIncluirNota(){
    const nota = Number(notaC.value);
    arrayNotas.push(nota);
    console.log(arrayNotas);
    resultadoC.innerText = arrayNotas.join(" | ");
}
function acaoBotaoCalcular(){
   let media = 0;
   let maiorNota = 0;
   let menorNota = 0;
   let relatorioNotas = "";
   if(arrayNotas.length == 0) media = 0;
   else{
      maiorNota = arrayNotas[0];
      menorNota = arrayNotas[0];
      for(valor of arrayNotas){
         media += valor;
         if(valor < menorNota)  menorNota = valor;
         if(valor > maiorNota)  maiorNota = valor;
      }
      media = media/arrayNotas.length;
      relatorioNotas = "AMPLITUDE : ";
      relatorioNotas += maiorNota-menorNota;
      
    let ir =arrayNotas.length-1;
    for(let ar =0;ar<arrayNotas.length;ar++){
        
    arrayTeste[ar]=arrayNotas[ir];
ir--;
    }


   }
   
   //console.log(media);
   let saida = "MÉDIA ARITMÉTICA = " + media + "\n";
   
   saida += relatorioNotas+"\n";

   saida += arrayTeste;


   mediaTurmaC.innerText = saida;
}