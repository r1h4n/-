const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "como a escolha de materiais sustentáveis na fabricação de bolas de vôlei pode ajudar a reproduzir o impacto do desmatamento global?",
        alternativas: [
            {
                texto: "A escolha de materiais sustentável, como borrachas reciclada ou couro sintético, na fabricação de bolas de vôlei pode diminuir a demanda por recursos naturais, ajudando a reduzir o desmatamento associado À extração de matérias primas.",
                afirmacao: "afirmação",
            },
            {
                texto: "optar por materiais eco friendly nas bolas de vôlei contribui para a conservação das florestas, já que diminui a necessidade de áreas desmatadas para a produção de couro ou borracha natural, promovendo práticas mais responsáveis.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "De que maneira os jogadores de basquete pode influenciar a reprodução do lixo nas arenas e eventos esportivos?",
        alternativas: [
            {
                texto: "Jogadores de basquete podem influenciar a redução do lixo promovendo campanhas de conscientização sobre reciclagem entre os fãs e durante os eventos.",
                afirmacao: "afirmação"
            },
            {
                texto: "ao adotarem práticas sustentáveis, como o uso de garrafas reutilizáveis e incentivarem a reparação correta de resíduos, os jogadores de basquete podem servir de exemplo e inspirar mudanças positivas no comportamento do público em relação ao lixo.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Como a fumaça afetaria o desempenho dos jogadores em uma partida de futevôlei no campo?",
        alternativas: [
            {
                texto: "A fumaça pode prejudicar a visibilidade dos jogadores, dificultando a leitura do jogo e a reação rápida às jogadas.",
                afirmacao: "afirmação",
                "para ficar com visibilidade"
            },
            {
                texto: "a exposição á fumaça pode afetar a coordenação motora e os reflexos dos jogadores, diminuindo sua capacidade de reagir rapidamente e de forma precisa aos movimentos da bola e dos adversários."
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function aleatorio (lista){
    const posicao = Math.random()*lista.length;
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
