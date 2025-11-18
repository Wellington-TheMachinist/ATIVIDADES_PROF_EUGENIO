const qLinhas = 4;
const qColunas = 4;
let matriz = new Array(linha);

function gerarMatriz(matriz,qLinhas,QColunas){
  for (let i = 0; i < linha; i++) {
    matriz[i] = new Array(coluna); // cria uma nova linha
    for (let j = 0; j < coluna; j++) {
      matriz[i][j] = Math.floor(Math.random() * 20); // preenche e incrementa
    }
  }
}
// Exibindo a matriz
function mostrarMatriz(matriz){
  console.log("Matriz gerada automaticamente:");
  for (let i = 0; i < 4; i++) {
    console.log(matriz[i]);
  }
}
gerarMatriz(matriz,qLinhas,qColunas);
mostrarMatriz(matriz);