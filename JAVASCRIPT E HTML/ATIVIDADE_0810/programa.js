const numero_C = document.getElementById("idInNumero");
const valorComboBox_C = document.getElementById("idInOperacao");
const resultadoC = document.getElementById("idOutResultado");


function verificarOperacao(numero,valorComboBox){
if(valorComboBox==1)return verificarPrimos(Number(numero_C.value));
if(valorComboBox==2)return verificarNumeroPerfeito(numero);
if(valorComboBox==3)return verificarTriangular(numero);
if(valorComboBox==4)return calcularFatorial(numero);
if(valorComboBox==5)return calcularNumeroCaracteristica(numero);





}

function verificarTriangular(numero){
    let valor;
    contador = 1;
    while(contador*(contador+1)*(contador+2)<numero){

        contador++;

        valor=(contador*(contador+1)*(contador+2));
        
    }

    if(valor===numero) return "O numero "+numero+" é triangular";

    else return "O numero "+numero+" não é triangular";
}

function calcularFatorial(numero){
fat=1;
while(numero>=1){
    fat*=numero;
    numero--
}
return "O FATORIAL DE "+numero+" CORRESPONDE A :"+fat;

    }


    function calcularNumeroCaracteristica(){
       
    saida="Os numeros que possuem essa caracteristica :";
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


function verificarPrimos(numero){
    let controle= "";
    let aux;
    
    for(aux=numero;aux>=1;aux--){
      
      if(numero%aux==0){
       controle++;
      }
       
      

    }
    if(controle==2){
        return " O NÚMERO DIGITADO É UM PRIMO "
    }else{
        return "O NÚMERO DIGITADO NÃO É UM PRIMO  ";
    }
}

function verificarNumeroPerfeito(numero){
somaDivisores = 0;
for (divisor = 1;divisor<= numero/2;divisor++){
    if(numero%divisor===0) somaDivisores+=divisor;
}
if (somaDivisores===numero) return "É UM NÚMERO PERFEITO";
else  return "NÃO É UM NÚMERO PERFEITO";
}


function mostrarDados(){
let saida = verificarOperacao(Number(numero_C.value),Number(valorComboBox_C.value))

resultadoC.innerText = saida;

}