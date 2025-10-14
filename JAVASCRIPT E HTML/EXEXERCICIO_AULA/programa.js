
const precoLivroC = document.getElementById("idInPreco");
const diaSemanaC = document.getElementById("idInDiaSemana");
const tipoFilmeC = document.getElementById("idInTipoFilme");
const resultadoC = document.getElementById("idOutTexto");


function calculaPrecoFinal(preco,diaSemana,tipoFita){

if((diaSemana==2||diaSemana==3||diaSemana==5)){
    if(tipoFita==2){
return preco-=(preco*0.4)
    }else{
        return preco-(preco*0.4)+(preco*0.15)
    }
    

}else if ((diaSemana==4||diaSemana==6||diaSemana==7||diaSemana==1)){
     if(tipoFita==2){
return preco
    }else{
        return preco+=preco*0.15
    }
}
}


function mostrarDados(){

    let saida = calculaPrecoFinal(Number(precoLivroC.value),Number(diaSemanaC.value),Number(tipoFilmeC.value));

    resultadoC.innerText = saida;
}

