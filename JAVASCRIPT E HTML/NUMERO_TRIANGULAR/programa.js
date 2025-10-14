function verificarTriangular(numero){
    contador = 1;
    while(contador*(contador+1)*(contador+2)<numero){

        contador++;

        valor=(contador*(contador+1)*(contador+2));
        
    }
    return(valor===numero);
}

function acao(){
    if(verificarTriangular(120)==true){
console.log("é triangular")

    }else{
        console.log("não é triangular")
    }
}
  if(verificarTriangular(121)===true){
console.log("é triangular")

    }else{
        console.log("não é triangular")
    }





    function calcularFatorial(numero){
fat=1;
while(numero>=1){
    fat*=numero;
    numero--
}
return fat;

    }

    console.log("o fatorial do numero e :"+calcularFatorial(5))