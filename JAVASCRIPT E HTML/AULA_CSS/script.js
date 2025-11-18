let flag = 1;
const botao = document.getElementById("botao");

function mudarCor(){
if(flag==1){
    document.body.style.backgroundColor = "blue";
    flag =0;
}else{
    document.body.style.backgroundColor = "pink";
    flag=1;
}

}

botao.addEventListener("hover",mudarCor());