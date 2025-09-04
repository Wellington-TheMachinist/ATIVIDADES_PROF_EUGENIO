/*
3. O número 3025 possui a seguinte característica:

• 30 + 25 = 55
• 552 = 3025

Fazer um algoritmo que leia um número inteiro de 4 dígitos e
calcule se este tem a característica descrita acima.
Obs.: Usuário ideal - ele não irá digitar valores incorretos.
*/



let numero = 3025;

console.log(Math.trunc(numero/100));
console.log(numero%100);
console.log((Math.trunc(numero/100))+(numero%100));

if(numero == Math.pow((Math.trunc(numero/100))+(numero%100),2)){
    console.log("O numero " +numero+ " digitado possui a característica descrita");

}
if(numero != Math.pow((Math.trunc(numero/100))+(numero%100),2)){
    console.log("O numero " + numero + " digitado não possui a característica descrita");
    
}