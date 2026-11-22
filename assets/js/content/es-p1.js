/* =====================================================================
   Aprovaê+Graduação — Engenharia de Software • 1º período
   Aulas, simulações, questões e flashcards ORIGINAIS, escritos para o Aprovaê.
   ===================================================================== */
(function () {
const Q = (q, o, a, e) => ({ q, o, a, e });
const C = (ico, title, body) => ({ t: 'concept', ico, title, body });
const T = (title, body) => ({ t: 'tip', title, body });
const V = (statement, answer, why) => ({ t: 'check', statement, answer, why });
const K = (title, lh, li, rh, ri) => ({ t: 'compare', title, lh, li, rh, ri });
// Simulação interativa: kind = trace | bits | gate | atomo | calc
const S = (kind, title, cfg) => ({ t: 'sim', kind, title, ...cfg });
const code = lines => `<pre class="code">${lines}</pre>`;

const A = (nome, curto, cor) => ({ nome, curto, cor, q: 0, banner: 'DISCIPLINA DO 1º PERÍODO', info: 'Disciplina do 1º período' });
const AREAS = {
  rpe: A('Resolução de Problemas para Engenharia I', 'Resolução de Problemas', '#f97316'),
  qui: A('Introdução à Química', 'Química', '#0d9488'),
  ieng: A('Introdução à Engenharia', 'Intro. Engenharia', '#475569'),
  pc: A('Pensamento Computacional', 'Pensamento Comp.', '#8b5cf6'),
  pei: A('Práticas Extensionistas Integradoras I', 'Extensão', '#e11d74'),
  eg: A('Expressão Gráfica', 'Expressão Gráfica', '#0ea5e9'),
  alg: A('Lógica de Programação e Algoritmos', 'Algoritmos', '#2f80ed'),
  aoc: A('Arquitetura e Organização de Computadores', 'Arquitetura', '#16a34a'),
  emp: A('Empreendedorismo e Inovação', 'Empreendedorismo', '#d97706')
};

const UNITS = [
  /* ============================ 1. RESOLUÇÃO DE PROBLEMAS ============================ */
  {
    id: 'rpe', mascot: 'duvida', area: 'rpe', c: '#f97316', cd: '#c2570c', emoji: '🧩', theme: 'matematica',
    title: 'Resolução de Problemas para Engenharia I', sub: 'Método, unidades, ordem de grandeza e modelagem',
    fases: [
      {
        id: 'rpe-1', ico: '🧭', title: 'Método de resolução', topic: 'As 4 etapas de Pólya',
        lesson: [
          C('🧭', 'Problema bem resolvido começa antes da conta', '<p>O matemático <b>George Pólya</b> propôs 4 etapas que engenheiros usam até hoje:</p><ol style="padding-left:20px;margin:0 0 12px"><li><b>Compreender</b>: o que é pedido? quais dados e condições?</li><li><b>Planejar</b>: que estratégia, fórmula ou modelo usar?</li><li><b>Executar</b>: fazer as contas com cuidado</li><li><b>Verificar</b>: o resultado faz sentido? as unidades batem?</li></ol>'),
          C('📝', 'Organize os dados', '<p>Antes de calcular, escreva:</p><ul><li><b>Dados</b> (com unidades)</li><li><b>Incógnita</b>: o que você quer achar</li><li><b>Hipóteses</b>: o que está sendo considerado (ex.: “sem atrito”)</li><li>Um <b>esquema</b> ou desenho</li></ul>'),
          T('Teste de sanidade', '<p>Um carro a 3.000 km/h? Uma pessoa com 700 kg? Se o número é absurdo, volte e procure o erro. <b>Estimar a ordem do resultado antes</b> ajuda a perceber.</p>'),
          V('Na etapa “verificar”, conferimos se o resultado é coerente e se as unidades estão corretas.', true, 'Verdadeiro. Verificar é checar sentido físico, unidades e possíveis erros de conta.')
        ],
        quiz: [
          Q('Segundo Pólya, a primeira etapa para resolver um problema é:', ['compreender o problema', 'executar os cálculos', 'verificar a resposta', 'escolher a calculadora'], 0, 'Sem entender o que se pede e quais são os dados, qualquer conta pode estar errada.'),
          Q('Um aluno calcula que uma mesa de escritório tem massa de 4.500 kg. O que ele deveria fazer?', ['Revisar a solução, pois o valor não é coerente', 'Entregar, pois a conta foi feita', 'Arredondar para 5.000 kg', 'Trocar a unidade para gramas'], 0, 'O valor é absurdo para uma mesa. A etapa de verificação serve justamente para detectar isso.'),
          Q('Ao escrever “considerando o atrito desprezível”, o engenheiro está declarando uma:', ['hipótese', 'incógnita', 'unidade de medida', 'conclusão'], 0, 'Hipóteses simplificam o problema e precisam ser explícitas.'),
          Q('“Quanto tempo leva para encher uma caixa de 1.000 L com uma torneira de 20 L/min?” A incógnita é:', ['o tempo', 'o volume da caixa', 'a vazão', 'a cor da caixa'], 0, 'A incógnita é o que se quer descobrir: o tempo (que será 50 min).')
        ]
      },
      {
        id: 'rpe-2', ico: '📏', title: 'Grandezas e unidades', topic: 'Sistema Internacional, prefixos e conversões',
        lesson: [
          C('📏', 'O Sistema Internacional (SI)', '<p>Tem <b>7 unidades de base</b>:</p><ul><li>metro (m) • comprimento</li><li>quilograma (kg) • massa</li><li>segundo (s) • tempo</li><li>ampere (A) • corrente elétrica</li><li>kelvin (K) • temperatura</li><li>mol (mol) • quantidade de matéria</li><li>candela (cd) • intensidade luminosa</li></ul>'),
          K('Prefixos mais usados', 'Múltiplos', ['<b>k</b> (quilo) = 10³', '<b>M</b> (mega) = 10⁶', '<b>G</b> (giga) = 10⁹'], 'Submúltiplos', ['<b>m</b> (mili) = 10⁻³', '<b>µ</b> (micro) = 10⁻⁶', '<b>n</b> (nano) = 10⁻⁹']),
          T('km/h ↔ m/s', '<p>Para passar de <b>km/h para m/s, divida por 3,6</b>. De m/s para km/h, multiplique por 3,6.</p><p>Porque 1 km/h = 1.000 m ÷ 3.600 s.</p>'),
          S('calc', 'Simulador: conversor de velocidade', { calc: 'velocidade' }),
          V('5 mm equivalem a 0,005 m.', true, 'Verdadeiro. Mili = 10⁻³, então 5 mm = 5 × 10⁻³ m = 0,005 m.')
        ],
        quiz: [
          Q('Um carro está a 72 km/h. Em m/s, sua velocidade é:', ['20 m/s', '72 m/s', '259,2 m/s', '7,2 m/s'], 0, '72 ÷ 3,6 = 20 m/s.'),
          Q('Qual destas NÃO é uma unidade de base do SI?', ['newton', 'metro', 'kelvin', 'ampere'], 0, 'O newton (N) é unidade derivada: kg·m/s².'),
          Q('Um processador de 3 GHz realiza, por segundo, cerca de:', ['3 bilhões de ciclos', '3 milhões de ciclos', '3 mil ciclos', '300 ciclos'], 0, 'Giga = 10⁹: 3 GHz = 3 × 10⁹ ciclos por segundo.'),
          Q('Quantos metros há em 2,5 km?', ['2.500 m', '250 m', '25 m', '25.000 m'], 0, 'Quilo = 1.000: 2,5 × 1.000 = 2.500 m.')
        ]
      },
      {
        id: 'rpe-3', ico: '🔢', title: 'Notação científica', topic: 'Potências de 10 e ordem de grandeza',
        lesson: [
          C('🔢', 'Números muito grandes ou pequenos', '<p>Notação científica: <b>a × 10ⁿ</b>, com 1 ≤ a &lt; 10.</p><ul><li>300.000.000 = <b>3 × 10⁸</b></li><li>0,00045 = <b>4,5 × 10⁻⁴</b></li></ul>'),
          C('✖️', 'Contas com potências', '<ul><li>Multiplicar: <b>some</b> os expoentes → 10³ × 10⁴ = 10⁷</li><li>Dividir: <b>subtraia</b> → 10⁸ ÷ 10² = 10⁶</li></ul><p>Ex.: (2 × 10³) × (4 × 10⁵) = 8 × 10⁸.</p>'),
          C('🎯', 'Ordem de grandeza', '<p>É a potência de 10 mais próxima do valor. Serve para <span class="hl">estimar rápido</span> e checar resultados.</p><p>Ex.: um prédio de 40 m → ordem de grandeza 10¹ m.</p>'),
          V('0,0072 em notação científica é 7,2 × 10⁻³.', true, 'Verdadeiro. A vírgula andou 3 casas para a direita, então o expoente é −3.')
        ],
        quiz: [
          Q('O número 45.000 em notação científica é:', ['4,5 × 10⁴', '45 × 10³', '4,5 × 10³', '0,45 × 10⁵'], 0, 'Com 1 ≤ a < 10: 4,5 e a vírgula andou 4 casas.'),
          Q('O resultado de (3 × 10⁴) × (2 × 10⁻²) é:', ['6 × 10²', '6 × 10⁻⁸', '5 × 10²', '6 × 10⁶'], 0, 'Multiplique 3 × 2 = 6 e some os expoentes: 4 + (−2) = 2.'),
          Q('0,000002 m escrito em notação científica é:', ['2 × 10⁻⁶ m', '2 × 10⁶ m', '2 × 10⁻⁵ m', '0,2 × 10⁻⁵ m'], 0, 'A vírgula anda 6 casas para a direita: 2 × 10⁻⁶ (2 micrômetros).'),
          Q('A ordem de grandeza da população de uma cidade com 85.000 habitantes é:', ['10⁵', '10⁴', '10³', '10⁶'], 0, '85.000 = 8,5 × 10⁴. Como 8,5 está mais perto de 10, a ordem de grandeza é 10⁵.')
        ]
      },
      {
        id: 'rpe-4', ico: '📈', title: 'Análise dimensional e modelos', topic: 'Conferir unidades e montar modelos simples',
        lesson: [
          C('📐', 'Análise dimensional', '<p>Em uma equação correta, <b>as unidades dos dois lados são iguais</b>.</p><p>Ex.: F = m × a → kg × m/s² = <b>N</b> (newton). Se der “kg × m/s” para força, há erro.</p>'),
          C('📈', 'Modelo linear', '<p>Muita coisa de engenharia começa com <b>y = a·x + b</b>:</p><ul><li><b>b</b>: valor fixo (inicial)</li><li><b>a</b>: taxa de variação</li></ul><p>Ex.: servidor em nuvem com R$ 50 fixos + R$ 0,20 por GB → custo = 0,2·GB + 50.</p>'),
          T('Modelos são simplificações', '<p>Todo modelo tem <b>limites</b>. Use-o dentro das condições em que foi feito e deixe as hipóteses escritas.</p>'),
          V('A expressão “distância = velocidade ÷ tempo” é dimensionalmente correta.', false, 'Falso. (m/s) ÷ s = m/s², que não é distância. O correto é distância = velocidade × tempo.')
        ],
        quiz: [
          Q('A unidade newton (N), no SI, equivale a:', ['kg·m/s²', 'kg·m/s', 'kg/m²', 'm/s²'], 0, 'F = m·a → kg × m/s².'),
          Q('Um plano de dados custa R$ 30 fixos mais R$ 5 por GB extra. O custo para 4 GB extras é:', ['R$ 50', 'R$ 35', 'R$ 120', 'R$ 20'], 0, 'C = 5·4 + 30 = 50.'),
          Q('Um estudante encontrou “energia = massa × velocidade”. A análise dimensional mostra que:', ['está errado, pois kg·m/s não é unidade de energia (J = kg·m²/s²)', 'está correto', 'só funciona em km/h', 'energia não tem unidade'], 0, 'Energia cinética é ½·m·v²: kg·m²/s² = joule.'),
          Q('No modelo y = 12x + 300, o valor 300 representa:', ['o valor inicial, quando x = 0', 'a taxa de variação', 'o valor máximo possível', 'o erro do modelo'], 0, 'O termo independente b é o valor de y quando x = 0.')
        ]
      }
    ]
  },

  /* ============================ 2. QUÍMICA ============================ */
  {
    id: 'qui', mascot: 'atencao', area: 'qui', c: '#0d9488', cd: '#0f766e', emoji: '⚗️', theme: 'natureza',
    title: 'Introdução à Química', sub: 'Átomos, ligações, reações e materiais',
    fases: [
      {
        id: 'qui-1', ico: '⚛️', title: 'Átomo e tabela periódica', topic: 'Prótons, nêutrons, elétrons, isótopos e íons',
        lesson: [
          C('⚛️', 'Estrutura do átomo', '<ul><li><b>Prótons</b> (+) e <b>nêutrons</b> (sem carga) ficam no núcleo</li><li><b>Elétrons</b> (−) ficam na eletrosfera</li></ul><p><b>Z</b> (número atômico) = prótons — identifica o elemento.<br><b>A</b> (número de massa) = prótons + nêutrons.</p>'),
          K('Isótopos × Íons', 'Isótopos', ['<b>Mesmo Z</b>, nêutrons diferentes', 'Ex.: carbono-12 e carbono-14'], 'Íons', ['Átomo que <b>ganhou ou perdeu elétrons</b>', 'Perdeu → <b>cátion</b> (+) • Ganhou → <b>ânion</b> (−)']),
          S('atomo', 'Simulador: monte um átomo', {}),
          C('🗂️', 'Tabela periódica', '<p>Organizada por <b>Z crescente</b>. <b>Períodos</b> são as linhas; <b>grupos</b> (famílias) são as colunas, com propriedades parecidas.</p><p>A maioria dos elementos é <b>metal</b>: brilho, boa condução de calor e eletricidade.</p>'),
          V('Dois átomos com o mesmo número de prótons pertencem ao mesmo elemento químico.', true, 'Verdadeiro. O número atômico (Z) define o elemento.')
        ],
        quiz: [
          Q('Um átomo tem 17 prótons, 18 nêutrons e 17 elétrons. Seus números atômico (Z) e de massa (A) são:', ['Z = 17 e A = 35', 'Z = 18 e A = 35', 'Z = 35 e A = 17', 'Z = 17 e A = 34'], 0, 'Z = prótons = 17; A = 17 + 18 = 35 (é o cloro-35).'),
          Q('Um átomo de sódio (Z = 11) perde 1 elétron. Ele se torna:', ['um cátion Na⁺', 'um ânion Na⁻', 'um isótopo do sódio', 'um átomo de neônio'], 0, 'Perder elétron deixa mais prótons que elétrons: carga positiva, cátion.'),
          Q('Carbono-12 e carbono-14 são:', ['isótopos, pois têm o mesmo número de prótons e diferente número de nêutrons', 'elementos diferentes', 'íons do carbono', 'moléculas'], 0, 'Ambos têm Z = 6; mudam os nêutrons (6 e 8).'),
          Q('Na tabela periódica, os elementos de uma mesma coluna (grupo):', ['têm propriedades químicas semelhantes', 'têm a mesma massa', 'são sempre gases', 'têm o mesmo número de prótons'], 0, 'Elementos do mesmo grupo têm configuração da camada de valência parecida.')
        ]
      },
      {
        id: 'qui-2', ico: '🔗', title: 'Ligações e materiais', topic: 'Iônica, covalente, metálica e propriedades',
        lesson: [
          K('Os 3 tipos de ligação', 'Ligação', ['<b>Iônica</b>', '<b>Covalente</b>', '<b>Metálica</b>'], 'Como e exemplo', ['Transferência de elétrons entre metal e ametal • NaCl (sal)', 'Compartilhamento entre ametais • H₂O, CO₂', 'Elétrons livres (“mar de elétrons”) • cobre, alumínio']),
          C('🔌', 'Por que isso importa na engenharia', '<ul><li><b>Metais</b> conduzem eletricidade graças aos elétrons livres → fios de cobre</li><li><b>Compostos iônicos</b> conduzem quando dissolvidos ou fundidos</li><li><b>Plásticos</b> (covalentes) são isolantes → capa dos cabos</li></ul>'),
          T('Silício', '<p>O silício, base dos chips, é um <b>semicondutor</b>: conduz pouco, mas sua condutividade pode ser controlada adicionando pequenas impurezas (dopagem).</p>'),
          V('O fio de cobre conduz eletricidade porque seus átomos fazem ligações iônicas.', false, 'Falso. A condução vem da ligação metálica, com elétrons livres.')
        ],
        quiz: [
          Q('A ligação entre sódio (metal) e cloro (ametal) no sal de cozinha é:', ['iônica', 'covalente', 'metálica', 'de hidrogênio'], 0, 'Metal + ametal com transferência de elétrons: ligação iônica.'),
          Q('Os fios elétricos são de cobre e a capa é de plástico porque:', ['o cobre (ligação metálica) conduz e o plástico (covalente) isola', 'o plástico conduz melhor que o cobre', 'o cobre é isolante', 'os dois conduzem igualmente'], 0, 'Elétrons livres do metal conduzem; o polímero não tem elétrons livres.'),
          Q('Na molécula de água (H₂O), os átomos se unem por:', ['compartilhamento de elétrons (ligação covalente)', 'transferência total de elétrons', 'elétrons livres', 'atração magnética'], 0, 'Hidrogênio e oxigênio são ametais e compartilham elétrons.'),
          Q('O silício usado em chips é classificado como:', ['semicondutor', 'metal condutor perfeito', 'gás nobre', 'polímero isolante'], 0, 'Sua condutividade intermediária pode ser ajustada por dopagem.')
        ]
      },
      {
        id: 'qui-3', ico: '⚖️', title: 'Reações e mol', topic: 'Balanceamento, mol e massa molar',
        lesson: [
          C('⚖️', 'Conservação da massa', '<p>Em uma reação, os átomos <b>se reorganizam</b>: a quantidade de cada elemento é a mesma antes e depois. Por isso <span class="hl">balanceamos</span> as equações.</p><p>2 H₂ + O₂ → 2 H₂O: 4 H e 2 O dos dois lados.</p>'),
          C('🧮', 'O mol', '<p>Um <b>mol</b> é uma quantidade: <b>6,02 × 10²³</b> partículas (constante de Avogadro).</p><p><b>Massa molar</b>: massa de 1 mol, em g/mol. H₂O = 2×1 + 16 = <b>18 g/mol</b>.</p>'),
          T('Regra de três salva', '<p>36 g de água = 36 ÷ 18 = <b>2 mol</b> = 2 × 6,02 × 10²³ moléculas.</p>'),
          V('Na equação CH₄ + 2 O₂ → CO₂ + 2 H₂O, o número de átomos de oxigênio é igual nos dois lados.', true, 'Verdadeiro. 4 O à esquerda (2 × 2) e 4 O à direita (2 + 2).')
        ],
        quiz: [
          Q('A massa molar do CO₂ (C = 12, O = 16) é:', ['44 g/mol', '28 g/mol', '32 g/mol', '60 g/mol'], 0, '12 + 2 × 16 = 44 g/mol.'),
          Q('Quantos mols há em 90 g de água (H₂O = 18 g/mol)?', ['5 mol', '18 mol', '0,2 mol', '90 mol'], 0, '90 ÷ 18 = 5 mol.'),
          Q('Para balancear N₂ + H₂ → NH₃, os coeficientes corretos são:', ['1, 3, 2', '1, 1, 1', '2, 3, 1', '1, 2, 3'], 0, 'N₂ + 3 H₂ → 2 NH₃: 2 N e 6 H dos dois lados.'),
          Q('O número 6,02 × 10²³ corresponde:', ['ao número de partículas em 1 mol', 'à massa de 1 átomo de carbono', 'à velocidade da luz', 'ao número de elementos da tabela'], 0, 'É a constante de Avogadro.')
        ]
      },
      {
        id: 'qui-4', ico: '🏗️', title: 'Química dos materiais', topic: 'Corrosão, proteção, polímeros e pH',
        lesson: [
          C('🧲', 'Corrosão', '<p>A <b>ferrugem</b> é a oxidação do ferro na presença de <b>oxigênio e água</b>. Ela enfraquece estruturas, cabos e máquinas.</p>'),
          C('🛡️', 'Como proteger', '<ul><li><b>Pintura</b> e revestimentos (barreira)</li><li><b>Galvanização</b>: cobrir o aço com <b>zinco</b></li><li><b>Ânodo de sacrifício</b>: um metal mais reativo (zinco, magnésio) corrói no lugar do aço — usado em navios e tubulações</li><li>Ligas como o <b>aço inoxidável</b> (com cromo)</li></ul>'),
          C('🧵', 'Polímeros e pH', '<p><b>Polímeros</b> são cadeias longas de unidades repetidas (monômeros): plásticos, borrachas, fibras.</p><p><b>pH</b>: &lt; 7 ácido, 7 neutro, &gt; 7 básico. Ambientes ácidos aceleram a corrosão.</p>'),
          V('A galvanização protege o aço cobrindo-o com zinco.', true, 'Verdadeiro. O zinco forma uma barreira e ainda corrói primeiro, protegendo o ferro.')
        ],
        quiz: [
          Q('Para que o ferro enferruje, são necessários:', ['oxigênio e água (umidade)', 'apenas luz', 'apenas calor', 'vácuo'], 0, 'A oxidação do ferro ocorre na presença de oxigênio e água.'),
          Q('Em cascos de navios, prendem-se blocos de zinco que se desgastam no lugar do aço. Essa técnica é chamada de:', ['ânodo de sacrifício', 'galvanoplastia de ouro', 'polimerização', 'destilação'], 0, 'O metal mais reativo se oxida primeiro, protegendo a estrutura.'),
          Q('O PVC, o polietileno e o náilon são exemplos de:', ['polímeros', 'metais', 'cerâmicas', 'gases nobres'], 0, 'São formados por longas cadeias de monômeros.'),
          Q('Uma solução com pH 3 é:', ['ácida', 'básica', 'neutra', 'sempre pura'], 0, 'pH menor que 7 indica caráter ácido.')
        ]
      }
    ]
  },

  /* ============================ 3. INTRODUÇÃO À ENGENHARIA ============================ */
  {
    id: 'ieng', mascot: 'campo', area: 'ieng', c: '#475569', cd: '#334155', emoji: '⚙️', theme: 'engenharia',
    title: 'Introdução à Engenharia', sub: 'O papel do engenheiro, projeto, ética e comunicação',
    fases: [
      {
        id: 'ieng-1', ico: '👷', title: 'O que faz um engenheiro', topic: 'Engenharia, áreas e a Engenharia de Software',
        lesson: [
          C('⚙️', 'Engenharia é resolver problemas com ciência', '<p>O engenheiro aplica <b>matemática, ciência e técnica</b> para criar soluções úteis, seguras e viáveis, sempre lidando com <span class="hl">restrições</span>: custo, prazo, segurança, normas e meio ambiente.</p>'),
          C('💻', 'E a Engenharia de Software?', '<p>Aplica princípios de engenharia ao <b>desenvolvimento de software</b>: levantar requisitos, projetar, programar, testar, implantar e manter sistemas com <b>qualidade</b>.</p><p>Software também tem “prédio que cai”: falhas podem custar dinheiro, dados e até vidas.</p>'),
          K('Trade-off: escolhas com custo', 'Ganha', ['Mais segurança', 'Mais rapidez de entrega', 'Mais recursos no app'], 'Pode perder', ['Mais custo ou tempo', 'Menos testes', 'Mais complexidade e bugs']),
          V('Em engenharia, quase toda decisão envolve equilibrar restrições, como custo e prazo.', true, 'Verdadeiro. Esses equilíbrios são chamados de trade-offs.')
        ],
        quiz: [
          Q('A Engenharia de Software se diferencia de “só programar” porque:', ['envolve todo o ciclo, de requisitos e projeto a testes e manutenção, com foco em qualidade', 'dispensa testes', 'usa apenas uma linguagem de programação', 'não lida com usuários'], 0, 'Programar é uma etapa; a engenharia cuida do processo inteiro.'),
          Q('Escolher entregar um app mais cedo, com menos funções, para ganhar mercado é um exemplo de:', ['trade-off', 'erro de compilação', 'norma técnica', 'patente'], 0, 'Abre-se mão de recursos em troca de prazo.'),
          Q('Qual destas é uma restrição típica de projetos de engenharia?', ['Orçamento disponível', 'A cor favorita do engenheiro', 'O signo do cliente', 'O horário do almoço'], 0, 'Custo, prazo, normas e segurança são restrições reais.'),
          Q('Uma falha em um sistema de controle de tráfego aéreo mostra que, em software:', ['erros podem ter consequências graves, por isso a engenharia exige qualidade', 'bugs nunca causam problemas reais', 'testes são opcionais', 'só o hardware importa'], 0, 'Sistemas críticos exigem processos rigorosos.')
        ]
      },
      {
        id: 'ieng-2', ico: '🔁', title: 'Processo de projeto', topic: 'Do problema ao protótipo, em ciclos',
        lesson: [
          C('🔁', 'O ciclo de projeto', '<ol style="padding-left:20px;margin:0 0 12px"><li><b>Definir o problema</b> e quem é afetado</li><li>Levantar <b>requisitos</b> e restrições</li><li>Gerar <b>alternativas</b></li><li>Escolher e <b>prototipar</b></li><li><b>Testar</b> e avaliar</li><li><b>Iterar</b>: melhorar e repetir</li></ol>'),
          K('Requisitos', 'Funcionais', ['O que o sistema <b>faz</b>', 'Ex.: “o usuário pode recuperar a senha por e-mail”'], 'Não funcionais', ['<b>Como</b> o sistema deve ser', 'Ex.: “a página abre em até 2 segundos”, segurança, usabilidade']),
          T('Protótipo cedo, erro barato', '<p>Corrigir um problema na fase de ideia custa muito menos do que depois do produto pronto. Por isso se testa cedo.</p>'),
          V('“O sistema deve funcionar 24 horas por dia” é um requisito não funcional.', true, 'Verdadeiro. Fala de disponibilidade, uma qualidade do sistema.')
        ],
        quiz: [
          Q('“O aplicativo deve permitir que o cliente agende uma consulta.” Esse é um requisito:', ['funcional', 'não funcional', 'de hardware', 'legal'], 0, 'Descreve uma função do sistema.'),
          Q('“O sistema deve suportar 10 mil usuários simultâneos.” Esse é um requisito:', ['não funcional', 'funcional', 'de design gráfico', 'opcional sempre'], 0, 'Fala de desempenho/escala, uma qualidade.'),
          Q('Por que construir protótipos no início do projeto?', ['Para testar ideias cedo, quando corrigir é mais barato', 'Para não precisar de requisitos', 'Para evitar falar com usuários', 'Para aumentar o custo'], 0, 'Erros descobertos cedo custam menos.'),
          Q('O processo de engenharia é chamado de iterativo porque:', ['repete ciclos de testar e melhorar', 'é feito uma única vez', 'não tem etapas', 'começa pelo final'], 0, 'Cada ciclo incorpora o que se aprendeu nos testes.')
        ]
      },
      {
        id: 'ieng-3', ico: '⚖️', title: 'Ética e responsabilidade', topic: 'Segurança, normas, dados e sustentabilidade',
        lesson: [
          C('⚖️', 'Compromisso com as pessoas', '<p>O engenheiro responde pela <b>segurança</b> e pelo <b>bem-estar</b> de quem usa o que ele cria. Isso inclui honestidade em prazos, custos e limitações.</p>'),
          C('📚', 'Normas técnicas', '<p>No Brasil, a <b>ABNT</b> publica normas técnicas (NBR) que padronizam métodos, desenhos e requisitos de qualidade. Seguir normas reduz riscos e facilita a comunicação.</p>'),
          C('🔐', 'Ética em software', '<ul><li>Proteger <b>dados pessoais</b> (a LGPD, Lei 13.709/2018, regula seu uso)</li><li>Evitar <b>vieses</b> e discriminação em algoritmos</li><li>Pensar em <b>acessibilidade</b></li><li>Considerar o <b>impacto ambiental</b> (energia, lixo eletrônico)</li></ul>'),
          V('Coletar dados pessoais dos usuários sem informar a finalidade é uma prática adequada.', false, 'Falso. A LGPD exige finalidade definida, transparência e base legal para tratar dados pessoais.')
        ],
        quiz: [
          Q('No Brasil, a entidade que publica as normas técnicas NBR é a:', ['ABNT', 'ANATEL', 'ANVISA', 'OMS'], 0, 'A Associação Brasileira de Normas Técnicas publica as NBR.'),
          Q('A lei brasileira que trata da proteção de dados pessoais é a:', ['LGPD (Lei 13.709/2018)', 'CLT', 'Lei Áurea', 'ECA'], 0, 'A Lei Geral de Proteção de Dados regula o tratamento de dados pessoais.'),
          Q('Um engenheiro percebe que o sistema que entregará tem uma falha de segurança grave. A atitude ética é:', ['informar a equipe e o cliente e corrigir antes do uso', 'esconder para não atrasar o projeto', 'culpar outro colega', 'apagar os registros'], 0, 'Transparência e segurança do usuário vêm primeiro.'),
          Q('Projetar um site que funcione com leitores de tela para pessoas cegas é uma preocupação com:', ['acessibilidade', 'pirataria', 'overclock', 'marketing apenas'], 0, 'Acessibilidade inclui pessoas com deficiência.')
        ]
      },
      {
        id: 'ieng-4', ico: '🗣️', title: 'Comunicação e equipe', topic: 'Relatório técnico, documentação e trabalho em equipe',
        lesson: [
          C('📄', 'Relatório técnico', '<p>Estrutura comum: <b>introdução</b> (problema e objetivo), <b>metodologia</b>, <b>resultados</b>, <b>discussão</b>, <b>conclusão</b> e <b>referências</b>.</p><p>Linguagem <b>objetiva</b>, com números, unidades e figuras numeradas.</p>'),
          C('👥', 'Trabalho em equipe', '<ul><li>Papéis e responsabilidades claros</li><li>Combinados de comunicação (reuniões curtas, canal único)</li><li>Feedback respeitoso</li><li>Registro de decisões</li></ul><p>Em software, equipes costumam usar <b>métodos ágeis</b>, com entregas em ciclos curtos.</p>'),
          T('Documente para o “você do futuro”', '<p>Comentários claros, README e decisões registradas evitam retrabalho quando alguém (até você) voltar ao projeto meses depois.</p>'),
          V('Um relatório técnico deve priorizar opiniões pessoais em vez de dados.', false, 'Falso. O relatório técnico se apoia em dados, métodos e resultados verificáveis.')
        ],
        quiz: [
          Q('A seção do relatório que explica COMO o trabalho foi feito é a:', ['metodologia', 'conclusão', 'capa', 'dedicatória'], 0, 'Metodologia descreve materiais, procedimentos e métodos.'),
          Q('Em métodos ágeis, o software costuma ser entregue:', ['em ciclos curtos, com melhorias contínuas', 'apenas uma vez, ao final de anos', 'sem contato com o cliente', 'sem testes'], 0, 'Entregas frequentes permitem ajustar o rumo cedo.'),
          Q('Para evitar retrabalho em projetos longos, uma boa prática é:', ['registrar decisões e documentar o código', 'guardar tudo de memória', 'mudar de ferramenta toda semana', 'evitar reuniões e mensagens'], 0, 'Documentação mantém o conhecimento acessível à equipe.'),
          Q('Qual linguagem é mais adequada em um relatório técnico?', ['Objetiva, com dados e unidades', 'Cheia de gírias', 'Poética e ambígua', 'Só com emojis'], 0, 'Clareza e precisão são essenciais.')
        ]
      }
    ]
  },

  /* ============================ 4. PENSAMENTO COMPUTACIONAL ============================ */
  {
    id: 'pc', mascot: 'estudando', area: 'pc', c: '#8b5cf6', cd: '#6d3fd6', emoji: '🧠', theme: 'codigo',
    title: 'Pensamento Computacional', sub: 'Decomposição, padrões, abstração, algoritmos e lógica',
    fases: [
      {
        id: 'pc-1', ico: '🧩', title: 'Os 4 pilares', topic: 'Decomposição, padrões, abstração e algoritmos',
        lesson: [
          C('🧠', 'Pensar como quem resolve problemas', '<p>Pensamento computacional é uma forma de resolver problemas que <b>serve para qualquer área</b>, não só para programar.</p>'),
          C('🧩', 'Os 4 pilares', '<ul><li><b>Decomposição</b>: quebrar o problema em partes menores</li><li><b>Reconhecimento de padrões</b>: achar semelhanças e repetições</li><li><b>Abstração</b>: focar no essencial e ignorar detalhes irrelevantes</li><li><b>Algoritmo</b>: escrever passos claros e ordenados</li></ul>'),
          K('Exemplo: organizar uma festa', 'Pilar', ['Decomposição', 'Padrões', 'Abstração', 'Algoritmo'], 'Aplicação', ['Comida, convidados, local, música', '“Toda festa precisa de lista e orçamento”', 'Ignorar a cor do guardanapo por enquanto', 'Checklist com a ordem das tarefas']),
          V('O mapa do metrô, que mostra só as linhas e estações e ignora ruas e distâncias reais, é um exemplo de abstração.', true, 'Verdadeiro. Ele mantém só o essencial para quem precisa se deslocar.')
        ],
        quiz: [
          Q('Dividir o desenvolvimento de um aplicativo em login, cadastro, pagamento e notificações é um exemplo de:', ['decomposição', 'abstração', 'compilação', 'criptografia'], 0, 'O problema grande foi quebrado em partes menores.'),
          Q('Perceber que vários relatórios do sistema têm o mesmo cabeçalho e criar um modelo único é usar:', ['reconhecimento de padrões', 'decomposição', 'hardware', 'backup'], 0, 'Identificou-se uma repetição que pode ser reaproveitada.'),
          Q('Ao modelar um “aluno” em um sistema escolar, guardar nome, matrícula e notas, mas não a cor dos olhos, é:', ['abstração', 'decomposição', 'algoritmo', 'depuração'], 0, 'Mantém-se só o que é relevante para o problema.'),
          Q('Uma sequência finita de passos claros para resolver um problema é um:', ['algoritmo', 'byte', 'protocolo de rede apenas', 'hardware'], 0, 'Essa é a definição de algoritmo.')
        ]
      },
      {
        id: 'pc-2', ico: '🔀', title: 'Algoritmos e fluxogramas', topic: 'Sequência, decisão e repetição em diagramas',
        lesson: [
          C('🔀', 'Símbolos do fluxograma', '<ul><li><b>Oval</b>: início e fim</li><li><b>Retângulo</b>: processo (ação)</li><li><b>Losango</b>: decisão (sim/não)</li><li><b>Paralelogramo</b>: entrada ou saída de dados</li><li><b>Setas</b>: fluxo</li></ul>'),
          C('🧱', 'As 3 estruturas básicas', '<ul><li><b>Sequência</b>: um passo depois do outro</li><li><b>Decisão</b>: caminho muda conforme uma condição</li><li><b>Repetição</b>: volta e repete enquanto a condição valer</li></ul><p>Com essas três, dá para descrever <span class="hl">qualquer algoritmo</span>.</p>'),
          S('trace', 'Simulação: algoritmo do café', { code: ['início', 'pegar xícara', 'enquanto xícara não está cheia', '    colocar café', 'fim enquanto', 'se quer açúcar então', '    colocar açúcar', 'fim se', 'fim'], steps: [
            { l: 0, v: { xícara: 'vazia' }, note: 'Começa o algoritmo.' },
            { l: 1, v: { xícara: 'vazia' }, note: 'Sequência: um passo de cada vez.' },
            { l: 2, v: { xícara: 'vazia' }, note: 'Repetição: testa a condição.' },
            { l: 3, v: { xícara: '1/2' }, note: 'Executa o corpo do laço.' },
            { l: 2, v: { xícara: '1/2' }, note: 'Testa de novo: ainda não está cheia.' },
            { l: 3, v: { xícara: 'cheia' }, note: 'Mais café.' },
            { l: 2, v: { xícara: 'cheia' }, note: 'Agora a condição é falsa: sai do laço.' },
            { l: 5, v: { xícara: 'cheia', quer_açúcar: 'sim' }, note: 'Decisão: depende da resposta.' },
            { l: 6, v: { xícara: 'cheia + açúcar' }, note: 'Caminho do “sim”.' },
            { l: 8, v: { xícara: 'pronta ☕' }, note: 'Fim do algoritmo.' }] }),
          V('No fluxograma, o losango representa uma decisão.', true, 'Verdadeiro. Dele saem caminhos diferentes, como “sim” e “não”.')
        ],
        quiz: [
          Q('Em um fluxograma, o símbolo usado para “Ler a idade do usuário” é o:', ['paralelogramo (entrada/saída)', 'losango', 'oval', 'círculo pequeno'], 0, 'Entrada e saída de dados usam paralelogramo.'),
          Q('O símbolo que representa uma pergunta com respostas “sim” ou “não” é o:', ['losango', 'retângulo', 'oval', 'seta'], 0, 'Decisões são representadas por losangos.'),
          Q('“Enquanto houver pratos sujos, lave um prato” é um exemplo de estrutura de:', ['repetição', 'decisão simples', 'sequência apenas', 'entrada de dados'], 0, 'A ação se repete enquanto a condição for verdadeira.'),
          Q('Quais são as três estruturas básicas dos algoritmos?', ['Sequência, decisão e repetição', 'Hardware, software e rede', 'Entrada, mouse e teclado', 'Início, meio e cor'], 0, 'Com essas três estruturas se descreve qualquer algoritmo.')
        ]
      },
      {
        id: 'pc-3', ico: '💡', title: 'Lógica booleana', topic: 'Verdadeiro e falso, E, OU, NÃO e tabela-verdade',
        lesson: [
          C('💡', 'Só dois valores', '<p>Na lógica booleana, tudo é <b>verdadeiro (1)</b> ou <b>falso (0)</b>. É a base de condições em programas e dos circuitos dos computadores.</p>'),
          K('Operadores', 'Operador', ['<b>E</b> (AND)', '<b>OU</b> (OR)', '<b>NÃO</b> (NOT)', '<b>OU exclusivo</b> (XOR)'], 'Resultado verdadeiro quando…', ['<b>todas</b> as entradas são verdadeiras', '<b>pelo menos uma</b> é verdadeira', 'inverte: V vira F e F vira V', 'as entradas são <b>diferentes</b>']),
          S('gate', 'Simulador: portas lógicas', {}),
          T('No dia a dia', '<p>“Entra no show <b>quem tem ingresso E documento</b>” — se faltar um, não entra. “Ganha desconto <b>quem é estudante OU idoso</b>” — basta um.</p>'),
          V('A expressão “V E F” resulta em verdadeiro.', false, 'Falso. Com E, basta uma entrada falsa para o resultado ser falso.')
        ],
        quiz: [
          Q('Para acessar o sistema é preciso senha correta E código do celular correto. Se a senha está certa e o código errado, o acesso é:', ['negado', 'liberado', 'liberado pela metade', 'indefinido'], 0, 'No E, as duas condições precisam ser verdadeiras.'),
          Q('Qual o resultado de (V OU F)?', ['Verdadeiro', 'Falso', 'Nulo', 'Erro'], 0, 'No OU, basta uma entrada verdadeira.'),
          Q('Qual o resultado de NÃO (V E V)?', ['Falso', 'Verdadeiro', 'V e F ao mesmo tempo', 'Depende'], 0, 'V E V = V; negando, fica F.'),
          Q('A porta XOR (OU exclusivo) dá 1 quando:', ['as entradas são diferentes', 'as entradas são iguais', 'as duas são 1', 'as duas são 0'], 0, 'XOR: 0/1 ou 1/0 dão 1; 0/0 e 1/1 dão 0.')
        ]
      },
      {
        id: 'pc-4', ico: '🐞', title: 'Testar e depurar', topic: 'Bugs, casos de teste e teste de mesa',
        lesson: [
          C('🐞', 'Bug e depuração', '<p><b>Bug</b> é um erro no programa. <b>Depurar</b> (debug) é encontrar e corrigir a causa.</p><p>Estratégia: <b>reproduzir</b> o erro → <b>isolar</b> onde ocorre → <b>corrigir</b> → <b>testar de novo</b>.</p>'),
          C('🧪', 'Casos de teste', '<p>Teste com entradas <b>normais</b>, <b>de limite</b> e <b>inválidas</b>.</p><p>Ex.: sistema aceita idades de 18 a 60 → teste 17, 18, 35, 60, 61 e “abc”.</p>'),
          T('Teste de mesa', '<p>Executar o algoritmo “no papel”, anotando o valor de cada variável a cada passo. Revela muitos erros antes de rodar o código.</p>'),
          V('Testar apenas com valores “normais” é suficiente para garantir que o programa funciona.', false, 'Falso. Os valores de limite e as entradas inválidas costumam revelar os bugs.')
        ],
        quiz: [
          Q('Um formulário aceita notas de 0 a 10. Qual conjunto de testes é mais completo?', ['−1, 0, 5, 10 e 11', 'Só 5', 'Só 7 e 8', 'Só 10'], 0, 'Inclui valores normais, de limite (0 e 10) e fora do intervalo (−1 e 11).'),
          Q('O primeiro passo para corrigir um bug relatado por um usuário é:', ['conseguir reproduzir o erro', 'reescrever todo o sistema', 'apagar o relatório', 'trocar de linguagem'], 0, 'Sem reproduzir, é difícil achar a causa.'),
          Q('Acompanhar o valor das variáveis passo a passo no papel chama-se:', ['teste de mesa', 'compilação', 'deploy', 'criptografia'], 0, 'É uma técnica simples e eficiente de verificação.'),
          Q('Depois de corrigir um bug, o programador deve:', ['testar de novo, inclusive o que já funcionava', 'publicar sem testar', 'apagar os testes antigos', 'ignorar avisos'], 0, 'Correções podem quebrar outras partes; por isso se testa novamente.')
        ]
      }
    ]
  },

  /* ============================ 5. PRÁTICAS EXTENSIONISTAS ============================ */
  {
    id: 'pei', mascot: 'principal', area: 'pei', c: '#e11d74', cd: '#b0125a', emoji: '🤝', theme: 'comunidade',
    title: 'Práticas Extensionistas Integradoras I', sub: 'Universidade e comunidade construindo soluções juntas',
    fases: [
      {
        id: 'pei-1', ico: '🤝', title: 'O que é extensão', topic: 'Tripé universitário e curricularização',
        lesson: [
          C('🏛️', 'O tripé da universidade', '<p><b>Ensino</b>, <b>pesquisa</b> e <b>extensão</b> são indissociáveis. A extensão é a ponte entre a universidade e a <span class="hl">sociedade</span>: o conhecimento sai da sala de aula e volta transformado.</p>'),
          C('📜', 'Extensão no currículo', '<p>A <b>Resolução CNE/CES nº 7/2018</b> determina que as atividades de extensão componham <b>no mínimo 10%</b> da carga horária total dos cursos de graduação.</p>'),
          K('Extensão × Assistencialismo', 'Extensão', ['Construída <b>com</b> a comunidade', 'Troca de saberes', 'Gera aprendizagem para todos'], 'Assistencialismo', ['Feito <b>para</b> a comunidade, sem participação', 'Ação pontual', 'Pouca autonomia gerada']),
          V('Na extensão universitária, o estudante leva soluções prontas sem ouvir a comunidade.', false, 'Falso. A extensão é dialógica: as soluções são construídas junto com a comunidade.')
        ],
        quiz: [
          Q('O tripé da universidade brasileira é formado por:', ['ensino, pesquisa e extensão', 'ensino, provas e notas', 'pesquisa, marketing e vendas', 'aulas, férias e formatura'], 0, 'São as três funções indissociáveis da universidade.'),
          Q('Segundo a Resolução CNE/CES nº 7/2018, a extensão deve ocupar, no mínimo:', ['10% da carga horária total do curso', '1% da carga horária', '50% da carga horária', 'apenas atividades opcionais'], 0, 'É a chamada curricularização da extensão.'),
          Q('Qual atividade é um bom exemplo de extensão em Engenharia de Software?', ['Desenvolver, com uma associação de moradores, um sistema simples para organizar doações', 'Estudar sozinho para a prova', 'Jogar videogame no laboratório', 'Copiar um site pronto'], 0, 'Há interação com a comunidade e aplicação do conhecimento.'),
          Q('A principal diferença entre extensão e assistencialismo é que a extensão:', ['é construída com a participação da comunidade', 'é sempre paga', 'dispensa planejamento', 'acontece só dentro da sala de aula'], 0, 'O diálogo e a construção conjunta são essenciais.')
        ]
      },
      {
        id: 'pei-2', ico: '🔎', title: 'Diagnóstico da comunidade', topic: 'Escuta, necessidades, parceiros e ODS',
        lesson: [
          C('👂', 'Primeiro, escutar', '<p>Antes de propor algo, entenda a realidade: <b>entrevistas</b>, <b>rodas de conversa</b>, <b>questionários</b> e <b>observação</b>. Pergunte o que as pessoas precisam, e não só o que você sabe fazer.</p>'),
          C('🗺️', 'Mapeie', '<ul><li><b>Necessidades</b> e problemas prioritários</li><li><b>Recursos</b> que já existem (líderes, espaços, ONGs)</li><li><b>Parceiros</b> possíveis</li><li><b>Riscos</b> e limitações</li></ul>'),
          C('🌍', 'ODS da ONU', '<p>Os <b>17 Objetivos de Desenvolvimento Sustentável</b> (Agenda 2030) ajudam a conectar o projeto a desafios globais. Ex.: ODS 4 (educação de qualidade), ODS 8 (trabalho decente), ODS 11 (cidades sustentáveis).</p>'),
          V('O diagnóstico deve ser feito depois que a solução já está pronta.', false, 'Falso. O diagnóstico vem antes, para garantir que a solução atende a uma necessidade real.')
        ],
        quiz: [
          Q('Qual é a melhor forma de começar um projeto de extensão em uma comunidade?', ['Ouvir os moradores para entender suas necessidades', 'Chegar com um aplicativo pronto', 'Decidir tudo só com a equipe da faculdade', 'Pular o planejamento'], 0, 'A escuta garante que o projeto faça sentido para quem será atendido.'),
          Q('Os Objetivos de Desenvolvimento Sustentável (ODS) da ONU são:', ['17 objetivos da Agenda 2030', '5 leis brasileiras', '10 normas da ABNT', '3 disciplinas obrigatórias'], 0, 'São 17 objetivos globais para 2030.'),
          Q('Identificar que a escola do bairro já tem um laboratório de informática ocioso é mapear:', ['recursos existentes', 'riscos de projeto', 'bugs', 'custos fixos'], 0, 'Aproveitar o que já existe fortalece o projeto.'),
          Q('Um projeto de oficinas de informática para idosos se relaciona principalmente com o ODS de:', ['educação de qualidade', 'vida na água', 'ação contra a mudança do clima', 'energia limpa'], 0, 'Promove aprendizagem ao longo da vida (ODS 4).')
        ]
      },
      {
        id: 'pei-3', ico: '📋', title: 'Planejar e avaliar o projeto', topic: 'Objetivos, cronograma, indicadores, ética e devolutiva',
        lesson: [
          C('🎯', 'Objetivos claros', '<p>Um bom objetivo é <b>específico</b>, <b>mensurável</b>, <b>alcançável</b>, <b>relevante</b> e <b>com prazo</b> (SMART).</p><p>Ex.: “capacitar 20 moradores em planilhas básicas em 6 encontros até junho”.</p>'),
          C('📊', 'Indicadores', '<p>Como saber se deu certo? Defina <b>indicadores</b>: número de participantes, frequência, satisfação, uso real da solução depois de 3 meses.</p>'),
          C('🔐', 'Ética e devolutiva', '<ul><li>Peça <b>consentimento</b> para fotos, entrevistas e dados (LGPD)</li><li>Respeite a cultura e o tempo da comunidade</li><li>Faça uma <b>devolutiva</b>: apresente os resultados para quem participou</li></ul>'),
          V('“Ajudar a comunidade com tecnologia” é um objetivo mensurável.', false, 'Falso. É vago: não diz quanto, como nem até quando.')
        ],
        quiz: [
          Q('Qual objetivo está mais bem escrito para um projeto extensionista?', ['Criar, até agosto, um site de divulgação para 5 artesãs do bairro e treiná-las para atualizá-lo', 'Fazer algo legal com tecnologia', 'Ajudar as pessoas', 'Mudar o mundo'], 0, 'É específico, mensurável e tem prazo.'),
          Q('“Percentual de participantes que concluíram o curso” é um exemplo de:', ['indicador', 'cronograma', 'requisito funcional', 'protótipo'], 0, 'Indicadores medem resultados.'),
          Q('Antes de publicar fotos dos participantes nas redes sociais do projeto, é necessário:', ['obter o consentimento deles', 'apenas escolher as melhores fotos', 'aplicar filtros', 'nada, pois é extensão'], 0, 'Imagem e dados pessoais exigem autorização.'),
          Q('Apresentar os resultados do projeto para a comunidade que participou chama-se:', ['devolutiva', 'deploy', 'auditoria fiscal', 'patente'], 0, 'A devolutiva fecha o ciclo com respeito e transparência.')
        ]
      }
    ]
  },

  /* ============================ 6. EXPRESSÃO GRÁFICA ============================ */
  {
    id: 'eg', mascot: 'revisao', area: 'eg', c: '#0ea5e9', cd: '#0284c7', emoji: '📐', theme: 'desenho',
    title: 'Expressão Gráfica', sub: 'Desenho técnico, escalas, projeções e perspectivas',
    fases: [
      {
        id: 'eg-1', ico: '📄', title: 'Desenho técnico e normas', topic: 'Formatos de papel e tipos de linha',
        lesson: [
          C('📄', 'Linguagem universal', '<p>O desenho técnico comunica forma e medidas <b>sem ambiguidade</b>. No Brasil, segue normas da <b>ABNT</b>.</p>'),
          C('📏', 'Formatos da série A', '<ul><li><b>A0</b>: área de 1 m² (841 × 1189 mm)</li><li>Cada formato seguinte é a <b>metade</b> do anterior</li><li><b>A4</b>: 210 × 297 mm (a folha comum)</li></ul>'),
          K('Tipos de linha', 'Linha', ['<b>Contínua grossa</b>', '<b>Tracejada</b>', '<b>Traço e ponto</b>', '<b>Contínua fina</b>'], 'Uso', ['Arestas e contornos <b>visíveis</b>', 'Arestas <b>ocultas</b>', '<b>Eixos</b> e linhas de simetria', 'Cotas e linhas auxiliares']),
          V('No desenho técnico, a linha tracejada representa arestas que não estão visíveis.', true, 'Verdadeiro. Linhas tracejadas indicam contornos ocultos.')
        ],
        quiz: [
          Q('As dimensões da folha A4 são:', ['210 × 297 mm', '297 × 420 mm', '148 × 210 mm', '841 × 1189 mm'], 0, 'A4 = 210 × 297 mm.'),
          Q('Uma folha A3 tem, em relação à A4:', ['o dobro da área', 'a metade da área', 'a mesma área', 'quatro vezes menos área'], 0, 'Cada formato é a metade do anterior; logo A3 = 2 × A4.'),
          Q('O eixo de simetria de uma peça cilíndrica é representado por linha:', ['traço e ponto', 'contínua grossa', 'tracejada', 'em zigue-zague'], 0, 'Eixos e simetrias usam traço e ponto.'),
          Q('O contorno visível de uma peça é desenhado com linha:', ['contínua grossa', 'tracejada', 'traço e ponto', 'pontilhada fina'], 0, 'Arestas visíveis: linha contínua grossa.')
        ]
      },
      {
        id: 'eg-2', ico: '🔍', title: 'Escalas', topic: 'Natural, redução e ampliação',
        lesson: [
          C('🔍', 'O que a escala diz', '<p>Escala = <b>medida no desenho : medida real</b>.</p><ul><li><b>1:1</b> natural</li><li><b>1:50</b> redução (o real é 50 vezes maior)</li><li><b>2:1</b> ampliação (o desenho é 2 vezes maior)</li></ul>'),
          S('calc', 'Simulador: medida real pela escala', { calc: 'escala' }),
          T('As cotas mostram o tamanho real', '<p>Mesmo em escala, os números das cotas indicam a <b>medida real</b> da peça, normalmente em <b>milímetros</b>.</p>'),
          V('Na escala 1:100, 1 cm no desenho representa 1 m na realidade.', true, 'Verdadeiro. 1 cm × 100 = 100 cm = 1 m.')
        ],
        quiz: [
          Q('Em uma planta na escala 1:50, uma parede mede 8 cm no desenho. Seu comprimento real é:', ['4 m', '40 cm', '8 m', '50 m'], 0, '8 × 50 = 400 cm = 4 m.'),
          Q('Uma peça pequena foi desenhada com o dobro do tamanho real. A escala é:', ['2:1', '1:2', '1:1', '1:20'], 0, 'Ampliação: desenho 2, real 1.'),
          Q('Uma sala de 5 m precisa caber no desenho com 10 cm. A escala adequada é:', ['1:50', '1:5', '1:500', '5:1'], 0, '500 cm ÷ 10 cm = 50 → 1:50.'),
          Q('Em um desenho na escala 1:10, a cota escrita “250” indica que a medida real é:', ['250 mm', '25 mm', '2.500 mm', '2,5 mm'], 0, 'As cotas trazem a medida real, independentemente da escala.')
        ]
      },
      {
        id: 'eg-3', ico: '🧊', title: 'Projeções ortogonais', topic: 'Vistas frontal, superior e lateral',
        lesson: [
          C('🧊', 'Ver a peça de vários lados', '<p>Na projeção ortogonal, a peça é “achatada” em planos, gerando <b>vistas</b>:</p><ul><li><b>Vista frontal</b> (a principal, com mais detalhes)</li><li><b>Vista superior</b> (de cima)</li><li><b>Vista lateral</b> (esquerda ou direita)</li></ul>'),
          C('📐', '1º diedro', '<p>No Brasil, adota-se preferencialmente o <b>1º diedro</b>: a vista superior fica <b>abaixo</b> da frontal e a lateral esquerda fica à <b>direita</b> da frontal.</p>'),
          T('Correspondência entre vistas', '<p>Altura da frontal = altura da lateral. Largura da frontal = largura da superior. Use linhas de chamada para conferir.</p>'),
          V('A vista frontal deve ser escolhida de modo a mostrar o maior número de detalhes da peça.', true, 'Verdadeiro. Ela é a vista principal do desenho.')
        ],
        quiz: [
          Q('As três vistas mais usadas em desenho técnico são:', ['frontal, superior e lateral', 'frontal, interna e traseira apenas', 'isométrica, cavaleira e cônica', 'norte, sul e leste'], 0, 'Essas três costumam ser suficientes para definir a peça.'),
          Q('No 1º diedro, a vista superior é posicionada:', ['abaixo da vista frontal', 'acima da vista frontal', 'à esquerda da vista frontal', 'sobreposta à frontal'], 0, 'É a convenção do 1º diedro, adotada no Brasil.'),
          Q('Qual medida é comum à vista frontal e à vista lateral?', ['a altura', 'a profundidade apenas', 'a cor', 'nenhuma'], 0, 'As duas mostram a altura da peça.'),
          Q('Arestas que existem mas ficam escondidas em uma vista são desenhadas com linha:', ['tracejada', 'contínua grossa', 'traço e ponto', 'dupla'], 0, 'Arestas ocultas usam tracejado.')
        ]
      },
      {
        id: 'eg-4', ico: '📦', title: 'Perspectivas e cotagem', topic: 'Isométrica, cavaleira e regras de cotas',
        lesson: [
          K('Perspectivas', 'Isométrica', ['Três eixos a <b>120°</b> entre si', 'Medidas em verdadeira grandeza nos eixos', 'Muito usada em esboços técnicos'], 'Cavaleira', ['Face frontal em verdadeira grandeza', 'Profundidade inclinada (ex.: 45°) e reduzida', 'Fácil de desenhar à mão']),
          C('📏', 'Regras de cotagem', '<ul><li>Medidas em <b>milímetros</b>, sem escrever a unidade</li><li><b>Não repetir</b> cotas</li><li>Cotar na vista que mostra melhor o detalhe</li><li>Linhas de cota finas, com setas ou traços nas extremidades</li></ul>'),
          T('Esboço à mão livre', '<p>Antes do CAD, um esboço rápido em perspectiva ajuda a pensar e a discutir a ideia com a equipe.</p>'),
          V('Em desenho técnico, a mesma cota deve aparecer em todas as vistas para não haver dúvida.', false, 'Falso. Cotas não devem ser repetidas; cada medida aparece uma vez, na vista mais clara.')
        ],
        quiz: [
          Q('Na perspectiva isométrica, os três eixos formam entre si ângulos de:', ['120°', '90°', '45°', '60°'], 0, 'Os eixos isométricos ficam a 120° uns dos outros.'),
          Q('A unidade padrão das cotas no desenho técnico mecânico é:', ['o milímetro', 'o metro', 'a polegada sempre', 'o quilômetro'], 0, 'Usa-se o mm, sem escrever a unidade.'),
          Q('A perspectiva em que a face frontal aparece em verdadeira grandeza e a profundidade fica inclinada é a:', ['cavaleira', 'isométrica', 'cônica com três pontos de fuga', 'ortogonal'], 0, 'Essa é a característica da perspectiva cavaleira.'),
          Q('Qual regra de cotagem está correta?', ['Cada medida deve ser cotada uma única vez', 'Repetir a cota em todas as vistas', 'Escrever “mm” em cada número', 'Cotar dentro de arestas ocultas sempre'], 0, 'Evita-se duplicidade e poluição visual.')
        ]
      }
    ]
  },

  /* ============================ 7. ALGORITMOS ============================ */
  {
    id: 'alg', mascot: 'notebook', area: 'alg', c: '#2f80ed', cd: '#1d5fbf', emoji: '👨‍💻', theme: 'codigo',
    title: 'Lógica de Programação e Algoritmos', sub: 'Variáveis, condicionais, laços e resolução de problemas',
    fases: [
      {
        id: 'alg-1', ico: '📦', title: 'Variáveis e tipos', topic: 'Declaração, atribuição, entrada e saída',
        lesson: [
          C('📦', 'Variável é uma caixinha com nome', '<p>Guarda um valor na memória que pode <b>mudar</b> durante o programa.</p><ul><li><b>inteiro</b>: 7, −3</li><li><b>real</b>: 3,14</li><li><b>caractere/texto</b>: "Ana"</li><li><b>lógico</b>: verdadeiro / falso</li></ul>'),
          C('⬅️', 'Atribuição', '<p>O símbolo <b>←</b> (ou <b>=</b> em várias linguagens) guarda um valor na variável.</p>' + code('idade ← 20\nidade ← idade + 1   // agora vale 21')),
          S('trace', 'Simulação: troca de valores', { code: ['a ← 5', 'b ← 9', 'aux ← a', 'a ← b', 'b ← aux', 'escreva(a, b)'], steps: [
            { l: 0, v: { a: 5 }, note: 'a recebe 5.' },
            { l: 1, v: { a: 5, b: 9 }, note: 'b recebe 9.' },
            { l: 2, v: { a: 5, b: 9, aux: 5 }, note: 'Guarda o valor de a para não perder.' },
            { l: 3, v: { a: 9, b: 9, aux: 5 }, note: 'a recebe o valor de b.' },
            { l: 4, v: { a: 9, b: 5, aux: 5 }, note: 'b recebe o valor guardado.' },
            { l: 5, v: { a: 9, b: 5, aux: 5 }, out: '9 5', note: 'Os valores foram trocados!' }] }),
          T('Nomes que explicam', '<p>Prefira <code>precoTotal</code> a <code>x</code>. Código é lido muito mais vezes do que é escrito.</p>'),
          V('Depois de x ← 3 e x ← x * 2, a variável x vale 6.', true, 'Verdadeiro. x * 2 usa o valor atual (3) e o resultado substitui o anterior.')
        ],
        quiz: [
          Q('Qual tipo de dado é mais adequado para guardar o preço de um produto, como 19,90?', ['real', 'inteiro', 'lógico', 'nenhum'], 0, 'Valores com casas decimais usam o tipo real.'),
          Q('Após executar:' + code('n ← 4\nn ← n + 3\nn ← n * 2'), ['14', '11', '8', '7'], 0, 'n = 4 → 7 → 14.'),
          Q('Para guardar se um aluno está matriculado (sim ou não), o tipo mais adequado é:', ['lógico', 'real', 'inteiro', 'texto longo'], 0, 'Valores de verdadeiro/falso usam o tipo lógico.'),
          Q('Para trocar os valores de a e b sem perder nenhum, usamos:', ['uma variável auxiliar', 'apenas a ← b', 'apenas b ← a', 'um laço infinito'], 0, 'Sem a auxiliar, o primeiro valor seria sobrescrito.')
        ]
      },
      {
        id: 'alg-2', ico: '➗', title: 'Operadores', topic: 'Aritméticos, resto, relacionais e lógicos',
        lesson: [
          C('➕', 'Aritméticos', '<ul><li><b>+ − * /</b></li><li><b>div</b>: divisão inteira → 17 div 5 = 3</li><li><b>mod</b> (ou %): resto → 17 mod 5 = 2</li></ul><p>Precedência: <b>* / mod</b> antes de <b>+ −</b>. Parênteses mudam a ordem.</p>'),
          K('Relacionais × Lógicos', 'Relacionais (comparam)', ['<b>=</b> igual • <b>≠</b> diferente', '<b>&gt; &lt; ≥ ≤</b>', 'Resultado: V ou F'], 'Lógicos (combinam)', ['<b>e</b>, <b>ou</b>, <b>não</b>', 'Ex.: (idade ≥ 18) e (temCNH)', 'Resultado: V ou F']),
          T('Truque do mod', '<p>Número <b>par</b>: <code>n mod 2 = 0</code>. Último dígito: <code>n mod 10</code>.</p>'),
          V('A expressão 2 + 3 * 4 vale 20.', false, 'Falso. A multiplicação vem antes: 3 * 4 = 12; 2 + 12 = 14.')
        ],
        quiz: [
          Q('Quanto vale 23 mod 4?', ['3', '5', '5,75', '0'], 0, '23 = 4 × 5 + 3: o resto é 3.'),
          Q('Qual condição testa se n é par?', ['n mod 2 = 0', 'n / 2 = 0', 'n mod 2 = 1', 'n div 2 = 2'], 0, 'Número par deixa resto 0 na divisão por 2.'),
          Q('Qual o valor de (10 > 3) e (2 = 5)?', ['falso', 'verdadeiro', '7', 'erro'], 0, 'V e F = F.'),
          Q('Qual o resultado de (8 + 2) * 3?', ['30', '14', '24', '13'], 0, 'Parênteses primeiro: 10 × 3 = 30.')
        ]
      },
      {
        id: 'alg-3', ico: '🔀', title: 'Condicionais', topic: 'se, senão, aninhamento e escolha',
        lesson: [
          C('🔀', 'Se… então… senão', code('se (media >= 7) entao\n    escreva("Aprovado")\nsenao\n    escreva("Recuperação")\nfimse') + '<p>Só <b>um</b> dos caminhos é executado.</p>'),
          C('🪜', 'Várias faixas', code('se (nota >= 9) entao\n    conceito ← "A"\nsenao se (nota >= 7) entao\n    conceito ← "B"\nsenao\n    conceito ← "C"\nfimse') + '<p>A ordem dos testes importa: do mais restrito ao mais amplo.</p>'),
          S('trace', 'Simulação: classificando a nota 7,5', { code: ['nota ← 7.5', 'se (nota >= 9) entao', '    conceito ← "A"', 'senao se (nota >= 7) entao', '    conceito ← "B"', 'senao', '    conceito ← "C"', 'fimse', 'escreva(conceito)'], steps: [
            { l: 0, v: { nota: 7.5 }, note: 'nota recebe 7.5.' },
            { l: 1, v: { nota: 7.5 }, note: '7.5 >= 9? Falso: pula para o próximo teste.' },
            { l: 3, v: { nota: 7.5 }, note: '7.5 >= 7? Verdadeiro!' },
            { l: 4, v: { nota: 7.5, conceito: '"B"' }, note: 'Executa só este bloco.' },
            { l: 7, v: { nota: 7.5, conceito: '"B"' }, note: 'Os outros caminhos são ignorados.' },
            { l: 8, v: { nota: 7.5, conceito: '"B"' }, out: 'B', note: 'Saída: B.' }] }),
          V('Em um bloco se/senão, os dois caminhos podem ser executados ao mesmo tempo.', false, 'Falso. Ou executa o bloco do “se”, ou o do “senão”.')
        ],
        quiz: [
          Q('O que será exibido?' + code('x ← 12\nse (x mod 2 = 0) entao\n    escreva("par")\nsenao\n    escreva("ímpar")\nfimse'), ['par', 'ímpar', 'par ímpar', 'nada'], 0, '12 mod 2 = 0: condição verdadeira.'),
          Q('Para t = 30, o que é exibido?' + code('se (t > 35) entao\n    escreva("muito quente")\nsenao se (t > 25) entao\n    escreva("quente")\nsenao\n    escreva("agradável")\nfimse'), ['quente', 'muito quente', 'agradável', 'quente agradável'], 0, '30 > 35 é falso; 30 > 25 é verdadeiro.'),
          Q('Um programa verifica idade ≥ 16 para votar. Para idade = 16, o resultado é:', ['pode votar', 'não pode votar', 'erro', 'depende do mod'], 0, '16 ≥ 16 é verdadeiro (o ≥ inclui o próprio valor).'),
          Q('Qual estrutura é mais indicada para tratar várias opções de um menu (1, 2, 3, 4)?', ['escolha/caso (switch)', 'laço infinito', 'atribuição simples', 'comentário'], 0, 'A estrutura de escolha deixa o código organizado para muitas opções fixas.')
        ]
      },
      {
        id: 'alg-4', ico: '🔁', title: 'Laços de repetição', topic: 'enquanto, para, contador e acumulador',
        lesson: [
          K('Os laços', 'enquanto', ['Repete <b>enquanto</b> a condição for verdadeira', 'Testa <b>antes</b>', 'Bom quando não se sabe quantas vezes'], 'para', ['Repete um <b>número conhecido</b> de vezes', 'Ex.: para i de 1 até 10', 'Já cuida do contador']),
          C('🧮', 'Contador e acumulador', '<ul><li><b>Contador</b>: soma 1 a cada volta (<code>cont ← cont + 1</code>)</li><li><b>Acumulador</b>: soma valores (<code>soma ← soma + x</code>)</li></ul><p>Os dois precisam ser <b>inicializados</b> (normalmente com 0).</p>'),
          S('trace', 'Simulação: somando de 1 a 4', { code: ['soma ← 0', 'para i de 1 ate 4 faca', '    soma ← soma + i', 'fimpara', 'escreva(soma)'], steps: [
            { l: 0, v: { soma: 0 }, note: 'Acumulador começa em 0.' },
            { l: 1, v: { soma: 0, i: 1 }, note: 'i começa em 1.' },
            { l: 2, v: { soma: 1, i: 1 }, note: '0 + 1 = 1' },
            { l: 1, v: { soma: 1, i: 2 }, note: 'Próxima volta: i = 2.' },
            { l: 2, v: { soma: 3, i: 2 }, note: '1 + 2 = 3' },
            { l: 1, v: { soma: 3, i: 3 }, note: 'i = 3' },
            { l: 2, v: { soma: 6, i: 3 }, note: '3 + 3 = 6' },
            { l: 1, v: { soma: 6, i: 4 }, note: 'i = 4 (último)' },
            { l: 2, v: { soma: 10, i: 4 }, note: '6 + 4 = 10' },
            { l: 4, v: { soma: 10, i: 4 }, out: '10', note: 'Fim do laço: saída 10.' }] }),
          T('Cuidado com laço infinito', '<p>Se nada dentro do “enquanto” muda a condição, o laço nunca termina. Sempre confira o que faz o laço parar.</p>'),
          V('Um acumulador de soma deve começar com o valor 0.', true, 'Verdadeiro. Começar com outro valor distorceria o resultado.')
        ],
        quiz: [
          Q('Quantas vezes “Olá” é exibido?' + code('para i de 1 ate 5 faca\n    escreva("Olá")\nfimpara'), ['5', '4', '6', '1'], 0, 'i assume 1, 2, 3, 4 e 5.'),
          Q('Qual o valor final de c?' + code('c ← 0\nenquanto (c < 3) faca\n    c ← c + 1\nfimenquanto'), ['3', '2', '4', '0'], 0, 'c vai 0 → 1 → 2 → 3; quando c = 3 a condição fica falsa.'),
          Q('O laço abaixo:' + code('x ← 1\nenquanto (x > 0) faca\n    escreva(x)\nfimenquanto'), ['nunca termina, pois x não muda', 'executa uma vez', 'não executa', 'executa 10 vezes'], 0, 'x continua 1 e a condição é sempre verdadeira: laço infinito.'),
          Q('Qual o valor exibido?' + code('p ← 1\npara i de 1 ate 4 faca\n    p ← p * 2\nfimpara\nescreva(p)'), ['16', '8', '4', '2'], 0, 'p dobra 4 vezes: 1 → 2 → 4 → 8 → 16.')
        ]
      },
      {
        id: 'alg-5', ico: '🏁', title: 'Resolvendo problemas', topic: 'Maior valor, média e contagem com laços e condições',
        lesson: [
          C('🏁', 'Juntando tudo', '<p>Problemas reais combinam <b>entrada</b>, <b>laço</b>, <b>condição</b> e <b>saída</b>. Antes de codar: entenda, escreva em português os passos e faça um teste de mesa.</p>'),
          C('🏆', 'Padrão: encontrar o maior', code('leia(maior)            // primeiro valor\npara i de 2 ate n faca\n    leia(x)\n    se (x > maior) entao\n        maior ← x\n    fimse\nfimpara\nescreva(maior)')),
          S('trace', 'Simulação: maior de 4, 9, 2', { code: ['maior ← 4', 'x ← 9', 'se (x > maior) entao maior ← x', 'x ← 2', 'se (x > maior) entao maior ← x', 'escreva(maior)'], steps: [
            { l: 0, v: { maior: 4 }, note: 'O primeiro valor é o maior até agora.' },
            { l: 1, v: { maior: 4, x: 9 }, note: 'Lê o próximo.' },
            { l: 2, v: { maior: 9, x: 9 }, note: '9 > 4: atualiza o maior.' },
            { l: 3, v: { maior: 9, x: 2 }, note: 'Lê o próximo.' },
            { l: 4, v: { maior: 9, x: 2 }, note: '2 > 9? Não: mantém.' },
            { l: 5, v: { maior: 9, x: 2 }, out: '9', note: 'Resposta: 9.' }] }),
          T('Média com laço', '<p>Acumule a soma no laço e divida pela quantidade <b>depois</b> do laço. Dividir dentro do laço é um erro comum.</p>'),
          V('Para calcular a média de 10 notas, divide-se a soma por 10 a cada volta do laço.', false, 'Falso. Soma-se tudo no laço e divide-se uma única vez, ao final.')
        ],
        quiz: [
          Q('Qual valor é exibido?' + code('cont ← 0\npara i de 1 ate 10 faca\n    se (i mod 3 = 0) entao\n        cont ← cont + 1\n    fimse\nfimpara\nescreva(cont)'), ['3', '10', '4', '0'], 0, 'Múltiplos de 3 entre 1 e 10: 3, 6 e 9.'),
          Q('Para achar o MENOR valor de uma lista, a condição de atualização deve ser:', ['se (x < menor) entao menor ← x', 'se (x > menor) entao menor ← x', 'menor ← menor + x', 'se (x = 0) entao pare'], 0, 'Atualiza quando aparece um valor menor que o atual.'),
          Q('Para calcular a média de n números lidos em um laço, o correto é:', ['acumular a soma no laço e dividir por n depois do laço', 'dividir cada número por n e não somar', 'multiplicar todos', 'pegar só o último valor'], 0, 'Média = soma ÷ quantidade, calculada ao final.'),
          Q('Qual o valor exibido?' + code('s ← 0\npara i de 1 ate 3 faca\n    s ← s + i * i\nfimpara\nescreva(s)'), ['14', '6', '9', '12'], 0, '1 + 4 + 9 = 14.')
        ]
      }
    ]
  },

  /* ============================ 8. ARQUITETURA ============================ */
  {
    id: 'aoc', mascot: 'atencao', area: 'aoc', c: '#16a34a', cd: '#11803a', emoji: '🖥️', theme: 'hardware',
    title: 'Arquitetura e Organização de Computadores', sub: 'Binário, processador, memória e sistemas operacionais',
    fases: [
      {
        id: 'aoc-1', ico: '🔢', title: 'Sistemas de numeração', topic: 'Binário, decimal, hexadecimal, bit e byte',
        lesson: [
          C('🔢', 'O computador fala binário', '<p>Circuitos têm dois estados (ligado/desligado), por isso usam a <b>base 2</b>: só 0 e 1.</p><ul><li><b>bit</b>: um dígito binário</li><li><b>byte</b>: 8 bits → 256 valores (0 a 255)</li></ul>'),
          C('🧮', 'Binário → decimal', '<p>Cada posição vale uma potência de 2: 128, 64, 32, 16, 8, 4, 2, 1.</p><p><b>1011</b> = 8 + 0 + 2 + 1 = <span class="hl">11</span>.</p>'),
          S('bits', 'Simulador: liga e desliga os bits', {}),
          T('Hexadecimal', '<p>Base 16: 0–9 e A–F (A = 10 … F = 15). Cada dígito hexa equivale a <b>4 bits</b>. Ex.: 1111 1111 = <b>FF</b> = 255. Cores na web usam hexa: #FFB800.</p>'),
          V('Com 8 bits é possível representar 256 valores diferentes.', true, 'Verdadeiro. 2⁸ = 256 (de 0 a 255).')
        ],
        quiz: [
          Q('O número binário 1101 corresponde, em decimal, a:', ['13', '11', '1101', '9'], 0, '8 + 4 + 0 + 1 = 13.'),
          Q('O número decimal 6 em binário é:', ['110', '101', '011', '1100'], 0, '6 = 4 + 2 → 110.'),
          Q('Quantos bits tem um byte?', ['8', '2', '10', '16'], 0, '1 byte = 8 bits.'),
          Q('O hexadecimal A equivale ao decimal:', ['10', '1', '16', '11'], 0, 'Em hexa: A = 10, B = 11, …, F = 15.')
        ]
      },
      {
        id: 'aoc-2', ico: '🧠', title: 'Processador e von Neumann', topic: 'CPU, ULA, unidade de controle e ciclo de instrução',
        lesson: [
          C('🏛️', 'Arquitetura de von Neumann', '<p>Programa e dados ficam na <b>mesma memória</b>. Componentes:</p><ul><li><b>CPU</b> (processador)</li><li><b>Memória</b> principal</li><li>Dispositivos de <b>entrada e saída</b></li><li><b>Barramentos</b> que ligam tudo</li></ul>'),
          K('Dentro da CPU', 'Parte', ['<b>ULA</b>', '<b>Unidade de controle</b>', '<b>Registradores</b>'], 'Função', ['Faz contas e operações lógicas', 'Coordena e decodifica as instruções', 'Memórias ultrarrápidas dentro da CPU']),
          C('🔄', 'Ciclo de instrução', '<p><b>Busca</b> (pega a instrução na memória) → <b>Decodifica</b> (entende o que fazer) → <b>Executa</b> → repete, bilhões de vezes por segundo (o <b>clock</b>, em GHz).</p>'),
          V('A ULA é a parte da CPU que realiza operações aritméticas e lógicas.', true, 'Verdadeiro. ULA = Unidade Lógica e Aritmética.')
        ],
        quiz: [
          Q('Na arquitetura de von Neumann, programas e dados:', ['ficam armazenados na mesma memória', 'ficam sempre em discos separados', 'não precisam de memória', 'ficam só nos registradores'], 0, 'Essa é a característica central do modelo.'),
          Q('A parte da CPU que coordena a busca e a decodificação das instruções é a:', ['unidade de controle', 'ULA', 'memória RAM', 'placa de vídeo'], 0, 'A UC comanda o funcionamento dos demais componentes.'),
          Q('A ordem do ciclo de instrução é:', ['busca, decodificação e execução', 'execução, busca e decodificação', 'decodificação, execução e busca', 'gravação, leitura e desligamento'], 0, 'O processador busca, entende e executa cada instrução.'),
          Q('Os caminhos que transportam dados e endereços entre CPU, memória e periféricos são os:', ['barramentos', 'registradores', 'pixels', 'arquivos'], 0, 'Barramentos interligam os componentes.')
        ]
      },
      {
        id: 'aoc-3', ico: '🧱', title: 'Hierarquia de memória', topic: 'Registradores, cache, RAM e armazenamento',
        lesson: [
          C('🧱', 'Pirâmide da memória', '<p>Do topo para a base:</p><ol style="padding-left:20px;margin:0 0 12px"><li><b>Registradores</b></li><li><b>Cache</b> (L1, L2, L3)</li><li><b>RAM</b> (memória principal)</li><li><b>SSD / HD</b> (armazenamento)</li></ol><p>Subindo: <b>mais rápida e mais cara</b>. Descendo: <b>mais capacidade e mais barata</b>.</p>'),
          K('Volátil × Não volátil', 'Volátil', ['Perde os dados ao desligar', 'Registradores, cache e RAM'], 'Não volátil', ['Mantém os dados sem energia', 'SSD, HD, pen drive, ROM']),
          T('Por que existe cache?', '<p>A CPU é muito mais rápida que a RAM. A cache guarda os dados usados com frequência perto do processador, evitando esperas.</p>'),
          V('A memória RAM mantém os dados mesmo com o computador desligado.', false, 'Falso. A RAM é volátil. Para guardar de forma permanente, usa-se SSD ou HD.')
        ],
        quiz: [
          Q('Qual memória é a mais rápida?', ['Registradores', 'SSD', 'HD', 'Pen drive'], 0, 'Ficam dentro da CPU, no topo da hierarquia.'),
          Q('Um trabalho não salvo é perdido quando falta energia porque estava apenas na:', ['memória RAM, que é volátil', 'memória ROM', 'nuvem', 'impressora'], 0, 'A RAM perde o conteúdo sem energia.'),
          Q('A memória cache serve para:', ['reduzir o tempo que a CPU espera por dados usados com frequência', 'guardar arquivos para sempre', 'substituir o processador', 'aumentar a resolução da tela'], 0, 'Ela aproxima os dados mais usados do processador.'),
          Q('Descendo na hierarquia de memória (do registrador ao HD), em geral:', ['aumenta a capacidade e diminui a velocidade', 'aumenta a velocidade e o custo por byte', 'tudo fica igual', 'diminui a capacidade'], 0, 'É o equilíbrio entre velocidade, capacidade e custo.')
        ]
      },
      {
        id: 'aoc-4', ico: '🪟', title: 'Sistemas operacionais', topic: 'Funções do SO, processos e arquivos',
        lesson: [
          C('🪟', 'O gerente do computador', '<p>O <b>sistema operacional</b> (SO) faz a ponte entre o <b>hardware</b>, os <b>programas</b> e o <b>usuário</b>. Exemplos: Windows, Linux, macOS, Android, iOS.</p>'),
          C('⚙️', 'Principais funções', '<ul><li>Gerenciar <b>processos</b> (programas em execução)</li><li>Gerenciar <b>memória</b></li><li>Gerenciar <b>arquivos</b> e pastas</li><li>Controlar <b>dispositivos</b> (drivers)</li><li><b>Segurança</b> e usuários</li></ul>'),
          K('Programa × Processo', 'Programa', ['Arquivo <b>parado</b> no disco', 'Ex.: o instalador do navegador'], 'Processo', ['Programa <b>em execução</b>, na memória', 'Ex.: o navegador aberto agora']),
          T('Kernel', '<p>O <b>núcleo</b> (kernel) é a parte central do SO, que conversa diretamente com o hardware.</p>'),
          V('Um driver é o software que permite ao sistema operacional controlar um dispositivo, como uma impressora.', true, 'Verdadeiro. Drivers “traduzem” as ordens do SO para o dispositivo.')
        ],
        quiz: [
          Q('Qual destes é um sistema operacional?', ['Linux', 'Microsoft Word', 'Google Chrome', 'Photoshop'], 0, 'Os outros são aplicativos que rodam sobre um SO.'),
          Q('Um programa em execução, carregado na memória, é chamado de:', ['processo', 'driver', 'barramento', 'byte'], 0, 'Processo é o programa em execução.'),
          Q('A parte central do sistema operacional, que se comunica diretamente com o hardware, é o:', ['kernel', 'navegador', 'teclado', 'monitor'], 0, 'O kernel é o núcleo do SO.'),
          Q('Qual NÃO é uma função típica do sistema operacional?', ['Editar fotos com filtros artísticos', 'Gerenciar a memória', 'Gerenciar processos', 'Controlar dispositivos'], 0, 'Editar fotos é tarefa de um aplicativo.')
        ]
      }
    ]
  },

  /* ============================ 9. EMPREENDEDORISMO ============================ */
  {
    id: 'emp', mascot: 'planejamento', area: 'emp', c: '#d97706', cd: '#b45309', emoji: '🚀', theme: 'negocios',
    title: 'Empreendedorismo e Inovação', sub: 'Perfil empreendedor, inovação, modelo de negócio e finanças',
    fases: [
      {
        id: 'emp-1', ico: '🚀', title: 'Empreendedorismo', topic: 'Perfil empreendedor, oportunidade e necessidade',
        lesson: [
          C('🚀', 'Empreender é criar valor', '<p>É identificar <b>oportunidades</b> e transformá-las em soluções que geram valor, assumindo <b>riscos calculados</b>.</p>'),
          K('Por oportunidade × por necessidade', 'Por oportunidade', ['Percebe uma demanda e decide empreender', 'Mais planejamento'], 'Por necessidade', ['Empreende por falta de alternativa de renda', 'Costuma ter menos preparo']),
          C('🧭', 'Características do perfil', '<ul><li>Iniciativa e persistência</li><li>Busca de informações</li><li>Planejamento e metas</li><li>Assumir riscos <b>calculados</b></li><li>Rede de contatos</li></ul><p><b>Intraempreendedor</b>: quem empreende <b>dentro</b> de uma empresa, propondo e liderando novos projetos.</p>'),
          V('Intraempreendedorismo é empreender dentro de uma organização em que já se trabalha.', true, 'Verdadeiro. O intraempreendedor cria e lidera inovações na própria empresa.')
        ],
        quiz: [
          Q('Uma desenvolvedora percebe que pequenos salões não têm agenda on-line e cria um app para isso. Ela empreende por:', ['oportunidade', 'necessidade', 'obrigação legal', 'acaso puro'], 0, 'Identificou uma demanda de mercado.'),
          Q('Um funcionário propõe e lidera um novo serviço dentro da empresa onde trabalha. Ele é um:', ['intraempreendedor', 'concorrente', 'investidor-anjo', 'fornecedor'], 0, 'Empreende dentro da própria organização.'),
          Q('Assumir riscos calculados significa:', ['avaliar possibilidades e consequências antes de decidir', 'arriscar tudo sem análise', 'evitar qualquer risco', 'deixar outros decidirem'], 0, 'O empreendedor analisa antes de arriscar.'),
          Q('Qual característica é típica do perfil empreendedor?', ['Persistência diante de obstáculos', 'Desistir no primeiro erro', 'Evitar contato com clientes', 'Nunca planejar'], 0, 'Persistência é uma das marcas mais citadas.')
        ]
      },
      {
        id: 'emp-2', ico: '💡', title: 'Inovação', topic: 'Incremental, radical, disruptiva e tipos de inovação',
        lesson: [
          K('Graus de inovação', 'Incremental', ['<b>Melhora</b> algo que já existe', 'Ex.: nova versão de um app com mais recursos'], 'Radical / disruptiva', ['Cria algo <b>novo</b> ou muda o mercado', 'Ex.: streaming mudando o mercado de locadoras']),
          C('🧩', 'Onde inovar', '<ul><li><b>Produto</b>: o que se oferece</li><li><b>Processo</b>: como se produz ou entrega</li><li><b>Modelo de negócio</b>: como se ganha dinheiro (ex.: assinatura)</li><li><b>Marketing</b>: como se comunica e vende</li></ul>'),
          T('Inovar ≠ inventar', '<p>Inovação é ideia que <b>chega ao mercado</b> e gera valor. Uma invenção que ninguém usa ainda não é inovação.</p>'),
          V('Lançar a versão 2.0 de um aplicativo com melhorias de desempenho é inovação incremental.', true, 'Verdadeiro. Melhora algo que já existe.')
        ],
        quiz: [
          Q('Os aplicativos de transporte por celular mudaram profundamente o mercado de táxis. Isso é um exemplo de inovação:', ['disruptiva', 'incremental', 'inexistente', 'apenas estética'], 0, 'Alterou a forma de funcionamento do mercado.'),
          Q('Uma empresa troca a venda de licenças por assinatura mensal do mesmo software. Ela inovou principalmente no:', ['modelo de negócio', 'hardware', 'logotipo', 'idioma'], 0, 'Mudou a forma de gerar receita.'),
          Q('Automatizar a emissão de notas fiscais para reduzir erros e tempo é inovação de:', ['processo', 'produto', 'marca', 'embalagem'], 0, 'Mudou a forma de fazer, não o que se vende.'),
          Q('A diferença entre invenção e inovação é que a inovação:', ['chega ao mercado e gera valor', 'nunca é usada', 'é sempre um objeto físico', 'só ocorre em grandes empresas'], 0, 'Inovação é invenção aplicada com resultado.')
        ]
      },
      {
        id: 'emp-3', ico: '🗂️', title: 'Modelo de negócio e MVP', topic: 'Business Model Canvas e Lean Startup',
        lesson: [
          C('🗂️', 'Business Model Canvas', '<p>Uma página com <b>9 blocos</b>:</p><ul><li>Segmentos de clientes • Proposta de valor • Canais • Relacionamento</li><li>Fontes de receita • Recursos-chave • Atividades-chave</li><li>Parcerias-chave • Estrutura de custos</li></ul>'),
          C('🧪', 'MVP', '<p><b>Produto Mínimo Viável</b>: a versão mais simples que permite <b>testar a ideia com clientes reais</b>. Pode ser uma página de cadastro, um protótipo clicável ou um serviço feito “à mão”.</p>'),
          C('🔁', 'Lean Startup', '<p>Ciclo <b>construir → medir → aprender</b>. Se os dados mostram que a hipótese estava errada, <b>pivote</b> (mude a direção).</p>'),
          V('O MVP precisa ter todas as funcionalidades planejadas antes de ser mostrado a clientes.', false, 'Falso. A ideia é testar cedo, com o mínimo necessário para aprender.')
        ],
        quiz: [
          Q('No Business Model Canvas, o bloco que descreve o problema que o negócio resolve e o benefício entregue é a:', ['proposta de valor', 'estrutura de custos', 'parcerias-chave', 'fontes de receita'], 0, 'A proposta de valor é o “porquê” o cliente escolheria você.'),
          Q('Antes de programar um app de aulas particulares, uma equipe cria uma página simples para ver quantas pessoas se cadastram. Isso é um:', ['MVP', 'balanço patrimonial', 'contrato social', 'kernel'], 0, 'É a versão mínima para testar o interesse real.'),
          Q('O ciclo da Lean Startup é:', ['construir, medir e aprender', 'planejar por anos e lançar', 'vender, cobrar e fechar', 'copiar, colar e publicar'], 0, 'Aprende-se rápido com dados reais.'),
          Q('Mudar a estratégia do negócio depois que os testes mostraram que a hipótese inicial estava errada chama-se:', ['pivotar', 'falir', 'patentear', 'compilar'], 0, 'Pivotar é mudar a direção com base no aprendizado.')
        ]
      },
      {
        id: 'emp-4', ico: '💰', title: 'Custos e ponto de equilíbrio', topic: 'Custos fixos e variáveis, margem e ponto de equilíbrio',
        lesson: [
          K('Tipos de custo', 'Fixos', ['<b>Não mudam</b> com a quantidade vendida', 'Aluguel, salários, assinatura de servidor'], 'Variáveis', ['<b>Crescem</b> com a quantidade vendida', 'Matéria-prima, taxas por venda, frete']),
          C('⚖️', 'Ponto de equilíbrio', '<p>Quantidade em que a receita <b>paga todos os custos</b> (lucro zero).</p><p><b>PE = Custos fixos ÷ (Preço − Custo variável unitário)</b></p><p>O denominador é a <b>margem de contribuição</b> de cada unidade.</p>'),
          S('calc', 'Simulador: ponto de equilíbrio', { calc: 'equilibrio' }),
          T('Exemplo', '<p>CF = R$ 6.000, preço = R$ 50, CV = R$ 20 → margem R$ 30 → PE = 6.000 ÷ 30 = <b>200 unidades</b> por mês.</p>'),
          V('O aluguel do escritório é um custo variável.', false, 'Falso. Ele não muda com a quantidade vendida: é custo fixo.')
        ],
        quiz: [
          Q('Uma startup tem custos fixos de R$ 9.000 por mês, vende uma assinatura a R$ 40 e tem custo variável de R$ 10 por assinante. O ponto de equilíbrio é:', ['300 assinantes', '225 assinantes', '900 assinantes', '180 assinantes'], 0, 'Margem = 40 − 10 = 30; 9.000 ÷ 30 = 300.'),
          Q('Qual destes é um custo variável para uma loja on-line?', ['Frete de cada pedido', 'Aluguel do galpão', 'Salário fixo do contador', 'Mensalidade do domínio'], 0, 'O frete aumenta conforme o número de pedidos.'),
          Q('A margem de contribuição unitária é:', ['preço de venda menos custo variável unitário', 'custo fixo dividido por 12', 'preço mais impostos', 'o lucro total do ano'], 0, 'É quanto cada unidade contribui para pagar os custos fixos.'),
          Q('Se a empresa vende MENOS que o ponto de equilíbrio, ela tem:', ['prejuízo', 'lucro', 'lucro máximo', 'custo zero'], 0, 'As receitas não cobrem todos os custos.')
        ]
      }
    ]
  }
];

const FC_RAW = [
  ['rpe-1', 'As 4 etapas de Pólya', 'Compreender → planejar → executar → verificar'],
  ['rpe-1', 'Antes de calcular, anote', '<b>Dados</b> com unidades, <b>incógnita</b>, <b>hipóteses</b> e um <b>esquema</b>.'],
  ['rpe-2', 'Unidades de base do SI', 'metro, quilograma, segundo, ampere, kelvin, mol e candela'],
  ['rpe-2', 'km/h ↔ m/s', 'km/h ÷ 3,6 = m/s • m/s × 3,6 = km/h'],
  ['rpe-3', 'Notação científica', '<b>a × 10ⁿ</b>, com 1 ≤ a &lt; 10. Ex.: 0,00045 = 4,5 × 10⁻⁴'],
  ['rpe-3', 'Potências de 10', 'Multiplicar: <b>soma</b> expoentes • Dividir: <b>subtrai</b>'],
  ['rpe-4', 'Análise dimensional', 'Os dois lados de uma equação precisam ter as <b>mesmas unidades</b>.'],
  ['rpe-4', 'Newton', '1 N = 1 <b>kg·m/s²</b>'],
  ['qui-1', 'Z e A', '<b>Z</b> = prótons • <b>A</b> = prótons + nêutrons'],
  ['qui-1', 'Isótopo × íon', '• Isótopo: mesmo Z, nêutrons diferentes<br>• Íon: ganhou (ânion) ou perdeu (cátion) elétrons'],
  ['qui-2', 'Tipos de ligação', '• Iônica: transfere<br>• Covalente: compartilha<br>• Metálica: elétrons livres'],
  ['qui-2', 'Semicondutor', 'Condutividade intermediária, controlada por <b>dopagem</b>. Ex.: silício.'],
  ['qui-3', 'Mol', '<b>6,02 × 10²³</b> partículas (constante de Avogadro)'],
  ['qui-3', 'Massa molar da água', 'H₂O = 2 × 1 + 16 = <b>18 g/mol</b>'],
  ['qui-4', 'Corrosão do ferro', 'Precisa de <b>oxigênio e água</b>. Proteção: pintura, galvanização (zinco), ânodo de sacrifício.'],
  ['qui-4', 'Polímero', 'Cadeia longa de unidades repetidas (<b>monômeros</b>): plásticos, borrachas, fibras.'],
  ['ieng-1', 'Trade-off', 'Ganhar algo abrindo mão de outra coisa (ex.: prazo × recursos).'],
  ['ieng-1', 'Engenharia de Software', 'Requisitos, projeto, código, testes, implantação e manutenção <b>com qualidade</b>.'],
  ['ieng-2', 'Requisito funcional × não funcional', '• Funcional: o que o sistema <b>faz</b><br>• Não funcional: <b>como</b> deve ser (desempenho, segurança)'],
  ['ieng-2', 'Ciclo de projeto', 'Problema → requisitos → alternativas → protótipo → teste → <b>iteração</b>'],
  ['ieng-3', 'ABNT', 'Publica as normas técnicas brasileiras (<b>NBR</b>).'],
  ['ieng-3', 'LGPD', 'Lei 13.709/2018: regras para o tratamento de <b>dados pessoais</b>.'],
  ['ieng-4', 'Estrutura do relatório técnico', 'Introdução • metodologia • resultados • discussão • conclusão • referências'],
  ['ieng-4', 'Métodos ágeis', 'Entregas em <b>ciclos curtos</b>, com feedback frequente.'],
  ['pc-1', '4 pilares do pensamento computacional', 'Decomposição • padrões • abstração • algoritmo'],
  ['pc-1', 'Abstração', 'Manter o <b>essencial</b> e ignorar detalhes irrelevantes.'],
  ['pc-2', 'Símbolos do fluxograma', 'Oval: início/fim • Retângulo: processo • Losango: decisão • Paralelogramo: entrada/saída'],
  ['pc-2', 'Estruturas básicas', 'Sequência, decisão e repetição'],
  ['pc-3', 'E, OU, NÃO', '• E: V só se <b>todas</b> V<br>• OU: V se <b>alguma</b> V<br>• NÃO: inverte'],
  ['pc-3', 'XOR', 'Verdadeiro quando as entradas são <b>diferentes</b>.'],
  ['pc-4', 'Depurar', 'Reproduzir → isolar → corrigir → <b>testar de novo</b>'],
  ['pc-4', 'Bons casos de teste', 'Valores <b>normais</b>, <b>de limite</b> e <b>inválidos</b>.'],
  ['pei-1', 'Tripé universitário', 'Ensino, pesquisa e extensão'],
  ['pei-1', 'Curricularização da extensão', 'Resolução CNE/CES 7/2018: mínimo de <b>10%</b> da carga horária.'],
  ['pei-2', 'Diagnóstico', 'Escutar, mapear necessidades, recursos, parceiros e riscos.'],
  ['pei-2', 'ODS', '<b>17</b> Objetivos de Desenvolvimento Sustentável da Agenda 2030 (ONU).'],
  ['pei-3', 'Objetivo SMART', 'Específico, mensurável, alcançável, relevante e com prazo.'],
  ['pei-3', 'Devolutiva', 'Apresentar os resultados para a comunidade que participou.'],
  ['eg-1', 'Folha A4', '<b>210 × 297 mm</b>. A0 tem área de 1 m².'],
  ['eg-1', 'Tipos de linha', 'Contínua grossa: visível • Tracejada: oculta • Traço e ponto: eixo'],
  ['eg-2', 'Escala', '1:50 redução • 1:1 natural • 2:1 ampliação'],
  ['eg-2', 'Cota em desenho escalado', 'Sempre a <b>medida real</b>, em mm.'],
  ['eg-3', '1º diedro', 'Vista superior <b>abaixo</b> da frontal; lateral esquerda à <b>direita</b>.'],
  ['eg-3', 'Vistas principais', 'Frontal, superior e lateral'],
  ['eg-4', 'Isométrica', 'Três eixos a <b>120°</b>.'],
  ['eg-4', 'Regra de ouro da cotagem', 'Cada medida aparece <b>uma única vez</b>.'],
  ['alg-1', 'Tipos de dados', 'inteiro • real • texto • lógico'],
  ['alg-1', 'Trocar dois valores', 'aux ← a • a ← b • b ← aux'],
  ['alg-2', 'mod', 'Resto da divisão. 17 mod 5 = 2. Par: n mod 2 = 0'],
  ['alg-2', 'Precedência', '* / mod antes de + −. Parênteses primeiro.'],
  ['alg-3', 'se / senão', 'Executa <b>só um</b> dos caminhos.'],
  ['alg-3', 'Faixas de valores', 'Teste do mais restrito para o mais amplo (≥ 9, depois ≥ 7…).'],
  ['alg-4', 'enquanto × para', '• enquanto: repetições indefinidas, testa antes<br>• para: número conhecido de repetições'],
  ['alg-4', 'Contador × acumulador', 'cont ← cont + 1 • soma ← soma + x (inicie com 0)'],
  ['alg-5', 'Encontrar o maior', 'Comece com o 1º valor; se x > maior, maior ← x.'],
  ['alg-5', 'Média', 'Some no laço e divida <b>depois</b> do laço.'],
  ['aoc-1', 'Bit e byte', '1 byte = 8 bits = 256 valores (0 a 255)'],
  ['aoc-1', 'Binário → decimal', 'Pesos 128, 64, 32, 16, 8, 4, 2, 1. Ex.: 1011 = 11'],
  ['aoc-2', 'Partes da CPU', 'ULA (contas) • Unidade de controle (coordena) • Registradores'],
  ['aoc-2', 'Ciclo de instrução', 'Busca → decodifica → executa'],
  ['aoc-3', 'Hierarquia de memória', 'Registradores → cache → RAM → SSD/HD'],
  ['aoc-3', 'Volátil', 'Perde os dados sem energia: registradores, cache, RAM.'],
  ['aoc-4', 'Funções do SO', 'Processos, memória, arquivos, dispositivos e segurança.'],
  ['aoc-4', 'Programa × processo', 'Programa: arquivo parado • Processo: programa em execução'],
  ['emp-1', 'Oportunidade × necessidade', 'Oportunidade: enxerga demanda • Necessidade: falta de alternativa'],
  ['emp-1', 'Intraempreendedor', 'Empreende <b>dentro</b> da empresa em que trabalha.'],
  ['emp-2', 'Incremental × disruptiva', 'Incremental: melhora • Disruptiva: muda o mercado'],
  ['emp-2', 'Inovação × invenção', 'Inovação é a ideia que <b>chega ao mercado</b> e gera valor.'],
  ['emp-3', 'Business Model Canvas', '9 blocos: clientes, proposta de valor, canais, relacionamento, receitas, recursos, atividades, parcerias e custos.'],
  ['emp-3', 'Lean Startup', 'Construir → medir → aprender. MVP para testar cedo.'],
  ['emp-4', 'Ponto de equilíbrio', '<b>PE = CF ÷ (preço − CV)</b>'],
  ['emp-4', 'Custo fixo × variável', 'Fixo: não muda com as vendas • Variável: cresce com as vendas']
];

window.APROVAE_CONCURSOS = window.APROVAE_CONCURSOS || {};
window.APROVAE_CONCURSOS['engenharia-software-p1'] = {
  id: 'engenharia-software-p1',
  produto: 'graduacao',
  curso: 'engenharia-software',
  periodo: 1,
  mascot: 'notebook',
  nome: 'Engenharia de Software',
  cargoGrupo: '1º período • 9 disciplinas',
  edital: 'Matriz do 1º período',
  banca: 'Graduação',
  prova: null,
  semProva: true,
  aulaLabel: 'AULA',
  cargos: { p1: { nome: '1º período', curto: '1º período', emoji: '💻', turnoTxt: 'Engenharia de Software' } },
  areas: AREAS,
  scoring: 'areas',
  metaAcerto: 0.7,
  notaInfo: 'Cada disciplina é acompanhada separadamente. A meta de 70% de acertos é um alvo de estudo do Aprovaê, não a nota da faculdade.',
  dica: '<b>Dica do Lumi:</b> estude um pouco de cada disciplina por semana. Algoritmos e Pensamento Computacional se ajudam muito!',
  guia: {
    titulo: 'O 1º período em 1 minuto',
    nav: 'Sobre o período',
    sub: 'Engenharia de Software • disciplinas, objetivos e como usar a trilha',
    destaques: [
      { rotulo: 'DISCIPLINAS', valor: '9', texto: 'uma unidade da trilha para cada' },
      { rotulo: 'FASES', valor: '36', texto: 'aula curta + exercícios em cada' }
    ],
    cards: [
      { titulo: 'COMO ESTUDAR', linhas: [['Aula', 'Explicações, dicas e simulações'], ['Exercícios', '4 questões por fase'], ['Desafio', 'Fecha cada disciplina'], ['Flashcards', 'Revisão rápida dos conceitos']] }
    ],
    estruturaTitulo: 'DISCIPLINAS DO 1º PERÍODO',
    aviso: 'As ementas variam entre instituições. Use a trilha junto com o plano de ensino do seu professor.',
    rodape: 'Conteúdo de apoio ao estudo, preparado pelo Aprovaê.'
  },
  units: UNITS,
  flashcards: FC_RAW
};

window.APROVAE_CURSOS = window.APROVAE_CURSOS || {};
window.APROVAE_CURSOS['engenharia-software'] = {
  id: 'engenharia-software',
  nome: 'Engenharia de Software',
  ico: '💻',
  mascot: 'notebook',
  desc: 'Do raciocínio lógico à construção de sistemas de qualidade.',
  periodos: { 1: 'engenharia-software-p1' },
  totalPeriodos: 8
};
})();
