/*
6. Um posto de combustível vende três tipos de combustível :
álcool, diesel e gasolina. O preço por litro de combustível é
apresentado na tabela a seguir. Faça um algoritmo que leia
uma opção que representa o tipo de combustível comprado
(1, 2 ou 3) e a quantidade em litros. O programa deve imprimir
o valor em reais a ser pago pelo combustível.

Combustível Preço por Litro
1 – Álcool R$ 4,805
2 – Diesel R$ 5,953
3 – Gasolina R$ 6,565
*/

let escolha = "gasolina";

let quantLitros = 5;
 
const alcool = 4.805;
const diesel = 5.953;
const gasolina = 6.565;

if(escolha=="alcool"){
console.log("o valor a ser pago por "+quantLitros+ " litros de alcool será de : R$"+quantLitros*alcool);
}if(escolha=="diesel"){
console.log("o valor a ser pago por "+quantLitros+ " litros de diesel será de : R$"+quantLitros*diesel);
}if(escolha=="gasolina"){
console.log("o valor a ser pago por "+quantLitros+ " litros de gasolina será de : R$"+quantLitros*gasolina);
}