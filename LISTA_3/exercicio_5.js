
/*
5. O custo ao consumidor de um carro novo é a soma do custo
de fábrica com a percentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que a percentagem
do distribuidor seja de 12% do preço de fábrica e os
impostos de 30% do preço de fábrica, fazer um programa
para ler o custo de fábrica de um carro e imprimir o custo ao
consumidor.
*/

let custoAoConsumidor ;
let custoFabrica = 50000;

let imposto = custoFabrica*0.3;
let percentDistribuidor = custoFabrica*0.12;

custoAoConsumidor = custoFabrica+imposto+percentDistribuidor;

console.log(" O CUSTO AO CONSUMIDOR SERÁ DE : R$"+custoAoConsumidor);