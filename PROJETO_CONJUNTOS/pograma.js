const elementoA = document.getElementById("idInElementoA");
const elementoB = document.getElementById("idInElementoB");
const saidaConjuntoA = document.getElementById("idOutConjuntoA");
const saidaConjuntoB = document.getElementById("idOutConjuntoB");
const saidaOperacoes = document.getElementById("idOutResultado");
const saidaConjuntoVazio = document.getElementById("idOutConjuntoVazio");

const saidaOperacoes2 = document.getElementById("idOutResultado2");

class Conjunto{

    #conjuntoN = [];

inserir(elemento){
    if(this.#buscar(elemento)===false){
    this.#conjuntoN.push(elemento);
    }
}


#buscar(elemento){
    for(let aux of this.#conjuntoN){
           if(aux==elemento){
            return true;
           }
}
return false;
}

verificarVazio(){
    if(this.#conjuntoN.length==0){
    return  true;
    }else{
        return false;
    }
}

clonarConjunto(){
    let clone = [];
    for(let aux of this.#conjuntoN){
       clone.push(aux)
       
    }

    return clone;
}

UnirVetores(conjuntoB) {
    
    const conjuntoUniao = new Conjunto();
    for(let aux of this.#conjuntoN){
        conjuntoUniao.inserir(aux);
    }
     
    for (let aux of conjuntoB) {
        conjuntoUniao.inserir(aux); 
    }
    if(conjuntoUniao.verificarVazio()===false){
    return conjuntoUniao.clonarConjunto();
     }else{
        return "∅";
     }    
}

verificarIntersecao(conjuntoB) {
    
    const conjuntoIntersecao = new Conjunto();
    for (let aux of conjuntoB) {
        if (this.#buscar(aux)) {
            conjuntoIntersecao.inserir(aux);
        }
    }
    if(conjuntoIntersecao.verificarVazio()===false){
    return conjuntoIntersecao.clonarConjunto();
     }else{
        return "∅";
     }
    

}

subtrairVetores(conjunto) {
    
    let conjuntoSubtracao = new Conjunto();

    for (let aux of conjunto) {
        if (!this.#buscar(aux)) {
            conjuntoSubtracao.inserir(aux);
        }
    }
    if(conjuntoSubtracao.verificarVazio()===false){
    return conjuntoSubtracao.clonarConjunto();
     }else{
        return "∅";
     }
}

verificarSubconjunto(conjunto){
    for( let rin of conjunto){
        if(!this.#buscar(rin)){
            return false;
        }
    }
    return true;
}

verificarIdentidade(conjunto){
if(this.#conjuntoN.length==conjunto.length){
 for( let rin of conjunto){
        if(!this.#buscar(rin)){
            return false;
        }
    }
    return true;
}else{
    return false;
}

}

criarUniaoOrdenada(conjunto){
let ConjuntoOrdenado = new Conjunto();
const num = this.UnirVetores(conjunto)
for (let aux of num){
    ConjuntoOrdenado.inserir(Number(num.sort((a, b) => a - b)));
}
return num;
}

verificarDisjuncao(conjunto){
    if(this.verificarIntersecao(conjunto)==="∅"){
        return true;
    }else{
        return false;
    }
}

gerarProdutoEscalar(conjunto){
if(this.#conjuntoN.length==conjunto.length){
 let indice = 0;
   let index = 0;
   let somador = 0; 
   while (indice<(this.#conjuntoN.length)){
index=0;  
index+=this.#conjuntoN[indice]*conjunto[indice];
somador+=index;
indice++;
}
    return somador;
}else{
    return "CONJUNTOS DE TAMANHO DIFERENTE";
}
}


   calcularMedia(){
let media = 0;
   if(this.#conjuntoN.length == 0) media = 0;
   else{
   
      for( let valor of this.#conjuntoN){
         media += valor;
       
      }
      media = media/this.#conjuntoN.length;

      return media;
   }
   
}

calcularAmplitude(){  
    let maiorElemento = this.#conjuntoN[0];
      for(let valor of this.#conjuntoN){
         if(valor > maiorElemento)  maiorElemento = valor;
      }
      let menorElemento =maiorElemento;
   
      for(let valor of this.#conjuntoN){
         if(valor < menorElemento)  menorElemento = valor;
      }
 
   let amplitude= maiorElemento-menorElemento;
   
   return amplitude;

}
}






const conjuntoA = new Conjunto();
const conjuntoB = new Conjunto();

function acaoVerificarVetorVazio(){
    let saida="";
    if(conjuntoA.verificarVazio()===true){
        saida+="Conjunto A = ∅ \n";
    }
    if(conjuntoB.verificarVazio()===true){
        saida+="Conjunto B = ∅ \n";
    }
    return saida;
}

function acaoMostrarConjuntoA(){ 
conjuntoA.inserir(Number(elementoA.value));


saidaConjuntoA.innerText = conjuntoA.clonarConjunto();
saidaConjuntoVazio.innerText=acaoVerificarVetorVazio();
}

function acaoMostrarConjuntoB(){ 
conjuntoB.inserir(Number(elementoB.value));

saidaConjuntoB.innerText = conjuntoB.clonarConjunto();
saidaConjuntoVazio.innerText=acaoVerificarVetorVazio();
}

/*
function gerarProdutoEscalar(conjuntoUm,conjuntoDois){
if(conjuntoUm.length==conjuntoDois.length){
 let indice = 0;
   let index = 0;
   let somador = 0; 
   while (indice<(conjuntoUm.length)){
index=0;  
index+=conjuntoUm[indice]*conjuntoDois[indice];
somador+=index;
indice++;
}
    return somador;
}else{
    return "CONJUNTOS DE TAMANHO DIFERENTE";
}
}


function calcularAmplitude(conjunto){
   let menorNota=definirMenorElemento(conjunto);
   let maiorNota=definirMaiorElemento(conjunto); 
   let amplitude= maiorNota-menorNota;
   
   return amplitude;

}



function definirMaiorElemento(conjunto){
   let maiorElemento = conjunto[0];
      for(valor of conjunto){
         if(valor > maiorElemento)  maiorElemento = valor;
      }
      return maiorElemento;
   }


function definirMenorElemento(conjunto){
   let menorElemento =definirMaiorElemento(conjunto);
   
      for(valor of conjunto){
         if(valor < menorElemento)  menorElemento = valor;
      }
      return menorElemento;
   }


function calcularMedia(arrayNotas){
let media = 0;
   if(arrayNotas.length == 0) media = 0;
   else{
   
      for(valor of arrayNotas){
         media += valor;
       
      }
      media = media/arrayNotas.length;

      return media;
   }
   
}
*/


function acaoMostrarResultado(numero){
    //hahaha
    
    if(numero==0){
    

    saidaOperacoes.innerText = "UNIÃO DOS CONJUNTOS :"+ conjuntoA.UnirVetores(conjuntoB.clonarConjunto())+"\n";
    
    saidaOperacoes.innerText +="INTERSEÇÃO DOS CONJUNTOS :"+ conjuntoA.verificarIntersecao(conjuntoB.clonarConjunto())+"\n";
    
    saidaOperacoes.innerText +="SUBTRAÇÃO DE A POR B :"+ conjuntoA.subtrairVetores(conjuntoB.clonarConjunto())+"\n";
    
    saidaOperacoes.innerText += "SUBTRAÇÃO DE B POR A :"+conjuntoB.subtrairVetores(conjuntoA.clonarConjunto())+"\n";

    saidaOperacoes.innerText += "CONJUNTO B SUBCONJUNTO DE A :"+conjuntoA.verificarSubconjunto(conjuntoB.clonarConjunto())+"\n";

    saidaOperacoes.innerText += "CONJUNTO A SUBCONJUNTO DE B :"+conjuntoB.verificarSubconjunto(conjuntoA.clonarConjunto())+"\n";

    saidaOperacoes.innerText += "IDENTIDADE DOS CONJUNTOS :"+conjuntoB.verificarIdentidade(conjuntoA.clonarConjunto())+"\n";

    saidaOperacoes.innerText += "DISJUNÇÃO DOS CONJUNTOS :"+conjuntoA.verificarDisjuncao(conjuntoB.clonarConjunto())+"\n";

    saidaOperacoes.innerText += "PRODUTO ESCALAR :"+conjuntoA.gerarProdutoEscalar(conjuntoB.clonarConjunto())+"\n";

    saidaOperacoes.innerText += "MEDIA ARITMÉTICA CONJUNTO A:"+conjuntoA.calcularMedia()+"\n";

    saidaOperacoes.innerText += "MEDIA ARITMÉTICA CONJUNTO B:"+conjuntoB.calcularMedia()+"\n";

    saidaOperacoes.innerText += "AMPLITUDE CONJUNTO A:"+conjuntoA.calcularAmplitude()+"\n";

    saidaOperacoes.innerText += "AMPLITUDE CONJUNTO B:"+conjuntoB.calcularAmplitude()+"\n";

    saidaOperacoes.innerText += "UNIÃO ORDENADA DOS CONJUNTOS :"+conjuntoA.criarUniaoOrdenada(conjuntoB.clonarConjunto())+"\n";



    }
}