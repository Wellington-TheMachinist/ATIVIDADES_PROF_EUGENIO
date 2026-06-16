// pograma.js

function verificarAcessoMenu() {
    // 1. Recupera o usuário logado do localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem("usuario_logado"));

    // 2. Captura o link de Gerenciamento de Usuários
    // Vamos buscar pelo texto do link ou pelo href
    const links = document.querySelectorAll(".navcontent .a");
    let linkUsuario = null;

    links.forEach(link => {
        if (link.href.includes("usuario.html")) {
            linkUsuario = link;
        }
    });

    // 3. Lógica de restrição[cite: 8]
    if (!usuarioLogado || usuarioLogado.nivel_acesso !== "adm") {
        if (linkUsuario) {
            // Remove o link e o separador "|" se o usuário não for ADM
            linkUsuario.style.display = "none";
            
            // Opcional: Remover o caractere "|" que fica sobrando
            const nav = document.querySelector(".navcontent");
            if (nav) {
                nav.innerHTML = nav.innerHTML.replace(" |", "");
            }
            
            console.log("Acesso restrito: Link de usuários ocultado.");
        }
    } else {
        console.log("Bem-vindo, Administrador!");
    }
}

// Executa a verificação assim que a página carregar
window.onload = () => {
    verificarAcessoMenu();
};