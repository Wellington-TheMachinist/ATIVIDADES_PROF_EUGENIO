
const config = {
    locateFile: filename => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${filename}`


};


let meuBanco;

async function carregarOuCriarBanco() {
    
const SQL = await initSqlJs(config);

const bancoSalvo = localStorage.getItem("almoxarifado_db");

let db;

if(bancoSalvo){

    const u8 = new Uint8Array(JSON.parse(bancoSalvo));

    db = new SQL.Database(u8);

    console.log("BANCO DE DADOS RESTAURADO!");
}else{

    db = new SQL.Database();

    db.run("CREATE TABLE usuario (id INTEGER PRIMARY KEY, nome TEXT, login TEXT, nivel_acesso TEXT, senha TEXT);");
    db.run("CREATE TABLE componente (id INTEGER PRIMARY KEY, componente TEXT, descricao TEXT, id_usuario INTEGER, img_diretorio TEXT);");
    db.run("CREATE TABLE estoque (id INTEGER PRIMARY KEY, id_componente INTEGER, id_deposito INTEGER, quant_componente INTEGER);");
    db.run("CREATE TABLE deposito (id INTEGER PRIMARY KEY, nome TEXT, descricao TEXT);");

    console.log("Novo banco de dados criado!");
}


  return db;
}



function salvarEstadoBanco(db){
    const dadosBinarios = db.export();

    const arrayParaSalvar = Array.from(dadosBinarios);

    localStorage.setItem("almoxarifado_db" , JSON.stringify(arrayParaSalvar));

    console.log("Dados persistidos com Sucesso!!!");
}
//ESSE É DO DEPÓSITO
const depositoBtnEnviar = document.getElementById("deposito_btnEnviar");
const depositoBtnConsultar = document.getElementById("deposito_btnConsultar");
const depositoBtnAlterar = document.getElementById("deposito_btnAlterar");

depositoBtnAlterar.addEventListener('click', async function (event) {
   event.preventDefault();
    if(!meuBanco){

        console.log("erro ao carregar banco");
        return;

    }
    const deposito_id = document.getElementById("deposito_id").value;
    const deposito_nome = document.getElementById("deposito_nome").value;
    
    ///testando umas coisas
    if((deposito_id) ===""||(deposito_nome) ===""){
        alert("dados imcompletos!!!!");
    }else{
    try{
        meuBanco.run("UPDATE usuario  SET nome = ? WHERE id = ?" , [deposito_nome,deposito_id]);
        salvarEstadoBanco(meuBanco);

        alert("USUARIO ALTERADO COM SUCESSO!!!!");
        document.getElementById("deposito_nome").value = "";
        document.getElementById("deposito_id").value = "";
        
    }catch(erro){
        console.log("erroooooo");
    }
}

})

depositoBtnConsultar.addEventListener('click', async function (event) {
    //evento que ocorrerá ao clicar em btnConsultar
     document.getElementById("deposito_lista").innerText="";
    event.preventDefault();
    if(!meuBanco)return;

    const resultado = meuBanco.exec("SELECT * FROM deposito ORDER BY id DESC;");

    if(resultado.length >0){
     const linhas = resultado[0].values;
     console.log("Registros encontrados:");
     for(let i = 0;i< linhas.length;i++){
        console.log("Id:" + linhas[i][0]+" | nome: " + linhas[i][1]);
        document.getElementById("deposito_lista").innerText+=("Id:" + linhas[i][0]+" | nome: " + linhas[i][1]+"\n");
     }


    }

})


depositoBtnEnviar.addEventListener('click' , async function(event) {

    event.preventDefault();


    const deposito_nome = document.getElementById("deposito_nome");
     const deposito_id = document.getElementById("deposito_id");
    if(!deposito_id.value==""){
    document.getElementById("deposito_id").value = "";    
    }
    if(meuBanco && deposito_nome.value  ){

        meuBanco.run("INSERT INTO deposito (nome) VALUES (?)",[deposito_nome.value]);

        salvarEstadoBanco(meuBanco);

        alert("DADOS DE "+ deposito_nome.value + "SALVO COM SUCESSO!");

        //
        document.getElementById("deposito_nome").value = "";
        document.getElementById("deposito_id").value = "";
        
    }else{

        alert("POR FAVOR, PREENCHA TODOS OS CAMPOS!");
    }



})
//AQUI ACABA O DO DEPÓSITO

window.onload = async () =>{

    console.log("Iniciando o sistema...");

    try{

        meuBanco = await carregarOuCriarBanco();
    }catch(e){

        console.error("Erro ao iniciar o banco", e);
    }
}
