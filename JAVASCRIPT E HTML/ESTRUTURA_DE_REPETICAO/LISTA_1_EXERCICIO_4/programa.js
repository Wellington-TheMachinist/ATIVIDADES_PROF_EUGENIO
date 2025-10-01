const numeroC = document.getElementById("idInNumero");
const valorEstruturaC = document.getElementById("idInEstrutura");
const resultadoC = document.getElementById("outResultado");

function listarDivisores(numero,valorComboBox){
    let controle= "";
    let aux;
    if(valorComboBox=="FOR"){
    for(aux=numero;aux>=1;aux--){
      
      if(numero%aux==0){
       controle++;
      }
       
      

    }
    if(controle==2){
        return "  "
    }else{
        return " NÃO ";
    }
}else if(valorComboBox=="WHILE"){
let controle="";
let aux = numero;
    while(aux>=1){
        if(numero%aux==0){
       controle++;
      
      }
 aux--;
}
if(controle==2){
        return "  "
    }else{
        return " NÃO ";
    }


}else if(valorComboBox=="DOWHILE"){

let controle="";
let aux = numero;
 
do{
    if(numero%aux==0){
       controle++;
      
      }
      aux--;

    }while(aux>=1);
    

   if(controle==2){
        return "  "
    }else{
        return " NÃO ";
    }

}
     
}

function mostrarNumero() {
   let hahaha = listarDivisores(Number(numeroC.value),valorEstruturaC.value);
    resultadoC.innerText = "O NÚMERO "+Number(numeroC.value)+hahaha+"É UM NÚMERO PRIMO!";
}