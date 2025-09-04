/*

5. Desenvolver um algoritmo que leia os coeficientes (A, B e C)
de uma equação do segundo grau ( Ax2 + Bx + C = 0) e que
calcule suas raízes. O algoritmo deve mostrar, quando
possível, o valor das raízes calculadas e a classificação das
mesmas: “RAÍZES IMAGINÁRIAS”, “RAIZ ÚNICA” ou “RAÍZES
DISTINTAS”.
Obs.: Usuário ideal - ele não irá digitar valores incorretos.

*/

let A=5;
let B=3;
let C=10;

let delta = Math.pow(B,2)-4*A*C;


if(delta<0){

    console.log(" Raízes imaginárias");
}
if(delta==0){

    console.log(" Raíz única");
}
if(delta>0){

    console.log(" Raízes distintas");
}