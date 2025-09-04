/*
6. Criar um algoritmo que leia o nome, o número da conta e o
saldo bancário total semestral de uma pessoa e calcule a
tarifa bancária em que a mesma se enquadra:
• Básica (saldo médio mensal inferior a R$ 1.000,00) tarifa
de R$ 25,00;
• Prata (saldo médio mensal entre R$ 1.000,01 e R$
2.000,00) tarifa de R$ 20,00;
• Ouro (saldo médio mensal entre R$ 2.000,01 e R$
3.500,00) tarifa de R$ 13,00;
• Prêmio (saldo médio mensal superior a R$ 3.500,00) tarifa
isenta.
Obs.: Usuário ideal - ele não irá digitar valores incorretos.
*/

let nome = "Elon Musk";
let numeroConta = 115737;
let saldoBancario = 1565;

let tarifaBancaria;
let tipoConta;

if(saldoBancario<1000){
    tarifaBancaria=25;
    tipoConta="básica";
    
}
if(saldoBancario>1000.01&&saldoBancario<=2000){
    tarifaBancaria=20;
    tipoConta= "prata";
    
}
if(saldoBancario>2000.01&&saldoBancario<=3500){
    tarifaBancaria=13;
    tipoConta="ouro"
    
}
if(saldoBancario>3500){
    tarifaBancaria=0;
    tipoConta="premio";
    
}

console.log("esta conta se enquadra na categoria "+ tipoConta);