//Criando uma Matriz 4x4
const matriz = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
// const matriz = [
//   [0,1,2,3,4],
//   [5,6,7,8,9]
// ]

const qLinhas = matriz.length;
console.log("Quantidade de linhas: " + qLinhas);
const qColunas = matriz[0].length;
console.log("Quantidade de colunas: " + qColunas);

function mostrarMatriz1(matriz, qLinhas, qColunas){
  // Exibindo a matriz no console
  console.log("\n1 - Matriz "+qLinhas+"x"+qColunas+" - usando for base");
  for (let linha = 0; linha < qLinhas; linha++) {
    console.log("Linha[" + linha+ "]= " + matriz[linha]);
  }
}

function mostrarMatriz2(matriz){
  const qLinhas = matriz.length;
  const qColunas = matriz[0].length;
  console.log("\n2 - Matriz "+qLinhas+"x"+qColunas+" usando for of");
  let nLinha = 0;
  for (let linha of matriz) {
    console.log("Linha[" + nLinha+ "]= " + linha);
    nLinha++;
  }
}

function mostrarMatriz3(matriz, qLinhas, qColunas){
  console.log("\n3 - Matriz "+qLinhas+"x"+qColunas+" usando for para linha e coluna");
  for(let linha = 0; linha < qLinhas; linha++){
    let saida = "";
    for(let coluna = 0; coluna < qColunas; coluna++){
      saida += matriz[linha][coluna] + "  ";
    }
    console.log("Linha[" + linha+ "]= " + saida);
  }
}

function mostrarMatriz4(matriz){
  const qLinhas = matriz.length;
  const qColunas = matriz[0].length;
  console.log("\n4 - Matriz "+qLinhas+"x"+qColunas+" - usando for of para linha e coluna");
  nLinha = 0;
  for(linha of matriz){
    let saida = "";
    for(coluna of linha){
      saida += coluna + "  ";
    }
    console.log("Linha[" + nLinha+ "]= " + saida);
    nLinha++;
  }
}

mostrarMatriz1(matriz,qLinhas,qColunas);
mostrarMatriz2(matriz);
mostrarMatriz3(matriz,qLinhas,qColunas);
mostrarMatriz4(matriz);
