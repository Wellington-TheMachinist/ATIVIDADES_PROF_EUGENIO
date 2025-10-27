/*
1. Números capicuas são aqueles que escritos da direita para esquerda ou
da esquerda para direita tem o mesmo valor. Exemplo 929, 44, 97379.
Fazer um algoritmo que dado um número inteiro positivo, calcule e escreva
se este é ou não capicua.
*/





const numero_C = document.getElementById("idInNumero");

const resultado_C = document.getElementById("idOutResultado");



function verificarCapicua(numero) {
  let original = numero;   
  let reverso = 0;

  while (numero > 0) {
    let sobra = numero % 10;              
    reverso = reverso * 10 + sobra;   
    numero = Math.trunc(numero / 10);         
  }

  if( reverso == original){

  return " É ";
  }else{
    return " NÃO É ";
  }
}

 
function mostrarDados(){
    let saida = verificarCapicua(Number(numero_C.value));

    let resultado = "O NÚMERO "+Number(numero_C.value)+ " "+saida+ " CAPICUA";

    resultado_C.innerText = resultado;
}