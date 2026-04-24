class Populacao {
    #qLinhas;
    #qColunas;
    #matriz;
    
    
    constructor(qLinhas, qColunas) {
        this.#qLinhas = qLinhas;
        this.#qColunas = qColunas;
        this.#matriz = new Array(this.#qLinhas);
        for (let linha = 0; linha < this.#qLinhas; linha++) {
            this.#matriz[linha] = new Array(this.#qColunas); 
        }
    }

    get linhas() { 
        return this.#qLinhas; }
    get colunas() { 
        return this.#qColunas; }
    get matriz() {
         return this.#matriz; }

    gerarMatrizValoresAleatorios() {
        for (let linha = 0; linha < this.#qLinhas; linha++) {
            for (let coluna = 0; coluna < this.#qColunas; coluna++) {
                let variavel = Math.random();
                if(variavel<0.5){
                    variavel = 0;
                }else{
                    variavel=1;
                }
                this.#matriz[linha][coluna] = variavel;
            }
        }
        
    }

   
    

    cruzamentoPontoUnico1(pontoCorte) {
    
    
    const descendente = new Populacao(this.#qLinhas, this.#qColunas);

  
    for (let linha = 0; linha < this.#qLinhas - 1; linha++) {
        
        
        const pai1 = this.#matriz[linha];      
        const pai2 = this.#matriz[linha + 1];  
        const filho = descendente.matriz[linha]; 

        
        for (let coluna = 0; coluna < this.#qColunas; coluna++) {
            
            if (coluna < pontoCorte) {
              
                filho[coluna] = pai1[coluna];
            } else {
                
                filho[coluna] = pai2[coluna];
            }
        }
        
    }
    
    
    
    

    return descendente;
}

    

   
    

    mostrarPopulacao() {
       
        let str = "";
        for(let linha = 0; linha < this.#qLinhas; linha++){
            let saida = "";
            for(let coluna = 0; coluna < this.#qColunas; coluna++){
               
                saida += (this.#matriz[linha][coluna])+" "; 
            }
            str += "\n" + saida;
        }
        return str;
    }

    
    

    
    

  
    

    
    

    
    

}

const linhaMatrizA=document.getElementById("linhaMatrizA");
const colunaMatrizA=document.getElementById("colunaMatrizA");




const PopulacaoMostrar=document.getElementById("matrizA");




const saida=document.getElementById("idOutResultado");
const saida2=document.getElementById("idOutPonto");

let PopulacaoUm;
 let pontoCru;



function acaoMostrarDadosMatrizA(){

PopulacaoUm = new Populacao(Number(linhaMatrizA.value), Number(colunaMatrizA.value));
pontoCru = Math.floor(Math.random()*PopulacaoUm.colunas);
while(pontoCru<1||pontoCru==PopulacaoUm.colunas-1){
  pontoCru = Math.floor(Math.random()*PopulacaoUm.colunas);  
}
saida2.innerText = pontoCru;

PopulacaoUm.gerarMatrizValoresAleatorios();
PopulacaoMostrar.innerText = "";
PopulacaoMostrar.innerText += ("DADOS DA MATRIZ A\n");
PopulacaoMostrar.innerText +=("Quantidade de Linhas: " + PopulacaoUm.linhas+"\n");
PopulacaoMostrar.innerText +=("Quantidade de Colunas: " + PopulacaoUm.colunas+"\n");
PopulacaoMostrar.innerText +=(PopulacaoUm.mostrarPopulacao());


}






function acaoMostrarMatrizSoma(){
saida.innerText ="";

saida.innerText +="DESCENDENTE 1 :"+  (PopulacaoUm.cruzamentoPontoUnico1(pontoCru).mostrarPopulacao())+"\n";
//saida.innerText +="DESCENDENTE 2 :"+  (PopulacaoUm.cruzamentoPontoUnico(1,0).mostrarPopulacao())+"\n";
saida.innerText +="\n";

}



