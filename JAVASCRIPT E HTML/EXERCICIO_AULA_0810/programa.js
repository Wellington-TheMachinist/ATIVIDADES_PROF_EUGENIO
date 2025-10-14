



function calcularNumeroCaracteristica(){
    saida="";
    valor = 1000;

    while(valor<= 9999){
        aux1=Math.trunc(valor/100);
        aux2=valor%100;
        aux3=aux1+aux2;
        aux4=aux3*aux3;

        if(aux4===valor) saida+=valor+" ,";
        valor++

    }
    return saida;
}

function acaoBotaoExecutar(){

    const numero = Number(numero_C.value);
    let  saida = "RESULTADO \n"
    console.log(calcularNumeroCaracteristica());
}
console.log(calcularNumeroCaracteristica());