/**
 * ag.js
 * Algoritmo Genético para Otimização de Expressão Genética
 * Função de Fitness: f(x) = Soma dos genes ativos (x_i = 1) - Maximização
 * CÓDIGO COMPLETO com Roleta, Ranking, Torneio, Um Ponto e Multiponto.
 */

// --- Variáveis Globais (Configurações Lidas da Interface) ---
let nGenes;              
let tamanhoPopulacao;    
let numGeracoes;         
let taxaMutacao;         
let elitismoTipo;        
let porcentagemElitismo; 
let tipoSelecao;         
let tamanhoTorneio;      
let tipoCruzamento;      
let numPontosCruzamento; 

// --- Variáveis de Monitoramento ---
let melhorGlobal = {
    cromossomo: null,
    fitness: -1,
    geracao: -1
};

// --- Funções Auxiliares e de Setup ---

/**
 * Função para ler as configurações da interface e validar.
 */
function lerConfiguracoes() {
    // 1. Lê e converte todos os parâmetros da interface
    nGenes = parseInt(document.getElementById('nGenes').value);
    tamanhoPopulacao = parseInt(document.getElementById('tamanhoPopulacao').value);
    numGeracoes = parseInt(document.getElementById('numGeracoes').value);
    taxaMutacao = parseFloat(document.getElementById('taxaMutacao').value);
    
    elitismoTipo = document.getElementById('elitismoTipo').value;
    porcentagemElitismo = parseInt(document.getElementById('porcentagemElitismo').value);
    
    tipoSelecao = document.getElementById('tipoSelecao').value;
    tamanhoTorneio = parseInt(document.getElementById('tamanhoTorneio').value);
    
    tipoCruzamento = document.getElementById('tipoCruzamento').value;
    numPontosCruzamento = parseInt(document.getElementById('numPontosCruzamento').value);

    // 2. Validações básicas
    if (nGenes <= 0 || tamanhoPopulacao <= 0 || numGeracoes <= 0 || taxaMutacao < 0 || taxaMutacao > 1) {
        alert("Erro de Configuração: Por favor, verifique se os valores de entrada são válidos (positivos e taxa entre 0 e 1).");
        return false;
    }
    if (tamanhoTorneio > tamanhoPopulacao) {
        alert("Erro de Configuração: O tamanho do torneio não pode ser maior que o tamanho da população.");
        return false;
    }
    if (tipoCruzamento === 'multiponto' && (numPontosCruzamento <= 1 || numPontosCruzamento >= nGenes)) {
         alert(`Erro de Configuração: O número de pontos de cruzamento deve ser entre 2 e ${nGenes - 1}.`);
        return false;
    }
    return true;
}

/**
 * Função de Fitness: f(x) = Soma dos genes ativos (x_i = 1).
 * @param {Array<number>} cromossomo - O vetor binário de genes.
 * @returns {number} O valor de fitness.
 */
function calcularFitness(cromossomo) {
    return cromossomo.reduce((soma, gene) => soma + gene, 0);
}

/**
 * Inicialização da População
 * Cria uma população inicial de forma aleatória.
 */
function inicializarPopulacao() {
    let populacao = [];
    for (let i = 0; i < tamanhoPopulacao; i++) {
        let cromossomo = [];
        for (let j = 0; j < nGenes; j++) {
            // Gera 0 ou 1 aleatoriamente
            cromossomo.push(Math.random() < 0.5 ? 0 : 1); 
        }
        populacao.push({
            cromossomo: cromossomo,
            fitness: calcularFitness(cromossomo)
        });
    }
    return populacao;
}

// --- Operadores de Seleção (d) ---

/**
 * Seleção por Roleta (Wheel Roulette).
 */
function selecionarPaisRoleta(populacao) {
    const totalFitness = populacao.reduce((soma, indiv) => soma + indiv.fitness, 0);
    if (totalFitness === 0) return [populacao[0].cromossomo, populacao[1].cromossomo]; // Evita divisão por zero

    const selecionarIndividuo = () => {
        let roletaPonto = Math.random() * totalFitness;
        let somaParcial = 0;
        for (const indiv of populacao) {
            somaParcial += indiv.fitness;
            if (somaParcial >= roletaPonto) {
                return indiv.cromossomo;
            }
        }
        return populacao[populacao.length - 1].cromossomo;
    };

    return [selecionarIndividuo(), selecionarIndividuo()];
}

/**
 * Seleção por Ranking.
 */
function selecionarPaisRanking(populacao) {
    // 1. Classificar a população por fitness (decrescente)
    // Cria uma cópia para não alterar a população original
    const populacaoOrdenada = [...populacao].sort((a, b) => b.fitness - a.fitness);

    // 2. Atribui um rank (do 1 ao N), onde o rank é o fitness "ponderado"
    // Usamos uma atribuição linear simples: Rank[i] = N - i (onde i é o índice)
    const totalRank = tamanhoPopulacao * (tamanhoPopulacao + 1) / 2; // Soma dos ranks de 1 a N
    
    // 3. Simula a roleta usando o Rank (em vez do fitness)
    const selecionarIndividuo = () => {
        let roletaPonto = Math.random() * totalRank;
        let somaRankParcial = 0;

        for (let i = 0; i < tamanhoPopulacao; i++) {
            // Rank do indivíduo: N - i (o melhor tem Rank N)
            const rank = tamanhoPopulacao - i; 
            somaRankParcial += rank;
            
            if (somaRankParcial >= roletaPonto) {
                return populacaoOrdenada[i].cromossomo;
            }
        }
        return populacaoOrdenada[populacaoOrdenada.length - 1].cromossomo;
    };

    return [selecionarIndividuo(), selecionarIndividuo()];
}

/**
 * Seleção por Torneio (Tournament Selection).
 */
function selecionarPaisTorneio(populacao, k) {
    // Função para selecionar o melhor indivíduo de um torneio de tamanho k
    const realizarTorneio = () => {
        let melhorCompetidor = { fitness: -1 };
        
        for (let i = 0; i < k; i++) {
            // Sorteia um índice aleatório na população
            const indiceAleatorio = Math.floor(Math.random() * tamanhoPopulacao);
            const competidor = populacao[indiceAleatorio];

            if (competidor.fitness > melhorCompetidor.fitness) {
                melhorCompetidor = competidor;
            }
        }
        return melhorCompetidor.cromossomo;
    };

    return [realizarTorneio(), realizarTorneio()];
}

// --- Operadores de Cruzamento (e) ---

/**
 * Cruzamento Um Ponto (já estava implementado, mantido para completude).
 */
function cruzarUmPonto(pai1, pai2) {
    const pontoCorte = Math.floor(Math.random() * (nGenes - 1)) + 1; 

    const filho1 = [...pai1.slice(0, pontoCorte), ...pai2.slice(pontoCorte)];
    const filho2 = [...pai2.slice(0, pontoCorte), ...pai1.slice(pontoCorte)];

    return [filho1, filho2];
}

/**
 * Cruzamento Multiponto.
 * Sorteia N pontos de corte e troca as seções alternadamente.
 */
function cruzarMultiponto(pai1, pai2, numPontos) {
    let pontosCorte = [];
    while (pontosCorte.length < numPontos) {
        // Ponto de corte entre 1 e nGenes - 1
        const novoPonto = Math.floor(Math.random() * (nGenes - 1)) + 1;
        if (!pontosCorte.includes(novoPonto)) {
            pontosCorte.push(novoPonto);
        }
    }
    pontosCorte.sort((a, b) => a - b);
    
    // Adiciona 0 e nGenes para facilitar o loop de fatiamento
    pontosCorte = [0, ...pontosCorte, nGenes];

    let filho1 = [];
    let filho2 = [];
    let troca = true; // Começa pegando do Pai 1 para Filho 1, e Pai 2 para Filho 2

    for (let i = 0; i < pontosCorte.length - 1; i++) {
        const inicio = pontosCorte[i];
        const fim = pontosCorte[i + 1];
        
        const fatiaPai1 = pai1.slice(inicio, fim);
        const fatiaPai2 = pai2.slice(inicio, fim);

        if (troca) {
            filho1 = [...filho1, ...fatiaPai1];
            filho2 = [...filho2, ...fatiaPai2];
        } else {
            filho1 = [...filho1, ...fatiaPai2];
            filho2 = [...filho2, ...fatiaPai1];
        }
        troca = !troca; // Alterna a origem dos genes
    }

    return [filho1, filho2];
}

// --- Operador de Mutação e Elitismo ---

/**
 * Mutação (f).
 */
function mutar(cromossomo) {
    return cromossomo.map(gene => {
        if (Math.random() < taxaMutacao) {
            return 1 - gene; // Inverte o gene (0 -> 1, 1 -> 0)
        }
        return gene;
    });
}

/**
 * Elitismo (c).
 */
function aplicarElitismo(populacaoAntiga, novaPopulacao) {
    // 1. Classificar a população antiga por fitness (decrescente)
    populacaoAntiga.sort((a, b) => b.fitness - a.fitness);

    let numElite;
    if (elitismoTipo === 'total') {
        numElite = 1; 
    } else { // 'parcial'
        numElite = Math.ceil(tamanhoPopulacao * (porcentagemElitismo / 100));
        if (porcentagemElitismo > 0 && numElite === 0) numElite = 1; // Garante pelo menos 1 se a % for > 0
    }

    if (numElite === 0) return novaPopulacao; // Nenhum elitismo

    // 2. Os melhores indivíduos da população antiga
    const elite = populacaoAntiga.slice(0, numElite);

    // 3. Substituir os piores da nova população pela elite
    // Classificar a nova população por fitness (crescente) para identificar os piores
    novaPopulacao.sort((a, b) => a.fitness - b.fitness);

    // Remover os 'piores' em número igual ao da elite
    novaPopulacao.splice(0, numElite);

    // 4. Adicionar a elite de volta
    return [...novaPopulacao, ...elite];
}


// --- Função Principal do Algoritmo Genético ---

function iniciarAG() {
    if (!lerConfiguracoes()) return;

    document.getElementById('logResultados').innerHTML = ''; 
    melhorGlobal = { cromossomo: null, fitness: -1, geracao: -1 };

    let populacao = inicializarPopulacao();
    let logHTML = '';

    for (let geracao = 0; geracao < numGeracoes; geracao++) {
        
        // 1. Avaliação e Monitoramento do Melhor Global
        let melhorAtual = populacao.reduce((melhor, indiv) => {
            return indiv.fitness > melhor.fitness ? indiv : melhor;
        }, { fitness: -1 });

        if (melhorAtual.fitness > melhorGlobal.fitness) {
            melhorGlobal.cromossomo = melhorAtual.cromossomo;
            melhorGlobal.fitness = melhorAtual.fitness;
            melhorGlobal.geracao = geracao;
        }

        logHTML += `<div class="resultado-geracao">`;
        logHTML += `<strong>Geração ${geracao}:</strong> Melhor Fitness = ${melhorAtual.fitness}/${nGenes}. Fitness Global = ${melhorGlobal.fitness}/${nGenes}.`;
        logHTML += `</div>`;

        // Condição de Parada (se o ótimo for encontrado)
        if (melhorGlobal.fitness === nGenes) {
            logHTML += `<p style="color: green; font-weight: bold;">Ótimo Global Encontrado na Geração ${geracao}!</p>`;
            break; 
        }

        let novaPopulacao = [];
        const numIndividuosGerar = tamanhoPopulacao; // Não usamos elitismo no loop, ele é feito no final
        

        // 2. Loop de Geração (Seleção, Cruzamento, Mutação)
        while (novaPopulacao.length < numIndividuosGerar) {
            
            // SELEÇÃO: Escolhe o método de seleção
            let pais;
            switch(tipoSelecao) {
                case 'roleta':
                    pais = selecionarPaisRoleta(populacao);
                    break;
                case 'ranking':
                    pais = selecionarPaisRanking(populacao);
                    break;
                case 'torneio':
                    pais = selecionarPaisTorneio(populacao, tamanhoTorneio);
                    break;
                default:
                    pais = selecionarPaisRoleta(populacao);
            }
            const [pai1, pai2] = pais;

            // CRUZAMENTO: Escolhe o método de cruzamento
            let filhos;
            switch(tipoCruzamento) {
                case 'umPonto':
                    filhos = cruzarUmPonto(pai1, pai2);
                    break;
                case 'multiponto':
                    filhos = cruzarMultiponto(pai1, pai2, numPontosCruzamento);
                    break;
                default:
                    filhos = cruzarUmPonto(pai1, pai2);
            }
            let [filho1, filho2] = filhos;

            // MUTAÇÃO
            filho1 = mutar(filho1);
            filho2 = mutar(filho2);

            // Adiciona filhos à nova população
            if (novaPopulacao.length < numIndividuosGerar) {
                novaPopulacao.push({ cromossomo: filho1, fitness: calcularFitness(filho1) });
            }
            if (novaPopulacao.length < numIndividuosGerar) {
                novaPopulacao.push({ cromossomo: filho2, fitness: calcularFitness(filho2) });
            }
        }
        
        // 3. Aplicação do Elitismo (Substitui os piores da nova população pela elite da antiga)
        populacao = aplicarElitismo(populacao, novaPopulacao);

    } // Fim do Loop de Gerações

    // 4. Exibição dos Resultados Finais
    document.getElementById('logResultados').innerHTML += logHTML;

    const resultadoFinalHTML = `
        <h3>🎉 Melhor Sequência Encontrada</h3>
        <p><strong>Expressão Máxima (Fitness):</strong> ${melhorGlobal.fitness}/${nGenes}</p>
        <p><strong>Geração Encontrada:</strong> ${melhorGlobal.geracao === -1 ? 'Inicial' : melhorGlobal.geracao}</p>
        <p><strong>Cromossomo:</strong> <code>[${melhorGlobal.cromossomo ? melhorGlobal.cromossomo.join(', ') : 'N/A'}]</code></p>
        <p style="font-size: 0.9em; margin-top: 10px;">(Onde 1 = Gene Ativo e 0 = Gene Silenciado)</p>
    `;
    document.getElementById('melhorGlobal').innerHTML = resultadoFinalHTML;
}