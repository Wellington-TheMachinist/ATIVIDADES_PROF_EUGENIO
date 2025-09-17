const nome = document.getElementById("idInNome");
var peso = document.getElementById("idInPeso");
var altura = document.getElementById("idInAltura");
const btn = document.getElementById("btnCalcularImc");
const resultado = document.getElementById("idOutResultado");


function calcularImc(peso,altura){

    return peso/(altura*altura);
}

function eventoBtnCalcularImc(){
const pesoN = Number(peso.value);
const alturaN = Number(altura.value);
const imc = calcularImc(pesoN,alturaN);
const saida = " O paciente "+nome.value+" tem IMC = "+imc;
resultado.innerText  = saida;
}
