/*
5. Elabore um algoritmo que calcule o valor a ser pago por um
produto considerando o preço normal de etiqueta e a escolha
da condição de pagamento. Utilize os códigos da tabela a
seguir para saber qual a condição de pagamento escolhida e
efetuar o cálculo adequado.

Código Condição Pagamento
1 À vista, dinheiro ou cheque, 10% de desconto
2 À vista, cartão de credito, 5% de desconto
3 Em 2 vezes, preço normal da etiqueta sem juros
4 Em 3 vezes, preço normal da etiqueta + 10% de juros
*/

let valorPago = 5000;

const um = valorPago-valorPago*0.1;
const dois = valorPago-valorPago*0.05;
const tres = valorPago;
const quatro = valorPago+valorPago*0.1;

console.log("caso escolha pagar através da opção 1, o valor corresponderá a: "+um);
console.log("caso escolha pagar através da opção 2, o valor corresponderá a: "+dois);
console.log("caso escolha pagar através da opção 3, o valor corresponderá a: "+tres);
console.log("caso escolha pagar através da opção 4, o valor corresponderá a: "+quatro);
