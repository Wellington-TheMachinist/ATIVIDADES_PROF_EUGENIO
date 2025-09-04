/*
3. Elabore um algoritmo que leia dois números inteiros e a operação
aritmética desejada; calcule, então, a resposta adequada. Utilize os
símbolos da tabela a seguir para saber qual a operação aritmética
escolhida.

Símbolo Operação Aritmética
+ Adição
- Subtração
* Multiplicação
/ Divisão
*/

let numUm = 3;
let numDois = 5;

let escolha = 1;
let strescolha = "";
let resultado;

switch(escolha){
    case 1:
        strescolha = "Adição";
        resultado = numDois+numDois;
        break
        case 2:
            strescolha = "Subtração";
            resultado = numUm-numDois;
            break
            case 3:
                strescolha = "Multiplicação";
                resultado = numUm*numDois;
                case 4:
                    strescolha = "Divisão";
                    resultado = numUm/numDois;
                    break
                    default:
                        strescolha = "nenhuma operação detectada";
                        resultado = 0;

}
console.log(" A operação de "+strescolha)