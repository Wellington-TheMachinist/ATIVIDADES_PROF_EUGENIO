let numero1_C=document.getElementById("idInNumeroUm");
let numero2_C=document.getElementById("idInNumeroDois");
let resultado_C=document.getElementById("idOutResultado");



function definirQuociente(numero1,numero2){
let numero=numero1;
let subtracoes=0;
while(numero>=numero2){
    numero-=numero2;

subtracoes++;
}
return subtracoes;

}

function definirResto(numero1,numero2){
let numero=numero1;
let vari=0;
while(numero>=numero2){
    numero-=numero2;


}
return numero;

}


function mostrarInformacao(){

let saida = "O resto de "+Number(numero1_C.value)+"/"+ Number(numero2_C.value)+" corresponde a : "+
definirResto(Number(numero1_C.value),Number(numero2_C.value))+"\n , enquanto o quociente corresponde a :"+
definirQuociente(Number(numero1_C.value),Number(numero2_C.value));

resultado_C.innerText = saida;
}

//console.log(definirQuociente(num1,num2));
//console.log(definirResto(num1,num2));