/* =====================================================================
   Aprovaê+ENCCEJA — Encceja 2027 • Ensino Médio
   Aulas, questões e flashcards ORIGINAIS, escritos para o Aprovaê.
   Base de conteúdo: guia de estudos enviado pela equipe, conferido com
   as matrizes e editais do Inep. Os critérios oficiais de 2027 valem
   quando o edital for publicado.
   ===================================================================== */
(function () {
const Q = (q, o, a, e) => ({ q, o, a, e });
const C = (ico, title, body) => ({ t: 'concept', ico, title, body });
const T = (title, body) => ({ t: 'tip', title, body });
const V = (statement, answer, why) => ({ t: 'check', statement, answer, why });
const K = (title, lh, li, rh, ri) => ({ t: 'compare', title, lh, li, rh, ri });
const W = (title, tema, apoio, checklist) => ({ t: 'write', title, tema, apoio, checklist });

const AREAS = {
  ling: { nome: 'Linguagens, Códigos e suas Tecnologias', curto: 'Linguagens', q: 30, cor: '#8b5cf6' },
  mat:  { nome: 'Matemática e suas Tecnologias', curto: 'Matemática', q: 30, cor: '#f97316' },
  nat:  { nome: 'Ciências da Natureza e suas Tecnologias', curto: 'Natureza', q: 30, cor: '#0d9488' },
  hum:  { nome: 'Ciências Humanas e suas Tecnologias', curto: 'Humanas', q: 30, cor: '#2f80ed' },
  red:  { nome: 'Redação', curto: 'Redação', q: 1, cor: '#e11d74' }
};

const UNITS = [
  /* =================================================================
     UNIDADE 1 — LINGUAGENS
     ================================================================= */
  {
    id: 'ling', mascot: 'estudando', area: 'ling', c: '#8b5cf6', cd: '#6d3fd6', emoji: '📚', theme: 'letras',
    title: 'Linguagens', sub: 'Português, literatura, artes, inglês, espanhol e educação física',
    fases: [
      {
        id: 'ling-1', ico: '🔎', title: 'Interpretação de texto', topic: 'Tema, tese, inferência, fato e opinião',
        lesson: [
          C('🔎', 'Ler antes de responder', '<p>Antes de olhar as alternativas, descubra quatro coisas:</p><ul><li><b>Assunto</b>: do que o texto fala</li><li><b>Ideia principal</b>: o que ele diz sobre isso</li><li><b>Objetivo</b>: informar, convencer, divertir, orientar?</li><li><b>Público</b>: para quem foi escrito</li></ul><p>Título, imagem, fonte e data são <span class="hl">pistas valiosas</span>.</p>'),
          K('Tema × Tese', 'Tema', ['O <b>assunto geral</b>', 'Ex.: “o uso do celular na escola”'], 'Tese', ['A <b>opinião central</b> defendida', 'Ex.: “o celular deve ser usado só em atividades orientadas”']),
          K('Explícito × Inferência', 'Informação explícita', ['Está <b>escrita</b> no texto', 'Você só precisa localizar'], 'Inferência', ['Conclusão construída a partir de <b>pistas</b>', 'Não está escrita, mas o texto <b>permite</b> concluir']),
          C('⚖️', 'Fato, opinião, ironia e humor', '<ul><li><b>Fato</b>: pode ser verificado (“a cidade tem 3 hospitais”)</li><li><b>Opinião</b>: expressa avaliação (“a cidade é a mais acolhedora do estado”)</li><li><b>Ironia</b>: diz uma coisa querendo dizer outra, muitas vezes para criticar</li><li><b>Humor</b>: costuma nascer da ambiguidade ou da quebra de expectativa</li></ul>'),
          T('Cuidado com as pegadinhas', '<p>Desconfie de alternativas que <b>exageram</b> (“sempre”, “todos”, “nunca”), que dizem <b>mais</b> do que o texto ou que trazem uma <b>verdade de fora</b> do texto.</p>'),
          V('“Choveu 80 mm ontem na capital” é uma opinião.', false, 'Falso. É um fato: pode ser medido e verificado.')
        ],
        quiz: [
          Q('Leia: “Hortas comunitárias têm se espalhado pelos bairros. Além de oferecer alimento fresco, elas aproximam vizinhos que antes nem se cumprimentavam.” A ideia principal do trecho é que as hortas comunitárias:', ['trazem benefícios alimentares e também de convivência', 'substituem completamente os supermercados', 'só existem em bairros ricos', 'causam conflitos entre os moradores'], 0, 'O texto destaca dois ganhos: alimento fresco e aproximação entre vizinhos. As outras alternativas não aparecem no trecho.'),
          Q('Em um artigo de opinião, a ideia central que o autor defende e tenta comprovar chama-se:', ['tese', 'legenda', 'fonte', 'título'], 0, 'Tese é o ponto de vista central de um texto argumentativo.'),
          Q('Leia: “Marina chegou com o guarda-chuva pingando e os sapatos encharcados.” A partir das pistas, pode-se inferir que:', ['estava chovendo no caminho de Marina', 'Marina perdeu o guarda-chuva', 'Marina estava em casa o dia todo', 'o tempo estava seco e ensolarado'], 0, 'Guarda-chuva pingando e sapatos molhados são pistas de chuva. A conclusão não está escrita: é uma inferência.'),
          Q('Assinale a frase que expressa uma OPINIÃO:', ['O parque municipal é o lugar mais agradável da cidade.', 'O parque municipal abre às 6 horas.', 'O parque municipal tem duas quadras de esporte.', 'O parque municipal foi inaugurado em 2010.'], 0, '“Mais agradável” é uma avaliação pessoal. As outras frases trazem dados que podem ser conferidos.'),
          Q('Depois de esperar duas horas na fila, um cliente diz: “Que atendimento rápido, hein!”. A fala do cliente é um exemplo de:', ['ironia', 'informação técnica', 'linguagem científica', 'instrução'], 0, 'Ele diz o contrário do que pensa para criticar a demora: é ironia.')
        ]
      },
      {
        id: 'ling-2', ico: '📰', title: 'Gêneros textuais', topic: 'Finalidade e características dos gêneros',
        lesson: [
          C('📰', 'Cada texto tem uma missão', '<p>Gêneros textuais são os textos do dia a dia. O segredo é perguntar: <span class="hl">para que este texto existe?</span></p>'),
          K('Informar × Opinar', 'Para informar', ['<b>Notícia</b>: relata um fato recente', '<b>Reportagem</b>: aprofunda o assunto, com dados e entrevistas', '<b>Verbete</b>: explica um termo'], 'Para opinar ou convencer', ['<b>Artigo de opinião</b>: defende uma tese', '<b>Anúncio</b>: convence a comprar ou aderir', '<b>Carta do leitor</b>: comenta e opina']),
          K('Contar × Orientar', 'Para contar e refletir', ['<b>Crônica</b>: fato do cotidiano, linguagem leve', '<b>Conto</b>: narrativa curta de ficção', '<b>Charge e tirinha</b>: imagem + texto para criticar ou fazer rir'], 'Para orientar', ['<b>Receita</b> e <b>manual</b>: passos e instruções', '<b>Bula</b>: uso de um medicamento', 'Verbos no <b>imperativo</b>: “misture”, “ligue”']),
          T('Carta e e-mail', '<p>A linguagem muda conforme o <b>destinatário</b> e a <b>finalidade</b>: para um amigo, informal; para uma empresa ou órgão público, formal.</p>'),
          V('A finalidade principal de uma notícia é defender a opinião do jornalista.', false, 'Falso. A notícia busca informar um fato de interesse público.')
        ],
        quiz: [
          Q('Um texto traz a lista de ingredientes e frases como “bata os ovos” e “leve ao forno por 30 minutos”. Esse gênero é:', ['receita', 'crônica', 'notícia', 'artigo de opinião'], 0, 'Lista de materiais e verbos no imperativo indicam um texto que orienta: a receita.'),
          Q('Um desenho publicado no jornal mostra um político prometendo obras em cima de uma pilha de promessas antigas. Esse gênero, que critica um fato atual com humor, é a:', ['charge', 'bula', 'receita', 'ata'], 0, 'A charge comenta e critica fatos da atualidade, combinando imagem e humor.'),
          Q('A finalidade predominante de um anúncio publicitário é:', ['convencer o leitor a comprar ou aderir a algo', 'relatar fatos de forma neutra', 'ensinar a montar um aparelho', 'registrar decisões de uma reunião'], 0, 'O anúncio busca persuadir o público.'),
          Q('Um texto narra, em linguagem leve, uma conversa engraçada ouvida no ônibus e termina com uma reflexão sobre a pressa da vida moderna. O gênero é:', ['crônica', 'manual de instruções', 'verbete de dicionário', 'notícia'], 0, 'Fato do cotidiano + tom leve + reflexão são marcas da crônica.'),
          Q('Ao escrever um e-mail para a prefeitura pedindo conserto de uma rua, a linguagem mais adequada é:', ['formal e clara', 'cheia de gírias', 'com abreviações de mensagens rápidas', 'em versos rimados'], 0, 'O destinatário é um órgão público e a finalidade é um pedido: a linguagem deve ser formal e objetiva.')
        ]
      },
      {
        id: 'ling-3', ico: '🔗', title: 'Coesão e gramática', topic: 'Conectivos, classes de palavras, concordância e vírgula',
        lesson: [
          K('Coesão × Coerência', 'Coesão', ['As <b>ligações</b> entre as partes do texto', 'Feita com pronomes, sinônimos e conectivos'], 'Coerência', ['O <b>sentido lógico</b> do texto', 'As ideias não se contradizem']),
          C('🔗', 'Conectivos e o que eles indicam', '<ul><li><b>Mas, porém</b>: oposição</li><li><b>Porque, pois</b>: causa</li><li><b>Portanto, logo</b>: conclusão</li><li><b>Além disso, também</b>: adição</li><li><b>Embora, ainda que</b>: concessão</li><li><b>Por exemplo</b>: exemplificação</li></ul>'),
          C('🧱', 'Classes de palavras', '<ul><li><b>Substantivo</b>: nomeia (casa, alegria)</li><li><b>Adjetivo</b>: caracteriza (casa <i>antiga</i>)</li><li><b>Verbo</b>: ação, estado ou fenômeno (correr, ser, chover)</li><li><b>Advérbio</b>: modifica verbo, adjetivo ou advérbio (<i>muito</i> cedo)</li><li><b>Pronome</b>: retoma ou acompanha nomes (ele, este, meu)</li></ul>'),
          C('✍️', 'Concordância e vírgula', '<p><b>Concordância verbal</b>: o verbo concorda com o sujeito (“Os alunos <b>chegaram</b>”).</p><p><b>Concordância nominal</b>: artigo, adjetivo e pronome concordam com o substantivo (“<b>as</b> salas <b>limpas</b>”).</p><p>A vírgula separa itens e intercalações, mas <span class="hl">não separa sujeito e verbo</span>.</p>'),
          V('Em “A professora, explicou a matéria”, a vírgula está correta.', false, 'Falso. A vírgula está separando o sujeito (a professora) do verbo (explicou).')
        ],
        quiz: [
          Q('Em “Estudei a semana toda; portanto, estou confiante para a prova”, o conectivo “portanto” indica:', ['conclusão', 'oposição', 'causa', 'tempo'], 0, '“Portanto” apresenta a conclusão do que foi dito antes.'),
          Q('Em “O ônibus atrasou, mas cheguei a tempo”, a palavra “mas” pode ser substituída, sem mudar o sentido, por:', ['porém', 'porque', 'portanto', 'além disso'], 0, '“Mas” e “porém” indicam oposição.'),
          Q('Na frase “Os moradores reformaram a praça antiga”, a palavra “antiga” é um:', ['adjetivo', 'verbo', 'advérbio', 'pronome'], 0, '“Antiga” caracteriza o substantivo “praça”: é adjetivo.'),
          Q('Assinale a frase em que a concordância verbal está correta:', ['As crianças brincaram no quintal.', 'As crianças brincou no quintal.', 'A criança brincaram no quintal.', 'As criança brincaram no quintal.'], 0, 'O verbo concorda com o sujeito no plural: “as crianças brincaram”.'),
          Q('Assinale a frase com pontuação correta:', ['Comprei arroz, feijão, ovos e leite.', 'O diretor, anunciou as férias.', 'Comprei, arroz feijão ovos e leite.', 'Os alunos do turno da noite, saíram cedo.'], 0, 'Na enumeração, a vírgula separa os itens. Nas outras, a vírgula separa sujeito e verbo ou está fora de lugar.')
        ]
      },
      {
        id: 'ling-4', ico: '🗣️', title: 'Variação e figuras', topic: 'Variação linguística e figuras de linguagem',
        lesson: [
          C('🗣️', 'Ninguém fala “errado”, fala diferente', '<p>A língua <b>varia</b> conforme a <b>região</b>, a <b>idade</b>, o <b>grupo social</b> e a <b>situação</b>.</p><p>O importante é a <span class="hl">adequação ao contexto</span>: numa entrevista de emprego, linguagem mais formal; com amigos, mais informal.</p><p>Diferenças na fala <b>não justificam preconceito</b> linguístico.</p>'),
          C('🎨', 'Figuras de linguagem', '<ul><li><b>Metáfora</b>: comparação sem “como” (“Ele é um leão no trabalho”)</li><li><b>Personificação</b>: ação humana para coisas (“O vento sussurrava”)</li><li><b>Hipérbole</b>: exagero (“Chorei um rio de lágrimas”)</li><li><b>Antítese</b>: ideias opostas (“Entre o riso e o choro”)</li><li><b>Ironia</b>: dizer o contrário para criticar</li></ul>'),
          T('Metáfora × comparação', '<p>Com “como”, “tal qual”, “parece”: <b>comparação</b>. Sem o conectivo: <b>metáfora</b>.</p>'),
          V('Diferenças de sotaque entre regiões mostram que um grupo fala “certo” e outro fala “errado”.', false, 'Falso. São variações legítimas da língua. O que importa é a adequação à situação.')
        ],
        quiz: [
          Q('Um nordestino diz “aperreado” e um gaúcho diz “apurado” para expressar pressa ou aflição. Essa diferença é um exemplo de variação:', ['regional', 'histórica', 'de gênero textual', 'ortográfica'], 0, 'Palavras diferentes conforme a região caracterizam a variação regional (geográfica).'),
          Q('Em uma entrevista de emprego, o candidato evita gírias e fala de modo mais cuidadoso. Ele demonstra:', ['adequação da linguagem à situação', 'preconceito linguístico', 'desconhecimento da língua', 'uso de linguagem técnica'], 0, 'Ajustar a fala ao contexto é adequação linguística.'),
          Q('“A cidade acordou preguiçosa naquela manhã de domingo.” A figura de linguagem presente é:', ['personificação', 'hipérbole', 'antítese', 'comparação'], 0, 'A cidade recebe ações e características humanas (acordar, ter preguiça).'),
          Q('“Já te avisei um milhão de vezes!” A figura de linguagem é:', ['hipérbole', 'metáfora', 'personificação', 'antítese'], 0, 'O exagero intencional caracteriza a hipérbole.'),
          Q('“Minha avó é uma enciclopédia de receitas.” Nessa frase há:', ['metáfora', 'comparação com “como”', 'antítese', 'ironia'], 0, 'A avó é comparada a uma enciclopédia sem conectivo comparativo: metáfora.')
        ]
      },
      {
        id: 'ling-5', ico: '🎭', title: 'Literatura e artes', topic: 'Escolas literárias e manifestações artísticas',
        lesson: [
          C('📜', 'Literatura conta a história de um povo', '<p>Cada obra nasce em um <b>contexto</b>. Relacione a linguagem da obra com a época em que foi escrita.</p>'),
          K('Escolas literárias: do século XVII ao XIX', 'Escola', ['<b>Barroco</b>', '<b>Arcadismo</b>', '<b>Romantismo</b>', '<b>Realismo / Naturalismo</b>'], 'Marca principal', ['Conflito entre fé e prazer, linguagem rebuscada', 'Vida simples no campo, natureza idealizada', 'Emoção, nacionalismo, idealização do amor', 'Crítica social, análise da sociedade, objetividade']),
          K('Do fim do século XIX até hoje', 'Escola', ['<b>Parnasianismo</b>', '<b>Simbolismo</b>', '<b>Modernismo</b>', '<b>Contemporânea</b>'], 'Marca principal', ['Forma perfeita, rima e métrica', 'Musicalidade, mistério, espiritualidade', 'Liberdade de forma, linguagem do cotidiano, Semana de 1922', 'Diversidade de vozes, temas urbanos e sociais']),
          C('🎨', 'Artes', '<p>Nas artes visuais, música, dança, teatro e cinema, observe <b>técnica</b>, <b>materiais</b>, <b>função social</b>, <b>identidade</b> e <b>diversidade cultural</b>.</p><p>Arte também é <span class="hl">registro histórico</span>: grafite, cordel e artesanato contam a vida de comunidades.</p>'),
          V('O Modernismo brasileiro valorizou a liberdade de forma e a linguagem do cotidiano.', true, 'Verdadeiro. Os modernistas romperam com regras rígidas de métrica e rima.')
        ],
        quiz: [
          Q('Um poema valoriza a vida simples no campo, com pastores e natureza tranquila, longe do agito da cidade. Essas características são típicas do:', ['Arcadismo', 'Modernismo', 'Realismo', 'Simbolismo'], 0, 'A idealização da vida campestre é marca do Arcadismo.'),
          Q('A Semana de Arte Moderna de 1922 é considerada marco do:', ['Modernismo', 'Barroco', 'Romantismo', 'Parnasianismo'], 0, 'A Semana de 1922, em São Paulo, é o marco inicial do Modernismo brasileiro.'),
          Q('Um romance analisa com objetividade os problemas sociais e o comportamento humano, fazendo crítica à sociedade da época. Essas são marcas do:', ['Realismo', 'Arcadismo', 'Simbolismo', 'Barroco'], 0, 'Objetividade e crítica social caracterizam o Realismo.'),
          Q('Poemas com forma rigorosa, rimas ricas e métrica perfeita, no estilo “arte pela arte”, pertencem ao:', ['Parnasianismo', 'Modernismo', 'Romantismo', 'Arcadismo'], 0, 'O culto à forma é a principal marca do Parnasianismo.'),
          Q('Um grafite pintado no muro de uma escola retrata a história do bairro e seus moradores. Essa obra mostra que a arte pode:', ['registrar a identidade e a memória de uma comunidade', 'existir apenas em museus', 'servir só para decoração', 'ser feita somente com tinta a óleo'], 0, 'A arte urbana também expressa identidade e memória coletiva.')
        ]
      },
      {
        id: 'ling-6', ico: '🌎', title: 'Inglês e espanhol', topic: 'Leitura, cognatos e falsos cognatos',
        lesson: [
          C('🌎', 'Você não precisa saber todas as palavras', '<p>A prova cobra <b>compreensão global</b> e <b>localização de informações</b>. Use:</p><ul><li><b>Título</b> e <b>imagens</b></li><li><b>Cognatos</b>: palavras parecidas com o português (<i>important</i>, <i>importante</i>)</li><li>O <b>contexto</b> da frase</li></ul><p>No Encceja, o participante responde questões de <b>inglês e de espanhol</b>.</p>'),
          K('Falsos cognatos que confundem', 'Inglês', ['<b>actually</b> = na verdade', '<b>pretend</b> = fingir', '<b>push</b> = empurrar', '<b>library</b> = biblioteca'], 'Espanhol', ['<b>embarazada</b> = grávida', '<b>exquisito</b> = delicioso, refinado', '<b>oficina</b> = escritório', '<b>polvo</b> = poeira']),
          C('🧩', 'Básico que ajuda muito', '<p><b>Inglês</b>: pronomes (I, you, he, she), verbo <i>to be</i>, presente e passado simples, <i>can</i> (poder), <i>must</i> (dever), comparativos (<i>bigger than</i>).</p><p><b>Espanhol</b>: artigos (el, la, los, las), pronomes, presente, pretérito e conectores (<i>pero</i> = mas, <i>además</i> = além disso).</p>'),
          V('Em espanhol, “oficina” significa o mesmo que em português.', false, 'Falso. “Oficina” em espanhol é escritório. É um falso cognato.')
        ],
        quiz: [
          Q('Em uma placa de porta em inglês está escrito “PUSH”. A pessoa deve:', ['empurrar a porta', 'puxar a porta', 'aguardar do lado de fora', 'tocar a campainha'], 0, '“Push” significa empurrar. Puxar seria “pull”.'),
          Q('Na frase “I thought it was easy, but actually it was very hard”, a palavra “actually” significa:', ['na verdade', 'atualmente', 'rapidamente', 'felizmente'], 0, '“Actually” é falso cognato: significa “na verdade”, não “atualmente”.'),
          Q('Um anúncio em espanhol diz: “Se busca empleado para oficina en el centro”. A vaga é para trabalhar em:', ['um escritório', 'uma oficina mecânica', 'uma escola', 'um hospital'], 0, '“Oficina”, em espanhol, quer dizer escritório.'),
          Q('Leia: “Water is essential for life. Drink at least eight glasses a day.” O texto recomenda:', ['beber água diariamente', 'economizar água no banho', 'evitar bebidas geladas', 'lavar os copos após o uso'], 0, '“Drink” (beba) e “water” (água), com “a day” (por dia), indicam a recomendação.'),
          Q('Em espanhol, “La comida estaba exquisita” significa que a comida estava:', ['deliciosa', 'estranha', 'estragada', 'fria'], 0, '“Exquisito” é falso cognato: significa delicioso, refinado.')
        ]
      },
      {
        id: 'ling-7', ico: '🤸', title: 'Educação Física', topic: 'Cultura corporal, saúde e convivência',
        lesson: [
          C('🤸', 'O corpo também é linguagem', '<p>Esportes, jogos, danças, lutas, ginásticas e brincadeiras são <span class="hl">manifestações culturais</span>: contam a história e a identidade de um povo.</p><p>Ex.: a capoeira une luta, dança e música e tem raízes afro-brasileiras.</p>'),
          K('Atividade física × Exercício físico', 'Atividade física', ['Qualquer <b>movimento</b> do corpo que gasta energia', 'Ex.: varrer a casa, ir a pé ao trabalho'], 'Exercício físico', ['Atividade <b>planejada e estruturada</b>, com objetivo', 'Ex.: treino de caminhada 3 vezes por semana']),
          C('💚', 'Práticas corporais e saúde', '<p>Movimentar-se ajuda a <b>saúde física e mental</b>, previne o <b>sedentarismo</b> e favorece o lazer.</p><p>As práticas também ensinam <b>respeito</b>, <b>cooperação</b> e <b>inclusão</b>: todos podem participar, com adaptações.</p>'),
          V('Caminhar até o trabalho todos os dias é uma forma de atividade física.', true, 'Verdadeiro. Todo movimento corporal que gasta energia é atividade física.')
        ],
        quiz: [
          Q('Um grupo faz musculação três vezes por semana, seguindo um plano com séries e repetições. Isso é um exemplo de:', ['exercício físico', 'sedentarismo', 'atividade apenas cultural', 'lazer passivo'], 0, 'Atividade planejada, estruturada e com objetivo é exercício físico.'),
          Q('A capoeira, que reúne luta, dança e música, é reconhecida como:', ['manifestação cultural de raízes afro-brasileiras', 'esporte criado na Europa', 'prática exclusivamente militar', 'jogo eletrônico'], 0, 'A capoeira é patrimônio cultural brasileiro com origem afro-brasileira.'),
          Q('Em uma aula, o professor adapta as regras do vôlei para que um aluno cadeirante também jogue. Essa atitude valoriza:', ['a inclusão', 'a competição a qualquer custo', 'a exclusão dos menos habilidosos', 'o sedentarismo'], 0, 'Adaptar regras para todos participarem é inclusão.'),
          Q('Passar muitas horas sentado, sem movimentar o corpo, caracteriza o:', ['sedentarismo', 'condicionamento físico', 'alongamento', 'aquecimento'], 0, 'Sedentarismo é a falta de atividade física regular.'),
          Q('A prática regular de atividades físicas pode contribuir para:', ['melhorar a saúde física e mental', 'substituir as vacinas', 'eliminar a necessidade de sono', 'aumentar o sedentarismo'], 0, 'O movimento regular beneficia o corpo e a mente.')
        ]
      }
    ]
  },

  /* =================================================================
     UNIDADE 2 — MATEMÁTICA
     ================================================================= */
  {
    id: 'mat', mascot: 'planejamento', area: 'mat', c: '#f97316', cd: '#c2570c', emoji: '🧮', theme: 'matematica',
    title: 'Matemática', sub: 'Contas do dia a dia, porcentagem, álgebra, geometria e estatística',
    fases: [
      {
        id: 'mat-1', ico: '➗', title: 'Números e operações', topic: 'Ordem das operações, frações e decimais',
        lesson: [
          C('➗', 'A ordem das contas', '<p>Em uma expressão, resolva nesta ordem:</p><ul><li>1º <b>parênteses</b></li><li>2º <b>potências e raízes</b></li><li>3º <b>multiplicações e divisões</b></li><li>4º <b>adições e subtrações</b></li></ul><p>Ex.: 2 + 3 × 4 = 2 + 12 = <span class="hl">14</span> (e não 20).</p>'),
          C('🍕', 'Fração de uma quantidade', '<p>Para calcular <b>3/4 de 80</b>: divida pelo de baixo e multiplique pelo de cima.</p><p>80 ÷ 4 = 20 → 20 × 3 = <span class="hl">60</span>.</p>'),
          C('➕', 'Somar frações', '<p>Deixe os denominadores <b>iguais</b>, depois some os numeradores.</p><p>1/3 + 1/6 → 2/6 + 1/6 = <span class="hl">3/6 = 1/2</span>.</p>'),
          T('Decimais no dia a dia', '<p>0,5 = metade • 0,25 = um quarto • 0,1 = um décimo. Para multiplicar por 10, “ande” a vírgula uma casa para a direita: 3,45 × 10 = 34,5.</p>'),
          V('O resultado de 10 − 2 × 3 é 24.', false, 'Falso. Primeiro a multiplicação: 2 × 3 = 6. Depois 10 − 6 = 4.')
        ],
        quiz: [
          Q('Qual é o resultado de 5 + 4 × 3?', ['17', '27', '12', '60'], 0, 'Primeiro a multiplicação: 4 × 3 = 12. Depois 5 + 12 = 17.'),
          Q('Uma pessoa gastou 2/5 de um salário de R$ 1.500,00 com aluguel. Quanto foi o aluguel?', ['R$ 600,00', 'R$ 300,00', 'R$ 750,00', 'R$ 900,00'], 0, '1.500 ÷ 5 = 300; 300 × 2 = 600.'),
          Q('O resultado de 1/2 + 1/4 é:', ['3/4', '2/6', '1/6', '2/4'], 0, '1/2 = 2/4. Então 2/4 + 1/4 = 3/4.'),
          Q('Qual é o valor da expressão (8 − 2) × 5?', ['30', '-2', '38', '18'], 0, 'Primeiro os parênteses: 8 − 2 = 6. Depois 6 × 5 = 30.'),
          Q('Um litro de leite custa R$ 4,75. Quanto custam 10 litros?', ['R$ 47,50', 'R$ 4,75', 'R$ 475,00', 'R$ 14,75'], 0, 'Multiplicar por 10: a vírgula anda uma casa para a direita. 4,75 × 10 = 47,50.')
        ]
      },
      {
        id: 'mat-2', ico: '⚖️', title: 'Razão e regra de três', topic: 'Proporção direta e inversa',
        lesson: [
          C('⚖️', 'Razão e proporção', '<p><b>Razão</b> compara duas grandezas: 3 meninas para 2 meninos = 3/2.</p><p><b>Proporção</b> é a igualdade entre duas razões: 3/2 = 6/4.</p>'),
          K('Direta × Inversa', 'Diretamente proporcional', ['As duas grandezas <b>sobem juntas</b>', 'Mais pães → mais farinha', 'Faça: divide e multiplica na mesma direção'], 'Inversamente proporcional', ['Uma <b>sobe</b>, a outra <b>desce</b>', 'Mais pedreiros → menos dias de obra', 'Faça: multiplique e divida “ao contrário”']),
          C('🧾', 'Exemplo direto', '<p>4 cadernos custam R$ 28. Quanto custam 7?</p><p>1 caderno: 28 ÷ 4 = 7. Então 7 cadernos: 7 × 7 = <span class="hl">R$ 49</span>.</p>'),
          C('👷', 'Exemplo inverso', '<p>3 pintores pintam uma casa em 8 dias. Em quantos dias 6 pintores pintam, no mesmo ritmo?</p><p>O dobro de pintores leva a <b>metade</b> do tempo: <span class="hl">4 dias</span>.</p>'),
          V('Se a velocidade de um carro aumenta, o tempo de viagem para o mesmo percurso também aumenta.', false, 'Falso. Velocidade e tempo são inversamente proporcionais: mais rápido, menos tempo.')
        ],
        quiz: [
          Q('Uma receita usa 3 xícaras de farinha para 12 biscoitos. Quantas xícaras são necessárias para 36 biscoitos?', ['9', '6', '12', '4'], 0, '36 é o triplo de 12, então a farinha também triplica: 3 × 3 = 9.'),
          Q('5 metros de tecido custam R$ 60,00. Quanto custam 8 metros do mesmo tecido?', ['R$ 96,00', 'R$ 80,00', 'R$ 72,00', 'R$ 120,00'], 0, '1 metro: 60 ÷ 5 = 12. Oito metros: 8 × 12 = 96.'),
          Q('Duas torneiras iguais enchem um tanque em 6 horas. Com 4 torneiras iguais, o tanque fica cheio em:', ['3 horas', '12 horas', '6 horas', '24 horas'], 0, 'O dobro de torneiras leva a metade do tempo. É uma relação inversa.'),
          Q('Em uma turma há 12 mulheres e 18 homens. A razão entre mulheres e homens é:', ['2/3', '3/2', '12/30', '1/2'], 0, '12/18, simplificando por 6, dá 2/3.'),
          Q('Um carro faz 60 km com 5 litros de gasolina. Com 20 litros, mantendo o mesmo consumo, ele percorre:', ['240 km', '120 km', '300 km', '80 km'], 0, '20 litros é 4 vezes 5 litros: 60 × 4 = 240 km.')
        ]
      },
      {
        id: 'mat-3', ico: '💸', title: 'Porcentagem e juros', topic: 'Descontos, aumentos e juros simples',
        lesson: [
          C('💯', 'Porcentagem é “por cem”', '<p>20% = 20/100 = 0,20.</p><p>Para calcular <b>20% de 350</b>: 0,20 × 350 = <span class="hl">70</span>.</p><p>Atalho: 10% é só dividir por 10. Então 20% é o dobro de 10%.</p>'),
          K('Desconto × Aumento', 'Desconto de 15% em R$ 200', ['Desconto: 0,15 × 200 = R$ 30', 'Preço final: 200 − 30 = <b>R$ 170</b>', 'Atalho: 200 × 0,85'], 'Aumento de 15% em R$ 200', ['Aumento: R$ 30', 'Preço final: 200 + 30 = <b>R$ 230</b>', 'Atalho: 200 × 1,15']),
          C('🏦', 'Juros simples', '<p><b>J = C × i × t</b></p><ul><li><b>C</b>: capital (valor inicial)</li><li><b>i</b>: taxa (em decimal)</li><li><b>t</b>: tempo</li></ul><p>Montante: <b>M = C + J</b>. Taxa e tempo na <span class="hl">mesma unidade</span> (mês com mês).</p><p>Ex.: R$ 800 a 3% ao mês por 2 meses → J = 800 × 0,03 × 2 = R$ 48 → M = R$ 848.</p>'),
          V('Um desconto de 50% seguido de um aumento de 50% faz o preço voltar ao valor original.', false, 'Falso. R$ 100 com 50% de desconto vira R$ 50; com 50% de aumento vira R$ 75.')
        ],
        quiz: [
          Q('Quanto é 30% de 250?', ['75', '30', '25', '83'], 0, '10% de 250 é 25; 30% é 3 × 25 = 75.'),
          Q('Uma geladeira de R$ 2.000,00 está com 10% de desconto à vista. O preço à vista é:', ['R$ 1.800,00', 'R$ 1.900,00', 'R$ 2.200,00', 'R$ 1.990,00'], 0, '10% de 2.000 = 200. Preço final: 2.000 − 200 = 1.800.'),
          Q('O aluguel de R$ 900,00 teve reajuste de 5%. O novo aluguel é:', ['R$ 945,00', 'R$ 905,00', 'R$ 950,00', 'R$ 990,00'], 0, '5% de 900 = 45. Novo valor: 900 + 45 = 945.'),
          Q('Uma pessoa aplicou R$ 1.000,00 a juros simples de 2% ao mês durante 4 meses. Os juros obtidos foram:', ['R$ 80,00', 'R$ 20,00', 'R$ 40,00', 'R$ 200,00'], 0, 'J = 1.000 × 0,02 × 4 = 80.'),
          Q('Em uma turma de 40 alunos, 12 faltaram. A porcentagem de faltas foi:', ['30%', '12%', '28%', '40%'], 0, '12/40 = 0,30 = 30%.')
        ]
      },
      {
        id: 'mat-4', ico: '📈', title: 'Equações e funções', topic: 'Equação do 1º grau, função afim e gráficos',
        lesson: [
          C('🧩', 'Equação do 1º grau', '<p>Descobrir o número escondido (x). O que está somando passa subtraindo, o que multiplica passa dividindo.</p><p>Ex.: 3x + 5 = 20 → 3x = 15 → <span class="hl">x = 5</span>.</p>'),
          C('📈', 'Função afim: y = ax + b', '<ul><li><b>b</b>: valor inicial (quando x = 0)</li><li><b>a</b>: taxa de variação (quanto y muda a cada 1 de x)</li></ul><p>Ex.: corrida de aplicativo com R$ 5 fixos + R$ 2 por km → <b>y = 2x + 5</b>. Para 10 km: 2 × 10 + 5 = <span class="hl">R$ 25</span>.</p>'),
          T('Lendo gráficos', '<p>Antes de responder, olhe: <b>título</b>, <b>eixos</b>, <b>unidades</b> e <b>escala</b>. Depois veja a <b>tendência</b>: sobe, desce ou fica estável?</p>'),
          V('Na função y = 3x + 10, o valor inicial (quando x = 0) é 3.', false, 'Falso. O valor inicial é b = 10. O número 3 é a taxa de variação.')
        ],
        quiz: [
          Q('Resolva: 4x − 8 = 20.', ['x = 7', 'x = 3', 'x = 12', 'x = 5'], 0, '4x = 28 → x = 7.'),
          Q('O dobro de um número mais 6 é igual a 30. Que número é esse?', ['12', '18', '24', '15'], 0, '2x + 6 = 30 → 2x = 24 → x = 12.'),
          Q('Um eletricista cobra R$ 50,00 pela visita mais R$ 30,00 por hora de trabalho. Por 3 horas, o valor total é:', ['R$ 140,00', 'R$ 90,00', 'R$ 150,00', 'R$ 80,00'], 0, 'y = 30x + 50 → 30 × 3 + 50 = 140.'),
          Q('Na função y = 5x + 2, quando x = 4, o valor de y é:', ['22', '20', '11', '28'], 0, '5 × 4 + 2 = 22.'),
          Q('Um gráfico mostra que o número de casos de uma doença caiu de 500 em janeiro para 200 em junho, diminuindo todo mês. A tendência mostrada é de:', ['queda', 'aumento', 'estabilidade', 'aumento seguido de estabilidade'], 0, 'Os valores diminuem ao longo dos meses: tendência de queda.')
        ]
      },
      {
        id: 'mat-5', ico: '📐', title: 'Geometria e medidas', topic: 'Áreas, volumes, Pitágoras e conversões',
        lesson: [
          K('Perímetro × Área × Volume', 'O que mede', ['<b>Perímetro</b>: contorno (soma dos lados)', '<b>Área</b>: superfície (m²)', '<b>Volume</b>: espaço ocupado (m³)'], 'Uso no dia a dia', ['Cerca em volta do terreno', 'Piso para cobrir o chão', 'Água que cabe na caixa']),
          C('📐', 'Fórmulas essenciais', '<ul><li>Retângulo: <b>A = base × altura</b></li><li>Triângulo: <b>A = (base × altura) ÷ 2</b></li><li>Círculo: <b>A = π × r²</b> • Circunferência: <b>2 × π × r</b></li><li>Cubo: <b>V = a³</b></li><li>Caixa (paralelepípedo): <b>V = comprimento × largura × altura</b></li></ul>'),
          C('📏', 'Teorema de Pitágoras', '<p>No triângulo retângulo: <span class="hl">hipotenusa² = cateto² + cateto²</span>.</p><p>Ex.: catetos 6 e 8 → 36 + 64 = 100 → hipotenusa = 10.</p>'),
          T('Conversões', '<p>1 km = 1.000 m • 1 m = 100 cm • 1 kg = 1.000 g • 1 L = 1.000 mL • 1 h = 60 min • <b>1 m³ = 1.000 litros</b>.</p>'),
          V('Para saber quantos metros de muro cercam um terreno, calculamos a área.', false, 'Falso. O contorno do terreno é o perímetro.')
        ],
        quiz: [
          Q('Uma sala retangular mede 5 m por 4 m. Quantos metros quadrados de piso são necessários para cobrir o chão?', ['20 m²', '18 m²', '9 m²', '40 m²'], 0, 'Área do retângulo: 5 × 4 = 20 m².'),
          Q('Um terreno retangular de 15 m por 10 m será cercado com arame. Quantos metros de arame dão uma volta completa?', ['50 m', '150 m', '25 m', '30 m'], 0, 'Perímetro: 15 + 10 + 15 + 10 = 50 m.'),
          Q('Uma caixa-d’água tem 2 m de comprimento, 1 m de largura e 1 m de altura. Sua capacidade, em litros, é:', ['2.000 litros', '200 litros', '4 litros', '20.000 litros'], 0, 'Volume: 2 × 1 × 1 = 2 m³. Como 1 m³ = 1.000 L, são 2.000 litros.'),
          Q('Uma escada de 5 m está apoiada em um muro, com o pé a 3 m da parede. A que altura do muro a escada toca?', ['4 m', '2 m', '8 m', '6 m'], 0, 'Pitágoras: 5² = 3² + h² → 25 = 9 + h² → h² = 16 → h = 4 m.'),
          Q('Uma placa triangular tem base de 12 cm e altura de 5 cm. Sua área é:', ['30 cm²', '60 cm²', '17 cm²', '34 cm²'], 0, '(12 × 5) ÷ 2 = 30 cm².')
        ]
      },
      {
        id: 'mat-6', ico: '🎲', title: 'Estatística e finanças', topic: 'Média, mediana, moda, probabilidade e consumo',
        lesson: [
          K('Média × Mediana × Moda', 'Medida', ['<b>Média</b>', '<b>Mediana</b>', '<b>Moda</b>'], 'Como achar', ['Soma tudo e divide pela quantidade', 'Ordena os valores e pega o do meio', 'O valor que mais se repete']),
          C('🧮', 'Exemplo', '<p>Idades: 20, 25, 25, 30, 50.</p><ul><li>Média: 150 ÷ 5 = <b>30</b></li><li>Mediana: o do meio = <b>25</b></li><li>Moda: <b>25</b> (aparece duas vezes)</li></ul>'),
          C('🎲', 'Probabilidade', '<p><b>Probabilidade = casos favoráveis ÷ casos possíveis</b>.</p><p>Num dado comum, a chance de sair o 5 é 1/6. A chance de sair número maior que 4 (5 ou 6) é 2/6 = <span class="hl">1/3</span>.</p>'),
          T('Educação financeira', '<p>Compare o <b>preço por unidade</b> e o <b>custo total</b>. Parcela pequena nem sempre é mais barata: 12 × R$ 60 = R$ 720, que pode custar mais que R$ 600 à vista.</p>'),
          V('Em 3, 5, 5, 7, a moda é 5.', true, 'Verdadeiro. O 5 é o valor que mais se repete.')
        ],
        quiz: [
          Q('As notas de um aluno foram 6, 7, 8 e 9. A média é:', ['7,5', '7', '8', '30'], 0, '(6 + 7 + 8 + 9) ÷ 4 = 30 ÷ 4 = 7,5.'),
          Q('Os salários de 5 funcionários são R$ 1.500, R$ 1.600, R$ 1.700, R$ 1.800 e R$ 9.000. Qual medida representa melhor o salário típico do grupo?', ['A mediana, R$ 1.700', 'A média, R$ 3.120', 'A moda, que não existe', 'O maior valor, R$ 9.000'], 0, 'O salário de R$ 9.000 “puxa” a média para cima. A mediana não é afetada por esse valor extremo.'),
          Q('Em uma urna há 3 bolas azuis e 7 vermelhas. Retirando uma bola ao acaso, a probabilidade de ser azul é:', ['30%', '70%', '3%', '37%'], 0, '3 favoráveis em 10 possíveis: 3/10 = 30%.'),
          Q('Um pacote de 5 kg de arroz custa R$ 30,00 e um de 2 kg custa R$ 14,00. Comparando o preço do quilo:', ['o pacote de 5 kg é mais barato por quilo', 'o pacote de 2 kg é mais barato por quilo', 'os dois têm o mesmo preço por quilo', 'não é possível comparar'], 0, '5 kg: R$ 6/kg. 2 kg: R$ 7/kg. O pacote maior sai mais em conta.'),
          Q('Uma TV custa R$ 1.200 à vista ou 10 parcelas de R$ 135. Quanto se paga a mais no parcelado?', ['R$ 150,00', 'R$ 135,00', 'R$ 15,00', 'R$ 1.350,00'], 0, '10 × 135 = 1.350. A diferença é 1.350 − 1.200 = 150.')
        ]
      }
    ]
  },

  /* =================================================================
     UNIDADE 3 — CIÊNCIAS DA NATUREZA
     ================================================================= */
  {
    id: 'nat', mascot: 'atencao', area: 'nat', c: '#0d9488', cd: '#0f766e', emoji: '🔬', theme: 'natureza',
    title: 'Ciências da Natureza', sub: 'Biologia, química e física do cotidiano',
    fases: [
      {
        id: 'nat-1', ico: '🧬', title: 'Células e genética', topic: 'Célula, fotossíntese, DNA e evolução',
        lesson: [
          C('🧫', 'A célula', '<p>É a <b>unidade básica</b> dos seres vivos.</p><ul><li><b>Membrana</b>: controla o que entra e sai</li><li><b>Citoplasma</b>: onde ficam as organelas</li><li><b>Núcleo</b>: guarda o material genético</li><li><b>Mitocôndria</b>: respiração celular (energia)</li></ul>'),
          K('Célula animal × vegetal', 'Só a vegetal tem', ['<b>Parede celular</b> (rigidez)', '<b>Cloroplastos</b> (fotossíntese)', '<b>Vacúolo grande</b>'], 'As duas têm', ['Membrana', 'Citoplasma', 'Núcleo', 'Mitocôndrias']),
          C('🌱', 'Fotossíntese', '<p>A planta usa <b>luz</b>, <b>água</b> e <b>gás carbônico</b> para produzir <b>matéria orgânica</b> (açúcar) e liberar <span class="hl">oxigênio</span>. Acontece nos cloroplastos.</p>'),
          C('🧬', 'Genética e evolução', '<p><b>DNA</b>: guarda as informações hereditárias. <b>Gene</b>: trecho de DNA. <b>Cromossomos</b>: organizam o DNA.</p><p>As características resultam da <b>herança</b> e do <b>ambiente</b>.</p><p><b>Seleção natural</b>: indivíduos mais adaptados ao ambiente sobrevivem e se reproduzem mais.</p>'),
          V('As células animais possuem parede celular.', false, 'Falso. A parede celular é exclusiva de células vegetais (e de outros grupos, como fungos e bactérias), não das animais.')
        ],
        quiz: [
          Q('A organela responsável pela fotossíntese nas células vegetais é o:', ['cloroplasto', 'núcleo', 'ribossomo', 'lisossomo'], 0, 'Os cloroplastos têm clorofila e realizam a fotossíntese.'),
          Q('A estrutura celular que controla a entrada e a saída de substâncias é a:', ['membrana plasmática', 'parede celular', 'mitocôndria', 'cromossomo'], 0, 'A membrana é seletiva: controla as trocas entre a célula e o meio.'),
          Q('Na fotossíntese, a planta libera para o ambiente:', ['oxigênio', 'gás carbônico', 'nitrogênio', 'metano'], 0, 'A planta absorve gás carbônico e libera oxigênio.'),
          Q('Gêmeos idênticos criados em cidades diferentes desenvolveram alturas um pouco diferentes por causa da alimentação. Esse caso mostra que as características dependem:', ['da herança genética e também do ambiente', 'apenas da genética', 'apenas do ambiente', 'somente da sorte'], 0, 'Genes e ambiente interagem na formação das características.'),
          Q('Em uma região que ficou mais fria, coelhos de pelo mais grosso sobreviveram mais e deixaram mais filhotes. Esse processo é chamado de:', ['seleção natural', 'fotossíntese', 'mutação induzida', 'respiração celular'], 0, 'Os mais adaptados ao ambiente sobrevivem e se reproduzem mais: seleção natural.')
        ]
      },
      {
        id: 'nat-2', ico: '🌳', title: 'Ecologia e ambiente', topic: 'Níveis de organização, cadeias alimentares e impactos',
        lesson: [
          C('🪜', 'Níveis de organização', '<p><b>Indivíduo</b> → <b>população</b> (mesma espécie) → <b>comunidade</b> (várias espécies) → <b>ecossistema</b> (seres vivos + ambiente) → <b>biosfera</b>.</p>'),
          K('Quem faz o quê na cadeia', 'Papel', ['<b>Produtores</b>', '<b>Consumidores</b>', '<b>Decompositores</b>'], 'O que fazem', ['Fabricam matéria orgânica (plantas, algas)', 'Alimentam-se de outros seres', 'Reciclam nutrientes (fungos, bactérias)']),
          C('⚡', 'Energia na cadeia', '<p>A energia <span class="hl">diminui</span> a cada nível da cadeia alimentar, porque parte é gasta pelos seres vivos e perdida como calor.</p>'),
          C('🔥', 'Impactos ambientais', '<p><b>Desmatamento</b>, <b>queimadas</b>, <b>poluição</b> e <b>perda de biodiversidade</b> desequilibram os ecossistemas.</p><p>A queima de combustíveis fósseis aumenta o <b>gás carbônico</b> no ar e intensifica o efeito estufa.</p>'),
          V('Os decompositores são importantes porque devolvem nutrientes ao solo.', true, 'Verdadeiro. Fungos e bactérias decompõem a matéria orgânica e reciclam nutrientes.')
        ],
        quiz: [
          Q('Na cadeia alimentar capim → gafanhoto → sapo → cobra, o capim é:', ['produtor', 'consumidor primário', 'decompositor', 'consumidor terciário'], 0, 'O capim faz fotossíntese e produz matéria orgânica: é produtor.'),
          Q('Todos os peixes da espécie tilápia que vivem em um lago formam uma:', ['população', 'comunidade', 'biosfera', 'cadeia alimentar'], 0, 'Indivíduos da mesma espécie, no mesmo lugar e tempo, formam uma população.'),
          Q('Fungos e bactérias que transformam folhas caídas em nutrientes para o solo são:', ['decompositores', 'produtores', 'consumidores primários', 'parasitas obrigatórios'], 0, 'Eles decompõem matéria orgânica e reciclam nutrientes.'),
          Q('A queima de gasolina e carvão contribui para o aquecimento global porque libera grande quantidade de:', ['gás carbônico', 'oxigênio', 'vapor de mercúrio', 'hélio'], 0, 'A combustão de combustíveis fósseis libera dióxido de carbono, gás do efeito estufa.'),
          Q('Na passagem de um nível da cadeia alimentar para o seguinte, a quantidade de energia disponível:', ['diminui', 'aumenta', 'fica igual', 'dobra'], 0, 'Parte da energia é usada nas atividades dos seres vivos e perdida como calor.')
        ]
      },
      {
        id: 'nat-3', ico: '🫀', title: 'Corpo humano e saúde', topic: 'Sistemas do corpo, vacinas e prevenção',
        lesson: [
          C('🫀', 'Sistemas que trabalham juntos', '<ul><li><b>Digestório</b>: transforma alimentos em nutrientes</li><li><b>Respiratório</b>: troca gases (entra O₂, sai CO₂)</li><li><b>Circulatório</b>: transporta sangue, nutrientes e oxigênio</li><li><b>Nervoso</b> e <b>endócrino</b>: controlam o corpo (nervos e hormônios)</li><li><b>Urinário</b>: filtra o sangue e elimina resíduos</li></ul>'),
          K('Vacina × Antibiótico', 'Vacina', ['<b>Previne</b> doenças', 'Estimula a <b>memória imunológica</b>', 'O corpo aprende a se defender'], 'Antibiótico', ['<b>Trata</b> infecções por <b>bactérias</b>', '<b>Não</b> funciona contra vírus (gripe, resfriado)', 'Só com prescrição médica']),
          C('🛡️', 'Prevenção', '<p>Vacinação, higiene, alimentação equilibrada, atividade física, <b>saneamento</b> e acesso aos serviços de saúde.</p>'),
          V('Antibióticos curam a gripe comum.', false, 'Falso. A gripe é causada por vírus. Antibióticos agem contra bactérias.')
        ],
        quiz: [
          Q('As vacinas protegem contra doenças porque:', ['estimulam o corpo a produzir defesas e a criar memória imunológica', 'matam todas as bactérias do corpo', 'substituem a alimentação saudável', 'curam doenças já instaladas em poucos minutos'], 0, 'A vacina “ensina” o sistema imunológico a reconhecer o agente da doença.'),
          Q('Uma pessoa está resfriada (infecção por vírus) e quer tomar um antibiótico que sobrou em casa. A orientação correta é:', ['não tomar, pois antibiótico não age contra vírus e deve ser usado só com prescrição', 'tomar o dobro da dose para melhorar mais rápido', 'tomar e interromper assim que melhorar', 'misturar com outro remédio'], 0, 'Antibióticos agem contra bactérias. O uso sem orientação ainda favorece bactérias resistentes.'),
          Q('O sistema responsável pela troca de gases, levando oxigênio para o corpo e eliminando gás carbônico, é o:', ['respiratório', 'digestório', 'urinário', 'locomotor'], 0, 'Nos pulmões ocorre a troca gasosa.'),
          Q('O sistema que filtra o sangue nos rins e elimina resíduos pela urina é o:', ['urinário', 'circulatório', 'nervoso', 'endócrino'], 0, 'Os rins filtram o sangue e formam a urina.'),
          Q('Uma medida coletiva que previne muitas doenças, como diarreias e verminoses, é:', ['ampliar o saneamento básico', 'tomar antibióticos todo mês', 'evitar a vacinação', 'reduzir a atividade física'], 0, 'Água tratada e esgoto coletado previnem doenças transmitidas pela água e por resíduos.')
        ]
      },
      {
        id: 'nat-4', ico: '🧪', title: 'Matéria e misturas', topic: 'Estados físicos, transformações e separação de misturas',
        lesson: [
          C('🧊', 'Estados e mudanças', '<p>Sólido, líquido e gasoso.</p><ul><li><b>Fusão</b>: sólido → líquido</li><li><b>Solidificação</b>: líquido → sólido</li><li><b>Vaporização</b>: líquido → gás</li><li><b>Condensação</b>: gás → líquido</li><li><b>Sublimação</b>: sólido → gás direto</li></ul>'),
          K('Transformação física × química', 'Física', ['<b>Não</b> forma nova substância', 'Ex.: gelo derretendo, papel rasgado'], 'Química', ['<b>Forma</b> nova substância', 'Ex.: ferro enferrujando, madeira queimando, bolo assando']),
          K('Misturas', 'Homogênea', ['<b>Uma fase</b> só', 'Ex.: água com açúcar dissolvido, ar'], 'Heterogênea', ['<b>Duas ou mais fases</b>', 'Ex.: água e óleo, água e areia']),
          C('🔧', 'Separação de misturas', '<ul><li><b>Filtração</b>: sólido de líquido (café no coador)</li><li><b>Decantação</b>: deixar assentar (água e areia; água e óleo)</li><li><b>Destilação</b>: separar líquido de sólido dissolvido ou líquidos com pontos de ebulição diferentes</li><li><b>Evaporação</b>: obter sal da água do mar</li><li><b>Separação magnética</b>: ímã atrai o ferro</li></ul>'),
          V('Um prego enferrujando é uma transformação química.', true, 'Verdadeiro. A ferrugem é uma substância nova, formada pela reação do ferro com oxigênio e água.')
        ],
        quiz: [
          Q('O orvalho que aparece nas folhas pela manhã se forma quando o vapor d’água do ar passa para o estado líquido. Essa mudança chama-se:', ['condensação', 'fusão', 'sublimação', 'solidificação'], 0, 'Gás → líquido é condensação.'),
          Q('Qual dos fenômenos abaixo é uma transformação química?', ['Queimar um pedaço de papel', 'Derreter uma barra de chocolate', 'Quebrar um copo de vidro', 'Congelar água'], 0, 'A queima forma novas substâncias (cinzas, gases). As outras mudam só forma ou estado.'),
          Q('Nas salinas, a água do mar fica exposta ao sol até sobrar o sal. O processo usado é a:', ['evaporação', 'filtração', 'separação magnética', 'decantação'], 0, 'A água evapora e o sal fica.'),
          Q('Ao preparar café no coador de pano, separamos o pó da bebida por:', ['filtração', 'destilação', 'sublimação', 'separação magnética'], 0, 'O coador retém o sólido e deixa passar o líquido.'),
          Q('Água e óleo colocados em um copo formam uma mistura:', ['heterogênea, com duas fases', 'homogênea, com uma fase', 'pura, de uma substância só', 'gasosa'], 0, 'O óleo não se mistura com a água: as duas fases ficam visíveis.')
        ]
      },
      {
        id: 'nat-5', ico: '⚛️', title: 'Átomos, reações e pH', topic: 'Estrutura do átomo, ligações, reações e acidez',
        lesson: [
          C('⚛️', 'O átomo', '<ul><li><b>Prótons</b>: carga positiva, no núcleo</li><li><b>Nêutrons</b>: sem carga, no núcleo</li><li><b>Elétrons</b>: carga negativa, na eletrosfera</li></ul><p><b>Número atômico (Z)</b> = prótons. <b>Número de massa (A)</b> = prótons + nêutrons.</p>'),
          K('Ligações químicas', 'Tipo', ['<b>Iônica</b>', '<b>Covalente</b>', '<b>Metálica</b>'], 'Como funciona', ['<b>Transferência</b> de elétrons (ex.: sal de cozinha)', '<b>Compartilhamento</b> de elétrons (ex.: água)', 'Elétrons “livres” entre os átomos (ex.: cobre)']),
          C('⚗️', 'Reações e conservação da massa', '<p>Na reação, os átomos <b>se reorganizam</b>: nada se cria, nada se perde. Por isso as equações são <span class="hl">balanceadas</span>.</p>'),
          C('🧴', 'Escala de pH', '<ul><li><b>Abaixo de 7</b>: ácido (limão, vinagre)</li><li><b>7</b>: neutro (água pura)</li><li><b>Acima de 7</b>: básico (sabão, água sanitária)</li></ul><p>⚠️ Nunca misture produtos de limpeza: algumas combinações liberam <b>gases tóxicos</b>.</p>'),
          V('Uma substância com pH 2 é básica.', false, 'Falso. pH abaixo de 7 indica caráter ácido.')
        ],
        quiz: [
          Q('Um átomo tem 11 prótons e 12 nêutrons. Seu número atômico e seu número de massa são, respectivamente:', ['11 e 23', '12 e 23', '11 e 12', '23 e 11'], 0, 'Número atômico = prótons = 11. Massa = 11 + 12 = 23.'),
          Q('O suco de limão tem pH próximo de 2. Ele é classificado como:', ['ácido', 'básico', 'neutro', 'alcalino forte'], 0, 'pH menor que 7 indica substância ácida.'),
          Q('Uma pessoa pensa em misturar água sanitária com outro produto de limpeza para “limpar mais”. A orientação correta é:', ['não misturar, pois algumas combinações liberam gases tóxicos', 'misturar em balde fechado', 'misturar e usar em local sem ventilação', 'misturar sempre que a sujeira for difícil'], 0, 'Misturas de produtos de limpeza podem liberar gases perigosos.'),
          Q('Na ligação iônica, como a do sal de cozinha (cloreto de sódio), ocorre:', ['transferência de elétrons entre os átomos', 'compartilhamento de prótons', 'fusão dos núcleos', 'perda de nêutrons'], 0, 'Um átomo cede elétrons e o outro recebe, formando íons.'),
          Q('Em um frasco fechado, ocorre uma reação química. A massa total do frasco antes e depois da reação:', ['permanece a mesma', 'sempre aumenta', 'sempre diminui', 'vira zero'], 0, 'Lei da conservação da massa: os átomos só se reorganizam.')
        ]
      },
      {
        id: 'nat-6', ico: '🚗', title: 'Movimento e forças', topic: 'Velocidade média e leis de Newton',
        lesson: [
          C('🚗', 'Velocidade média', '<p><b>v = distância ÷ tempo</b>.</p><p>Ex.: 180 km em 3 h → 180 ÷ 3 = <span class="hl">60 km/h</span>.</p>'),
          C('🍎', 'As 3 leis de Newton', '<ul><li><b>1ª — Inércia</b>: um corpo tende a manter seu estado (parado ou em movimento). Por isso usamos cinto de segurança</li><li><b>2ª — F = m × a</b>: quanto maior a força, maior a aceleração</li><li><b>3ª — Ação e reação</b>: forças iguais e opostas, em corpos diferentes (o remo empurra a água, a água empurra o barco)</li></ul>'),
          K('Massa × Peso', 'Massa', ['Quantidade de matéria', 'Medida em <b>kg</b>', '<b>Não muda</b> de lugar para lugar'], 'Peso', ['<b>Força</b> da gravidade sobre o corpo', 'Medido em <b>newtons</b> (N)', 'Na Lua é <b>menor</b> que na Terra']),
          V('Quando o ônibus freia de repente, os passageiros são “jogados” para frente por causa da inércia.', true, 'Verdadeiro. O corpo tende a continuar em movimento.')
        ],
        quiz: [
          Q('Um ciclista percorreu 45 km em 3 horas. Sua velocidade média foi:', ['15 km/h', '135 km/h', '48 km/h', '42 km/h'], 0, '45 ÷ 3 = 15 km/h.'),
          Q('O uso do cinto de segurança está ligado a qual lei de Newton?', ['1ª lei, da inércia', '2ª lei, F = m × a', '3ª lei, ação e reação', 'Lei de Ohm'], 0, 'Na freada, o corpo tende a continuar em movimento. O cinto segura o passageiro.'),
          Q('Uma força de 20 N é aplicada em um carrinho de 4 kg. A aceleração do carrinho é:', ['5 m/s²', '80 m/s²', '24 m/s²', '16 m/s²'], 0, 'a = F ÷ m = 20 ÷ 4 = 5 m/s².'),
          Q('Ao nadar, a pessoa empurra a água para trás e é impulsionada para frente. Isso exemplifica a lei da:', ['ação e reação', 'inércia', 'conservação da massa', 'gravitação apenas'], 0, 'A pessoa age sobre a água e a água reage sobre a pessoa.'),
          Q('Um astronauta de 70 kg vai à Lua, onde a gravidade é menor. Na Lua:', ['sua massa continua 70 kg, mas seu peso é menor', 'sua massa e seu peso aumentam', 'sua massa diminui e o peso fica igual', 'ele deixa de ter massa'], 0, 'A massa não muda. O peso depende da gravidade, que é menor na Lua.')
        ]
      },
      {
        id: 'nat-7', ico: '💡', title: 'Energia e eletricidade', topic: 'Energia cinética e potencial, calor, potência e circuitos',
        lesson: [
          K('Formas de energia', 'Cinética', ['Energia do <b>movimento</b>', 'Mais velocidade → mais energia'], 'Potencial gravitacional', ['Energia da <b>altura</b>', 'Mais alto → mais energia guardada']),
          C('🔥', 'Calor', '<p>Calor é <b>energia em trânsito</b>, do mais quente para o mais frio.</p><ul><li><b>Condução</b>: por contato (cabo da panela esquenta)</li><li><b>Convecção</b>: por correntes em líquidos e gases (ar quente sobe)</li><li><b>Radiação</b>: por ondas, sem precisar de meio (calor do Sol)</li></ul>'),
          C('🔌', 'Eletricidade', '<ul><li><b>Corrente (i)</b>: fluxo de cargas (ampère)</li><li><b>Tensão (U)</b>: diferença de potencial (volt)</li><li><b>Resistência (R)</b>: dificulta a corrente (ohm)</li></ul><p><b>Lei de Ohm: U = R × i</b>. <b>Potência = energia ÷ tempo</b>.</p>'),
          T('Conta de luz', '<p>Energia consumida = potência × tempo. Um chuveiro de 5.000 W (5 kW) ligado 1 hora gasta <b>5 kWh</b>.</p>'),
          V('O calor do Sol chega à Terra por condução.', false, 'Falso. Chega por radiação, pois o espaço praticamente não tem matéria.')
        ],
        quiz: [
          Q('O cabo metálico de uma panela esquenta quando ela está no fogo. Esse calor se propaga principalmente por:', ['condução', 'radiação', 'convecção', 'reflexão'], 0, 'O calor passa de partícula em partícula pelo metal: condução.'),
          Q('Um chuveiro de 4 kW fica ligado 2 horas. A energia consumida é:', ['8 kWh', '2 kWh', '6 kWh', '4 kWh'], 0, 'Energia = potência × tempo = 4 × 2 = 8 kWh.'),
          Q('Um resistor de 10 Ω é percorrido por uma corrente de 2 A. A tensão entre seus terminais é:', ['20 V', '5 V', '12 V', '0,2 V'], 0, 'Lei de Ohm: U = R × i = 10 × 2 = 20 V.'),
          Q('Uma pedra parada no alto de um morro tem, principalmente, energia:', ['potencial gravitacional', 'cinética', 'elétrica', 'sonora'], 0, 'Ela está parada (sem cinética) mas em altura: energia potencial.'),
          Q('O ar-condicionado costuma ser instalado no alto da parede porque o ar frio, mais denso, desce e espalha pelo ambiente. Esse processo é a:', ['convecção', 'condução', 'radiação', 'sublimação'], 0, 'Correntes de ar quente subindo e frio descendo formam a convecção.')
        ]
      }
    ]
  },

  /* =================================================================
     UNIDADE 4 — CIÊNCIAS HUMANAS
     ================================================================= */
  {
    id: 'hum', mascot: 'legislacao', area: 'hum', c: '#2f80ed', cd: '#1d5fbf', emoji: '🌍', theme: 'humanas',
    title: 'Ciências Humanas', sub: 'História, geografia, filosofia e sociologia',
    fases: [
      {
        id: 'hum-1', ico: '🏺', title: 'Fontes e Brasil Colônia', topic: 'Fontes históricas, colonização e resistência',
        lesson: [
          C('🏺', 'Fontes históricas', '<p>Tudo que ajuda a entender o passado: <b>escritas</b> (cartas, leis), <b>orais</b> (entrevistas), <b>visuais</b> (fotos, pinturas), <b>materiais</b> (objetos, construções) e <b>digitais</b>.</p><p>Pergunte sempre: <span class="hl">quem produziu, quando, por quê e para quem?</span></p>'),
          C('⛵', 'Brasil Colônia (1500–1822)', '<ul><li>Colonização portuguesa voltada à <b>exploração econômica</b></li><li><b>Plantation</b>: grandes fazendas, monocultura (cana-de-açúcar), mão de obra escravizada e produção para exportação</li><li>Século XVIII: <b>mineração</b> de ouro em Minas Gerais</li></ul>'),
          C('✊', 'Escravização e resistência', '<p>Indígenas e africanos foram <b>escravizados</b>. Houve muita resistência: fugas, revoltas e a formação de <b>quilombos</b>, como o de Palmares.</p><p>Indígenas, africanos e europeus contribuíram para a <b>formação cultural</b> brasileira.</p>'),
          V('Uma entrevista com um morador antigo do bairro pode ser usada como fonte histórica.', true, 'Verdadeiro. É uma fonte oral.')
        ],
        quiz: [
          Q('Uma pesquisadora gravou relatos de idosos sobre como era o bairro há 60 anos. Esse material é uma fonte histórica:', ['oral', 'material', 'cartográfica', 'arqueológica'], 0, 'Depoimentos e entrevistas são fontes orais.'),
          Q('O sistema de plantation, usado no Brasil Colônia, caracterizava-se por:', ['grandes propriedades, monocultura, trabalho escravizado e produção para exportação', 'pequenas propriedades familiares com produção para consumo local', 'indústrias têxteis com trabalho assalariado', 'cooperativas de agricultores livres'], 0, 'Latifúndio, monocultura, escravidão e exportação são as marcas da plantation.'),
          Q('Os quilombos, como Palmares, foram:', ['comunidades formadas por pessoas que resistiam à escravidão', 'fazendas de cana dos colonizadores', 'portos de comércio europeu', 'missões religiosas portuguesas'], 0, 'Quilombos eram espaços de resistência e liberdade.'),
          Q('No século XVIII, a principal atividade econômica que deslocou população para a região de Minas Gerais foi a:', ['mineração de ouro', 'produção de café', 'indústria automobilística', 'extração de petróleo'], 0, 'A descoberta de ouro atraiu muita gente para Minas Gerais.'),
          Q('Ao analisar uma carta escrita por um governador colonial, o historiador deve considerar:', ['quem escreveu, quando, com que interesse e para quem', 'apenas a caligrafia', 'só o tamanho do documento', 'somente se a carta está bem conservada'], 0, 'Toda fonte tem autoria, contexto e interesses que precisam ser analisados.')
        ]
      },
      {
        id: 'hum-2', ico: '🇧🇷', title: 'Brasil Império e República', topic: 'Independência, abolição, Vargas, ditadura e redemocratização',
        lesson: [
          C('👑', 'Império (1822–1889)', '<p><b>1822</b>: Independência. Não trouxe igualdade: a escravidão continuou.</p><ul><li>Primeiro Reinado (D. Pedro I)</li><li>Período Regencial</li><li>Segundo Reinado (D. Pedro II)</li></ul><p><b>13 de maio de 1888</b>: <span class="hl">Lei Áurea</span> aboliu a escravidão, sem garantir terra, trabalho ou educação aos libertos.</p>'),
          C('🏛️', 'República', '<ul><li><b>1889</b>: Proclamação da República</li><li><b>República Velha</b> (até 1930): poder das oligarquias</li><li><b>Era Vargas</b> (1930–1945): leis trabalhistas (CLT), industrialização</li><li><b>1946–1964</b>: período democrático</li><li><b>1964–1985</b>: ditadura civil-militar, censura e perseguição</li><li><b>Redemocratização</b> e <b>Constituição de 1988</b></li></ul>'),
          T('Datas que mais caem', '<p><b>1822</b> Independência • <b>1888</b> Abolição • <b>1889</b> República • <b>1964</b> golpe • <b>1988</b> Constituição Cidadã.</p>'),
          V('A Lei Áurea garantiu terras e emprego para todas as pessoas libertadas.', false, 'Falso. A abolição não veio acompanhada de políticas de inclusão, o que deixou marcas de desigualdade.')
        ],
        quiz: [
          Q('A abolição legal da escravidão no Brasil ocorreu em 1888, com a:', ['Lei Áurea', 'Lei do Ventre Livre', 'Constituição de 1988', 'Proclamação da República'], 0, 'A Lei Áurea foi assinada em 13 de maio de 1888.'),
          Q('A atual Constituição brasileira, chamada de Constituição Cidadã, foi promulgada em:', ['1988', '1964', '1946', '2002'], 0, 'Foi promulgada em 5 de outubro de 1988, após a redemocratização.'),
          Q('A Consolidação das Leis do Trabalho (CLT), que reuniu direitos trabalhistas, foi criada durante:', ['a Era Vargas', 'o Segundo Reinado', 'a República Velha', 'o Brasil Colônia'], 0, 'A CLT é de 1943, no governo Vargas.'),
          Q('O período entre 1964 e 1985 no Brasil foi marcado por:', ['ditadura civil-militar, com censura e restrição de direitos', 'monarquia parlamentarista', 'domínio colonial português', 'ampla liberdade de imprensa'], 0, 'Foi um regime autoritário, com censura e perseguição a opositores.'),
          Q('Após a Independência de 1822, a sociedade brasileira:', ['manteve a escravidão e grandes desigualdades', 'aboliu imediatamente a escravidão', 'distribuiu terras a todos', 'tornou-se uma república'], 0, 'A Independência manteve a estrutura escravista, abolida só em 1888.')
        ]
      },
      {
        id: 'hum-3', ico: '🏛️', title: 'História geral', topic: 'Da Antiguidade à globalização',
        lesson: [
          C('🏛️', 'Antiguidade e Idade Média', '<ul><li><b>Grécia antiga</b>: Atenas e a ideia de cidadania e democracia (restrita: mulheres e escravizados não votavam)</li><li><b>Feudalismo</b>: terra como riqueza, senhores e servos, poder da Igreja</li></ul>'),
          C('🧭', 'Idade Moderna', '<ul><li><b>Renascimento</b>: valorização do ser humano e da ciência</li><li><b>Expansão marítima</b>: chegada dos europeus à América</li><li><b>Iluminismo</b>: razão, crítica ao absolutismo, ideias de liberdade e igualdade</li><li><b>Revolução Francesa</b> (1789)</li></ul>'),
          C('🏭', 'Do século XVIII ao XXI', '<ul><li><b>Revolução Industrial</b>: máquinas, fábricas, trabalho assalariado</li><li><b>Imperialismo</b>: potências dominam África e Ásia</li><li><b>Guerras Mundiais</b> e <b>Guerra Fria</b> (EUA × URSS)</li><li><b>Descolonização</b> e <b>globalização</b></li></ul>'),
          V('A Revolução Industrial começou na Inglaterra e trouxe máquinas e fábricas.', true, 'Verdadeiro. Ela começou na Inglaterra, no século XVIII.')
        ],
        quiz: [
          Q('A transformação da produção com máquinas, fábricas e trabalho assalariado, iniciada na Inglaterra no século XVIII, é chamada de:', ['Revolução Industrial', 'Renascimento', 'Feudalismo', 'Guerra Fria'], 0, 'A Revolução Industrial mudou a forma de produzir.'),
          Q('O Iluminismo defendia:', ['o uso da razão e a crítica ao poder absoluto dos reis', 'o poder ilimitado dos reis', 'o fim da ciência', 'a volta do feudalismo'], 0, 'Os iluministas valorizavam a razão, a liberdade e a limitação do poder.'),
          Q('No feudalismo, a principal fonte de riqueza e poder era:', ['a posse de terras', 'o petróleo', 'a indústria', 'o comércio digital'], 0, 'A terra era a base da economia e das relações entre senhores e servos.'),
          Q('A Guerra Fria foi a disputa política, econômica e militar, sem confronto direto, entre:', ['Estados Unidos e União Soviética', 'Brasil e Argentina', 'Portugal e Espanha', 'Grécia e Roma'], 0, 'EUA (capitalismo) e URSS (socialismo) disputaram influência no mundo.'),
          Q('Na democracia de Atenas, na Grécia antiga, participavam das decisões:', ['apenas os homens considerados cidadãos', 'todas as pessoas, inclusive mulheres e escravizados', 'somente os estrangeiros', 'apenas o rei'], 0, 'A cidadania ateniense era restrita: mulheres, estrangeiros e escravizados ficavam de fora.')
        ]
      },
      {
        id: 'hum-4', ico: '🗺️', title: 'Espaço e cartografia', topic: 'Paisagem, lugar, território, região e mapas',
        lesson: [
          C('🗺️', 'Conceitos da Geografia', '<ul><li><b>Espaço geográfico</b>: produzido pela relação sociedade-natureza</li><li><b>Paisagem</b>: o que se percebe com os sentidos</li><li><b>Lugar</b>: o espaço vivido, com afeto e memória</li><li><b>Território</b>: espaço marcado por <b>poder</b> e controle</li><li><b>Região</b>: área definida por critérios em comum</li></ul>'),
          C('🧭', 'Elementos do mapa', '<p><b>Título</b>, <b>legenda</b>, <b>orientação</b> (rosa dos ventos), <b>escala</b> e <b>coordenadas</b> (latitude e longitude).</p>'),
          C('📏', 'Escala', '<p>Mostra quantas vezes a realidade foi reduzida.</p><p>Escala <b>1 : 100.000</b> → 1 cm no mapa = 100.000 cm = <span class="hl">1 km</span> na realidade.</p>'),
          V('Território é um conceito ligado a poder e controle sobre uma área.', true, 'Verdadeiro. Território envolve apropriação e relações de poder.')
        ],
        quiz: [
          Q('Em um mapa com escala 1 : 50.000, uma distância de 4 cm no papel corresponde, na realidade, a:', ['2 km', '200 m', '20 km', '50 km'], 0, '1 cm = 50.000 cm = 500 m. Então 4 cm = 2.000 m = 2 km.'),
          Q('O conceito geográfico ligado ao controle e ao poder sobre uma área é:', ['território', 'paisagem', 'clima', 'relevo'], 0, 'Território envolve apropriação e relações de poder.'),
          Q('Para uma pessoa, a praça onde cresceu, brincou e conheceu amigos tem um significado afetivo. Esse espaço vivido é chamado de:', ['lugar', 'região', 'fuso horário', 'latitude'], 0, 'Lugar é o espaço vivido, carregado de afeto e memória.'),
          Q('A parte do mapa que explica o significado dos símbolos e cores é a:', ['legenda', 'escala', 'rosa dos ventos', 'latitude'], 0, 'A legenda “traduz” os símbolos do mapa.'),
          Q('Tudo aquilo que vemos, ouvimos e sentimos ao observar uma área, como prédios, rios e o barulho da rua, compõe a:', ['paisagem', 'região', 'população', 'economia'], 0, 'Paisagem é o que se percebe pelos sentidos.')
        ]
      },
      {
        id: 'hum-5', ico: '🌦️', title: 'Clima, biomas e ambiente', topic: 'Tempo e clima, biomas brasileiros e problemas ambientais',
        lesson: [
          K('Tempo × Clima', 'Tempo', ['Condição do <b>momento</b>', '“Hoje vai chover à tarde”'], 'Clima', ['Padrão de <b>longo prazo</b> (décadas)', '“O verão aqui é quente e chuvoso”']),
          C('🌳', 'Biomas brasileiros', '<ul><li><b>Amazônia</b>: floresta úmida, maior biodiversidade</li><li><b>Cerrado</b>: savana, “berço das águas”, muito afetado pela agropecuária</li><li><b>Caatinga</b>: semiárido, plantas adaptadas à seca, exclusivo do Brasil</li><li><b>Mata Atlântica</b>: litoral, muito desmatada</li><li><b>Pantanal</b>: planície que alaga</li><li><b>Pampa</b>: campos do Sul</li></ul>'),
          C('🔥', 'Problemas ambientais', '<p>Desmatamento, queimadas, poluição, <b>mudanças climáticas</b> e perda de biodiversidade. Relevo, solos e rios também sofrem com o uso inadequado.</p>'),
          V('“Amanhã vai fazer 30 °C em Recife” é uma informação sobre o clima.', false, 'Falso. É sobre o tempo, uma condição do momento.')
        ],
        quiz: [
          Q('“Na região, os invernos são secos e os verões chuvosos, como acontece há muitas décadas.” A frase descreve:', ['o clima', 'o tempo', 'o relevo', 'a hidrografia'], 0, 'Um padrão de longo prazo é clima.'),
          Q('O bioma brasileiro de clima semiárido, com plantas adaptadas à falta de chuva e que só existe no Brasil, é a:', ['Caatinga', 'Amazônia', 'Mata Atlântica', 'Pampa'], 0, 'A Caatinga é exclusiva do Brasil e tem vegetação adaptada à seca.'),
          Q('O bioma que ocupa grande parte do litoral brasileiro e que perdeu a maior parte de sua vegetação original é a:', ['Mata Atlântica', 'Caatinga', 'Pantanal', 'Pampa'], 0, 'A Mata Atlântica foi muito desmatada desde a colonização.'),
          Q('A planície que passa boa parte do ano alagada, com grande diversidade de aves e peixes, caracteriza o:', ['Pantanal', 'Cerrado', 'Pampa', 'Caatinga'], 0, 'O Pantanal é uma grande planície inundável.'),
          Q('“O céu está nublado agora e deve chover nas próximas horas.” A frase se refere ao:', ['tempo', 'clima', 'bioma', 'relevo'], 0, 'Condição do momento é tempo atmosférico.')
        ]
      },
      {
        id: 'hum-6', ico: '🏙️', title: 'População e economia', topic: 'Urbanização, migração, setores da economia e globalização',
        lesson: [
          C('👨‍👩‍👧', 'População', '<p>Estude <b>crescimento</b>, <b>migração</b> (mudança de lugar), <b>envelhecimento</b> da população e <b>urbanização</b> (crescimento das cidades).</p><p>O Brasil hoje tem <b>mais idosos</b> e famílias menores do que décadas atrás.</p>'),
          K('Setores da economia', 'Setor', ['<b>Primário</b>', '<b>Secundário</b>', '<b>Terciário</b>'], 'Atividades', ['Agricultura, pecuária, extrativismo', 'Indústria e construção', 'Comércio e serviços']),
          C('🌐', 'Globalização', '<p>Intensifica os <b>fluxos</b> de mercadorias, dinheiro, pessoas e informações pelo mundo, mas <span class="hl">não elimina as desigualdades</span>.</p>'),
          C('🚌', 'Problemas urbanos', '<p>Mobilidade, moradia, saneamento e <b>segregação socioespacial</b> (grupos separados pela renda no espaço da cidade).</p>'),
          V('Um professor trabalha no setor terciário da economia.', true, 'Verdadeiro. Educação é um serviço.')
        ],
        quiz: [
          Q('Uma fábrica de móveis pertence ao setor:', ['secundário', 'primário', 'terciário', 'quaternário'], 0, 'Indústria é setor secundário.'),
          Q('Um agricultor que planta feijão e milho trabalha no setor:', ['primário', 'secundário', 'terciário', 'industrial'], 0, 'Agricultura é setor primário.'),
          Q('A globalização pode ser definida como:', ['a intensificação dos fluxos de mercadorias, capitais, pessoas e informações pelo mundo', 'o fim de todas as desigualdades entre países', 'o isolamento das economias nacionais', 'a volta das trocas apenas locais'], 0, 'A globalização aumenta as conexões, mas não acaba com as desigualdades.'),
          Q('Famílias de baixa renda morando nas periferias distantes, enquanto bairros centrais concentram serviços e infraestrutura, é um exemplo de:', ['segregação socioespacial', 'êxodo urbano', 'globalização cultural', 'clima urbano'], 0, 'A separação dos grupos sociais no espaço da cidade é segregação socioespacial.'),
          Q('O aumento da proporção de pessoas idosas na população brasileira é chamado de:', ['envelhecimento populacional', 'explosão demográfica', 'migração pendular', 'êxodo rural'], 0, 'Com menos nascimentos e vida mais longa, a população envelhece.')
        ]
      },
      {
        id: 'hum-7', ico: '🤔', title: 'Filosofia', topic: 'Sócrates, Platão, Aristóteles, conhecimento e ética',
        lesson: [
          C('🤔', 'O que a Filosofia faz', '<p>Investiga perguntas sobre <b>conhecimento</b>, <b>verdade</b>, <b>ética</b>, <b>política</b>, <b>liberdade</b> e <b>existência</b>.</p>'),
          K('Os três gregos', 'Filósofo', ['<b>Sócrates</b>', '<b>Platão</b>', '<b>Aristóteles</b>'], 'Ideia central', ['Diálogo e perguntas: “só sei que nada sei”', 'Mundo das ideias e a justiça', 'Lógica, virtude e política']),
          K('De onde vem o conhecimento?', 'Racionalismo', ['Conhecimento vem da <b>razão</b>', 'Ex.: Descartes'], 'Empirismo', ['Conhecimento vem da <b>experiência</b> e dos sentidos', 'Ex.: Locke']),
          C('⚖️', 'Ética e argumentos', '<p><b>Ética</b> examina ações e valores. <b>Democracia</b> envolve participação, direitos, pluralismo e limites ao poder.</p><p>Ao analisar um argumento, ache a <b>tese</b>, as <b>justificativas</b> e possíveis <b>contradições</b>.</p>'),
          V('Para os empiristas, o conhecimento vem principalmente da experiência.', true, 'Verdadeiro. Os empiristas valorizam os sentidos e a experiência.')
        ],
        quiz: [
          Q('O filósofo grego que andava pelas praças fazendo perguntas para que as pessoas refletissem sobre suas certezas foi:', ['Sócrates', 'Karl Marx', 'Descartes', 'Durkheim'], 0, 'Sócrates usava o diálogo e o questionamento.'),
          Q('A corrente filosófica que afirma que o conhecimento vem principalmente da experiência e dos sentidos é o:', ['empirismo', 'racionalismo', 'absolutismo', 'feudalismo'], 0, 'Empirismo: conhecimento pela experiência.'),
          Q('A área da Filosofia que examina o que é certo ou errado nas ações humanas é a:', ['ética', 'cartografia', 'estatística', 'ecologia'], 0, 'A ética reflete sobre valores e condutas.'),
          Q('O filósofo grego conhecido por seus estudos de lógica e pela ideia de virtude como equilíbrio foi:', ['Aristóteles', 'Sócrates', 'Weber', 'Locke'], 0, 'Aristóteles sistematizou a lógica e escreveu sobre virtude e política.'),
          Q('Um sistema democrático se caracteriza por:', ['participação popular, garantia de direitos e limites ao poder', 'poder ilimitado de um só governante', 'proibição de partidos e de imprensa livre', 'decisões tomadas apenas por militares'], 0, 'Democracia envolve participação, direitos, pluralismo e controle do poder.')
        ]
      },
      {
        id: 'hum-8', ico: '👥', title: 'Sociologia e cidadania', topic: 'Durkheim, Marx, Weber, cultura e direitos humanos',
        lesson: [
          K('Os clássicos da Sociologia', 'Autor', ['<b>Durkheim</b>', '<b>Marx</b>', '<b>Weber</b>'], 'Ideia central', ['<b>Fatos sociais</b>: regras externas ao indivíduo que o influenciam', '<b>Classes sociais</b>, trabalho e conflitos no capitalismo', '<b>Ação social</b>, poder e dominação']),
          K('Etnocentrismo × Relativismo', 'Etnocentrismo', ['Julgar outras culturas pelos <b>padrões da própria</b>', 'Gera preconceito'], 'Relativismo cultural', ['Entender cada cultura <b>em seu contexto</b>', 'Favorece o respeito']),
          C('🧑‍🤝‍🧑', 'Conceitos importantes', '<p><b>Socialização</b> (aprender a viver em sociedade), <b>identidade</b>, <b>desigualdade</b>, <b>movimentos sociais</b>, <b>cidadania</b>, trabalho, consumo, mídia e tecnologia.</p>'),
          C('🕊️', 'Direitos humanos', '<p>Garantem <b>dignidade</b>, <b>liberdade</b>, <b>igualdade</b> e proteção contra a <b>discriminação</b> para todas as pessoas.</p>'),
          V('Achar estranha e “inferior” a comida de outro país só porque é diferente da nossa é um exemplo de etnocentrismo.', true, 'Verdadeiro. É julgar outra cultura pelos padrões da própria.')
        ],
        quiz: [
          Q('O pensador que analisou as classes sociais e os conflitos entre trabalhadores e donos dos meios de produção no capitalismo foi:', ['Karl Marx', 'Émile Durkheim', 'Max Weber', 'Aristóteles'], 0, 'Marx estudou classes, trabalho e conflitos no capitalismo.'),
          Q('Para Durkheim, os fatos sociais são:', ['maneiras de agir e pensar exteriores ao indivíduo, que exercem influência sobre ele', 'decisões apenas individuais, sem relação com a sociedade', 'características biológicas herdadas', 'fenômenos da natureza'], 0, 'Fatos sociais são exteriores, gerais e exercem pressão sobre os indivíduos.'),
          Q('Etnocentrismo é:', ['julgar outras culturas a partir dos valores da própria cultura', 'respeitar todas as culturas igualmente', 'estudar a origem do planeta', 'defender a diversidade religiosa'], 0, 'É tomar a própria cultura como “medida” das outras.'),
          Q('Grupos organizados que lutam por moradia, terra ou direitos de minorias são chamados de:', ['movimentos sociais', 'oligarquias', 'feudos', 'biomas'], 0, 'Movimentos sociais são ações coletivas por direitos e mudanças.'),
          Q('O processo pelo qual uma criança aprende a língua, os costumes e as regras da sociedade em que vive chama-se:', ['socialização', 'globalização', 'urbanização', 'industrialização'], 0, 'Socialização é aprender a viver em sociedade, na família, na escola e em outros grupos.')
        ]
      }
    ]
  },

  /* =================================================================
     UNIDADE 5 — REDAÇÃO
     ================================================================= */
  {
    id: 'red', mascot: 'notebook', area: 'red', c: '#e11d74', cd: '#b0125a', emoji: '📝', theme: 'redacao',
    title: 'Redação', sub: 'Texto dissertativo-argumentativo, nota de 0 a 10 (mínimo 5)',
    fases: [
      {
        id: 'red-1', ico: '🎯', title: 'Como a redação é avaliada', topic: 'Tipo de texto, competências e o que zera',
        lesson: [
          C('📝', 'O que a prova pede', '<p>Um texto <b>dissertativo-argumentativo</b> sobre um tema social: você apresenta um <b>ponto de vista</b>, defende com <b>argumentos</b> e, no Ensino Médio, propõe uma <span class="hl">intervenção</span> para o problema.</p><p>A nota vai de <b>0 a 10</b>. Para certificar Linguagens, é preciso tirar <b>pelo menos 5</b> na redação, além de 100 pontos na prova objetiva da área.</p>'),
          C('🧩', 'As 5 competências (Ensino Médio)', '<ol style="padding-left:20px;margin:0 0 12px"><li>Domínio da <b>norma-padrão</b> escrita</li><li><b>Compreender o tema</b> e escrever no tipo de texto pedido</li><li><b>Selecionar e organizar</b> argumentos</li><li>Usar <b>mecanismos de coesão</b> (conectivos, retomadas)</li><li>Elaborar <b>proposta de intervenção</b> respeitando os direitos humanos</li></ol>'),
          C('⛔', 'O que pode zerar', '<ul><li><b>Fugir totalmente</b> do tema</li><li>Escrever em outro tipo de texto (poema, narração, carta)</li><li><b>Copiar</b> os textos motivadores</li><li>Texto muito curto ou em branco</li></ul><p>A cartilha oficial de cada edição traz a lista completa dessas regras.</p>'),
          T('Leia a cartilha', '<p>Todo ano o Inep publica a <b>Cartilha do Participante – Redação</b>, com redações comentadas. Ler esses exemplos ajuda muito.</p>'),
          V('Na redação do Encceja Ensino Médio, posso escrever uma história (narração) sobre o tema.', false, 'Falso. O tipo pedido é dissertativo-argumentativo. Narração pode zerar a redação.')
        ],
        quiz: [
          Q('O tipo de texto exigido na redação do Encceja Ensino Médio é:', ['dissertativo-argumentativo', 'narrativo', 'poema', 'carta pessoal'], 0, 'É preciso defender um ponto de vista com argumentos.'),
          Q('Para obter a certificação em Linguagens, além de 100 pontos na prova objetiva, o participante precisa tirar na redação nota mínima de:', ['5', '3', '8', '10'], 0, 'A redação vale de 0 a 10, e a nota mínima é 5.'),
          Q('Qual atitude pode levar a redação à nota zero?', ['Copiar trechos dos textos motivadores em vez de escrever com as próprias palavras', 'Usar conectivos para ligar os parágrafos', 'Apresentar uma proposta de intervenção', 'Dividir o texto em parágrafos'], 0, 'Cópia dos textos motivadores é motivo de anulação. As outras atitudes são boas práticas.'),
          Q('A competência que avalia o uso de conectivos e de palavras que retomam ideias, ligando as partes do texto, é a de:', ['mecanismos de coesão', 'proposta de intervenção', 'domínio do tema', 'identificação pessoal'], 0, 'Coesão é a ligação entre frases e parágrafos.'),
          Q('A proposta de intervenção deve:', ['apresentar uma solução para o problema, respeitando os direitos humanos', 'pedir punições violentas aos envolvidos', 'repetir a introdução com outras palavras', 'trazer uma história pessoal sem relação com o tema'], 0, 'A intervenção responde ao problema e precisa respeitar os direitos humanos.')
        ]
      },
      {
        id: 'red-2', ico: '💡', title: 'Tema, tese e introdução', topic: 'Entender o tema e apresentar o ponto de vista',
        lesson: [
          C('🔍', 'Leia o tema palavra por palavra', '<p>Tema: “<b>Desafios</b> para <b>ampliar a leitura</b> entre <b>jovens e adultos</b> no Brasil”.</p><ul><li>O foco são os <b>desafios</b>, não a história da leitura</li><li>O público é <b>jovens e adultos</b></li><li>O recorte é o <b>Brasil</b></li></ul><p>Fugir de uma dessas partes enfraquece o texto.</p>'),
          K('Tema × Tese', 'Tema', ['O <b>assunto</b> dado pela banca', 'Igual para todos'], 'Tese', ['A <b>sua opinião</b> sobre o tema', 'Deve aparecer clara na introdução']),
          C('🏗️', 'Introdução em 3 frases', '<ol style="padding-left:20px;margin:0 0 12px"><li><b>Contextualize</b>: um dado, fato ou situação ligada ao tema</li><li><b>Apresente a tese</b>: o seu ponto de vista</li><li><b>Anuncie</b> os dois argumentos que virão</li></ol>'),
          C('✍️', 'Exemplo', '<p class="cmp-ex"><i>“Embora a leitura seja essencial para a participação social, muitos brasileiros adultos leem pouco. Esse cenário revela um problema que precisa ser enfrentado, pois decorre da falta de acesso a livros e da rotina exaustiva de trabalho.”</i></p><p>✔ Contexto • ✔ Tese • ✔ Dois argumentos anunciados</p>'),
          V('A tese é o assunto geral que a banca propõe.', false, 'Falso. O assunto é o tema. A tese é o seu ponto de vista sobre ele.')
        ],
        quiz: [
          Q('Tema: “Caminhos para reduzir o desperdício de alimentos no Brasil”. Qual tese está ADEQUADA ao tema?', ['O desperdício de alimentos pode ser reduzido com educação para o consumo e melhor aproveitamento na distribuição.', 'A culinária brasileira é uma das mais variadas do mundo.', 'A história da agricultura começou há milhares de anos.', 'Os restaurantes deveriam vender mais sobremesas.'], 0, 'A tese precisa responder ao recorte do tema: caminhos para reduzir o desperdício.'),
          Q('Tema: “Desafios para a inclusão digital de idosos”. O participante escreve sobre os perigos dos jogos eletrônicos para crianças. Isso caracteriza:', ['fuga ao tema', 'boa contextualização', 'proposta de intervenção', 'uso correto de conectivos'], 0, 'O texto trata de outro público e de outro assunto: foge do tema.'),
          Q('Qual elemento NÃO precisa estar na introdução?', ['A proposta de intervenção detalhada', 'A contextualização do tema', 'A tese', 'O anúncio dos argumentos'], 0, 'A intervenção detalhada fica na conclusão.'),
          Q('Leia: “No Brasil, muitas pessoas ainda não têm acesso ao saneamento básico. Essa realidade é inaceitável, porque prejudica a saúde e a dignidade da população.” Nesse trecho, a tese é:', ['a ideia de que a falta de saneamento é inaceitável, por prejudicar saúde e dignidade', 'a informação de que existe saneamento no Brasil', 'a palavra “população”', 'uma pergunta ao leitor'], 0, 'A tese é o posicionamento: a situação é inaceitável, com a justificativa apresentada.'),
          Q('Ao ler o tema “A importância da vacinação para a saúde coletiva”, o primeiro passo do participante deve ser:', ['identificar as palavras-chave e o recorte do tema', 'começar a escrever direto na folha definitiva', 'copiar os textos motivadores', 'escolher um tema mais fácil'], 0, 'Entender o recorte evita fuga ao tema.')
        ]
      },
      {
        id: 'red-3', ico: '🧱', title: 'Argumentação', topic: 'Parágrafos de desenvolvimento',
        lesson: [
          C('🧱', 'O parágrafo de desenvolvimento', '<p>Cada parágrafo defende <b>um argumento</b>:</p><ol style="padding-left:20px;margin:0 0 12px"><li><b>Tópico frasal</b>: a ideia do parágrafo</li><li><b>Explicação</b>: por que isso acontece?</li><li><b>Exemplo ou dado</b>: fato, situação real, comparação, lei</li><li><b>Fechamento</b>: liga de volta à tese</li></ol>'),
          C('📦', 'Repertório: de onde tirar exemplos', '<ul><li>Fatos e notícias do Brasil</li><li>A Constituição e leis (ex.: o direito à educação)</li><li>Situações do cotidiano e do trabalho</li><li>Conhecimentos de história, geografia e ciências</li></ul><p>Use <span class="hl">só o que você tem certeza</span>. Informação inventada enfraquece o texto.</p>'),
          K('Argumento fraco × forte', 'Fraco', ['“A leitura é muito importante e todos deveriam ler.”', 'Só afirma, não explica'], 'Forte', ['“Quem lê mais tende a compreender melhor contratos, notícias e direitos, o que amplia a autonomia no dia a dia.”', 'Afirma <b>e</b> explica']),
          V('Um bom argumento precisa ser explicado, e não apenas afirmado.', true, 'Verdadeiro. A explicação mostra ao leitor por que o argumento é válido.')
        ],
        quiz: [
          Q('Qual frase apresenta um argumento mais bem desenvolvido sobre a importância do transporte público de qualidade?', ['Transporte público de qualidade reduz o número de carros nas ruas, o que diminui congestionamentos e a poluição do ar.', 'O transporte público é muito importante.', 'Todo mundo precisa de transporte.', 'Ônibus são grandes e coloridos.'], 0, 'Ela afirma e explica as consequências. As outras apenas afirmam ou fogem do ponto.'),
          Q('A função do tópico frasal em um parágrafo de desenvolvimento é:', ['apresentar a ideia principal daquele parágrafo', 'encerrar a redação', 'repetir o título', 'listar as referências bibliográficas'], 0, 'É a frase que anuncia o argumento do parágrafo.'),
          Q('Para comprovar que a falta de saneamento afeta a saúde, o melhor exemplo é:', ['a relação entre esgoto a céu aberto e o aumento de casos de diarreia', 'a cor das casas do bairro', 'o nome do prefeito da cidade', 'o horário do noticiário'], 0, 'O exemplo precisa estar ligado ao argumento.'),
          Q('Um participante cita um dado estatístico que inventou na hora para parecer convincente. Essa estratégia é:', ['arriscada, porque informação falsa enfraquece o texto', 'recomendada para ganhar pontos', 'obrigatória em toda redação', 'indiferente para a nota'], 0, 'Use apenas informações que você conhece com segurança.'),
          Q('Em uma redação com quatro parágrafos, os argumentos devem estar principalmente:', ['nos dois parágrafos de desenvolvimento', 'apenas no título', 'somente na última linha', 'fora do texto'], 0, 'Os parágrafos do meio desenvolvem os argumentos anunciados na introdução.')
        ]
      },
      {
        id: 'red-4', ico: '🔗', title: 'Coesão na redação', topic: 'Conectivos entre frases e parágrafos',
        lesson: [
          C('🔗', 'Conectivos que valem ouro', '<ul><li><b>Adição</b>: além disso, também, ademais</li><li><b>Oposição</b>: porém, entretanto, no entanto</li><li><b>Causa</b>: porque, visto que, já que</li><li><b>Consequência</b>: por isso, portanto, consequentemente</li><li><b>Exemplo</b>: por exemplo, como</li><li><b>Conclusão</b>: assim, diante disso, dessa forma</li></ul>'),
          K('Começo de parágrafo', 'Desenvolvimento 1', ['“Em primeiro lugar, ...”', '“Inicialmente, ...”'], 'Desenvolvimento 2 e conclusão', ['“Além disso, ...” / “Outro fator, ...”', '“Diante disso, ...” / “Portanto, ...”']),
          C('🔁', 'Retomadas: evite repetir', '<p>Em vez de repetir “os idosos” várias vezes, use <b>pronomes</b> (eles, esse grupo) e <b>sinônimos</b> (pessoas mais velhas, essa população).</p>'),
          T('Cuidado', '<p>Conectivo errado muda o sentido. “Choveu, <b>portanto</b> fui à praia” soa estranho. O certo seria “Choveu, <b>mas</b> fui à praia”.</p>'),
          V('“Diante disso” é um bom conectivo para iniciar a conclusão.', true, 'Verdadeiro. Ele retoma o que foi dito e introduz o fechamento.')
        ],
        quiz: [
          Q('Complete com o conectivo adequado: “O acesso à internet cresceu no país; ______, muitas famílias ainda não têm conexão de qualidade.”', ['entretanto', 'portanto', 'por exemplo', 'além disso'], 0, 'Há oposição entre as ideias: “entretanto”.'),
          Q('Qual conectivo é mais adequado para iniciar o segundo parágrafo de desenvolvimento, apresentando um novo argumento?', ['Além disso,', 'Em suma,', 'Era uma vez,', 'Por outro lado do rio,'], 0, '“Além disso” acrescenta um novo argumento.'),
          Q('No trecho “Os jovens precisam de qualificação. Esses jovens, porém, enfrentam dificuldades”, a expressão “esses jovens” serve para:', ['retomar um termo já citado, garantindo coesão', 'iniciar um novo tema', 'concluir o texto', 'apresentar uma pergunta'], 0, 'É uma retomada que liga as frases.'),
          Q('Complete: “Muitos trabalhadores estudam à noite, ______ passam o dia trabalhando.”', ['visto que', 'entretanto', 'por exemplo', 'em suma'], 0, 'A segunda parte explica a causa: “visto que”.'),
          Q('Para iniciar a conclusão, uma boa opção é:', ['Diante do exposto,', 'Por exemplo,', 'Em primeiro lugar,', 'Era uma vez,'], 0, '“Diante do exposto” retoma o texto e introduz o fechamento.')
        ]
      },
      {
        id: 'red-5', ico: '🛠️', title: 'Proposta de intervenção', topic: 'Agente, ação, meio, finalidade e direitos humanos',
        lesson: [
          C('🛠️', 'Os 4 elementos', '<ul><li><b>Agente</b>: quem vai fazer? (governo, escolas, mídia, ONGs, família)</li><li><b>Ação</b>: o que vai ser feito?</li><li><b>Meio</b>: como? por meio de quê?</li><li><b>Finalidade</b>: para quê? qual o resultado esperado?</li></ul>'),
          C('✍️', 'Exemplo completo', '<p><i>“Portanto, <b>o Ministério da Educação</b>, em parceria com as prefeituras, deve <b>ampliar bibliotecas comunitárias</b> <b>por meio da criação de salas de leitura em horários noturnos</b>, <b>a fim de facilitar o acesso de trabalhadores aos livros</b>.”</i></p><p>Agente ✔ Ação ✔ Meio ✔ Finalidade ✔</p>'),
          C('🕊️', 'Respeito aos direitos humanos', '<p>A proposta não pode defender <b>violência</b>, <b>tortura</b>, <b>pena de morte</b> ou <b>discriminação</b>. Proponha soluções que protejam as pessoas.</p>'),
          T('Ligue à tese', '<p>A intervenção deve resolver <b>o problema discutido</b> nos argumentos. Proposta genérica (“o governo deve fazer algo”) vale pouco.</p>'),
          V('“O governo deve resolver isso” é uma proposta de intervenção completa.', false, 'Falso. Falta dizer qual ação, por qual meio e com que finalidade.')
        ],
        quiz: [
          Q('Qual proposta de intervenção está mais completa?', ['As secretarias de saúde devem promover campanhas de vacinação nos bairros, por meio de agentes comunitários e da mídia local, a fim de ampliar a cobertura vacinal.', 'Alguém precisa fazer alguma coisa sobre a vacinação.', 'A vacinação é importante.', 'O governo deve agir.'], 0, 'Ela tem agente, ação, meio e finalidade.'),
          Q('Na proposta “As escolas devem oferecer oficinas de educação financeira, por meio de parcerias com bancos públicos, para reduzir o endividamento das famílias”, o trecho “para reduzir o endividamento das famílias” indica a:', ['finalidade', 'ação', 'agente', 'meio'], 0, 'A finalidade responde “para quê?”.'),
          Q('Qual proposta DESRESPEITA os direitos humanos?', ['Castigar fisicamente quem descumprir as regras de trânsito.', 'Ampliar a fiscalização com radares e campanhas educativas.', 'Melhorar a sinalização das ruas.', 'Incluir educação para o trânsito nas escolas.'], 0, 'Castigo físico viola os direitos humanos.'),
          Q('Na proposta “O Ministério da Saúde deve ampliar o atendimento psicológico gratuito, por meio de unidades básicas de saúde, para cuidar da saúde mental da população”, o agente é:', ['o Ministério da Saúde', 'o atendimento psicológico', 'as unidades básicas de saúde', 'a saúde mental'], 0, 'O agente é quem executa a ação.'),
          Q('A proposta de intervenção, na estrutura em quatro parágrafos, aparece geralmente:', ['na conclusão', 'no título', 'na primeira linha da introdução', 'em todos os parágrafos'], 0, 'A conclusão retoma a tese e apresenta a intervenção.')
        ]
      },
      {
        id: 'red-6', ico: '🖊️', title: 'Planejar, escrever e revisar', topic: 'Roteiro, checklist e treino de redação',
        lesson: [
          C('🗺️', 'Roteiro em 5 minutos', '<p>Antes de escrever, faça no rascunho:</p><ul><li><b>Tese</b> em uma frase</li><li><b>Argumento 1</b> + exemplo</li><li><b>Argumento 2</b> + exemplo</li><li><b>Intervenção</b>: agente, ação, meio, finalidade</li></ul>'),
          C('🧱', 'Estrutura em 4 parágrafos', '<ul><li><b>Introdução</b>: contexto + tese</li><li><b>Desenvolvimento 1</b>: argumento + explicação + exemplo</li><li><b>Desenvolvimento 2</b>: outro argumento, causa ou consequência</li><li><b>Conclusão</b>: retomada da tese + intervenção</li></ul>'),
          C('✅', 'Checklist de revisão', '<ul><li>Respondi exatamente ao tema?</li><li>Minha tese está clara?</li><li>Cada parágrafo tem uma função?</li><li>Expliquei os argumentos?</li><li>Usei conectivos sem repetir demais?</li><li>A intervenção diz quem, o quê, como e para quê?</li><li>Revisei ortografia, pontuação, concordância e letra legível?</li></ul>'),
          W('Laboratório de redação', 'Desafios para ampliar o acesso à qualificação profissional de jovens e adultos no Brasil', 'Planeje por 5 minutos, escreva entre 20 e 30 linhas e revise com o checklist. Seu texto fica salvo neste aparelho.', ['Respondi exatamente ao tema', 'A tese está clara na introdução', 'Cada parágrafo de desenvolvimento tem um argumento explicado', 'Usei conectivos variados', 'A intervenção tem agente, ação, meio e finalidade', 'A proposta respeita os direitos humanos', 'Revisei ortografia, pontuação e concordância']),
          V('É melhor começar a escrever direto na folha definitiva, sem rascunho, para ganhar tempo.', false, 'Falso. Planejar no rascunho evita fuga ao tema e deixa o texto mais organizado.')
        ],
        quiz: [
          Q('A ordem mais adequada para produzir a redação é:', ['ler o tema, planejar no rascunho, escrever e revisar', 'escrever direto na folha definitiva e entregar', 'copiar os textos motivadores e revisar', 'revisar antes de escrever'], 0, 'Planejar e revisar aumentam a qualidade do texto.'),
          Q('Ao revisar, o participante percebe que o segundo argumento não tem explicação. A melhor atitude é:', ['acrescentar uma explicação ou exemplo que sustente o argumento', 'apagar a conclusão', 'trocar de tema', 'deixar como está, pois não faz diferença'], 0, 'Argumento sem explicação perde força.'),
          Q('No planejamento, o participante anota: “Agente: escolas; Ação: oficinas de currículo; Meio: parcerias com empresas; Finalidade: facilitar o primeiro emprego”. Esse trecho prepara a:', ['proposta de intervenção', 'introdução', 'tese apenas', 'contextualização histórica'], 0, 'Agente, ação, meio e finalidade compõem a intervenção.'),
          Q('Qual item NÃO faz parte de um bom checklist de revisão?', ['Conferir se copiou bem os textos motivadores', 'Conferir se a tese está clara', 'Conferir ortografia e concordância', 'Conferir se a intervenção está completa'], 0, 'Copiar os textos motivadores é proibido e pode zerar a redação.'),
          Q('A conclusão de uma redação dissertativo-argumentativa deve:', ['retomar a tese e apresentar a proposta de intervenção', 'iniciar um assunto totalmente novo', 'repetir palavra por palavra a introdução', 'contar uma história sem relação com o tema'], 0, 'A conclusão fecha o raciocínio e propõe a solução.')
        ]
      }
    ]
  }
];

const FC_RAW = [
  ['ling-1', 'Tema × tese', '• <b>Tema</b>: assunto geral<br>• <b>Tese</b>: opinião central defendida'],
  ['ling-1', 'Informação explícita × inferência', '• <b>Explícita</b>: está escrita<br>• <b>Inferência</b>: conclusão a partir de pistas do texto'],
  ['ling-1', 'Fato × opinião', '• <b>Fato</b>: pode ser verificado<br>• <b>Opinião</b>: expressa avaliação'],
  ['ling-2', 'Notícia × reportagem × artigo de opinião', '• Notícia: <b>informa</b> um fato<br>• Reportagem: <b>aprofunda</b><br>• Artigo de opinião: <b>defende uma tese</b>'],
  ['ling-2', 'Charge e tirinha', 'Imagem + texto para <b>criticar</b> ou fazer <b>humor</b>. A charge comenta fatos atuais.'],
  ['ling-2', 'Textos que orientam', '<b>Receita, manual, bula</b>: passos e instruções, com verbos no imperativo.'],
  ['ling-3', 'Conectivos e sentidos', '• mas/porém: oposição<br>• porque: causa<br>• portanto: conclusão<br>• embora: concessão<br>• além disso: adição'],
  ['ling-3', 'Coesão × coerência', '• <b>Coesão</b>: ligações entre as partes<br>• <b>Coerência</b>: sentido lógico'],
  ['ling-3', 'Regra de ouro da vírgula', '<b>Não</b> se separa o sujeito do verbo com vírgula.'],
  ['ling-4', 'Variação linguística', 'Muda com <b>região, idade, grupo e situação</b>. O que importa é a <b>adequação</b>. Diferença não justifica preconceito.'],
  ['ling-4', 'Metáfora × comparação', '• <b>Comparação</b>: com “como”<br>• <b>Metáfora</b>: sem conectivo (“ele é um leão”)'],
  ['ling-4', 'Hipérbole, antítese, personificação', '• Hipérbole: <b>exagero</b><br>• Antítese: <b>opostos</b><br>• Personificação: ação <b>humana</b> para coisas'],
  ['ling-5', 'Arcadismo × Romantismo', '• Arcadismo: <b>vida no campo</b> idealizada<br>• Romantismo: <b>emoção</b>, nacionalismo, amor idealizado'],
  ['ling-5', 'Realismo × Parnasianismo', '• Realismo: <b>crítica social</b>, objetividade<br>• Parnasianismo: <b>forma perfeita</b>'],
  ['ling-5', 'Marco do Modernismo', '<b>Semana de Arte Moderna de 1922</b>: liberdade de forma e linguagem do cotidiano.'],
  ['ling-6', 'Falsos cognatos em inglês', '• actually = <b>na verdade</b><br>• pretend = <b>fingir</b><br>• push = <b>empurrar</b>'],
  ['ling-6', 'Falsos cognatos em espanhol', '• embarazada = <b>grávida</b><br>• exquisito = <b>delicioso</b><br>• oficina = <b>escritório</b>'],
  ['ling-6', 'Estratégia para língua estrangeira', 'Use <b>título, imagens, cognatos e contexto</b>. Não é preciso saber todas as palavras.'],
  ['ling-7', 'Atividade × exercício físico', '• Atividade: <b>qualquer movimento</b> que gasta energia<br>• Exercício: <b>planejado</b> e estruturado'],
  ['ling-7', 'Práticas corporais como cultura', 'Esportes, danças, lutas, jogos e ginásticas expressam a <b>identidade</b> de um povo.'],
  ['mat-1', 'Ordem das operações', '1º parênteses • 2º potências e raízes • 3º × e ÷ • 4º + e −'],
  ['mat-1', 'Fração de uma quantidade', 'Divida pelo de baixo e multiplique pelo de cima. <b>3/4 de 80 = 60</b>.'],
  ['mat-1', 'Somar frações', 'Iguale os denominadores: 1/2 + 1/4 = 2/4 + 1/4 = <b>3/4</b>.'],
  ['mat-2', 'Grandezas diretas × inversas', '• Diretas: <b>sobem juntas</b> (mais pães, mais farinha)<br>• Inversas: <b>uma sobe, outra desce</b> (mais pedreiros, menos dias)'],
  ['mat-2', 'Razão × proporção', '• Razão: <b>comparação</b> (3/2)<br>• Proporção: <b>igualdade</b> de razões (3/2 = 6/4)'],
  ['mat-2', 'Regra de três rápida', 'Ache o valor de <b>1 unidade</b> e multiplique. 4 cadernos = R$ 28 → 1 = R$ 7.'],
  ['mat-3', 'Atalhos de porcentagem', '10% = ÷ 10 • 50% = metade • 25% = ÷ 4 • desconto de 15% = × 0,85'],
  ['mat-3', 'Juros simples', '<b>J = C × i × t</b> e <b>M = C + J</b>. Taxa e tempo na mesma unidade.'],
  ['mat-3', 'Aumento seguido de desconto', '50% de desconto e depois 50% de aumento <b>não</b> volta ao preço original.'],
  ['mat-4', 'Resolver equação do 1º grau', 'Isole o x: o que soma passa subtraindo, o que multiplica passa dividindo.'],
  ['mat-4', 'Função afim y = ax + b', '• <b>b</b>: valor inicial<br>• <b>a</b>: taxa de variação'],
  ['mat-4', 'Antes de ler um gráfico', 'Título, eixos, unidades, escala e <b>tendência</b>.'],
  ['mat-5', 'Áreas', '• Retângulo: b × h<br>• Triângulo: (b × h) ÷ 2<br>• Círculo: π × r²'],
  ['mat-5', 'Pitágoras', '<b>hipotenusa² = cateto² + cateto²</b>. Ex.: 3, 4 e 5.'],
  ['mat-5', 'Conversões úteis', '1 km = 1.000 m • 1 m = 100 cm • 1 L = 1.000 mL • <b>1 m³ = 1.000 L</b>'],
  ['mat-6', 'Média, mediana e moda', '• Média: soma ÷ quantidade<br>• Mediana: o do meio<br>• Moda: o que mais se repete'],
  ['mat-6', 'Probabilidade', '<b>favoráveis ÷ possíveis</b>. Dado: chance de par = 3/6 = 50%.'],
  ['mat-6', 'Parcela pequena = mais barato?', 'Nem sempre. Compare o <b>custo total</b> e o <b>preço por unidade</b>.'],
  ['nat-1', 'Organelas-chave', '• Núcleo: material genético<br>• Mitocôndria: energia<br>• Cloroplasto: fotossíntese'],
  ['nat-1', 'Fotossíntese', 'Luz + água + gás carbônico → <b>matéria orgânica + oxigênio</b>.'],
  ['nat-1', 'Seleção natural', 'Os <b>mais adaptados</b> ao ambiente sobrevivem e se reproduzem mais.'],
  ['nat-2', 'Níveis de organização', 'Indivíduo → população → comunidade → ecossistema → biosfera'],
  ['nat-2', 'Papéis na cadeia alimentar', '• Produtores: fabricam matéria orgânica<br>• Consumidores: comem outros seres<br>• Decompositores: reciclam nutrientes'],
  ['nat-2', 'Energia na cadeia alimentar', '<b>Diminui</b> a cada nível, perdida como calor.'],
  ['nat-3', 'Vacina × antibiótico', '• Vacina: <b>previne</b>, cria memória imunológica<br>• Antibiótico: trata <b>bactérias</b>, não vírus'],
  ['nat-3', 'Sistemas do corpo', 'Digestório, respiratório, circulatório, nervoso, endócrino, urinário, locomotor e reprodutor <b>trabalham juntos</b>.'],
  ['nat-3', 'Prevenção de doenças', 'Vacinação, higiene, alimentação, atividade física e <b>saneamento</b>.'],
  ['nat-4', 'Mudanças de estado', 'Fusão (s→l) • Solidificação (l→s) • Vaporização (l→g) • Condensação (g→l) • Sublimação (s→g)'],
  ['nat-4', 'Física × química', '• Física: <b>não</b> forma nova substância<br>• Química: <b>forma</b> nova substância'],
  ['nat-4', 'Separação de misturas', 'Filtração, decantação, destilação, evaporação, centrifugação e separação magnética.'],
  ['nat-5', 'Partes do átomo', '• Prótons (+) e nêutrons no núcleo<br>• Elétrons (−) na eletrosfera<br><b>Z</b> = prótons • <b>A</b> = prótons + nêutrons'],
  ['nat-5', 'Escala de pH', '< 7 ácido • 7 neutro • > 7 básico'],
  ['nat-5', 'Tipos de ligação', '• Iônica: <b>transfere</b> elétrons<br>• Covalente: <b>compartilha</b><br>• Metálica: elétrons livres'],
  ['nat-6', 'Velocidade média', '<b>v = distância ÷ tempo</b>. 120 km em 2 h = 60 km/h.'],
  ['nat-6', 'Leis de Newton', '1ª inércia • 2ª <b>F = m × a</b> • 3ª ação e reação'],
  ['nat-6', 'Massa × peso', '• Massa: quantidade de matéria (kg), não muda<br>• Peso: força da gravidade (N), muda com o lugar'],
  ['nat-7', 'Propagação do calor', '• Condução: <b>contato</b><br>• Convecção: <b>correntes</b> de ar ou líquido<br>• Radiação: <b>ondas</b> (Sol)'],
  ['nat-7', 'Lei de Ohm', '<b>U = R × i</b> (tensão = resistência × corrente)'],
  ['nat-7', 'Consumo de energia', '<b>Energia = potência × tempo</b>. 5 kW por 1 h = 5 kWh.'],
  ['hum-1', 'Tipos de fontes históricas', 'Escritas, orais, visuais, materiais e digitais.'],
  ['hum-1', 'Plantation', 'Latifúndio, <b>monocultura</b>, mão de obra escravizada e produção para <b>exportação</b>.'],
  ['hum-1', 'Quilombos', 'Comunidades de <b>resistência</b> à escravidão. Ex.: Palmares.'],
  ['hum-2', 'Datas do Brasil', '1822 Independência • 1888 Abolição • 1889 República • 1964 golpe • 1988 Constituição'],
  ['hum-2', 'Era Vargas', '1930–1945: industrialização e direitos trabalhistas (CLT).'],
  ['hum-2', 'Ditadura civil-militar', '1964–1985: censura, perseguição e restrição de direitos.'],
  ['hum-3', 'Iluminismo', '<b>Razão</b>, liberdade e crítica ao poder absoluto dos reis.'],
  ['hum-3', 'Revolução Industrial', 'Século XVIII, Inglaterra: <b>máquinas, fábricas</b> e trabalho assalariado.'],
  ['hum-3', 'Guerra Fria', 'Disputa <b>EUA × URSS</b>, sem confronto direto.'],
  ['hum-4', 'Paisagem, lugar, território, região', '• Paisagem: o que se percebe<br>• Lugar: espaço vivido<br>• Território: <b>poder</b><br>• Região: critérios em comum'],
  ['hum-4', 'Escala de mapa', '1 : 100.000 → <b>1 cm = 1 km</b>.'],
  ['hum-4', 'Elementos do mapa', 'Título, legenda, orientação, escala e coordenadas.'],
  ['hum-5', 'Tempo × clima', '• Tempo: <b>agora</b><br>• Clima: <b>padrão de décadas</b>'],
  ['hum-5', 'Biomas brasileiros', 'Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal e Pampa.'],
  ['hum-5', 'Caatinga', 'Semiárido, plantas adaptadas à seca, <b>exclusiva do Brasil</b>.'],
  ['hum-6', 'Setores da economia', '• Primário: agro e extração<br>• Secundário: indústria<br>• Terciário: comércio e serviços'],
  ['hum-6', 'Globalização', 'Mais fluxos de mercadorias, capitais, pessoas e informações, <b>sem eliminar desigualdades</b>.'],
  ['hum-6', 'Segregação socioespacial', 'Grupos sociais <b>separados no espaço</b> da cidade pela renda.'],
  ['hum-7', 'Sócrates, Platão e Aristóteles', '• Sócrates: diálogo<br>• Platão: ideias e justiça<br>• Aristóteles: lógica e virtude'],
  ['hum-7', 'Racionalismo × empirismo', '• Racionalismo: <b>razão</b><br>• Empirismo: <b>experiência</b>'],
  ['hum-7', 'Ética', 'Reflexão sobre <b>ações e valores</b>: o que é certo ou errado.'],
  ['hum-8', 'Durkheim, Marx e Weber', '• Durkheim: fatos sociais<br>• Marx: classes e conflitos<br>• Weber: ação social e poder'],
  ['hum-8', 'Etnocentrismo', 'Julgar outras culturas pelos <b>padrões da própria</b>.'],
  ['hum-8', 'Direitos humanos', 'Dignidade, liberdade, igualdade e proteção contra discriminação.'],
  ['red-1', 'Nota da redação', 'De <b>0 a 10</b>. Mínimo <b>5</b> para certificar Linguagens.'],
  ['red-1', 'O que pode zerar', 'Fuga total ao tema, tipo de texto errado, <b>cópia</b> dos textos motivadores, texto muito curto.'],
  ['red-1', '5 competências (EM)', 'Norma-padrão • tema e tipo de texto • argumentos • coesão • <b>intervenção</b>'],
  ['red-2', 'Introdução em 3 passos', 'Contexto → <b>tese</b> → anúncio dos argumentos'],
  ['red-2', 'Como evitar fuga ao tema', 'Sublinhe as <b>palavras-chave</b> e o <b>recorte</b> (público, lugar, foco).'],
  ['red-2', 'Tese', 'Seu <b>ponto de vista</b> sobre o tema, em uma frase clara.'],
  ['red-3', 'Parágrafo de desenvolvimento', 'Tópico frasal → explicação → exemplo → ligação com a tese'],
  ['red-3', 'Repertório seguro', 'Fatos, leis, situações reais e conhecimentos escolares que você <b>tem certeza</b>.'],
  ['red-3', 'Argumento forte', 'Afirma <b>e explica</b> o porquê.'],
  ['red-4', 'Conectivos de redação', 'Além disso • entretanto • visto que • portanto • por exemplo • diante disso'],
  ['red-4', 'Retomadas', 'Use pronomes e sinônimos para <b>não repetir</b> palavras.'],
  ['red-4', 'Iniciar a conclusão', '“Diante disso”, “Portanto”, “Dessa forma”.'],
  ['red-5', 'Elementos da intervenção', '<b>Agente</b> (quem) • <b>Ação</b> (o quê) • <b>Meio</b> (como) • <b>Finalidade</b> (para quê)'],
  ['red-5', 'Direitos humanos na proposta', 'Nada de violência, tortura, pena de morte ou discriminação.'],
  ['red-5', 'Proposta fraca', '“O governo deve agir” — falta ação, meio e finalidade.'],
  ['red-6', 'Roteiro do rascunho', 'Tese • argumento 1 + exemplo • argumento 2 + exemplo • intervenção'],
  ['red-6', 'Estrutura em 4 parágrafos', 'Introdução • desenvolvimento 1 • desenvolvimento 2 • conclusão'],
  ['red-6', 'Última revisão', 'Tema, tese, argumentos explicados, conectivos, intervenção completa e ortografia.']
];

window.APROVAE_CONCURSOS = window.APROVAE_CONCURSOS || {};
window.APROVAE_CONCURSOS['encceja-2027'] = {
  id: 'encceja-2027',
  produto: 'encceja',
  mascot: 'estudando',
  nome: 'Encceja 2027',
  cargoGrupo: 'Certificação do Ensino Médio',
  edital: 'Edital 2027 ainda não publicado',
  banca: 'Inep',
  prova: null,
  provaTexto: 'Data a definir',
  aulaLabel: 'AULA',
  editalUrl: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/encceja',
  cargos: {
    em: { nome: 'Ensino Médio', curto: 'Ensino Médio', emoji: '🎓', turnoTxt: 'Data e horários saem no edital de 2027' }
  },
  areas: AREAS,
  scoring: 'areas',
  metaAcerto: 0.7,
  notaInfo: 'Para certificar, o Inep exige <b>100 pontos ou mais em cada uma das 4 provas</b> (escala de 60 a 180) e <b>nota 5 ou mais na redação</b> (escala de 0 a 10). A nota usa a TRI, então não é só contar acertos. A meta de 70% aqui é um alvo de treino do Aprovaê, não uma regra oficial.',
  dica: '<b>Dica do Lumi:</b> cada área é avaliada separadamente. Quem passa em algumas áreas pode refazer só as que faltam numa próxima edição.',
  guia: {
    titulo: 'Encceja em 1 minuto',
    nav: 'Sobre a prova',
    sub: 'Exame do Inep para certificar o Ensino Médio de quem não concluiu os estudos na idade regular',
    destaques: [
      { rotulo: 'PROVAS', valor: '4 + redação', texto: '30 questões em cada área' },
      { rotulo: 'IDADE MÍNIMA', valor: '18 anos', texto: 'completos na data da prova' }
    ],
    cards: [
      { titulo: 'COMO É A PROVA', linhas: [['Provas objetivas', '4 áreas • 30 questões cada'], ['Alternativas', '4 por questão (A a D)'], ['Redação', 'Dissertativo-argumentativa'], ['Línguas estrangeiras', 'Questões de inglês e de espanhol'], ['Custo', 'Gratuito (faltosos sem justificativa podem pagar taxa)']] },
      { titulo: 'PARA CERTIFICAR', linhas: [['Cada prova objetiva', '100 pontos ou mais (60 a 180)'], ['Redação', 'Nota 5 ou mais (0 a 10)'], ['Linguagens', 'Exige os dois: prova + redação'], ['Certificação parcial', 'Refaz só as áreas que faltarem']] },
      { titulo: 'REFERÊNCIA: EDIÇÃO 2026', linhas: [['Inscrições', '4 a 15 de maio de 2026'], ['Prova', '23 de agosto de 2026'], ['Manhã', 'Natureza e Matemática'], ['Tarde', 'Linguagens + redação e Humanas']] }
    ],
    estruturaTitulo: 'ÁREAS DO EXAME',
    aviso: 'O edital do Encceja 2027 ainda não foi publicado. Datas e regras podem mudar: confira sempre no site do Inep.',
    linkTexto: 'Abrir página oficial do Encceja (Inep)',
    rodape: 'Fonte: Inep e edital do Encceja 2026.'
  },
  documentos: [
    { nome: 'Página oficial do Encceja (Inep)', tipo: 'SITE', url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/encceja' },
    { nome: 'Materiais de estudo do Inep', tipo: 'SITE', url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/encceja/materiais-de-estudo' },
    { nome: 'Matrizes, documentos e cartilha de redação', tipo: 'SITE', url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/encceja/outros-documentos' },
    { nome: 'Provas e gabaritos anteriores', tipo: 'SITE', url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/encceja/provas-e-gabaritos' }
  ],
  units: UNITS,
  flashcards: FC_RAW
};
})();
