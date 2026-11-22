/* =====================================================================
   Aprovaê+Concursos — Prefeitura de Saquarema/RJ — PSP nº 001/2026 (IBAM)
   Conteúdo e questões ORIGINAIS, escritos para o Aprovaê.
   Textos de lei citados são de domínio público.
   Para adicionar um concurso, copie este arquivo e registre outro id.
   ===================================================================== */
(function () {
const AREAS = {
  esp:  { nome: 'Conhecimentos Específicos', curto: 'Específicos', q: 20, pts: 3, max: 60, cor: '#f97316' },
  port: { nome: 'Língua Portuguesa', curto: 'Português', q: 10, pts: 2, max: 20, cor: '#8b5cf6' },
  leg:  { nome: 'Legislação do SUS e Município', curto: 'SUS + Município', q: 10, pts: 1, max: 10, cor: '#2f80ed' }
};
const Q = (q, o, a, e) => ({ q, o, a, e });
const C = (ico, title, body) => ({ t: 'concept', ico, title, body });
const T = (title, body) => ({ t: 'tip', title, body });
const V = (statement, answer, why) => ({ t: 'check', statement, answer, why });
const K = (title, lh, li, rh, ri) => ({ t: 'compare', title, lh, li, rh, ri });

/* ------------------------------ CONTEÚDO ------------------------------ */
const UNITS = [
  {
    id: 'sus', mascot: 'sus', area: 'leg', c: '#2f80ed', cd: '#1d5fbf', emoji: '🏛️', theme: 'sus',
    title: 'Base do SUS', sub: 'Constituição, leis, história, redes e informação',
    fases: [
      {
        id: 'sus-1', ico: '📜', title: 'Saúde na Constituição', topic: 'CF/88 – arts. 196 a 200',
        lesson: [
          C('📜', 'Art. 196: a frase que mais cai', '<p>A saúde é <span class="hl">direito de todos e dever do Estado</span>.</p><p>Esse direito é garantido por <b>políticas sociais e econômicas</b> que reduzem o risco de doenças, com <span class="hl">acesso universal e igualitário</span> às ações de <b>promoção, proteção e recuperação</b>.</p>'),
          T('Macete', '<p><b>“DiTo DE”</b> → <b>Di</b>reito de <b>To</b>dos, <b>D</b>ever do <b>E</b>stado.</p><p>Se a alternativa disser “direito de quem contribui” ou “só dos mais pobres”, está errada.</p>'),
          C('🧭', 'Art. 197 e 198: como o SUS se organiza', '<p>As ações de saúde são de <span class="hl">relevância pública</span> (art. 197).</p><p>O SUS forma uma <b>rede regionalizada e hierarquizada</b>, com três diretrizes (art. 198):</p><ul><li><b>Descentralização</b>, com direção única em cada esfera de governo</li><li><b>Atendimento integral</b>, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais</li><li><b>Participação da comunidade</b></li></ul>'),
          T('Macete das diretrizes', '<p><b>D-I-P</b> → <b>D</b>escentralização, <b>I</b>ntegralidade, <b>P</b>articipação.</p><p>Pegadinha clássica: “centralização no Ministério da Saúde” <u>não</u> é diretriz.</p>'),
          C('🏥', 'Art. 199 e 200: setor privado e competências', '<p>A assistência à saúde é <b>livre à iniciativa privada</b>. No SUS, o privado entra de forma <span class="hl">complementar</span>, com preferência para entidades <b>filantrópicas e sem fins lucrativos</b>.</p><p>É <b>proibido</b> dar recursos públicos (auxílios ou subvenções) a instituições privadas <b>com fins lucrativos</b>.</p><p>O art. 200 lista competências do SUS, como executar a <b>vigilância sanitária e epidemiológica</b>, cuidar da <b>saúde do trabalhador</b>, participar do <b>saneamento básico</b> e ordenar a formação de recursos humanos.</p>'),
          V('O SUS pode repassar subvenções públicas a hospitais privados com fins lucrativos.', false, 'Falso. O art. 199 proíbe recursos públicos para auxílios ou subvenções a instituições privadas com fins lucrativos.')
        ],
        quiz: [
          Q('Segundo o art. 196 da Constituição Federal, a saúde é:', ['Direito de todos e dever do Estado', 'Direito de quem contribui para a previdência e dever do Estado', 'Dever da família e da sociedade, cabendo ao Estado atuação complementar', 'Direito dos cidadãos de baixa renda e dever exclusivo dos municípios'], 0, 'O art. 196 diz que a saúde é direito de todos e dever do Estado, com acesso universal e igualitário.'),
          Q('Assinale a alternativa que NÃO corresponde a uma diretriz do SUS prevista no art. 198 da CF:', ['Descentralização, com direção única em cada esfera de governo', 'Atendimento integral, com prioridade para as atividades preventivas', 'Participação da comunidade', 'Centralização da gestão no Ministério da Saúde'], 3, 'As diretrizes são descentralização, atendimento integral e participação da comunidade. Centralizar é o oposto da descentralização.'),
          Q('De acordo com o art. 199 da CF, as instituições privadas poderão participar do SUS de forma:', ['Complementar, com preferência para entidades filantrópicas e sem fins lucrativos', 'Substitutiva, sempre que o município não tiver hospital próprio', 'Exclusiva, nos atendimentos de alta complexidade', 'Obrigatória, para todos os hospitais privados do país'], 0, 'O privado entra de forma complementar, mediante contrato ou convênio, com preferência às filantrópicas e sem fins lucrativos.'),
          Q('Constitui competência do SUS, conforme o art. 200 da CF:', ['Executar as ações de vigilância sanitária e epidemiológica', 'Organizar o regime geral de previdência social', 'Administrar o pagamento do seguro-desemprego', 'Julgar, em última instância, as infrações sanitárias'], 0, 'O art. 200 inclui executar a vigilância sanitária e epidemiológica e as ações de saúde do trabalhador.'),
          Q('O art. 197 da CF afirma que as ações e serviços de saúde são de:', ['Relevância pública', 'Utilidade privada', 'Conveniência administrativa', 'Exclusividade estatal'], 0, 'São de relevância pública. A execução pode ser direta ou por terceiros, inclusive pessoas de direito privado.')
        ]
      },
      {
        id: 'sus-2', ico: '⚖️', title: 'Lei 8.080: princípios', topic: 'Lei Orgânica da Saúde',
        lesson: [
          C('⚖️', 'O que é a Lei 8.080/1990', '<p>É a <span class="hl">Lei Orgânica da Saúde</span>: organiza o funcionamento do SUS e as condições de promoção, proteção e recuperação da saúde.</p><p>Art. 2º: o dever do Estado <b>não exclui</b> o dever das pessoas, da família, das empresas e da sociedade.</p>'),
          C('🌱', 'Determinantes e condicionantes (art. 3º)', '<p>A lei reconhece que a saúde depende de muito mais que hospital:</p><ul><li>alimentação, moradia e <b>saneamento básico</b></li><li>meio ambiente, trabalho e renda</li><li>educação, atividade física, transporte e lazer</li><li>acesso a bens e serviços essenciais</li></ul><p>Na visita, o agente enxerga esses fatores na vida real.</p>'),
          K('Doutrinários × Organizativos', 'Doutrinários (o “porquê”)', ['<b>Universalidade</b>: acesso para todos', '<b>Integralidade</b>: da prevenção à reabilitação', '<b>Equidade</b>: mais para quem mais precisa'], 'Organizativos (o “como”)', ['<b>Descentralização</b> com ênfase nos municípios', '<b>Regionalização e hierarquização</b>', '<b>Participação da comunidade</b>']),
          T('Atenção ao texto da lei', '<p>No art. 7º da Lei 8.080 aparece <b>“igualdade da assistência à saúde, sem preconceitos ou privilégios”</b>. O termo <b>equidade</b> vem da doutrina e das políticas do SUS. A banca pode usar os dois.</p>'),
          K('As duas vigilâncias (art. 6º)', 'Vigilância Sanitária', ['Elimina, diminui ou previne <b>riscos</b>', 'Atua no meio ambiente, na produção e circulação de <b>bens</b> e na prestação de <b>serviços</b>', 'Ex.: fiscalizar restaurante, farmácia, alimentos'], 'Vigilância Epidemiológica', ['Conhece, detecta e previne mudanças nos <b>determinantes</b> da saúde', 'Recomenda medidas de <b>prevenção e controle de doenças</b>', 'Ex.: notificar e investigar casos de dengue']),
          V('Integralidade significa atender a pessoa como um todo, da prevenção à reabilitação.', true, 'Verdadeiro. Integralidade é o cuidado completo, em todos os níveis de complexidade.')
        ],
        quiz: [
          Q('O princípio do SUS que garante o acesso de todas as pessoas às ações e serviços de saúde, em todos os níveis de assistência, chama-se:', ['Universalidade de acesso', 'Integralidade da assistência', 'Descentralização político-administrativa', 'Hierarquização da rede'], 0, 'Universalidade: a saúde é direito de cidadania de todas as pessoas.'),
          Q('“Conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde e de intervir nos problemas sanitários decorrentes do meio ambiente, da produção e circulação de bens e da prestação de serviços.” Essa definição da Lei 8.080 refere-se à:', ['Vigilância Sanitária', 'Vigilância Epidemiológica', 'Saúde do Trabalhador', 'Assistência Farmacêutica'], 0, 'Riscos ligados a bens, serviços e ambiente = Vigilância Sanitária (art. 6º, § 1º).'),
          Q('Qual dos itens abaixo NÃO aparece expressamente no art. 3º da Lei 8.080 como determinante e condicionante da saúde?', ['Religião', 'Saneamento básico', 'Moradia', 'Renda'], 0, 'O art. 3º cita alimentação, moradia, saneamento, meio ambiente, trabalho, renda, educação, atividade física, transporte, lazer e acesso a bens e serviços. Religião não está na lista.'),
          Q('Na Lei 8.080, a descentralização político-administrativa tem ênfase na:', ['Descentralização dos serviços para os municípios', 'Privatização dos serviços hospitalares', 'Concentração das decisões no governo federal', 'Transferência da gestão para os planos de saúde'], 0, 'O art. 7º, IX, “a”, fala em ênfase na descentralização dos serviços para os municípios (municipalização).'),
          Q('Segundo o art. 2º da Lei 8.080, o dever do Estado de garantir a saúde:', ['Não exclui o dever das pessoas, da família, das empresas e da sociedade', 'Exclui qualquer responsabilidade da família', 'É transferido integralmente aos municípios', 'Aplica-se apenas a atendimentos de urgência'], 0, 'O dever do Estado não exclui o das pessoas, da família, das empresas e da sociedade.')
        ]
      },
      {
        id: 'sus-3', ico: '🗣️', title: 'Controle social', topic: 'Lei 8.142/1990',
        lesson: [
          C('🗣️', 'A lei da participação', '<p>A <b>Lei 8.142/1990</b> trata da <span class="hl">participação da comunidade</span> na gestão do SUS e das transferências de recursos entre governos.</p><p>Em cada esfera de governo existem duas instâncias colegiadas: a <b>Conferência</b> e o <b>Conselho de Saúde</b>.</p>'),
          K('Conferência × Conselho', 'Conferência de Saúde', ['Reúne-se <b>a cada 4 anos</b>', 'Representação dos vários segmentos sociais', 'Avalia a situação de saúde e <b>propõe diretrizes</b>', 'Convocada pelo Executivo ou, extraordinariamente, por ela ou pelo Conselho'], 'Conselho de Saúde', ['Caráter <b>permanente e deliberativo</b>', 'Governo, prestadores, profissionais e usuários', 'Formula estratégias e <b>controla a execução</b>, inclusive financeira', 'Decisões homologadas pelo chefe do poder']),
          C('⚖️', 'Paridade: metade é do usuário', '<p>A representação dos <span class="hl">usuários é paritária</span> em relação ao conjunto dos demais segmentos → <b>50% usuários</b>.</p><p>A divisão dos outros 50% (25% trabalhadores e 25% gestores e prestadores) vem da <b>Resolução CNS nº 453/2012</b>, não da lei.</p>'),
          C('💰', 'Para receber recursos', '<p>Para receber os repasses do Fundo Nacional de Saúde, municípios, estados e DF precisam ter:</p><ul><li><b>Fundo de Saúde</b></li><li><b>Conselho de Saúde</b></li><li><b>Plano de Saúde</b></li><li><b>Relatórios de gestão</b></li><li>Contrapartida de recursos no orçamento</li><li>Comissão para elaborar o Plano de Carreira, Cargos e Salários (PCCS)</li></ul>'),
          V('O Conselho de Saúde se reúne a cada 4 anos.', false, 'Falso. Quem se reúne a cada 4 anos é a Conferência. O Conselho é permanente.')
        ],
        quiz: [
          Q('Segundo a Lei 8.142/1990, a Conferência de Saúde reunir-se-á a cada:', ['4 anos', '2 anos', '1 ano', '6 meses'], 0, 'Art. 1º, § 1º: a Conferência se reúne a cada quatro anos.'),
          Q('O Conselho de Saúde, conforme a Lei 8.142/1990, tem caráter:', ['Permanente e deliberativo', 'Temporário e consultivo', 'Permanente e apenas consultivo', 'Eventual e fiscalizatório'], 0, 'O Conselho é órgão colegiado de caráter permanente e deliberativo.'),
          Q('A representação dos usuários nos Conselhos e Conferências de Saúde será:', ['Paritária em relação ao conjunto dos demais segmentos', 'Equivalente a um terço das vagas', 'Minoritária, para garantir a decisão técnica', 'Definida livremente pelo prefeito'], 0, 'Paritária em relação ao conjunto dos demais segmentos, ou seja, 50% das vagas.'),
          Q('Para receber recursos do Fundo Nacional de Saúde, o município NÃO precisa contar com:', ['Hospital universitário próprio', 'Fundo de Saúde', 'Conselho de Saúde', 'Plano de Saúde'], 0, 'A lei exige Fundo, Conselho, Plano, relatórios de gestão, contrapartida e comissão do PCCS. Hospital universitário não é requisito.'),
          Q('A Conferência de Saúde será convocada:', ['Pelo Poder Executivo ou, extraordinariamente, por ela própria ou pelo Conselho de Saúde', 'Exclusivamente pelo Ministério Público', 'Pela Câmara de Vereadores, a cada mandato', 'Pelo Tribunal de Contas do Estado'], 0, 'É convocada pelo Poder Executivo ou, extraordinariamente, pela própria Conferência ou pelo Conselho.')
        ]
      }
    ]
  },
  {
    id: 'esp', mascot: 'campo', area: 'esp', c: '#f97316', cd: '#c2570c', emoji: '🧭', theme: 'campo',
    title: 'Específicos do cargo', sub: 'O bloco que vale 60 dos 90 pontos na prova',
    fases: [
      {
        id: 'esp-1', ico: '🪪', title: 'Lei 11.350: ACS e ACE', topic: 'Lei 11.350/2006',
        lesson: [
          C('🪪', 'A lei da sua profissão', '<p>A <b>Lei 11.350/2006</b> regulamenta as atividades de ACS e ACE.</p><p>Essas atividades ocorrem <span class="hl">exclusivamente no âmbito do SUS</span>, com vínculo direto ao gestor local.</p><p>A admissão é por <b>processo seletivo público</b> (CF, art. 198, § 4º). Por isso esta seleção de Saquarema se chama <b>Processo Seletivo Público</b>.</p>'),
          K('Quem faz o quê', 'ACS', ['<b>Prevenção de doenças e promoção da saúde</b>', 'Ações domiciliares ou comunitárias, individuais ou coletivas', 'Acompanha famílias da <b>microárea</b> da ESF'], 'ACE', ['<b>Vigilância, prevenção e controle</b> de doenças', 'Vigilância epidemiológica e <b>ambiental</b>', 'Combate a <b>endemias e vetores</b> em imóveis']),
          C('✅', 'Requisitos', '<p><b>Para os dois cargos:</b></p><ul><li>Ensino médio completo</li><li>Curso de formação inicial com aproveitamento, <span class="hl">mínimo de 40 horas</span></li></ul><p><b>Só para o ACS:</b> <span class="hl">residir na área da comunidade</span> em que vai atuar, desde a data de publicação do edital.</p><p>No edital de Saquarema, o Curso de Formação Inicial é etapa <b>eliminatória</b>, conduzida pela Secretaria de Saúde.</p>'),
          V('O ACE também precisa morar na área em que vai atuar.', false, 'Falso. A exigência de residir na área da comunidade é só do ACS.')
        ],
        quiz: [
          Q('Nos termos da Lei 11.350/2006, as atividades de ACS e ACE são exercidas exclusivamente no âmbito do:', ['Sistema Único de Saúde (SUS)', 'Setor suplementar privado conveniado', 'Ministério do Desenvolvimento Social', 'Conselho Tutelar Municipal'], 0, 'O art. 2º diz que o exercício das atividades ocorre exclusivamente no âmbito do SUS.'),
          Q('É requisito exigido apenas do Agente Comunitário de Saúde:', ['Residir na área da comunidade em que atuar, desde a publicação do edital', 'Ter concluído o ensino médio', 'Concluir curso de formação inicial com aproveitamento', 'Ter 18 anos completos até a posse'], 0, 'Residir na área da comunidade é exclusivo do ACS. Os demais valem para os dois cargos.'),
          Q('A carga horária mínima do curso introdutório de formação inicial de ACS e ACE é de:', ['40 horas', '20 horas', '80 horas', '120 horas'], 0, 'A Lei 11.350 exige formação inicial com carga horária mínima de 40 horas.'),
          Q('Conforme o art. 198, § 4º, da Constituição, os gestores locais do SUS podem admitir ACS e ACE por meio de:', ['Processo seletivo público', 'Indicação da associação de moradores', 'Contrato verbal temporário', 'Eleição comunitária'], 0, 'A Constituição prevê admissão por processo seletivo público, de acordo com a natureza e a complexidade das atribuições.'),
          Q('Qual atividade descreve melhor o trabalho do Agente de Combate às Endemias?', ['Vigilância ambiental e controle de vetores e endemias', 'Prescrição de medicamentos para doenças crônicas', 'Coordenação da equipe de Saúde da Família', 'Aplicação de vacinas injetáveis em domicílio'], 0, 'O ACE atua na vigilância, prevenção e controle de doenças, com foco ambiental e em vetores.')
        ]
      },
      {
        id: 'esp-2', ico: '🦟', title: 'Arboviroses', topic: 'Dengue, zika, chikungunya e febre amarela',
        lesson: [
          C('🦟', 'O mosquito de 4 doenças', '<p>Arbovirose é doença causada por vírus transmitido por artrópodes, como mosquitos.</p><p>O <span class="hl">Aedes aegypti</span> transmite <b>dengue, zika, chikungunya</b> e a <b>febre amarela urbana</b>. Quem pica é a <b>fêmea</b>, de dia, porque precisa de sangue para produzir ovos.</p>'),
          C('🔄', 'O ciclo de vida', '<p><b>Ovo → larva → pupa → adulto</b>: cerca de <span class="hl">7 a 10 dias</span> em água parada.</p><p>Os ovos resistem secos por <b>mais de um ano</b> e eclodem quando entram em contato com água. Por isso é preciso <b>escovar</b> as paredes dos recipientes, não só esvaziar.</p>'),
          T('A medida nº 1', '<p><b>Controle mecânico</b>: eliminar, vedar, virar ou descartar o que acumula água.</p><p>Inseticida é <b>complemento</b>, não a solução principal. Essa é uma das respostas mais cobradas.</p>'),
          C('🚨', 'Sinais de alarme da dengue', '<p>Encaminhar <b>imediatamente</b> à unidade de saúde se houver:</p><ul><li>Dor abdominal intensa e contínua</li><li>Vômitos persistentes</li><li>Sangramento de mucosas</li><li>Tontura ao levantar ou desmaio</li><li>Sonolência ou irritabilidade</li><li>Acúmulo de líquidos</li></ul><p>Orientar hidratação e <span class="hl">evitar AAS e anti-inflamatórios</span>, que aumentam o risco de sangramento.</p>'),
          K('Diferenças que caem', 'Zika e chikungunya', ['<b>Zika</b> na gestação: microcefalia e síndrome congênita', '<b>Chikungunya</b>: dor nas articulações intensa, pode ficar crônica'], 'Febre amarela', ['Ciclo <b>silvestre</b>: mosquitos <b>Haemagogus</b> e <b>Sabethes</b>', 'Macacos <b>não transmitem</b>: são vítimas e sentinelas', 'Prevenção principal: <b>vacina</b>']),
          V('Macacos transmitem febre amarela para os seres humanos.', false, 'Falso. Quem transmite é o mosquito. O macaco adoece e serve de alerta (sentinela) para a vigilância.')
        ],
        quiz: [
          Q('No controle do Aedes aegypti, qual medida é considerada prioritária e mais eficaz no trabalho de rotina?', ['Controle mecânico, com eliminação ou vedação de criadouros', 'Aplicação de fumacê em todos os bairros, toda semana', 'Distribuição de repelente para animais domésticos', 'Isolamento dos moradores do quarteirão por 14 dias'], 0, 'Eliminar criadouros interrompe o ciclo do mosquito. O controle químico é complementar.'),
          Q('O Aedes aegypti NÃO é vetor de:', ['Malária', 'Dengue', 'Zika', 'Chikungunya'], 0, 'A malária é transmitida pelo mosquito Anopheles (prego).'),
          Q('Durante a visita, um morador com suspeita de dengue relata um sintoma que é sinal de alarme. Qual é?', ['Dor abdominal intensa e contínua', 'Febre baixa no primeiro dia', 'Coriza leve', 'Aumento do apetite'], 0, 'Dor abdominal intensa e contínua é sinal de alarme e exige encaminhamento imediato.'),
          Q('Em casos suspeitos de dengue, deve-se orientar o morador a EVITAR o uso de:', ['Ácido acetilsalicílico (AAS)', 'Soro de reidratação oral', 'Água e líquidos em abundância', 'Repouso'], 0, 'AAS e anti-inflamatórios aumentam o risco de sangramento na dengue.'),
          Q('Na febre amarela silvestre, os principais mosquitos transmissores são dos gêneros:', ['Haemagogus e Sabethes', 'Anopheles e Culex', 'Lutzomyia e Phlebotomus', 'Triatoma e Panstrongylus'], 0, 'No ciclo silvestre, Haemagogus e Sabethes. No urbano, o Aedes aegypti.'),
          Q('A infecção pelo vírus zika durante a gestação está associada principalmente a:', ['Microcefalia e síndrome congênita no bebê', 'Diabetes gestacional', 'Anemia falciforme', 'Hipertensão crônica da mãe'], 0, 'A zika na gestação pode causar microcefalia e outras alterações da síndrome congênita do zika.')
        ]
      },
      {
        id: 'acs-3', cargo: 'acs', ico: '🏡', title: 'ESF e visita domiciliar', topic: 'PNAB, território e atribuições',
        lesson: [
          C('🏡', 'A Estratégia Saúde da Família', '<p>Pela <b>PNAB</b> (Portaria nº 2.436/2017), a <span class="hl">ESF é a estratégia prioritária</span> para expandir e consolidar a Atenção Básica.</p><p>A Atenção Básica é a <b>porta de entrada preferencial</b> do SUS e <b>coordena o cuidado</b> na Rede de Atenção à Saúde.</p>'),
          C('👥', 'Quem forma a equipe', '<p>Equipe mínima de Saúde da Família:</p><ul><li>Médico</li><li>Enfermeiro</li><li>Auxiliar ou técnico de enfermagem</li><li><b>Agente Comunitário de Saúde</b></li></ul><p>A PNAB recomenda <b>2.000 a 3.500 pessoas</b> por equipe e até <span class="hl">750 pessoas por ACS</span>.</p>'),
          C('🗺️', 'Território e microárea', '<p><b>Territorialização</b> é conhecer o território: ruas, barreiras geográficas, riscos e grupos vulneráveis.</p><p>A área da equipe é dividida em <span class="hl">microáreas</span>, uma para cada ACS. É ali que o ACS cadastra e acompanha as famílias.</p>'),
          K('Na visita domiciliar', 'O ACS faz', ['<b>Cadastra</b> e atualiza famílias e domicílios', 'Orienta e faz educação em saúde', 'Identifica situações de risco e <b>avisa a equipe</b>', 'Prioriza gestantes, crianças, idosos, acamados e doentes crônicos'], 'O ACS não faz', ['Prescrever medicamentos', 'Dar diagnóstico ou atestado', 'Aplicar vacina injetável', 'Decidir sozinho o encaminhamento ao hospital']),
          V('O ACS pode indicar um antibiótico durante a visita, se o caso parecer simples.', false, 'Falso. Prescrever é ato de profissional habilitado. O ACS orienta e comunica a equipe.')
        ],
        quiz: [
          Q('Constitui atribuição típica do ACS na Estratégia Saúde da Família:', ['Cadastrar e manter atualizado o cadastro das famílias da microárea', 'Prescrever antibióticos para infecções leves', 'Aplicar vacinas injetáveis sem supervisão', 'Emitir atestados para afastamento do trabalho'], 0, 'O cadastramento e o acompanhamento das famílias são o centro do trabalho do ACS.'),
          Q('O processo de reconhecer o território, mapear barreiras e identificar grupos vulneráveis para definir áreas de abrangência é chamado de:', ['Territorialização', 'Regulação de leitos', 'Auditoria tripartite', 'Triagem hospitalar'], 0, 'Territorialização é a base da organização da Atenção Básica.'),
          Q('Segundo a PNAB 2017, recomenda-se que cada ACS acompanhe no máximo:', ['750 pessoas', '400 pessoas', '1.500 pessoas', '3.500 pessoas'], 0, 'A PNAB recomenda até 750 pessoas por ACS. O número 3.500 é o limite recomendado por equipe.'),
          Q('A equipe mínima de Saúde da Família é composta por:', ['Médico, enfermeiro, auxiliar ou técnico de enfermagem e ACS', 'Médico, dentista, farmacêutico e psicólogo', 'Enfermeiro, ACE e assistente social', 'Médico especialista, fisioterapeuta e nutricionista'], 0, 'Médico, enfermeiro, auxiliar ou técnico de enfermagem e ACS formam a equipe mínima.'),
          Q('Na visita, o ACS encontra um idoso acamado com feridas na pele. A conduta mais adequada é:', ['Comunicar a equipe e articular uma visita do enfermeiro', 'Fazer o curativo e indicar uma pomada', 'Registrar apenas na próxima visita mensal', 'Levar o idoso ao hospital sem avisar a equipe'], 0, 'O ACS identifica o risco e aciona a equipe, que define o cuidado.')
        ]
      },
      {
        id: 'acs-4', cargo: 'acs', ico: '👶', title: 'Ciclos de vida', topic: 'Amamentação, vacinas, ECA e Pessoa Idosa',
        lesson: [
          C('🍼', 'Amamentação', '<p><span class="hl">Aleitamento materno exclusivo até os 6 meses</span>: só leite materno, sem água, chá ou outros alimentos.</p><p>Depois, <b>complementado até 2 anos ou mais</b>.</p><p>O leite materno protege contra diarreia, infecções respiratórias e alergias, e fortalece o vínculo.</p>'),
          C('💉', 'Vacinação na visita', '<p>O ACS <b>verifica a caderneta</b>, orienta e encaminha para a unidade. Ele não aplica vacina.</p><ul><li><b>BCG</b> e hepatite B: ao nascer</li><li><b>dTpa</b> para gestantes: <span class="hl">a partir da 20ª semana</span>, em cada gestação. Protege o bebê contra coqueluche, difteria e tétano</li></ul>'),
          K('ECA × Estatuto da Pessoa Idosa', 'ECA (Lei 8.069/1990)', ['Criança: até <b>12 anos incompletos</b>', 'Adolescente: de <b>12 a 18 anos</b>', 'Suspeita de maus-tratos: comunicar o <b>Conselho Tutelar</b>'], 'Pessoa Idosa (Lei 10.741/2003)', ['Idoso: <b>60 anos ou mais</b>', 'Prioridade no atendimento', 'Violência contra idoso: <b>notificação compulsória</b>']),
          V('Um bebê de 4 meses em aleitamento exclusivo pode tomar chá para cólica.', false, 'Falso. No aleitamento exclusivo, o bebê não recebe água, chás nem outros alimentos até os 6 meses.')
        ],
        quiz: [
          Q('O Ministério da Saúde recomenda aleitamento materno exclusivo até:', ['6 meses', '3 meses', '1 ano', '2 anos'], 0, 'Exclusivo até 6 meses e complementado até 2 anos ou mais.'),
          Q('Qual vacina é recomendada para gestantes a partir da 20ª semana, para proteger o recém-nascido contra coqueluche?', ['dTpa (tríplice bacteriana acelular do adulto)', 'BCG', 'Tríplice viral', 'Rotavírus'], 0, 'A dTpa é aplicada a cada gestação a partir da 20ª semana.'),
          Q('Segundo o ECA, considera-se adolescente a pessoa entre:', ['12 e 18 anos de idade', '10 e 16 anos de idade', '14 e 21 anos de idade', '11 e 17 anos de idade'], 0, 'Criança até 12 anos incompletos; adolescente de 12 a 18 anos.'),
          Q('Ao identificar suspeita de maus-tratos contra uma criança, o caso deve ser comunicado obrigatoriamente:', ['Ao Conselho Tutelar', 'Apenas à escola da criança', 'À associação de moradores', 'A ninguém, para preservar a família'], 0, 'O art. 13 do ECA determina a comunicação ao Conselho Tutelar.'),
          Q('O Estatuto da Pessoa Idosa considera idosa a pessoa com idade igual ou superior a:', ['60 anos', '65 anos', '70 anos', '55 anos'], 0, 'Lei 10.741/2003: 60 anos ou mais.')
        ]
      },
      {
        id: 'ace-3', cargo: 'ace', ico: '🔦', title: 'Campo e controle vetorial', topic: 'Imóveis, LIRAa e tipos de controle',
        lesson: [
          C('🏚️', 'Tipos de imóvel no campo', '<ul><li><b>Ponto Estratégico (PE)</b>: muitos criadouros possíveis, como borracharias, ferros-velhos, recicladoras e cemitérios. Visita <span class="hl">a cada 15 dias</span></li><li><b>Imóvel especial</b>: grande circulação de pessoas, como escolas, hospitais e igrejas</li><li>Residências, comércios e <b>terrenos baldios</b></li></ul>'),
          K('Formas de controle', 'Mecânico e biológico', ['<b>Mecânico</b>: eliminar, vedar, virar, descartar', '<b>Biológico</b>: Bti (bactéria larvicida), peixes que comem larvas'], 'Químico', ['<b>Larvicida</b> em depósitos que não podem ser eliminados', '<b>Adulticida UBV</b> (fumacê): só em transmissão ou surto, como complemento']),
          T('Controle integrado', '<p>A resposta “mais completa” costuma ser o <b>controle integrado</b>: mecânico + biológico + químico + educação em saúde.</p>'),
          C('📊', 'LIRAa e o índice predial', '<p>O <b>LIRAa</b> é o Levantamento Rápido de Índices para Aedes aegypti.</p><p><span class="hl">IIP = imóveis com larva ÷ imóveis pesquisados × 100</span></p><ul><li>Menos de 1%: satisfatório</li><li>De 1% a 3,9%: alerta</li><li>4% ou mais: risco de surto</li></ul>'),
          C('🚪', 'Visita ao imóvel', '<p>Identifique-se (crachá e uniforme), peça permissão, inspecione dentro de casa e no quintal, oriente o morador e registre no boletim.</p><p>Imóvel <b>fechado ou recusa</b>: registre como pendência, comunique a supervisão e volte depois. Nunca entre sem permissão.</p>'),
          V('O fumacê é a principal medida de rotina contra o Aedes.', false, 'Falso. O fumacê é usado em transmissão ou surto, como complemento. A rotina é o controle mecânico.')
        ],
        quiz: [
          Q('Uma borracharia com muitos pneus expostos, na rota de trabalho do ACE, é classificada como:', ['Ponto estratégico', 'Imóvel especial', 'Terreno baldio', 'Imóvel residencial'], 0, 'Locais com grande concentração de possíveis criadouros são Pontos Estratégicos, visitados a cada 15 dias.'),
          Q('O uso do Bti (Bacillus thuringiensis israelensis) em depósitos de água é exemplo de controle:', ['Biológico', 'Mecânico', 'Químico adulticida', 'Legal'], 0, 'Bti é uma bactéria que mata larvas: controle biológico.'),
          Q('No LIRAa, foram pesquisados 200 imóveis e 8 tinham larvas. O índice de infestação predial e a classificação são:', ['4%, situação de risco', '2%, situação de alerta', '8%, situação de risco', '0,4%, situação satisfatória'], 0, '8 ÷ 200 × 100 = 4%. A partir de 4%, a situação é de risco.'),
          Q('A aplicação de adulticida em ultrabaixo volume (UBV, o “fumacê”) é indicada:', ['Em situações de transmissão ou surto, como complemento', 'Toda semana, em todos os bairros, como rotina', 'Em substituição à visita casa a casa', 'Apenas em dias de chuva forte'], 0, 'O UBV é complementar e reservado para bloqueio de transmissão.'),
          Q('Durante a visita, o morador não permite a entrada do ACE. A conduta correta é:', ['Registrar a recusa, orientar, comunicar a supervisão e retornar depois', 'Entrar pelo quintal sem autorização', 'Aplicar inseticida pelo muro', 'Ignorar o imóvel nos próximos ciclos'], 0, 'A recusa é registrada como pendência e tratada com a supervisão. Nunca se entra sem permissão.')
        ]
      },
      {
        id: 'ace-4', cargo: 'ace', ico: '🐀', title: 'Zoonoses e ambiente', topic: 'Lepto, raiva, Chagas, esporotricose e mais',
        lesson: [
          C('🐀', 'Leptospirose', '<p>Causada pela bactéria <b>Leptospira</b>, presente na <span class="hl">urina de ratos</span>.</p><p>Risco maior em <b>enchentes</b>, lama e esgoto. Em Saquarema, com lagoas e chuvas de verão, esse tema é muito relevante.</p><p>Prevenção: evitar contato com água de enchente e fazer <b>antirratização</b> (tirar abrigo e alimento dos roedores).</p>'),
          C('🐕', 'Raiva', '<p>Vírus que atinge <b>todos os mamíferos</b>: cães, gatos, morcegos e outros.</p><p>Após mordida ou arranhão: <span class="hl">lavar com água e sabão em abundância</span> e procurar a unidade de saúde <b>imediatamente</b>.</p><p>Prevenção: vacinar cães e gatos todo ano.</p>'),
          K('Quem transmite o quê', 'Doença', ['<b>Chagas</b>', '<b>Esquistossomose</b>', '<b>Leishmaniose</b>', '<b>Malária</b>', '<b>Esporotricose</b>'], 'Agente / vetor', ['<i>Trypanosoma cruzi</i> / barbeiro', '<i>Schistosoma mansoni</i> / caramujo <i>Biomphalaria</i>', '<i>Leishmania</i> / mosquito-palha (flebotomíneo)', '<i>Plasmodium</i> / mosquito <i>Anopheles</i>', 'Fungo <i>Sporothrix</i> / arranhão de gato']),
          T('Destaque RJ', '<p>O Rio de Janeiro tem muitos casos de <b>esporotricose</b>, transmitida principalmente por <b>gatos doentes</b>. Oriente a não abandonar o animal e a buscar tratamento.</p>'),
          C('💧', 'Doenças ligadas à água', '<ul><li><b>Cólera</b>: bactéria <i>Vibrio cholerae</i>, em água e alimentos contaminados</li><li><b>Esquistossomose</b>: água doce com esgoto e caramujos</li></ul><p>Por isso <span class="hl">saneamento básico</span> é ação de saúde.</p>'),
          V('O barbeiro é o transmissor da esquistossomose.', false, 'Falso. O barbeiro transmite a doença de Chagas. A esquistossomose envolve o caramujo Biomphalaria.')
        ],
        quiz: [
          Q('A principal forma de transmissão da leptospirose ao ser humano é o contato com:', ['Água ou lama contaminadas pela urina de roedores', 'A picada do mosquito Aedes aegypti', 'A saliva de cães infectados', 'O arranhão de gatos doentes'], 0, 'A Leptospira é eliminada na urina de ratos, e o risco aumenta em enchentes.'),
          Q('Após uma mordida de cão, a primeira orientação ao morador é:', ['Lavar o ferimento com água e sabão em abundância e procurar a unidade de saúde', 'Cobrir o ferimento e esperar o cão adoecer', 'Aplicar pó de café para estancar o sangue', 'Procurar atendimento só se houver febre'], 0, 'Lavar bem o local e buscar avaliação imediata para profilaxia da raiva.'),
          Q('Na esquistossomose, o hospedeiro intermediário é:', ['O caramujo do gênero Biomphalaria', 'O barbeiro', 'O mosquito-palha', 'O rato doméstico'], 0, 'O Schistosoma mansoni se desenvolve no caramujo Biomphalaria, em água doce.'),
          Q('O vetor das leishmanioses é:', ['O flebotomíneo, conhecido como mosquito-palha', 'O Aedes aegypti', 'O Anopheles', 'O barbeiro'], 0, 'As leishmanioses são transmitidas pela picada de flebotomíneos (mosquito-palha).'),
          Q('A esporotricose, muito frequente no Rio de Janeiro, é causada por:', ['Um fungo, transmitido principalmente por arranhão ou mordida de gatos doentes', 'Um vírus transmitido por morcegos', 'Uma bactéria presente na água do mar', 'Um protozoário transmitido pelo barbeiro'], 0, 'É causada pelo fungo Sporothrix. No RJ, a transmissão por gatos é a mais comum.')
        ]
      }
    ]
  },
  {
    id: 'port', mascot: 'estudando', area: 'port', c: '#8b5cf6', cd: '#6d3fd6', emoji: '✍️', theme: 'letras',
    title: 'Língua Portuguesa', sub: '10 questões de 2 pontos cada',
    fases: [
      {
        id: 'port-1', ico: 'à', title: 'Crase', topic: 'Quando usar o acento grave',
        lesson: [
          C('🔤', 'O que é crase', '<p>Crase é a fusão de <span class="hl">a (preposição) + a (artigo)</span> = <b>à</b>.</p><p><b>Teste do masculino:</b> troque a palavra feminina por uma masculina. Se aparecer <b>“ao”</b>, há crase.</p><p>“Vou <b>à</b> farmácia” → “Vou <b>ao</b> posto” ✔️</p>'),
          K('Proibida × Obrigatória', 'Nunca use crase antes de', ['Palavra <b>masculina</b>: a prazo, a pé', '<b>Verbo</b>: começou a chover', 'Pronomes como <b>ela, você, toda, esta</b>', 'Palavras <b>repetidas</b>: dia a dia', '“a” + plural: a pessoas'], 'Use sempre em', ['<b>Horas exatas</b>: às 14h', 'Locuções femininas: <b>à noite, às pressas, à medida que</b>', '<b>À moda de</b>: bife à milanesa']),
          T('Facultativa', '<p>Antes de <b>pronome possessivo feminino</b> no singular e de <b>nome de mulher</b>: “Entreguei <b>a(à)</b> sua chefe”, “Falei <b>a(à)</b> Maria”. E depois de <b>“até”</b>: “até a(à) praia”.</p>'),
          V('“Os agentes visitaram as casas à partir das 8h.” A crase está correta.', false, 'Falso. “A partir” é seguido de verbo (partir), então não leva crase. O certo é “a partir das 8h”.')
        ],
        quiz: [
          Q('Assinale a frase em que o acento indicativo de crase está CORRETO:', ['A palestra começará às quatorze horas na unidade básica.', 'Os agentes dirigiram-se à todas as residências.', 'O coordenador entregou os relatórios à ela.', 'Os moradores passaram à colaborar mais.'], 0, 'Horas exatas levam crase. Não há crase antes de “todas”, de “ela” nem de verbo.'),
          Q('Complete: “Fui ___ farmácia e depois ___ posto de saúde.”', ['à / ao', 'a / ao', 'à / à', 'a / a'], 0, '“Ir a + a farmácia” = à. “Ir a + o posto” = ao.'),
          Q('Em qual frase o uso da crase é FACULTATIVO?', ['Entreguei o laudo a sua coordenadora.', 'A reunião será às 10h.', 'Saímos às pressas do mutirão.', 'Refiro-me à enfermeira do posto.'], 0, 'Antes de pronome possessivo feminino no singular, a crase é facultativa.'),
          Q('Assinale a frase com ERRO no uso da crase:', ['O mercado vendeu os repelentes à prazo.', 'Saímos à noite para o mutirão.', 'Às 8h, a equipe chegou ao bairro.', 'Fizemos referência à campanha nacional.'], 0, '“Prazo” é palavra masculina: “a prazo”, sem crase.')
        ]
      },
      {
        id: 'port-2', ico: '🔗', title: 'Concordância verbal', topic: 'Haver, fazer, “se” e partitivos',
        lesson: [
          C('🔗', 'Regra geral', '<p>O verbo concorda com o <b>sujeito</b> em número e pessoa, mesmo quando o sujeito vem <b>depois</b> do verbo.</p><p>“<span class="hl">Chegaram</span> os novos <b>agentes</b>.” ✔️</p>'),
          K('Verbos impessoais: sempre no singular', 'HAVER', ['= <b>existir</b>: “<b>Havia</b> muitos focos.”', '= tempo passado: “<b>Há</b> dois anos.”', 'Em locução também: “<b>Deve haver</b> vagas.”'], 'FAZER', ['= tempo decorrido: “<b>Faz</b> três meses.”', '= clima: “<b>Fez</b> dias quentes.”', 'Mas <b>EXISTIR</b> concorda: “Existiam focos.”']),
          K('O “se” que muda tudo', 'Voz passiva (verbo + se + objeto direto)', ['Concorda com o sujeito', '“<b>Alugam-se</b> casas.”', '“<b>Vendem-se</b> lotes.”'], 'Índice de indeterminação (verbo + se + preposição)', ['Fica no singular', '“<b>Precisa-se de</b> agentes.”', '“<b>Trata-se de</b> casos graves.”']),
          T('Expressão partitiva', '<p>“<b>A maioria dos</b> moradores <b>participou / participaram</b>.” As duas formas estão certas: concordância com “maioria” ou com “moradores”.</p>'),
          V('“Houveram muitas dúvidas na capacitação.” Está correto.', false, 'Falso. “Haver” no sentido de existir é impessoal: “Houve muitas dúvidas”.')
        ],
        quiz: [
          Q('Assinale a frase CORRETA quanto à concordância verbal:', ['A maioria dos moradores participou da campanha de vacinação.', 'Fazem três meses que o mutirão começou.', 'Houveram muitas dúvidas na capacitação.', 'Aluga-se casas perto da lagoa.'], 0, 'Com expressão partitiva, o singular é aceito. Nas demais: “Faz”, “Houve” e “Alugam-se”.'),
          Q('Complete: “___ muitos focos de mosquito no quintal.”', ['Havia', 'Haviam', 'Houveram', 'Existia'], 0, '“Haver” como existir fica no singular. “Existia” não concorda com “focos” (seria “Existiam”).'),
          Q('Assinale a alternativa correta:', ['Precisa-se de agentes comunitários.', 'Precisam-se de agentes comunitários.', 'Deviam haver mais vagas no edital.', 'Vende-se terrenos no Boqueirão.'], 0, 'Com preposição, o “se” é índice de indeterminação e o verbo fica no singular. “Deviam haver” deve ser “Devia haver”; “Vende-se terrenos” deve ser “Vendem-se”.'),
          Q('Complete: “___ dois anos que moro no bairro.”', ['Faz', 'Fazem', 'Fizeram', 'Farão'], 0, '“Fazer” indicando tempo decorrido é impessoal: “Faz dois anos”.'),
          Q('Complete: “Na reunião de ontem, ___ os novos agentes.”', ['chegaram', 'chegou', 'chegara', 'chegue'], 0, 'O sujeito “os novos agentes” está depois do verbo, mas é plural: “chegaram”.')
        ]
      },
      {
        id: 'port-3', ico: '🧩', title: 'Conectivos e figuras', topic: 'Coesão e figuras de linguagem',
        lesson: [
          C('🧩', 'Conectivos: a cola do texto', '<ul><li><b>Oposição</b>: mas, porém, contudo, todavia, no entanto</li><li><b>Concessão</b>: <span class="hl">embora</span>, ainda que, mesmo que</li><li><b>Causa</b>: porque, já que, visto que</li><li><b>Conclusão</b>: logo, <span class="hl">portanto</span>, por isso</li><li><b>Condição</b>: se, caso</li><li><b>Finalidade</b>: para que, a fim de que</li></ul>'),
          T('Concessão × oposição', '<p>“<b>Embora</b> chova, o mutirão acontece.” → concessão (o obstáculo não impede).</p><p>“Choveu, <b>mas</b> o mutirão aconteceu.” → oposição. A ideia é parecida, mas a classificação muda.</p>'),
          C('🎭', 'Figuras de linguagem', '<ul><li><b>Metáfora</b>: comparação sem “como” (“Ele é uma rocha”)</li><li><b>Comparação</b>: com “como” (“Forte como uma rocha”)</li><li><b>Hipérbole</b>: exagero (“Já falei mil vezes”)</li><li><b>Eufemismo</b>: suaviza (“Ele nos deixou” = morreu)</li><li><b>Antítese</b>: ideias opostas (“riso e choro”)</li><li><b>Metonímia</b>: troca relacionada (“Li Machado” = a obra)</li><li><b>Personificação</b>: ação humana para coisa (“O mar chorava”)</li></ul>'),
          V('Em “Os casos subiram; portanto, as visitas aumentaram”, “portanto” indica conclusão.', true, 'Verdadeiro. “Portanto” é conectivo conclusivo.')
        ],
        quiz: [
          Q('“Embora os índices de infestação tenham recuado, a vigilância não pode diminuir.” O conectivo “embora” indica:', ['Concessão', 'Consequência', 'Finalidade', 'Proporção'], 0, '“Embora” introduz oração concessiva: um fato contrário que não impede a ideia principal.'),
          Q('Em “Os casos aumentaram; portanto, a equipe ampliou as visitas”, o termo “portanto” expressa:', ['Conclusão', 'Condição', 'Causa', 'Concessão'], 0, '“Portanto” introduz uma conclusão a partir do que foi dito antes.'),
          Q('Em “Choveu muito, mas o mutirão aconteceu”, o conectivo “mas” pode ser substituído, sem mudança de sentido, por:', ['contudo', 'portanto', 'porque', 'caso'], 0, '“Mas” e “contudo” são conjunções adversativas (oposição).'),
          Q('Na frase “Seu Joaquim nos deixou na madrugada”, usada para informar a morte de um morador, há:', ['Eufemismo', 'Hipérbole', 'Antítese', 'Metonímia'], 0, 'Eufemismo suaviza uma ideia dura ou triste.'),
          Q('“Já expliquei isso um milhão de vezes!” A figura de linguagem é:', ['Hipérbole', 'Eufemismo', 'Ironia', 'Comparação'], 0, 'Hipérbole é o exagero intencional para dar ênfase.')
        ]
      },
      {
        id: 'port-4', ico: '✨', title: 'Acentos e porquês', topic: 'Acentuação, porquês e parônimos',
        lesson: [
          C('✨', 'Acentuação em 3 regras', '<ul><li><b>Proparoxítonas</b>: <span class="hl">todas</span> acentuadas (público, médico, epidemiológico)</li><li><b>Oxítonas</b> terminadas em a, e, o, em, ens (café, você, também)</li><li><b>Paroxítonas</b> terminadas em l, n, r, x, ps, ã, ão, i, us, um e ditongo (fácil, história, água)</li></ul><p>Hiato com i ou u tônico também leva acento: sa<b>ú</b>de, sa<b>í</b>da, pa<b>í</b>s.</p>'),
          C('❓', 'Os 4 porquês', '<ul><li><b>Por que</b>: pergunta, ou “pelo qual” → “Por que faltou?”</li><li><b>Por quê</b>: no fim da frase → “Faltou por quê?”</li><li><b>Porque</b>: explicação → “Faltei porque choveu.”</li><li><b>Porquê</b>: substantivo, vem com artigo → “Explique o porquê.”</li></ul>'),
          K('Parônimos que confundem', 'Palavra', ['<b>Iminente</b>', '<b>Eminente</b>', '<b>Retificar</b>', '<b>Ratificar</b>', '<b>Cumprimento</b>'], 'Significado', ['prestes a acontecer', 'importante, ilustre', 'corrigir', 'confirmar', 'saudação ou execução (≠ comprimento = medida)']),
          V('“Saúde” e “saída” são acentuadas pela regra do hiato.', true, 'Verdadeiro. O “u” e o “i” são tônicos e formam hiato com a vogal anterior.')
        ],
        quiz: [
          Q('Assinale a opção em que TODAS as palavras são acentuadas pela mesma regra:', ['Público, médico, epidemiológico', 'Saúde, saída, município', 'Também, porém, lá', 'História, água, café'], 0, 'As três são proparoxítonas, e toda proparoxítona é acentuada.'),
          Q('Complete: “O agente não pôde comparecer ___ estava em campo, mas explicou o ___ da ausência.”', ['porque / porquê', 'por que / por quê', 'porquê / porque', 'por quê / por que'], 0, 'Primeiro, explicação: “porque”. Depois, substantivo com artigo: “o porquê”.'),
          Q('Complete: “O risco de surto é ___; precisamos agir hoje.”', ['iminente', 'eminente', 'emitente', 'imanente'], 0, '“Iminente” é o que está prestes a acontecer.'),
          Q('“O agente ___ o endereço que estava errado no cadastro.” A palavra adequada é:', ['retificou', 'ratificou', 'ratou', 'retratou'], 0, 'Retificar é corrigir. Ratificar é confirmar.'),
          Q('Assinale a frase escrita corretamente:', ['Você faltou por quê?', 'Você faltou porque?', 'Porque você faltou?', 'Você faltou por que?'], 0, 'No fim da frase interrogativa usa-se “por quê”, separado e com acento.')
        ]
      }
    ]
  },
  {
    id: 'mun', mascot: 'saquarema', area: 'leg', c: '#06a6c9', cd: '#04809b', emoji: '🌊', theme: 'saquarema',
    title: 'Saquarema – RJ', sub: 'História, Alberto de Oliveira, Lei Orgânica e geografia',
    fases: [
      {
        id: 'mun-1', ico: '⛪', title: 'Cidade e símbolos', topic: 'História, distritos e cultura',
        lesson: [
          C('🌊', 'Saquarema em um cartão', '<p>Município da <b>Região dos Lagos</b> (Baixadas Litorâneas) do Rio de Janeiro.</p><p>O aniversário da cidade é em <span class="hl">8 de maio</span>, data em que foi elevada à categoria de vila, em <b>1841</b>.</p>'),
          C('🗺️', 'Os 3 distritos', '<ul><li><b>1º distrito</b>: Saquarema (sede)</li><li><b>2º distrito</b>: Bacaxá</li><li><b>3º distrito</b>: Sampaio Correia</li></ul><p>Itaúna, Jaconé, Boqueirão e Vilatur são <b>bairros ou localidades</b>, não distritos. A banca adora misturar.</p>'),
          C('⛪', 'Fé e cultura', '<p>A <span class="hl">Igreja de Nossa Senhora de Nazareth</span>, no alto do morro à beira-mar, é o grande símbolo da cidade. Nossa Senhora de Nazareth é a <b>padroeira</b>.</p><p>A <b>Lagoa de Saquarema</b> se liga ao mar pelo canal da <b>Barra Franca</b>.</p><p>A <b>Praia de Itaúna</b> recebe etapas internacionais de surfe, e a cidade é conhecida como <b>“capital do surfe”</b>.</p>'),
          T('Fonte oficial', '<p>O edital diz que este tema será cobrado com base em um <b>documento do IBAM</b> sobre o município. Na versão final do app, todo o conteúdo desta unidade deve sair desse documento.</p>'),
          V('Itaúna é um dos três distritos de Saquarema.', false, 'Falso. Os distritos são Saquarema (sede), Bacaxá e Sampaio Correia. Itaúna é bairro.')
        ],
        quiz: [
          Q('O aniversário de Saquarema, que marca sua elevação à categoria de vila em 1841, é comemorado em:', ['8 de maio', '15 de novembro', '22 de abril', '7 de setembro'], 0, 'Saquarema comemora o aniversário em 8 de maio.'),
          Q('Os três distritos do município de Saquarema são:', ['Saquarema (sede), Bacaxá e Sampaio Correia', 'Saquarema (sede), Jaconé e Vilatur', 'Bacaxá, Itaúna e Boqueirão', 'Sampaio Correia, Barra Nova e Itaúna'], 0, '1º Saquarema (sede), 2º Bacaxá e 3º Sampaio Correia.'),
          Q('A padroeira de Saquarema, cuja igreja fica no alto do morro à beira-mar, é:', ['Nossa Senhora de Nazareth', 'Nossa Senhora Aparecida', 'Nossa Senhora da Conceição', 'Nossa Senhora da Guia'], 0, 'A Igreja de Nossa Senhora de Nazareth é o principal símbolo histórico e religioso da cidade.'),
          Q('Saquarema está localizada em qual região do estado do Rio de Janeiro?', ['Região dos Lagos (Baixadas Litorâneas)', 'Região Serrana', 'Médio Paraíba', 'Costa Verde'], 0, 'Saquarema faz parte da Região dos Lagos, nas Baixadas Litorâneas.'),
          Q('A praia de Saquarema conhecida por receber etapas internacionais de surfe é:', ['Itaúna', 'Copacabana', 'Geribá', 'Itacoatiara'], 0, 'Itaúna recebe etapas do circuito mundial de surfe.')
        ]
      },
      {
        id: 'mun-2', ico: '🖋️', title: 'Alberto de Oliveira', topic: 'O poeta de Saquarema',
        lesson: [
          C('🖋️', 'Alberto de Oliveira', '<p>Poeta nascido em <span class="hl">Palmital de Saquarema</span>, em 1857. Morreu em Niterói, em 1937.</p><p>Formado em <b>Farmácia</b>, foi um dos maiores nomes do <span class="hl">Parnasianismo</span> brasileiro.</p>'),
          C('🏅', 'A Tríade Parnasiana', '<p>Formou a <b>Tríade Parnasiana</b> com <b>Olavo Bilac</b> e <b>Raimundo Correia</b>.</p><p>Foi um dos <b>fundadores da Academia Brasileira de Letras</b> e recebeu o título de <span class="hl">“Príncipe dos Poetas Brasileiros”</span>.</p><p>Obras: <i>Canções Românticas</i> (estreia), <i>Meridionais</i>, <i>Sonetos e Poemas</i>.</p>'),
          T('Parnasianismo em 1 linha', '<p>Culto à <b>forma perfeita</b>: rima rica, métrica rigorosa, sonetos, temas clássicos e a ideia de “arte pela arte”.</p>'),
          V('Alberto de Oliveira foi um poeta do Modernismo de 1922.', false, 'Falso. Ele é um dos principais nomes do Parnasianismo, movimento anterior ao Modernismo.')
        ],
        quiz: [
          Q('Alberto de Oliveira, poeta nascido em Saquarema, é um dos principais nomes do:', ['Parnasianismo', 'Modernismo', 'Arcadismo', 'Barroco'], 0, 'Ele integra a Tríade Parnasiana.'),
          Q('A chamada Tríade Parnasiana era formada por Alberto de Oliveira e por:', ['Olavo Bilac e Raimundo Correia', 'Carlos Drummond e Manuel Bandeira', 'Gonçalves Dias e Castro Alves', 'Machado de Assis e José de Alencar'], 0, 'Alberto de Oliveira, Olavo Bilac e Raimundo Correia.'),
          Q('Alberto de Oliveira nasceu em Palmital de Saquarema e tinha formação em:', ['Farmácia', 'Direito', 'Engenharia', 'Medicina'], 0, 'Ele se formou em Farmácia, mas ficou conhecido pela poesia.'),
          Q('Assinale a característica típica da poesia parnasiana, escola de Alberto de Oliveira:', ['Valorização da forma, com métrica e rima rigorosas', 'Versos livres e linguagem coloquial', 'Exaltação do indígena como herói nacional', 'Crítica social em linguagem de cordel'], 0, 'O Parnasianismo cultua a forma perfeita, com soneto, métrica e rima rica.'),
          Q('Alberto de Oliveira recebeu o título de:', ['Príncipe dos Poetas Brasileiros', 'Poeta dos Escravos', 'Patrono da Independência', 'Pai da Literatura Brasileira'], 0, 'Foi eleito “Príncipe dos Poetas Brasileiros”.'),
        ]
      }
    ]
  }
];
// ícone da crase

/* ------------------------------ FLASHCARDS ------------------------------ */
// [faseId, frente, verso]
const FC_RAW = [
  ['sus-1', 'O que diz o art. 196 da Constituição?', 'A saúde é <b>direito de todos e dever do Estado</b>, garantida por políticas sociais e econômicas, com <b>acesso universal e igualitário</b> às ações de promoção, proteção e recuperação.'],
  ['sus-1', 'Quais são as 3 diretrizes do SUS no art. 198 da CF?', '<b>D-I-P</b><br>• <b>D</b>escentralização, com direção única em cada esfera<br>• <b>I</b>ntegralidade, com prioridade para a prevenção<br>• <b>P</b>articipação da comunidade'],
  ['sus-1', 'Como o setor privado participa do SUS (art. 199)?', 'De forma <b>complementar</b>, com preferência para entidades <b>filantrópicas e sem fins lucrativos</b>. É proibido dar subvenção pública a instituições privadas com fins lucrativos.'],
  ['sus-2', 'Quais são os princípios doutrinários do SUS?', '• <b>Universalidade</b>: acesso para todos<br>• <b>Integralidade</b>: da prevenção à reabilitação<br>• <b>Equidade</b>: mais para quem mais precisa'],
  ['sus-2', 'Vigilância Sanitária × Vigilância Epidemiológica', '• <b>Sanitária</b>: riscos ligados a bens, serviços e meio ambiente (fiscaliza)<br>• <b>Epidemiológica</b>: detecta mudanças nos determinantes e recomenda o controle de doenças (monitora)'],
  ['sus-2', 'Cite determinantes da saúde do art. 3º da Lei 8.080', 'Alimentação, moradia, <b>saneamento básico</b>, meio ambiente, trabalho, renda, educação, atividade física, transporte, lazer e acesso a bens e serviços essenciais.'],
  ['sus-3', 'Conferência × Conselho de Saúde', '• <b>Conferência</b>: a cada <b>4 anos</b>, avalia e propõe diretrizes<br>• <b>Conselho</b>: <b>permanente e deliberativo</b>, controla a execução da política'],
  ['sus-3', 'Qual a proporção de usuários nos Conselhos?', '<b>Paritária</b> em relação aos demais segmentos = <b>50%</b>. Os 25% de trabalhadores e 25% de gestores e prestadores vêm da Resolução CNS 453/2012.'],
  ['sus-3', 'O que o município precisa ter para receber recursos do Fundo Nacional?', 'Fundo de Saúde, Conselho de Saúde, Plano de Saúde, relatórios de gestão, contrapartida no orçamento e comissão do PCCS.'],
  ['esp-1', 'Requisitos de ACS e ACE na Lei 11.350/2006', '• Ensino médio completo<br>• Formação inicial de no mínimo <b>40 horas</b><br>• <b>Só ACS</b>: morar na área da comunidade desde a publicação do edital'],
  ['esp-1', 'Como ACS e ACE são admitidos?', 'Por <b>processo seletivo público</b> (CF, art. 198, § 4º). Atuam <b>exclusivamente no âmbito do SUS</b>.'],
  ['esp-1', 'Foco do ACS × foco do ACE', '• <b>ACS</b>: prevenção e promoção da saúde com as famílias da microárea<br>• <b>ACE</b>: vigilância ambiental e controle de vetores e endemias'],
  ['esp-2', 'Ciclo de vida do Aedes aegypti', '<b>Ovo → larva → pupa → adulto</b>, em cerca de 7 a 10 dias. Os ovos resistem secos por mais de um ano.'],
  ['esp-2', 'Sinais de alarme da dengue', 'Dor abdominal intensa e contínua, vômitos persistentes, sangramento de mucosas, tontura ao levantar, sonolência ou irritabilidade, acúmulo de líquidos. <b>Evitar AAS.</b>'],
  ['esp-2', 'Febre amarela silvestre: quem transmite?', 'Mosquitos <b>Haemagogus</b> e <b>Sabethes</b>. O macaco <b>não transmite</b>: é vítima e sentinela.'],
  ['acs-3', 'Equipe mínima de Saúde da Família', 'Médico, enfermeiro, auxiliar ou técnico de enfermagem e <b>ACS</b>.'],
  ['acs-3', 'Números da PNAB 2017', '• <b>2.000 a 3.500</b> pessoas por equipe<br>• Até <b>750</b> pessoas por ACS'],
  ['acs-3', 'O que o ACS NÃO faz', 'Prescrever medicamento, dar diagnóstico ou atestado, aplicar vacina injetável. Ele <b>orienta e comunica a equipe</b>.'],
  ['acs-4', 'Aleitamento materno: até quando?', '<b>Exclusivo até 6 meses</b> (sem água nem chá) e complementado até <b>2 anos ou mais</b>.'],
  ['acs-4', 'Vacina da gestante contra coqueluche', '<b>dTpa</b>, a partir da <b>20ª semana</b>, em cada gestação.'],
  ['acs-4', 'Idades do ECA e do Estatuto da Pessoa Idosa', '• Criança: até 12 anos incompletos<br>• Adolescente: 12 a 18 anos<br>• Pessoa idosa: <b>60 anos ou mais</b>'],
  ['ace-3', 'O que é Ponto Estratégico (PE)?', 'Local com muitos possíveis criadouros: borracharia, ferro-velho, recicladora, cemitério. Visita <b>a cada 15 dias</b>.'],
  ['ace-3', 'Fórmula e faixas do IIP (LIRAa)', '<b>Imóveis positivos ÷ pesquisados × 100</b><br>• &lt;1%: satisfatório<br>• 1% a 3,9%: alerta<br>• ≥4%: risco'],
  ['ace-3', 'Tipos de controle vetorial', '• <b>Mecânico</b>: eliminar criadouros (prioridade)<br>• <b>Biológico</b>: Bti, peixes larvófagos<br>• <b>Químico</b>: larvicida e UBV (só em surto)'],
  ['ace-4', 'Leptospirose: transmissão e prevenção', 'Bactéria <b>Leptospira</b> na urina de ratos. Risco em enchentes e lama. Prevenção: evitar água de enchente e fazer antirratização.'],
  ['ace-4', 'Mordida de animal: primeira conduta', '<b>Lavar com água e sabão em abundância</b> e procurar a unidade de saúde imediatamente (profilaxia da raiva).'],
  ['ace-4', 'Quem transmite: Chagas, esquistossomose, leishmaniose e malária', '• Chagas: <b>barbeiro</b><br>• Esquistossomose: caramujo <b>Biomphalaria</b><br>• Leishmaniose: <b>mosquito-palha</b><br>• Malária: <b>Anopheles</b>'],
  ['port-1', 'Teste rápido da crase', 'Troque por uma palavra masculina. Se virar <b>“ao”</b>, tem crase.<br>“Vou à farmácia” → “Vou ao posto”.'],
  ['port-1', 'Quando NUNCA há crase?', 'Antes de palavra masculina, verbo, pronomes como ela, você e toda, palavras repetidas (dia a dia) e “a” + plural.'],
  ['port-1', 'Quando a crase é facultativa?', 'Antes de <b>possessivo feminino</b> no singular (a/à sua), de <b>nome de mulher</b> e depois de <b>“até”</b>.'],
  ['port-2', 'Haver e fazer impessoais', '<b>Haver</b> = existir e <b>fazer</b> = tempo ficam no singular: “Havia muitos casos”, “Faz dois anos”. Já <b>existir</b> concorda: “Existiam casos”.'],
  ['port-2', '“Vendem-se casas” × “Precisa-se de agentes”', '• Sem preposição: voz passiva, verbo concorda<br>• Com preposição: índice de indeterminação, verbo no singular'],
  ['port-2', '“A maioria dos moradores participou/participaram”', 'As duas formas estão certas: concordância com “maioria” ou com “moradores”.'],
  ['port-3', 'Concessivas × adversativas', '• Concessão: <b>embora</b>, ainda que, mesmo que<br>• Oposição: <b>mas</b>, porém, contudo, todavia, no entanto'],
  ['port-3', 'Conectivos conclusivos', 'Logo, <b>portanto</b>, por isso, por conseguinte, assim.'],
  ['port-3', 'Eufemismo × hipérbole', '• <b>Eufemismo</b>: suaviza (“nos deixou” = morreu)<br>• <b>Hipérbole</b>: exagera (“falei mil vezes”)'],
  ['port-4', 'Os 4 porquês', '• <b>Por que</b>: pergunta<br>• <b>Por quê</b>: fim de frase<br>• <b>Porque</b>: explicação<br>• <b>Porquê</b>: substantivo (o porquê)'],
  ['port-4', 'Iminente × eminente • retificar × ratificar', '• Iminente: prestes a acontecer • Eminente: ilustre<br>• Retificar: corrigir • Ratificar: confirmar'],
  ['port-4', 'Qual regra de acentuação não tem exceção?', 'Toda <b>proparoxítona</b> é acentuada: público, médico, epidemiológico.'],
  ['mun-1', 'Quais são os 3 distritos de Saquarema?', '1º Saquarema (sede)<br>2º Bacaxá<br>3º Sampaio Correia'],
  ['mun-1', 'Aniversário e padroeira de Saquarema', '<b>8 de maio</b> (elevada a vila em 1841). Padroeira: <b>Nossa Senhora de Nazareth</b>.'],
  ['mun-1', 'Itaúna e Barra Franca', '• <b>Itaúna</b>: praia que recebe etapas internacionais de surfe<br>• <b>Barra Franca</b>: canal que liga a Lagoa de Saquarema ao mar'],
  ['mun-2', 'Quem foi Alberto de Oliveira?', 'Poeta nascido em Palmital de Saquarema (1857–1937), um dos maiores nomes do <b>Parnasianismo</b> e fundador da ABL. Recebeu o título de <b>Príncipe dos Poetas Brasileiros</b>.'],
  ['mun-2', 'Quem formava a Tríade Parnasiana?', 'Alberto de Oliveira, <b>Olavo Bilac</b> e <b>Raimundo Correia</b>.'],
  ['mun-3', 'Como é aprovada a Lei Orgânica municipal?', 'Em <b>dois turnos</b>, com intervalo mínimo de 10 dias, por <b>2/3 dos membros da Câmara</b> (CF, art. 29).']
];

/* ====================== NOVOS TÓPICOS (conteúdo original) ====================== */
const unitById = id => UNITS.find(u => u.id === id);
function insertAfter(unitId, afterId, ...fases) {
  const u = unitById(unitId); const i = afterId ? u.fases.findIndex(f => f.id === afterId) : u.fases.length - 1;
  u.fases.splice(i + 1, 0, ...fases);
}

/* ---------------- BASE DO SUS ---------------- */
insertAfter('sus', 'sus-3',
  {
    id: 'sus-4', ico: '🕰️', title: 'História da saúde no Brasil', topic: 'Da previdência à Reforma Sanitária',
    lesson: [
      C('🕰️', 'Antes do SUS', '<p>Até os anos 1980, a <b>assistência médica pública</b> era ligada à previdência (INAMPS) e atendia <span class="hl">só quem contribuía</span>, ou seja, trabalhadores com carteira assinada.</p><p>Quem não contribuía dependia de <b>Santas Casas</b>, da filantropia ou pagava do próprio bolso. A saúde pública cuidava sobretudo de campanhas e vacinação.</p>'),
      C('📅', 'Linha do tempo essencial', '<ul><li><b>1923</b>: Lei Eloy Chaves cria as Caixas de Aposentadorias e Pensões (CAPs)</li><li><b>1966</b>: criação do INPS</li><li><b>1977</b>: criação do INAMPS</li><li><b>1986</b>: <span class="hl">8ª Conferência Nacional de Saúde</span></li><li><b>1988</b>: Constituição cria o SUS</li><li><b>1990</b>: Leis 8.080 e 8.142</li><li><b>1993</b>: extinção do INAMPS</li></ul>'),
      C('✊', 'A Reforma Sanitária', '<p>Movimento de profissionais de saúde, pesquisadores e movimentos populares que, na redemocratização, defendeu a <span class="hl">saúde como direito de todos</span>.</p><p>Suas propostas, consolidadas na <b>8ª Conferência Nacional de Saúde (1986)</b>, viraram a base do capítulo da saúde na Constituição de 1988.</p>'),
      K('Modelos de sistemas de saúde', 'Universal', ['Financiado por impostos', 'Acesso para todos os cidadãos', 'Ex.: SUS e o sistema britânico'], 'Seguro social e mercado', ['<b>Seguro social</b>: acesso ligado à contribuição do trabalhador', '<b>Mercado</b>: acesso depende de pagar plano ou serviço']),
      V('Antes de 1988, qualquer brasileiro podia ser atendido pelo INAMPS.', false, 'Falso. O INAMPS atendia os contribuintes da previdência. O acesso universal só veio com o SUS.')
    ],
    quiz: [
      Q('A 8ª Conferência Nacional de Saúde, realizada em 1986, é considerada um marco porque:', ['Suas propostas serviram de base para o capítulo da saúde na Constituição de 1988', 'Criou o INAMPS para atender os trabalhadores formais', 'Extinguiu as Santas Casas de Misericórdia', 'Privatizou os hospitais federais'], 0, 'A 8ª CNS consolidou as ideias da Reforma Sanitária que entraram na Constituição de 1988.'),
      Q('Antes da criação do SUS, a assistência médica prestada pelo INAMPS destinava-se principalmente:', ['Aos trabalhadores que contribuíam para a previdência', 'A toda a população, sem distinção', 'Apenas às pessoas sem renda', 'Exclusivamente a servidores militares'], 0, 'O atendimento era vinculado à contribuição previdenciária, em geral de quem tinha carteira assinada.'),
      Q('A Lei Eloy Chaves, de 1923, é lembrada na história da saúde e da previdência por ter criado:', ['As Caixas de Aposentadorias e Pensões (CAPs)', 'O Sistema Único de Saúde', 'Os Conselhos Municipais de Saúde', 'A Estratégia Saúde da Família'], 0, 'As CAPs, organizadas por empresa, são consideradas o marco inicial da previdência social no Brasil.'),
      Q('O movimento que, durante a redemocratização, defendeu a saúde como direito de todos e dever do Estado ficou conhecido como:', ['Reforma Sanitária', 'Revolta da Vacina', 'Plano Real', 'Diretas Já da Saúde Privada'], 0, 'A Reforma Sanitária reuniu trabalhadores, pesquisadores e movimentos populares em defesa de um sistema público e universal.'),
      Q('O INAMPS, órgão da assistência médica previdenciária, foi extinto no ano de:', ['1993', '1986', '1988', '2000'], 0, 'O INAMPS foi extinto em 1993, e suas funções passaram ao SUS.')
    ]
  },
  {
    id: 'sus-5', ico: '🕸️', title: 'Atenção Básica e Redes', topic: 'PNAB, níveis de atenção e humanização',
    lesson: [
      C('🕸️', 'A Atenção Básica no centro', '<p>Pela PNAB, a Atenção Básica é a <span class="hl">porta de entrada preferencial</span> do SUS e o <b>centro de comunicação</b> da Rede de Atenção à Saúde (RAS).</p><p>Ela <b>coordena o cuidado</b> e <b>ordena a rede</b>: acompanha a pessoa e organiza os encaminhamentos.</p>'),
      K('Níveis de atenção', 'Atenção primária', ['UBS e equipes de Saúde da Família', 'Prevenção, promoção e problemas mais comuns'], 'Atenção secundária e terciária', ['<b>Secundária</b>: especialistas, exames e serviços de média complexidade', '<b>Terciária</b>: hospitais de alta complexidade, como cirurgia cardíaca e UTI']),
      C('🧩', 'Diretrizes da PNAB que mais caem', '<ul><li><b>População adscrita</b>: pessoas vinculadas ao território da equipe</li><li><b>Longitudinalidade</b>: acompanhar a pessoa ao longo do tempo, criando vínculo</li><li><b>Resolutividade</b>: resolver a maior parte dos problemas ali mesmo</li><li><b>Coordenação do cuidado</b> e <b>ordenação da rede</b></li><li><b>Territorialização</b> e <b>cuidado centrado na pessoa</b></li></ul>'),
      C('🤝', 'HumanizaSUS', '<p>A <b>Política Nacional de Humanização</b> (2003) busca melhorar a relação entre usuários, trabalhadores e gestores.</p><p>Diretrizes: <span class="hl">acolhimento</span>, clínica ampliada, cogestão, ambiência, valorização do trabalhador e defesa dos direitos dos usuários.</p>'),
      V('Longitudinalidade é encaminhar o paciente para o hospital mais próximo.', false, 'Falso. Longitudinalidade é a continuidade do cuidado ao longo do tempo, com vínculo entre a equipe e a pessoa.')
    ],
    quiz: [
      Q('Segundo a Política Nacional de Atenção Básica, a Atenção Básica deve ser:', ['A porta de entrada preferencial e o centro de comunicação da Rede de Atenção à Saúde', 'Um serviço complementar aos hospitais, acessado após a internação', 'Responsável apenas por vacinação e campanhas', 'Exclusiva para pessoas sem plano de saúde'], 0, 'A Atenção Básica é a porta de entrada preferencial, coordena o cuidado e ordena a rede.'),
      Q('A diretriz da PNAB que se refere ao acompanhamento da pessoa ao longo do tempo, com construção de vínculo, é a:', ['Longitudinalidade', 'Hierarquização', 'Regionalização', 'Centralização'], 0, 'Longitudinalidade é a continuidade do cuidado e da relação entre equipe e usuário.'),
      Q('Um paciente que precisa de cirurgia cardíaca de alta complexidade será atendido, em regra, no nível de atenção:', ['Terciário', 'Primário', 'Domiciliar', 'Comunitário'], 0, 'Procedimentos hospitalares de alta complexidade pertencem à atenção terciária.'),
      Q('Constitui diretriz da Política Nacional de Humanização (HumanizaSUS):', ['Acolhimento', 'Atendimento apenas por ordem de chegada, sem avaliação de risco', 'Redução da participação dos usuários', 'Centralização das decisões na direção do hospital'], 0, 'O acolhimento é diretriz central da PNH, assim como cogestão e clínica ampliada.'),
      Q('Na PNAB, “população adscrita” significa:', ['A população vinculada ao território sob responsabilidade de uma equipe', 'A população atendida apenas em hospitais', 'As pessoas cadastradas em planos de saúde', 'Os moradores de outros municípios'], 0, 'Adscrição é o vínculo entre pessoas de um território e a equipe responsável por elas.')
    ]
  },
  {
    id: 'sus-6', ico: '📡', title: 'Informação e notificação', topic: 'SINAN, SIM, SINASC e notificação compulsória',
    lesson: [
      C('📡', 'Os sistemas de informação', '<ul><li><b>SINAN</b>: agravos e doenças de <span class="hl">notificação</span></li><li><b>SIM</b>: mortalidade, a partir da <b>Declaração de Óbito</b></li><li><b>SINASC</b>: nascidos vivos, a partir da <b>Declaração de Nascido Vivo</b></li><li><b>SI-PNI</b>: vacinação</li><li><b>SISAB / e-SUS APS</b>: dados da Atenção Básica, incluindo os cadastros feitos pelo ACS</li></ul>'),
      T('Macete dos nomes', '<p>Leia a sigla: <b>SIM</b> = Sistema de Informação sobre <b>M</b>ortalidade. <b>SINASC</b> = <b>NASC</b>idos vivos. <b>SINAN</b> = Agravos de <b>N</b>otificação.</p>'),
      C('🚨', 'Notificação compulsória', '<p>É a comunicação <b>obrigatória</b> à autoridade de saúde sobre doenças, agravos ou eventos da lista nacional.</p><ul><li><span class="hl">Imediata</span>: em até <b>24 horas</b> (ex.: raiva humana, febre amarela, cólera, óbito por dengue)</li><li><b>Semanal</b>: em até 7 dias (ex.: casos de dengue, tuberculose, hanseníase)</li></ul><p>Basta a <b>suspeita</b>: não se espera a confirmação para notificar.</p>'),
      C('🔎', 'E o agente com isso?', '<p>ACS e ACE estão no território todos os dias. Ao perceber um <b>caso suspeito</b>, eles <span class="hl">comunicam à equipe e à vigilância</span>, que fazem a notificação e a investigação.</p><p>Os dados que você coleta viram informação para decidir onde agir.</p>'),
      V('Só se deve notificar uma doença depois que o exame confirmar o diagnóstico.', false, 'Falso. A notificação é feita diante da suspeita, para que a vigilância aja rápido.')
    ],
    quiz: [
      Q('O sistema de informação que registra os nascidos vivos no Brasil é o:', ['SINASC', 'SIM', 'SINAN', 'SI-PNI'], 0, 'SINASC: Sistema de Informações sobre Nascidos Vivos, alimentado pela Declaração de Nascido Vivo.'),
      Q('A notificação compulsória imediata deve ser realizada em até:', ['24 horas', '7 dias', '15 dias', '30 dias'], 0, 'Notificação imediata: até 24 horas a partir do conhecimento do caso suspeito.'),
      Q('Diante de um caso suspeito de doença de notificação compulsória, a notificação deve ser feita:', ['Já na suspeita, sem aguardar a confirmação laboratorial', 'Somente após o resultado do exame', 'Apenas se o paciente for internado', 'Somente no fim do mês, junto com o relatório'], 0, 'A suspeita basta. Esperar a confirmação atrasa as ações de controle.'),
      Q('O Sistema de Informações sobre Mortalidade (SIM) tem como documento-base a:', ['Declaração de Óbito', 'Caderneta de Vacinação', 'Ficha de cadastro domiciliar', 'Declaração de Nascido Vivo'], 0, 'A Declaração de Óbito alimenta o SIM.'),
      Q('As doenças e agravos de notificação compulsória são registrados principalmente no:', ['SINAN', 'SINASC', 'SIM', 'Cadastro Único'], 0, 'SINAN: Sistema de Informação de Agravos de Notificação.')
    ]
  }
);

/* ---------------- ESPECÍFICOS ---------------- */
insertAfter('esp', 'esp-2',
  {
    id: 'esp-3', ico: '🔬', title: 'Saúde, doença e prevenção', topic: 'Níveis de prevenção e termos epidemiológicos',
    lesson: [
      C('🔬', 'O que é saúde', '<p>A OMS definiu saúde como <span class="hl">completo bem-estar físico, mental e social</span>, e não apenas a ausência de doença.</p><p>O processo saúde-doença tem <b>várias causas</b>: biológicas, ambientais e sociais, como renda, moradia e escolaridade (os <b>determinantes sociais</b>).</p>'),
      K('Promoção × Prevenção', 'Promoção da saúde', ['Atua nas condições de vida em geral', 'Ex.: hortas comunitárias, atividade física, educação'], 'Prevenção', ['Atua contra uma doença específica', 'Ex.: vacina, uso de preservativo, eliminar criadouros']),
      C('🪜', 'Os 3 níveis de prevenção', '<ul><li><b>Primária</b>: antes da doença. Promoção e proteção específica (vacina, saneamento)</li><li><b>Secundária</b>: <span class="hl">diagnóstico precoce</span> e tratamento rápido (exame preventivo, rastreamento)</li><li><b>Terciária</b>: reabilitação e redução de sequelas (fisioterapia após AVC)</li></ul>'),
      K('Palavras da epidemiologia', 'Ocorrência', ['<b>Endemia</b>: casos esperados e habituais na região', '<b>Epidemia</b>: aumento acima do esperado', '<b>Surto</b>: epidemia localizada (uma escola, um bairro)', '<b>Pandemia</b>: espalhada por vários países e continentes'], 'Medidas', ['<b>Incidência</b>: casos <b>novos</b> em um período', '<b>Prevalência</b>: <b>todos</b> os casos existentes', '<b>Letalidade</b>: proporção de doentes que morrem']),
      V('Vacinar uma criança é um exemplo de prevenção secundária.', false, 'Falso. A vacina age antes da doença: é prevenção primária (proteção específica).')
    ],
    quiz: [
      Q('A vacinação de crianças contra o sarampo é exemplo de prevenção:', ['Primária', 'Secundária', 'Terciária', 'Quaternária'], 0, 'A vacina protege antes de a doença acontecer: prevenção primária.'),
      Q('A realização de exame preventivo para detectar precocemente o câncer do colo do útero corresponde à prevenção:', ['Secundária', 'Primária', 'Terciária', 'Ambiental'], 0, 'Diagnóstico precoce e tratamento rápido são prevenção secundária.'),
      Q('Quando o número de casos de uma doença em uma região ultrapassa claramente o esperado para aquele período, fala-se em:', ['Epidemia', 'Endemia', 'Prevalência', 'Letalidade'], 0, 'Epidemia é o aumento acima do esperado. Endemia é a ocorrência habitual.'),
      Q('O número de casos novos de uma doença que surgem em determinado período chama-se:', ['Incidência', 'Prevalência', 'Mortalidade', 'Letalidade'], 0, 'Incidência mede casos novos. Prevalência inclui todos os casos existentes.'),
      Q('A fisioterapia de uma pessoa que teve AVC, para recuperar movimentos e evitar sequelas, é exemplo de prevenção:', ['Terciária', 'Primária', 'Secundária', 'Epidemiológica'], 0, 'Reabilitação e redução de sequelas fazem parte da prevenção terciária.'),
      Q('Segundo a definição clássica da OMS, saúde é:', ['Um estado de completo bem-estar físico, mental e social, e não apenas a ausência de doença', 'A ausência de doenças diagnosticadas por exame', 'A capacidade de trabalhar sem faltas', 'O acesso a um plano de saúde privado'], 0, 'A OMS ampliou o conceito de saúde para além da ausência de doença.')
    ]
  },
  {
    id: 'esp-4', ico: '🤝', title: 'Ética e serviço público', topic: 'Sigilo, postura e princípios do art. 37',
    lesson: [
      C('🔒', 'Sigilo é regra', '<p>Tudo o que o agente vê e ouve nas casas é <span class="hl">confidencial</span>. As informações servem só para o cuidado e circulam apenas dentro da equipe.</p><p>Dados de saúde são <b>dados pessoais sensíveis</b> pela <b>LGPD</b> (Lei 13.709/2018).</p>'),
      C('🙋', 'Postura no território', '<ul><li>Identificar-se com crachá e uniforme</li><li>Tratar todos com <b>respeito</b>, sem julgar ou discriminar por raça, religião, orientação sexual ou condição social</li><li>Usar linguagem simples e escutar com atenção</li><li>Respeitar crenças e decisões, oferecendo informação</li></ul>'),
      C('🏛️', 'LIMPE: princípios da administração pública', '<p>O art. 37 da Constituição vale para todo servidor:</p><ul><li><b>L</b>egalidade: só fazer o que a lei permite</li><li><b>I</b>mpessoalidade: atender sem favorecer ninguém</li><li><b>M</b>oralidade: agir com ética e honestidade</li><li><b>P</b>ublicidade: transparência dos atos</li><li><b>E</b>ficiência: fazer bem, com bom uso dos recursos</li></ul>'),
      V('O agente pode contar a um vizinho o diagnóstico de um morador, se for para ajudar.', false, 'Falso. A informação é sigilosa. Quem decide compartilhar a própria condição é o morador.')
    ],
    quiz: [
      Q('Durante uma visita, a vizinha pergunta ao agente qual doença o morador da casa ao lado tem. A conduta correta é:', ['Não revelar a informação, preservando o sigilo do morador', 'Contar, já que a vizinha pode ajudar no cuidado', 'Revelar apenas o nome do remédio', 'Pedir que ela pergunte ao agente em outro dia'], 0, 'As informações de saúde são sigilosas e circulam apenas dentro da equipe.'),
      Q('NÃO é princípio da administração pública previsto no art. 37 da Constituição:', ['Lucratividade', 'Legalidade', 'Impessoalidade', 'Eficiência'], 0, 'Os princípios são Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência (LIMPE).'),
      Q('Um agente agenda primeiro as visitas da casa de parentes, deixando famílias de maior risco para depois. Esse comportamento fere principalmente o princípio da:', ['Impessoalidade', 'Publicidade', 'Legalidade tributária', 'Continuidade'], 0, 'Impessoalidade exige atender pelo interesse público e pelo risco, sem favorecimento pessoal.'),
      Q('Pela Lei Geral de Proteção de Dados (LGPD), informações sobre a saúde de uma pessoa são classificadas como:', ['Dados pessoais sensíveis', 'Dados públicos de livre divulgação', 'Dados anônimos por natureza', 'Informações comerciais'], 0, 'Dados de saúde são dados pessoais sensíveis e exigem proteção reforçada.'),
      Q('Uma família recusa uma orientação por motivos religiosos. A postura mais adequada do agente é:', ['Respeitar a crença, dialogar e oferecer informações sem julgamento', 'Insistir até a família mudar de opinião', 'Deixar de visitar a família', 'Denunciar a família à polícia'], 0, 'O agente respeita as crenças, informa com clareza e mantém o vínculo, comunicando a equipe quando houver risco.')
    ]
  },
  {
    id: 'esp-5', ico: '🚰', title: 'Saneamento e ambiente', topic: 'Água, esgoto, lixo e drenagem',
    lesson: [
      C('🚰', 'Os 4 componentes do saneamento', '<p>Pela lei do saneamento básico (Lei 11.445/2007, atualizada em 2020):</p><ul><li><b>Abastecimento de água potável</b></li><li><b>Esgotamento sanitário</b></li><li><b>Limpeza urbana e manejo de resíduos sólidos</b> (lixo)</li><li><b>Drenagem e manejo das águas da chuva</b></li></ul>'),
      C('💧', 'Água segura em casa', '<ul><li>Sem água tratada: <b>filtrar e ferver</b>, ou usar <span class="hl">2 gotas de hipoclorito de sódio 2,5% por litro</span> e esperar <b>30 minutos</b></li><li>Caixa-d’água <b>sempre tampada</b> e limpa a cada 6 meses</li><li>Fossa longe do poço</li></ul>'),
      K('Problema × consequência', 'Falta de saneamento', ['Esgoto a céu aberto', 'Lixo acumulado', 'Água sem tratamento', 'Enchentes'], 'Riscos à saúde', ['Diarreias, esquistossomose', 'Ratos, baratas e criadouros do Aedes', 'Hepatite A, cólera, febre tifoide', 'Leptospirose']),
      V('Energia elétrica é um dos 4 componentes do saneamento básico.', false, 'Falso. Os componentes são água, esgoto, resíduos sólidos e drenagem das águas da chuva.')
    ],
    quiz: [
      Q('NÃO faz parte dos componentes do saneamento básico definidos em lei:', ['Fornecimento de energia elétrica', 'Abastecimento de água potável', 'Esgotamento sanitário', 'Drenagem e manejo das águas pluviais'], 0, 'Saneamento básico: água, esgoto, limpeza urbana e resíduos sólidos, e drenagem pluvial.'),
      Q('Para tratar a água em casa com hipoclorito de sódio a 2,5%, a orientação é usar:', ['2 gotas por litro e aguardar 30 minutos antes de consumir', '1 colher de sopa por litro e consumir imediatamente', '10 gotas por litro e aguardar 5 minutos', 'Meio copo por balde e ferver em seguida'], 0, 'A orientação usual é 2 gotas por litro de água e aguardar 30 minutos.'),
      Q('A hepatite A é transmitida principalmente por:', ['Água e alimentos contaminados por fezes', 'Picada de mosquito', 'Transfusão de sangue em hospitais', 'Contato com a pele de animais'], 0, 'A hepatite A tem transmissão fecal-oral, ligada à falta de saneamento e higiene.'),
      Q('Sobre a caixa-d’água da residência, a orientação correta do agente é:', ['Mantê-la sempre bem tampada e limpá-la periodicamente', 'Deixá-la aberta para a água “respirar”', 'Limpá-la apenas quando a água mudar de cor', 'Cobri-la com pano fino'], 0, 'Tampada impede a entrada do Aedes e de sujeira. A limpeza deve ser periódica.'),
      Q('O acúmulo de lixo nos quintais favorece principalmente:', ['A proliferação de roedores e de criadouros do Aedes aegypti', 'A melhoria da qualidade do ar', 'A redução de doenças diarreicas', 'O controle natural dos mosquitos'], 0, 'Lixo serve de abrigo e alimento para ratos e acumula água para o mosquito.')
    ]
  }
);

insertAfter('esp', 'acs-4', {
  id: 'acs-5', cargo: 'acs', ico: '🫁', title: 'Doenças no território', topic: 'Hipertensão, diabetes, tuberculose e hanseníase',
  lesson: [
    K('As crônicas mais comuns', 'Hipertensão', ['Pressão igual ou maior que <b>140/90 mmHg</b> de forma persistente', 'Costuma ser silenciosa', 'Orientar: menos sal, atividade física, tomar o remédio certo'], 'Diabetes', ['Sinais: <b>muita sede, muita urina, muita fome e perda de peso</b>', 'Cuidar dos <b>pés</b>: olhar feridas e usar calçado adequado', 'Acompanhar consultas e exames']),
    C('🫁', 'Tuberculose', '<p><b>Sintomático respiratório</b>: pessoa com <span class="hl">tosse por 3 semanas ou mais</span>. Deve ser encaminhada para exame de escarro.</p><p>O tratamento dura no mínimo <b>6 meses</b> e é gratuito. No <b>TDO</b> (tratamento diretamente observado), um profissional acompanha a tomada do remédio.</p>'),
    C('🖐️', 'Hanseníase', '<p>Sinal típico: <span class="hl">mancha com perda ou alteração de sensibilidade</span> ao calor, à dor ou ao toque.</p><p>Tem cura e tratamento gratuito. Depois que o tratamento começa, a pessoa deixa de transmitir. Combater o <b>preconceito</b> faz parte do cuidado.</p>'),
    V('Uma pessoa com tosse há 3 semanas deve ser orientada a procurar a unidade para investigar tuberculose.', true, 'Verdadeiro. Tosse por 3 semanas ou mais caracteriza o sintomático respiratório.')
  ],
  quiz: [
    Q('Na busca ativa de tuberculose na população geral, considera-se sintomático respiratório a pessoa com tosse por:', ['3 semanas ou mais', '2 dias ou mais', '1 semana, com febre alta', '6 meses ou mais'], 0, 'Tosse por 3 semanas ou mais: encaminhar para investigação.'),
    Q('Um sinal que deve levar o ACS a suspeitar de hanseníase é:', ['Mancha na pele com perda de sensibilidade', 'Coceira passageira após picada de inseto', 'Espinhas no rosto de adolescentes', 'Pele seca no inverno'], 0, 'Manchas com alteração de sensibilidade são o sinal clássico da hanseníase.'),
    Q('Considera-se hipertensão arterial, em adultos, a pressão persistentemente igual ou superior a:', ['140/90 mmHg', '100/60 mmHg', '120/80 mmHg', '180/120 mmHg apenas'], 0, 'O valor de referência para diagnóstico é 140/90 mmHg, confirmado em mais de uma medida.'),
    Q('São sinais clássicos do diabetes descompensado:', ['Muita sede, urina em excesso e perda de peso', 'Tosse seca e febre baixa', 'Manchas vermelhas e coceira', 'Dor de dente e sangramento gengival'], 0, 'Sede excessiva, urina em excesso, fome aumentada e emagrecimento são sinais clássicos.'),
    Q('No tratamento diretamente observado (TDO) da tuberculose:', ['Um profissional de saúde acompanha a tomada dos medicamentos', 'O paciente se trata sozinho, sem contato com a equipe', 'O remédio é aplicado apenas no hospital', 'A família decide quando interromper o tratamento'], 0, 'O TDO aumenta a adesão: alguém da equipe observa a tomada do remédio.')
  ]
});

insertAfter('esp', 'ace-4', {
  id: 'ace-5', cargo: 'ace', ico: '🪰', title: 'Biologia dos vetores', topic: 'Mosquitos, barbeiro e roedores',
  lesson: [
    K('Conheça os mosquitos', 'Aedes aegypti', ['Listras brancas no corpo e nas pernas', 'Pica de <b>dia</b>', 'Põe ovos na parede de recipientes com água parada'], 'Culex e Anopheles', ['<b>Culex</b> (pernilongo): pica à noite, cria em água com matéria orgânica. <u>Não</u> transmite dengue', '<b>Anopheles</b> (mosquito-prego): transmite malária']),
    C('🐞', 'Outros vetores', '<ul><li><b>Barbeiro</b> (triatomíneo): hábito noturno, esconde-se em <span class="hl">frestas de casas de pau a pique</span>, galinheiros e entulho</li><li><b>Mosquito-palha</b> (flebotomíneo): pequeno, cria em matéria orgânica úmida no solo</li><li><b>Caramujo Biomphalaria</b>: vive em água doce parada ou lenta</li></ul>'),
    K('Os 3 roedores urbanos', 'Espécie', ['<b>Ratazana</b> (<i>Rattus norvegicus</i>)', '<b>Rato de telhado</b> (<i>Rattus rattus</i>)', '<b>Camundongo</b> (<i>Mus musculus</i>)'], 'Onde vive', ['Tocas no solo, esgotos e margens de rios', 'Partes altas: forros, telhados, árvores', 'Dentro de casas: armários, despensas']),
    K('Antirratização × Desratização', 'Antirratização', ['Medidas <b>preventivas</b>', 'Tirar alimento, água e abrigo dos ratos', 'Lixo fechado, entulho removido, frestas vedadas'], 'Desratização', ['Eliminação dos ratos', 'Uso de raticidas por equipe treinada', 'Sempre junto com a antirratização']),
    V('O pernilongo comum (Culex) é o transmissor da dengue.', false, 'Falso. A dengue é transmitida pelo Aedes aegypti, que pica de dia.')
  ],
  quiz: [
    Q('O mosquito de hábito noturno, conhecido como pernilongo, que se cria em água com matéria orgânica e não transmite dengue, pertence ao gênero:', ['Culex', 'Aedes', 'Anopheles', 'Haemagogus'], 0, 'O Culex é o pernilongo comum. A dengue é transmitida pelo Aedes.'),
    Q('O roedor que costuma viver em tocas no solo, esgotos e margens de córregos é a:', ['Ratazana (Rattus norvegicus)', 'Rato de telhado (Rattus rattus)', 'Camundongo (Mus musculus)', 'Capivara'], 0, 'A ratazana faz tocas no chão e vive em redes de esgoto.'),
    Q('Retirar entulho, guardar alimentos em recipientes fechados e vedar frestas são medidas de:', ['Antirratização', 'Desratização química', 'Controle biológico do Aedes', 'Bloqueio vacinal'], 0, 'Antirratização são medidas preventivas que tiram dos ratos alimento, água e abrigo.'),
    Q('O barbeiro, transmissor da doença de Chagas, costuma se abrigar em:', ['Frestas de casas de pau a pique, galinheiros e entulho', 'Água limpa de caixas-d’água', 'Pneus com água da chuva', 'Areia da praia'], 0, 'O barbeiro tem hábito noturno e se esconde em frestas e abrigos de animais.'),
    Q('A fêmea do Aedes aegypti deposita seus ovos preferencialmente:', ['Nas paredes de recipientes, perto da superfície da água parada', 'No fundo de rios de correnteza forte', 'Em folhas secas no chão da mata', 'Na pele de animais domésticos'], 0, 'Os ovos ficam aderidos às paredes dos recipientes. Por isso é preciso escovar, e não só esvaziar.')
  ]
});

/* ---------------- PORTUGUÊS ---------------- */
insertAfter('port', 'port-4',
  {
    id: 'port-5', ico: '📰', title: 'Textos e funções', topic: 'Tipos, gêneros, funções e interpretação',
    lesson: [
      C('📰', 'Tipos textuais', '<ul><li><b>Narrativo</b>: conta fatos, com personagens, tempo e lugar</li><li><b>Descritivo</b>: mostra características</li><li><b>Dissertativo-argumentativo</b>: defende uma opinião</li><li><b>Expositivo</b>: informa e explica</li><li><b>Injuntivo</b>: <span class="hl">dá instruções</span>, com verbos no imperativo (receita, manual, modo de usar da bula)</li></ul>'),
      T('Tipo × gênero', '<p><b>Tipo</b> é a estrutura (narrar, instruir...). <b>Gênero</b> é o texto do dia a dia: notícia, bula, ofício, crônica, cartaz de campanha. Um gênero pode misturar vários tipos.</p>'),
      K('Funções da linguagem', 'Foco em...', ['<b>Referencial</b>: no assunto (notícia)', '<b>Emotiva</b>: em quem fala (desabafo)', '<b>Conativa ou apelativa</b>: em quem ouve (propaganda)'], '...e também', ['<b>Fática</b>: no canal (“Alô?”, “Entendeu?”)', '<b>Metalinguística</b>: a língua falando dela mesma (dicionário)', '<b>Poética</b>: na forma da mensagem (poema, trocadilho)']),
      C('🧐', 'Cuidado na interpretação', '<p>As alternativas erradas costumam:</p><ul><li><b>Extrapolar</b>: dizem mais do que o texto disse</li><li><b>Reduzir</b>: pegam só uma parte e generalizam</li><li><b>Contradizer</b>: afirmam o contrário do texto</li></ul><p>Fique com a alternativa que o texto <span class="hl">realmente permite concluir</span>.</p>'),
      V('Um cartaz com “Tampe sua caixa-d’água!” usa principalmente a função conativa.', true, 'Verdadeiro. O texto se dirige ao leitor e tenta convencê-lo a agir.')
    ],
    quiz: [
      Q('No cartaz “Tampe sua caixa-d’água e proteja sua família!”, predomina a função da linguagem:', ['Conativa (apelativa)', 'Metalinguística', 'Fática', 'Emotiva'], 0, 'O texto se dirige ao leitor, com verbo no imperativo, para convencê-lo.'),
      Q('A seção de uma bula que explica como tomar o medicamento apresenta predominantemente o tipo textual:', ['Injuntivo', 'Narrativo', 'Descritivo', 'Dissertativo-argumentativo'], 0, 'Textos que dão instruções são injuntivos.'),
      Q('Um verbete de dicionário que explica o significado da palavra “endemia” é exemplo da função:', ['Metalinguística', 'Conativa', 'Poética', 'Fática'], 0, 'Quando a língua é usada para explicar a própria língua, a função é metalinguística.'),
      Q('Leia: “Desde que a equipe passou a visitar o bairro toda semana, os focos do mosquito caíram pela metade.” Pode-se concluir que:', ['As visitas frequentes contribuíram para a redução dos focos', 'O mosquito foi totalmente eliminado do bairro', 'A equipe passou a visitar o bairro todos os dias', 'Os moradores não colaboraram com a equipe'], 0, 'O texto relaciona as visitas à queda dos focos. As outras alternativas extrapolam ou contradizem o texto.'),
      Q('Em uma notícia que informa, de forma objetiva, o número de casos de dengue no município, predomina a função:', ['Referencial', 'Emotiva', 'Poética', 'Fática'], 0, 'O foco no assunto, de modo objetivo, caracteriza a função referencial.')
    ]
  },
  {
    id: 'port-6', ico: '🧷', title: 'Pronomes e regência', topic: 'Oblíquos, colocação e regência verbal',
    lesson: [
      K('O, a, lhe: qual usar?', 'Objeto direto (sem preposição)', ['<b>o, a, os, as</b>', '“Eu <b>o</b> vi no posto.”', 'Depois de r, s, z: <b>lo, la</b> → “vou visitá-<b>la</b>”', 'Depois de som nasal: <b>no, na</b> → “visitaram-<b>no</b>”'], 'Objeto indireto (com preposição)', ['<b>lhe, lhes</b> = a ele, a ela', '“Entreguei-<b>lhe</b> o cartão.”', 'Errado na norma: “Eu <b>lhe</b> vi”']),
      C('📍', 'Colocação pronominal', '<ul><li><b>Próclise</b> (antes do verbo) com palavras que atraem: <span class="hl">não, nunca, que, quem, já, sempre, alguém</span> → “<b>Não me</b> disseram.”</li><li><b>Ênclise</b> (depois): no início da frase, a norma não começa com pronome oblíquo → “<b>Disseram-me</b> a verdade.”</li><li><b>Mesóclise</b>: futuro sem palavra atrativa → “Far-<b>se</b>-á a reunião.”</li></ul>'),
      C('🔀', 'Regências que caem', '<ul><li><b>Preferir</b> algo <b>a</b> algo (sem “mais” e sem “do que”)</li><li><b>Chegar a</b> um lugar (“chegou <b>ao</b> posto”, não “no posto”)</li><li><b>Obedecer a</b> (“obedecer <b>às</b> normas”)</li><li><b>Assistir a</b> = ver; <b>assistir</b> alguém = ajudar</li><li><b>Implicar</b> = acarretar, sem preposição (“implica <b>mudanças</b>”)</li></ul>'),
      V('“Prefiro mais estudar do que ficar parado” está de acordo com a norma-padrão.', false, 'Falso. O correto é “Prefiro estudar a ficar parado”.')
    ],
    quiz: [
      Q('Assinale a frase de acordo com a norma-padrão quanto à regência do verbo “preferir”:', ['Prefiro estudar a ficar sem fazer nada.', 'Prefiro mais estudar do que ficar sem fazer nada.', 'Prefiro estudar do que ficar sem fazer nada.', 'Prefiro muito mais estudar que ficar sem fazer nada.'], 0, 'Preferir algo a algo, sem “mais” e sem “do que”.'),
      Q('Complete de acordo com a norma-padrão: “Ontem eu ___ no posto de saúde.” (referindo-se a um morador)', ['o vi', 'lhe vi', 'vi-lhe', 'vi ele'], 0, '“Ver” pede objeto direto: “o”. “Lhe” é para objeto indireto, e “vi ele” é coloquial.'),
      Q('Assinale a frase em que a colocação do pronome está correta:', ['Não me informaram o horário da reunião.', 'Não informaram-me o horário da reunião.', 'Me informaram o horário da reunião.', 'Informarão-me o horário da reunião.'], 0, '“Não” atrai o pronome (próclise). A norma não inicia frase com oblíquo, e no futuro usa-se mesóclise.'),
      Q('Assinale a frase correta quanto à regência do verbo “chegar”:', ['Os agentes chegaram ao bairro bem cedo.', 'Os agentes chegaram no bairro bem cedo.', 'Os agentes chegaram em o bairro bem cedo.', 'Os agentes chegaram o bairro bem cedo.'], 0, 'Na norma-padrão, quem chega, chega a algum lugar.'),
      Q('Assinale a frase correta quanto à regência do verbo “obedecer”:', ['Todos devem obedecer às normas de biossegurança.', 'Todos devem obedecer as normas de biossegurança.', 'Todos devem obedecer com as normas de biossegurança.', 'Todos devem obedecer nas normas de biossegurança.'], 0, '“Obedecer” pede a preposição “a”: a + as normas = às normas.')
    ]
  },
  {
    id: 'port-7', ico: '🌳', title: 'Sintaxe', topic: 'Sujeito, termos da oração e períodos',
    lesson: [
      C('👤', 'Tipos de sujeito', '<ul><li><b>Simples</b>: um núcleo (“<b>A equipe</b> chegou”)</li><li><b>Composto</b>: dois ou mais núcleos (“<b>Ana e Rui</b> saíram”)</li><li><b>Oculto</b>: identificado pela terminação do verbo (“Visitamos” = nós)</li><li><b>Indeterminado</b>: não se sabe quem (“<b>Roubaram</b> a bicicleta”, “<b>Precisa-se</b> de ajuda”)</li><li><b>Oração sem sujeito</b>: <span class="hl">fenômenos da natureza</span>, haver = existir, fazer = tempo (“Choveu”, “Há vagas”)</li></ul>'),
      K('Termos que confundem', 'Aposto', ['<b>Explica</b> um termo anterior', 'Geralmente entre vírgulas', '“Saquarema, <b>cidade da Região dos Lagos</b>, ...”'], 'Vocativo', ['<b>Chama</b> o interlocutor', 'Isolado por vírgula', '“<b>Dona Rosa</b>, a senhora tomou o remédio?”']),
      K('Período composto', 'Coordenadas (independentes)', ['Aditivas: e, nem', 'Adversativas: mas, porém', 'Alternativas: ou... ou', 'Conclusivas: logo, portanto', 'Explicativas: pois, porque'], 'Subordinadas (dependentes)', ['<b>Substantivas</b>: funcionam como sujeito ou objeto', '<b>Adjetivas</b>: “que” = “o qual”', '<b>Adverbiais</b>: causa, concessão, condição, tempo, finalidade']),
      V('Em “Choveu muito em Saquarema”, o sujeito é “Saquarema”.', false, 'Falso. Verbos de fenômeno da natureza formam oração sem sujeito. “Em Saquarema” é adjunto adverbial de lugar.')
    ],
    quiz: [
      Q('Na frase “Choveu muito em Saquarema durante a madrugada”, temos:', ['Oração sem sujeito', 'Sujeito simples: Saquarema', 'Sujeito oculto: ele', 'Sujeito composto'], 0, 'Fenômenos da natureza não têm sujeito.'),
      Q('Em “Visitamos vinte casas hoje”, o sujeito é classificado como:', ['Oculto (nós)', 'Indeterminado', 'Inexistente', 'Simples: vinte casas'], 0, 'A terminação “-mos” indica o sujeito “nós”, oculto na frase.'),
      Q('Em “Saquarema, cidade da Região dos Lagos, recebe surfistas do mundo todo”, o trecho entre vírgulas é:', ['Aposto', 'Vocativo', 'Sujeito', 'Objeto direto'], 0, 'O trecho explica quem é Saquarema: é um aposto explicativo.'),
      Q('Em “Dona Rosa, a senhora tomou o remédio hoje?”, o termo “Dona Rosa” é:', ['Vocativo', 'Aposto', 'Sujeito', 'Adjunto adverbial'], 0, 'É um chamamento à pessoa com quem se fala: vocativo.'),
      Q('Em “Estudei todos os dias, logo estou preparado para a prova”, a segunda oração é:', ['Coordenada sindética conclusiva', 'Coordenada sindética adversativa', 'Subordinada adverbial concessiva', 'Subordinada adjetiva'], 0, '“Logo” introduz uma conclusão: coordenada conclusiva.')
    ]
  }
);

/* ---------------- SAQUAREMA ---------------- */
insertAfter('mun', 'mun-2',
  {
    id: 'mun-3', ico: '📘', title: 'Lei Orgânica e município', topic: 'Poderes, autonomia e administração',
    lesson: [
      C('🏙️', 'O município é autônomo', '<p>Pela Constituição (art. 18), o município é um <b>ente da federação</b>, com autonomia para:</p><ul><li><b>Se auto-organizar</b>: pela Lei Orgânica</li><li><b>Se autogovernar</b>: elege prefeito e vereadores</li><li><b>Se autoadministrar</b> e <b>legislar</b> sobre assuntos locais</li></ul>'),
      K('Os poderes do município', 'Executivo', ['<b>Prefeito</b> e vice', 'Mandato de <b>4 anos</b>', 'Administra, executa as leis e os serviços'], 'Legislativo', ['<b>Câmara Municipal</b> (vereadores)', 'Faz as leis municipais', '<b>Fiscaliza</b> o Executivo']),
      T('Pegadinha', '<p>O município <b>não tem Poder Judiciário próprio</b>. Os juízes que atuam na cidade pertencem ao Poder Judiciário do <b>estado</b> (ou da União).</p>'),
      C('📘', 'A Lei Orgânica', '<p>É a <span class="hl">“constituição” do município</span>. Pela CF (art. 29), é votada em <b>dois turnos</b>, com intervalo mínimo de 10 dias, e aprovada por <b>2/3 dos membros da Câmara</b>.</p><p>O edital cobra o texto <b>com suas atualizações</b>: consulte a versão vigente no site da Câmara de Saquarema.</p><p>Para cargos efetivos, a regra é o <b>concurso público</b> (CF, art. 37, II).</p>'),
      V('O município possui Poder Judiciário próprio, com juízes municipais.', false, 'Falso. Os municípios têm apenas Executivo e Legislativo.')
    ],
    quiz: [
      Q('Na organização dos poderes, o município brasileiro NÃO possui:', ['Poder Judiciário próprio', 'Poder Executivo', 'Poder Legislativo', 'Lei Orgânica'], 0, 'O município tem Executivo (Prefeitura) e Legislativo (Câmara). Não há Judiciário municipal.'),
      Q('O mandato do prefeito municipal é de:', ['4 anos', '2 anos', '5 anos', '6 anos'], 0, 'Prefeito, vice e vereadores têm mandato de 4 anos.'),
      Q('São funções típicas da Câmara Municipal:', ['Legislar e fiscalizar o Poder Executivo', 'Julgar crimes ocorridos no município', 'Executar obras e serviços públicos', 'Nomear juízes e promotores'], 0, 'O Legislativo municipal faz as leis e fiscaliza a Prefeitura.'),
      Q('A Lei Orgânica do Município é votada em dois turnos e aprovada por:', ['Dois terços dos membros da Câmara Municipal', 'Maioria simples dos vereadores presentes', 'Plebiscito com toda a população', 'Decreto do prefeito'], 0, 'CF, art. 29: dois turnos, intervalo mínimo de 10 dias e aprovação por 2/3 da Câmara.'),
      Q('Pela Constituição, a investidura em cargo público efetivo depende, em regra, de:', ['Aprovação prévia em concurso público', 'Indicação do prefeito', 'Eleição pela comunidade', 'Contrato verbal com a secretaria'], 0, 'Art. 37, II: cargos efetivos exigem concurso público de provas ou de provas e títulos.')
    ]
  },
  {
    id: 'mun-4', ico: '🏄', title: 'Geografia e turismo', topic: 'Lagoa, praias, rodovia e meio ambiente',
    lesson: [
      C('🌊', 'Mar, lagoa e serra', '<p>Saquarema tem <b>praias de mar aberto</b>, ótimas para o surfe, e o <span class="hl">sistema lagunar da Lagoa de Saquarema</span>, ligado ao mar pelo canal da <b>Barra Franca</b>.</p><p>A lagoa é importante para a <b>pesca artesanal</b>, o turismo e o equilíbrio ambiental.</p>'),
      C('🏄', 'Turismo', '<ul><li><b>Surfe</b>: a Praia de <b>Itaúna</b> é chamada de “Maracanã do Surfe” e recebe etapas internacionais</li><li><b>Turismo religioso</b>: Igreja de Nossa Senhora de Nazareth</li><li><b>Natureza</b>: lagoas, praias e áreas verdes</li></ul>'),
      C('🛣️', 'Como se chega', '<p>A rodovia <span class="hl">RJ-106 (Rodovia Amaral Peixoto)</span> corta o município e passa por <b>Bacaxá</b>, o principal polo comercial e de serviços.</p>'),
      T('Ambiente é saúde', '<p>Esgoto sem tratamento na lagoa causa poluição, mau cheiro e mortandade de peixes, e afeta a saúde de quem vive e trabalha ali. É um tema que liga a cidade ao trabalho dos agentes.</p>'),
      V('A Barra Franca é o canal que liga a Lagoa de Saquarema ao mar.', true, 'Verdadeiro. A comunicação com o oceano é importante para a renovação da água da lagoa.')
    ],
    quiz: [
      Q('A rodovia estadual que atravessa Saquarema, passando por Bacaxá, é a:', ['RJ-106 (Rodovia Amaral Peixoto)', 'BR-040 (Rio–Juiz de Fora)', 'BR-116 (Via Dutra)', 'RJ-116 (Itaboraí–Nova Friburgo)'], 0, 'A RJ-106, Rodovia Amaral Peixoto, liga Saquarema às demais cidades da Região dos Lagos.'),
      Q('O canal que liga a Lagoa de Saquarema ao Oceano Atlântico é conhecido como:', ['Barra Franca', 'Canal do Itajuru', 'Barra da Tijuca', 'Canal de São Gonçalo'], 0, 'A Barra Franca é a ligação da lagoa com o mar.'),
      Q('A praia de Saquarema apelidada de “Maracanã do Surfe” é:', ['Itaúna', 'Jaconé', 'Vilatur', 'Boqueirão'], 0, 'Itaúna é famosa pelas ondas e pelas competições internacionais.'),
      Q('O distrito de Saquarema conhecido como principal polo comercial e de serviços é:', ['Bacaxá', 'Sampaio Correia', 'Itaúna', 'Jaconé'], 0, 'Bacaxá, o 2º distrito, concentra comércio e serviços.'),
      Q('Um dos principais problemas ambientais que afetam lagoas costeiras como a de Saquarema é:', ['O lançamento de esgoto sem tratamento', 'O excesso de neve no inverno', 'A atividade vulcânica', 'A falta total de chuvas o ano inteiro'], 0, 'Esgoto sem tratamento polui a água e prejudica a pesca e a saúde.')
    ]
  }
);

/* ---------------- FLASHCARDS DOS NOVOS TÓPICOS ---------------- */
FC_RAW.push(
  ['sus-4', 'Qual foi o marco da Reforma Sanitária?', 'A <b>8ª Conferência Nacional de Saúde (1986)</b>, cujas propostas viraram o capítulo da saúde na Constituição de 1988.'],
  ['sus-4', 'Quem o INAMPS atendia?', 'Só os <b>contribuintes da previdência</b>, em geral trabalhadores com carteira assinada. Foi extinto em <b>1993</b>.'],
  ['sus-4', 'O que criou a Lei Eloy Chaves (1923)?', 'As <b>Caixas de Aposentadorias e Pensões (CAPs)</b>, marco inicial da previdência social.'],
  ['sus-5', 'Papel da Atenção Básica na rede', '<b>Porta de entrada preferencial</b>, centro de comunicação da RAS, <b>coordena o cuidado</b> e ordena a rede.'],
  ['sus-5', 'Longitudinalidade × Resolutividade', '• <b>Longitudinalidade</b>: cuidado contínuo ao longo do tempo, com vínculo<br>• <b>Resolutividade</b>: resolver a maioria dos problemas na própria Atenção Básica'],
  ['sus-5', 'Diretrizes do HumanizaSUS', 'Acolhimento, clínica ampliada, cogestão, ambiência, valorização do trabalhador e defesa dos direitos dos usuários.'],
  ['sus-6', 'SIM, SINASC e SINAN', '• <b>SIM</b>: óbitos (Declaração de Óbito)<br>• <b>SINASC</b>: nascidos vivos (DNV)<br>• <b>SINAN</b>: agravos de notificação'],
  ['sus-6', 'Prazos da notificação compulsória', '• <b>Imediata</b>: até 24 horas<br>• <b>Semanal</b>: até 7 dias<br>Notifica-se já na <b>suspeita</b>.'],
  ['sus-6', 'Papel do agente na vigilância', 'Identificar casos suspeitos no território e <b>comunicar a equipe e a vigilância</b>, que notificam e investigam.'],
  ['esp-3', 'Os 3 níveis de prevenção', '• <b>Primária</b>: antes da doença (vacina)<br>• <b>Secundária</b>: diagnóstico precoce (preventivo)<br>• <b>Terciária</b>: reabilitação (fisioterapia)'],
  ['esp-3', 'Endemia, epidemia, surto e pandemia', '• Endemia: habitual<br>• Epidemia: acima do esperado<br>• Surto: epidemia localizada<br>• Pandemia: vários continentes'],
  ['esp-3', 'Incidência × Prevalência', '• <b>Incidência</b>: casos <b>novos</b> no período<br>• <b>Prevalência</b>: <b>todos</b> os casos existentes'],
  ['esp-4', 'LIMPE', '<b>L</b>egalidade, <b>I</b>mpessoalidade, <b>M</b>oralidade, <b>P</b>ublicidade e <b>E</b>ficiência (CF, art. 37).'],
  ['esp-4', 'Dados de saúde na LGPD', 'São <b>dados pessoais sensíveis</b>: exigem sigilo e proteção reforçada.'],
  ['esp-4', 'Morador recusa orientação por crença', 'Respeitar, dialogar, informar sem julgar e comunicar a equipe se houver risco.'],
  ['esp-5', '4 componentes do saneamento básico', 'Água potável, esgotamento sanitário, limpeza urbana e resíduos sólidos, drenagem das águas da chuva.'],
  ['esp-5', 'Tratar água com hipoclorito 2,5%', '<b>2 gotas por litro</b> e aguardar <b>30 minutos</b> antes de beber.'],
  ['esp-5', 'Doenças ligadas à falta de saneamento', 'Diarreias, hepatite A, cólera, febre tifoide, esquistossomose e leptospirose.'],
  ['acs-5', 'Sintomático respiratório', 'Tosse por <b>3 semanas ou mais</b>: encaminhar para investigar tuberculose.'],
  ['acs-5', 'Sinal clássico da hanseníase', '<b>Mancha com perda de sensibilidade</b> ao calor, à dor ou ao toque. Tem cura.'],
  ['acs-5', 'Valor de referência da hipertensão', 'Pressão persistente <b>≥ 140/90 mmHg</b>.'],
  ['ace-5', 'Aedes × Culex × Anopheles', '• <b>Aedes</b>: dia, dengue, zika, chikungunya<br>• <b>Culex</b>: pernilongo noturno<br>• <b>Anopheles</b>: malária'],
  ['ace-5', 'Os 3 roedores urbanos', '• <b>Ratazana</b>: tocas e esgoto<br>• <b>Rato de telhado</b>: forros e partes altas<br>• <b>Camundongo</b>: dentro de casa'],
  ['ace-5', 'Antirratização × desratização', '• <b>Anti</b>: prevenir (sem alimento, água e abrigo)<br>• <b>Des</b>: eliminar os ratos com raticida'],
  ['port-5', 'As 6 funções da linguagem', 'Referencial, emotiva, conativa, fática, metalinguística e poética.'],
  ['port-5', 'Texto injuntivo', 'Dá <b>instruções</b>, com verbos no imperativo: receita, manual, modo de usar.'],
  ['port-5', 'As 3 armadilhas da interpretação', '<b>Extrapolar</b>, <b>reduzir</b> e <b>contradizer</b> o texto.'],
  ['port-6', 'O × lhe', '• <b>o, a</b>: objeto direto (“eu o vi”)<br>• <b>lhe</b>: objeto indireto (“entreguei-lhe”)'],
  ['port-6', 'Palavras que atraem o pronome', '<b>Não, nunca, que, quem, já, sempre, alguém</b> → próclise: “Não me disseram”.'],
  ['port-6', 'Regência de preferir e chegar', '• Preferir algo <b>a</b> algo<br>• Chegar <b>a</b> um lugar'],
  ['port-7', 'Oração sem sujeito', 'Fenômenos da natureza (choveu), <b>haver</b> = existir e <b>fazer</b> = tempo.'],
  ['port-7', 'Aposto × vocativo', '• <b>Aposto</b>: explica um termo<br>• <b>Vocativo</b>: chama alguém'],
  ['port-7', 'Coordenadas × subordinadas', '• Coordenadas: independentes (e, mas, logo, pois)<br>• Subordinadas: dependem da principal'],
  ['mun-3', 'Poderes do município', '<b>Executivo</b> (prefeito) e <b>Legislativo</b> (Câmara). <b>Não há Judiciário municipal.</b>'],
  ['mun-3', 'Mandato de prefeito e vereador', '<b>4 anos</b>.'],
  ['mun-4', 'RJ-106', 'Rodovia <b>Amaral Peixoto</b>, que corta Saquarema e passa por Bacaxá.'],
  ['mun-4', 'Maracanã do Surfe', 'Praia de <b>Itaúna</b>, palco de etapas internacionais de surfe.'],
  ['mun-4', 'Barra Franca', 'Canal que liga a <b>Lagoa de Saquarema</b> ao mar.']
);

window.APROVAE_CONCURSOS = window.APROVAE_CONCURSOS || {};
window.APROVAE_CONCURSOS['saquarema-2026'] = {
  id: 'saquarema-2026',
  produto: 'concursos',
  mascot: 'notebook',
  onbNota: 'Português e Legislação são iguais para os dois cargos. Muda o bloco de Específicos.',
  notaInfo: 'Para passar: <b>54 de 90 pontos</b> e <b>nenhuma disciplina zerada</b>. Exemplo: 14 acertos em Específicos (42 pts) + 6 em Português (12 pts) = 54.',
  dica: '<b>Dica do Lumi:</b> Específicos valem 2/3 da prova. Cada acerto ali vale o triplo de um acerto de Legislação.',
  guia: {
    titulo: 'Edital em 1 minuto',
    sub: 'Processo Seletivo Público nº 001/2026 • Prefeitura de Saquarema/RJ • Banca IBAM',
    destaques: [
      { rotulo: 'ACS', valor: '133', texto: 'vagas • Agente Comunitário de Saúde' },
      { rotulo: 'ACE', valor: '84', texto: 'vagas • Agente de Combate às Endemias' }
    ],
    cards: [
      { titulo: 'CARGO', linhas: [['Salário', 'R$ 3.242,00'], ['Jornada', '40h semanais'], ['Escolaridade', 'Ensino médio completo'], ['ACS', 'Morar na área desde o edital']] },
      { titulo: 'DATAS', linhas: [['Inscrições', '17/11 a 22/12/2026'], ['Taxa', 'R$ 94,00 (boleto até 23/12, 21h)'], ['Prova objetiva', '31/01/2027 • 3 horas'], ['ACS', 'Manhã: portão 8h, início 9h10'], ['ACE', 'Tarde: portão 14h, início 15h10'], ['Gabarito preliminar', '01/02/2027']] },
      { titulo: 'ETAPAS', linhas: [['1. Prova objetiva', 'Eliminatória e classificatória'], ['2. Títulos', 'Classificatória • até 8 pts'], ['3. Curso de Formação Inicial', 'Eliminatório']] }
    ],
    estruturaTitulo: 'ESTRUTURA DA PROVA • 40 QUESTÕES • 4 ALTERNATIVAS',
    aprovacao: 'Aprovação: mínimo de <b>54 pontos (60%)</b> e nenhuma disciplina zerada.',
    rodape: 'Inscrições em www.ibam-concursos.org.br'
  },
  nome: 'Prefeitura de Saquarema/RJ',
  cargoGrupo: 'Agentes de Saúde (ACS e ACE)',
  edital: 'Processo Seletivo Público nº 001/2026',
  banca: 'IBAM',
  prova: [2027, 0, 31],
  vagas: 217,
  salario: 'R$ 3.242,00',
  editalUrl: 'https://www.ibam-concursos.org.br/documento/ed26_acs_ace.pdf',
  documentos: [
    { nome: 'Edital completo', tipo: 'PDF', url: 'https://www.ibam-concursos.org.br/documento/ed26_acs_ace.pdf' },
    { nome: 'Anexo I – Formulário para solicitação de isenção', tipo: 'DOC', url: 'https://www.ibam-concursos.org.br/documento/anx1psp-saq.doc' },
    { nome: 'Anexo II – Declaração de residência (Agente Comunitário de Saúde)', tipo: 'DOC', url: 'https://www.ibam-concursos.org.br/documento/anx2psp-saq.doc' },
    { nome: 'Anexo III – Declaração de residência em nome de terceiros (Agente Comunitário de Saúde)', tipo: 'DOC', url: 'https://www.ibam-concursos.org.br/documento/anx3psp-saq.doc' }
  ],
  corte: 54, total: 90,
  cargos: {
    acs: { nome: 'Agente Comunitário de Saúde', curto: 'ACS', emoji: '🏡', vagas: 133, turno: 'manhã • início 9h10', desc: 'Prova de manhã • precisa morar na área' },
    ace: { nome: 'Agente de Combate às Endemias', curto: 'ACE', emoji: '🔦', vagas: 84, turno: 'tarde • início 15h10', desc: 'Prova à tarde • controle de vetores' }
  },
  areas: AREAS,
  units: UNITS,
  flashcards: FC_RAW
};
})();
