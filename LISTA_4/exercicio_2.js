/*
2. Fazer um algoritmo que calcule e imprima o salário reajustado
de um funcionário de acordo com as seguintes regras:
• Salários de até R$ 1412,00 reajuste de 50%;
• Salários maiores que R$ 1412,00 reajuste de 40%.
Obs.: Usuário ideal - ele não irá digitar valores incorretos.

*/

let salario = 3500;
let salarioReajustado;
if(salario<=1412.00){
    salarioReajustado =  salario+=salario*0.5;

}if(salario>1412.00){
    salarioReajustado = salario+=salario*0.4;
}

console.log("O salario reajustado corresponde a : R$"+salarioReajustado);