const numeroC = document.getElementById("idInNumero");
const btnVerificarNumeroC = document.getElementById("btnVerificarNumero");
const resultadoC = document.getElementById("idOutResultado");

function verificarNumero(numero){

    if((numero%2)==0){
        return "Par";
    }else{
        return "Ímpar";
    }

}

function btnVerificarNumeros() {
    var numero  = Number(numeroC.value);
    var saida = verificarNumero(numero);

    resultadoC.innerText = "O número "+numero+ " é "+saida;
}