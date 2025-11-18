/**
 * ag.js
 * Algoritmo Genético para Otimização de Expressão Genética
 * Função de Fitness: f(x) = Soma dos genes ativos (x_i = 1)
 * Objetivo: Maximização
 */

// --- Variáveis Globais (Configurações Lidas da Interface) ---
let nGenes;              // Tamanho do cromossomo
let tamanhoPopulacao;    // Tamanho da população (N)
let numGeracoes;         // Número de iterações do AG
let taxaMutacao;         // Probabilidade de mutação (Pm)
let elitismoTipo;        // 'total' ou 'parcial'
let porcentagemElitismo; // % para elitismo parcial
let tipoSelecao;         // 'roleta', 'ranking', 'torneio'
let tamanhoTorneio;      // k para seleção por torneio
let tipoCruzamento;      // 'umPonto', 'multiponto'
let numPontosCruzamento; // Quantidade de pontos para cruzamento multiponto

// --- Variáveis de Monitoramento ---
let melhorGlobal = {
    cromossomo: null,
    fitness: -1,
    geracao: -1
};

// --- Funções Auxiliares ---

/**
 * Função para ler as configurações da interface e validar.
 */
function lerConfiguracoes() {
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

    // Validações básicas
    if (nGenes <= 0 || tamanhoPopulacao <= 0 || numGeracoes <= 0 || taxaMutacao < 0 || taxaMutacao > 1) {
        alert("Por favor, verifique se os valores de entrada são válidos.");
        return false;
    }
    return true;
}

/**
 * Função de Fitness: Avalia a aptidão de um indivíduo.
 * Para este problema: f(x) = Soma dos bits (genes ativos).
 * @param {Array<number>} cromossomo - O vetor binário de genes (ex: [1, 0, 1, 1]).
 * @returns {number} O valor de fitness.
 */
function calcularFitness(cromossomo) {
    // A soma dos 1s no vetor binário
    return cromossomo.reduce((soma, gene) => soma + gene, 0);
}

// --- Funções de Operadores Genéticos ---

/**
 * 1. Inicialização da População
 * Cria uma população inicial de forma aleatória.
 * @returns {Array<Object>} Uma população de objetos { cromossomo: Array, fitness: number }.
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

/**
 * 2. Seleção de Pais
 * Seleciona um par de pais da população para o cruzamento.
 * Implementação: Roleta (Wheel Roulette).
 * @param {Array<Object>} populacao - A população atual.
 * @returns {Array<Array<number>>} Um par de cromossomos selecionados.
 */
function selecionarPaisRoleta(populacao) {
    // Calcula a soma total do fitness da população
    const totalFitness = populacao.reduce((soma, indiv) => soma + indiv.fitness, 0);

    // Função interna para selecionar um único indivíduo
    const selecionarIndividuo = () => {
        // Gera um número aleatório entre 0 e totalFitness
        let roletaPonto = Math.random() * totalFitness;
        let somaParcial = 0;

        // Gira a roleta
        for (const indiv of populacao) {
            somaParcial += indiv.fitness;
            if (somaParcial >= roletaPonto) {
                return indiv.cromossomo;
            }
        }
        // Fallback (deve retornar o último em caso de erro de ponto flutuante)
        return populacao[populacao.length - 1].cromossomo;
    };

    // Seleciona os dois pais
    const pai1 = selecionarIndividuo();
    const pai2 = selecionarIndividuo();

    return [pai1, pai2];
}

/**
 * TODO: Implementar Seleção por Ranking e Torneio
 * function selecionarPaisRanking(populacao) { ... }
 * function selecionarPaisTorneio(populacao) { ... }
 */

/**
 * 3. Cruzamento (Crossover)
 * Combina o material genético de dois pais para criar dois filhos.
 * Implementação: Um Ponto de Corte.
 * @param {Array<number>} pai1 - Cromossomo do primeiro pai.
 * @param {Array<number>} pai2 - Cromossomo do segundo pai.
 * @returns {Array<Array<number>>} Um par de cromossomos filhos.
 */
function cruzarUmPonto(pai1, pai2) {
    // Ponto de corte aleatório (não pode ser o primeiro ou o último gene)
    const pontoCorte = Math.floor(Math.random() * (nGenes - 1)) + 1; 

    // Criação do Filho 1
    const filho1 = [
        ...pai1.slice(0, pontoCorte), // Início do Pai 1
        ...pai2.slice(pontoCorte)    // Fim do Pai 2
    ];

    // Criação do Filho 2
    const filho2 = [
        ...pai2.slice(0, pontoCorte), // Início do Pai 2
        ...pai1.slice(pontoCorte)    // Fim do Pai 1
    ];

    return [filho1, filho2];
}

/**
 * TODO: Implementar Cruzamento Multiponto
 * function cruzarMultiponto(pai1, pai2, numPontos) { ... }
 */

/**
 * 4. Mutação
 * Altera aleatoriamente os genes de um cromossomo com base na taxa de mutação.
 * @param {Array<number>} cromossomo - O cromossomo a ser mutado.
 * @returns {Array<number>} O cromossomo mutado.
 */
function mutar(cromossomo) {
    return cromossomo.map(gene => {
        // Se um número aleatório for menor que a taxa de mutação
        if (Math.random() < taxaMutacao) {
            // Inverte o gene (0 vira 1, 1 vira 0)
            return 1 - gene;
        }
        return gene;
    });
}

/**
 * 5. Elitismo
 * Preserva os melhores indivíduos da população anterior.
 * @param {Array<Object>} populacaoAntiga - População antes do cruzamento e mutação.
 * @param {Array<Object>} novaPopulacao - População de filhos gerados.
 * @returns {Array<Object>} A nova população com os indivíduos de elite inseridos.
 */
function aplicarElitismo(populacaoAntiga, novaPopulacao) {
    // 1. Classificar a população antiga por fitness (decrescente)
    populacaoAntiga.sort((a, b) => b.fitness - a.fitness);

    let numElite;
    if (elitismoTipo === 'total') {
        // Elitismo total: passa um único melhor indivíduo
        numElite = 1; 
    } else { // 'parcial'
        // Elitismo parcial: passa N% dos melhores
        numElite = Math.ceil(tamanhoPopulacao * (porcentagemElitismo / 100));
        // Garante que pelo menos 1, se % for > 0
        if (porcentagemElitismo > 0 && numElite === 0) numElite = 1;
    }

    // Os melhores indivíduos da população antiga
    const elite = populacaoAntiga.slice(0, numElite);

    // 2. Substituir os piores da nova população pela elite
    // Classificar a nova população por fitness (crescente) para identificar os piores
    novaPopulacao.sort((a, b) => a.fitness - b.fitness);

    // Remover os 'piores' (em número igual ao da elite)
    novaPopulacao.splice(0, numElite);

    // 3. Adicionar a elite de volta
    return [...novaPopulacao, ...elite];
}


// --- Função Principal do Algoritmo Genético ---

function iniciarAG() {
    if (!lerConfiguracoes()) return;

    document.getElementById('logResultados').innerHTML = ''; // Limpar resultados anteriores
    melhorGlobal = { cromossomo: null, fitness: -1, geracao: -1 }; // Resetar melhor global

    let populacao = inicializarPopulacao();
    let logHTML = '';

    for (let geracao = 0; geracao < numGeracoes; geracao++) {
        // 1. Avaliação (O fitness já foi calculado na inicialização e será recalculado após mutação)
        
        // 2. Monitoramento e Atualização do Melhor Global
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
            logHTML += `<p style="color: green;"><strong>Ótimo Encontrado!</strong></p>`;
            break; 
        }

        // Preparação para a próxima geração
        let novaPopulacao = [];
        
        // Aplicar Elitismo (se houver, a elite é guardada e adicionada no final)
        let eliteParaManter = [];
        let numElite = (elitismoTipo === 'total') ? 1 : Math.ceil(tamanhoPopulacao * (porcentagemElitismo / 100));
        
        if (numElite > 0) {
            // Ordena e armazena a elite temporariamente
            populacao.sort((a, b) => b.fitness - a.fitness);
            eliteParaManter = populacao.slice(0, numElite);
            // Reduz o número de indivíduos a gerar, considerando a elite
            tamanhoPopulacaoGerar = tamanhoPopulacao - eliteParaManter.length;
        } else {
            tamanhoPopulacaoGerar = tamanhoPopulacao;
        }


        // 3. Loop de Geração (Seleção, Cruzamento, Mutação)
        while (novaPopulacao.length < tamanhoPopulacaoGerar) {
            // SELEÇÃO: Chama a função de seleção escolhida (usando Roleta como exemplo)
            let pais;
            switch(tipoSelecao) {
                case 'roleta':
                    pais = selecionarPaisRoleta(populacao);
                    break;
                // TODO: Adicionar cases para 'ranking' e 'torneio'
                default:
                    pais = selecionarPaisRoleta(populacao);
            }
            const pai1 = pais[0];
            const pai2 = pais[1];

            // CRUZAMENTO: Chama a função de cruzamento escolhida (usando Um Ponto como exemplo)
            let filhos;
            switch(tipoCruzamento) {
                case 'umPonto':
                    filhos = cruzarUmPonto(pai1, pai2);
                    break;
                // TODO: Adicionar case para 'multiponto'
                default:
                    filhos = cruzarUmPonto(pai1, pai2);
            }
            let filho1 = filhos[0];
            let filho2 = filhos[1];

            // MUTAÇÃO
            filho1 = mutar(filho1);
            filho2 = mutar(filho2);

            // Adiciona à nova população, garantindo o limite
            if (novaPopulacao.length < tamanhoPopulacaoGerar) {
                novaPopulacao.push({
                    cromossomo: filho1,
                    fitness: calcularFitness(filho1)
                });
            }
            if (novaPopulacao.length < tamanhoPopulacaoGerar) {
                novaPopulacao.push({
                    cromossomo: filho2,
                    fitness: calcularFitness(filho2)
                });
            }
        }
        
        // 4. Inserção da Elite
        // A nova população da próxima geração é composta pelos filhos gerados e pela elite mantida
        populacao = [...novaPopulacao, ...eliteParaManter];

    } // Fim do Loop de Gerações

    // 5. Exibição dos Resultados Finais
    document.getElementById('logResultados').innerHTML += logHTML;

    const resultadoFinalHTML = `
        <h3>Melhor Sequência Encontrada</h3>
        <p><strong>Fitness Máximo:</strong> ${melhorGlobal.fitness}/${nGenes}</p>
        <p><strong>Geração Encontrada:</strong> ${melhorGlobal.geracao}</p>
        <p><strong>Cromossomo:</strong> [${melhorGlobal.cromossomo ? melhorGlobal.cromossomo.join(', ') : 'N/A'}]</p>
    `;
    document.getElementById('melhorGlobal').innerHTML = resultadoFinalHTML;
}