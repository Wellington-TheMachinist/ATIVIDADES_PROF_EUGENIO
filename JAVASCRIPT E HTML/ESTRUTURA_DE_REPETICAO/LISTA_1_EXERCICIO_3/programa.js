/*
3. Fazer um algoritmo que leia um número inteiro positivo, calcule e
escreva todos os divisores deste.
*/

const numeroC = document.getElementById("idInNumero");
const resultadoC = document.getElementById("idOutTexto");
const valorComboBoxC = document.getElementById("idInTipo");

function listarDivisores(numero,valorComboBox){
    let saida= "USANDO ESTRUTURA FOR :"+"\n";
    let aux;
    if(valorComboBox=="FOR"){
    for(aux=numero;aux>=1;aux--){
      
      if(numero%aux==0){
       saida+=aux+"\n";
      }
       
      

    }
        return saida;
}else if(valorComboBox=="WHILE"){
let saida="USANDO ESTRUTURA WHILE :"+"\n";
let aux = numero;
    while(aux>=1){
        if(numero%aux==0){
       saida+= aux+"\n";
      
      }
 aux--;
}
return saida;


}else if(valorComboBox=="DOWHILE"){

let saida="USANDO ESTRUTURA DO WHILE :"+"\n";
let aux = numero;
 
do{
    if(numero%aux==0){
       saida+= aux+"\n";
      
      }
      aux--;

    }while(aux>=1);
    

    return saida;

}
     
}

function verificarDivisores() {
   let hahaha = listarDivisores(Number(numeroC.value),valorComboBoxC.value);
    resultadoC.innerText = hahaha;
}