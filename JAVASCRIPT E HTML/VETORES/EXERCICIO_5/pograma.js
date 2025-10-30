
const notaC  = document.getElementById("idInNota");
const numeroC  = document.getElementById("idInNumero");
const botaoIncluirC = document.getElementById("btnIncluirNota");
const botaoCalcularC = document.getElementById("btnCalcular");
const resultadoC = document.getElementById("idOnResultado");
const mediaTurmaCC = document.getElementById("idOutMedia");
const arrayNotas = [];

function gerarValorAleatorio(){
  mediaTurmaCC.innerText="";
   for(let pos = 0; pos < 10; pos++){
   arrayNotas[pos] = Math.floor(Math.random() * 100);
   calcularFatorial(arrayNotas[pos]);
   }
    resultadoC.innerText = arrayNotas;
}

function calcularFatorial(numero) {
  if(numero==1){
    mediaTurmaCC.innerText+= numero+"! = 0 \n";
  }else{
  let controle=numero;     
  for(let aux = numero-1;aux>0;aux--){
    controle*=aux;

  }  

 mediaTurmaCC.innerText+= numero+"! = "+controle+"\n";
  }
}

/*
function verificarNumerosPrimos(numero){

 let maria="";
 let divisores=0;
           
  for(let count=1 ; count<=numero ; count++){
   if(numero % count == 0)
   	divisores++;
}
  if(divisores==2){
  	maria+= numero+" , ";
   }

mediaTurmaC.innerText+=maria;
}
*/