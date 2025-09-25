const valorReaisC = document.getElementById("idInValorReais");
const tipoMoedaC = document.getElementById("idInMoeda");
const saidaValorConvertidoC = document.getElementById("idOutValor");





function converterValor(valor,moeda){
    if(moeda !=1 && moeda!=2 && moeda!=3){
        return "NENHUMA MOEDA VÁLIDA";
    }else{
    
    if(moeda==1){
        
        return valor/5.418;
    }else if(moeda==2){
        
        return valor/6.336;
    }else if(moeda==3){
        
        return valor/5.189;
    }
}
}
 
function definirMoeda(moeda){
    if(moeda !=1 && moeda!=2 && moeda!=3){
        return "NENHUMA MOEDA VÁLIDA";
    }else{
     if(moeda==1){
        
        return "Euro";
    }else if(moeda==2){
        
        return "Libra esterlina";
    }else if(moeda==3){
        
        return "Dólar";
    }
}
}



function retornarValor(){
    saida = "O valor de R$ "+Number(valorReaisC.value)+" convertidos em "+
    definirMoeda(Number(tipoMoedaC.value))+" correspondem a : R$ "+
    converterValor(Number(valorReaisC.value),Number(tipoMoedaC.value));
    

    saidaValorConvertidoC.innerText = saida;
}
