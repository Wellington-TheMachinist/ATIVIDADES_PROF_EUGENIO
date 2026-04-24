const config = {
    locateFile: filename => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${filename}`


};


let meuBanco;

async function carregarOuCriarBanco() {
    
const SQL = await initSqlJs(config);

const bancoSalvo = localStorage.getItem("meu_pwa_bd");

let db;

if(bancoSalvo){

    const u8 = new Uint8Array(JSON.parse(bancoSalvo));

    db = new SQL.Database(u8);

    console.log("BANCO DE DADOS RESTAURADO!");
}else{

    db = new SQL.Database();

    db.run("CREATE TABLE gastos (id INTEGER PRIMARY KEY, item TEXT, valor REAL);");

    console.log("Novo banco de dados criado!");
}


  return db;
}



function salvarEstadoBanco(db){
    const dadosBinarios = db.export();

    const arrayParaSalvar = Array.from(dadosBinarios);

    localStorage.setItem("meu_pwa_bd" , JSON.stringify(arrayParaSalvar));

    console.log("Dados persistidos com Sucesso!!!");
}


const btn = document.getElementById("btnEnviar");

btn.addEventListener('click' , async function(event) {

    event.preventDefault();

    const descricao = document.getElementById("descricao").value;

    const valor = document.getElementById("valor").value;

    if(meuBanco && descricao && valor){

        meuBanco.run("INSERT INTO gastos (item, valor) VALUES (?,?)",[descricao, Number(valor)]);

        salvarEstadoBanco(meuBanco);

        alert("GASTO DO "+ descricao + "SALVO COM SUCESSO!");

        document.getElementById("descricao").value = "";

        document.getElementById("valor").value = "";
    }else{

        alert("POR FAVOR, PREENCHA TODOS OS CAMPOS!");
    }
    
})


window.onload = async () =>{

    console.log("Iniciando o sistema...");

    try{

        meuBanco = await carregarOuCriarBanco();
    }catch(e){

        console.error("Erro ao iniciar o banco", e);
    }
}