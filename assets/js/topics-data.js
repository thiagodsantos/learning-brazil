// assets/js/topics-data.js
// Base de dados central com todos os tópicos do plano, cronologia e metadados

const TOPICS_DATA = [
  {
    id: "descobrimento-do-brasil",
    slug: "descobrimento-do-brasil",
    title: "Descobrimento do Brasil (1500)",
    shortTitle: "Descobrimento do Brasil",
    period: "1500",
    order: 1,
    category: "Colônia",
    description: "A chegada da frota de Pedro Álvares Cabral à costa baiana, o início da exploração de pau-brasil e os profundos impactos sobre os povos originários.",
    icon: "⛵",
    readTime: "8 min"
  },
  {
    id: "escravidao-no-brasil",
    slug: "escravidao-no-brasil",
    title: "Escravidão no Brasil (1530 - 1888)",
    shortTitle: "Escravidão no Brasil",
    period: "1530 – 1888",
    order: 2,
    category: "Colônia & Império",
    description: "Mais de três séculos de tráfico transatlântico e escravização forçada de africanos e indígenas, as redes mercantis e as marcas profundas na sociedade.",
    icon: "⛓️",
    readTime: "12 min"
  },
  {
    id: "criacao-de-impostos",
    slug: "criacao-de-impostos",
    title: "Criação de Impostos no Brasil",
    shortTitle: "Criação de Impostos",
    period: "Século XVIII – Atualidade",
    order: 3,
    category: "Economia & Estado",
    description: "Do Quinto do Ouro colonial à estrutura tributária moderna (ICMS, ISS, IPI, IRPF, PEC da Reforma Tributária): como o Estado arrecada e aplica.",
    icon: "🪙",
    readTime: "11 min"
  },
  {
    id: "independencia-do-brasil",
    slug: "independencia-do-brasil",
    title: "Independência do Brasil (1822)",
    shortTitle: "Independência do Brasil",
    period: "1822",
    order: 4,
    category: "Império",
    description: "O rompimento com as Cortes de Lisboa, o Grito do Ipiranga, as guerras de independência provinciais e a manutenção do regime monárquico e escravocrata.",
    icon: "👑",
    readTime: "9 min"
  },
  {
    id: "proclamacao-da-republica",
    slug: "proclamacao-da-republica",
    title: "Proclamação da República (1889)",
    shortTitle: "Proclamação da República",
    period: "1889",
    order: 5,
    category: "República Velha",
    description: "A queda do Império de Dom Pedro II, a ascensão dos militares e cafeicultores paulistas, e a instauração da República da Espada e Oligárquica.",
    icon: "🏛️",
    readTime: "9 min"
  },
  {
    id: "regularizacao-do-trabalho-clt",
    slug: "regularizacao-do-trabalho-clt",
    title: "Regularização do Trabalho e a CLT (1943)",
    shortTitle: "CLT e Leis Trabalhistas",
    period: "1930 – 1943",
    order: 6,
    category: "Era Vargas",
    description: "A transformação do modelo trabalhista no Estado Novo de Getúlio Vargas, os direitos conquistados (salário mínimo, férias) e os mecanismos de controle sindical.",
    icon: "📜",
    readTime: "10 min"
  },
  {
    id: "ditadura-militar",
    slug: "ditadura-militar",
    title: "Ditadura Militar no Brasil (1964 - 1985)",
    shortTitle: "Ditadura Militar",
    period: "1964 – 1985",
    order: 7,
    category: "Regime Militar",
    description: "O golpe civil-militar de 1964, a repressão com o AI-5, censura e perseguição política, o 'Milagre Econômico' e a crise da dívida externa.",
    icon: "🪖",
    readTime: "13 min"
  },
  {
    id: "movimento-diretas-ja",
    slug: "movimento-diretas-ja",
    title: "Movimento Diretas Já (1983 - 1984)",
    shortTitle: "Diretas Já",
    period: "1983 – 1984",
    order: 8,
    category: "Redemocratização",
    description: "A maior mobilização cívica popular da história do Brasil pela aprovação da Emenda Dante de Oliveira para eleições presidenciais diretas.",
    icon: "📢",
    readTime: "8 min"
  },
  {
    id: "constituicao-de-1988",
    slug: "constituicao-de-1988",
    title: "Constituição Cidadã de 1988",
    shortTitle: "Constituição de 1988",
    period: "1987 – 1988",
    order: 9,
    category: "Redemocratização",
    description: "A Assembleia Nacional Constituinte presidida por Ulysses Guimarães que refundou a democracia brasileira, consagrando direitos fundamentais e o SUS.",
    icon: "⚖️",
    readTime: "12 min"
  },
  {
    id: "tres-poderes",
    slug: "tres-poderes",
    title: "Os Três Poderes e suas Responsabilidades",
    shortTitle: "Três Poderes",
    period: "Estrutura Republicana",
    order: 10,
    category: "Instituições",
    description: "A divisão clássica e os freios e contrapesos (checks and balances) entre os poderes Executivo, Legislativo e Judiciário no sistema democrático brasileiro.",
    icon: "⚖️",
    readTime: "10 min"
  },
  {
    id: "composicao-dos-politicos",
    slug: "composicao-dos-politicos",
    title: "Composição dos Políticos e Suas Atribuições",
    shortTitle: "Cargos Políticos",
    period: "Estrutura Federativa",
    order: 11,
    category: "Instituições",
    description: "Quem faz o que nas esferas Municipal, Estadual e Federal: prefeitos, vereadores, governadores, deputados estaduais, presidente, deputados e senadores.",
    icon: "🗳️",
    readTime: "10 min"
  },
  {
    id: "diferencas-posicoes-politicas",
    slug: "diferencas-posicoes-politicas",
    title: "Diferenças de Posições Políticas no Brasil",
    shortTitle: "Espectro Político",
    period: "Contemporâneo",
    order: 12,
    category: "Política",
    description: "Esquerda, centro e direita no contexto brasileiro: origens históricas, papel do Estado na economia, valores sociais e pautas centrais em debate.",
    icon: "🧭",
    readTime: "10 min"
  },
  {
    id: "plano-collor",
    slug: "plano-collor",
    title: "Plano Collor e o Confisco da Poupança (1990)",
    shortTitle: "Plano Collor",
    period: "1990 – 1992",
    order: 13,
    category: "Nova República",
    description: "O bloqueio draconiano das contas bancárias e poupanças em março de 1990, hiperinflação, corrupção no governo e o impeachment de Fernando Collor.",
    icon: "🔒",
    readTime: "10 min"
  },
  {
    id: "instabilidade-moedas-plano-real",
    slug: "instabilidade-moedas-plano-real",
    title: "Instabilidade das Moedas até o Plano Real (1994)",
    shortTitle: "Das Moedas ao Plano Real",
    period: "1985 – 1994",
    order: 14,
    category: "Economia",
    description: "A espiral hiperinflacionária que destruiu o poder de compra (Cruzeiro, Cruzado, Cruzado Novo, Cruzeiro Real) e a engenharia da URV que estabilizou o Real.",
    icon: "💵",
    readTime: "11 min"
  },
  {
    id: "privatizacoes",
    slug: "privatizacoes",
    title: "Privatizações no Brasil: História e Impactos",
    shortTitle: "Privatizações",
    period: "Década de 1990 – Atualidade",
    order: 15,
    category: "Economia",
    description: "O Programa Nacional de Desestatização (PND): Vale do Rio Doce, Telebrás, CSN, Eletrobras e ferrovias. Ganhos de eficiência vs. soberania e tarifas.",
    icon: "🏭",
    readTime: "11 min"
  },
  {
    id: "mensalao",
    slug: "mensalao",
    title: "Escândalo do Mensalão (2005)",
    shortTitle: "Mensalão",
    period: "2005 – 2012",
    order: 16,
    category: "Crises Políticas",
    description: "A denúncia do esquema de compra de votos parlamentares no Congresso Nacional durante o governo Lula, a AP 470 no STF e condenação de figuras de destaque.",
    icon: "💼",
    readTime: "10 min"
  },
  {
    id: "organizacoes-criminosas",
    slug: "organizacoes-criminosas",
    title: "Organizações Criminosas: Facções e Milícias",
    shortTitle: "Facções e Milícias",
    period: "1970 – Atualidade",
    order: 17,
    category: "Segurança & Estado",
    description: "A gênese do Comando Vermelho (CV) em Ilha Grande, a fundação e expansão corporativa do PCC em São Paulo, e o controle territorial das milícias no Rio.",
    icon: "⚠️",
    readTime: "12 min"
  },
  {
    id: "rachadinhas",
    slug: "rachadinhas",
    title: "O Esquema das 'Rachadinhas' no Poder Público",
    shortTitle: "Rachadinhas",
    period: "Anos 2000 – Atualidade",
    order: 18,
    category: "Corrupção",
    description: "A prática disseminada de desvio de salários de assessores fantasmas em gabinetes parlamentares (caso Queiroz/ALERJ), tipificação penal e jurisprudência.",
    icon: "✂️",
    readTime: "9 min"
  },
  {
    id: "corrupcao-lavagem-dinheiro",
    slug: "corrupcao-lavagem-dinheiro",
    title: "Corrupção, Lavagem de Dinheiro e Grandes Escândalos",
    shortTitle: "Corrupção e Lavagem",
    period: "República Moderna",
    order: 19,
    category: "Justiça & Estado",
    description: "Dos Anões do Orçamento e Sivam à Operação Lava Jato: mecanismos de lavagem via doleiros, condenações, acordos de leniência e os prejuízos ao país.",
    icon: "🧼",
    readTime: "12 min"
  },
  {
    id: "polemicas-na-gestao-do-pais",
    slug: "polemicas-na-gestao-do-pais",
    title: "Grandes Polêmicas na Gestão do País",
    shortTitle: "Polêmicas de Gestão",
    period: "1990 – Atualidade",
    order: 20,
    category: "Gestão Pública",
    description: "Emenda da Reeleição (1997), pedaladas fiscais do impeachment de 2016, a gestão da crise da COVID-19 e o 'Orçamento Secreto' (emendas RP9).",
    icon: "⚡",
    readTime: "11 min"
  },
  {
    id: "banco-master",
    slug: "banco-master",
    title: "Caso Banco Master: Expansão Agressiva e Controvérsias",
    shortTitle: "Banco Master",
    period: "2018 – Atualidade",
    order: 21,
    category: "Economia Contemporânea",
    description: "A transformação do antigo Banco Máxima sob Daniel Vorcaro, a emissão massiva de CDBs com altas taxas, aquisições ousadas e o escrutínio regulatório do BC.",
    icon: "🏦",
    readTime: "9 min"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TOPICS_DATA };
}
