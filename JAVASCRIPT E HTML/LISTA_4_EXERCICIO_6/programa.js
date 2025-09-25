const nomeC = document.getElementById("idInNome");
const numeroC = document.getElementById("idInNumeroConta");
const saldoC = document.getElementById("idInSaldo");
const btnConsultarC = document.getElementById("btnConsultar");
const tarifaContaC = document.getElementById("idOutTarifaConta");
let tipoConta;

function verificarConta(saldo){
   let tarifa;
    if(saldo<1000){
    tarifa=25;
    }else if(saldo >= 1000 && saldo <2000){
        tarifa = 20;
    }else if(saldo>=2000 && saldo <3500){
        tarifa = 13;
    }else if(saldo>=3500){
        tarifa=0;
    }

    return tarifa;
}

function definirTipoConta(){
tarifa = verificarConta(Number(saldoC.value))

if(tarifa==25){
    return "Básica";
}else if(tarifa==20){
    return "Prata";
}else if(tarifa==13){
    return "Ouro";
}else if(tarifa==0){
    return "Premium";
}

}

function mostrarTipoConta(){
const saida = "A conta de número : "+Number(numeroC.value)+", pertencente a "+nomeC.value+" se enquadra na categoria "+definirTipoConta()+
",logo, a tarifa a ser paga corresponde a : R$"+verificarConta(Number(saldoC.value));

tarifaContaC.innerText = saida;

}