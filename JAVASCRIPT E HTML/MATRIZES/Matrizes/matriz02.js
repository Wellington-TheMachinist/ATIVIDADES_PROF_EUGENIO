// Criar matriz preenchida automaticamente
const qLinhas = 3;
const qColunas = 4;
let matriz = [];

//Gerar a matriz
function gerarMatriz(matriz,qLinhas,qColunas){
  for (let i = 0; i < qLinhas; i++) {
    matriz[i] = []; // cria uma nova linha
    for (let j = 0; j < qColunas; j++) {
      matriz[i][j] = Math.floor(Math.random() * 20); // preenche e incrementa
    }
  }
}
// Exibir a matriz
function mostrarMatriz(matriz){
  console.log("Matriz gerada automaticamente:");
  for (let i = 0; i < 4; i++) {
    console.log(matriz[i]);
  }
}

gerarMatriz(matriz,qLinhas,qColunas);
mostrarMatriz(matriz);