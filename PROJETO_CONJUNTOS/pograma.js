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

//verificarDisjuncao(conjunto){
  //  if(verificarIntersecao(conjunto)==="∅"){
    //    return true
    //}else{
     //   return false
    //}
//}

}

const conjuntoA = new Conjunto();
const conjuntoB = new Conjunto();

function verificarVetorVazio(){
    let saida="";
    if(conjuntoA.verificarVazio()===true){
        saida+="Conjunto A = ∅ \n";
    }
    if(conjuntoB.verificarVazio()===true){
        saida+="Conjunto B = ∅ \n";
    }
    return saida;
}

function mostrarConjuntoA(){ 
conjuntoA.inserir(Number(elementoA.value));


saidaConjuntoA.innerText = conjuntoA.clonarConjunto();
saidaConjuntoVazio.innerText=verificarVetorVazio();
}

function mostrarConjuntoB(){ 
conjuntoB.inserir(Number(elementoB.value));

saidaConjuntoB.innerText = conjuntoB.clonarConjunto();
saidaConjuntoVazio.innerText=verificarVetorVazio();
}

function mostrarResultado(numero){
    //hahaha
    
    if(numero==0){
    

    saidaOperacoes.innerText = "UNIÃO DOS CONJUNTOS :"+ conjuntoA.UnirVetores(conjuntoB.clonarConjunto())+"\n";
    
    saidaOperacoes.innerText +="INTERSEÇÃO DOS CONJUNTOS :"+ conjuntoA.verificarIntersecao(conjuntoB.clonarConjunto())+"\n";
    
    saidaOperacoes.innerText +="SUBTRAÇÃO DE A POR B :"+ conjuntoA.subtrairVetores(conjuntoB.clonarConjunto())+"\n";
    
    saidaOperacoes.innerText += "SUBTRAÇÃO DE B POR A :"+conjuntoB.subtrairVetores(conjuntoA.clonarConjunto())+"\n";

    saidaOperacoes.innerText += "CONJUNTO B SUBCONJUNTO DE A :"+conjuntoA.verificarSubconjunto(conjuntoB.clonarConjunto())+"\n";

    saidaOperacoes.innerText += "CONJUNTO A SUBCONJUNTO DE B :"+conjuntoB.verificarSubconjunto(conjuntoA.clonarConjunto())+"\n";

    saidaOperacoes.innerText += "IDENTIDADE DOS CONJUNTOS :"+conjuntoB.verificarIdentidade(conjuntoA.clonarConjunto())+"\n";

    saidaOperacoes2.innerText = "DISJUNÇÃO DOS CONJUNTOS :"+conjuntoB.verificarDisjuncao(conjuntoA.clonarConjunto())+"\n";

    saidaOperacoes2.innerText += "DIhdhgkhiskhuidunDOS CONJUNTOS :"+conjuntoB.verificarDisjuncao(conjuntoA.clonarConjunto())+"\n";



    }
}