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

    get linhas() { return this.#qLinhas; }
    get colunas() { return this.#qColunas; }
    get matriz() { return this.#matriz; } // Nome 'matriza' ajustado para 'dados' seria melhor, mas mantive o seu.
///aqui aqui
    gerarMatrizValoresAleatorios() {
        for (let linha = 0; linha < this.#qLinhas; linha++) {
            for (let coluna = 0; coluna < this.#qColunas; coluna++) {
                this.#matriz[linha][coluna] = Math.floor(Math.random() * 90 + 10);
            }
        }
    }

    // ⭐ MÉTODO CORRIGIDO: Retorna uma nova instância Matriz
    somar(outraMatriz) {
        // 1. Cria a nova Matriz resultado (inicializada)
        const matrizSoma = new Matriz(this.#qLinhas, this.#qColunas);

        const dadosOutraMatriz = outraMatriz.matriz;
        
        for (let linha = 0; linha < this.#qLinhas; linha++) {
            for (let coluna = 0; coluna < this.#qColunas; coluna++) {
                // 2. Preenche a matriz interna do novo objeto 'matrizSoma'
                matrizSoma.matriz[linha][coluna] = this.#matriz[linha][coluna] + dadosOutraMatriz[linha][coluna];
            }
        }
        return matrizSoma; // 3. Retorna a nova matriz
    }

    // ⭐ MÉTODO CORRIGIDO: Retorna uma nova instância Matriz
    subtrair(outraMatriz) {
        // 1. Cria a nova Matriz resultado (inicializada)
        const matrizSubtracao = new Matriz(this.#qLinhas, this.#qColunas);
        
        const dadosOutraMatriz = outraMatriz;
        
        for (let linha = 0; linha < this.#qLinhas; linha++) {
            for (let coluna = 0; coluna < this.#qColunas; coluna++) {
                // 2. Preenche a matriz interna do novo objeto 'matrizSubtracao'
                matrizSubtracao.matriz[linha][coluna] = this.#matriz[linha][coluna] - dadosOutraMatriz[linha][coluna];
            }
        }
        return matrizSubtracao; // 3. Retorna a nova matriz
    }

    mostrarMatriz() {
        // ... (método mostrarMatriz inalterado)
        let str = "Matriz " + this.#qLinhas + "x" + this.#qColunas + "\n";
        for(let linha = 0; linha < this.#qLinhas; linha++){
            let saida = "";
            for(let coluna = 0; coluna < this.#qColunas; coluna++){
                // Usando padStart para alinhar números de 2 dígitos
                saida += String(this.#matriz[linha][coluna]).padStart(3) + " "; 
            }
            str += "\n" + saida;
        }
        return str;
    }

    // Dentro da class Matriz { ...
    
    // ⭐ NOVO MÉTODO: Retorna uma nova instância Matriz Transposta
    transpor() {
        // As novas dimensões são invertidas: a coluna da original se torna a linha da transposta.
        const novasLinhas = this.#qColunas;
        const novasColunas = this.#qLinhas;

        // 1. Cria a nova Matriz resultado (inicializada) com as dimensões invertidas
        const matrizTransposta = new Matriz(novasLinhas, novasColunas);

        for (let linhaOriginal = 0; linhaOriginal < this.#qLinhas; linhaOriginal++) {
            for (let colunaOriginal = 0; colunaOriginal < this.#qColunas; colunaOriginal++) {
                
                // 2. Transposição: Acessa o elemento da original e inverte os índices para atribuir na nova.
                // Elemento da posição [i][j] da original vai para [j][i] da transposta.
                matrizTransposta.matriz[colunaOriginal][linhaOriginal] = this.#matriz[linhaOriginal][colunaOriginal];
            }
        }
        return matrizTransposta;
    }

    // Dentro da class Matriz { ...
    
    // ⭐ NOVO MÉTODO: Verifica se a matriz é de identidade
    verificarIdentidade() {
        // 1. Verificar se é Matriz Quadrada
        if (this.#qLinhas !== this.#qColunas) {
            // Matriz identidade deve ser sempre quadrada
            return false;
        }

        const tamanho = this.#qLinhas; 

        for (let linha = 0; linha < tamanho; linha++) {
            for (let coluna = 0; coluna < tamanho; coluna++) {
                
                // 2. e 3. Verificar elementos da Matriz
                
                if (linha === coluna) {
                    // Condição 2: Se está na diagonal (i == j), o elemento deve ser 1
                    if (this.#matriz[linha][coluna] !== 1) {
                        return false; 
                    }
                } else {
                    // Condição 3: Se está fora da diagonal (i != j), o elemento deve ser 0
                    if (this.#matriz[linha][coluna] !== 0) {
                        return false; 
                    }
                }
            }
        }

        // Se o loop terminou sem retornar false, todas as condições foram atendidas.
        return true;
    }
    
// ... }
// Dentro da class Matriz { ...
    
    // ⭐ NOVO MÉTODO: Verifica se a matriz é triangular superior
    verificarTriangularSuperior() {
        // 1. Deve ser quadrada
        if (this.#qLinhas !== this.#qColunas) {
            return false;
        }

        const tamanho = this.#qLinhas;

        for (let linha = 0; linha < tamanho; linha++) {
            for (let coluna = 0; coluna < tamanho; coluna++) {
                
                // A condição para estar ABAIXO da diagonal principal é (linha > coluna)
                if (linha > coluna) {
                    // Se o elemento abaixo da diagonal não for zero, ela não é triangular superior
                    if (this.#matriz[linha][coluna] !== 0) {
                        return false; 
                    }
                }
            }
        }
        
        // Se todos os elementos abaixo da diagonal são zero.
        return true;
    }
    
// ... }
// Dentro da class Matriz { ...
    
    // ⭐ NOVO MÉTODO: Verifica se a matriz é triangular inferior
    verificarTriangularInferior() {
        // 1. Deve ser quadrada
        if (this.#qLinhas !== this.#qColunas) {
            return false;
        }

        const tamanho = this.#qLinhas;

        for (let linha = 0; linha < tamanho; linha++) {
            for (let coluna = 0; coluna < tamanho; coluna++) {
                
                // A condição para estar ACIMA da diagonal principal é (linha < coluna)
                if (linha < coluna) {
                    // Se o elemento acima da diagonal não for zero, ela não é triangular inferior
                    if (this.#matriz[linha][coluna] !== 0) {
                        return false; 
                    }
                }
            }
        }

        // Se todos os elementos acima da diagonal são zero.
        return true;
    }
    
// ... }
// Dentro da class Matriz { ...
    
    // ⭐ NOVO MÉTODO: Verifica se a matriz é simétrica
    verificarSimetrica() {
        // 1. Verificar se é Matriz Quadrada
        if (this.#qLinhas !== this.#qColunas) {
            // A matriz simétrica deve ser sempre quadrada.
            return false;
        }

        const tamanho = this.#qLinhas; 

        // 2. Verificar a Simetria dos Elementos
        for (let linha = 0; linha < tamanho; linha++) {
            // Para otimizar, você só precisa percorrer a metade superior ou inferior
            // da matriz (coluna = linha + 1). No entanto, percorrer toda a matriz 
            // e checar i,j e j,i é mais simples e seguro.
            for (let coluna = 0; coluna < tamanho; coluna++) {
                
                // Comparar o elemento A[i][j] com o seu espelho A[j][i]
                if (this.#matriz[linha][coluna] !== this.#matriz[coluna][linha]) {
                    // Se encontrar qualquer par que não seja igual, a matriz não é simétrica.
                    return false; 
                }
            }
        }

        // Se o loop terminou sem retornar false, a matriz é simétrica.
        return true;
    }
    
// ... }


    
// ... }
}



matrizA = new Matriz(4, 3);
console.log("DADOS DA MATRIZ A");
console.log("Quantidade de Linhas: " + matrizA.linhas);
console.log("Quantidade de Colunas: " + matrizA.colunas);
matrizA.gerarMatrizValoresAleatorios();
console.log(matrizA.mostrarMatriz());

matrizB = new Matriz(4, 3);
console.log("DADOS DA MATRIZ B");
console.log("Quantidade de Linhas: " + matrizB.linhas);
console.log("Quantidade de Colunas: " + matrizB.colunas);
matrizB.gerarMatrizValoresAleatorios();
console.log(matrizB.mostrarMatriz());

// ⭐️ NOVA MATRIZ PARA A SOMA
const matrizSoma = matrizA.somar(matrizB);
console.log("\nSOMA DAS MATRIZES A + B:");
console.log(matrizSoma.mostrarMatriz());

// ⭐️ NOVA MATRIZ PARA A SUBTRAÇÃO
const matrizSub = matrizA.subtrair(matrizB.matriz);
console.log("\nSUBTRAÇÃO DAS MATRIZES A - B:");
console.log(matrizSub.mostrarMatriz());


// Assumindo que matrizA já foi criada e preenchida...

// ⭐️ GERA A MATRIZ TRANSPOSTA
const matrizATransposta = matrizA.transpor(); 
console.log("\nMATRIZ A TRANSPOSTA:");
console.log("Dimensões: " + matrizATransposta.linhas + "x" + matrizATransposta.colunas);
console.log(matrizATransposta.mostrarMatriz());

// ⭐️ GERA A OUTRA MATRIZ TRANSPOSTA
const matrizBTransposta = matrizB.transpor();
console.log("\nMATRIZ B TRANSPOSTA:");
console.log("Dimensões: " + matrizBTransposta.linhas + "x" + matrizBTransposta.colunas);
console.log(matrizBTransposta.mostrarMatriz());

console.log(matrizA.verificarIdentidade());


// ⭐️ GERA A OUTRA MATRIZ TRANSPOSTA
const matrizSomaTransposta = matrizSoma.transpor();
console.log("\nMATRIZ B TRANSPOSTA:");
console.log("Dimensões: " + matrizSomaTransposta.linhas + "x" + matrizSomaTransposta.colunas);
console.log(matrizSomaTransposta.mostrarMatriz());

console.log(matrizSoma.verificarIdentidade());

