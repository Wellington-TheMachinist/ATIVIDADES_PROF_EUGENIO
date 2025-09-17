const nomeC = document.getElementById("idInNome");
const anoNascimentoC = document.getElementById("idInAnoNascimento");
const btnCalcularEleitorC = document.getElementById("btnCalcularEleitor");
const resultadoC = document.getElementById("idOutResultado");



function calcularTipoEleitor(anoNascimentoC){
    const idade = 2025-anoNascimentoC;

    if(idade<16 || idade >70){
        return "Não Eleitor";
    }else if(idade>=16 && idade<18){
        return "Eleitor Facultativo";
    }else if(idade>=18 && idade <= 70){
        return "Eleitor Obrigatório";
    }
    
}

function eventoBotaoCalcularEleitor(){
    const anoNascimento = Number(anoNascimentoC.value);
    const tipoEleitor = calcularTipoEleitor(anoNascimento);

    const saida = "O cidadão "+nomeC.value+" é "+ tipoEleitor;

    resultadoC.innerText = saida;
}