let taxa = 1;
let aplicacaoMensal =2000;
let numeroMeses = 2;


function valorAcumulado(i,P,n){

let valorAcumulado = ((Math.pow((1+i),n)-1)/i)*P;

return valorAcumulado;

}
console.log("com essa aplicação, seu retorno será de : R$ "
    + valorAcumulado(taxa,aplicacaoMensal,numeroMeses)
);