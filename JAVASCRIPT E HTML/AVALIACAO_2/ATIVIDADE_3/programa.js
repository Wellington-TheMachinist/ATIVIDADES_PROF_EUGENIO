const identificacaoC = document.getElementById("idInId");
const frequenciaC = document.getElementById("idInFrequencia");
const notaUmC = document.getElementById("idInNotaUm");
const notaDoisC = document.getElementById("idInNotaDois");
const notaTresC = document.getElementById("idInNotaTres");
const mediaExerciciosC = document.getElementById("idInMediaExercicios");
const resultadoC = document.getElementById("idOutResultado");

function calcularMediaAp(notaUm,notaDois,notaTres,mediaExercicios){

    let mediaGeral = (notaUm+(notaDois*2)+(notaTres*3)+mediaExercicios)/7

    if(mediaGeral>=9.1&&mediaGeral<=10.0){
        return "A"
    }else if(mediaGeral>=7.6&&mediaGeral<=9.0){
        return "B"
    }else if(mediaGeral>=6.1&&mediaGeral<=7.5){
        return "C"
    }else if(mediaGeral>=4.1&&mediaGeral<=6.0){
        return "D"
    }else if(mediaGeral<4.0){
        return "E"
    }
}

function calcularResultadoFinal(conceito,frequencia){

if((conceito=="A"|conceito=="B"|conceito=="C")&&frequencia>=75){
    return "APROVADO"


}else if((conceito=="D"|conceito=="E")&&frequencia<75){
    return "REPROVADO"
}else if((conceito=="A"|conceito=="B"|conceito=="C")&&frequencia<75){
    return "REPROVADO"


}else if((conceito=="D"|conceito=="E")&&frequencia>75){
    return "REPROVADO"


}

}


function gerarResultadoFinal(){

let hahaha = calcularMediaAp(Number(notaUmC.value),Number(notaDoisC.value),Number(notaTresC.value),Number(mediaExerciciosC.value));
let hehehe = calcularResultadoFinal(hahaha,Number(frequenciaC.value));

let saida= "O aluno de id: "+identificacaoC.value+" possui a frequencia de "+Number(frequenciaC.value)+"% ,com suas notas, respectivamente \n"
+Number(notaUmC.value)+","+Number(notaDoisC.value)+" e "+Number(notaTresC.value)+", com a media dos exercicios igual a : \n"
+Number(mediaExerciciosC.value)+", conquistando o conceito : "+hahaha+" , obteve o resultado final como "+hehehe;

resultadoC.innerText = saida;
}