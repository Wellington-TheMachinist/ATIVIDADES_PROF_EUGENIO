const numeroC = document.getElementById("idInNumero");
const resultadoC = document.getElementById("idOutResultado");


function verificarNumero(numero){
    if(Math.trunc(Math.sqrt(numero))==Math.sqrt(numero)){
        return " é um número quadrado perfeito.";
    }else{
        return " não é um número quadrado perfeito.";
    }
}

function mostrarNumero(){
    const saida = "O número "+numeroC.value+verificarNumero(Number(numeroC.value));
    resultadoC.innerText = saida;
    
}