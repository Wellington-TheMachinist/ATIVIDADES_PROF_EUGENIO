const notaC  = document.getElementById("idInNota");
const botaoIncluirC = document.getElementById("btnIncluirNota");
const botaoCalcularC = document.getElementById("btnCalcular");
const resultadoC = document.getElementById("idOnResultado");
const mediaTurmaC = document.getElementById("idOnMedia");


const arrayNotas = [];
function acaoBotaoIncluirNota(){
    const nota = Number(notaC.value);
    arrayNotas.push(nota);
    console.log(arrayNotas);
    resultadoC.innerText = arrayNotas.join(" | ");
}
function acaoBotaoCalcular(){
   let media = 0;
   let maiorNota = 0;
   let menorNota = 0;
   let relatorioNotas = "";
   if(arrayNotas.length == 0) media = 0;
   else{
      maiorNota = arrayNotas[0];
      menorNota = arrayNotas[0];
      for(valor of arrayNotas){
         media += valor;
         if(valor < menorNota)  menorNota = valor;
         if(valor > maiorNota)  maiorNota = valor;
      }
      media = media/arrayNotas.length;
      relatorioNotas = "Relatório das Notas \n";
      for(valor of arrayNotas){
         if(valor < media) relatorioNotas += "Nota: " + valor + " < Media\n";
         else relatorioNotas += "Nota: " + valor + " >= Media\n";
      }
   }
   console.log(media);
   let saida = "Média Geral da Turma = " + media + "\n";
   saida += "Maior Nota: " + maiorNota + "\n";
   saida += "Menor Nota: " + menorNota + "\n";
   saida += relatorioNotas;
   mediaTurmaC.innerText = saida;
}