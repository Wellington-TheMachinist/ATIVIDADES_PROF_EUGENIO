const config = {
    locateFile: filename => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${filename}`
};

let meuBanco;

// Função para inicializar ou carregar o banco de dados do LocalStorage
async function carregarOuCriarBanco() {
    const SQL = await initSqlJs(config);
    const bancoSalvo = localStorage.getItem("almoxarifado_db");
    let db;

    if (bancoSalvo) {
        const u8 = new Uint8Array(JSON.parse(bancoSalvo));
        db = new SQL.Database(u8);
        console.log("BANCO DE DADOS RESTAURADO!");
    } else {
        db = new SQL.Database();
        // Ativar suporte a chaves estrangeiras
        db.run("PRAGMA foreign_keys = ON;");

        // Criação das tabelas (conforme sua estrutura original)
        db.run("CREATE TABLE usuario (id INTEGER PRIMARY KEY, nome TEXT, login TEXT, nivel_acesso TEXT, senha TEXT);");
        db.run("CREATE TABLE componente (id INTEGER PRIMARY KEY, componente TEXT, descricao TEXT, id_usuario INTEGER, img_diretorio TEXT, FOREIGN KEY (id_usuario) REFERENCES usuario(id));");
        db.run("CREATE TABLE deposito (id INTEGER PRIMARY KEY, nome TEXT, descricao TEXT);");
        db.run("CREATE TABLE estoque (id INTEGER PRIMARY KEY, id_componente INTEGER, id_deposito INTEGER, quant_componente INTEGER, FOREIGN KEY (id_componente) REFERENCES componente(id), FOREIGN KEY (id_deposito) REFERENCES deposito(id));");

        console.log("Novo banco de dados criado!");
    }
    return db;
}

// Salva o estado atual do banco no LocalStorage
function salvarEstadoBanco(db) {
    const dadosBinarios = db.export();
    const arrayParaSalvar = Array.from(dadosBinarios);
    localStorage.setItem("almoxarifado_db", JSON.stringify(arrayParaSalvar));
    console.log("Dados persistidos com Sucesso!!!");
}

// Preenche o Select de usuários para vincular ao componente
async function carregarUsuariosNoCombo() {
    if (!meuBanco) return;
    
    const resultado = meuBanco.exec("SELECT id, nome FROM usuario ORDER BY nome ASC;");
    const selectUsuario = document.getElementById("componente_id_usuario");
    
    // Limpa e adiciona a opção padrão
    selectUsuario.innerHTML = '<option value="">Selecione um Responsável</option>';

    if (resultado.length > 0) {
        const linhas = resultado[0].values;
        linhas.forEach(linha => {
            const option = document.createElement("option");
            option.value = linha[0]; // ID do usuário
            option.text = linha[1];  // Nome do usuário
            selectUsuario.appendChild(option);
        });
    }
}

// Evento: SALVAR NOVO COMPONENTE
document.getElementById("componente_btnEnviar").addEventListener('click', async (event) => {
    event.preventDefault();

    const nome = document.getElementById("componente_nome").value;
    const descricao = document.getElementById("componente_descricao").value;
    const idUsuario = document.getElementById("componente_id_usuario").value;

    if (meuBanco && nome && descricao && idUsuario) {
        try {
            meuBanco.run("INSERT INTO componente (componente, descricao, id_usuario, img_diretorio) VALUES (?,?,?,?)", 
                [nome, descricao, idUsuario, "teste"]);
            
            salvarEstadoBanco(meuBanco);
            alert("COMPONENTE SALVO COM SUCESSO!");
            
            // Limpar campos
            document.getElementById("componente_nome").value = "";
            document.getElementById("componente_descricao").value = "";
            document.getElementById("componente_id_usuario").value = "";
        } catch (e) {
            console.error("Erro ao salvar:", e);
            alert("Erro ao salvar componente.");
        }
    } else {
        alert("POR FAVOR, PREENCHA TODOS OS CAMPOS E SELECIONE UM USUÁRIO!");
    }
});

// Evento: ALTERAR COMPONENTE EXISTENTE
document.getElementById("componente_btnAlterar").addEventListener('click', async (event) => {
    event.preventDefault();
    
    const id = document.getElementById("componente_id").value;
    const nome = document.getElementById("componente_nome").value;
    const descricao = document.getElementById("componente_descricao").value;
    const idUsuario = document.getElementById("componente_id_usuario").value;

    if (!id || !nome || !idUsuario) {
        alert("Preencha o ID e os novos dados para alterar!");
        return;
    }

    try {
        meuBanco.run("UPDATE componente SET componente = ?, descricao = ?, id_usuario = ? WHERE id = ?", 
            [nome, descricao, idUsuario, id]);
        
        salvarEstadoBanco(meuBanco);
        alert("COMPONENTE ALTERADO COM SUCESSO!");
    } catch (erro) {
        console.error("Erro ao alterar:", erro);
        alert("Erro na alteração.");
    }
});

// Evento: LISTAR COMPONENTES (Usando JOIN para mostrar o nome do usuário)
document.getElementById("componente_btnConsultar").addEventListener('click', (event) => {
    event.preventDefault();
    const listaDisplay = document.getElementById("componente_lista");
    listaDisplay.innerText = "";

    if (!meuBanco) return;

    // Busca os componentes trazendo o nome do usuário responsável através do JOIN
    const sql = `
        SELECT c.id, c.componente, c.descricao, u.nome 
        FROM componente c
        INNER JOIN usuario u ON c.id_usuario = u.id
        ORDER BY c.id DESC;
    `;
    
    const resultado = meuBanco.exec(sql);

    if (resultado.length > 0) {
        const linhas = resultado[0].values;
        linhas.forEach(linha => {
            listaDisplay.innerText += `ID: ${linha[0]} | Nome: ${linha[1]} | Desc: ${linha[2]} | Responsável: ${linha[3]}\n`;
        });
    } else {
        listaDisplay.innerText = "Nenhum componente encontrado.";
    }
});

// Inicialização ao carregar a página
window.onload = async () => {
    try {
        meuBanco = await carregarOuCriarBanco();
        await carregarUsuariosNoCombo(); // Preenche o select de usuários assim que o banco carrega[cite: 5, 8]
        console.log("Sistema Pronto.");
    } catch (e) {
        console.error("Erro na inicialização:", e);
    }
};

function cancelar() {
    location.reload();
}