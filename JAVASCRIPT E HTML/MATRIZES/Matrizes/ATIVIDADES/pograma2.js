class Matriz{
  #qLinhas;
  #qColunas;
  #matriz;

  constructor(qLinhas, qColunas){
    this.#qLinhas = qLinhas;
    this.#qColunas = qColunas;
    this.#matriz = new Array(this.#qLinhas);
    for (let linha = 0; linha < this.#qLinhas; linha++) {
      this.#matriz[linha] = new Array(this.#qColunas); 
    }
  }

  get linhas(){
    return this.#qLinhas;
  }

  get colunas(){
    return this.#qColunas;
  }
    
  
  get matrizDados() {
    return this.#matriz;
  }

  gerarMatrizValoresAleatorios(){
    for (let linha = 0; linha < this.#qLinhas; linha++) {
      for (let coluna = 0; coluna < this.#qColunas; coluna++) {
        this.#matriz[linha][coluna] = Math.floor(Math.random() * 90 + 10); 
      }
    }
  }

  gerarMatrizSoma(dadosMatriz1, dadosMatriz2){
   

 for (let linha = 0; linha < this.#qLinhas; linha++) {
     for (let coluna = 0; coluna < this.#qColunas; coluna++) {
        
        this.#matriz[linha][coluna] = dadosMatriz1[linha][coluna] + dadosMatriz2[linha][coluna];
     }
     }
  }

   mostrarMatriz(){
    let str = "Matriz " + this.#qLinhas + "x" + this.#qColunas + "\n";
    for(let linha = 0; linha < this.#qLinhas; linha++){
      let saida = "";
      for(let coluna = 0; coluna < this.#qColunas; coluna++){
        saida += this.#matriz[linha][coluna] + "  ";
      }
      str += "\n" +saida;
    }
    return str;
  }
}


matrizA = new Matriz(4,3);
console.log(" DADOS DA MATRIZ A ");
console.log("Quantidade de Linhas: " + matrizA.linhas);
console.log("Quantidade de Colunas: " + matrizA.colunas);
matrizA.gerarMatrizValoresAleatorios();
console.log(matrizA.mostrarMatriz());



matrizB = new Matriz(4,3);
console.log("DADOS DA MATRIZ B");
console.log("Quantidade de Linhas: " + matrizB.linhas);
console.log("Quantidade de Colunas: " + matrizB.colunas);
matrizB.gerarMatrizValoresAleatorios();
console.log(matrizB.mostrarMatriz());



matrizC = new Matriz(4,3);
console.log("--- MATRIZ C (RESULTADO DA SOMA) ---");
console.log("Quantidade de Linhas: " + matrizC.linhas);
console.log("Quantidade de Colunas: " + matrizC.colunas);


matrizC.gerarMatrizSoma(matrizA.matrizDados, matrizB.matrizDados);
console.log(matrizC.mostrarMatriz());
