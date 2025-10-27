// Como declarar um array em JavaScript
// Forma Literal
const array1 = [1,2,3,4,5];
console.log("Array1: " + array1);
const array2 = []; //array vazio
console.log("Array2: " + array2);

// Usando objeto
const array3 = new Array(); // array vazio via objeto
console.log("Array3: " + array3);
const array4 = new Array(5,4,3,2,1); // array vazio via objeto
console.log("Array4: " + array4);
const array5 = new Array(5).fill(99);
console.log("Array5: " + array5);