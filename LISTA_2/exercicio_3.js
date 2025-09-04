/*

*/

const taxa = 1;
const aplicacao = 10;
const numMeses = 12;

const valorAcumulado = ((Math.pow((1+taxa),numMeses)-1)/taxa)*aplicacao;

console.log("valor acumulado : " + valorAcumulado);