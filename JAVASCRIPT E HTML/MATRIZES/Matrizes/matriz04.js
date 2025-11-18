const qLinhas = 3;
const qColunas = 3;
let matriz = [];

let contador = 1;
for (let linha = 0; linha < qLinhas; linha++) {
  matriz[linha] = []; // cria uma nova linha
  for (let coluna = 0; coluna < qColunas; coluna++) {
    matriz[linha][coluna] = contador++; // preenche e incrementa
  }
}

// Exibindo a matriz
console.log("Matriz gerada automaticamente:");
for (let linha = 0; linha < qLinhas; linha++) {
  console.log(matriz[linha]);
}
//Acesso aos dados da matriz
matriz[0][0] = 99;
matriz[1][1] = 88;
matriz[2][2] = 77;

// Exibindo a matriz
console.log("Matriz gerada automaticamente:");
for (let linha = 0; linha < qLinhas; linha++) {
  console.log(matriz[linha]);
}
