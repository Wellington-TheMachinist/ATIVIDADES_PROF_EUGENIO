/*
2. Escrever um programa que lê o público total de um jogo de
futebol e forneça a renda total do jogo, sabendo-se que havia
4 tipos de ingressos assim distribuídos: popular - 10% a
R$5,00, geral - 50% a R$10,00, arquibancada - 30% a
R$20,00 e cadeiras - 10% a R$40,00.
*/
let quantTotalVendida = 850;

let popular = quantTotalVendida*0.10 * 5;
let geral = quantTotalVendida*0.50 * 10;
let arquibancada = quantTotalVendida*0.30 * 20;
let cadeiras = quantTotalVendida*0.10 * 40;

let rendaTotal = popular+geral+arquibancada+cadeiras;


console.log("A RENDA TOTAL DO JOGO FOI DE R$ : "+ rendaTotal );