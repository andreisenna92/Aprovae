/* =====================================================================
   Aprovaê+Graduação — Engenharia de Software • 2º período
   Aulas, simulações, questões e flashcards ORIGINAIS, escritos para o Aprovaê.
   ===================================================================== */
(function () {
const Q = (q, o, a, e) => ({ q, o, a, e });
const C = (ico, title, body) => ({ t: 'concept', ico, title, body });
const T = (title, body) => ({ t: 'tip', title, body });
const V = (statement, answer, why) => ({ t: 'check', statement, answer, why });
const K = (title, lh, li, rh, ri) => ({ t: 'compare', title, lh, li, rh, ri });
// Simulação interativa: kind = trace | classify | html | sort | busca | calc ...
const S = (kind, title, cfg) => ({ t: 'sim', kind, title, ...cfg });
// h(): escreve tags HTML como texto (para aulas e questões de web)
const h = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const code = lines => `<pre class="code">${h(lines)}</pre>`;
const c = s => `<code>${h(s)}</code>`;

const A = (nome, curto, cor) => ({ nome, curto, cor, q: 0, banner: 'DISCIPLINA DO 2º PERÍODO', info: 'Disciplina do 2º período' });
const AREAS = {
  gest: A('Gestão Empresarial', 'Gestão', '#ca8a04'),
  pei2: A('Práticas Extensionistas Integradoras II', 'Extensão II', '#e11d74'),
  etc: A('Ética, Cidadania e Sociedade', 'Ética e Cidadania', '#6366f1'),
  algo: A('Algoritmos', 'Algoritmos', '#2f80ed'),
  lpt: A('Prática de Leitura e Produção Textual', 'Leitura e Produção', '#0d9488'),
  web: A('Laboratório de Programação de Web Sites', 'Lab. Web', '#ea580c'),
  req: A('Engenharia de Requisitos e Análise de Sistemas', 'Requisitos', '#16a34a')
};

const UNITS = [
  /* ============================ 1. GESTÃO EMPRESARIAL ============================ */
  {
    id: 'gest', mascot: 'planejamento', area: 'gest', c: '#ca8a04', cd: '#a16207', emoji: '📊', theme: 'gestao',
    title: 'Gestão Empresarial', sub: 'Funções do administrador, estrutura, estratégia, finanças e qualidade',
    fases: [
      {
        id: 'gest-1', ico: '🧑‍💼', title: 'Funções da administração', topic: 'Planejar, organizar, dirigir e controlar',
        lesson: [
          C('🧑‍💼', 'O que faz quem administra', '<p>O francês <b>Henri Fayol</b> descreveu, no início do século XX, as funções do administrador. Hoje elas costumam ser resumidas em <b>PODC</b>:</p><ul><li><b>Planejar</b>: definir objetivos e como chegar lá</li><li><b>Organizar</b>: distribuir tarefas, pessoas e recursos</li><li><b>Dirigir</b>: liderar, motivar e comunicar</li><li><b>Controlar</b>: medir resultados e corrigir o rumo</li></ul>'),
          K('Níveis da organização', 'Nível', ['<b>Estratégico</b>', '<b>Tático</b>', '<b>Operacional</b>'], 'Quem e prazo', ['Alta direção • longo prazo, a empresa toda', 'Gerências • médio prazo, cada área', 'Supervisão e equipes • curto prazo, tarefas do dia a dia']),
          T('No mundo do software', '<p>Um <b>tech lead</b> que define o plano da sprint, divide as tarefas, apoia o time nas dificuldades e acompanha o quadro de tarefas está praticando o PODC completo.</p>'),
          V('Acompanhar indicadores e corrigir desvios faz parte da função “controlar”.', true, 'Verdadeiro. Controlar é comparar o resultado com o planejado e agir sobre as diferenças.')
        ],
        quiz: [
          Q('A sigla PODC, usada para resumir as funções administrativas, significa:', ['Planejar, Organizar, Dirigir e Controlar', 'Produzir, Ordenar, Decidir e Cobrar', 'Planejar, Operar, Demitir e Contratar', 'Prever, Ouvir, Dividir e Concluir'], 0, 'São as quatro funções clássicas derivadas do trabalho de Fayol.'),
          Q('A gerente de uma software house divide o projeto em entregas, define quem fará cada parte e reserva os computadores necessários. Ela está principalmente:', ['organizando', 'controlando', 'dirigindo', 'demitindo'], 0, 'Distribuir tarefas, pessoas e recursos é a função organizar.'),
          Q('Decidir que a empresa vai entrar no mercado de outro país nos próximos 5 anos é uma decisão de nível:', ['estratégico', 'operacional', 'tático', 'técnico'], 0, 'Afeta a empresa toda e no longo prazo: nível estratégico.'),
          Q('Motivar a equipe e comunicar com clareza as prioridades da semana está ligado à função:', ['dirigir', 'controlar', 'organizar', 'planejar'], 0, 'Dirigir envolve liderança, motivação e comunicação.')
        ]
      },
      {
        id: 'gest-2', ico: '🏢', title: 'Estrutura organizacional', topic: 'Organograma, estrutura funcional, divisional e matricial',
        lesson: [
          C('🏢', 'Organograma', '<p>É o desenho da <b>estrutura formal</b> da empresa: quem responde a quem (hierarquia), quais são os departamentos e as linhas de autoridade.</p>'),
          C('🧱', 'Três estruturas clássicas', '<ul><li><b>Funcional</b>: agrupa por especialidade (TI, financeiro, vendas). Eficiente, mas as áreas podem se isolar.</li><li><b>Divisional</b>: agrupa por produto, cliente ou região. Foco no resultado de cada divisão.</li><li><b>Matricial</b>: combina função + projeto; a pessoa responde a <span class="hl">dois chefes</span> (o da área e o do projeto).</li></ul>'),
          K('Centralizar × Descentralizar', 'Centralizada', ['Decisões no topo', 'Mais padronização', 'Respostas mais lentas'], 'Descentralizada', ['Decisões perto de quem executa', 'Mais agilidade', 'Exige equipes autônomas e alinhadas']),
          T('Squads', '<p>Muitas empresas de tecnologia usam <b>squads</b>: times pequenos e multidisciplinares, cada um dono de uma parte do produto. É uma forma de descentralizar.</p>'),
          V('Na estrutura matricial, um desenvolvedor pode responder ao gerente de TI e, ao mesmo tempo, ao gerente de um projeto.', true, 'Verdadeiro. A dupla subordinação é a marca da estrutura matricial.')
        ],
        quiz: [
          Q('Uma empresa organizada em “Departamento de TI”, “Financeiro” e “Comercial” usa estrutura:', ['funcional', 'matricial', 'divisional por região', 'em rede'], 0, 'Agrupar por especialidade é a estrutura funcional.'),
          Q('Uma desvantagem típica da estrutura matricial é:', ['conflito de autoridade, pois a pessoa tem dois chefes', 'impossibilidade de fazer projetos', 'falta total de hierarquia', 'excesso de lucro'], 0, 'A dupla subordinação pode gerar conflito de prioridades.'),
          Q('O organograma serve principalmente para mostrar:', ['a estrutura formal e as relações de autoridade', 'o lucro do mês', 'o código-fonte do sistema', 'o fluxo de caixa'], 0, 'Ele representa departamentos e quem responde a quem.'),
          Q('Uma empresa que dá autonomia para cada squad decidir como entregar sua parte do produto está:', ['descentralizando decisões', 'centralizando tudo no presidente', 'eliminando metas', 'adotando estrutura funcional pura'], 0, 'Levar a decisão para perto de quem executa é descentralizar.')
        ]
      },
      {
        id: 'gest-3', ico: '🧭', title: 'Planejamento estratégico', topic: 'Missão, visão, valores, análise SWOT e metas SMART',
        lesson: [
          C('🧭', 'Identidade da empresa', '<ul><li><b>Missão</b>: por que a empresa existe, o que faz e para quem (presente)</li><li><b>Visão</b>: onde quer chegar (futuro)</li><li><b>Valores</b>: princípios que guiam as atitudes</li></ul>'),
          C('🔍', 'Análise SWOT (FOFA)', '<p>Cruza o ambiente <b>interno</b> com o <b>externo</b>:</p><ul><li><b>Forças</b> e <b>Fraquezas</b>: internas, a empresa controla</li><li><b>Oportunidades</b> e <b>Ameaças</b>: externas, vêm do mercado, das leis, da economia</li></ul>'),
          S('classify', 'Simulador: monte a SWOT de um app de delivery', { intro: 'Uma startup local de delivery está fazendo sua análise SWOT. Classifique cada item.', cats: ['Força', 'Fraqueza', 'Oportunidade', 'Ameaça'], items: [
            ['Equipe de desenvolvimento experiente', 0, 'É interno e positivo: força.'],
            ['Servidor antigo que cai nos horários de pico', 1, 'É interno e negativo: fraqueza.'],
            ['Crescimento das compras pelo celular na cidade', 2, 'Vem do mercado (externo) e favorece: oportunidade.'],
            ['Chegada de um concorrente nacional com preços baixos', 3, 'É externo e prejudica: ameaça.'],
            ['Marca conhecida e bem avaliada no bairro', 0, 'Interno e positivo: força.'],
            ['Pouco dinheiro em caixa para marketing', 1, 'Interno e negativo: fraqueza.']] }),
          T('Metas SMART', '<p>Uma boa meta é <b>S</b>específica, <b>M</b>ensurável, <b>A</b>tingível, <b>R</b>elevante e <b>T</b>emporal.</p><p>❌ “Melhorar o app.”<br>✅ “Reduzir o tempo de carregamento da tela inicial para menos de 2 s até 30 de junho.”</p>'),
          V('Uma nova lei que aumenta impostos sobre o setor é uma fraqueza da empresa.', false, 'Falso. Vem do ambiente externo, então é uma ameaça.')
        ],
        quiz: [
          Q('Na análise SWOT, “equipe pequena e sobrecarregada” é classificada como:', ['fraqueza', 'ameaça', 'oportunidade', 'força'], 0, 'É um fator interno e negativo.'),
          Q('“Ser a plataforma de cursos on-line mais usada do Nordeste até 2030” é um exemplo de:', ['visão', 'missão', 'valor', 'fraqueza'], 0, 'A visão descreve aonde a empresa quer chegar.'),
          Q('Qual meta segue o modelo SMART?', ['Aumentar em 15% os usuários ativos do app até dezembro', 'Ser uma empresa melhor', 'Vender muito mais', 'Ter um app incrível'], 0, 'É específica, mensurável e tem prazo.'),
          Q('Na SWOT, oportunidades e ameaças pertencem ao ambiente:', ['externo', 'interno', 'financeiro apenas', 'operacional da equipe'], 0, 'São fatores fora do controle direto da empresa.')
        ]
      },
      {
        id: 'gest-4', ico: '💰', title: 'Finanças essenciais', topic: 'Receita, custo, despesa, lucro, margem e fluxo de caixa',
        lesson: [
          C('💰', 'A conta básica', '<p><b>Lucro = Receita − (Custos + Despesas)</b></p><ul><li><b>Receita</b>: o que entra com as vendas</li><li><b>Custos</b>: gastos para produzir o produto ou serviço (servidores, horas de desenvolvimento)</li><li><b>Despesas</b>: gastos para administrar e vender (aluguel do escritório, marketing)</li></ul>'),
          C('📊', 'Margem de lucro', '<p><b>Margem = Lucro ÷ Receita × 100</b></p><p>Receita de R$ 20.000 e lucro de R$ 5.000 → margem de <b>25%</b>: de cada R$ 100 vendidos, R$ 25 sobram.</p>'),
          S('calc', 'Simulador: lucro e margem', { calc: 'margem' }),
          K('Lucro × Caixa', 'Lucro', ['Resultado do período', 'Conta a venda mesmo que o cliente pague depois'], 'Fluxo de caixa', ['Dinheiro que <b>de fato</b> entrou e saiu', 'Uma empresa lucrativa pode quebrar se faltar caixa']),
          V('Uma empresa com lucro no mês nunca terá problemas para pagar suas contas.', false, 'Falso. Se os clientes pagam depois e as contas vencem antes, falta caixa mesmo com lucro.')
        ],
        quiz: [
          Q('Uma empresa faturou R$ 50.000 e teve R$ 40.000 entre custos e despesas. Sua margem de lucro foi:', ['20%', '10%', '25%', '80%'], 0, 'Lucro = 10.000; 10.000 ÷ 50.000 = 0,2 = 20%.'),
          Q('O controle de todas as entradas e saídas de dinheiro em um período é o:', ['fluxo de caixa', 'organograma', 'canvas', 'diagrama de classes'], 0, 'O fluxo de caixa mostra quando o dinheiro realmente entra e sai.'),
          Q('Em uma empresa de software, a mensalidade da nuvem que hospeda o produto vendido é melhor classificada como:', ['custo', 'receita', 'lucro', 'patrimônio dos sócios'], 0, 'Está ligada diretamente à entrega do produto.'),
          Q('Se a receita é menor que a soma de custos e despesas, a empresa tem:', ['prejuízo', 'lucro', 'margem positiva', 'ponto de equilíbrio garantido'], 0, 'Resultado negativo é prejuízo.')
        ]
      },
      {
        id: 'gest-5', ico: '🔄', title: 'Qualidade e indicadores', topic: 'Ciclo PDCA, indicadores (KPIs) e melhoria contínua',
        lesson: [
          C('🔄', 'Ciclo PDCA', '<p>Método de <b>melhoria contínua</b> difundido por W. Edwards Deming:</p><ol style="padding-left:20px;margin:0 0 12px"><li><b>P</b>lan (planejar): definir o problema, a meta e o plano</li><li><b>D</b>o (executar): pôr o plano em prática</li><li><b>C</b>heck (verificar): medir e comparar com a meta</li><li><b>A</b>ct (agir): padronizar o que deu certo ou corrigir e girar de novo</li></ol>'),
          C('📈', 'Indicadores (KPIs)', '<p>Um <b>KPI</b> é um número que mostra se você está chegando ao objetivo.</p><ul><li>Tempo médio para responder um chamado</li><li>Percentual de entregas no prazo</li><li>Número de bugs encontrados pelos clientes por mês</li></ul>'),
          T('O que não se mede…', '<p>…não se gerencia bem. Mas cuidado: escolha <b>poucos</b> indicadores que realmente ligam ao objetivo, senão o time se perde em números.</p>'),
          V('No PDCA, a etapa Check é quando comparamos os resultados obtidos com a meta.', true, 'Verdadeiro. Check = verificar.')
        ],
        quiz: [
          Q('Um time implantou um novo processo de testes e agora mede se os bugs em produção caíram. Ele está na etapa:', ['Check (verificar)', 'Plan (planejar)', 'Do (executar)', 'Act (agir)'], 0, 'Medir e comparar com a meta é o Check.'),
          Q('Na etapa Act do PDCA, a equipe:', ['padroniza o que funcionou ou corrige o que falhou e reinicia o ciclo', 'escreve o primeiro plano', 'contrata novos funcionários', 'encerra a melhoria para sempre'], 0, 'Act fecha o ciclo e prepara a próxima volta.'),
          Q('Qual é um bom indicador para a meta “entregar as funcionalidades no prazo”?', ['percentual de entregas feitas até a data combinada', 'número de cadeiras no escritório', 'cor do logotipo', 'quantidade de reuniões marcadas'], 0, 'O indicador precisa medir diretamente o objetivo.'),
          Q('A ideia central do PDCA é:', ['melhoria contínua em ciclos', 'fazer tudo certo na primeira vez sem medir', 'cortar custos a qualquer preço', 'trocar de gestor todo mês'], 0, 'O ciclo se repete, melhorando aos poucos.')
        ]
      }
    ]
  },

  /* ============================ 2. EXTENSÃO II ============================ */
  {
    id: 'pei2', mascot: 'principal', area: 'pei2', c: '#e11d74', cd: '#b0125a', emoji: '🤝', theme: 'comunidade',
    title: 'Práticas Extensionistas Integradoras II', sub: 'Da escuta ao projeto: problema, cocriação, acessibilidade e entrega',
    fases: [
      {
        id: 'pei2-1', ico: '🌳', title: 'Árvore de problemas', topic: 'Problema central, causas e efeitos',
        lesson: [
          C('🌳', 'Desenhe o problema como uma árvore', '<ul><li><b>Tronco</b>: o problema central, escrito como uma situação negativa</li><li><b>Raízes</b>: as <b>causas</b> (por que acontece?)</li><li><b>Copa</b>: os <b>efeitos</b> (o que isso provoca?)</li></ul><p>Atacar as <span class="hl">causas</span> é o que muda a situação de verdade.</p>'),
          S('classify', 'Simulador: causa ou efeito?', { intro: 'Problema central: idosos do bairro têm dificuldade para usar serviços públicos digitais.', cats: ['Causa', 'Efeito'], items: [
            ['Pouco contato anterior com smartphones', 0, 'Explica por que o problema acontece: causa.'],
            ['Perdem prazos de agendamento no posto de saúde', 1, 'É uma consequência do problema: efeito.'],
            ['Aplicativos com letras pequenas e menus confusos', 0, 'É uma origem do problema: causa.'],
            ['Dependem de parentes para tarefas simples', 1, 'Consequência: efeito.'],
            ['Falta de oficinas gratuitas de inclusão digital no bairro', 0, 'Raiz do problema: causa.'],
            ['Sentem-se excluídos e inseguros', 1, 'Consequência na vida das pessoas: efeito.']] }),
          T('Da árvore aos objetivos', '<p>Reescreva cada causa no positivo e ela vira um objetivo: “falta de oficinas” → <b>“oferecer oficinas de inclusão digital”</b>.</p>'),
          V('Na árvore de problemas, os efeitos ficam nas raízes.', false, 'Falso. As raízes representam as causas; os efeitos ficam na copa.')
        ],
        quiz: [
          Q('Na árvore de problemas, as raízes representam:', ['as causas do problema', 'os efeitos do problema', 'a solução final', 'o orçamento do projeto'], 0, 'Raízes = causas; copa = efeitos.'),
          Q('Problema central: “a ONG perde doações por falta de controle”. Qual item é um EFEITO?', ['Alimentos vencem no estoque', 'Cadastro feito em papéis soltos', 'Voluntários sem treinamento', 'Ausência de planilha ou sistema'], 0, 'Alimentos vencendo são consequência; os outros explicam por que acontece.'),
          Q('Transformar a causa “ausência de sistema de cadastro” em objetivo resulta em:', ['implantar um sistema simples de cadastro', 'manter os papéis soltos', 'aumentar o problema', 'apagar a árvore'], 0, 'Reescrever a causa no positivo gera o objetivo.'),
          Q('Por que é importante focar nas causas?', ['Porque atacar só os efeitos não resolve a origem do problema', 'Porque causas são mais fáceis de desenhar', 'Porque efeitos não existem', 'Porque a comunidade não sente os efeitos'], 0, 'Sem tratar a causa, os efeitos voltam.')
        ]
      },
      {
        id: 'pei2-2', ico: '💡', title: 'Cocriação com a comunidade', topic: 'Design thinking: empatia, definição, ideação, protótipo e teste',
        lesson: [
          C('💡', 'Design thinking em 5 etapas', '<ol style="padding-left:20px;margin:0 0 12px"><li><b>Empatizar</b>: ouvir e observar as pessoas</li><li><b>Definir</b>: escrever o problema certo</li><li><b>Idear</b>: gerar muitas ideias, sem julgar</li><li><b>Prototipar</b>: construir algo simples e barato</li><li><b>Testar</b>: levar à comunidade e aprender com o retorno</li></ol>'),
          C('📝', 'Protótipo de papel', '<p>Antes de programar, desenhe as telas no papel e peça para alguém da comunidade “usar”. Erros encontrados aqui custam <b>minutos</b>; depois do sistema pronto, custam <b>semanas</b>.</p>'),
          K('Fazer para × Fazer com', 'Para a comunidade', ['Equipe decide sozinha', 'Descobre os problemas só no fim'], 'Com a comunidade', ['As pessoas participam das decisões', 'Validação a cada etapa', 'Mais chance de a solução ser usada']),
          V('No design thinking, a etapa de ideação deve descartar rapidamente as ideias estranhas.', false, 'Falso. Na ideação busca-se quantidade e variedade; a seleção vem depois.')
        ],
        quiz: [
          Q('Entrevistar e acompanhar a rotina dos moradores corresponde à etapa de:', ['empatia', 'teste', 'prototipação', 'ideação'], 0, 'Empatizar é compreender as pessoas antes de propor soluções.'),
          Q('Qual é a vantagem de um protótipo de papel?', ['Testar ideias rápido e barato, antes de programar', 'Substituir o sistema final para sempre', 'Evitar conversar com usuários', 'Deixar o projeto mais caro'], 0, 'Corrigir no papel é muito mais barato que no código.'),
          Q('Durante uma sessão de ideação com a comunidade, o ideal é:', ['gerar muitas ideias sem criticar no primeiro momento', 'aceitar só a ideia do professor', 'discutir custos antes de qualquer ideia', 'escolher a primeira ideia dita'], 0, 'Julgar cedo demais trava a criatividade.'),
          Q('Levar o protótipo para moradores usarem e anotar as dificuldades é a etapa de:', ['teste', 'definição', 'empatia', 'documentação final'], 0, 'Testar com usuários reais gera aprendizados para a próxima versão.')
        ]
      },
      {
        id: 'pei2-3', ico: '♿', title: 'Acessibilidade e inclusão digital', topic: 'Princípios da WCAG, Lei Brasileira de Inclusão e boas práticas',
        lesson: [
          C('♿', 'Tecnologia para todas as pessoas', '<p>A <b>Lei Brasileira de Inclusão</b> (Lei nº 13.146/2015) garante o direito à acessibilidade, inclusive em sites e serviços digitais.</p><p>As diretrizes internacionais <b>WCAG</b> organizam a acessibilidade em 4 princípios:</p><ul><li><b>Perceptível</b>: dá para ver ou ouvir o conteúdo (ex.: texto alternativo em imagens)</li><li><b>Operável</b>: dá para usar só com teclado, sem pressa</li><li><b>Compreensível</b>: linguagem e navegação claras</li><li><b>Robusto</b>: funciona com leitores de tela e diferentes navegadores</li></ul>'),
          T('Checklist rápido', '<ul><li>Contraste forte entre texto e fundo</li><li>Botões grandes e com nome claro</li><li>Imagens com descrição</li><li>Não usar <b>só a cor</b> para passar informação</li><li>Linguagem simples, frases curtas</li></ul>'),
          V('Um formulário que indica campos com erro apenas pela cor vermelha é acessível para todas as pessoas.', false, 'Falso. Pessoas com daltonismo ou que usam leitor de tela podem não perceber. Use também texto ou ícone.')
        ],
        quiz: [
          Q('Adicionar descrição (texto alternativo) às imagens de um site atende principalmente ao princípio:', ['perceptível', 'robusto', 'operável', 'financeiro'], 0, 'Permite que leitores de tela “leiam” a imagem para quem não enxerga.'),
          Q('Permitir que todo o sistema seja usado apenas com o teclado atende ao princípio:', ['operável', 'perceptível', 'compreensível', 'estético'], 0, 'Operável: a interface pode ser acionada por diferentes meios.'),
          Q('A lei brasileira que trata dos direitos da pessoa com deficiência, incluindo acessibilidade, é a:', ['Lei nº 13.146/2015 (Lei Brasileira de Inclusão)', 'Lei do Inquilinato', 'Lei de Responsabilidade Fiscal', 'Lei do Software'], 0, 'Também chamada de Estatuto da Pessoa com Deficiência.'),
          Q('Em um projeto de extensão com idosos, qual decisão de interface favorece a inclusão?', ['Botões grandes, textos curtos e bom contraste', 'Menus escondidos em gestos complexos', 'Letras pequenas para caber mais informação', 'Avisos que somem em 2 segundos'], 0, 'Simplicidade e legibilidade ajudam quem tem pouca familiaridade ou baixa visão.')
        ]
      },
      {
        id: 'pei2-4', ico: '📦', title: 'Entrega e continuidade', topic: 'Capacitação, documentação, avaliação de impacto e relato',
        lesson: [
          C('📦', 'Projeto bom continua depois da entrega', '<ul><li><b>Capacitação</b>: ensine as pessoas a usar e cuidar da solução</li><li><b>Manual simples</b>: passo a passo com imagens, em linguagem do dia a dia</li><li><b>Plano de continuidade</b>: quem mantém? quem chamar se der problema?</li></ul>'),
          K('Resultado × Impacto', 'Resultado (curto prazo)', ['“30 moradores fizeram a oficina”', 'Mede o que o projeto entregou'], 'Impacto (mudança real)', ['“Moradores passaram a agendar consultas sozinhos”', 'Mede a transformação na vida das pessoas']),
          C('🗣️', 'Relato de experiência', '<p>Registre o que foi feito, com quem, o que funcionou, o que não funcionou e o que <b>você aprendeu</b>. É a forma de a extensão voltar para a universidade como conhecimento.</p>'),
          V('Avaliar o impacto é medir apenas quantas pessoas participaram.', false, 'Falso. Participação é resultado; impacto é a mudança provocada na realidade.')
        ],
        quiz: [
          Q('Qual frase descreve um IMPACTO do projeto?', ['A associação passou a controlar o estoque sem perder alimentos', 'Foram realizadas 4 reuniões', 'O sistema tem 6 telas', 'A equipe tinha 5 estudantes'], 0, 'Impacto é a mudança real na situação da comunidade.'),
          Q('Por que capacitar a comunidade antes de encerrar o projeto?', ['Para que a solução continue sendo usada e mantida', 'Para aumentar a dependência da universidade', 'Porque é exigência estética', 'Para não precisar documentar'], 0, 'Autonomia garante continuidade.'),
          Q('O relato de experiência deve incluir:', ['o que foi feito, os resultados, as dificuldades e os aprendizados', 'somente os elogios recebidos', 'apenas o código-fonte', 'a nota final do aluno'], 0, 'Um relato honesto ajuda outros projetos.'),
          Q('Um manual de uso pensado para a comunidade deve ter:', ['passos curtos, imagens e linguagem simples', 'termos técnicos sem explicação', 'só texto em inglês', 'centenas de páginas'], 0, 'O público é quem vai usar no dia a dia.')
        ]
      }
    ]
  },

  /* ============================ 3. ÉTICA, CIDADANIA E SOCIEDADE ============================ */
  {
    id: 'etc', mascot: 'legislacao', area: 'etc', c: '#6366f1', cd: '#4f46e5', emoji: '⚖️', theme: 'etica',
    title: 'Ética, Cidadania e Sociedade', sub: 'Ética, direitos, código de ética, LGPD e tecnologia na sociedade',
    fases: [
      {
        id: 'etc-1', ico: '🤔', title: 'Ética e moral', topic: 'Diferenças, dever e consequências',
        lesson: [
          K('Moral × Ética', 'Moral', ['Regras e costumes de um grupo', 'Diz <b>o que</b> se considera certo ali', 'Varia entre culturas e épocas'], 'Ética', ['Reflexão crítica sobre a moral', 'Pergunta <b>por que</b> algo é certo', 'Busca princípios justificáveis']),
          C('🧭', 'Duas formas clássicas de pensar', '<ul><li><b>Ética do dever</b> (Immanuel Kant): algumas ações são certas ou erradas em si. Ex.: não mentir, mesmo que mentir traga vantagem.</li><li><b>Utilitarismo</b> (Jeremy Bentham, John Stuart Mill): a ação certa é a que produz o <b>maior bem para o maior número</b> de pessoas.</li></ul>'),
          T('No trabalho com software', '<p>“É legal?” e “é ético?” são perguntas diferentes. Algo pode ser permitido pela lei e ainda assim prejudicar pessoas. Pense sempre em <b>quem é afetado</b>.</p>'),
          V('Ética e moral são exatamente a mesma coisa.', false, 'Falso. A moral é o conjunto de normas de um grupo; a ética é a reflexão sobre essas normas.')
        ],
        quiz: [
          Q('A reflexão crítica sobre os valores e regras de conduta é chamada de:', ['ética', 'moral', 'etiqueta', 'legislação'], 0, 'A ética reflete sobre a moral e busca justificativas.'),
          Q('“Devo dizer a verdade ao cliente sobre a falha, mesmo que isso me prejudique, porque mentir é errado.” Esse raciocínio se aproxima da:', ['ética do dever (Kant)', 'ética utilitarista', 'lei da oferta e procura', 'gestão financeira'], 0, 'O foco está no dever, não nas consequências.'),
          Q('O utilitarismo avalia uma ação principalmente por:', ['suas consequências para o bem-estar do maior número de pessoas', 'a intenção do autor, apenas', 'a tradição da família', 'o lucro de quem decide'], 0, 'Bentham e Mill: maior bem para o maior número.'),
          Q('Qual afirmação é correta?', ['Algo pode ser legal e, mesmo assim, ser eticamente questionável', 'Tudo que é legal é automaticamente ético', 'A ética não se aplica à tecnologia', 'Moral é igual em todas as culturas'], 0, 'Lei e ética se relacionam, mas não são idênticas.')
        ]
      },
      {
        id: 'etc-2', ico: '🏛️', title: 'Cidadania e direitos', topic: 'Direitos civis, políticos e sociais e a Constituição de 1988',
        lesson: [
          C('🏛️', 'O que é cidadania', '<p>É participar da vida da sociedade com <b>direitos e deveres</b>. O sociólogo <b>T. H. Marshall</b> dividiu os direitos em três grupos:</p><ul><li><b>Civis</b>: liberdade, igualdade perante a lei, propriedade, expressão</li><li><b>Políticos</b>: votar, ser votado, se organizar politicamente</li><li><b>Sociais</b>: educação, saúde, trabalho, moradia, previdência</li></ul>'),
          C('📜', 'Constituição Federal de 1988', '<p>Ficou conhecida como <b>Constituição Cidadã</b>. O <b>art. 5º</b> traz direitos e garantias individuais (como a inviolabilidade da intimidade e a liberdade de expressão) e o <b>art. 6º</b> lista os direitos sociais.</p>'),
          T('Cidadania também é dever', '<p>Votar, respeitar as leis, cuidar do que é público e participar de conselhos e consultas são formas de exercer a cidadania.</p>'),
          V('O direito à educação é classificado como um direito social.', true, 'Verdadeiro. Está no art. 6º da Constituição.')
        ],
        quiz: [
          Q('O direito de votar e ser votado é um direito:', ['político', 'social', 'civil', 'comercial'], 0, 'Participação no poder político.'),
          Q('Saúde, educação e moradia são exemplos de direitos:', ['sociais', 'políticos', 'civis', 'empresariais'], 0, 'Estão entre os direitos sociais do art. 6º da Constituição.'),
          Q('A Constituição de 1988 é conhecida como:', ['Constituição Cidadã', 'Constituição Imperial', 'Constituição Provisória', 'Carta do Software'], 0, 'O apelido destaca a ampliação dos direitos.'),
          Q('A liberdade de expressão é um exemplo de direito:', ['civil', 'social', 'político apenas', 'trabalhista'], 0, 'Direitos civis protegem as liberdades individuais.')
        ]
      },
      {
        id: 'etc-3', ico: '👩‍💻', title: 'Ética na computação', topic: 'Código de ética profissional, viés algorítmico e propriedade intelectual',
        lesson: [
          C('📘', 'Código de ética da Engenharia de Software', '<p>A ACM e o IEEE Computer Society publicaram um código com <b>8 princípios</b>. O primeiro deles: agir de acordo com o <span class="hl">interesse público</span>. Os demais tratam de cliente e empregador, produto, julgamento, gestão, profissão, colegas e de si mesmo.</p>'),
          C('🤖', 'Viés algorítmico', '<p>Um sistema treinado com dados que refletem desigualdades pode <b>repetir e ampliar</b> essas desigualdades. Ex.: um filtro de currículos que aprende com contratações antigas e passa a rejeitar certos grupos.</p>'),
          C('©️', 'Propriedade intelectual', '<p>No Brasil, o programa de computador é protegido pela <b>Lei nº 9.609/1998</b> (Lei do Software) e pelo regime de direitos autorais. Copiar código sem respeitar a <b>licença</b> pode ser ilegal.</p>'),
          T('Licenças livres', '<p>Software livre não significa “sem regras”: licenças como MIT e GPL dizem o que você pode fazer e o que precisa manter (por exemplo, o aviso de autoria).</p>'),
          V('Se o código está público no GitHub, posso usá-lo de qualquer forma, sem olhar a licença.', false, 'Falso. Estar visível não dá permissão automática; a licença define as regras de uso.')
        ],
        quiz: [
          Q('Segundo o código de ética da ACM/IEEE para engenheiros de software, o primeiro princípio é agir de acordo com:', ['o interesse público', 'o lucro máximo do empregador', 'a vontade do cliente acima de tudo', 'a própria conveniência'], 0, 'O público vem antes, inclusive do cliente e do empregador.'),
          Q('Um sistema de crédito que nega empréstimos com mais frequência a moradores de certos bairros, por ter aprendido com dados históricos desiguais, é exemplo de:', ['viés algorítmico', 'acessibilidade', 'criptografia', 'computação em nuvem'], 0, 'Dados enviesados geram decisões enviesadas.'),
          Q('No Brasil, a lei específica que protege programas de computador é a:', ['Lei nº 9.609/1998', 'Lei nº 13.709/2018', 'Lei nº 8.078/1990', 'Lei nº 12.965/2014'], 0, '9.609/1998 é a Lei do Software (as outras são LGPD, CDC e Marco Civil).'),
          Q('Ao usar uma biblioteca de código aberto em seu projeto, você deve:', ['ler e respeitar os termos da licença', 'apagar o nome dos autores', 'vender como se fosse sua', 'ignorar, pois é gratuita'], 0, 'A licença define obrigações, como manter o aviso de copyright.')
        ]
      },
      {
        id: 'etc-4', ico: '🔐', title: 'LGPD', topic: 'Dados pessoais, dados sensíveis, agentes e direitos do titular',
        lesson: [
          C('🔐', 'Lei Geral de Proteção de Dados', '<p>A <b>Lei nº 13.709/2018</b> regula o tratamento de dados pessoais, inclusive nos meios digitais.</p><ul><li><b>Dado pessoal</b>: identifica ou pode identificar uma pessoa (nome, CPF, e-mail, localização)</li><li><b>Dado sensível</b>: origem racial ou étnica, religião, opinião política, filiação sindical, saúde, vida sexual, dado genético ou biométrico</li><li><b>Dado anonimizado</b>: não permite identificar a pessoa</li></ul>'),
          K('Quem é quem na LGPD', 'Agente', ['<b>Titular</b>', '<b>Controlador</b>', '<b>Operador</b>', '<b>Encarregado</b>'], 'Papel', ['A pessoa a quem os dados se referem', 'Decide como e para que os dados são usados', 'Trata os dados em nome do controlador', 'Canal com titulares e com a ANPD']),
          S('classify', 'Simulador: que tipo de dado é este?', { intro: 'Você está modelando o banco de dados de uma clínica e de uma loja. Classifique cada informação.', cats: ['Dado pessoal', 'Dado sensível', 'Não é dado pessoal'], items: [
            ['CPF de um cliente', 0, 'Identifica a pessoa: dado pessoal.'],
            ['Diagnóstico de diabetes de um paciente', 1, 'Dado de saúde é sensível.'],
            ['Impressão digital usada para desbloquear o app', 1, 'Dado biométrico é sensível.'],
            ['E-mail de um usuário', 0, 'Pode identificar a pessoa: dado pessoal.'],
            ['Total de vendas da loja em março, sem identificar clientes', 2, 'Dado agregado, sem identificação: não é pessoal.'],
            ['Religião informada em um cadastro', 1, 'Convicção religiosa é dado sensível.']] }),
          T('Princípios para o dev', '<p><b>Finalidade</b> (usar para o que foi informado), <b>necessidade</b> (coletar só o mínimo) e <b>segurança</b> (proteger contra vazamentos). Na dúvida: <i>preciso mesmo desse campo?</i></p>'),
          V('Pela LGPD, o consentimento é a única base legal possível para tratar dados pessoais.', false, 'Falso. A lei prevê outras bases legais, como cumprir obrigação legal ou executar um contrato.')
        ],
        quiz: [
          Q('Segundo a LGPD, qual destes é um dado pessoal SENSÍVEL?', ['dado sobre a saúde de uma pessoa', 'nome da empresa', 'cor do produto', 'faturamento anual'], 0, 'Dados de saúde estão na lista de dados sensíveis.'),
          Q('Na LGPD, quem toma as decisões sobre o tratamento dos dados pessoais é o:', ['controlador', 'operador', 'titular', 'encarregado'], 0, 'O operador apenas executa o tratamento em nome do controlador.'),
          Q('Um app de academia pede CPF, endereço completo, religião e renda só para marcar aula experimental. Que princípio da LGPD está sendo desrespeitado?', ['necessidade (coletar só o mínimo)', 'publicidade', 'eficiência energética', 'livre concorrência'], 0, 'Coletar dados além do necessário fere o princípio da necessidade.'),
          Q('O órgão federal responsável por fiscalizar a aplicação da LGPD é a:', ['ANPD (Autoridade Nacional de Proteção de Dados)', 'ANATEL', 'ANVISA', 'ANEEL'], 0, 'A ANPD orienta, fiscaliza e aplica sanções.')
        ]
      },
      {
        id: 'etc-5', ico: '🌐', title: 'Tecnologia e sociedade', topic: 'Marco Civil da Internet, desinformação, inclusão e sustentabilidade',
        lesson: [
          C('🌐', 'Marco Civil da Internet', '<p>A <b>Lei nº 12.965/2014</b> estabelece princípios, direitos e deveres para o uso da internet no Brasil, como a <b>neutralidade de rede</b> (tratar os dados sem discriminação), a proteção da privacidade e a liberdade de expressão.</p>'),
          C('📰', 'Desinformação', '<p>Conteúdos falsos se espalham rápido porque provocam emoção. Antes de compartilhar: <b>verifique a fonte</b>, a data, procure a notícia em outros veículos e desconfie de títulos alarmantes.</p>'),
          K('Desafios sociais da tecnologia', 'Problema', ['Exclusão digital', 'Lixo eletrônico', 'Automação de tarefas'], 'Caminho', ['Acesso, formação e interfaces simples', 'Descarte correto, reuso e reciclagem', 'Requalificação profissional']),
          V('A neutralidade de rede é um dos princípios previstos no Marco Civil da Internet.', true, 'Verdadeiro. Os pacotes de dados devem ser tratados de forma isonômica.')
        ],
        quiz: [
          Q('A lei brasileira que estabelece princípios, direitos e deveres para o uso da internet é a:', ['Lei nº 12.965/2014 (Marco Civil da Internet)', 'Lei nº 9.609/1998', 'Lei nº 13.146/2015', 'Lei nº 8.069/1990'], 0, 'O Marco Civil trata de neutralidade, privacidade e liberdade de expressão.'),
          Q('A neutralidade de rede significa que:', ['os provedores devem tratar os pacotes de dados de forma isonômica', 'a internet deve ser gratuita', 'ninguém pode criticar empresas on-line', 'só o governo pode criar sites'], 0, 'Não se pode privilegiar ou prejudicar tráfego arbitrariamente.'),
          Q('Qual atitude ajuda a combater a desinformação?', ['Checar a fonte e procurar a notícia em veículos confiáveis', 'Compartilhar logo para avisar a todos', 'Confiar em títulos alarmantes', 'Repassar áudios sem autor'], 0, 'Verificação antes do compartilhamento interrompe a cadeia.'),
          Q('O descarte correto de computadores e celulares antigos é importante porque:', ['eles contêm materiais que poluem e componentes que podem ser reaproveitados', 'eles não têm nenhum metal', 'é proibido consertar eletrônicos', 'o lixo eletrônico some sozinho'], 0, 'Lixo eletrônico tem metais pesados e materiais recicláveis.')
        ]
      }
    ]
  },

  /* ============================ 4. ALGORITMOS ============================ */
  {
    id: 'algo', mascot: 'notebook', area: 'algo', c: '#2f80ed', cd: '#1d5fbf', emoji: '🧮', theme: 'codigo',
    title: 'Algoritmos', sub: 'Vetores, matrizes, funções, busca, ordenação e recursão',
    fases: [
      {
        id: 'algo-1', ico: '📦', title: 'Vetores', topic: 'Índices, leitura e percurso com laço',
        lesson: [
          C('📦', 'Muitos valores, um nome só', '<p>Um <b>vetor</b> (array) guarda vários valores do mesmo tipo em posições numeradas. Neste curso, os <b>índices começam em 0</b>, como em C, Java, Python e JavaScript.</p>' + code('notas ← [7.5, 9.0, 6.0]\nescreva(notas[0])   // 7.5\nescreva(notas[2])   // 6.0')),
          S('trace', 'Simulação: somando um vetor', { code: ['v ← [4, 7, 2]', 'soma ← 0', 'para i de 0 ate 2 faca', '    soma ← soma + v[i]', 'fimpara', 'escreva(soma)'], steps: [
            { l: 0, v: { v: '[4, 7, 2]' }, note: 'Vetor com 3 posições: índices 0, 1 e 2.' },
            { l: 1, v: { v: '[4, 7, 2]', soma: 0 }, note: 'O acumulador começa em 0.' },
            { l: 2, v: { v: '[4, 7, 2]', soma: 0, i: 0 }, note: 'i = 0: primeira posição.' },
            { l: 3, v: { v: '[4, 7, 2]', soma: 4, i: 0 }, note: 'soma = 0 + v[0] = 0 + 4 = 4' },
            { l: 2, v: { v: '[4, 7, 2]', soma: 4, i: 1 }, note: 'i = 1' },
            { l: 3, v: { v: '[4, 7, 2]', soma: 11, i: 1 }, note: 'soma = 4 + v[1] = 4 + 7 = 11' },
            { l: 2, v: { v: '[4, 7, 2]', soma: 11, i: 2 }, note: 'i = 2: última posição.' },
            { l: 3, v: { v: '[4, 7, 2]', soma: 13, i: 2 }, note: 'soma = 11 + v[2] = 11 + 2 = 13' },
            { l: 5, v: { v: '[4, 7, 2]', soma: 13, i: 2 }, out: '13', note: 'Laço terminou: saída 13.' }] }),
          T('Último índice = tamanho − 1', '<p>Um vetor com <b>n</b> elementos vai do índice 0 ao <b>n − 1</b>. Acessar v[n] é um erro clássico: <i>índice fora dos limites</i>.</p>'),
          V('Em um vetor de 10 elementos com índice iniciando em 0, o último índice válido é 10.', false, 'Falso. Vai de 0 a 9.')
        ],
        quiz: [
          Q('Dado v ← [3, 8, 5, 1], qual é o valor de v[2]?', ['5', '8', '3', '1'], 0, 'Índice 0 = 3, 1 = 8, 2 = 5.'),
          Q('Qual será a saída?' + code('v ← [2, 4, 6]\nt ← 0\npara i de 0 ate 2 faca\n    t ← t + v[i]\nfimpara\nescreva(t)'), ['12', '6', '10', '0'], 0, '2 + 4 + 6 = 12.'),
          Q('Um vetor tem 50 elementos e os índices começam em 0. O índice do último elemento é:', ['49', '50', '51', '0'], 0, 'Último índice = tamanho − 1.'),
          Q('Qual a principal vantagem de usar um vetor em vez de 30 variáveis separadas para 30 notas?', ['Poder percorrer todas as notas com um único laço', 'Ocupar zero memória', 'Dispensar o uso de índices', 'Deixar o programa mais lento'], 0, 'Com índice e laço, o mesmo código trata todos os elementos.')
        ]
      },
      {
        id: 'algo-2', ico: '🔲', title: 'Matrizes', topic: 'Linhas, colunas e laços aninhados',
        lesson: [
          C('🔲', 'Uma tabela de valores', '<p>A <b>matriz</b> é um vetor de duas dimensões: <b>m[linha][coluna]</b>. Uma matriz 3×4 tem 3 linhas, 4 colunas e <b>12</b> elementos.</p>'),
          S('trace', 'Simulação: percorrendo uma matriz 2×2', { code: ['m ← [[1, 2], [3, 4]]', 'para i de 0 ate 1 faca', '    para j de 0 ate 1 faca', '        escreva(m[i][j])', '    fimpara', 'fimpara'], steps: [
            { l: 0, v: {}, note: 'Matriz com 2 linhas e 2 colunas.' },
            { l: 1, v: { i: 0 }, note: 'Laço externo: linha i = 0.' },
            { l: 2, v: { i: 0, j: 0 }, note: 'Laço interno: coluna j = 0.' },
            { l: 3, v: { i: 0, j: 0 }, out: '1', note: 'm[0][0] = 1' },
            { l: 2, v: { i: 0, j: 1 }, note: 'Coluna j = 1.' },
            { l: 3, v: { i: 0, j: 1 }, out: '1 2', note: 'm[0][1] = 2. A linha 0 terminou.' },
            { l: 1, v: { i: 1 }, note: 'O externo avança para a linha 1; o interno recomeça do 0.' },
            { l: 3, v: { i: 1, j: 0 }, out: '1 2 3', note: 'm[1][0] = 3' },
            { l: 3, v: { i: 1, j: 1 }, out: '1 2 3 4', note: 'm[1][1] = 4. Percorremos linha por linha.' }] }),
          T('Laço aninhado', '<p>Para cada volta do laço externo, o interno dá <b>todas</b> as suas voltas. Com 3 linhas e 4 colunas: 3 × 4 = 12 execuções do comando de dentro.</p>'),
          V('Em m[2][1], o número 2 indica a coluna.', false, 'Falso. Pela convenção m[linha][coluna], 2 é a linha e 1 é a coluna.')
        ],
        quiz: [
          Q('Quantos elementos tem uma matriz 4 × 5?', ['20', '9', '45', '54'], 0, '4 linhas × 5 colunas = 20.'),
          Q('Dada m ← [[5, 6, 7], [8, 9, 10]], o valor de m[1][2] é:', ['10', '7', '9', '6'], 0, 'Linha 1 = [8, 9, 10]; coluna 2 = 10.'),
          Q('Quantas vezes “x” é escrito?' + code('para i de 1 ate 3 faca\n    para j de 1 ate 4 faca\n        escreva("x")\n    fimpara\nfimpara'), ['12', '7', '4', '3'], 0, '3 voltas externas × 4 internas = 12.'),
          Q('Para somar todos os elementos de uma matriz, normalmente se usa:', ['dois laços, um para as linhas e outro, dentro, para as colunas', 'nenhum laço', 'apenas uma condição se', 'uma única atribuição'], 0, 'Laços aninhados visitam cada célula.')
        ]
      },
      {
        id: 'algo-3', ico: '🧰', title: 'Funções e procedimentos', topic: 'Parâmetros, retorno e escopo',
        lesson: [
          C('🧰', 'Divida para reutilizar', '<p>Uma <b>função</b> é um bloco com nome que recebe <b>parâmetros</b> e <b>retorna</b> um valor. Um <b>procedimento</b> executa ações e não retorna valor.</p><p>Vantagens: código reutilizável, mais legível e mais fácil de testar.</p>'),
          S('trace', 'Simulação: chamando uma função', { code: ['funcao dobro(x: inteiro): inteiro', '    retorne x * 2', 'fimfuncao', '', 'a ← 5', 'b ← dobro(a) + 1', 'escreva(b)'], steps: [
            { l: 4, v: { a: 5 }, note: 'O programa começa aqui. A função só roda quando é chamada.' },
            { l: 5, v: { a: 5 }, note: 'Chamada dobro(a): o valor 5 é copiado para o parâmetro x.' },
            { l: 0, v: { a: 5, x: 5 }, note: 'Dentro da função, x = 5.' },
            { l: 1, v: { a: 5, x: 5 }, note: 'retorne 5 * 2: devolve 10 para quem chamou.' },
            { l: 5, v: { a: 5, b: 11 }, note: 'dobro(a) vale 10, então b = 10 + 1 = 11. O x deixou de existir (variável local).' },
            { l: 6, v: { a: 5, b: 11 }, out: '11', note: 'Saída: 11.' }] }),
          K('Variável local × global', 'Local', ['Criada dentro da função', 'Só existe enquanto ela executa'], 'Global', ['Declarada fora de tudo', 'Visível em todo o programa', 'Use com moderação']),
          V('Uma função pode ser chamada várias vezes com valores diferentes nos parâmetros.', true, 'Verdadeiro. Essa é a grande vantagem da reutilização.')
        ],
        quiz: [
          Q('Qual é a saída?' + code('funcao soma(a, b: inteiro): inteiro\n    retorne a + b\nfimfuncao\nescreva(soma(3, 4) * 2)'), ['14', '7', '11', '24'], 0, 'soma(3, 4) = 7; 7 × 2 = 14.'),
          Q('A diferença entre função e procedimento é que:', ['a função retorna um valor; o procedimento não', 'o procedimento sempre é mais rápido', 'função não recebe parâmetros', 'não existe diferença'], 0, 'Procedimentos executam ações sem devolver resultado.'),
          Q('Uma variável criada dentro de uma função e que deixa de existir quando ela termina é:', ['local', 'global', 'constante universal', 'um vetor'], 0, 'Seu escopo é apenas a função.'),
          Q('Qual é a saída?' + code('funcao f(n: inteiro): inteiro\n    retorne n * n\nfimfuncao\nescreva(f(f(2)))'), ['16', '4', '8', '2'], 0, 'f(2) = 4; f(4) = 16.')
        ]
      },
      {
        id: 'algo-4', ico: '🔎', title: 'Busca', topic: 'Busca linear e busca binária',
        lesson: [
          K('Duas formas de procurar', 'Busca linear', ['Olha um por um, do início ao fim', 'Funciona com dados <b>desordenados</b>', 'Até <b>n</b> comparações'], 'Busca binária', ['Olha o meio e descarta metade', 'Exige dados <b>ordenados</b>', 'Cerca de <b>log₂ n</b> comparações']),
          S('busca', 'Simulador: busca binária passo a passo', { arr: [3, 8, 12, 17, 21, 25, 30, 34, 41, 47, 52, 58, 63, 70, 77], alvos: [41, 8, 70, 50] }),
          T('A força do log', '<p>Em uma lista ordenada com <b>1 milhão</b> de nomes, a busca binária encontra qualquer um em cerca de <b>20 comparações</b>, porque 2²⁰ ≈ 1.048.576. A linear pode precisar de 1 milhão.</p>'),
          V('A busca binária funciona corretamente em qualquer vetor, mesmo desordenado.', false, 'Falso. Ela depende da ordem para saber qual metade descartar.')
        ],
        quiz: [
          Q('Qual é o requisito para aplicar a busca binária?', ['O vetor precisa estar ordenado', 'O vetor precisa ter tamanho par', 'Os valores precisam ser negativos', 'O vetor precisa ter no máximo 10 elementos'], 0, 'Sem ordem, descartar metade não é seguro.'),
          Q('Em um vetor desordenado de 1.000 elementos, a busca linear pode precisar, no pior caso, de:', ['1.000 comparações', '10 comparações', '1 comparação', '500.000 comparações'], 0, 'No pior caso, olha todos os elementos.'),
          Q('Na busca binária pelo 30 em [5, 10, 15, 20, 25, 30, 35], o primeiro elemento comparado é:', ['20, que está no meio', '5, o primeiro', '35, o último', '30, direto'], 0, 'O meio do vetor de 7 elementos é a posição 3, que guarda 20.'),
          Q('Em um vetor ordenado de cerca de 1 milhão de elementos, a busca binária faz, no máximo, aproximadamente:', ['20 comparações', '1.000 comparações', '500.000 comparações', '1 milhão de comparações'], 0, '2²⁰ ≈ 1 milhão, então cerca de 20 divisões ao meio.')
        ]
      },
      {
        id: 'algo-5', ico: '📶', title: 'Ordenação', topic: 'Bubble sort, selection sort e custo O(n²)',
        lesson: [
          C('📶', 'Bubble sort (bolha)', '<p>Compara <b>vizinhos</b> e troca se estiverem fora de ordem. A cada passada, o maior valor “borbulha” para o fim.</p>'),
          S('sort', 'Simulador: bubble sort', { arr: [5, 2, 8, 1, 4] }),
          C('🎯', 'Selection sort (seleção)', '<p>Procura o <b>menor</b> elemento da parte não ordenada e o coloca na próxima posição do início. Repete até o fim.</p>'),
          T('Custo quadrático', '<p>Bubble e selection fazem cerca de <b>n²/2</b> comparações. Dobrar o tamanho da lista ≈ <b>quadruplicar</b> o trabalho. Por isso, para listas grandes, usam-se algoritmos como merge sort e quicksort.</p>'),
          V('Após a primeira passada completa do bubble sort, o maior elemento já está na última posição.', true, 'Verdadeiro. Ele é levado até o fim pelas trocas sucessivas.')
        ],
        quiz: [
          Q('Após a 1ª passada do bubble sort em [4, 1, 3, 2], o vetor fica:', ['[1, 3, 2, 4]', '[1, 2, 3, 4]', '[4, 3, 2, 1]', '[1, 4, 2, 3]'], 0, '4 vai trocando com 1, 3 e 2 até o fim: [1, 3, 2, 4].'),
          Q('A ideia do selection sort é:', ['encontrar o menor da parte não ordenada e colocá-lo na posição correta', 'comparar só o primeiro e o último', 'sortear posições aleatórias', 'dividir o vetor ao meio e buscar'], 0, 'Seleção do menor, posição por posição.'),
          Q('Se ordenar 1.000 itens com bubble sort leva 1 segundo, ordenar 2.000 itens deve levar cerca de:', ['4 segundos', '2 segundos', '1 segundo', '1.000 segundos'], 0, 'Custo O(n²): dobrar n multiplica o tempo por cerca de 4.'),
          Q('No bubble sort, uma troca acontece quando:', ['dois vizinhos estão fora de ordem', 'os dois valores são iguais', 'o vetor já está ordenado', 'o índice é par'], 0, 'Só se troca o que está invertido.')
        ]
      },
      {
        id: 'algo-6', ico: '🪆', title: 'Recursão e complexidade', topic: 'Caso base, pilha de chamadas e notação O',
        lesson: [
          C('🪆', 'Uma função que chama a si mesma', '<p>Toda função recursiva precisa de:</p><ul><li><b>Caso base</b>: a condição que para a recursão</li><li><b>Passo recursivo</b>: chama a si mesma com um problema <b>menor</b></li></ul><p>Sem caso base, as chamadas nunca acabam e a pilha estoura.</p>'),
          S('trace', 'Simulação: fatorial de 3', { code: ['funcao fat(n: inteiro): inteiro', '    se (n <= 1) entao', '        retorne 1', '    fimse', '    retorne n * fat(n - 1)', 'fimfuncao', 'escreva(fat(3))'], steps: [
            { l: 6, v: {}, note: 'Chamada inicial: fat(3).' },
            { l: 1, v: { n: 3, pilha: 'fat(3)' }, note: 'n = 3 não é caso base.' },
            { l: 4, v: { n: 3, pilha: 'fat(3)' }, note: 'Para calcular 3 * fat(2), precisa chamar fat(2).' },
            { l: 1, v: { n: 2, pilha: 'fat(3) › fat(2)' }, note: 'Nova chamada, n = 2. Ainda não é caso base.' },
            { l: 4, v: { n: 2, pilha: 'fat(3) › fat(2)' }, note: 'Precisa de fat(1).' },
            { l: 2, v: { n: 1, pilha: 'fat(3) › fat(2) › fat(1)' }, note: 'n = 1: caso base! Retorna 1.' },
            { l: 4, v: { n: 2, pilha: 'fat(3) › fat(2)' }, note: 'Volta para fat(2): 2 * 1 = 2.' },
            { l: 4, v: { n: 3, pilha: 'fat(3)' }, note: 'Volta para fat(3): 3 * 2 = 6.' },
            { l: 6, v: {}, out: '6', note: 'A pilha esvaziou. Saída: 6.' }] }),
          K('Notação O (crescimento)', 'Classe', ['<b>O(1)</b>', '<b>O(log n)</b>', '<b>O(n)</b>', '<b>O(n²)</b>'], 'Exemplo', ['Acessar v[i]', 'Busca binária', 'Busca linear, somar um vetor', 'Bubble sort, laços aninhados']),
          V('Uma função recursiva sem caso base termina normalmente após algumas chamadas.', false, 'Falso. Ela chama a si mesma indefinidamente até estourar a pilha.')
        ],
        quiz: [
          Q('Qual é o valor de fat(4), sendo fat(n) = n × fat(n − 1) e fat(1) = 1?', ['24', '12', '10', '4'], 0, '4 × 3 × 2 × 1 = 24.'),
          Q('Em uma função recursiva, o caso base serve para:', ['interromper as chamadas recursivas', 'deixar a função mais lenta', 'criar variáveis globais', 'ordenar o vetor'], 0, 'É a condição de parada.'),
          Q('Somar todos os elementos de um vetor de n posições com um laço tem complexidade:', ['O(n)', 'O(1)', 'O(n²)', 'O(log n)'], 0, 'Visita cada elemento uma vez.'),
          Q('Qual é a saída?' + code('funcao f(n: inteiro): inteiro\n    se (n = 0) entao\n        retorne 0\n    fimse\n    retorne n + f(n - 1)\nfimfuncao\nescreva(f(4))'), ['10', '4', '24', '0'], 0, '4 + 3 + 2 + 1 + 0 = 10.')
        ]
      }
    ]
  },

  /* ============================ 5. LEITURA E PRODUÇÃO TEXTUAL ============================ */
  {
    id: 'lpt', mascot: 'revisao', area: 'lpt', c: '#0d9488', cd: '#0f766e', emoji: '📝', theme: 'letras',
    title: 'Prática de Leitura e Produção Textual', sub: 'Interpretação, coesão, gêneros acadêmicos, escrita técnica e norma-padrão',
    fases: [
      {
        id: 'lpt-1', ico: '👓', title: 'Leitura e interpretação', topic: 'Tema, tese, inferência, fato e opinião',
        lesson: [
          C('👓', 'Ler é mais que decodificar', '<ul><li><b>Tema</b>: o assunto geral do texto</li><li><b>Tese</b>: o ponto de vista que o autor defende</li><li><b>Argumentos</b>: as razões que sustentam a tese</li><li><b>Inferência</b>: conclusão que o texto permite tirar, mesmo sem dizer de forma explícita</li></ul>'),
          K('Interpretar × Extrapolar', 'Interpretar ✅', ['Conclusão apoiada em pistas do texto'], 'Extrapolar ❌', ['Ir além do que o texto permite', 'Usar opinião própria como se fosse do autor']),
          S('classify', 'Simulador: fato ou opinião?', { intro: 'Fato pode ser verificado. Opinião é um julgamento de quem fala.', cats: ['Fato', 'Opinião'], items: [
            ['A biblioteca do campus abre às 8h.', 0, 'Pode ser conferido: fato.'],
            ['O novo horário da biblioteca é o melhor possível.', 1, '“O melhor possível” é um julgamento: opinião.'],
            ['A turma tem 42 estudantes matriculados.', 0, 'Dado verificável: fato.'],
            ['Python é a linguagem mais elegante que existe.', 1, 'Juízo de valor: opinião.'],
            ['O JavaScript é executado pelos navegadores web.', 0, 'Informação verificável: fato.'],
            ['Essa disciplina é fácil demais.', 1, 'Avaliação pessoal: opinião.']] }),
          V('Uma inferência é uma informação escrita literalmente no texto.', false, 'Falso. Inferir é concluir algo a partir das pistas, sem que esteja dito de forma explícita.')
        ],
        quiz: [
          Q('“Os aplicativos de transporte mudaram a mobilidade urbana, mas precisam de regras para proteger motoristas.” A tese do autor é que:', ['os aplicativos precisam de regulação para proteger motoristas', 'aplicativos devem ser proibidos', 'a mobilidade urbana não mudou', 'motoristas não usam aplicativos'], 0, 'O ponto de vista defendido é a necessidade de regras.'),
          Q('“Ana saiu de casa com guarda-chuva e capa.” Uma inferência possível é que:', ['Ana esperava chuva', 'Ana trabalha em uma loja', 'Ana estava atrasada', 'Ana não gosta de sol'], 0, 'Os objetos são pista de que ela previa chuva; o resto é extrapolação.'),
          Q('Qual frase expressa uma OPINIÃO?', ['O novo sistema é muito mais bonito que o antigo.', 'O sistema foi lançado em março.', 'O sistema tem 12 telas.', 'O sistema funciona no navegador.'], 0, '“Mais bonito” é julgamento pessoal.'),
          Q('O tema de um texto é:', ['o assunto geral tratado', 'a opinião do leitor', 'o título obrigatoriamente', 'a última frase'], 0, 'Tema = assunto; tese = posição sobre o assunto.')
        ]
      },
      {
        id: 'lpt-2', ico: '🔗', title: 'Coesão e coerência', topic: 'Conectivos, referenciação e lógica do texto',
        lesson: [
          K('Coesão × Coerência', 'Coesão', ['Ligação entre as partes do texto', 'Conectivos, pronomes, sinônimos'], 'Coerência', ['Sentido e lógica das ideias', 'Sem contradições']),
          C('🔗', 'Conectivos e suas relações', '<ul><li><b>Adição</b>: além disso, também, e</li><li><b>Oposição</b>: mas, porém, no entanto, contudo</li><li><b>Causa</b>: porque, já que, visto que</li><li><b>Conclusão</b>: portanto, logo, assim</li></ul>'),
          S('classify', 'Simulador: que relação o conectivo indica?', { intro: 'Classifique o conectivo destacado.', cats: ['Adição', 'Oposição', 'Causa', 'Conclusão'], items: [
            ['O app é rápido; <b>além disso</b>, é gratuito.', 0, 'Acrescenta uma informação: adição.'],
            ['Testamos tudo; <b>no entanto</b>, o erro voltou.', 1, 'Contraria a expectativa: oposição.'],
            ['O site caiu <b>porque</b> o servidor ficou sem memória.', 2, 'Explica o motivo: causa.'],
            ['Os testes passaram; <b>portanto</b>, podemos publicar.', 3, 'Tira uma conclusão: conclusão.'],
            ['Ele estudou, <b>porém</b> não fez os exercícios.', 1, 'Oposição.'],
            ['<b>Visto que</b> o prazo acabou, a entrega foi fechada.', 2, 'Indica a causa.']] }),
          T('Retomada sem repetição', '<p>Em vez de repetir “o sistema” cinco vezes, use <b>pronomes</b> (ele), <b>sinônimos</b> (a plataforma) ou <b>expressões</b> (a ferramenta). Isso é coesão referencial.</p>'),
          V('“O teste falhou, portanto o código está correto” é uma frase coerente.', false, 'Falso. A conclusão contradiz a premissa: falta coerência.')
        ],
        quiz: [
          Q('Em “O projeto atrasou, <b>contudo</b> foi entregue com qualidade”, o conectivo indica:', ['oposição', 'causa', 'conclusão', 'adição'], 0, 'Contudo = mas, porém.'),
          Q('Qual conectivo completa com sentido de conclusão: “Todos os requisitos foram aprovados; ___, podemos iniciar o desenvolvimento.”', ['portanto', 'embora', 'porque', 'mas'], 0, 'Portanto introduz consequência/conclusão.'),
          Q('“A empresa lançou o app. <b>Ele</b> já tem mil usuários.” O pronome “ele” é um recurso de:', ['coesão referencial', 'incoerência', 'oposição', 'citação direta'], 0, 'Retoma “o app” sem repeti-lo.'),
          Q('Um texto que afirma no início que o software é gratuito e, no fim, cobra uma taxa obrigatória para usá-lo apresenta problema de:', ['coerência', 'ortografia', 'formatação', 'pontuação apenas'], 0, 'As ideias se contradizem.')
        ]
      },
      {
        id: 'lpt-3', ico: '🎓', title: 'Gêneros acadêmicos', topic: 'Resumo, resenha, fichamento, citação e plágio',
        lesson: [
          K('Resumo × Resenha', 'Resumo', ['Apresenta as ideias principais', 'Sem opinião de quem escreve'], 'Resenha', ['Resume <b>e avalia</b> a obra', 'Traz a opinião fundamentada do resenhista']),
          C('📇', 'Fichamento', '<p>Registro organizado da leitura: referência da obra, citações importantes (com página) e comentários. Ajuda muito a escrever trabalhos depois.</p>'),
          C('❝', 'Citação e paráfrase (ABNT NBR 10520)', '<ul><li><b>Citação direta</b>: cópia literal. Até 3 linhas: entre aspas no texto. Mais de 3 linhas: em bloco com recuo de 4 cm e letra menor, sem aspas.</li><li><b>Citação indireta (paráfrase)</b>: a ideia do autor com <b>suas palavras</b>. Também precisa indicar a fonte.</li></ul>'),
          T('Plágio', '<p>Usar texto ou ideia de outra pessoa <b>sem citar a fonte</b> é plágio, mesmo que você troque algumas palavras. Na dúvida, cite.</p>'),
          V('Na paráfrase, como o texto é escrito com minhas palavras, não preciso indicar o autor.', false, 'Falso. A ideia continua sendo do autor e a fonte deve ser citada.')
        ],
        quiz: [
          Q('O gênero que apresenta uma obra e faz uma avaliação crítica dela é:', ['a resenha', 'o resumo', 'o fichamento', 'o sumário'], 0, 'Resenha = resumo + avaliação.'),
          Q('Segundo a ABNT, uma citação direta com mais de três linhas deve ser:', ['destacada com recuo, letra menor e sem aspas', 'escrita entre aspas no meio do parágrafo', 'colocada em negrito', 'evitada sempre'], 0, 'Citações longas ficam em bloco recuado.'),
          Q('Reescrever com outras palavras a ideia de um autor, indicando a fonte, é fazer:', ['uma citação indireta (paráfrase)', 'plágio', 'uma citação direta', 'uma resenha crítica'], 0, 'Paráfrase com fonte é citação indireta.'),
          Q('Qual situação caracteriza plágio?', ['Copiar parágrafos de um artigo trocando poucas palavras, sem citar o autor', 'Citar entre aspas com autor e página', 'Parafrasear indicando a fonte', 'Listar as referências no fim do trabalho'], 0, 'Sem fonte, a autoria é apropriada indevidamente.')
        ]
      },
      {
        id: 'lpt-4', ico: '✉️', title: 'Escrita técnica e profissional', topic: 'Clareza, e-mail profissional e documentação',
        lesson: [
          C('✉️', 'Escrever para ser entendido', '<ul><li><b>Uma ideia por frase</b>; frases curtas</li><li><b>Voz ativa</b>: “O sistema envia o e-mail” em vez de “O e-mail é enviado pelo sistema”</li><li>Termos técnicos <b>explicados</b> quando o leitor não é da área</li><li>Comece pelo <b>mais importante</b></li></ul>'),
          C('📧', 'E-mail profissional', '<ul><li><b>Assunto</b> específico: “Erro no login do app — versão 2.3”</li><li>Saudação, contexto em 1 ou 2 frases, pedido claro e prazo</li><li>Despedida e assinatura</li></ul>'),
          K('Relato de bug', 'Vago ❌', ['“O sistema não funciona.”'], 'Útil ✅', ['Passos para reproduzir', 'O que era esperado', 'O que aconteceu', 'Versão, navegador e imagem da tela']),
          T('README', '<p>Todo projeto deve ter um README dizendo <b>o que é</b>, <b>como instalar</b>, <b>como usar</b> e <b>como contribuir</b>.</p>'),
          V('Em textos técnicos, é melhor usar frases longas e cheias de termos difíceis para parecer mais profissional.', false, 'Falso. Clareza e objetividade são o que torna um texto técnico profissional.')
        ],
        quiz: [
          Q('Qual é o melhor assunto para um e-mail ao professor sobre a entrega de um trabalho?', ['Entrega do Trabalho 2 de Algoritmos — dúvida sobre o prazo', 'Oi', 'Urgente!!!', '(sem assunto)'], 0, 'O assunto deve dizer do que se trata.'),
          Q('Qual frase está na voz ativa?', ['O aplicativo envia um aviso ao usuário.', 'Um aviso é enviado ao usuário pelo aplicativo.', 'O aviso foi enviado.', 'Avisos são enviados.'], 0, 'Na voz ativa, o sujeito pratica a ação.'),
          Q('Um bom relato de bug deve conter:', ['os passos para reproduzir, o resultado esperado e o obtido', 'apenas “não funciona”', 'a opinião sobre a equipe', 'só uma imagem sem explicação'], 0, 'Assim o time consegue reproduzir e corrigir.'),
          Q('O arquivo que normalmente explica o que é um projeto e como usá-lo é o:', ['README', 'CHANGELOG de outra empresa', 'favicon', 'arquivo .exe'], 0, 'O README é a porta de entrada do projeto.')
        ]
      },
      {
        id: 'lpt-5', ico: '✅', title: 'Norma-padrão em foco', topic: 'Crase, porquês e vírgula',
        lesson: [
          C('à', 'Crase', '<p>É a junção da preposição <b>a</b> com o artigo <b>a</b>. Dica: troque por uma palavra masculina. Se virar <b>“ao”</b>, há crase.</p><ul><li>Fui <b>à</b> reunião → fui <b>ao</b> encontro ✅</li><li>Não use antes de palavra masculina, verbo ou “uma”: “a partir”, “a pé”, “começou a chover”.</li></ul>'),
          K('Os porquês', 'Forma', ['<b>Por que</b>', '<b>Porque</b>', '<b>Por quê</b>', '<b>Porquê</b>'], 'Uso', ['Perguntas: “Por que o teste falhou?”', 'Explicação: “Falhou porque faltou um dado.”', 'No fim da frase: “Falhou por quê?”', 'Substantivo: “Entendi o porquê do erro.”']),
          C('❕', 'Vírgula', '<ul><li><b>Não</b> se separa sujeito do verbo: “Os alunos do 2º período <s>,</s> entregaram.”</li><li><b>Use</b> para separar itens de uma lista, o vocativo e expressões deslocadas: “No fim do semestre, haverá prova.”</li></ul>'),
          V('Na frase “Vou à pé para a faculdade”, o uso da crase está correto.', false, 'Falso. “Pé” é masculino: o correto é “vou a pé”.')
        ],
        quiz: [
          Q('Em qual frase a crase está correta?', ['Entreguei o relatório à coordenadora.', 'Começou à chover.', 'Fui à pé.', 'Ele saiu à uma hora qualquer.'], 0, 'Entregar algo a + a coordenadora = à. Troque: “ao coordenador”.'),
          Q('Complete: “Não sei ___ o servidor caiu.”', ['por que', 'porque', 'porquê', 'por quê'], 0, 'Equivale a “por qual motivo” no meio da frase: por que.'),
          Q('Qual frase está pontuada corretamente?', ['Os estudantes do curso entregaram o projeto.', 'Os estudantes do curso, entregaram o projeto.', 'Os estudantes, do curso entregaram, o projeto.', 'Os, estudantes do curso entregaram o projeto.'], 0, 'Não se separa o sujeito do verbo com vírgula.'),
          Q('Complete: “O código não compilou ___ faltou um ponto e vírgula.”', ['porque', 'por que', 'por quê', 'porquê'], 0, 'Introduz uma explicação: porque.')
        ]
      }
    ]
  },

  /* ============================ 6. LABORATÓRIO WEB ============================ */
  {
    id: 'web', mascot: 'estudando', area: 'web', c: '#ea580c', cd: '#c2410c', emoji: '🌐', theme: 'web',
    title: 'Laboratório de Programação de Web Sites', sub: 'Como a web funciona, HTML, CSS, layout responsivo e JavaScript',
    fases: [
      {
        id: 'web-1', ico: '🌍', title: 'Como a web funciona', topic: 'Cliente, servidor, HTTP, URL e DNS',
        lesson: [
          C('🌍', 'Do clique à página', '<ol style="padding-left:20px;margin:0 0 12px"><li>Você digita uma <b>URL</b> no navegador (o <b>cliente</b>)</li><li>O <b>DNS</b> traduz o nome do site para um <b>endereço IP</b></li><li>O navegador envia uma <b>requisição HTTP</b> ao <b>servidor</b></li><li>O servidor devolve uma <b>resposta</b> com HTML, CSS, JS e imagens</li><li>O navegador monta e exibe a página</li></ol>'),
          K('As três linguagens do front-end', 'Linguagem', ['<b>HTML</b>', '<b>CSS</b>', '<b>JavaScript</b>'], 'Papel', ['Estrutura e conteúdo', 'Aparência e layout', 'Comportamento e interação']),
          C('🔢', 'Códigos de status HTTP', '<ul><li><b>200</b> OK: deu certo</li><li><b>301</b>: a página mudou de endereço</li><li><b>404</b>: não encontrado</li><li><b>500</b>: erro interno no servidor</li></ul><p><b>HTTPS</b> é o HTTP com criptografia (TLS): protege os dados no caminho.</p>'),
          V('O DNS é responsável por traduzir nomes de domínio em endereços IP.', true, 'Verdadeiro. Funciona como uma “agenda de contatos” da internet.')
        ],
        quiz: [
          Q('O serviço que converte “www.exemplo.com.br” em um endereço IP é o:', ['DNS', 'HTML', 'CSS', 'FTP'], 0, 'Domain Name System.'),
          Q('Ao acessar uma página que não existe no servidor, o código de status mais comum é:', ['404', '200', '500', '301'], 0, '404 = Not Found.'),
          Q('Qual linguagem é responsável pela aparência (cores, fontes, layout) de uma página?', ['CSS', 'HTML', 'SQL', 'HTTP'], 0, 'HTML estrutura, CSS estiliza, JS dá comportamento.'),
          Q('A principal diferença do HTTPS em relação ao HTTP é:', ['a criptografia da comunicação', 'a cor da página', 'não precisar de servidor', 'funcionar sem internet'], 0, 'O HTTPS usa TLS para proteger os dados em trânsito.')
        ]
      },
      {
        id: 'web-2', ico: '🧱', title: 'HTML', topic: 'Estrutura, tags, links, imagens e semântica',
        lesson: [
          C('🧱', 'Tags e estrutura', `<p>O HTML é feito de <b>elementos</b> marcados por tags: ${c('<p>texto</p>')}. Estrutura mínima:</p>` + code('<!DOCTYPE html>\n<html lang="pt-BR">\n  <head>\n    <meta charset="UTF-8">\n    <title>Minha página</title>\n  </head>\n  <body>\n    conteúdo visível\n  </body>\n</html>')),
          S('html', 'Laboratório: edite o HTML e veja o resultado', { code: '<h1>Meu primeiro site</h1>\n<p>Olá! Eu estudo <strong>Engenharia de Software</strong>.</p>\n<h2>O que estou aprendendo</h2>\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>\n<a href="#">Um link</a>', dica: 'Experimente: troque o texto do h1, adicione um <li>JavaScript</li> na lista ou crie um novo parágrafo.' }),
          C('🏷️', 'HTML semântico', `<p>Use a tag que <b>descreve o conteúdo</b>: ${c('<header>')}, ${c('<nav>')}, ${c('<main>')}, ${c('<article>')}, ${c('<footer>')}. Isso ajuda leitores de tela e buscadores.</p><p>Imagens: ${c('<img src="foto.jpg" alt="descrição">')}. O <b>alt</b> é essencial para acessibilidade.</p>`),
          V('O atributo alt da tag img serve para descrever a imagem, ajudando quem usa leitor de tela.', true, 'Verdadeiro. Também aparece se a imagem não carregar.')
        ],
        quiz: [
          Q('Qual tag cria um link?', [h('<a href="...">'), h('<link-to>'), h('<img>'), h('<p>')], 0, 'A tag a (âncora) com o atributo href.'),
          Q('Qual tag representa o título principal da página?', [h('<h1>'), h('<h6>'), h('<head>'), h('<title-main>')], 0, 'h1 é o título de maior importância; head é a seção de metadados.'),
          Q('Para criar uma lista com marcadores (não numerada), usa-se:', [h('<ul>') + ' com ' + h('<li>'), h('<ol>') + ' com ' + h('<td>'), h('<list>'), h('<table>')], 0, 'ul = unordered list; cada item é um li.'),
          Q('Qual é uma tag semântica para o menu de navegação?', [h('<nav>'), h('<div>'), h('<span>'), h('<b>')], 0, 'nav indica um bloco de navegação.')
        ]
      },
      {
        id: 'web-3', ico: '🎨', title: 'CSS', topic: 'Seletores, propriedades, box model e especificidade',
        lesson: [
          C('🎨', 'Regra CSS', '<p>Uma regra tem <b>seletor</b> e <b>declarações</b>:</p>' + code('h1 { color: navy; font-size: 32px; }\n.destaque { background: yellow; }\n#topo { padding: 16px; }') + '<p>Seletor de tag (h1), de <b>classe</b> (.destaque) e de <b>id</b> (#topo).</p>'),
          C('📦', 'Box model', '<p>Todo elemento é uma caixa, de dentro para fora:</p><ul><li><b>content</b>: o conteúdo</li><li><b>padding</b>: espaço interno</li><li><b>border</b>: a borda</li><li><b>margin</b>: espaço externo, entre caixas</li></ul>'),
          S('html', 'Laboratório: mexa no box model', { code: '<style>\n  .card {\n    background: #eef4ff;\n    border: 3px solid #2f80ed;\n    padding: 16px;\n    margin: 12px;\n    border-radius: 12px;\n  }\n  h2 { color: #0b2a5b; }\n</style>\n<div class="card">\n  <h2>Box model</h2>\n  <p>Mude o padding, a margin e a borda.</p>\n</div>', dica: 'Experimente: padding: 40px; border: 8px dashed orange; ou troque a cor do h2.' }),
          T('Especificidade', '<p>Quando duas regras disputam o mesmo elemento, vence a mais específica: <b>id &gt; classe &gt; tag</b>. Empate? Vence a que vem <b>por último</b>.</p>'),
          V('O padding é o espaço entre a borda de um elemento e os outros elementos ao redor.', false, 'Falso. Isso é a margin. O padding é o espaço interno, entre o conteúdo e a borda.')
        ],
        quiz: [
          Q('Qual seletor aplica estilo a todos os elementos com class="aviso"?', ['.aviso', '#aviso', 'aviso', '*aviso'], 0, 'Ponto para classe; cerquilha para id.'),
          Q('No box model, o espaço entre o conteúdo e a borda é o:', ['padding', 'margin', 'outline', 'gap externo'], 0, 'Padding é interno; margin é externa.'),
          Q('Um parágrafo tem id="intro" e class="texto". As regras #intro { color: red } e .texto { color: blue } são aplicadas. A cor final é:', ['vermelha, pois id é mais específico que classe', 'azul, pois classe vence id', 'preta, pelo conflito', 'roxa, pela mistura'], 0, 'Especificidade: id > classe > tag.'),
          Q('Qual propriedade muda a cor do texto?', ['color', 'background', 'font-color', 'text-paint'], 0, 'color define a cor do texto; background, a do fundo.')
        ]
      },
      {
        id: 'web-4', ico: '📱', title: 'Layout responsivo', topic: 'Flexbox, media queries, viewport e mobile first',
        lesson: [
          C('📱', 'Um site, várias telas', `<p>Responsivo é o site que se adapta ao celular, tablet e computador. Ingredientes:</p><ul><li>A meta tag ${c('<meta name="viewport" content="width=device-width, initial-scale=1">')}</li><li>Medidas flexíveis (%, fr, rem)</li><li><b>Media queries</b> para mudar o layout por largura</li></ul>`),
          C('↔️', 'Flexbox', '<p>Com <b>display: flex</b> no contêiner, os filhos se alinham em linha. Propriedades úteis: <b>justify-content</b> (eixo principal), <b>align-items</b> (eixo cruzado), <b>gap</b> e <b>flex-direction</b>.</p>'),
          S('html', 'Laboratório: flexbox e media query', { code: '<style>\n  .linha {\n    display: flex;\n    gap: 8px;\n    justify-content: space-between;\n  }\n  .item {\n    background: #ffb800;\n    padding: 14px;\n    border-radius: 8px;\n    flex: 1;\n    text-align: center;\n    font-weight: bold;\n  }\n  @media (max-width: 300px) {\n    .linha { flex-direction: column; }\n  }\n</style>\n<div class="linha">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>', dica: 'Experimente: flex-direction: column; ou troque max-width: 300px por 2000px para ver a media query agir.' }),
          T('Mobile first', '<p>Comece o CSS pensando no <b>celular</b> e use <b>min-width</b> nas media queries para ir acrescentando o layout de telas maiores.</p>'),
          V('Media queries permitem aplicar estilos diferentes conforme a largura da tela.', true, 'Verdadeiro. Ex.: @media (min-width: 768px) { ... }.')
        ],
        quiz: [
          Q('Para os filhos de um contêiner ficarem lado a lado com Flexbox, aplica-se no contêiner:', ['display: flex', 'position: flex', 'float: flex', 'flex: none'], 0, 'display: flex transforma o elemento em contêiner flexível.'),
          Q('Qual recurso CSS aplica estilos somente em telas com até 600 px de largura?', ['@media (max-width: 600px) { ... }', '@screen 600 { ... }', '@if (600px) { ... }', '@width-600 { ... }'], 0, 'Essa é a sintaxe da media query.'),
          Q('A meta tag viewport é importante porque:', ['faz a página usar a largura real do dispositivo móvel', 'deixa o site mais colorido', 'ativa o JavaScript', 'define o título da aba'], 0, 'Sem ela, o celular simula uma tela larga e reduz tudo.'),
          Q('Em Flexbox, para empilhar os itens em coluna, usa-se:', ['flex-direction: column', 'justify-content: column', 'align-items: column', 'display: column'], 0, 'flex-direction define a direção do eixo principal.')
        ]
      },
      {
        id: 'web-5', ico: '⚡', title: 'JavaScript no navegador', topic: 'DOM, eventos e alteração da página',
        lesson: [
          C('⚡', 'O DOM', '<p>O navegador transforma o HTML em uma árvore de objetos, o <b>DOM</b>. Com JavaScript, você encontra elementos e muda seu conteúdo, estilo e atributos.</p>' + code("const msg = document.getElementById('msg');\nmsg.textContent = 'Olá!';")),
          C('🖱️', 'Eventos', '<p>Eventos são ações do usuário ou do navegador: <b>click</b>, <b>input</b>, <b>submit</b>, <b>keydown</b>. Você “escuta” com <b>addEventListener</b>.</p>'),
          S('html', 'Laboratório: um contador com JavaScript', { code: "<button id=\"btn\">Clique aqui</button>\n<p id=\"msg\">Contador: 0</p>\n<script>\n  let n = 0;\n  const btn = document.getElementById('btn');\n  btn.addEventListener('click', () => {\n    n = n + 1;\n    document.getElementById('msg').textContent = 'Contador: ' + n;\n  });\n</script>", dica: 'Experimente: some de 2 em 2, ou mude a mensagem quando n chegar a 10.' }),
          T('let e const', '<p>Use <b>const</b> para o que não será reatribuído e <b>let</b> para o que muda (como um contador). Evite o antigo <b>var</b>.</p>'),
          V('addEventListener permite executar uma função quando um evento, como um clique, acontece.', true, 'Verdadeiro. É a forma recomendada de tratar eventos.')
        ],
        quiz: [
          Q('Qual comando seleciona o elemento com id="nome"?', ["document.getElementById('nome')", "document.getClass('nome')", "html.find('#nome')", "select('nome')"], 0, 'getElementById busca pelo id.'),
          Q('Para reagir ao clique em um botão, usa-se:', ["btn.addEventListener('click', funcao)", "btn.onClickNow(funcao)", "btn.style.click = funcao", "click(btn) = funcao"], 0, 'addEventListener registra a função para o evento.'),
          Q('O DOM é:', ['a representação da página como uma árvore de objetos manipuláveis', 'um banco de dados do servidor', 'um tipo de imagem', 'uma linguagem de estilo'], 0, 'Document Object Model.'),
          Q('Qual declaração é a mais indicada para um contador que muda de valor?', ['let contador = 0', 'const contador = 0', 'var const contador', 'fixed contador = 0'], 0, 'const não permite reatribuição; let permite.')
        ]
      }
    ]
  },

  /* ============================ 7. ENGENHARIA DE REQUISITOS ============================ */
  {
    id: 'req', mascot: 'duvida', area: 'req', c: '#16a34a', cd: '#11803a', emoji: '📋', theme: 'requisitos',
    title: 'Engenharia de Requisitos e Análise de Sistemas', sub: 'Requisitos, elicitação, histórias de usuário, UML e validação',
    fases: [
      {
        id: 'req-1', ico: '📋', title: 'O que são requisitos', topic: 'Funcionais, não funcionais e stakeholders',
        lesson: [
          C('📋', 'Requisito', '<p>É a descrição do que o sistema deve <b>fazer</b> ou de <b>como</b> ele deve se comportar. Requisitos mal entendidos estão entre as principais causas de fracasso de projetos.</p>'),
          K('Funcional × Não funcional', 'Funcional (RF)', ['O que o sistema <b>faz</b>', '“Emitir boleto”, “cadastrar aluno”'], 'Não funcional (RNF)', ['<b>Como</b> faz: qualidade e restrições', 'Desempenho, segurança, usabilidade, disponibilidade']),
          S('classify', 'Simulador: RF ou RNF?', { intro: 'Sistema acadêmico de uma faculdade. Classifique cada requisito.', cats: ['Funcional', 'Não funcional'], items: [
            ['O aluno deve poder emitir o boleto da mensalidade.', 0, 'Descreve uma função do sistema.'],
            ['As páginas devem carregar em até 2 segundos.', 1, 'Desempenho: não funcional.'],
            ['O professor deve poder lançar notas por disciplina.', 0, 'Função do sistema.'],
            ['As senhas devem ser armazenadas com hash criptográfico.', 1, 'Segurança: não funcional.'],
            ['O sistema deve funcionar no Chrome, Firefox e Safari.', 1, 'Compatibilidade: não funcional.'],
            ['O coordenador deve gerar relatório de frequência por turma.', 0, 'Função do sistema.']] }),
          C('👥', 'Stakeholders', '<p>São todos os interessados no sistema: usuários, clientes, gestores, equipe técnica, órgãos reguladores. Esquecer um stakeholder é esquecer requisitos.</p>'),
          V('“O sistema deve estar disponível 99,5% do tempo” é um requisito funcional.', false, 'Falso. Disponibilidade é uma qualidade: requisito não funcional.')
        ],
        quiz: [
          Q('“O sistema deve permitir que o cliente acompanhe o status do pedido.” Esse é um requisito:', ['funcional', 'não funcional', 'de hardware', 'de marketing'], 0, 'Descreve uma funcionalidade.'),
          Q('Qual é um requisito NÃO funcional?', ['O app deve abrir em menos de 3 segundos', 'O usuário deve poder cadastrar um endereço', 'O sistema deve gerar nota fiscal', 'O gerente deve aprovar descontos'], 0, 'Tempo de resposta = desempenho.'),
          Q('Stakeholders são:', ['todas as pessoas ou grupos interessados ou afetados pelo sistema', 'apenas os programadores', 'somente os investidores', 'os servidores do sistema'], 0, 'Incluem usuários, clientes, gestores e outros.'),
          Q('“Os dados dos pacientes devem ser acessados apenas por profissionais autorizados” é um requisito não funcional de:', ['segurança', 'desempenho', 'portabilidade', 'estética'], 0, 'Controle de acesso é segurança.')
        ]
      },
      {
        id: 'req-2', ico: '🎤', title: 'Elicitação de requisitos', topic: 'Entrevista, questionário, observação, workshop e protótipo',
        lesson: [
          C('🎤', 'Técnicas para descobrir requisitos', '<ul><li><b>Entrevista</b>: conversa com usuários-chave; ótima para entender detalhes</li><li><b>Questionário</b>: alcança muitas pessoas rápido</li><li><b>Observação</b> (etnografia): ver o trabalho real acontecendo</li><li><b>Workshop / brainstorming</b>: reúne vários stakeholders</li><li><b>Prototipação</b>: mostra algo concreto para receber retorno</li><li><b>Análise de documentos</b>: formulários, leis, sistemas antigos</li></ul>'),
          T('O que o usuário diz × o que ele faz', '<p>As pessoas nem sempre conseguem descrever o próprio trabalho. A <b>observação</b> revela atalhos, planilhas paralelas e problemas que ninguém mencionou.</p>'),
          K('Perguntas abertas × fechadas', 'Abertas', ['“Como você faz o fechamento do mês?”', 'Exploram e descobrem'], 'Fechadas', ['“Você usa planilha? Sim ou não.”', 'Confirmam e quantificam']),
          V('O questionário é a técnica mais indicada para entender em profundidade um processo complexo de um único setor.', false, 'Falso. Para profundidade, entrevistas e observação funcionam melhor; questionários servem para alcançar muitas pessoas.')
        ],
        quiz: [
          Q('Para levantar a opinião de 2.000 alunos sobre um novo app, a técnica mais prática é:', ['questionário', 'observação individual de cada aluno', 'entrevista com cada aluno', 'leitura de código'], 0, 'Questionários alcançam muitas pessoas com baixo custo.'),
          Q('Acompanhar o dia de trabalho dos atendentes para ver como eles realmente usam o sistema é:', ['observação (etnografia)', 'teste unitário', 'questionário', 'refatoração'], 0, 'Observar o trabalho real revela requisitos implícitos.'),
          Q('Mostrar telas desenhadas ao cliente para receber retorno é a técnica de:', ['prototipação', 'implantação', 'manutenção', 'backup'], 0, 'O protótipo deixa as ideias concretas.'),
          Q('Qual é um exemplo de pergunta aberta em uma entrevista?', ['“Como funciona o processo de matrícula hoje?”', '“Você usa o sistema? Sim ou não?”', '“Quantos anos você tem?”', '“O botão é azul?”'], 0, 'Perguntas abertas convidam a explicar.')
        ]
      },
      {
        id: 'req-3', ico: '🗒️', title: 'Histórias de usuário e priorização', topic: 'Formato, critérios de aceitação, INVEST e MoSCoW',
        lesson: [
          C('🗒️', 'História de usuário', '<p>Formato comum em métodos ágeis:</p><p class="hl"><b>Como</b> &lt;papel&gt;, <b>quero</b> &lt;ação&gt;, <b>para</b> &lt;benefício&gt;.</p><p>Ex.: “Como aluno, quero baixar meu histórico em PDF, para comprovar minhas disciplinas no estágio.”</p>'),
          C('✅', 'Critérios de aceitação', '<p>Definem quando a história está pronta. Um formato útil é <b>Dado / Quando / Então</b>:</p><p>“<b>Dado</b> que estou logado, <b>quando</b> clico em Histórico, <b>então</b> recebo um PDF com todas as disciplinas cursadas.”</p>'),
          T('INVEST', '<p>Boa história é: <b>I</b>ndependente, <b>N</b>egociável, <b>V</b>aliosa, <b>E</b>stimável, <b>S</b>mall (pequena) e <b>T</b>estável.</p>'),
          S('classify', 'Simulador: priorize com MoSCoW', { intro: 'App de agendamento para uma barbearia. O primeiro lançamento precisa sair em 1 mês.', cats: ['Must (obrigatório)', 'Should (importante)', 'Could (desejável)', "Won't (não agora)"], items: [
            ['Cliente agenda um horário', 0, 'Sem isso o app não tem razão de existir: Must.'],
            ['Barbeiro vê a agenda do dia', 0, 'Essencial para o serviço funcionar: Must.'],
            ['Lembrete por notificação 1 hora antes', 1, 'Agrega muito valor, mas o app funciona sem: Should.'],
            ['Tema escuro', 2, 'Legal de ter, baixo impacto: Could.'],
            ['Programa de pontos e cashback', 3, 'Fica para versões futuras: Won’t (agora).']] }),
          V('“O sistema deve ser bom” é uma história de usuário bem escrita.', false, 'Falso. Não tem papel, ação, benefício nem como ser testada.')
        ],
        quiz: [
          Q('Qual é uma história de usuário bem escrita?', ['Como professor, quero lançar notas por turma, para agilizar o fechamento do semestre', 'O sistema deve ser rápido e bonito', 'Fazer a tela de notas', 'Banco de dados com tabela de notas'], 0, 'Tem papel, ação e benefício.'),
          Q('Na priorização MoSCoW, “Must” representa:', ['o que é obrigatório para a entrega', 'o que nunca será feito', 'o que é apenas desejável', 'o que é opcional e estético'], 0, 'Must have: sem isso a entrega não faz sentido.'),
          Q('O “T” do acrônimo INVEST indica que a história deve ser:', ['testável', 'técnica', 'temporária', 'traduzida'], 0, 'Precisa ser possível verificar se foi cumprida.'),
          Q('“Dado que o carrinho tem itens, quando clico em Finalizar, então vejo o resumo do pedido.” Esse texto é um:', ['critério de aceitação', 'diagrama de classes', 'requisito de hardware', 'código-fonte'], 0, 'Formato Dado/Quando/Então descreve o comportamento esperado.')
        ]
      },
      {
        id: 'req-4', ico: '📐', title: 'Modelagem com UML', topic: 'Casos de uso, classes, atividades e sequência',
        lesson: [
          C('🎭', 'Diagrama de casos de uso', '<ul><li><b>Ator</b> (bonequinho): quem interage com o sistema, pessoa ou outro sistema</li><li><b>Caso de uso</b> (elipse): um objetivo do ator, como “Realizar matrícula”</li><li><b>&lt;&lt;include&gt;&gt;</b>: comportamento <b>sempre</b> incluído</li><li><b>&lt;&lt;extend&gt;&gt;</b>: comportamento <b>opcional</b> ou condicional</li></ul>'),
          C('🧩', 'Diagrama de classes', '<p>Mostra a estrutura: <b>classes</b> (nome, atributos e métodos) e seus relacionamentos.</p><ul><li><b>Associação</b>: Aluno — matricula-se em — Disciplina</li><li><b>Herança</b> (seta com triângulo vazio): Professor <i>é uma</i> Pessoa</li></ul>'),
          K('Outros diagramas úteis', 'Diagrama', ['<b>Atividades</b>', '<b>Sequência</b>'], 'Mostra', ['O fluxo de um processo, com decisões (parecido com fluxograma)', 'A troca de mensagens entre objetos ao longo do tempo']),
          V('No diagrama de casos de uso, o ator precisa ser sempre uma pessoa.', false, 'Falso. Um ator pode ser outro sistema, como um gateway de pagamento.')
        ],
        quiz: [
          Q('No diagrama de casos de uso, o relacionamento usado para um comportamento OPCIONAL é:', [h('<<extend>>'), h('<<include>>'), 'herança obrigatória', 'composição'], 0, 'extend = opcional/condicional; include = sempre executado.'),
          Q('Qual diagrama UML é mais indicado para mostrar classes, atributos e métodos?', ['diagrama de classes', 'diagrama de casos de uso', 'diagrama de atividades', 'organograma'], 0, 'É o principal diagrama estrutural.'),
          Q('Em um sistema de loja, o serviço externo de pagamento que recebe dados do sistema pode ser representado como:', ['um ator', 'um atributo', 'um caso de uso interno', 'um método privado'], 0, 'Atores podem ser sistemas externos.'),
          Q('Para representar a ordem das mensagens trocadas entre objetos durante um login, usa-se o diagrama de:', ['sequência', 'classes', 'implantação de rede elétrica', 'Gantt'], 0, 'Diagramas de sequência mostram interações no tempo.')
        ]
      },
      {
        id: 'req-5', ico: '🔁', title: 'Validação e gestão de requisitos', topic: 'Verificação × validação, rastreabilidade e mudanças',
        lesson: [
          K('Verificação × Validação', 'Verificação', ['“Estamos construindo o produto <b>corretamente</b>?”', 'Confere se segue a especificação'], 'Validação', ['“Estamos construindo o produto <b>certo</b>?”', 'Confere se atende à necessidade real do usuário']),
          C('🔍', 'Como validar requisitos', '<ul><li><b>Revisões</b> e inspeções do documento com os stakeholders</li><li><b>Protótipos</b> para o usuário experimentar</li><li><b>Casos de teste</b> escritos a partir dos requisitos</li></ul><p>Bons requisitos são <b>claros, completos, consistentes, verificáveis</b> e <b>rastreáveis</b>.</p>'),
          C('🧵', 'Rastreabilidade e mudanças', '<p><b>Rastreabilidade</b> é ligar cada requisito à sua origem, ao código e aos testes. Quando um requisito muda, você sabe exatamente o que será afetado.</p><p>Mudanças são normais: devem ser <b>registradas, analisadas</b> (impacto, custo, prazo) e <b>aprovadas</b>.</p>'),
          T('Quanto mais tarde, mais caro', '<p>Um erro de requisito descoberto em produção custa muito mais para corrigir do que se fosse encontrado na fase de especificação.</p>'),
          V('A validação responde à pergunta: “estamos construindo o produto certo?”.', true, 'Verdadeiro. Verificação pergunta se está sendo construído corretamente.')
        ],
        quiz: [
          Q('“O sistema faz exatamente o que o documento especifica, mas não resolve o problema do cliente.” Faltou principalmente:', ['validação', 'verificação', 'compilação', 'indentação'], 0, 'Seguiu a especificação (verificação ok), mas não atendeu à necessidade real.'),
          Q('Qual requisito é verificável?', ['O relatório deve ser gerado em até 5 segundos para 10 mil registros', 'O sistema deve ser rápido', 'O sistema deve ser fácil', 'O sistema deve ser moderno'], 0, 'Tem critério objetivo para testar.'),
          Q('A capacidade de ligar um requisito à sua origem, ao código e aos testes é chamada de:', ['rastreabilidade', 'portabilidade', 'escalabilidade', 'usabilidade'], 0, 'Facilita a análise de impacto das mudanças.'),
          Q('Quando um cliente pede uma mudança de requisito no meio do projeto, o ideal é:', ['registrar, analisar o impacto e decidir com os envolvidos', 'recusar qualquer mudança', 'mudar o código sem avisar ninguém', 'ignorar o pedido'], 0, 'Mudanças são geridas, não proibidas.')
        ]
      }
    ]
  }
];

const FC_RAW = [
  ['gest-1', 'PODC', 'Planejar, Organizar, Dirigir e Controlar'],
  ['gest-1', 'Níveis da organização', 'Estratégico (longo prazo) • Tático (médio) • Operacional (curto)'],
  ['gest-2', 'Estrutura matricial', 'Função + projeto: a pessoa responde a <b>dois chefes</b>.'],
  ['gest-2', 'Funcional × divisional', 'Funcional: por especialidade • Divisional: por produto, cliente ou região'],
  ['gest-3', 'SWOT', 'Forças e Fraquezas (internas) • Oportunidades e Ameaças (externas)'],
  ['gest-3', 'Meta SMART', 'Específica, Mensurável, Atingível, Relevante, Temporal'],
  ['gest-4', 'Margem de lucro', '<b>Lucro ÷ Receita × 100</b>'],
  ['gest-4', 'Lucro × caixa', 'Lucro é o resultado; caixa é o dinheiro que de fato entrou e saiu.'],
  ['gest-5', 'PDCA', 'Plan → Do → Check → Act (melhoria contínua)'],
  ['gest-5', 'KPI', 'Indicador que mostra se você está chegando ao objetivo.'],
  ['pei2-1', 'Árvore de problemas', 'Raízes = causas • Tronco = problema central • Copa = efeitos'],
  ['pei2-1', 'Causa → objetivo', 'Reescreva a causa no positivo: “falta de oficinas” → “oferecer oficinas”.'],
  ['pei2-2', 'Design thinking', 'Empatizar → Definir → Idear → Prototipar → Testar'],
  ['pei2-2', 'Protótipo de papel', 'Testa ideias em minutos, antes de programar.'],
  ['pei2-3', 'Princípios da WCAG', 'Perceptível, Operável, Compreensível e Robusto'],
  ['pei2-3', 'Lei Brasileira de Inclusão', 'Lei nº 13.146/2015 • garante acessibilidade, inclusive digital'],
  ['pei2-4', 'Resultado × impacto', 'Resultado: o que foi entregue • Impacto: a mudança real'],
  ['pei2-4', 'Continuidade', 'Capacitar, documentar e definir quem mantém a solução.'],
  ['etc-1', 'Moral × ética', 'Moral: normas de um grupo • Ética: reflexão sobre essas normas'],
  ['etc-1', 'Kant × utilitarismo', 'Kant: dever • Utilitarismo: maior bem para o maior número'],
  ['etc-2', 'Direitos (Marshall)', 'Civis (liberdades) • Políticos (voto) • Sociais (educação, saúde)'],
  ['etc-2', 'CF/1988', '“Constituição Cidadã” • art. 5º direitos individuais • art. 6º direitos sociais'],
  ['etc-3', 'Código de ética ACM/IEEE', '8 princípios; o 1º é agir conforme o <b>interesse público</b>.'],
  ['etc-3', 'Lei do Software', 'Lei nº 9.609/1998'],
  ['etc-4', 'LGPD', 'Lei nº 13.709/2018 • fiscalizada pela ANPD'],
  ['etc-4', 'Dados sensíveis', 'Origem racial/étnica, religião, opinião política, sindicato, saúde, vida sexual, genético, biométrico'],
  ['etc-5', 'Marco Civil da Internet', 'Lei nº 12.965/2014 • neutralidade, privacidade, liberdade de expressão'],
  ['etc-5', 'Antes de compartilhar', 'Fonte, data, outros veículos e desconfiança de títulos alarmantes.'],
  ['algo-1', 'Índices de um vetor', 'De 0 até <b>tamanho − 1</b>'],
  ['algo-1', 'Percorrer um vetor', 'para i de 0 ate n − 1 faca … v[i] … fimpara'],
  ['algo-2', 'Matriz', 'm[linha][coluna] • 3×4 = 12 elementos'],
  ['algo-2', 'Laço aninhado', 'O interno dá todas as voltas para cada volta do externo.'],
  ['algo-3', 'Função × procedimento', 'Função retorna valor • procedimento não retorna'],
  ['algo-3', 'Variável local', 'Existe só dentro da função, enquanto ela executa.'],
  ['algo-4', 'Busca binária', 'Exige vetor <b>ordenado</b> • O(log n)'],
  ['algo-4', 'Busca linear', 'Olha um por um • funciona desordenado • O(n)'],
  ['algo-5', 'Bubble sort', 'Compara vizinhos e troca; o maior vai para o fim • O(n²)'],
  ['algo-5', 'Selection sort', 'Escolhe o menor e coloca na próxima posição • O(n²)'],
  ['algo-6', 'Recursão', 'Caso base (para) + passo recursivo (problema menor)'],
  ['algo-6', 'Notação O', 'O(1) < O(log n) < O(n) < O(n²)'],
  ['lpt-1', 'Tema × tese', 'Tema: assunto • Tese: posição defendida'],
  ['lpt-1', 'Fato × opinião', 'Fato: verificável • Opinião: julgamento'],
  ['lpt-2', 'Coesão × coerência', 'Coesão: ligação • Coerência: sentido lógico'],
  ['lpt-2', 'Conectivos', 'além disso (adição) • porém (oposição) • porque (causa) • portanto (conclusão)'],
  ['lpt-3', 'Resumo × resenha', 'Resumo: sem opinião • Resenha: resume e avalia'],
  ['lpt-3', 'Citação direta longa', 'Mais de 3 linhas: recuo de 4 cm, letra menor, sem aspas'],
  ['lpt-4', 'Texto técnico claro', 'Frases curtas, voz ativa, o mais importante primeiro'],
  ['lpt-4', 'Bom relato de bug', 'Passos, esperado, obtido, versão e imagem'],
  ['lpt-5', 'Teste da crase', 'Troque por masculino: se virar “ao”, use “à”.'],
  ['lpt-5', 'Os porquês', 'Por que (pergunta) • porque (explicação) • por quê (fim) • porquê (substantivo)'],
  ['web-1', 'Caminho de uma página', 'URL → DNS → requisição HTTP → resposta → navegador monta'],
  ['web-1', 'Status HTTP', '200 OK • 301 mudou • 404 não encontrado • 500 erro no servidor'],
  ['web-2', 'Tags essenciais', 'h1–h6 títulos • p parágrafo • a link • img imagem • ul/li lista'],
  ['web-2', 'Atributo alt', 'Descreve a imagem para leitores de tela.'],
  ['web-3', 'Box model', 'content → padding → border → margin'],
  ['web-3', 'Especificidade', 'id > classe > tag • empate: vence a última'],
  ['web-4', 'Flexbox', 'display: flex • justify-content • align-items • gap • flex-direction'],
  ['web-4', 'Media query', '@media (min-width: 768px) { … }'],
  ['web-5', 'DOM', 'Árvore de objetos da página, manipulável por JavaScript'],
  ['web-5', 'Eventos', "elemento.addEventListener('click', funcao)"],
  ['req-1', 'RF × RNF', 'RF: o que faz • RNF: como faz (desempenho, segurança…)'],
  ['req-1', 'Stakeholder', 'Qualquer pessoa ou grupo interessado ou afetado pelo sistema'],
  ['req-2', 'Técnicas de elicitação', 'Entrevista, questionário, observação, workshop, protótipo, documentos'],
  ['req-2', 'Observação', 'Revela o que o usuário faz, não só o que ele diz.'],
  ['req-3', 'História de usuário', 'Como &lt;papel&gt;, quero &lt;ação&gt;, para &lt;benefício&gt;'],
  ['req-3', 'MoSCoW', 'Must • Should • Could • Won’t (agora)'],
  ['req-4', 'include × extend', 'include: sempre • extend: opcional/condicional'],
  ['req-4', 'Herança na UML', 'Seta com triângulo vazio: “é um”'],
  ['req-5', 'Verificação × validação', 'Produto corretamente × produto certo'],
  ['req-5', 'Rastreabilidade', 'Liga requisito à origem, ao código e aos testes.']
];

window.APROVAE_CONCURSOS = window.APROVAE_CONCURSOS || {};
window.APROVAE_CONCURSOS['engenharia-software-p2'] = {
  id: 'engenharia-software-p2',
  produto: 'graduacao',
  curso: 'engenharia-software',
  periodo: 2,
  mascot: 'notebook',
  nome: 'Engenharia de Software',
  cargoGrupo: '2º período • 7 disciplinas',
  edital: 'Matriz do 2º período',
  banca: 'Graduação',
  prova: null,
  semProva: true,
  aulaLabel: 'AULA',
  cargos: { p2: { nome: '2º período', curto: '2º período', emoji: '💻', turnoTxt: 'Engenharia de Software' } },
  areas: AREAS,
  scoring: 'areas',
  metaAcerto: 0.7,
  notaInfo: 'Cada disciplina é acompanhada separadamente. A meta de 70% de acertos é um alvo de estudo do Aprovaê, não a nota da faculdade.',
  dica: '<b>Dica do Lumi:</b> Algoritmos e o Laboratório Web andam juntos. Pratique um pouco de código todo dia!',
  guia: {
    titulo: 'O 2º período em 1 minuto',
    nav: 'Sobre o período',
    sub: 'Engenharia de Software • disciplinas, objetivos e como usar a trilha',
    destaques: [
      { rotulo: 'DISCIPLINAS', valor: '7', texto: 'uma unidade da trilha para cada' },
      { rotulo: 'FASES', valor: String(UNITS.reduce((n, u) => n + u.fases.length, 0)), texto: 'aula curta + exercícios em cada' }
    ],
    cards: [
      { titulo: 'COMO ESTUDAR', linhas: [['Aula', 'Explicações, dicas e simulações'], ['Laboratório', 'Edite HTML, CSS e JS ao vivo'], ['Exercícios', '4 questões por fase'], ['Flashcards', 'Revisão rápida dos conceitos']] }
    ],
    estruturaTitulo: 'DISCIPLINAS DO 2º PERÍODO',
    aviso: 'As ementas variam entre instituições. Use a trilha junto com o plano de ensino do seu professor.',
    rodape: 'Conteúdo de apoio ao estudo, preparado pelo Aprovaê.'
  },
  units: UNITS,
  flashcards: FC_RAW
};

window.APROVAE_CURSOS = window.APROVAE_CURSOS || {};
const curso = window.APROVAE_CURSOS['engenharia-software'];
if (curso) curso.periodos[2] = 'engenharia-software-p2';
})();
