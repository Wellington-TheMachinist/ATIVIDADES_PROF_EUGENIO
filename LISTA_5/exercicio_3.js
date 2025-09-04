/*
3. Fazer um algoritmo que leia três valores valorA, valorB, e
valorC. O programa deve verificar se estes valores formam um
triângulo. Formando um triângulo dizer se ele é equilátero,
isósceles ou escaleno. Obs.: Usuário ideal - ele não irá digitar
valores incorretos.
*/

let A = 4;
let B = 25;
let C = 7;

if(A+B>C&&A+C>B&&B+C>A){

    if(A==B&&A==C){
        console.log("O Triângulo é Equilatero");
    }else if(A==B||B==C||C==A){
        console.log("O Triângulo é Isosceles");
    }else if(A!=B&&B!=C&&C!=A){
        console.log("O Triângulo é Escaleno");
    }

}else{
    console.log("Não é possível formar um triangulo com esses valores")
}