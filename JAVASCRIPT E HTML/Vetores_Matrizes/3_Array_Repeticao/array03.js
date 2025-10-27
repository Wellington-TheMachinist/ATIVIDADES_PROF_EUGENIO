const array = [1,2,3,4,5,6,7,8,9,10];
// Manipular array usando for
let str1 = "Array = |";
for(let pos = 0; pos < array.length; pos++){
   str1 += array[pos] + " | ";
}
console.log(str1);
// Manipular array usando while
let str2 = "Array = |";
let pos = 0;
while(pos < array.length){
   str2 += array[pos] + " | ";
   pos++;
}
console.log(str2);
// Manipular array usando do while
let str3 = "Array = |";
pos = 0;
do{
   str3 += array[pos] + " | ";
   pos++;
}while(pos < array.length)
console.log(str3);
// Manipular array usando for of  => for reduzido
let str4 = "Array = |";
for(const elemento of array){
   str4 += elemento + " | ";
}
console.log(str4);