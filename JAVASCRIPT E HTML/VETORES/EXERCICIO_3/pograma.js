/* 
 2. Fazer um algoritmo que gere um conjunto com 15 números inteiros.  Mostre este 
conjunto na página. Leia também um valor inteiro qualquer e verifique se este 
existe no conjunto lido.
*/


const notaC  = document.getElementById("idInNota");
const numeroC  = document.getElementById("idInNumero");
const botaoIncluirC = document.getElementById("btnIncluirNota");
const botaoCalcularC = document.getElementById("btnCalcular");
const resultadoC = document.getElementById("idOnResultado");
const mediaTurmaC = document.getElementById("idOnMedia");
const arrayNotas = [];

function gerarValorAleatorio(){
  mediaTurmaC.innerText="";
   for(let pos = 0; pos < 10; pos++){
   arrayNotas[pos] = Math.floor(Math.random() * 100);
   verificarNumerosPrimos(arrayNotas[pos]);
   }
    resultadoC.innerText = arrayNotas;
}

function verificarNumerosPrimos(numero){

 let maria="";
 let divisores=0;
           
  divisores=0;
 

  for(let count=1 ; count<=numero ; count++){
   if(numero % count == 0)
   	divisores++;
}
  if(divisores==2){
  	maria+= numero+" , ";
   }

mediaTurmaC.innerText+=maria;
}
/*
function mostrarDados(){
let saida = verificarNumerosPrimos(arrayNotas) ;

   mediaTurmaC.innerText = saida;

}

function verificarNumerosPrimoss(arrayNotas){

 let maria="";
 let divisores=0;
  
      for(let aux = 0;aux<arrayNotas.length;aux++){
        
 let hahaha=arrayNotas[aux];
           
  divisores=0;
 

  for(let count=1 ; count<=hahaha ; count++){
   if(hahaha % count == 0)
   	divisores++;
}
  if(divisores==2){
  	maria+=  arrayNotas[aux]+"É primo \n";
   } else{
  	maria+=arrayNotas[aux]+"Não é primo \n";
}
        
      
         
      

      
    

   
   
   
   
}
return maria;
}

*/