const consumoMedio = 12.5;
const precoLitro = 6.44;
const tempoViagem = 4;
const velocidadeMedia = 100;
let distancia = tempoViagem*velocidadeMedia;
let quantidadeDeLitros = distancia/consumoMedio;
let custo = quantidadeDeLitros*precoLitro;

console.log("Custo da Viagem R$ " + custo);