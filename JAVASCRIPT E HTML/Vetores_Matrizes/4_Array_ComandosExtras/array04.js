let dados = [1,9,5,7,3];
//Covertendo um Array em uma String
let str = dados.toString();
console.log("\nDados String: " + str + "\n");
//Covertendo um Array em uma String
let str2 = dados.join(" | ");
console.log("\nDados String: " + str2 + "\n");
//Obter o numero de elementos de um array
console.log("Quantidade de dados do Array: " + dados.length + "\n");
//Ordenar os dados de um array
dados.sort();
console.log("\nDados Ordenados: " + dados.toString() + "\n");
//gerar valores aleatorios no JavaScript
let vetAleatorio = [];
for(let pos = 0; pos < 10; pos++){
   vetAleatorio[pos] = Math.random();
}
console.log(vetAleatorio);
//gerar valores aleatorios inteiros no intevalo definido no JavaScript
let vetAleatorio2 = [];
for(let pos = 0; pos < 10; pos++){
   vetAleatorio2[pos] = Math.floor(Math.random() * 100);
}
console.log(vetAleatorio2);

