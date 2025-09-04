/*
2. Elabore um algoritmo que calcule o valor a ser pago por um produto
considerando o preço normal de etiqueta e a escolha da condição
de pagamento. Utilize os códigos da tabela a seguir para saber qual
a condição de pagamento escolhida e efetuar o cálculo adequado.

3. Elabore um algoritmo que leia dois números inteiros e a operação
aritmética desejada; calcule, então, a resposta adequada. Utilize os
símbolos da tabela a seguir para saber qual a operação aritmética
escolhida.
Código Condição Pagamento
1 À vista, dinheiro ou cheque, 10% de desconto
2 À vista, cartão de credito, 5% de desconto
3 Em 2 vezes, preço normal da etiqueta sem juros
4 Em 3 vezes, preço normal da etiqueta + 10% de juros
*/

let valorASerPago;
let valorNormal=40.00;
let condicaoPagamento= 1;
let strcondicaoPagamento;

switch(condicaoPagamento){
case 1:
    valorASerPago=valorNormal-(valorNormal*0.1);
    strcondicaoPagamento = "À vista, dinheiro ou cheque, 10% de desconto";
break;
case 2:
    valorASerPago=valorNormal-(valorNormal*0.05);
    strcondicaoPagamento = "2 À vista, cartão de credito, 5% de desconto";
break;
case 3:
    valorASerPago=valorNormal;
    strcondicaoPagamento = "3 Em 2 vezes, preço normal da etiqueta sem juros";
break;
case 4:
    valorASerPago=valorNormal+(valorNormal*0.1);
    strcondicaoPagamento = "4 Em 3 vezes, preço normal da etiqueta + 10% de juros";
break;
default:
    valorASerPago=0;
    strcondicaoPagamento = "não foi escolhida uma condição de pagamento válida.";
}

console.log("o valor a ser pago será de R$: "+valorASerPago+" com a condição de pagamento : "+strcondicaoPagamento);