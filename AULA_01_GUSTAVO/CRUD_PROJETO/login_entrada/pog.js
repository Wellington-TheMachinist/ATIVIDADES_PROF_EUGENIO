const config = {
    locateFile: filename => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${filename}`
};

let meuBanco;

// Função para carregar ou criar o banco de dados
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

        // Criação das tabelas iniciais
        db.run("CREATE TABLE usuario (id INTEGER PRIMARY KEY, nome TEXT, login TEXT, nivel_acesso TEXT, senha TEXT);");
        db.run("CREATE TABLE componente (id INTEGER PRIMARY KEY, componente TEXT, descricao TEXT, id_usuario INTEGER, img_diretorio TEXT, FOREIGN KEY (id_usuario) REFERENCES usuario(id));");
        db.run("CREATE TABLE deposito (id INTEGER PRIMARY KEY, nome TEXT, descricao TEXT);");
        db.run("CREATE TABLE estoque (id INTEGER PRIMARY KEY, id_componente INTEGER, id_deposito INTEGER, quant_componente INTEGER, FOREIGN KEY (id_componente) REFERENCES componente(id), FOREIGN KEY (id_deposito) REFERENCES deposito(id));");

        // Inserir usuário administrador inicial para teste
        db.run("INSERT INTO usuario (nome, login, nivel_acesso, senha) VALUES ('Administrador','admin','adm','1234');");

        salvarBanco(db);
        console.log("Novo banco de dados criado!");
    }
    return db;
}

function salvarBanco(db) {
    const data = db.export();
    localStorage.setItem("almoxarifado_db", JSON.stringify(Array.from(data)));
}

// Inicialização ao carregar a janela
window.onload = async () => {
    console.log("Iniciando o sistema...");
    try {
        meuBanco = await carregarOuCriarBanco();
    } catch (e) {
        console.error("Erro ao iniciar o banco", e);
    }
};

// --- LOGIN COM USUÁRIO E SENHA ---
document.getElementById('btnLogin').addEventListener('click', () => {
    const usuarioInput = document.getElementById('usuario').value;
    const senhaInput = document.getElementById('senha').value;

    if (!meuBanco) {
        alert("Banco não carregado!");
        return;
    }

    // Busca o usuário correspondente
    const stmt = meuBanco.prepare("SELECT * FROM usuario WHERE login = ? AND senha = ?");
    stmt.bind([usuarioInput, senhaInput]);

    if (stmt.step()) {
        // Captura os dados do usuário como um objeto
        const dadosUsuario = stmt.getAsObject();

        // Salva os dados no localStorage para controle de acesso nas outras telas
        localStorage.setItem("usuario_logado", JSON.stringify(dadosUsuario));

        console.log("Login realizado com sucesso! Nível:", dadosUsuario.nivel_acesso);
        
        // Redireciona para a página principal
        window.location.href = "../pagina_principal/index.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
    stmt.free();
});

// --- LOGIN POR BIOMETRIA ---
document.getElementById('btnBiometria').addEventListener('click', async (e) => {
    e.preventDefault();

    if (!window.PublicKeyCredential) {
        alert("Biometria não suportada neste dispositivo");
        return;
    }

    try {
        const challenge = window.crypto.getRandomValues(new Uint8Array(32));
        const biometrico = await navigator.credentials.create({
            publicKey: {
                challenge: challenge,
                rp: { name: "App de login", id: window.location.hostname },
                user: {
                    id: window.crypto.getRandomValues(new Uint8Array(16)),
                    name: "well737ng@gmail.com",
                    displayName: "Prof. Wellington Jr."
                },
                pubKeyCredParams: [
                    { alg: -7, type: "public-key" },
                    { alg: -257, type: "public-key" }
                ],
                authenticatorSelection: {
                    authenticatorAttachment: "platform",
                    userVerification: "required"
                },
                timeout: 60000
            }
        });

        if (biometrico) {
            // Nota: Para um sistema real, você buscaria o usuário vinculado a esta digital.
            // Aqui, simulamos um login de administrador para fins de teste.
            const userSimulado = { nome: "Admin Bio", login: "admin", nivel_acesso: "adm" };
            localStorage.setItem("usuario_logado", JSON.stringify(userSimulado));
            
            alert("Digital reconhecida!");
            window.location.href = "../pagina_principal/index.html";
        }
    } catch (err) {
        console.error(err);
        alert("Falha na identificação biométrica.");
    }
});
/*

const config = {
  locateFile: filename => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${filename}`
};

let meuBanco;

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

    db.run("CREATE TABLE usuario (id INTEGER PRIMARY KEY, nome TEXT, login TEXT, nivel_acesso TEXT, senha TEXT);");
    db.run("CREATE TABLE componente (id INTEGER PRIMARY KEY, componente TEXT, descricao TEXT, id_usuario INTEGER, img_diretorio TEXT, FOREIGN KEY (id_usuario) REFERENCES usuario(id));");
    db.run("CREATE TABLE deposito (id INTEGER PRIMARY KEY, nome TEXT, descricao TEXT);");
    db.run("CREATE TABLE estoque (id INTEGER PRIMARY KEY, id_componente INTEGER, id_deposito INTEGER, quant_componente INTEGER, FOREIGN KEY (id_componente) REFERENCES componente(id), FOREIGN KEY (id_deposito) REFERENCES deposito(id));");

    // Inserir usuário de teste
    db.run("INSERT INTO usuario (nome, login, nivel_acesso, senha) VALUES ('Administrador','admin','alto','1234');");

    salvarBanco(db);
    console.log("Novo banco de dados criado!");
  }
  return db;
}

function salvarBanco(db) {
  const data = db.export();
  localStorage.setItem("almoxarifado_db", JSON.stringify(Array.from(data)));
}

window.onload = async () => {
  console.log("Iniciando o sistema...");
  try {
    meuBanco = await carregarOuCriarBanco();
  } catch (e) {
    console.error("Erro ao iniciar o banco", e);
  }
};

// LOGIN COM USUÁRIO E SENHA
document.getElementById('btnLogin').addEventListener('click', () => {
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  if (!meuBanco) {
    alert("Banco não carregado!");
    return;
  }

  const stmt = meuBanco.prepare("SELECT * FROM usuario WHERE login = ? AND senha = ?");
  stmt.bind([usuario, senha]);

  if (stmt.step()) {
    window.location.href = "../pagina_principal/index.html";
  } else {
    alert("Usuário não identificado");
  }
  stmt.free();
});

// BIOMETRIA
document.getElementById('btnBiometria').addEventListener('click', async (e) => {
  e.preventDefault(); // evita envio do form

  if (!window.PublicKeyCredential) {
    alert("Biometria não suportada neste dispositivo");
    return;
  }

  try {
    const challenge = window.crypto.getRandomValues(new Uint8Array(32));
    const biometrico = await navigator.credentials.create({
      publicKey: {
        challenge: challenge,
        rp: { name: "App de login", id: window.location.hostname },
        user: {
          id: window.crypto.getRandomValues(new Uint8Array(16)),
          name: "well737ng@gmail.com",
          displayName: "Prof. Wellington Jr."
        },
        pubKeyCredParams: [
          { alg: -7, type: "public-key" },
          { alg: -257, type: "public-key" }
        ],
        authenticatorSelection: {
          authenticatorAttachment: "platform",
          userVerification: "required"
        },
        timeout: 60000
      }
    });

    if (biometrico) {
      alert("Digital reconhecida!!");
      window.location.href = "../pagina_principal/index.html";
    }
  } catch (err) {
    alert("Usuário não identificado");
  }
});
*/
//ATÉ AQUI PRA CIMA TUDO ESTAVA RODANDO LISO
/*
document.getElementById('btnLogin').addEventListener('click', () => {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    
    if (usuario === "admin" && senha === "1234") {
        window.location.href = "../pagina_principal/index.html";
    } else {
        alert("Usuário não identificado");
    }
});


document.getElementById('btnBiometria').addEventListener('click', async () => {
    if (!window.PublicKeyCredential) {
        alert("Biometria não suportada neste dispositivo");
        return;
    }

    try {
        const challenge = window.crypto.getRandomValues(new Uint8Array(32));

        const biometrico = await navigator.credentials.create({
            publicKey: {
                challenge: challenge,
                rp: {
                    name: "App de login",
                    id: window.location.hostname
                },
                user: {
                    id: window.crypto.getRandomValues(new Uint8Array(16)),
                    name: "well737ng@gmail.com",
                    displayName: "Prof. Wellington Jr."
                },
                pubKeyCredParams: [
                    { alg: -7, type: "public-key" },
                    { alg: -257, type: "public-key" }
                ],
                authenticatorSelection: {
                    authenticatorAttachment: "platform",
                    userVerification: "required"
                },
                timeout: 60000
            }
        });

        if (biometrico) {
            alert("Digital reconhecida!!");
            
            window.location.href = "../pagina_principal/index.html";
        }

    } catch (err) {
        alert("Usuário não identificado");
    }
});
*/