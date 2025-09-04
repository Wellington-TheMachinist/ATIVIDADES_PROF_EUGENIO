/*
1. Dados os pontos A e B, cujas coordenadas A(x1,y1) e B (x2,y2)
serão informadas via teclado, desenvolver um programa que
calcule a distância entre A e B.
Onde a distancia = raiz quadrada( (x2 - x1)2 + (y2 - y1)2 )

*/

const x1 = 4;
const y1 = 4;
const x2 = 5;
const y2 = 4;

const distancia = Math.sqrt((Math.pow((x2 - x1),2)+Math.pow((y2 - y1),2)));

console.log("A distancia corresponde a :" + distancia);