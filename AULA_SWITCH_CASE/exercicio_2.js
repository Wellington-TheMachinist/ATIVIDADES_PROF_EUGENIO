/*
1. Fazer um algoritmo que converta uma determinada quantia dada em
Reais para uma das seguintes moedas de acordo com a opção do
usuário:

(a) 1 – Euro R$ 6,617;
(b) 2 – Libra Esterlina R$ 6,816;
(c) 3 – Dólar R$ 5,071;
(d) 4 – Iene R$ 3,018.
*/

let opcao = 1;
let quantReais=5;
let moedaEscolhida="";
let valorConvertido;
switch(opcao){
case 1:
moedaEscolhida="Euro";
valorConvertido= (1/6.617)*quantReais;
break;
case 2:
moedaEscolhida="Libra Esterlina";
valorConvertido=(1/6.816)*quantReais;
break;
case 3:
    moedaEscolhida="Dólar";
    valorConvertido=(1/5.071)*quantReais;
break;
case 4:
    moedaEscolhida="Iene";
    valorConvertido=(1/3.018)*quantReais;
break
default:
    moedaEscolhida="nenhuma moeda escolhida";
    valorConvertido=0;
}
console.log("o valor convertido de reais para "+moedaEscolhida+" corresponde a : R$"+valorConvertido);