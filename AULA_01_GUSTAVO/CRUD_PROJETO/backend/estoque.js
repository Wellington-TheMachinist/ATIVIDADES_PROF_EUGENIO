
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
const estoqueBtnEnviar = document.getElementById("estoque_btnEnviar");
const estoqueBtnConsultar = document.getElementById("estoque_btnConsultar");
const estoqueBtnAlterar = document.getElementById("estoque_btnAlterar");

estoqueBtnAlterar.addEventListener('click', async function (event) {
   event.preventDefault();
    if(!meuBanco){

        console.log("erro ao carregar banco");
        return;

    }
    const estoque_id = document.getElementById("estoque_id").value;
    const estoque_id_componente = document.getElementById("estoque_id_componente").value;
    const estoque_id_deposito = document.getElementById("estoque_id_deposito").value;
    estoque_quant_comp = document.getElementById("estoque_quant_comp");
    
    ///testando umas coisas
    if((estoque_id) ===""||(estoque_id_componente) ===""||(estoque_id_deposito) ===""||(estoque_quant_comp) ===""){
        alert("dados imcompletos!!!!");
    }else{
    try{
        meuBanco.run("UPDATE estoque  SET estoque_id_componente = ?, id_deposito = ?, quant_componente = ? WHERE id = ?" , [estoque_id_componente,estoque_id_deposito,estoque_quant_comp,estoque_id]);
        salvarEstadoBanco(meuBanco);

        alert("ESTOQUE ALTERADO COM SUCESSO!!!!");
        document.getElementById("estoque_id").value = "";
        document.getElementById("estoque_id_componente").value = "";
        document.getElementById("estoque_id_deposito").value = "";
        document.getElementById("estoque_quant_componente").value = "";
    }catch(erro){
        console.log("erroooooo");
    }
}

})

estoqueBtnConsultar.addEventListener('click', async function (event) {
    //evento que ocorrerá ao clicar em btnConsultar
     document.getElementById("estoque_lista").innerText="";
    event.preventDefault();
    if(!meuBanco)return;

    const resultado = meuBanco.exec("SELECT * FROM estoque ORDER BY id DESC;");

    if(resultado.length >0){
     const linhas = resultado[0].values;
     console.log("Registros encontrados:");
     for(let i = 0;i< linhas.length;i++){
        console.log("Id:" + linhas[i][0]+" | nome: " + linhas[i][1]+ " | login: "+ linhas[i][2]+ "| nivel de acesso: "+ linhas[i][3]+ "| senha: "+ linhas[i][4]);
        document.getElementById("estoque_lista").innerText+=("Id:" + linhas[i][0]+" | componente: " + linhas[i][1]+ " | deposito: "+ linhas[i][2]+ "| quantidade: "+ linhas[i][3]+"\n");
     }


    }

})


estoqueBtnEnviar.addEventListener('click' , async function(event) {

    event.preventDefault();


    const estoque_id = document.getElementById("estoque_id");
    const estoque_id_componente = document.getElementById("estoque_id_componente");
    const estoque_id_deposito = document.getElementById("estoque_id_deposito")
    const estoque_quant_comp = document.getElementById("estoque_quant_comp");
    
    if(!estoque_id.value==""){
    document.getElementById("estoque_id").value = "";    
    }
    if(meuBanco && estoque_id_componente.value && estoque_id_deposito.value && estoque_quant_comp.value ){

        meuBanco.run("INSERT INTO estoque (id_componente, id_deposito, quant_componente) VALUES (?,?,?)",[estoque_id_componente.value, estoque_id_deposito.value,estoque_quant_comp.value]);

        salvarEstadoBanco(meuBanco);

        alert("DADOS DE "+ estoque_id_componente.value + "SALVO COM SUCESSO!");

        //
        document.getElementById("estoque_id").value = "";
        document.getElementById("estoque_id_componente").value = "";
        document.getElementById("estoque_id_deposito").value = "";
        document.getElementById("estoque_quant_comp").value = "";
        
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
