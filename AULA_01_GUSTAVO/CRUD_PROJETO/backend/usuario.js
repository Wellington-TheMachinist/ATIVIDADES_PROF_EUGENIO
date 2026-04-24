
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

//SEPARANDO CADA UM POR ENTIDADE PRA EU NÃO ME ATRAPALHAR
//ESSE É DO USUÁRIO
const usuarioBtnEnviar = document.getElementById("usuario_btnEnviar");
const usuarioBtnConsultar = document.getElementById("usuario_btnConsultar");
const usuarioBtnAlterar = document.getElementById("usuario_btnAlterar");

usuarioBtnAlterar.addEventListener('click', async function (event) {
   event.preventDefault();
    if(!meuBanco){

        console.log("erro ao carregar banco");
        return;

    }
    const usuario_id = document.getElementById("usuario_id").value;
    const usuario_nome = document.getElementById("usuario_nome").value;
    const usuario_login = document.getElementById("usuario_login").value;
    const usuario_nivel_acesso = document.querySelector('input[name="radio_usuario"]:checked').value;
    const usuario_senha = document.getElementById("usuario_senha").value;
    ///testando umas coisas
    if((usuario_id) ===""||(usuario_nome) ===""||(usuario_login) ===""||(usuario_senha) ===""||usuario_nivel_acesso===""){
        alert("dados imcompletos!!!!");
    }else{
    try{
        meuBanco.run("UPDATE usuario  SET nome = ?, login = ?, nivel_acesso = ?, senha = ? WHERE id = ?" , [usuario_nome,usuario_login,usuario_nivel_acesso,usuario_senha,usuario_id]);
        salvarEstadoBanco(meuBanco);

        alert("USUARIO ALTERADO COM SUCESSO!!!!");
        document.getElementById("usuario_nome").value = "";
        document.getElementById("usuario_login").value = "";
        document.getElementById("usuario_id").value = "";
        document.getElementById("usuario_senha").value = "";
    }catch(erro){
        console.log("erroooooo");
    }
}

})

usuarioBtnConsultar.addEventListener('click', async function (event) {
    //evento que ocorrerá ao clicar em btnConsultar
     document.getElementById("usuario_lista").innerText="";
    event.preventDefault();
    if(!meuBanco)return;

    const resultado = meuBanco.exec("SELECT * FROM usuario ORDER BY id DESC;");

    if(resultado.length >0){
     const linhas = resultado[0].values;
     console.log("Registros encontrados:");
     for(let i = 0;i< linhas.length;i++){
        console.log("Id:" + linhas[i][0]+" | nome: " + linhas[i][1]+ " | login: "+ linhas[i][2]+ "| nivel de acesso: "+ linhas[i][3]+ "| senha: "+ linhas[i][4]);
        document.getElementById("usuario_lista").innerText+=("Id:" + linhas[i][0]+" | nome: " + linhas[i][1]+ " | login: "+ linhas[i][2]+ "| nivel de acesso: "+ linhas[i][3]+ "| senha: "+ linhas[i][4]+"\n");
     }


    }

})


usuarioBtnEnviar.addEventListener('click' , async function(event) {

    event.preventDefault();


    const usuario_nome = document.getElementById("usuario_nome");
    const usuario_login = document.getElementById("usuario_login");
    const usuario_nivel_acesso = document.querySelector('input[name="radio_usuario"]:checked');
    const usuario_senha = document.getElementById("usuario_senha");
     const usuario_id = document.getElementById("usuario_id");
    if(!usuario_id.value==""){
    document.getElementById("usuario_id").value = "";    
    }
    if(meuBanco && usuario_nome.value && usuario_login.value && usuario_nivel_acesso.value && usuario_senha.value ){

        meuBanco.run("INSERT INTO usuario (nome, login, nivel_acesso, senha) VALUES (?,?,?,?)",[usuario_nome.value, usuario_login.value,usuario_nivel_acesso.value,usuario_senha.value]);

        salvarEstadoBanco(meuBanco);

        alert("DADOS DE "+ usuario_nome.value + "SALVO COM SUCESSO!");

        //
        document.getElementById("usuario_nome").value = "";
        document.getElementById("usuario_login").value = "";
        document.getElementById("usuario_senha").value = "";
        document.getElementById("usuario_id").value = "";
        
    }else{

        alert("POR FAVOR, PREENCHA TODOS OS CAMPOS!");
    }



})





// TEREI QUE FAZER TUDO ISSO ACIMA PRA CADA UMA 


window.onload = async () =>{

    console.log("Iniciando o sistema...");

    try{

        meuBanco = await carregarOuCriarBanco();
    }catch(e){

        console.error("Erro ao iniciar o banco", e);
    }
}
