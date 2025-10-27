
let numero_C = document.getElementById("idInNumero");
let resultado_C = document.getElementById("idOutResultado");



function definirRaizQuadrada(numero){
let variavel=numero;
let controle=1;
let vari=0;

do{
    

variavel-=controle;

controle+=2;

vari++;


}while(variavel>controle+2||(variavel-controle+2>0))

return vari;
}

//console.log(definirRaizQuadrada(16));
//console.log(definirRaizQuadrada(14));

function mostrarInformacao(){

    let saida = " A RAIZ EXATA OU APROXIMADA DE "+Number(numero_C.value)+" CORRESPONDE A : "+
    definirRaizQuadrada(Number(numero_C.value));

    resultado_C.innerText = saida;
}