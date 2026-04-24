





/////////////////////////////////////
const config = {
    locateFile: filename => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${filename}`


};


let meuBanco;

const SUPABASE_URL = 'https://ugoiiffibulgbbsgvnid.supabase.co';
const SUPABASE_KEY = 'sb_publishable_XdToxC_-hCpA3hpS7GAokA_TYasM1K4';
const supabaseClient = supabase.createClient(SUPABASE_URL,SUPABASE_KEY);

window.addEventListener('online', () => sincronizarDados());

async function sincronizarDados(flag) {
    //flag 0 : inserção . flag ! = 0 : valor do id

    if(!navigator.onLine) return;


 

    const resultado = meuBanco.exec("SELECT * FROM planta WHERE sincronizado = 0");

    if(resultado.length > 0){
        const pendentes = resultado[0].values;

        for(let i =0;i < pendentes.length;i++){


            const linha = pendentes[i];
            const id_local = linha[0];
            const apelido = linha[1];
            const especie = linha[2];

            const {error} = await supabaseClient
            .from('planta')
            .insert([{apelido:apelido, especie:especie}])

            if(!error){
                meuBanco.run("UPDATE planta SET sincronizado = 1 WHERE id = ?", [id_local]);
            }else{
                console.error("ERRO AO SUBIR PARA A NUVEM:", error.message);
            }
            

        }

        salvarEstadoBanco(meuBanco);
    }
    
}


async function recuperarDadosDaNuvem() {
    if(!navigator.onLine){
       alert("vc tá sem internet para recuperar os dados!!!!");
       
    }else{
        console.log("buscando dados da nuvem.....");

        const {data, error} = await supabaseClient
        .from('planta')
        .select('*');


        if(error){
            console.log("erros ao buscar os dados :", error.message);
            return;
        }

        if(data && data.length>0){
            for(let i =0; i<data.length;i++){
                const registro = data[i];

                meuBanco.run("INSERT INTO planta (apelido,especie,sincronizado)VALUES(?,?,1)",[registro.apelido,registro.especie]);

            }


            salvarEstadoBanco(meuBanco);
            alert(`${data.length} registros recuperados com sucesso`);

        }else{
            alert("Nenhum dado encontrado na nuvem");
        }

    }
}



async function carregarOuCriarBanco() {
    
const SQL = await initSqlJs(config);

const bancoSalvo = localStorage.getItem("plantas_banco");

let db;

if(bancoSalvo){

    const u8 = new Uint8Array(JSON.parse(bancoSalvo));

    db = new SQL.Database(u8);

    console.log("BANCO DE DADOS RESTAURADO!");
}else{

    db = new SQL.Database();

    db.run("CREATE TABLE planta (id INTEGER PRIMARY KEY, apelido TEXT, especie TEXT, sincronizado INTEGER DEFAULT 0);");

    console.log("Novo banco de dados criado!");
    recuperarDadosDaNuvem();
}


  return db;
}



function salvarEstadoBanco(db){
    const dadosBinarios = db.export();

    const arrayParaSalvar = Array.from(dadosBinarios);

    localStorage.setItem("plantas_banco" , JSON.stringify(arrayParaSalvar));

    console.log("Dados persistidos com Sucesso!!!");
}


const btn = document.getElementById("btnEnviar");
const btnConsultar = document.getElementById("btnConsultar");
const btnAlterar = document.getElementById("btnAlterar");

btnAlterar.addEventListener('click', async function (event) {
   event.preventDefault();
    if(!meuBanco){

        console.log("erro ao carregar banco");
        return;

    }
    const id = document.getElementById("textoId").value;
    const valorNovo = document.getElementById("textoApelido").value;

    try{
        meuBanco.run("UPDATE planta  SET apelido = ?, sincronizado = 0 WHERE id = ?" , [valorNovo,id]);
        salvarEstadoBanco(meuBanco);

        alert("GASTO ALTERADO COM SUCESSO!!!!");
        sincronizarDados();
        document.getElementById("textoApelido").value = "";
        document.getElementById("textoEspecie").value = "";
        document.getElementById("textoId").value = "";
    }catch(erro){
        console.log("erroooooo");
    }

})

btnConsultar.addEventListener('click', async function (event) {
    //evento que ocorrerá ao clicar em btnConsultar
     document.getElementById("textoH").innerText="";
    event.preventDefault();
    if(!meuBanco)return;

    const resultado = meuBanco.exec("SELECT * FROM planta ORDER BY id DESC;");

    if(resultado.length >0){
     const linhas = resultado[0].values;
     console.log("Registros encontrados:");
     for(let i = 0;i< linhas.length;i++){
        console.log("Id:" + linhas[i][0]+" | item: " + linhas[i][1]+ " | valor: "+ linhas[i][2]);
        document.getElementById("textoH").innerText+=("Id:" + linhas[i][0]+" | item: " + linhas[i][1]+ " | valor: "+ linhas[i][2]+"\n");
     }


    }

})


btn.addEventListener('click' , async function(event) {

    event.preventDefault();

    const apelido = document.getElementById("textoApelido");
    const especie = document.getElementById("textoEspecie");
     const id = document.getElementById("textoId");
    if(!id.value==""){
    document.getElementById("textoId").value = "";    
    }
    if(meuBanco && apelido.value && especie.value){

        meuBanco.run("INSERT INTO planta (apelido, especie) VALUES (?,?)",[apelido.value, especie.value]);

        salvarEstadoBanco(meuBanco);

        alert("DADOS DE "+ apelido.value + "SALVO COM SUCESSO!");

        //
        document.getElementById("textoApelido").value = "";
        document.getElementById("textoEspecie").value = "";
        document.getElementById("textoId").value = "";
    }else{

        alert("POR FAVOR, PREENCHA TODOS OS CAMPOS!");
    }



})


window.onload = async () =>{

    console.log("Iniciando o sistema...");

    try{

        meuBanco = await carregarOuCriarBanco();

        if(navigator.online){
            sincronizarDados();
        }



    }catch(e){

        console.error("Erro ao iniciar o banco", e);
    }
}


function alterarRegistro(){
    const id = getElementById("textoId").value;
    if(!id===""){
     alert("não pode alterar registro imcompleto!!!!!");

    }else{
//colocar aqui o metodo que vai alterar no banco de banco de dados


    }
}