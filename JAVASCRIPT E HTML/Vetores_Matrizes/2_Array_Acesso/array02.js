const array = [1,2,3,4,5]
console.log("Array: " + array);
// acesso individual aos elementos do array
// obtendo dado na posicao
console.log("Elemento do Array na posicao 0 = " + array[0]);
console.log("Elemento do Array na posicao 2 = " + array[2]);
// alterando dado na posicao
array[0] = 99;
array[2] = 88;
console.log("Array: " + array);
// Adicionando elemento no final do array
array.push(77);
console.log("Array: " + array);
// Adicionado elemento no inicio do array
array.unshift(-66);
console.log("Array: " + array);
// Removendo um elemento do final do array
array.pop();
console.log("Array: " + array);
// Removendo elemento do inicio do array
array.shift();
console.log("Array: " + array);
