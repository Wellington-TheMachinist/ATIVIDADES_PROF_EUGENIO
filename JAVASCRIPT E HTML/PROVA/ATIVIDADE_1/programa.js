let ladoA_C=document.getElementById("idInLadoUm");
let ladoB_C=document.getElementById("idInLadoDois");
let ladoC_C=document.getElementById("idInLadoTres");
let resultado_C = document.getElementById("idOutResultado");

function definirTriangulo(ladoA,ladoB,ladoC){
    if(ladoA+ladoB>ladoC&&ladoA+ladoC>ladoB&&ladoC+ladoB>ladoA){

    if(Math.pow(ladoA,2)==Math.pow(ladoB,2)+Math.pow(ladoC,2)){
        return "retângulo";
    }else
    if(Math.pow(ladoA,2)>Math.pow(ladoB,2)+Math.pow(ladoC,2)){
        return "obtusângulo";
    }else
    if(Math.pow(ladoA,2)<Math.pow(ladoB,2)+Math.pow(ladoC,2)){
        return "acutângulo";
    }
}else{
        return "inexistente";
    }




}

function mostrarInformacao(){
let resultado = definirTriangulo(Number(ladoA_C.value),Number(ladoB_C.value),Number(ladoC_C.value));

let saida = "De acordo com o valor dos lados, o triangulo é considerado "+resultado;

resultado_C.innerText = saida;

}

//console.log(definirTriangulo(ladoA,ladoB,ladoC));