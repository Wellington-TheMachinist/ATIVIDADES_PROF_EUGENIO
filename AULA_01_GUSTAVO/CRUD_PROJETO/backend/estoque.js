const config = {
    locateFile: filename => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${filename}`
};

let meuBanco;

// Inicializa ou recupera o banco de dados
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
        db.run("PRAGMA foreign_keys = ON;");
        
        // Criação das tabelas caso não existam (Garantia de estrutura)
        db.run("CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY, nome TEXT, login TEXT, nivel_acesso TEXT, senha TEXT);");
        db.run("CREATE TABLE IF NOT EXISTS componente (id INTEGER PRIMARY KEY, componente TEXT, descricao TEXT, id_usuario INTEGER, img_diretorio TEXT, FOREIGN KEY (id_usuario) REFERENCES usuario(id));");
        db.run("CREATE TABLE IF NOT EXISTS deposito (id INTEGER PRIMARY KEY, nome TEXT, descricao TEXT);");
        db.run("CREATE TABLE IF NOT EXISTS estoque (id INTEGER PRIMARY KEY, id_componente INTEGER, id_deposito INTEGER, quant_componente INTEGER, FOREIGN KEY (id_componente) REFERENCES componente(id), FOREIGN KEY (id_deposito) REFERENCES deposito(id));");
        
        console.log("Novo banco de dados criado!");
    }
    return db;
}

function salvarEstadoBanco(db) {
    const dadosBinarios = db.export();
    const arrayParaSalvar = Array.from(dadosBinarios);
    localStorage.setItem("almoxarifado_db", JSON.stringify(arrayParaSalvar));
    console.log("Dados persistidos com sucesso!");
}

// Preenche os selects de Componente e Depósito[cite: 5, 7]
async function carregarCombosEstoque() {
    if (!meuBanco) return;

    // Componentes
    const resComp = meuBanco.exec("SELECT id, componente FROM componente ORDER BY componente ASC;");
    const selectComp = document.getElementById("estoque_id_componente");
    selectComp.innerHTML = '<option value="">Selecione o Componente</option>';
    if (resComp.length > 0) {
        resComp[0].values.forEach(linha => {
            selectComp.innerHTML += `<option value="${linha[0]}">${linha[1]}</option>`;
        });
    }

    // Depósitos
    const resDep = meuBanco.exec("SELECT id, nome FROM deposito ORDER BY nome ASC;");
    const selectDep = document.getElementById("estoque_id_deposito");
    selectDep.innerHTML = '<option value="">Selecione o Depósito</option>';
    if (resDep.length > 0) {
        resDep[0].values.forEach(linha => {
            selectDep.innerHTML += `<option value="${linha[0]}">${linha[1]}</option>`;
        });
    }
}

// EVENTO: SALVAR (INSERT)[cite: 7]
document.getElementById("estoque_btnEnviar").addEventListener('click', (event) => {
    event.preventDefault();
    const idComp = document.getElementById("estoque_id_componente").value;
    const idDep = document.getElementById("estoque_id_deposito").value;
    const quant = document.getElementById("estoque_quant_comp").value;

    if (meuBanco && idComp && idDep && quant) {
        try {
            meuBanco.run("INSERT INTO estoque (id_componente, id_deposito, quant_componente) VALUES (?,?,?)", [idComp, idDep, quant]);
            salvarEstadoBanco(meuBanco);
            alert("ESTOQUE SALVO COM SUCESSO!");
            
            document.getElementById("estoque_quant_comp").value = "";
            document.getElementById("estoque_id_componente").value = "";
            document.getElementById("estoque_id_deposito").value = "";
        } catch (e) {
            alert("Erro ao inserir no estoque: " + e.message);
        }
    } else {
        alert("Preencha todos os campos!");
    }
});

// EVENTO: ALTERAR (UPDATE) - Implementado conforme solicitado[cite: 7]
document.getElementById("estoque_btnAlterar").addEventListener('click', (event) => {
    event.preventDefault();
    const idEstoque = document.getElementById("estoque_id").value;
    const idComp = document.getElementById("estoque_id_componente").value;
    const idDep = document.getElementById("estoque_id_deposito").value;
    const quant = document.getElementById("estoque_quant_comp").value;

    if (!idEstoque) {
        alert("Informe o ID do registro de estoque que deseja alterar!");
        return;
    }

    if (meuBanco && idComp && idDep && quant) {
        try {
            meuBanco.run("UPDATE estoque SET id_componente = ?, id_deposito = ?, quant_componente = ? WHERE id = ?", 
                [idComp, idDep, quant, idEstoque]);
            
            salvarEstadoBanco(meuBanco);
            alert("ESTOQUE ALTERADO COM SUCESSO!");
        } catch (e) {
            console.error(e);
            alert("Erro ao alterar estoque.");
        }
    } else {
        alert("Preencha todos os campos para realizar a alteração!");
    }
});

// EVENTO: LISTAR (CONSULTAR com JOIN)[cite: 7]
document.getElementById("estoque_btnConsultar").addEventListener('click', (event) => {
    event.preventDefault();
    const listaDisplay = document.getElementById("estoque_lista");
    listaDisplay.innerText = "";

    if (!meuBanco) return;

    // Join para mostrar nomes ao invés de IDs[cite: 7]
    const sql = `
        SELECT e.id, c.componente, d.nome, e.quant_componente 
        FROM estoque e
        INNER JOIN componente c ON e.id_componente = c.id
        INNER JOIN deposito d ON e.id_deposito = d.id
        ORDER BY e.id DESC;
    `;
    
    const resultado = meuBanco.exec(sql);

    if (resultado.length > 0) {
        resultado[0].values.forEach(linha => {
            listaDisplay.innerText += `ID: ${linha[0]} | Componente: ${linha[1]} | Depósito: ${linha[2]} | Qtd: ${linha[3]}\n`;
        });
    } else {
        listaDisplay.innerText = "Nenhum registro de estoque encontrado.";
    }
});

// Inicialização
window.onload = async () => {
    try {
        meuBanco = await carregarOuCriarBanco();
        await carregarCombosEstoque(); // Carrega os nomes nos selects[cite: 5, 8]
        console.log("Sistema de estoque pronto.");
    } catch (e) {
        console.error("Erro na inicialização:", e);
    }
};

function cancelar() {
    location.reload();
}