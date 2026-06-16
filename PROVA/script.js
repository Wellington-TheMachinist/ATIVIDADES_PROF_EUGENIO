

const config = {
    locateFile: filename => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${filename}`
};

let meuBanco;

/*
const SUPABASE_URL = 'https://ugoiiffibulgbbsgvnid.supabase.co';
const SUPABASE_KEY = 'sb_publishable_XdToxC_-hCpA3hpS7GAokA_TYasM1K4'; 
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
*/
//window.addEventListener('online', () => sincronizarDados());

/*

    /*
   async function sincronizarDados() {
    if(!navigator.onLine) return;

   
    const resultado = meuBanco.exec("SELECT id, item, valor, dono FROM registro WHERE sincronizado = 0");

    if(resultado.length > 0){
        const pendentes = resultado[0].values;

        for(let i = 0; i < pendentes.length; i++){
            const [id_local, apelido, especie] = pendentes[i];

            
            const { error } = await supabaseClient
                .from('registro')
                .upsert({ id: id_local, apelido, especie });

            if(!error){
                meuBanco.run("UPDATE registro SET sincronizado = 1 WHERE id = ?", [id_local]);
            } else {
                console.error("ERRO AO SINCRONIZAR:", error.message);
            }
        }
        salvarEstadoBanco(meuBanco);
    }
}
*/

/*
async function recuperarDadosDaNuvem() {

    if(!navigator.onLine){
        alert("Sem internet!");
        return;
    }

    const { data, error } = await supabaseClient
        .from('chevrolet_onix')
        .select('*');

    if(error){
        console.log("Erro:", error.message);
        return;
    }

    if(data && data.length > 0){

        for(let i = 0; i < data.length; i++){

            const registro = data[i];

            meuBanco.run(
                "INSERT INTO registro (item, valor, dono, sincronizado) VALUES (?,?,1)",
                [registro.apelido, registro.especie]
            );
        }

        salvarEstadoBanco(meuBanco);
        alert(`${data.length} registros recuperados`);
    }
}
*/


async function carregarOuCriarBanco() {
    
    const SQL = await initSqlJs(config);

    const bancoSalvo = localStorage.getItem("chevrolet_onix");

    let db;

    if(bancoSalvo){

        const u8 = new Uint8Array(JSON.parse(bancoSalvo));
        db = new SQL.Database(u8);

        console.log("Banco restaurado!");

    }else{

        db = new SQL.Database();

        db.run(`
            CREATE TABLE registro (
                id INTEGER PRIMARY KEY,
                item TEXT,
                valor REAL,
                dono TEXT,
                sincronizado INTEGER DEFAULT 0
            );
        `);

        console.log("Novo banco criado!");
       // await recuperarDadosDaNuvem();
    }

    return db;
}


function salvarEstadoBanco(db){

    const dados = db.export();
    const array = Array.from(dados);

    localStorage.setItem("chevrolet_onix", JSON.stringify(array));
}


const btn = document.getElementById("btnEnviar");
const btnConsultar = document.getElementById("btnConsultar");
const btnAlterar = document.getElementById("btnAlterar");


btn.addEventListener('click', function(event) {

    event.preventDefault();

    const item = document.getElementById("textoItem").value;
    const valor = document.getElementById("textoValor").value;
    const dono = document.getElementById("textoDono").value;

    if(meuBanco && item && valor && dono){

        meuBanco.run(
            "INSERT INTO registro (item, valor, dono) VALUES (?,?,?)",
            [item, valor, dono]
        );

        salvarEstadoBanco(meuBanco);

        alert("Salvo com sucesso!");

        document.getElementById("textoItem").value = "";
        document.getElementById("textoValor").value = "";
        document.getElementById("textoDono").value = "";

    }else{
        alert("Preencha tudo!");
    }
      //sincronizarDados();
}
  
);


btnConsultar.addEventListener('click', function(event) {

    event.preventDefault();

    const saida = document.getElementById("textoH");
    saida.innerText = "";

    const resultado = meuBanco.exec("SELECT * FROM registro ORDER BY id DESC");
    //const resultado = meuBanco.exec("DELETE FROM planta");

    if(resultado.length > 0){

        const linhas = resultado[0].values;

        for(let i = 0; i < linhas.length; i++){

            saida.innerText += 
                `ID: ${linhas[i][0]} | ${linhas[i][1]} | ${linhas[i][2]}\n`;
        }
    }

     // sincronizarDados();
});

//AQUI VOU TENTAR O MÉTODO EXCLUIR


btnExcluir.addEventListener('click', async function (event) {
    event.preventDefault();
    const id = document.getElementById("textoId").value;

   
    await supabaseClient.from('registro').delete().eq('id', id);

    
    meuBanco.run("DELETE FROM registro WHERE id = ?", [id]);
    salvarEstadoBanco(meuBanco);
    alert("Excluído com sucesso!");

     // sincronizarDados();
});
//O MÉTODO EXCLUIR TERMINA AQUI


btnAlterar.addEventListener('click', function (event) {

    event.preventDefault();

    const id = document.getElementById("textoId").value;
    const item = document.getElementById("textoItem").value;
    const valor = document.getElementById("textoValor").value;
    const dono = document.getElementById("textoDono").value;

    if(!id){
        alert("Informe o ID!");
        return;
    }

    meuBanco.run(
        "UPDATE registro SET item = ?,valor = ?, dono = ?, sincronizado = 0 WHERE id = ?",
        [item, valor, dono, id]
        
    );

    salvarEstadoBanco(meuBanco);

    alert("Atualizado!");

    //sincronizarDados();
});


window.onload = async () => {

    console.log("Iniciando...");

    meuBanco = await carregarOuCriarBanco();

   // if(navigator.onLine){
    //    sincronizarDados();
    //}
};

