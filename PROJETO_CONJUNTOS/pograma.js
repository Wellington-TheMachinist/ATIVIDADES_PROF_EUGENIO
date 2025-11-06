const elementoA = document.getElementById("idInElementoA");
const elementoB = document.getElementById("idInElementoB");
const saidaConjuntoA = document.getElementById("idOutConjuntoA");
const saidaConjuntoB = document.getElementById("idOutConjuntoB");
const saidaOperacoes = document.getElementById("idOutResultado");

class Conjunto{

    #conjuntoN = [];


    
inserir(elemento){
    if(this.#buscar(elemento)===false){
    this.#conjuntoN.push(elemento);
    }
}

//vou tirar o buscar
#buscar(elemento){
    for(let aux of this.#conjuntoN){
           if(aux==elemento){
            return true;
           }
}
return false;
}


verificarVazio(conjunto){
    if(this.#conjuntoN.length==0&&conjunto.length==0){
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


#verificarElementos(elemento) {
    for (let aux of this.#conjuntoN) {
        if (aux === elemento) {
            
            return false;
        }
    }
    
    return true;
}
//apanhando com os conjuntos aqui

UnirVetores(conjuntoB) {
    
    if(this.verificarVazio(conjuntoB)===true){
        return "∅";
    }else{
    
    const conjuntoUniao = new Conjunto();
   
        conjuntoUniao.inserir(this.#conjuntoN);
     
    for (let aux of conjuntoB) {
        if (!this.#buscar(aux)) {
            conjuntoUniao.inserir(aux);
        }
    }
    return conjuntoUniao.clonarConjunto();
}
}

verificarIntersecao(conjuntoB) {
    if(this.verificarVazio(conjuntoB)===true){
        return "∅";
    }else{
    const conjuntoIntersecao = [];
    for (let aux of conjuntoB) {
        if (this.#buscar(aux)) {
            conjuntoIntersecao.push(aux);
        }
    }
    return conjuntoIntersecao;
}
}




subtrairVetores(conjunto) {
    if(this.verificarVazio(conjunto)===true){
        return "∅";
    }else{
    let conjuntoSubtracao = [];

   
    for (let ina of this.#conjuntoN) {
        let contador = 0; 
        for (let aux of conjunto) {
            if (ina === aux) {
                contador+=1; 
            }
        }
        if (contador === 0) {
            conjuntoSubtracao.push(ina);
        }
    }

    return conjuntoSubtracao;
}
}

}

const conjuntoA = new Conjunto();
const conjuntoB = new Conjunto();



function mostrarConjuntoA(){ 
conjuntoA.inserir(Number(elementoA.value));


saidaConjuntoA.innerText = conjuntoA.clonarConjunto();
}

function mostrarConjuntoB(){ 
conjuntoB.inserir(Number(elementoB.value));

saidaConjuntoB.innerText = conjuntoB.clonarConjunto();
}

function mostrarResultado(numero){
    //hahaha
    if(numero==0){
    saidaOperacoes.innerText = "UNIÃO DOS CONJUNTOS :"+ conjuntoA.UnirVetores(conjuntoB.clonarConjunto())+"\n";
    
    saidaOperacoes.innerText +="INTERSEÇÃO DOS CONJUNTOS :"+ conjuntoA.verificarIntersecao(conjuntoB.clonarConjunto())+"\n";
    
    saidaOperacoes.innerText +="SUBTRAÇÃO DE A POR B :"+ conjuntoA.subtrairVetores(conjuntoB.clonarConjunto())+"\n";
    
    saidaOperacoes.innerText += "SUBTRAÇÃO DE B POR A :"+conjuntoB.subtrairVetores(conjuntoA.clonarConjunto())+"\n";
    }
}