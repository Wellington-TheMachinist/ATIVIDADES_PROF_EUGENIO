const quantcomb=250;
const tipocomb=8;
let strCombustivel="";
let  valorPago=0;
switch(tipocomb){
    case 1:
        strCombustivel="alcool";
        valorPago=quantcomb*4.805;
        break;
        case 2:
            strCombustivel="diesel";
            valorPago=quantcomb*5.953;
            break;
            case 3:
                strCombustivel="gasolina";
                valorPago=quantcomb*6.565;
                break;
                default:
                    strCombustivel="tipo de combusível errado";
                    valorPago=0;


}
const saida = "tipo de combustível"+strCombustivel;
const saida2 = "valor a ser pago : R$"+valorPago;

console.log(saida+"\n"+saida2);
