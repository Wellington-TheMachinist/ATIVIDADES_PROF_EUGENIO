/*
3. Um fabricante de latas deseja desenvolver um programa para
calcular o custo de uma lata cilíndrica de alumínio. O custo do
alumínio é R$ 155,00 por m2. Dados de Entrada: raio e altura
da lata (em metros). Área da lata = área da base(π * raio2 * 2)
*/


const precoAluminio = 155.00;
let raioLata = 0.25;
let altura = 0.15;

const areaDaLata = Math.PI*(Math.pow(raioLata,2))+ 2*Math.PI*raioLata*altura;

console.log("O valor de uma lata de aluminio é : R$" + areaDaLata * precoAluminio);