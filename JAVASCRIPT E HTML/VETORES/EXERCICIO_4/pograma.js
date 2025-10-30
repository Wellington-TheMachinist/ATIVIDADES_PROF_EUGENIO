
const notaC  = document.getElementById("idInNota");
const numeroC  = document.getElementById("idInNumero");
const botaoIncluirC = document.getElementById("btnIncluirNota");
const botaoCalcularC = document.getElementById("btnCalcular");
const resultadoC = document.getElementById("idOnResultado");
const mediaTurmaC = document.getElementById("idOnMedia");
const mediaTurmaCC = document.getElementById("idOutMedia");
const arrayNotas = [];

function gerarValorAleatorio(){
  mediaTurmaC.innerText="";
   for(let pos = 0; pos < 10; pos++){
   arrayNotas[pos] = Math.floor(Math.random() * 100);
   
   inverterNumeros(arrayNotas[pos]);
   }
    resultadoC.innerText = arrayNotas;
}

function inverterNumeros(numero) {
  let original = numero;   
  let reverso = 0;

  while (numero > 0) {
    let sobra = numero % 10;              
    reverso = reverso * 10 + sobra;   
    numero = Math.trunc(numero / 10);         
  }

 
 mediaTurmaCC.innerText+= original+" invertido se torna: "+reverso+"\n";
}

