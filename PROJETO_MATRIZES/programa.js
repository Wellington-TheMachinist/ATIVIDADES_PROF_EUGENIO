class Matriz {
    #qLinhas;
    #qColunas;
    #matriz;
    
    // Construtor está perfeito!
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
                this.#matriz[linha][coluna] = Math.floor(Math.random() * 90 + 10);
            }
        }
        
    }

   
    somar(outraMatriz) {
       
        const matrizSoma = new Matriz(this.#qLinhas, this.#qColunas);

        const dadosOutraMatriz = outraMatriz.matriz;
        
        for (let linha = 0; linha < this.#qLinhas; linha++) {
            for (let coluna = 0; coluna < this.#qColunas; coluna++) {
               
                matrizSoma.matriz[linha][coluna] = this.#matriz[linha][coluna] + dadosOutraMatriz[linha][coluna];
            }
        }
        return matrizSoma;
    }

   
    subtrair(outraMatriz) {
       

        const matrizSubtracao = new Matriz(this.#qLinhas, this.#qColunas);
        
        const dadosOutraMatriz = outraMatriz;
        
        for (let linha = 0; linha < this.#qLinhas; linha++) {
            for (let coluna = 0; coluna < this.#qColunas; coluna++) {
               
                matrizSubtracao.matriz[linha][coluna] = this.#matriz[linha][coluna] - dadosOutraMatriz[linha][coluna];
            }
        }
        return matrizSubtracao; 
    }

    mostrarMatriz() {
       
        let str = "Matriz " + this.#qLinhas + "x" + this.#qColunas + "\n";
        for(let linha = 0; linha < this.#qLinhas; linha++){
            let saida = "";
            for(let coluna = 0; coluna < this.#qColunas; coluna++){
               
                saida += (this.#matriz[linha][coluna])+" "; 
            }
            str += "\n" + saida;
        }
        return str;
    }

    
    transpor() {
        
        const novasLinhas = this.#qColunas;
        const novasColunas = this.#qLinhas;

        
        const matrizTransposta = new Matriz(novasLinhas, novasColunas);

        for (let linhaOriginal = 0; linhaOriginal < this.#qLinhas; linhaOriginal++) {
            for (let colunaOriginal = 0; colunaOriginal < this.#qColunas; colunaOriginal++) {
                
                 matrizTransposta.matriz[colunaOriginal][linhaOriginal] = this.#matriz[linhaOriginal][colunaOriginal];
            }
        }
        return matrizTransposta;
    }

    verificarIdentidade() {
       
        if (this.#qLinhas !== this.#qColunas) {
          
            return false;
        }

        const tamanho = this.#qLinhas; 

        for (let linha = 0; linha < tamanho; linha++) {
            for (let coluna = 0; coluna < tamanho; coluna++) {
                
               
                
                if (linha === coluna) {
                   
                    if (this.#matriz[linha][coluna] !== 1) {
                        return false; 
                    }
                } else {
                   
                    if (this.#matriz[linha][coluna] !== 0) {
                        return false; 
                    }
                }
            }
        }

        
        return true;
    }
    

    verificarTriangularSuperior() {
       
        if (this.#qLinhas !== this.#qColunas) {
            return false;
        }

        const tamanho = this.#qLinhas;

        for (let linha = 0; linha < tamanho; linha++) {
            for (let coluna = 0; coluna < tamanho; coluna++) {
                
               
                if (linha > coluna) {
                   
                    if (this.#matriz[linha][coluna] !== 0) {
                        return false; 
                    }
                }
            }
        }
        
        
        return true;
    }
    

    verificarTriangularInferior() {
       
        if (this.#qLinhas !== this.#qColunas) {
            return false;
        }

        const tamanho = this.#qLinhas;

        for (let linha = 0; linha < tamanho; linha++) {
            for (let coluna = 0; coluna < tamanho; coluna++) {
                
                
                if (linha < coluna) {
                    
                    if (this.#matriz[linha][coluna] !== 0) {
                        return false; 
                    }
                }
            }
        }

       
        return true;
    }
    

    verificarSimetrica() {
        
        if (this.#qLinhas !== this.#qColunas) {
           
            return false;
        }

        const tamanho = this.#qLinhas; 

       
        for (let linha = 0; linha < tamanho; linha++) {
            
            for (let coluna = 0; coluna < tamanho; coluna++) {
                
                
                if (this.#matriz[linha][coluna] !== this.#matriz[coluna][linha]) {
                   
                    return false; 
                }
            }
        }

        
        return true;
    }
    

}

const linhaMatrizA=document.getElementById("linhaMatrizA");
const colunaMatrizA=document.getElementById("colunaMatrizA");

const linhaMatrizB=document.getElementById("linhaMatrizB");
const colunaMatrizB=document.getElementById("colunaMatrizB");


const matrizA_C=document.getElementById("matrizA");
const matrizB_C=document.getElementById("matrizB");

const matrizA_T=document.getElementById("idOutA_T");
const matrizB_T=document.getElementById("idOutB_T");

const saida=document.getElementById("idOutResultado");

let matrizA;
let matrizB; 


function acaoMostrarDadosMatrizA(){

matrizA = new Matriz(Number(linhaMatrizA.value), Number(colunaMatrizA.value));


matrizA.gerarMatrizValoresAleatorios();
matrizA_C.innerText = "";
matrizA_C.innerText += ("DADOS DA MATRIZ A\n");
matrizA_C.innerText +=("Quantidade de Linhas: " + matrizA.linhas+"\n");
matrizA_C.innerText +=("Quantidade de Colunas: " + matrizA.colunas+"\n");
matrizA_C.innerText +=(matrizA.mostrarMatriz()+"\n");
matrizA_C.innerText +=("MATRIZ IDENTIDADE : "+matrizA.verificarIdentidade()+"\n");
matrizA_C.innerText +=("SIMÉTRICA : "+matrizA.verificarSimetrica()+"\n");
matrizA_C.innerText +=("TRIANGULAR INFERIOR : "+matrizA.verificarTriangularInferior()+"\n");
matrizA_C.innerText +=("TRIANGULAR SUPERIOR : "+matrizA.verificarTriangularSuperior()+"\n");



}

function acaoMostrarDadosMatrizB(){

matrizB = new Matriz(Number(linhaMatrizB.value), Number(colunaMatrizB.value));

matrizB.gerarMatrizValoresAleatorios();
matrizB_C.innerText = "";
matrizB_C.innerText += ("DADOS DA MATRIZ B\n");
matrizB_C.innerText +=("Quantidade de Linhas: " + matrizB.linhas+"\n");
matrizB_C.innerText +=("Quantidade de Colunas: " + matrizB.colunas+"\n");
matrizB_C.innerText +=(matrizB.mostrarMatriz())+"\n";
matrizB_C.innerText +=("MATRIZ IDENTIDADE : "+matrizB.verificarIdentidade()+"\n");
matrizB_C.innerText +=("SIMÉTRICA : "+matrizB.verificarSimetrica()+"\n");
matrizB_C.innerText +=("TRIANGULAR INFERIOR : "+matrizB.verificarTriangularInferior()+"\n");
matrizB_C.innerText +=("TRIANGULAR SUPERIOR : "+matrizB.verificarTriangularSuperior()+"\n");



}

function acaoMostrarTranspostaA(){
saida.innerText ="";    
saida.innerText +="MATRIZ A TRANSPOSTA : \n";
saida.innerText +=(matrizA.transpor().mostrarMatriz())+"\n";
saida.innerText +="\n";
saida.innerText +=("MATRIZ IDENTIDADE : "+matrizA.transpor().verificarIdentidade()+"\n");
saida.innerText +=("SIMÉTRICA : "+matrizA.transpor().verificarSimetrica()+"\n");
saida.innerText +=("TRIANGULAR INFERIOR : "+matrizA.transpor().verificarTriangularInferior()+"\n");
saida.innerText +=("TRIANGULAR SUPERIOR : "+matrizA.transpor().verificarTriangularSuperior()+"\n");

}

function acaoMostrarTranspostaB(){
saida.innerText ="";    
saida.innerText +="MATRIZ B TRANSPOSTA : \n";
saida.innerText +=(matrizB.transpor().mostrarMatriz())+"\n";
saida.innerText +="\n";
saida.innerText +=("MATRIZ IDENTIDADE : "+matrizB.transpor().verificarIdentidade()+"\n");
saida.innerText +=("SIMÉTRICA : "+matrizB.transpor().verificarSimetrica()+"\n");
saida.innerText +=("TRIANGULAR INFERIOR : "+matrizB.transpor().verificarTriangularInferior()+"\n");
saida.innerText +=("TRIANGULAR SUPERIOR : "+matrizB.transpor().verificarTriangularSuperior()+"\n");
}

function acaoMostrarMatrizSoma(){
saida.innerText ="";
saida.innerText +="SOMA MATRIZES : \n";
saida.innerText +=(matrizA.somar(matrizB).mostrarMatriz())+"\n";
saida.innerText +="\n";
saida.innerText +=("MATRIZ IDENTIDADE : "+matrizA.somar(matrizB).verificarIdentidade()+"\n");
saida.innerText +=("SIMÉTRICA : "+matrizA.somar(matrizB).verificarSimetrica()+"\n");
saida.innerText +=("TRIANGULAR INFERIOR : "+matrizA.somar(matrizB).verificarTriangularInferior()+"\n");
saida.innerText +=("TRIANGULAR SUPERIOR : "+matrizA.somar(matrizB).verificarTriangularSuperior()+"\n");

}

function acaoMostrarMatrizSubtracao(){
saida.innerText ="";
saida.innerText +="SUBTRAÇÃO DE MATRIZES : \n";
saida.innerText +=(matrizA.subtrair(matrizB.matriz).mostrarMatriz())+"\n";
saida.innerText +=("MATRIZ IDENTIDADE : "+matrizA.subtrair(matrizB.matriz).verificarIdentidade()+"\n");
saida.innerText +=("SIMÉTRICA : "+matrizA.subtrair(matrizB.matriz).verificarSimetrica()+"\n");
saida.innerText +=("TRIANGULAR INFERIOR : "+matrizA.subtrair(matrizB.matriz).verificarTriangularInferior()+"\n");
saida.innerText +=("TRIANGULAR SUPERIOR : "+matrizA.subtrair(matrizB.matriz).verificarTriangularSuperior()+"\n");
saida.innerText +="\n";
}

function acaoMostrarMatrizTranspostaSoma(){
saida.innerText ="";    
saida.innerText +="SOMA MATRIZES : \n";
saida.innerText +=(matrizA.transpor().somar(matrizB.transpor()).mostrarMatriz())+"\n";
saida.innerText +=("MATRIZ IDENTIDADE : "+matrizA.transpor().somar(matrizB.transpor()).verificarIdentidade()+"\n");
saida.innerText +=("SIMÉTRICA : "+matrizA.transpor().somar(matrizB.transpor()).verificarSimetrica()+"\n");
saida.innerText +=("TRIANGULAR INFERIOR : "+matrizA.transpor().somar(matrizB.transpor()).verificarTriangularInferior()+"\n");
saida.innerText +=("TRIANGULAR SUPERIOR : "+matrizA.transpor().somar(matrizB.transpor()).verificarTriangularSuperior()+"\n");
saida.innerText +="\n";
}
