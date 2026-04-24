
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
const componenteBtnEnviar = document.getElementById("componente_btnEnviar");
const componenteBtnConsultar = document.getElementById("componente_btnConsultar");
const componenteBtnAlterar = document.getElementById("componente_btnAlterar");

componenteBtnAlterar.addEventListener('click', async function (event) {
   event.preventDefault();
    if(!meuBanco){

        console.log("erro ao carregar banco");
        return;

    }
    const componente_id = document.getElementById("componente_id").value;
    const componente_nome = document.getElementById("componente_nome").value;
    const componente_descricao = document.getElementById("componente_descricao").value;
    const componente_id_usuario = 4;
    const componente_img_diretorio = "teste";
    
    if((componente_id) ===""||(componente_nome) ===""||(componente_descricao) ===""){
        alert("dados imcompletos!!!!");
    }else{
    try{
        meuBanco.run("UPDATE componente  SET componente = ?, descricao = ?, id_usuario = ?, img_diretorio = ? WHERE id = ?" , [componente_nome,componente_descricao,componente_id_usuario,componente_img_diretorio,componente_id]);
        salvarEstadoBanco(meuBanco);

        alert("USUARIO ALTERADO COM SUCESSO!!!!");
        document.getElementById("componente_nome").value = "";
        document.getElementById("componente_descricao").value = "";
        document.getElementById("componente_id");
        //document.getElementById("compo").value = "";
        //document.getElementById("usuario_senha").value = "";
    }catch(erro){
        console.log("erroooooo");
    }
}

})

componenteBtnConsultar.addEventListener('click', async function (event) {
    //evento que ocorrerá ao clicar em btnConsultar
     document.getElementById("componente_lista").innerText="";
    event.preventDefault();
    if(!meuBanco)return;

    const resultado = meuBanco.exec("SELECT * FROM componente ORDER BY id DESC;");

    if(resultado.length >0){
     const linhas = resultado[0].values;
     console.log("Registros encontrados:");
     for(let i = 0;i< linhas.length;i++){
        console.log("Id:" + linhas[i][0]+" | nome: " + linhas[i][1]+ " | descrição: "+ linhas[i][2]+ "| alterado por: "+ linhas[i][3]+ "| diretorio: "+ linhas[i][4]);
        document.getElementById("componente_lista").innerText+=("Id:" + linhas[i][0]+" | nome: " + linhas[i][1]+ " | descricao: "+ linhas[i][2]+ "| alterado por: "+ linhas[i][3]+ "| diretorio: "+ linhas[i][4]+"\n");
     }


    }

})


componenteBtnEnviar.addEventListener('click' , async function(event) {

    event.preventDefault();


    const componente_nome = document.getElementById("componente_nome");
    const componente_descricao = document.getElementById("componente_descricao");
    const componente_id = document.getElementById("componente_id");
    const componente_id_usuario = 4;
    const componente_img_diretorio = "teste";
     
    if(!componente_id.value==""){
    document.getElementById("componente_id").value = "";    
    }
    if(meuBanco && componente_nome.value && componente_descricao.value){

        meuBanco.run("INSERT INTO componente (componente, descricao, id_usuario, img_diretorio) VALUES (?,?,?,?)",[componente_nome,componente_descricao,componente_id_usuario,componente_img_diretorio]);

        salvarEstadoBanco(meuBanco);

        alert("DADOS DE "+ componente_nome.value + "SALVO COM SUCESSO!");

        //
        document.getElementById("componente_nome").value = "";
        document.getElementById("componente_id").value = "";
        document.getElementById("componente_descricao").value = "";
        
        
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
