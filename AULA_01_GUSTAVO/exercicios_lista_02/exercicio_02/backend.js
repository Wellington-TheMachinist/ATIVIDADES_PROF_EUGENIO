const botao = document.getElementById("botao");
const texto = document.getElementById("texto");
const caixa = document.getElementById("caixa");
let variavel = true;

function mudaVariavel(){
    variavel=!variavel;
}


function mudaCor(){
    
    if(variavel==true){
        mudaVariavel();
        texto.style.color = "black";
       setTimeout(() => { 
         caixa.style.backgroundColor="blue"; }, 1500);
         caixa.value="VOCE CLICOU!!";
         texto.innerText="hahaha";
         
       
    }else{
        mudaVariavel();
         texto.style.color = "white";
         setTimeout(() => { 
         caixa.style.backgroundColor="blueviolet";caixa.value="CLIQUE DE NOVO!!"; }, 1500);
         
         texto.innerText="hehehe";
    }
}

