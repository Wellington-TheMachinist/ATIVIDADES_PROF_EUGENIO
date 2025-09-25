const salarioC = document.getElementById("idInSalario");
const botaoCalcular = document.getElementById("btnCalcular");
const salarioReajustado = document.getElementById("idOutSalarioReajustado");



function calcularSalario(salario){
    if(salario<=1412){
        salario+=salario*0.5;
    }else
    if(salario>1412){
        salario+=salario*0.4;
    }
    return salario;
}

function mostrarSalario(){
var salario = Number(salarioC.value);
const saida = "Com o reajuste, seu salário de R$ "+salario+" passa a ser : R$ "+calcularSalario(salario);
salarioReajustado.innerText = saida;

}