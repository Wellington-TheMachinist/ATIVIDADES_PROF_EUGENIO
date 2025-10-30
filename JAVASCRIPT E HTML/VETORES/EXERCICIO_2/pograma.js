/* 
 2. Fazer um algoritmo que gere um conjunto com 15 números inteiros.  Mostre este 
conjunto na página. Leia também um valor inteiro qualquer e verifique se este 
existe no conjunto lido.
*/



const numeroC  = document.getElementById("idInNumero");
const resultadoC = document.getElementById("idOutVetor");
const mediaTurmaC = document.getElementById("idOutVerificacao");
const arrayNotas = [];


function gerarVetorAleatorio(){
   for(let pos = 0; pos < 15; pos++){
   arrayNotas[pos] = Math.floor(Math.random() * 100);
   }
    resultadoC.innerText = arrayNotas;
}


function verificarNumeroNoVetor(numero){

   let maria="não";  

      for(let aux = 0;aux<arrayNotas.length;aux++){
        if(arrayNotas[aux]==numero){
            maria="sim";
        }
      }

      return maria;  

}


function mostrarDados(){
   let saida = verificarNumeroNoVetor(Number(numeroC.value));
   mediaTurmaC.innerText = "O número "+Number(numeroC.value)+" "+saida+" está na lista ";

}