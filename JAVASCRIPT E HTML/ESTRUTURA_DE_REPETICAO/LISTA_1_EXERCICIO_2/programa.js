const valorEstruturaC = document.getElementById("idInEstrutura");
const resultadoC = document.getElementById("idOutTexto");




// Função para calcular seno aproximado usando série de Maclaurin
function senoMaclaurin(a) {
    return a - (Math.pow(a, 3) / 6) 
             + (Math.pow(a, 5) / 120) 
             - (Math.pow(a, 7) / 5040);
}




function listarValores(estrutura){
    if(estrutura=="FOR"){
    let hahaha="";
    for (let a = 0.0; a <= 3.0; a += 0.5) {
    let seno = senoMaclaurin(a);
    hahaha+="A ="+ a.toFixed(1)+"  |  Seno (A) ≈ "+seno.toFixed(6)+"\n";


    
}

    return hahaha;
}else if(estrutura=="WHILE"){
    let hahaha="";
    let a = 0.0;

    while(a<=3.0){
        let seno = senoMaclaurin(a);
    hahaha+="A ="+ a.toFixed(1)+"  |  Seno (A) ≈ "+seno.toFixed(6)+"\n";

    a+=0.5
    }
    return hahaha;
}else if(estrutura=="DOWHILE"){
let hahaha="";
let a = 0.0;

do{
 let seno = senoMaclaurin(a);
     hahaha+="A ="+ a.toFixed(1)+"  |  Seno (A) ≈ "+seno.toFixed(6)+"\n";

    a+=0.5
}while(a<=3.0)

return hahaha;
}
}


function mostrarValores(){
    let resultado = listarValores(valorEstruturaC.value);

    resultadoC.innerText = resultado;
}

function limparCampo(){
    resultadoC.innerText = "";
}
