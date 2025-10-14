
const anoC = document.getElementById("idInAno");
const nomeC = document.getElementById("idInNome")
const resultadoC = document.getElementById("idOutResultado");


function definirIdade(anoNascimento){
    return 2025-anoNascimento;
}


function definirCategoria(idade){
    if(idade <5){
        return "NENHUMA"
    }else  if(idade >=5&&idade<=7){
        return "Infantil A"
    }else  if(idade >=8&&idade<=10){
        return "Infantil B"
    }else  if(idade >=11&&idade<=13){
        return "Juvenil A"
    }else  if(idade >=14&&idade<=17){
        return "Juvenil B"
    }else  if(idade >17){
        return "Sênior"
    }


}


function mostrarValores(){
    let hahaha = definirIdade(Number(anoC.value));
    let hehehe=definirCategoria(Number(hahaha));

    let saida = " O nadador "+nomeC.value+" ,nascido no ano "+Number(anoC.value)+" ,possui  \n"
    +hahaha+" anos de idade e se enquadra na categoria "+hehehe;

    resultadoC.innerText = saida;
}