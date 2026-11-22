/* =====================================================================
   Aprovaê — Plataforma de aprendizagem
   App estático (HTML + CSS + JS puro). Sem dependências.
   ===================================================================== */
(function () {
'use strict';

/* ------------------------------ PRODUTOS ------------------------------ */
const PRODUCTS = [
  { id: 'concursos', nome: 'Concursos', ico: '🏛️', robo: 'notebook', desc: 'Trilhas guiadas pelo edital do seu concurso público.', ativo: true,
    listaSub: 'Escolha o concurso que você vai prestar.', listaBreve: ['Novos concursos em breve', 'Estamos preparando as próximas trilhas a partir dos editais publicados.'], rotulo: 'CONCURSO' },
  { id: 'encceja', nome: 'ENCCEJA', ico: '📚', robo: 'revisao', desc: 'Conclua o ensino médio com aulas curtas, questões e redação.', ativo: true,
    listaSub: 'Escolha a edição do exame.', listaBreve: ['Ensino Fundamental em breve', 'A trilha do Encceja Ensino Fundamental está sendo preparada.'], rotulo: 'EXAME' },
  { id: 'graduacao', nome: 'Graduação', ico: '🎓', robo: 'graduacao', desc: 'Aulas curtas e exercícios para cada disciplina do seu curso.', ativo: true, rotulo: 'CURSO' },
  { id: 'enem', nome: 'ENEM', ico: '📝', robo: 'estudando', desc: 'Todas as áreas do ENEM, com foco no que mais cai.', ativo: false },
  { id: 'faetec', nome: 'Faetec', ico: '🛠️', robo: 'atencao', desc: 'Preparação para o processo seletivo da FAETEC.', ativo: false }
];
const CURSOS_G = window.APROVAE_CURSOS || {};
const productOf = c => PRODUCTS.find(p => p.id === ((c && c.produto) || 'concursos'));
// Planos premium. Quando houver link de pagamento (Mercado Pago, Stripe, Hotmart...), preencha "checkout".
const PLANS = [
  { id: 'mensal', nome: 'Mensal', preco: 15, meses: 1, checkout: '' },
  { id: 'trimestral', nome: 'Trimestral', preco: 40, meses: 3, checkout: '' },
  { id: 'anual', nome: 'Anual', preco: 100, meses: 12, destaque: 'Mais vantajoso', checkout: '' },
  { id: 'vitalicio', nome: 'Vitalício', preco: 500, meses: 0, checkout: '' }
];
const brl = v => 'R$ ' + v.toFixed(2).replace('.', ',');
// Pose do robô para cada tema de unidade (usada quando a unidade não define "mascot")
const THEME_ROBO = { sus: 'sus', campo: 'campo', letras: 'estudando', saquarema: 'saquarema', legislacao: 'legislacao' };
const unitRobo = u => u.mascot || THEME_ROBO[u.theme] || 'notebook';
const CONCURSOS = window.APROVAE_CONCURSOS || {};

/* ------------------------------ UTIL ------------------------------ */
const $app = document.getElementById('app');
const $layer = document.getElementById('layer');
const shuffle = a => { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
const todayStr = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const yesterdayStr = () => { const d = new Date(); d.setDate(d.getDate() - 1); return todayStr(d); };
const fmtDate = (a) => !a ? 'a definir' : (([y, m, d]) => String(d).padStart(2, '0') + '/' + String(m + 1).padStart(2, '0') + '/' + y)(a);
const daysTo = (a) => !a ? null : (([y, m, d]) => Math.max(0, Math.ceil((new Date(y, m, d) - new Date(new Date().toDateString())) / 86400000)))(a);
const daysBetween = (a, b) => Math.round((new Date(b + 'T12:00') - new Date(a + 'T12:00')) / 86400000);
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const plural = (n, s, p) => n + ' ' + (n === 1 ? s : p);
const store = {
  get(k) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return store._m[k] || null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { store._m[k] = v; } },
  del(k) { try { localStorage.removeItem(k); } catch (e) { delete store._m[k]; } },
  _m: {}
};
const wordmark = (extra = '') => `<span class="wordmark">Aprova<b>ê</b>${extra ? `<i>+</i><span class="wm-x">${extra}</span>` : ''}</span>`;

/* ------------------------------ MASCOTE (robô Aprovaê+) ------------------------------ */
// Cada pose é um arquivo próprio em /assets/mascote/ (WebP + PNG de reserva).
// Para criar uma pose nova: salve robo-NOME.webp e robo-NOME.png na pasta e registre aqui [largura, altura].
const ROBO = {
  principal: [478, 605], joinha: [478, 605], estudando: [278, 271], notebook: [255, 251],
  comemoracao: [235, 286], conquista: [262, 285], duvida: [237, 254], atencao: [270, 273],
  revisao: [235, 243], planejamento: [276, 241], sus: [276, 345], saquarema: [311, 349],
  legislacao: [295, 343], graduacao: [285, 360], campo: [292, 344]
};
const ROBO_ALT = {
  principal: 'Robô Aprovaê+ fazendo sinal de positivo', joinha: 'Robô Aprovaê+ fazendo sinal de positivo',
  estudando: 'Robô Aprovaê+ lendo um livro', notebook: 'Robô Aprovaê+ estudando no notebook',
  comemoracao: 'Robô Aprovaê+ comemorando', conquista: 'Robô Aprovaê+ com troféu e medalha',
  duvida: 'Robô Aprovaê+ pensativo', atencao: 'Robô Aprovaê+ com uma ideia importante',
  revisao: 'Robô Aprovaê+ com checklist', planejamento: 'Robô Aprovaê+ mostrando gráfico de evolução',
  sus: 'Robô Aprovaê+ de jaleco e estetoscópio', saquarema: 'Robô Aprovaê+ com roupa de praia e prancha',
  legislacao: 'Robô Aprovaê+ de toga com livro jurídico', graduacao: 'Robô Aprovaê+ de beca',
  campo: 'Robô Aprovaê+ de colete com prancheta'
};
/** Robô (imagem parada) na altura pedida (px). pose: chave de ROBO. opts: { decorative, eager, cls } */
function mascot(size = 96, pose = 'principal', opts = {}) {
  if (!ROBO[pose]) pose = 'principal';
  const [w, h] = ROBO[pose];
  const W = Math.round(size * w / h);
  const cls = ('robo ' + (opts.cls || '')).trim();
  const alt = opts.decorative ? '' : ROBO_ALT[pose];
  return `<picture class="${cls}" style="--rw:${W}px;--rh:${size}px"><source srcset="assets/mascote/robo-${pose}.webp?v=3" type="image/webp"><img src="assets/mascote/robo-${pose}.png?v=3" width="${W}" height="${size}" alt="${alt}" ${opts.eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" draggable="false"></picture>`;
}
const speech = html => `<div class="speech">${html}</div>`;

/* ------------------------------ SOM ------------------------------ */
let AC = null;
function beep(ok) {
  if (!S || !S.sound) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    (ok ? [523, 784] : [262, 196]).forEach((f, i) => {
      const o = AC.createOscillator(), g = AC.createGain(), t0 = AC.currentTime + i * 0.1;
      o.type = ok ? 'sine' : 'triangle'; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.16, t0 + 0.015); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.18);
      o.connect(g); g.connect(AC.destination); o.start(t0); o.stop(t0 + 0.2);
    });
  } catch (e) {}
}
function confetti() {
  const colors = ['#ffb800', '#0b2a5b', '#58cc02', '#2f80ed', '#ff6b81', '#8b5cf6'];
  for (let i = 0; i < 70; i++) {
    const s = document.createElement('span'); s.className = 'confetti';
    s.style.left = Math.random() * 100 + 'vw'; s.style.background = colors[i % colors.length];
    s.style.animationDuration = (1.8 + Math.random() * 1.8) + 's'; s.style.animationDelay = (Math.random() * .4) + 's';
    document.body.appendChild(s); setTimeout(() => s.remove(), 4300);
  }
}

/* ------------------------------ ROTAS ------------------------------ */
// #inicio  •  #<produto> (lista)  •  #<id-do-concurso>
let R = 'inicio';
function readRoute() {
  const h = (location.hash || '').replace('#', '');
  R = PRODUCTS.some(p => p.ativo && p.id === h) ? 'list:' + h : CURSOS_G[h] ? 'curso:' + h : CONCURSOS[h] ? h : 'inicio';
}
function go(h) { if (location.hash === '#' + h) { readRoute(); render(); } else location.hash = h; window.scrollTo(0, 0); }

/* ------------------------------ ESTADO DO CONCURSO ------------------------------ */
let K = null;   // concurso ativo
let S = null;   // progresso salvo
let UI = null;  // estado da tela
let FASES = {}, FLASH = [];
const defaultState = () => ({ onb: false, cargo: null, goal: 50, xp: 0, streak: 0, lastDay: null, day: { d: null, xp: 0 }, done: {}, stats: {}, errors: {}, cards: {}, medals: {}, sound: true });
const keyOf = id => 'aprovae:v2:' + id;
function openConcurso(id) {
  if (K && K.id === id) return;
  K = CONCURSOS[id];
  S = Object.assign(defaultState(), store.get(keyOf(id)) || {});
  S.medals = S.medals || {}; S.drafts = S.drafts || {};
  Object.keys(K.areas).forEach(k => { S.stats[k] = S.stats[k] || { r: 0, t: 0 }; });
  if (Object.keys(K.cargos).length === 1 && !S.cargo) S.cargo = Object.keys(K.cargos)[0];
  const away = S.lastDay ? daysBetween(S.lastDay, todayStr()) : null;
  UI = { away, welcome: true, tab: 'home', screen: 'tabs', onbStep: 0, sheet: null, fc: { filter: 'todas', idx: 0, only: false }, topicFilter: 'todas', scrollToCurrent: true };
  FASES = {}; K.units.forEach(u => u.fases.forEach(f => { FASES[f.id] = { f, u }; }));
  FLASH = K.flashcards.map(([fid, front, back], i) => ({ id: fid + '~' + i, fid, front, back }));
}
const save = () => store.set(keyOf(K.id), S);

const visibleFases = u => u.fases.filter(f => !f.cargo || f.cargo === S.cargo);
const nodesOf = u => [...visibleFases(u).map(f => ({ id: f.id, f })), { id: 'boss-' + u.id, boss: true }];
const isDone = id => !!S.done[id];
const isUnlocked = (u, i) => i === 0 || isDone(nodesOf(u)[i - 1].id);
const allNodes = () => K.units.flatMap(nodesOf);
const streakNow = () => (S.lastDay === todayStr() || S.lastDay === yesterdayStr()) ? S.streak : 0;
const dayXP = () => S.day.d === todayStr() ? S.day.xp : 0;
const level = () => Math.floor(S.xp / 120) + 1;
const totalStars = () => Object.values(S.done).reduce((t, v) => t + (v.stars || 0), 0);
const visibleCards = () => FLASH.filter(c => FASES[c.fid] && (!FASES[c.fid].f.cargo || FASES[c.fid].f.cargo === S.cargo));
const fcKnown = () => visibleCards().filter(c => S.cards[c.id] === 'known').length;
const getQ = key => { const [fid, qi] = key.split('#'); const e = FASES[fid]; return e && e.f.quiz[+qi] ? { ...e.f.quiz[+qi], fase: e.f, unit: e.u } : null; };
const cargo = () => K.cargos[S.cargo] || Object.values(K.cargos)[0];
const singleCargo = () => Object.keys(K.cargos).length === 1;
const turnoTxt = () => cargo().turnoTxt || ('Turno da ' + cargo().turno);
const provaTxt = () => K.prova ? 'Prova em ' + fmtDate(K.prova) : 'Prova: ' + (K.provaTexto || 'data a definir');
const cdNum = () => { const d = daysTo(K.prova); return d === null ? '<div class="cd-num tbd"><b>?</b><small>DATA</small></div>' : `<div class="cd-num"><b>${d}</b><small>DIAS</small></div>`; };
const LX = () => K.aulaLabel ? { n: 'aula', N: 'Aula', cards: 'slides da aula' } : { n: 'lição', N: 'Lição', cards: 'cartões de lição' };
const backRoute = () => K.curso || productOf(K).id;
const guiaNome = () => (K.guia && K.guia.nav) || 'Edital';

function addXP(n) {
  const t = todayStr();
  if (S.day.d !== t) S.day = { d: t, xp: 0 };
  const before = S.day.xp;
  S.day.xp += n; S.xp += n;
  if (S.lastDay !== t) { S.streak = (S.lastDay === yesterdayStr()) ? S.streak + 1 : 1; S.lastDay = t; }
  save();
  return before < S.goal && S.day.xp >= S.goal;
}
function projection() {
  if (K.scoring === 'areas') {
    const meta = K.metaAcerto || 0.7;
    const rows = Object.entries(K.areas).map(([k, a]) => { const s = S.stats[k] || { r: 0, t: 0 }; return { k, a, s, acc: s.t ? s.r / s.t : null }; });
    return { mode: 'areas', rows, meta, hit: rows.filter(r => r.acc !== null && r.acc >= meta).length };
  }
  const rows = Object.entries(K.areas).map(([k, a]) => { const s = S.stats[k] || { r: 0, t: 0 }; const acc = s.t ? s.r / s.t : null; return { k, a, s, acc, proj: acc === null ? null : acc * a.max }; });
  const ready = rows.every(r => r.acc !== null);
  const proj = ready ? Math.round(rows.reduce((t, r) => t + r.proj, 0)) : null;
  return { mode: 'weighted', rows, proj, pass: proj !== null && proj >= K.corte && rows.every(r => r.s.r > 0) };
}

/* =====================================================================
   RENDER
   ===================================================================== */
function render() {
  readRoute();
  $layer.innerHTML = '';
  document.body.className = '';
  if (R === 'inicio') return renderLanding();
  if (R.startsWith('list:')) return R === 'list:graduacao' ? renderCursos() : renderLista(R.slice(5));
  if (R.startsWith('curso:')) return renderCurso(R.slice(6));
  openConcurso(R);
  document.title = 'Aprovaê+Concursos — ' + K.nome;
  if (!S.onb) return renderOnb();
  if (UI.screen === 'lesson') return renderLesson();
  if (UI.screen === 'quiz') return renderQuiz();
  if (UI.screen === 'result') return renderResult();
  if (UI.screen === 'fail') return renderFail();
  renderShell();
}

/* ---------- LANDING ---------- */
function renderLanding() {
  document.title = 'Aprovaê — Plataforma de aprendizagem';
  document.body.className = 'page-landing';
  const cards = PRODUCTS.map(p => `
    <${p.ativo ? `button onclick="AP.go('${p.id}')"` : 'div aria-disabled="true"'} class="product ${p.ativo ? 'is-on' : 'is-off'}">
      <span class="product-robo" aria-hidden="true">${mascot(p.ativo ? 132 : 92, p.robo, { decorative: true, enter: false })}</span>
      <span class="product-ico">${p.ico}</span>
      <span class="product-name">Aprova<b>ê</b><i>+</i><wbr>${p.nome}</span>
      <span class="product-desc">${p.desc}</span>
      ${p.ativo ? '<span class="product-cta">Entrar <span aria-hidden="true">›</span></span>' : '<span class="soon">Em breve</span>'}
    </${p.ativo ? 'button' : 'div'}>`).join('');
  $app.innerHTML = `
  <div class="landing">
    <header class="land-hero">
      <img class="land-logo" src="assets/img/logo-aprovae.webp?v=2" alt="Aprovaê — Plataforma de aprendizagem" width="1200" height="361">
      <div class="land-hero-row">
        <div class="land-copy">
          <h1>Aprenda de verdade,<br><span>uma fase por vez.</span></h1>
          <p>Lições curtas antes de cada quiz, questões no estilo da banca, flashcards e revisão dos seus erros. Tudo para você chegar confiante no dia da prova.</p>
        </div>
        <div class="land-lumi">${mascot(190, 'principal', { eager: true })}${speech('Escolha por onde começar! 👇')}</div>
      </div>
    </header>
    <section class="land-products" aria-label="Escolha sua trilha">${cards}</section>
    <section class="premium" aria-labelledby="premium-title">
      <div class="premium-head">
        ${mascot(110, 'conquista', { decorative: true })}
        <div><small class="eyebrow">APROVAÊ+ PREMIUM</small><h2 id="premium-title">Seja premium e tenha acesso a muito aprendizado</h2></div>
      </div>
      <div class="plans">${PLANS.map(pl => {
        const cheio = 15 * pl.meses; const eco = pl.meses > 1 ? Math.round((1 - pl.preco / cheio) * 100) : 0;
        const sub = pl.meses === 0 ? 'pagamento único • acesso para sempre' : pl.meses === 1 ? 'por mês' : `${brl(pl.preco / pl.meses)} por mês`;
        return `<div class="plan ${pl.destaque ? 'hot' : ''}">
          ${pl.destaque ? `<span class="plan-flag">${pl.destaque}</span>` : ''}
          <b class="plan-name">${pl.nome}</b>
          <span class="plan-price">${brl(pl.preco)}</span>
          <small class="plan-sub">${sub}</small>
          ${eco ? `<span class="plan-eco">economize ${eco}%</span>` : '<span class="plan-eco ghost">&nbsp;</span>'}
          <button class="btn ${pl.destaque ? 'btn-gold' : 'btn-navy'}" onclick="AP.buy('${pl.id}')">Comprar</button>
        </div>`; }).join('')}</div>
    </section>
    <section class="land-how">
      <div class="how"><span>📖</span><b>Aprenda</b><p>Uma lição curta e direta abre cada fase.</p></div>
      <div class="how"><span>🎯</span><b>Pratique</b><p>Questões originais no estilo da banca, com explicação.</p></div>
      <div class="how"><span>🧠</span><b>Revise</b><p>Seus erros voltam até você dominar o assunto.</p></div>
    </section>
    <footer class="land-foot">${wordmark()} · Plataforma de aprendizagem</footer>
  </div>`;
}

/* ---------- LISTA (concursos, edições do Encceja...) ---------- */
function renderLista(pid) {
  const prod = PRODUCTS.find(p => p.id === pid);
  document.title = 'Aprovaê+' + prod.nome;
  document.body.className = 'page-landing';
  const list = Object.values(CONCURSOS).filter(c => (c.produto || 'concursos') === pid).map(c => {
    const saved = store.get(keyOf(c.id));
    const started = saved && saved.onb;
    const d = daysTo(c.prova);
    return `<article class="contest">
      <div class="contest-robo">${mascot(110, c.mascot || 'notebook', { decorative: true })}</div>
      <div class="contest-top"><span class="tag tag-navy">${c.banca}</span>${c.vagas ? `<span class="tag tag-gold">${plural(c.vagas, 'vaga', 'vagas')}</span>` : ''}${d ? `<span class="tag tag-red">faltam ${d} dias</span>` : ''}</div>
      <h2>${c.nome}</h2>
      <p class="contest-sub">${c.cargoGrupo}</p>
      <ul class="contest-meta"><li>📄 ${c.edital}</li><li>📅 ${c.prova ? 'Prova em ' + fmtDate(c.prova) : 'Prova: ' + (c.provaTexto || 'data a definir')}</li>${c.salario ? `<li>💰 ${c.salario}</li>` : ''}</ul>
      ${started ? `<div class="contest-prog"><span>Seu progresso: ${saved.xp || 0} XP • ${Object.keys(saved.done || {}).length} fases</span></div>` : ''}
      <button class="btn btn-green" onclick="AP.go('${c.id}')">${started ? 'Continuar estudando' : 'Começar a estudar'}</button>
    </article>`;
  }).join('');
  $app.innerHTML = `
  <div class="landing">
    <header class="sub-head">
      <a href="#inicio" class="back-link" aria-label="Voltar para o início">‹</a>
      <a href="#inicio"><img src="assets/img/logo-aprovae.webp?v=2" alt="Aprovaê" class="sub-logo" width="180" height="54"></a>
    </header>
    <div class="sub-title"><h1>${wordmark(prod.nome)}</h1><p>${prod.listaSub}</p></div>
    <section class="contests">${list}
      <div class="contest contest-soon">${mascot(84, 'planejamento')}<div><b>${prod.listaBreve[0]}</b><p>${prod.listaBreve[1]}</p></div></div>
    </section>
  </div>`;
}

/* ---------- GRADUAÇÃO: cursos e períodos ---------- */
const subHead = back => `<header class="sub-head">
      <a href="#${back}" class="back-link" aria-label="Voltar">‹</a>
      <a href="#inicio"><img src="assets/img/logo-aprovae.webp?v=2" alt="Aprovaê" class="sub-logo" width="180" height="54"></a>
    </header>`;
function trailProgress(id) {
  const c = CONCURSOS[id]; const saved = store.get(keyOf(id));
  if (!c) return null;
  const total = c.units.reduce((t, u) => t + u.fases.length + 1, 0);
  const done = saved && saved.done ? Object.keys(saved.done).length : 0;
  return { started: !!(saved && saved.onb), pct: Math.round(done / total * 100), xp: (saved && saved.xp) || 0 };
}
function renderCursos() {
  document.title = 'Aprovaê+Graduação';
  document.body.className = 'page-landing';
  const list = Object.values(CURSOS_G).map(c => {
    const disp = Object.keys(c.periodos).length;
    return `<article class="contest">
      <div class="contest-robo">${mascot(110, c.mascot || 'notebook', { decorative: true })}</div>
      <div class="contest-top"><span class="tag tag-navy">Graduação</span><span class="tag tag-gold">${c.totalPeriodos} períodos</span></div>
      <h2>${c.ico} ${c.nome}</h2>
      <p class="contest-sub">${c.desc}</p>
      <ul class="contest-meta"><li>📚 ${plural(disp, 'período disponível', 'períodos disponíveis')}</li><li>🧩 Uma unidade para cada disciplina</li></ul>
      <button class="btn btn-green" onclick="AP.go('${c.id}')">Ver períodos</button>
    </article>`;
  }).join('');
  $app.innerHTML = `<div class="landing">${subHead('inicio')}
    <div class="sub-title"><h1>${wordmark('Graduação')}</h1><p>Escolha o seu curso.</p></div>
    <section class="contests">${list}
      <div class="contest contest-soon">${mascot(84, 'graduacao')}<div><b>Novos cursos em breve</b><p>Estamos montando as trilhas de outros cursos de graduação.</p></div></div>
    </section></div>`;
}
function renderCurso(id) {
  const c = CURSOS_G[id];
  document.title = 'Aprovaê+Graduação — ' + c.nome;
  document.body.className = 'page-landing';
  const tiles = Array.from({ length: c.totalPeriodos }, (_, i) => {
    const n = i + 1; const tid = c.periodos[n]; const k = tid && CONCURSOS[tid];
    if (!k) return `<div class="period off" aria-disabled="true"><b>${n}º</b><small>período</small><span class="soon">Em breve</span></div>`;
    const pr = trailProgress(tid);
    return `<button class="period on" onclick="AP.go('${tid}')"><b>${n}º</b><small>período</small>
      <span class="period-info">${plural(k.units.length, 'disciplina', 'disciplinas')}</span>
      <span class="period-bar"><i style="width:${pr.pct}%"></i></span><span class="period-cta">${pr.started ? `Continuar • ${pr.pct}%` : 'Começar'}</span></button>`;
  }).join('');
  const avail = Object.keys(c.periodos).map(Number).sort((a, b) => a - b).map(n => [n, CONCURSOS[c.periodos[n]]]).filter(([, k]) => k);
  $app.innerHTML = `<div class="landing">${subHead('graduacao')}
    <div class="sub-title with-robo"><div><h1>${c.ico} ${c.nome}</h1><p>Escolha o período. Vamos liberando os próximos aos poucos.</p></div>${mascot(110, c.mascot || 'notebook', { decorative: true })}</div>
    <section class="periods">${tiles}</section>
    ${avail.map(([n, k]) => `<div class="card period-subjects"><small class="eyebrow">DISCIPLINAS DO ${n}º PERÍODO</small><div class="subj-list">${k.units.map(u => `<span style="--c:${u.c}">${u.emoji} ${u.title}</span>`).join('')}</div></div>`).join('')}
  </div>`;
}

/* ---------- ONBOARDING ---------- */
function renderOnb() {
  document.body.className = 'page-focus';
  const s = UI.onbStep;
  let body = '', btn = '';
  if (s === 0) {
    body = `<div class="onb-center fade">
      ${mascot(180, 'principal', { eager: true })}
      <h1>Oi! Eu sou o <span class="c-gold">Lumi</span>.</h1>
      <p>Vou acender as ideias certas até a sua aprovação em <b>${K.nome}</b>. Primeiro você aprende, depois pratica.</p>
      <div class="onb-feats"><div><span>📖</span>${K.aulaLabel ? 'Aula curta' : 'Lição curta'}</div><div><span>🎯</span>${K.semProva ? 'Exercícios' : 'Quiz da banca'}</div><div><span>🃏</span>Flashcards</div></div>
    </div>`;
    btn = `<button class="btn btn-green" onclick="AP.onb(1)">Começar</button>`;
  } else if (s === 1) {
    const opts = Object.entries(K.cargos).map(([id, c]) => `<button onclick="AP.setCargo('${id}')" class="opt big ${S.cargo === id ? 'sel' : ''}">
      <span class="opt-emoji">${c.emoji}</span><span class="opt-main"><b>${c.nome}</b><small>${c.desc}</small></span><span class="opt-side">${c.vagas} vagas</span></button>`).join('');
    body = `<div class="onb-pad fade">
      <div class="lumi-say">${mascot(84, 'notebook')}${speech('Para qual cargo você vai fazer a prova?')}</div>
      <div class="info-pill">🏛️ <span><small>${productOf(K).rotulo || 'CONCURSO'}</small><b>${K.nome} • ${K.edital}</b></span></div>
      <div class="stack">${opts}</div>
      ${K.onbNota ? `<p class="muted small">${K.onbNota}</p>` : ''}
    </div>`;
    btn = `<button class="btn btn-green" ${S.cargo ? '' : 'disabled'} onclick="AP.onb(2)">Continuar</button>`;
  } else {
    const g = (v, t, d) => `<button onclick="AP.setGoal(${v})" class="opt big ${S.goal === v ? 'sel' : ''}"><span class="opt-main"><b>${t}</b><small>${d}</small></span><span class="opt-side">${v} XP/dia</span></button>`;
    body = `<div class="onb-pad fade">
      <div class="lumi-say">${mascot(84, 'planejamento')}${speech(K.prova ? `Faltam <b class="c-red">${daysTo(K.prova)} dias</b> para a prova. Qual vai ser seu ritmo?` : 'Qual vai ser o seu ritmo de estudo?')}</div>
      <div class="stack">${g(30, 'Leve', '≈ 1 fase por dia')}${g(50, 'Firme', '≈ 2 fases por dia')}${g(100, 'Intenso', '≈ 4 fases por dia')}</div>
      <div class="note">💡 No ritmo <b>Firme</b>, você termina a trilha com folga e usa o resto do tempo para revisar seus erros.</div>
    </div>`;
    btn = `<button class="btn btn-green" onclick="AP.finishOnb()">Ir para a trilha</button>`;
  }
  $app.innerHTML = `<div class="focus">
    <div class="focus-top"><div class="focus-top-in">
      ${s > 0 ? `<button class="x-btn" onclick="AP.onb(${s - 1})" aria-label="Voltar">‹</button>` : `<button class="x-btn" onclick="AP.go('${backRoute()}')" aria-label="Voltar">‹</button>`}
      <div class="bar"><i style="width:${singleCargo() ? (s === 0 ? 50 : 100) : (s + 1) / 3 * 100}%"></i></div>
    </div></div>
    <div class="focus-body">${body}</div>
    <div class="focus-foot"><div class="focus-foot-in"><span class="foot-spacer"></span>${btn}</div></div>
  </div>`;
}

/* ---------- SHELL (sidebar, topo, navegação) ---------- */
const NAV = [
  ['home', '🗺️', 'Trilha'], ['topics', '📚', 'Tópicos'], ['cards', '🃏', 'Flashcards'], ['rev', '🧠', 'Revisão'], ['prog', '📈', 'Você']
];
function statChips() {
  const st = streakNow(); const pct = Math.min(100, Math.round(dayXP() / S.goal * 100));
  return `<span class="stat ${st ? 'c-orange' : 'c-faint'}" title="Dias seguidos">🔥 ${st}</span>
    <span class="stat c-blue" title="XP total">⚡ ${S.xp}</span>
    <span class="stat c-gold" title="Meta do dia"><svg width="24" height="24" viewBox="0 0 36 36"><circle cx="18" cy="18" r="15" fill="none" stroke="#e5e7eb" stroke-width="5"/><circle cx="18" cy="18" r="15" fill="none" stroke="#ffb800" stroke-width="5" stroke-linecap="round" stroke-dasharray="${pct * 0.942} 100" transform="rotate(-90 18 18)"/></svg>${dayXP()}/${S.goal}</span>`;
}
function renderShell() {
  document.body.className = 'page-app';
  const errs = Object.keys(S.errors).length;
  const navItem = (cls) => ([id, ico, label]) => `<button class="${cls} ${UI.tab === id ? 'on' : ''}" onclick="AP.tab('${id}')"><span class="nav-ico">${ico}${id === 'rev' && errs ? `<em>${errs}</em>` : ''}</span><span>${label}</span></button>`;
  const views = { home: viewHome, topics: viewTopics, cards: viewCards, rev: viewReview, prog: viewProgress, edital: viewEdital };
  const v = (views[UI.tab] || viewHome)();
  $app.innerHTML = `<div class="shell">
    <aside class="side">
      <a href="#inicio" class="side-logo"><img src="assets/img/logo-aprovae.webp?v=2" alt="Aprovaê" width="190" height="57"></a>
      <nav class="side-nav">${NAV.map(navItem('side-item')).join('')}
        <button class="side-item ${UI.tab === 'edital' ? 'on' : ''}" onclick="AP.tab('edital')"><span class="nav-ico">📋</span><span>${guiaNome()}</span></button></nav>
      <div class="side-foot">
        <div class="side-contest"><small>SEU ${productOf(K).rotulo || 'CONCURSO'}</small><b>${K.nome}</b><span>${cargo().emoji} ${cargo().curto}</span></div>
        <a href="#${backRoute()}" class="side-link">Trocar de ${(productOf(K).rotulo || 'CONCURSO').toLowerCase()}</a>
      </div>
    </aside>
    <div class="col-main">
      <header class="topbar">
        <a href="#inicio" class="topbar-brand"><img src="assets/img/mark-96.png?v=3" alt="" width="40" height="40">${wordmark()}</a>
        <div class="topbar-stats">${statChips()}</div>
      </header>
      <main class="main" id="main">${v}</main>
    </div>
    <aside class="rail">${railWidgets()}</aside>
    <nav class="bottomnav">${NAV.map(navItem('bn-item')).join('')}</nav>
  </div>`;
  if (UI.sheet) renderSheet();
  if (UI.tab === 'home' && UI.scrollToCurrent) {
    UI.scrollToCurrent = false;
    const el = document.getElementById('cur-node');
    if (el) setTimeout(() => el.scrollIntoView({ block: 'center', behavior: 'instant' in window ? 'instant' : 'auto' }), 30);
  }
}
function railWidgets() {
  const p = projection();
  const an = allNodes(); const tp = an.filter(n => isDone(n.id)).length / an.length * 100;
  const pct = Math.min(100, dayXP() / S.goal * 100);
  const nota = p.mode === 'areas'
    ? `<div class="row-between"><b>Áreas no alvo</b><span class="${p.hit ? 'c-green' : 'c-faint'}"><b>${p.hit} / ${p.rows.length}</b></span></div>
       <div class="area-dots">${p.rows.map(r => `<span title="${r.a.nome}" style="--c:${r.a.cor}" class="${r.acc !== null && r.acc >= p.meta ? 'on' : ''}">${r.a.curto}</span>`).join('')}</div>
       <p class="muted small">Alvo de treino: ${Math.round(p.meta * 100)}% de acertos em cada área.</p>`
    : `<div class="row-between"><b>Nota projetada</b><span class="${p.proj === null ? 'c-faint' : p.pass ? 'c-green' : 'c-orange'}"><b>${p.proj === null ? '—' : p.proj} / ${K.total}</b></span></div>
       <div class="bar-cut"><div class="bar ${p.pass ? '' : 'gold'}"><i style="width:${p.proj === null ? 0 : p.proj / K.total * 100}%"></i></div><span class="cut" style="left:${K.corte / K.total * 100}%"></span></div>
       <p class="muted small">Corte do edital: ${K.corte} pontos.</p>`;
  return `<div class="rail-stats">${statChips()}</div>
    <div class="card">
      ${K.semProva ? `<b>${K.nome}</b>` : `<div class="countdown">${cdNum()}<div><b>${provaTxt()}</b><p class="muted small">${turnoTxt()}</p></div></div>`}
      <div class="bar-row"><div class="bar thin"><i style="width:${tp}%"></i></div><small>${Math.round(tp)}% da trilha</small></div>
    </div>
    <div class="card">
      <div class="row-between"><b>Meta do dia</b><span class="c-gold"><b>${dayXP()}/${S.goal} XP</b></span></div>
      <div class="bar gold"><i style="width:${pct}%"></i></div>
      <p class="muted small">${pct >= 100 ? 'Meta batida! Sequência garantida 🔥' : 'Complete fases para manter sua sequência.'}</p>
    </div>
    <div class="card">${nota}
      <button class="link-btn" onclick="AP.tab('prog')">Ver meu desenvolvimento ›</button>
    </div>
    <div class="card lumi-card">${mascot(70, 'atencao', { decorative: true })}<p>${K.dica || ''}</p></div>`;
}

/* ---------- TRILHA ---------- */
function welcomeCard() {
  if (!UI.welcome) return '';
  const d = daysTo(K.prova); const meta = `${dayXP()}/${S.goal} XP`;
  let pose = 'principal', title, text, cls = '';
  if (!S.xp && !Object.keys(S.done).length) {
    title = 'Bem-vindo(a) ao Aprovaê+!';
    text = K.semProva ? `Eu vou te acompanhar em cada disciplina do período. Comece pela primeira fase da trilha: é rapidinho!` : `Eu vou te acompanhar em cada fase até a prova. Comece pela primeira fase da trilha: é rapidinho!`;
  } else if (UI.away !== null && UI.away >= 2) {
    pose = 'atencao'; cls = 'motivate';
    title = `Que bom te ver de volta! 💛`;
    text = `Faz ${UI.away} dias que você não estuda${S.streak > 1 ? ' e sua sequência zerou' : ''}. ${d !== null ? `Faltam <b>${d} dias</b> para a prova: u` : 'U'}ma fase de 5 minutos já te coloca de volta no ritmo.`;
  } else {
    title = 'Bem-vindo(a) de volta!';
    text = streakNow() ? `Sua sequência está em <b>🔥 ${plural(streakNow(), 'dia', 'dias')}</b>. Meta de hoje: <b>${meta}</b>. Bora continuar?` : `Meta de hoje: <b>${meta}</b>. Uma fase por dia já faz diferença!`;
  }
  return `<div class="welcome ${cls}">${mascot(92, pose, { decorative: true })}
    <div class="welcome-txt"><b>${title}</b><p>${text}</p></div>
    <button class="welcome-x" onclick="AP.closeWelcome()" aria-label="Fechar mensagem">✕</button></div>`;
}
function viewHome() {
  const d = daysTo(K.prova);
  const all = allNodes(); const doneN = all.filter(n => isDone(n.id)).length;
  let firstMarked = false;
  const units = K.units.map((u, ui) => {
    const nodes = nodesOf(u);
    const doneU = nodes.filter(n => isDone(n.id)).length;
    const a = K.areas[u.area];
    const map = window.AprovaeMap.build(u.theme, nodes.length, ui);
    const nodesHtml = nodes.map((n, i) => {
      const unlocked = isUnlocked(u, i), done = isDone(n.id), current = unlocked && !done;
      let bubble = '';
      if (current && !firstMarked) { firstMarked = true; bubble = `<span class="bubble">${doneN === 0 ? 'COMEÇAR' : 'CONTINUAR'}</span>`; }
      const icon = n.boss ? '🏆' : (!unlocked ? '🔒' : done ? '✓' : n.f.ico);
      const st = done ? S.done[n.id].stars : 0;
      const p = map.pts[i];
      return `<div class="node-wrap" style="left:${p.left}%;top:${p.top}%">
        <button ${bubble ? 'id="cur-node"' : ''} onclick="AP.sheet('${u.id}',${i})" class="node ${n.boss ? 'boss' : ''} ${unlocked ? '' : 'locked'} ${done ? 'done' : ''} ${current ? 'current' : ''}" style="--c:${u.c};--cd:${u.cd}" aria-label="${n.boss ? 'Desafio da unidade' : n.f.title}${done ? ', concluída' : unlocked ? '' : ', bloqueada'}">
          ${current ? '<span class="ring"></span>' : ''}${bubble}<span class="node-ico">${icon}</span>
        </button>
        ${done ? `<span class="node-stars">${'★'.repeat(st)}<i>${'★'.repeat(3 - st)}</i></span>` : ''}
        <span class="node-label">${n.boss ? 'Desafio' : n.f.title}</span>
      </div>`;
    }).join('');
    return `<section class="unit">
      <div class="unit-banner" style="--c:${u.c};--cd:${u.cd}">
        <div class="unit-robo">${mascot(104, unitRobo(u), { decorative: true, enter: false })}</div>
        <small>UNIDADE ${ui + 1} • ${a.curto.toUpperCase()} • ${a.pts ? `${a.pts} PT${a.pts > 1 ? 'S' : ''} POR QUESTÃO` : a.banner ? a.banner : u.area === 'red' ? 'NOTA DE 0 A 10' : `${a.q} QUESTÕES NA PROVA`}</small>
        <h2>${u.title}</h2>
        <p>${u.sub}</p>
        <div class="unit-prog"><div class="bar white"><i style="width:${doneU / nodes.length * 100}%"></i></div><b>${doneU}/${nodes.length}</b></div>
      </div>
      <div class="field"><div class="map" style="aspect-ratio:${map.ratio}">${map.svg}${nodesHtml}</div></div>
    </section>`;
  }).join('');
  return `<div class="fade page">
    ${welcomeCard()}
    <div class="trail-head">
      <div><small class="eyebrow">APROVAÊ+${productOf(K).nome.toUpperCase()}</small><h1>${K.nome}</h1><p class="muted">${cargo().nome}</p></div>
      <button class="chip" onclick="AP.tab('edital')">📋 ${guiaNome()}</button>
    </div>
    ${K.semProva ? `<div class="card"><div class="row-between"><b>Progresso do período</b><span class="muted small">${plural(K.units.length, 'disciplina', 'disciplinas')}</span></div>
      <div class="bar-row"><div class="bar thin"><i style="width:${doneN / all.length * 100}%"></i></div><small>${Math.round(doneN / all.length * 100)}% da trilha</small></div></div>` : `<div class="card countdown-card">
      <div class="countdown">${cdNum()}
      <div class="grow"><b>${provaTxt()}</b><p class="muted small">${turnoTxt()}</p>
      <div class="bar-row"><div class="bar thin"><i style="width:${doneN / all.length * 100}%"></i></div><small>${Math.round(doneN / all.length * 100)}% da trilha</small></div></div></div>
    </div>`}
    ${units}
    <div class="trail-end">${mascot(80, 'estudando', { decorative: true })}<p>Quer estudar um assunto fora da ordem? Use a aba <b>Tópicos</b>.</p></div>
  </div>`;
}

function renderSheet() {
  const u = K.units.find(x => x.id === UI.sheet.uid); const n = nodesOf(u)[UI.sheet.i];
  const unlocked = isUnlocked(u, UI.sheet.i), done = isDone(n.id);
  let title, info, btns = '';
  if (n.boss) {
    title = `🏆 Desafio: ${u.title}`;
    info = 'Até 10 questões sorteadas de toda a unidade, sem aula antes. Mostre que domina o bloco!';
    if (unlocked) btns = `<button class="btn btn-gold" onclick="AP.boss('${u.id}')">${done ? 'Desafiar de novo' : 'Aceitar desafio'}</button>`;
  } else {
    const f = n.f;
    title = f.title;
    info = `<b>${f.topic}</b><br>📖 ${f.lesson.length} ${LX().cards} • 🎯 ${f.quiz.length} questões`;
    if (unlocked) btns = done
      ? `<button class="btn btn-green" onclick="AP.lesson('${f.id}')">Rever ${LX().n} e praticar</button><button class="btn btn-ghost" onclick="AP.faseQuiz('${f.id}')">Só o quiz</button>`
      : `<button class="btn btn-green" onclick="AP.lesson('${f.id}')">Começar ${LX().n} · +${10 * f.quiz.length + 10} XP</button>`;
  }
  const lock = unlocked ? '' : `<div class="locked-msg">🔒 Complete ${n.boss ? 'todas as fases desta unidade' : 'a fase anterior'} para liberar. Ou estude este assunto agora pela aba <b>Tópicos</b>.</div>`;
  $layer.innerHTML = `<div class="overlay" onclick="AP.closeSheet()"></div>
    <div class="sheet" role="dialog" aria-modal="true" style="--c:${u.c};--cd:${u.cd}">
      <div class="sheet-grip"></div>
      <small class="sheet-eyebrow">${u.title.toUpperCase()}${done ? ' • ' + '★'.repeat(S.done[n.id].stars) : ''}</small>
      <h3>${title}</h3>
      <p class="muted">${info}</p>
      ${lock}<div class="stack">${btns}</div>
    </div>`;
}

/* ---------- SIMULAÇÕES ---------- */
const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const ELEM = [null, ['H', 'Hidrogênio', 1], ['He', 'Hélio', 4], ['Li', 'Lítio', 7], ['Be', 'Berílio', 9], ['B', 'Boro', 11], ['C', 'Carbono', 12], ['N', 'Nitrogênio', 14], ['O', 'Oxigênio', 16], ['F', 'Flúor', 19], ['Ne', 'Neônio', 20],
  ['Na', 'Sódio', 23], ['Mg', 'Magnésio', 24], ['Al', 'Alumínio', 27], ['Si', 'Silício', 28], ['P', 'Fósforo', 31], ['S', 'Enxofre', 32], ['Cl', 'Cloro', 35], ['Ar', 'Argônio', 40], ['K', 'Potássio', 39], ['Ca', 'Cálcio', 40]];
const BIT_GOALS = [5, 42, 100, 200, 255];
const GATES = { E: (a, b) => a && b, OU: (a, b) => a || b, NAO: a => !a, XOU: (a, b) => a !== b };
const GATE_NOME = { E: 'E (AND)', OU: 'OU (OR)', NAO: 'NÃO (NOT)', XOU: 'XOU (XOR)' };
function sortSteps(card) {
  if (card._st) return card._st;
  const a = [...card.arr]; const n = a.length; const out = [{ a: [...a], j: -1, done: n, note: 'Bubble sort: compara vizinhos e leva o maior para o fim.' }];
  let cmp = 0, sw = 0;
  for (let p = 0; p < n - 1; p++) {
    for (let j = 0; j < n - 1 - p; j++) {
      const x = a[j], y = a[j + 1]; const t = x > y; cmp++;
      if (t) { a[j] = y; a[j + 1] = x; sw++; }
      out.push({ a: [...a], j, swap: t, done: j === n - 2 - p ? n - 1 - p : n - p, note: t ? `${x} > ${y}: troca!` : `${x} ≤ ${y}: mantém.` });
    }
  }
  out.push({ a: [...a], j: -1, done: 0, note: `Ordenado! ${cmp} comparações e ${sw} trocas.` });
  return (card._st = out);
}
function buscaSteps(arr, alvo) {
  const out = [{ lo: 0, hi: arr.length - 1, mid: -1, note: `Procurando ${alvo}. O vetor está ordenado, então podemos descartar metades.` }];
  let lo = 0, hi = arr.length - 1, k = 0;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2); k++;
    if (arr[mid] === alvo) { out.push({ lo, hi, mid, found: true, k, note: `Meio = posição ${mid} (${arr[mid]}). Encontrado em ${k} ${k === 1 ? 'comparação' : 'comparações'}!` }); return out; }
    const maior = alvo > arr[mid];
    out.push({ lo, hi, mid, k, note: `Meio = posição ${mid} (${arr[mid]}). ${alvo} é ${maior ? 'maior' : 'menor'}: descarta a metade ${maior ? 'esquerda' : 'direita'}.` });
    if (maior) lo = mid + 1; else hi = mid - 1;
  }
  out.push({ lo, hi, mid: -1, none: true, k, note: `Não sobrou ninguém: ${alvo} não está no vetor. Foram ${k} comparações.` });
  return out;
}
function stepsOf(card, st) {
  if (card.kind === 'sort') return sortSteps(card);
  if (card.kind === 'busca') { const alvo = card.alvos[(st.t || 0) % card.alvos.length]; if (st._alvo !== alvo) { st._alvo = alvo; st._s = buscaSteps(card.arr, alvo); } return st._s; }
  return card.steps || [];
}
const ctrl = (st, n) => `<div class="sim-ctrl"><button class="chip" ${st.p ? '' : 'disabled'} onclick="AP.sim('prev')">‹ Voltar</button><b class="muted small">Passo ${st.p + 1} de ${n}</b>
  ${st.p < n - 1 ? '<button class="chip on" onclick="AP.sim(\'next\')">Próximo ›</button>' : '<button class="chip" onclick="AP.sim(\'reset\')">↺ Reiniciar</button>'}</div>`;
const HTML_BASE = '<style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;margin:12px;color:#0f172a;line-height:1.4}</style>';
function simHtml(card, st) {
  if (card.kind === 'classify') {
    st.q = st.q || 0; st.ok = st.ok || 0; const n = card.items.length;
    if (st.q >= n) return `<div class="classify"><div class="cls-end">${st.ok === n ? '🏆' : '👏'} Você acertou <b>${st.ok} de ${n}</b>.</div><div class="sim-ctrl"><span></span><button class="chip on" onclick="AP.sim('creset')">↺ Fazer de novo</button></div></div>`;
    const [txt, ans, why] = card.items[st.q]; const picked = st.pick != null;
    return `<div class="classify">
      ${card.intro ? `<p class="cls-intro">${card.intro}</p>` : ''}
      <div class="cls-item"><small>${st.q + 1} de ${n}</small><b>${txt}</b></div>
      <div class="cls-btns ${card.cats.length > 2 ? 'four' : ''}">${card.cats.map((c, k) => `<button class="chip ${picked ? (k === ans ? 'right' : k === st.pick ? 'wrong' : '') : ''}" ${picked ? 'disabled' : ''} onclick="AP.sim('pick', ${k})">${c}</button>`).join('')}</div>
      ${picked ? `<div class="cls-fb ${st.pick === ans ? 'ok' : 'no'}"><b>${st.pick === ans ? '✅ Isso!' : '❌ Quase.'}</b> ${why}</div>
        <div class="sim-ctrl"><b class="muted small">Acertos: ${st.ok}</b><button class="chip on" onclick="AP.sim('cnext')">${st.q < n - 1 ? 'Próximo ›' : 'Ver resultado'}</button></div>` : ''}
    </div>`;
  }
  if (card.kind === 'html') {
    if (st.code == null) st.code = card.code;
    setTimeout(() => AP.htmlRun(), 0);
    return `<div class="htmlsim">
      <div class="hs-pane"><small>✏️ CÓDIGO</small><textarea id="hsCode" spellcheck="false" autocapitalize="off" autocomplete="off" oninput="AP.htmlRun(this.value)">${esc(st.code)}</textarea></div>
      <div class="hs-pane"><small>👀 RESULTADO</small><iframe id="hsOut" title="Resultado do código" sandbox="allow-scripts"></iframe></div>
      ${card.dica ? `<p class="trace-note">💡 ${esc(card.dica)}</p>` : ''}
      <div class="sim-ctrl"><span></span><button class="chip" onclick="AP.sim('hreset')">↺ Restaurar código</button></div>
    </div>`;
  }
  if (card.kind === 'sort') {
    const steps = sortSteps(card); st.p = Math.min(st.p || 0, steps.length - 1); const s = steps[st.p]; const mx = Math.max(...card.arr);
    return `<div class="sortsim">
      <div class="bars">${s.a.map((v, i) => `<div class="barc ${i === s.j || i === s.j + 1 ? (s.swap ? 'is-swap' : 'is-cmp') : ''} ${i >= s.done ? 'is-fin' : ''}"><i style="height:${Math.round(v / mx * 100)}%"></i><b>${v}</b></div>`).join('')}</div>
      <p class="trace-note">💬 ${s.note}</p>
      <div class="sort-leg"><span class="lg lg-cmp">comparando</span><span class="lg lg-swap">trocou</span><span class="lg lg-fin">no lugar certo</span></div>
      ${ctrl(st, steps.length)}
    </div>`;
  }
  if (card.kind === 'busca') {
    const steps = stepsOf(card, st); st.p = Math.min(st.p || 0, steps.length - 1); const s = steps[st.p];
    const idx = card.arr.indexOf(st._alvo); const lin = idx >= 0 ? idx + 1 : card.arr.length;
    return `<div class="buscasim">
      <div class="bs-top"><span>🎯 Alvo: <b>${st._alvo}</b></span><button class="chip" onclick="AP.sim('alvo')">Outro alvo</button></div>
      <div class="cells">${card.arr.map((v, i) => `<div class="cell ${i < s.lo || i > s.hi ? 'out' : ''} ${i === s.mid ? (s.found ? 'found' : 'mid') : ''}"><b>${v}</b><small>${i}</small></div>`).join('')}</div>
      <p class="trace-note">💬 ${s.note}</p>
      ${st.p === steps.length - 1 ? `<p class="muted small">A busca linear precisaria de <b>${lin}</b> ${lin === 1 ? 'comparação' : 'comparações'} para chegar ao mesmo resultado.</p>` : ''}
      ${ctrl(st, steps.length)}
    </div>`;
  }
  if (card.kind === 'trace') {
    st.p = st.p || 0; const step = card.steps[st.p];
    let out = ''; for (let i = 0; i <= st.p; i++) if (card.steps[i].out != null) out = card.steps[i].out;
    const vars = Object.entries(step.v || {});
    return `<div class="trace">
      <pre class="code trace-code">${card.code.map((ln, i) => `<span class="ln ${i === step.l ? 'cur' : ''}"><i>${i + 1}</i>${esc(ln) || ' '}</span>`).join('')}</pre>
      <div class="trace-side">
        <div class="vars"><small>VARIÁVEIS</small>${vars.length ? `<table>${vars.map(([k, v]) => `<tr><td>${esc(k)}</td><td><b>${esc(v)}</b></td></tr>`).join('')}</table>` : '<p class="muted small">—</p>'}</div>
        <div class="console"><small>SAÍDA</small><code>${out ? esc(out) : '&nbsp;'}</code></div>
      </div>
      <p class="trace-note">💬 ${step.note || ''}</p>
      <div class="sim-ctrl"><button class="chip" ${st.p ? '' : 'disabled'} onclick="AP.sim('prev')">‹ Voltar</button><b class="muted small">Passo ${st.p + 1} de ${card.steps.length}</b>
        ${st.p < card.steps.length - 1 ? '<button class="chip on" onclick="AP.sim(\'next\')">Próximo ›</button>' : '<button class="chip" onclick="AP.sim(\'reset\')">↺ Reiniciar</button>'}</div>
    </div>`;
  }
  if (card.kind === 'bits') {
    st.v = st.v || 0; st.g = st.g || 0; const goal = BIT_GOALS[st.g % BIT_GOALS.length];
    const bits = [128, 64, 32, 16, 8, 4, 2, 1];
    return `<div class="bits">
      <div class="bit-row">${bits.map(w => { const on = (st.v & w) !== 0; return `<button class="bit ${on ? 'on' : ''}" onclick="AP.sim('bit', ${w})" aria-pressed="${on}"><b>${on ? 1 : 0}</b><small>${w}</small></button>`; }).join('')}</div>
      <div class="bit-out"><div><small>DECIMAL</small><b>${st.v}</b></div><div><small>BINÁRIO</small><b>${st.v.toString(2).padStart(8, '0')}</b></div><div><small>HEXA</small><b>${st.v.toString(16).toUpperCase().padStart(2, '0')}</b></div></div>
      <div class="bit-goal ${st.v === goal ? 'ok' : ''}"><span>${st.v === goal ? `✅ Isso! ${goal} em binário é ${goal.toString(2)}.` : `🎯 Desafio: ligue os bits para formar o número <b>${goal}</b>.`}</span>
        <button class="chip" onclick="AP.sim('goal')">Outro desafio</button></div>
    </div>`;
  }
  if (card.kind === 'gate') {
    st.g = st.g || 'E'; st.a = !!st.a; st.b = !!st.b;
    const f = GATES[st.g]; const un = st.g === 'NAO'; const out = un ? f(st.a) : f(st.a, st.b);
    const rows = un ? [[0], [1]] : [[0, 0], [0, 1], [1, 0], [1, 1]];
    const cur = un ? [+st.a] : [+st.a, +st.b];
    return `<div class="gate">
      <div class="chips gate-tabs">${Object.keys(GATES).map(g => `<button class="chip ${st.g === g ? 'on' : ''}" onclick="AP.sim('gate', '${g}')">${GATE_NOME[g]}</button>`).join('')}</div>
      <div class="gate-board">
        <div class="gate-in"><button class="sw ${st.a ? 'on' : ''}" onclick="AP.sim('a')">A = ${+st.a}</button>${un ? '' : `<button class="sw ${st.b ? 'on' : ''}" onclick="AP.sim('b')">B = ${+st.b}</button>`}</div>
        <div class="gate-box">${GATE_NOME[st.g].split(' ')[0]}</div>
        <div class="lamp ${out ? 'on' : ''}"><span>💡</span><b>Saída = ${+out}</b></div>
      </div>
      <table class="truth"><tr>${un ? '<th>A</th>' : '<th>A</th><th>B</th>'}<th>Saída</th></tr>
        ${rows.map(r => `<tr class="${r.join() === cur.join() ? 'cur' : ''}">${r.map(x => `<td>${x}</td>`).join('')}<td><b>${+(un ? f(!!r[0]) : f(!!r[0], !!r[1]))}</b></td></tr>`).join('')}</table>
    </div>`;
  }
  if (card.kind === 'atomo') {
    if (st.z == null) { st.z = 6; st.n = 6; st.e = 6; }
    const [sym, nome, aComum] = ELEM[st.z]; const A = st.z + st.n; const carga = st.z - st.e;
    const ion = carga === 0 ? 'Átomo neutro' : carga > 0 ? `Cátion (carga +${carga})` : `Ânion (carga ${carga})`;
    const shells = [2, 8, 8, 8]; let left = st.e; const orb = [];
    shells.forEach((cap, i) => { const k = Math.min(cap, left); left -= k; if (k > 0) orb.push([i, k]); });
    const svg = `<svg viewBox="-110 -110 220 220" class="atom-svg" aria-hidden="true">${orb.map(([i]) => `<circle r="${42 + i * 22}" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 5"/>`).join('')}
      <circle r="24" fill="#fde68a" stroke="#f59e0b" stroke-width="2"/><text y="-2" text-anchor="middle" font-size="10" font-weight="900" fill="#92400e">${st.z}p⁺</text><text y="11" text-anchor="middle" font-size="10" font-weight="900" fill="#475569">${st.n}n</text>
      ${orb.map(([i, k]) => Array.from({ length: k }, (_, j) => { const ang = j / k * Math.PI * 2 + i; const r = 42 + i * 22; return `<circle cx="${(Math.cos(ang) * r).toFixed(1)}" cy="${(Math.sin(ang) * r).toFixed(1)}" r="5" fill="#2f80ed"/>`; }).join('')).join('')}</svg>`;
    const ctl = (k, label, min, max) => `<div class="ctl"><span>${label}</span><button class="chip" onclick="AP.sim('dec', '${k}')" ${st[k] <= min ? 'disabled' : ''}>−</button><b>${st[k]}</b><button class="chip" onclick="AP.sim('inc', '${k}')" ${st[k] >= max ? 'disabled' : ''}>+</button></div>`;
    return `<div class="atomo">
      <div class="atom-view">${svg}<div class="elem-card"><small>Z = ${st.z}</small><b>${sym}</b><span>${nome}</span><small>A = ${A}</small></div></div>
      <div class="atom-ctl">${ctl('z', 'Prótons', 1, 20)}${ctl('n', 'Nêutrons', 0, 30)}${ctl('e', 'Elétrons', 0, 26)}</div>
      <div class="atom-info"><span class="tag ${carga === 0 ? 'tag-green' : 'tag-gold'}">${ion}</span><span class="tag ${A === aComum ? 'tag-green' : ''}">${A === aComum ? 'Isótopo mais comum' : `Isótopo (o mais comum tem A = ${aComum})`}</span></div>
      <p class="muted small">Mude os prótons e veja o elemento mudar. Mude os elétrons para formar íons e os nêutrons para formar isótopos.</p>
    </div>`;
  }
  if (card.kind === 'calc') {
    const f = (id, label, val, unit) => `<label class="cfield"><span>${label}</span><span class="cinput"><input id="c-${id}" type="number" inputmode="decimal" value="${val}" oninput="AP.calc('${card.calc}')"><em>${unit}</em></span></label>`;
    const fields = {
      velocidade: f('kmh', 'Velocidade', 72, 'km/h'),
      escala: f('des', 'Medida no desenho', 8, 'cm') + f('esc', 'Escala 1 :', 50, ''),
      equilibrio: f('cf', 'Custos fixos (mês)', 6000, 'R$') + f('pr', 'Preço de venda', 50, 'R$') + f('cv', 'Custo variável unitário', 20, 'R$'),
      margem: f('rec', 'Receita do mês', 20000, 'R$') + f('cus', 'Custos + despesas', 15000, 'R$')
    }[card.calc];
    setTimeout(() => AP.calc(card.calc), 0);
    return `<div class="calc"><div class="cfields">${fields}</div><div class="calc-out" id="calcOut"></div></div>`;
  }
  return '';
}
const num = id => { const el = document.getElementById('c-' + id); const v = el ? parseFloat(String(el.value).replace(',', '.')) : NaN; return isNaN(v) ? 0 : v; };
const fmtN = (v, d = 2) => Number(v).toLocaleString('pt-BR', { maximumFractionDigits: d });

/* ---------- LIÇÃO ---------- */
function draftMeta(t) {
  const words = (t.trim().match(/\S+/g) || []).length;
  const lines = t.trim() ? Math.max(t.split('\n').length, Math.ceil(t.length / 62)) : 0;
  const ok = lines >= 20 && lines <= 30;
  return `<span>${plural(words, 'palavra', 'palavras')}</span><span class="${ok ? 'c-green' : lines > 30 ? 'c-red' : ''}">≈ ${lines} linhas manuscritas ${ok ? '✓' : '(meta: 20 a 30)'}</span>`;
}
function renderLesson() {
  document.body.className = 'page-focus';
  const L = UI.lesson; const { f, u } = FASES[L.fid];
  const cards = f.lesson; const total = cards.length + 1;
  const isReady = L.i >= cards.length; const card = cards[L.i];
  let inner = '', canGo = true;
  if (isReady) {
    inner = `<div class="ready pop">
      ${mascot(140, 'atencao')}
      <h2>Pronto para o quiz!</h2><p class="muted">Você acabou de ver:</p>
      <div class="stack">${cards.filter(c => c.t !== 'check').map(c => `<div class="seen" style="--c:${u.c}"><span>✓</span>${c.title}</div>`).join('')}</div>
      <p class="muted small">🎯 ${f.quiz.length} questões • ❤️ 5 vidas • errou, a questão volta no final</p>
    </div>`;
  } else if (card.t === 'concept') {
    inner = `<div class="pop"><div class="lesson-ico">${card.ico}</div><h2 class="lesson-title">${card.title}</h2><div class="card-body" style="--uc:${u.c}">${card.body}</div></div>`;
  } else if (card.t === 'tip') {
    inner = `<div class="pop"><div class="lumi-say">${mascot(88, 'atencao')}${speech('Guarda essa, que cai muito!')}</div>
      <div class="tipbox"><small>💡 ${card.title.toUpperCase()}</small><div class="card-body" style="--uc:#ffb800">${card.body}</div></div></div>`;
  } else if (card.t === 'compare') {
    const col = (h, items, cls) => `<div class="cmp ${cls}"><b>${h}</b><ul>${items.map(it => `<li>${it}</li>`).join('')}</ul></div>`;
    inner = `<div class="pop"><small class="eyebrow">COMPARE</small><h2 class="lesson-title">${card.title}</h2><div class="cmp-grid">${col(card.lh, card.li, 'cmp-a')}${col(card.rh, card.ri, 'cmp-b')}</div></div>`;
  } else if (card.t === 'sim') {
    if (!L.sim || L.sim.i !== L.i) L.sim = { i: L.i };
    inner = `<div class="pop"><small class="eyebrow">🧪 SIMULAÇÃO</small><h2 class="lesson-title">${card.title}</h2><div id="sim" class="sim">${simHtml(card, L.sim)}</div></div>`;
  } else if (card.t === 'write') {
    const key = L.fid + ':' + L.i; const txt = S.drafts[key] || ''; const chk = S.drafts[key + ':chk'] || [];
    inner = `<div class="pop write">
      <div class="lumi-say">${mascot(88, 'notebook')}${speech('Hora de praticar! Escreva aqui ou no papel, e use o checklist.')}</div>
      <div class="write-tema"><small>PROPOSTA DE TREINO</small><b>${card.tema}</b><p>${card.apoio}</p></div>
      <textarea id="draft" class="draft" rows="14" placeholder="Comece pelo rascunho: tese, argumento 1, argumento 2 e intervenção…" oninput="AP.draft('${key}', this.value)">${txt.replace(/</g, '&lt;')}</textarea>
      <div class="draft-meta" id="draftMeta">${draftMeta(txt)}</div>
      <div class="write-chk"><small class="eyebrow">CHECKLIST DE REVISÃO</small>
        ${card.checklist.map((c, i) => `<label class="chk"><input type="checkbox" ${chk[i] ? 'checked' : ''} onchange="AP.draftChk('${key}', ${i}, this.checked)"><span>${c}</span></label>`).join('')}
      </div>
      <p class="muted small">Dica: o texto fica salvo só neste aparelho. Mostre a um professor ou colega para receber um retorno.</p>
    </div>`;
  } else if (card.t === 'check') {
    canGo = L.ans !== null;
    const ok = L.ans === card.answer;
    const b = v => {
      let cls = 'opt tf';
      if (L.ans !== null) cls += v === card.answer ? ' ok' : v === L.ans ? ' bad' : ' dim';
      return `<button class="${cls}" onclick="AP.check(${v})">${v ? '👍 Verdadeiro' : '👎 Falso'}</button>`;
    };
    inner = `<div class="pop"><small class="eyebrow">CHECAGEM RÁPIDA • NÃO TIRA VIDA</small><h2 class="lesson-title q">“${card.statement}”</h2>
      <div class="tf-grid">${b(true)}${b(false)}</div>
      ${L.ans !== null ? `<div class="tf-feed ${ok ? 'ok' : 'bad'} fade">${ok ? '🎉 Isso mesmo! ' : '🤔 Quase! '}${card.why}</div>` : ''}</div>`;
  }
  $app.innerHTML = `<div class="focus">
    <div class="focus-top"><div class="focus-top-in">
      <button class="x-btn" onclick="AP.confirmExit()" aria-label="Sair">✕</button>
      <div class="bar"><i style="width:${(L.i + (isReady ? 1 : 0)) / total * 100}%;background:${u.c}"></i></div>
      <span class="counter">📖 ${Math.min(L.i + 1, cards.length)}/${cards.length}</span>
    </div></div>
    <div class="focus-body"><small class="eyebrow" style="color:${u.cd}">${K.aulaLabel || 'LIÇÃO'} • ${f.title.toUpperCase()}</small>${inner}</div>
    <div class="focus-foot"><div class="focus-foot-in">
      ${L.i > 0 && !isReady ? `<button class="btn btn-ghost btn-back" onclick="AP.lessonBack()" aria-label="Voltar">‹</button>` : '<span class="foot-spacer"></span>'}
      <button class="btn ${isReady ? 'btn-green' : 'btn-navy'}" ${canGo ? '' : 'disabled'} onclick="AP.lessonNext()">${isReady ? 'Começar quiz' : 'Continuar'}</button>
    </div></div>
  </div>`;
}

/* ---------- QUIZ ---------- */
function renderQuiz() {
  document.body.className = 'page-focus';
  const z = UI.quiz; const it = z.queue[z.idx]; const q = getQ(it.key); const u = q.unit;
  const letters = ['A', 'B', 'C', 'D'];
  const opts = it.order.map((oi, pos) => {
    let cls = 'opt';
    if (z.checked) cls += oi === q.a ? ' ok' : pos === z.sel ? ' bad' : ' dim';
    else if (pos === z.sel) cls += ' sel';
    return `<button class="${cls}" onclick="AP.pick(${pos})" ${z.checked ? 'tabindex="-1"' : ''}><span class="let">${letters[pos]}</span><span class="opt-txt">${q.o[oi]}</span></button>`;
  }).join('');
  const modeLabel = { fase: 'QUIZ', boss: '🏆 DESAFIO', review: '🧠 REVISÃO', drill: '⚡ TREINO' }[z.mode];
  const area = K.areas[u.area];
  let foot;
  if (!z.checked) {
    foot = `<div class="focus-foot"><div class="focus-foot-in"><span class="foot-spacer"></span><button class="btn btn-green" ${z.sel === null ? 'disabled' : ''} onclick="AP.verify()">Verificar</button></div></div>`;
  } else {
    const ok = z.lastOk; const correctPos = it.order.indexOf(q.a);
    foot = `<div class="focus-foot ${ok ? 'is-ok' : 'is-bad'} slide-up"><div class="focus-foot-in">
      <div class="feedback">
        <span class="fb-robo">${mascot(76, ok ? 'comemoracao' : 'joinha', { decorative: true })}</span>
        <div><b class="fb-title">${ok ? z.praise : 'Resposta correta: ' + letters[correctPos]}</b>
        <small class="fb-sub">${ok ? `+${z.lastGain} XP${z.combo >= 3 ? ' • combo 🔥' + z.combo : ''}` : '❤️ −1 • você vai tentar de novo no final'}</small>
        ${ok ? '' : `<p class="fb-cheer">${z.cheer}</p>`}
        <p>${q.e}</p></div>
      </div>
      <button class="btn ${ok ? 'btn-green' : 'btn-red'}" onclick="AP.next()">Continuar</button>
    </div></div>`;
  }
  $app.innerHTML = `<div class="focus">
    <div class="focus-top"><div class="focus-top-in">
      <button class="x-btn" onclick="AP.confirmExit()" aria-label="Sair">✕</button>
      <div class="bar"><i style="width:${z.solved / z.distinct * 100}%"></i></div>
      <span class="hearts ${z.checked && !z.lastOk ? 'shake' : ''}">❤️ ${Math.max(0, z.hearts)}</span>
    </div></div>
    <div class="focus-body ${z.checked && !z.lastOk ? 'shake' : ''}">
      <div class="q-tags">
        <small class="eyebrow" style="color:${u.cd}">${modeLabel}</small>
        <span class="tag" style="color:${u.cd};border-color:${u.c}55">${area.curto}${area.pts ? ` • ${area.pts} pt${area.pts > 1 ? 's' : ''}` : ''}</span>
        ${it.retry ? '<span class="tag tag-gold">🔁 SEGUNDA CHANCE</span>' : ''}
        ${z.combo >= 2 && !z.checked ? `<span class="tag tag-orange pop">🔥 ${z.combo} seguidas</span>` : ''}
      </div>
      <small class="muted">${q.fase.topic}</small>
      <h2 class="q-text">${q.q}</h2>
      <div class="stack opts">${opts}</div>
    </div>
    ${foot}
  </div>`;
}

/* ---------- RESULTADO / FALHA ---------- */
const medalHtml = (m, big) => `<span class="medal ${big ? 'big' : ''} ${m.locked ? 'locked' : ''}" style="--c:${m.c};--cd:${m.cd}" aria-hidden="true"><i class="medal-rib"></i><i class="medal-disc">${m.locked ? '🔒' : m.emoji}</i></span>`;
function renderResult() {
  document.body.className = 'page-focus';
  const r = UI.result;
  const titles = { fase: 'Fase concluída!', boss: 'Unidade dominada!', review: 'Revisão concluída!', drill: 'Treino concluído!' };
  const msg = r.acc === 100 ? 'Sem nenhum erro. Você está voando!' : r.acc >= 60 ? 'Acima da nota de corte do edital (60%). Continue assim!' : 'Errar faz parte. Os erros foram para o seu Caderno de Erros.';
  const showStars = r.mode === 'fase' || r.mode === 'boss';
  const tile = (c, label, val) => `<div class="tile" style="--tc:${c}"><small>${label}</small><b>${val}</b></div>`;
  $app.innerHTML = `<div class="focus">
    <div class="focus-body center result">
      ${mascot(170, r.mode === 'boss' ? 'conquista' : r.acc >= 60 ? 'comemoracao' : 'joinha')}
      ${r.medal ? `<div class="medal-award">${medalHtml(r.medal, true)}<div><small>${r.medal.isNew ? 'NOVA MEDALHA!' : 'MEDALHA'}</small><b>${r.medal.title}</b><span>O robô te entregou a medalha da unidade. Ela fica guardada em “Você”.</span></div></div>` : ''}
      ${showStars ? `<div class="stars">${[0, 1, 2].map(i => `<span class="${i < r.stars ? 'on' : 'off'}" style="animation-delay:${.2 + i * .2}s">★</span>`).join('')}</div>` : ''}
      <h1 class="c-gold">${titles[r.mode]}</h1>
      <p class="muted">${msg}</p>
      <div class="tiles">${tile('#ffb800', 'XP ganho', '⚡' + r.xp)}${tile('#58cc02', 'Precisão', r.acc + '%')}${tile('#2f80ed', 'Combo', '🔥' + r.combo)}</div>
      ${r.goalHit ? `<div class="note gold pop">🎯 Meta do dia batida! Sequência: ${plural(streakNow(), 'dia', 'dias')} 🔥</div>`
        : `<div class="goal-row"><div class="row-between small"><b>META DO DIA</b><span>${dayXP()}/${S.goal} XP</span></div><div class="bar gold"><i style="width:${Math.min(100, dayXP() / S.goal * 100)}%"></i></div></div>`}
    </div>
    <div class="focus-foot"><div class="focus-foot-in"><span class="foot-spacer"></span><button class="btn btn-green" onclick="AP.home()">Continuar</button></div></div>
  </div>`;
}
function renderFail() {
  document.body.className = 'page-focus';
  const z = UI.quiz;
  $app.innerHTML = `<div class="focus">
    <div class="focus-body center">
      ${mascot(150, 'duvida')}
      <h1>Suas vidas acabaram</h1>
      <p class="muted">Tudo bem! Cada erro foi salvo no <b>Caderno de Erros</b>. Rever a ${LX().n} antes de tentar de novo costuma resolver.</p>
    </div>
    <div class="focus-foot"><div class="focus-foot-in">
      ${z.mode === 'fase' ? `<button class="btn btn-ghost" onclick="AP.lesson('${z.fid}', true)">Rever a ${LX().n}</button>` : '<span class="foot-spacer"></span>'}
      <button class="btn btn-navy" onclick="${z.mode === 'fase' ? `AP.faseQuiz('${z.fid}', true)` : z.mode === 'boss' ? `AP.boss('${z.unitId}', true)` : 'AP.home()'}">${z.mode === 'review' || z.mode === 'drill' ? 'Voltar' : 'Tentar de novo'}</button>
    </div></div>
  </div>`;
}

/* ---------- TÓPICOS ---------- */
function viewTopics() {
  const f = UI.topicFilter;
  const chips = [['todas', 'Todas']].concat(K.units.map(u => [u.id, u.title])).map(([id, l]) => `<button class="chip ${f === id ? 'on' : ''}" onclick="AP.topicFilter('${id}')">${l}</button>`).join('');
  const groups = K.units.filter(u => f === 'todas' || u.id === f).map(u => {
    const rows = visibleFases(u).map(fa => {
      const d = S.done[fa.id]; const nCards = FLASH.filter(c => c.fid === fa.id).length;
      return `<div class="topic" data-q="${(fa.title + ' ' + fa.topic).toLowerCase()}">
        <div class="topic-head">
          <span class="topic-ico" style="--c:${u.c};--cd:${u.cd}">${fa.ico}</span>
          <div class="grow"><b>${fa.title}</b><small>${fa.topic}</small></div>
          <span class="topic-st ${d ? 'c-gold' : 'c-faint'}">${d ? '★'.repeat(d.stars) : 'NOVO'}</span>
        </div>
        <div class="topic-actions">
          <button class="chip" onclick="AP.lesson('${fa.id}', 'topics')">📖 ${LX().N}</button>
          <button class="chip" onclick="AP.faseQuiz('${fa.id}', 'topics')">🎯 Quiz</button>
          <button class="chip" onclick="AP.cardsOf('${fa.id}')">🃏 ${nCards} cards</button>
        </div></div>`;
    }).join('');
    return `<div class="topic-group"><small class="eyebrow" style="color:${u.cd}">${u.emoji} ${u.title.toUpperCase()} • ${K.areas[u.area].curto}</small><div class="topic-grid">${rows}</div></div>`;
  }).join('');
  return `<div class="page fade">
    <div class="page-title"><h1>Estudar por tópico</h1><p class="muted">Opcional: escolha um assunto e estude fora da ordem da trilha. O que você concluir aqui também conta na trilha.</p></div>
    <input id="topicSearch" class="search" type="search" placeholder="🔍 Buscar tópico (ex.: crase, dengue, conselho)" oninput="AP.searchTopics(this.value)">
    <div class="chips">${chips}</div>
    <div class="stack-lg">${groups}</div>
  </div>`;
}

/* ---------- FLASHCARDS ---------- */
function fcList() {
  const fc = UI.fc;
  return visibleCards().filter(c => {
    const u = FASES[c.fid].u;
    const okF = fc.filter === 'todas' || fc.filter === u.id || fc.filter === 'fase:' + c.fid;
    return okF && (!fc.only || S.cards[c.id] === 'review');
  });
}
function viewCards() {
  const fc = UI.fc; const list = fcList();
  if (fc.idx >= list.length) fc.idx = 0;
  const faseF = fc.filter.startsWith('fase:') ? FASES[fc.filter.slice(5)].f : null;
  const chips = [['todas', 'Todos']].concat(K.units.map(u => [u.id, u.title])).map(([id, l]) => `<button class="chip ${fc.filter === id ? 'on' : ''}" onclick="AP.fcFilter('${id}')">${l}</button>`).join('');
  const all = visibleCards(); const known = fcKnown(); const rev = all.filter(c => S.cards[c.id] === 'review').length;
  let card;
  if (!list.length) {
    card = `<div class="card empty">${mascot(110, 'joinha')}<p>${fc.only ? 'Nenhum card marcado para revisar neste filtro. Ótimo sinal!' : 'Nenhum card neste filtro.'}</p></div>`;
  } else {
    const c = list[fc.idx]; const { u, f } = FASES[c.fid]; const st = S.cards[c.id];
    const badge = st === 'known' ? '<span class="tag tag-green">✓ DOMINADO</span>' : st === 'review' ? '<span class="tag tag-gold">⏳ REVISAR</span>' : '<span class="tag">NOVO</span>';
    card = `<div class="flip" onclick="AP.flip()" role="button" tabindex="0" aria-label="Virar card" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();AP.flip()}">
      <div id="fcInner" class="flip-inner">
        <div class="face front"><div class="row-between"><small class="eyebrow" style="color:${u.cd}">${f.title.toUpperCase()}</small>${badge}</div>
          <div class="face-mid"><h3>${c.front}</h3></div><small class="muted center-t">👆 Toque para virar • responda de cabeça antes</small></div>
        <div class="face back"><div class="row-between"><small class="eyebrow">RESPOSTA</small><small>toque para voltar</small></div>
          <div class="face-mid"><p>${c.back}</p></div><small class="center-t">Como foi? Avalie abaixo 👇</small></div>
      </div></div>
      <div class="fc-actions"><button class="btn btn-gold" onclick="AP.fcMark('review')">⏳ Revisar depois</button><button class="btn btn-green" onclick="AP.fcMark('known')">✓ Já sei!</button></div>
      <div class="fc-nav"><button class="chip" onclick="AP.fcNav(-1)">‹ Anterior</button><b class="muted">${fc.idx + 1} de ${list.length}</b><button class="chip" onclick="AP.fcNav(1)">Próximo ›</button></div>`;
  }
  return `<div class="page fade narrow">
    <div class="page-title"><h1>Flashcards</h1><p class="muted">Memorização ativa: leia a pergunta, responda de cabeça e vire o card.</p></div>
    <div class="mini-stats"><div><b>${all.length}</b><small>cards</small></div><div class="g"><b>${known}</b><small>dominados</small></div><div class="y"><b>${rev}</b><small>para revisar</small></div></div>
    ${faseF ? `<div class="filter-pill"><b>Tópico: ${faseF.title}</b><button onclick="AP.fcFilter('todas')">limpar ✕</button></div>` : `<div class="chips">${chips}</div>`}
    <div class="row-between toggle-row"><b>Mostrar só “Revisar depois”</b><button class="toggle ${fc.only ? 'on' : ''}" onclick="AP.fcOnly()" aria-label="Mostrar só revisar depois" aria-pressed="${fc.only}"></button></div>
    ${card}
  </div>`;
}

/* ---------- REVISÃO ---------- */
function viewReview() {
  const keys = Object.keys(S.errors).filter(k => getQ(k));
  const doneCount = Object.keys(FASES).filter(isDone).length;
  const byArea = {}; keys.forEach(k => { const q = getQ(k); (byArea[q.unit.area] = byArea[q.unit.area] || []).push(q); });
  const list = keys.length ? Object.entries(byArea).map(([a, qs]) => `<div><small class="eyebrow" style="color:${K.areas[a].cor}">${K.areas[a].nome.toUpperCase()} • ${qs.length}</small>
      ${qs.map(q => `<div class="err-item"><small>${q.fase.topic}</small>${q.q.length > 120 ? q.q.slice(0, 120) + '…' : q.q}</div>`).join('')}</div>`).join('')
    : `<div class="card empty">${mascot(110, 'revisao')}<p>Nenhum erro pendente. Quando você errar uma questão, ela aparece aqui para revisar.</p></div>`;
  return `<div class="page fade narrow">
    <div class="page-title"><h1>Revisão</h1><p class="muted">Errar faz parte do aprendizado. Aqui você transforma erro em acerto.</p></div>
    <div class="hero-card red">
      <small>CADERNO DE ERROS</small><h2>${plural(keys.length, 'questão', 'questões')} para revisar</h2>
      <p>Acertou na revisão, a questão sai do caderno.</p>
      <button class="btn btn-white" ${keys.length ? '' : 'disabled'} onclick="AP.review()">Treinar meus erros</button>
    </div>
    <div class="card"><div class="row-icon"><span>⚡</span><div><b>Treino relâmpago</b><p class="muted small">6 questões sorteadas das fases que você já concluiu.</p></div></div>
      <button class="btn btn-navy" ${doneCount ? '' : 'disabled'} onclick="AP.drill()">${doneCount ? 'Treinar agora' : 'Conclua 1 fase para liberar'}</button></div>
    <div class="stack">${list}</div>
  </div>`;
}

/* ---------- SEU DESENVOLVIMENTO ---------- */
function notaCard() {
  const p = projection();
  if (p.mode === 'areas') {
    return `<div class="card">
      <small class="eyebrow">DESEMPENHO POR ÁREA</small>
      <div class="proj"><b class="${p.hit ? 'c-green' : 'c-faint'}">${p.hit}</b><span>/ ${p.rows.length} áreas no alvo de ${Math.round(p.meta * 100)}%</span></div>
      <div class="stack">${p.rows.map(r => `<div class="area-row">
        <div class="row-between"><b>${r.a.nome}</b><b style="color:${r.a.cor}">${r.acc === null ? '—' : Math.round(r.acc * 100) + '%'}</b></div>
        <small class="muted">${r.s.r}/${r.s.t} acertos na primeira tentativa</small>
        <div class="bar-cut"><div class="bar thin"><i style="width:${r.acc === null ? 0 : r.acc * 100}%;background:${r.a.cor}"></i></div><span class="cut" style="left:${p.meta * 100}%"></span></div></div>`).join('')}</div>
      <div class="note">📌 ${K.notaInfo || ''}</div>
    </div>`;
  }
  const { rows, proj, pass } = p; const ready = proj !== null;
  return `<div class="card">
      <small class="eyebrow">NOTA PROJETADA NA PROVA</small>
      <div class="proj"><b class="${!ready ? 'c-faint' : pass ? 'c-green' : 'c-orange'}">${ready ? proj : '—'}</b><span>/ ${K.total} pts</span>
        ${ready ? `<span class="tag ${pass ? 'tag-green' : 'tag-gold'}">${pass ? 'APROVAÇÃO' : 'ABAIXO DO CORTE'}</span>` : ''}</div>
      <div class="bar-cut"><div class="bar ${pass ? '' : 'gold'}"><i style="width:${ready ? proj / K.total * 100 : 0}%"></i></div><span class="cut" style="left:${K.corte / K.total * 100}%"><em>corte ${K.corte}</em></span></div>
      <p class="muted small">${ready ? 'Calculada com a sua taxa de acerto na primeira tentativa, aplicada ao peso de cada bloco.' : `Responda questões dos ${rows.length} blocos para ver a projeção.`}</p>
      <div class="stack">${rows.map(r => `<div class="area-row">
        <div class="row-between"><b>${r.a.nome}</b><b style="color:${r.a.cor}">${r.acc === null ? '—' : Math.round(r.acc * 100) + '%'}</b></div>
        <small class="muted">${r.a.q} questões × ${r.a.pts} pt = ${r.a.max} pts • projeção: ${r.proj === null ? '—' : r.proj.toFixed(1)} pts • ${r.s.r}/${r.s.t} acertos</small>
        <div class="bar thin"><i style="width:${r.acc === null ? 0 : r.acc * 100}%;background:${r.a.cor}"></i></div></div>`).join('')}</div>
      ${K.notaInfo ? `<div class="note">📌 ${K.notaInfo}</div>` : ''}
    </div>`;
}
function viewProgress() {
  const all = allNodes(); const doneN = all.filter(n => isDone(n.id)).length;
  const stat = (ico, v, l) => `<div class="stat-tile"><span>${ico}</span><div><b>${v}</b><small>${l}</small></div></div>`;
  const unitsProg = K.units.map(u => { const n = nodesOf(u); const d = n.filter(x => isDone(x.id)).length; return `<div class="u-prog"><span class="u-dot" style="background:${u.c}"></span><b>${u.title}</b><div class="bar thin"><i style="width:${d / n.length * 100}%;background:${u.c}"></i></div><small>${d}/${n.length}</small></div>`; }).join('');
  return `<div class="page fade narrow">
    <div class="page-title"><h1>Seu desenvolvimento até agora</h1><p class="muted">Tudo o que você já conquistou na trilha, nos tópicos e nos flashcards.</p></div>
    <div class="stat-grid">${stat('🔥', streakNow(), 'dias seguidos')}${stat('⚡', S.xp, 'XP • nível ' + level())}${stat('★', totalStars(), 'estrelas')}${stat('🗺️', doneN + '/' + all.length, 'fases concluídas')}${stat('🃏', fcKnown() + '/' + visibleCards().length, 'flashcards dominados')}${stat('🧠', Object.keys(S.errors).length, 'erros para revisar')}</div>
    ${notaCard()}
    <div class="card"><small class="eyebrow">MEDALHAS • ${Object.keys(S.medals).length}/${K.units.length}</small>
      <div class="medals">${K.units.map(u => { const got = !!S.medals[u.id]; return `<div class="medal-item ${got ? '' : 'off'}">${medalHtml({ c: u.c, cd: u.cd, emoji: u.emoji, locked: !got })}<b>${u.title}</b><small>${got ? 'Conquistada' : 'Vença o desafio da unidade'}</small></div>`; }).join('')}</div></div>
    <div class="card"><small class="eyebrow">TRILHA POR UNIDADE</small><div class="stack">${unitsProg}</div></div>
    <div class="card settings">
      <small class="eyebrow">AJUSTES</small>
      ${singleCargo() ? '' : `<div><b>Cargo</b><div class="seg">${Object.entries(K.cargos).map(([id, c]) => `<button class="opt ${S.cargo === id ? 'sel' : ''}" onclick="AP.setCargo('${id}', true)">${c.emoji} ${c.curto}</button>`).join('')}</div></div>`}
      <div><b>Meta diária</b><div class="seg">${[30, 50, 100].map(g => `<button class="opt ${S.goal === g ? 'sel' : ''}" onclick="AP.setGoal(${g}, true)">${g} XP</button>`).join('')}</div></div>
      <div class="row-between"><b>Sons</b><button class="toggle ${S.sound ? 'on' : ''}" onclick="AP.toggleSound()" aria-label="Sons" aria-pressed="${S.sound}"></button></div>
      <button class="danger-link" onclick="AP.confirmReset()">Zerar todo o progresso de ${K.nome}</button>
    </div>
  </div>`;
}

/* ---------- EDITAL / GUIA DA PROVA ---------- */
function viewEdital() {
  const g = K.guia || {};
  const row = ([l, v]) => `<div class="kv"><span>${l}</span><b>${v}</b></div>`;
  const destaques = (g.destaques || []).map((d, i) => `<div class="hero-card ${i ? 'blue' : 'navy'}"><small>${d.rotulo}</small><h2>${d.valor}</h2><p>${d.texto}</p></div>`).join('');
  const areas = Object.values(K.areas).map(a => `<div class="area-line"><span style="background:${a.cor}"></span><div class="grow"><b>${a.nome}</b><small class="muted">${a.pts ? `${a.q} questões × ${a.pts} pt` : a.info ? a.info : a.q > 1 ? `${a.q} questões` : 'texto dissertativo-argumentativo'}</small></div><b style="color:${a.cor}">${a.max != null ? a.max : a.info ? '' : a.q > 1 ? a.q : '0–10'}</b></div>`).join('');
  return `<div class="page fade narrow">
    <button class="link-btn" onclick="AP.tab('home')">‹ Voltar para a trilha</button>
    <div class="page-title with-robo"><div><h1>${g.titulo || 'Edital em 1 minuto'}</h1><p class="muted">${g.sub || ''}</p></div>${mascot(104, 'legislacao', { decorative: true })}</div>
    ${g.aviso ? `<div class="note gold">⚠️ ${g.aviso}</div>` : ''}
    ${destaques ? `<div class="two">${destaques}</div>` : ''}
    ${(g.cards || []).slice(0, 2).map(c => `<div class="card"><small class="eyebrow">${c.titulo}</small>${c.linhas.map(row).join('')}</div>`).join('')}
    <div class="card"><small class="eyebrow">${g.estruturaTitulo || 'ESTRUTURA DA PROVA'}</small>
      <div class="stack">${areas}${K.total ? `<div class="row-between total"><b>Total</b><b>${K.total} pts</b></div>` : ''}</div>
      ${g.aprovacao ? `<div class="note gold">${g.aprovacao}</div>` : ''}</div>
    ${(g.cards || []).slice(2).map(c => `<div class="card"><small class="eyebrow">${c.titulo}</small>${c.linhas.map(row).join('')}</div>`).join('')}
    ${K.editalUrl ? `<a class="btn btn-ghost" href="${K.editalUrl}" target="_blank" rel="noopener">📄 ${g.linkTexto || 'Abrir edital completo'}</a>` : ''}
    ${(K.documentos || []).length ? `<div class="card"><small class="eyebrow">DOCUMENTOS OFICIAIS</small>
      <div class="docs">${K.documentos.map(d => `<a class="doc" href="${d.url}" target="_blank" rel="noopener"><span class="doc-tipo ${d.tipo === 'PDF' ? 'pdf' : d.tipo === 'SITE' ? 'site' : ''}">${d.tipo}</span><span class="doc-nome">${d.nome}</span><span class="doc-go" aria-hidden="true">↗</span></a>`).join('')}</div>
      ${K.documentos.some(d => d.tipo === 'DOC') ? '<p class="muted small">Os anexos (.doc) abrem no Word ou no Google Docs. Preencha, assine e envie conforme as instruções do edital.</p>' : ''}</div>` : ''}
    ${g.rodape ? `<p class="muted small center-t">${g.rodape}</p>` : ''}
  </div>`;
}

/* =====================================================================
   AÇÕES
   ===================================================================== */
function startQuiz(cfg) {
  UI.quiz = { ...cfg, queue: cfg.keys.map(k => ({ key: k, order: shuffle([0, 1, 2, 3]), retry: false })), idx: 0, hearts: 5, solved: 0, distinct: cfg.keys.length, firstRight: 0, firstTotal: 0, mistakes: 0, combo: 0, maxCombo: 0, xp: 0, sel: null, checked: false, lastOk: null };
  UI.screen = 'quiz'; render(); window.scrollTo(0, 0);
}
function finishQuiz() {
  const z = UI.quiz;
  const stars = z.mistakes === 0 ? 3 : z.mistakes <= 2 ? 2 : 1;
  const total = z.xp + (z.mode === 'boss' ? 30 : z.mode === 'fase' ? 10 : 5);
  if (z.mode === 'fase' || z.mode === 'boss') {
    const prev = S.done[z.fid];
    S.done[z.fid] = { stars: Math.max(stars, prev ? prev.stars : 0), at: Date.now() };
  }
  let medal = null;
  if (z.mode === 'boss') {
    const u = K.units.find(x => x.id === z.unitId);
    medal = { unitId: u.id, title: u.title, emoji: u.emoji, c: u.c, cd: u.cd, isNew: !S.medals[u.id] };
    if (!S.medals[u.id]) S.medals[u.id] = { at: Date.now() };
  }
  const goalHit = addXP(total);
  UI.result = { medal, stars, xp: total, acc: z.firstTotal ? Math.round(z.firstRight / z.firstTotal * 100) : 100, combo: z.maxCombo, mode: z.mode, goalHit };
  UI.screen = 'result'; render(); window.scrollTo(0, 0); confetti();
}
const PRAISE = ['Mandou bem!', 'Excelente!', 'Isso aí!', 'Perfeito!', 'Arrasou!', 'Show!'];
const CHEER = [
  'Errar faz parte! Leia a explicação: essa questão volta no final para você tentar de novo.',
  'Quase! Agora você já sabe o porquê. Daqui a pouco ela aparece de novo.',
  'Respira e segue! Cada erro de hoje é um acerto no dia da prova.',
  'Tudo bem errar aqui: é treino. Guarda a explicação e tenta de novo no final.'
];

window.AP = {
  go,
  onb(step) { if (step === 1 && singleCargo()) step = UI.onbStep > 1 ? 0 : 2; UI.onbStep = step; render(); },
  setCargo(id, inApp) { S.cargo = id; if (inApp) save(); render(); },
  setGoal(v, inApp) { S.goal = v; if (inApp) save(); render(); },
  finishOnb() { S.onb = true; save(); UI.screen = 'tabs'; UI.tab = 'home'; UI.scrollToCurrent = true; render(); },
  // usado pelos testes automáticos
  _debug() { return { UI, S, getQ }; },
  buy(id) {
    const pl = PLANS.find(x => x.id === id); if (!pl) return;
    if (pl.checkout) { window.open(pl.checkout, '_blank', 'noopener'); return; }
    $layer.innerHTML = `<div class="overlay" onclick="AP.closeSheet()"></div><div class="sheet center-t" role="dialog" aria-modal="true" aria-labelledby="buy-t">
      ${mascot(110, 'atencao', { decorative: true })}<h3 id="buy-t">Plano ${pl.nome} • ${brl(pl.preco)}</h3>
      <p class="muted">O pagamento on-line está quase pronto. Assim que for liberado, você poderá assinar por aqui.</p>
      <div class="stack"><button class="btn btn-navy" onclick="AP.closeSheet()">Entendi</button></div></div>`;
  },
  sim(action, arg) {
    const L = UI.lesson; if (!L || !L.sim) return; const st = L.sim; const card = FASES[L.fid].f.lesson[L.i];
    if (action === 'next') st.p = Math.min(stepsOf(card, st).length - 1, (st.p || 0) + 1);
    if (action === 'prev') st.p = Math.max(0, (st.p || 0) - 1);
    if (action === 'reset') st.p = 0;
    if (action === 'bit') st.v = (st.v || 0) ^ arg;
    if (action === 'goal') { st.g = (st.g || 0) + 1; st.v = 0; }
    if (action === 'gate') st.g = arg;
    if (action === 'pick' && st.pick == null && card.items[st.q || 0]) { st.q = st.q || 0; st.pick = arg; if (arg === card.items[st.q][1]) st.ok = (st.ok || 0) + 1; }
    if (action === 'cnext') { st.q = (st.q || 0) + 1; st.pick = null; }
    if (action === 'creset') { st.q = 0; st.ok = 0; st.pick = null; }
    if (action === 'alvo') { st.t = (st.t || 0) + 1; st.p = 0; }
    if (action === 'hreset') st.code = card.code;
    if (action === 'a') st.a = !st.a;
    if (action === 'b') st.b = !st.b;
    if (action === 'inc' || action === 'dec') {
      const lim = { z: [1, 20], n: [0, 30], e: [0, 26] }[arg]; st[arg] = Math.min(lim[1], Math.max(lim[0], st[arg] + (action === 'inc' ? 1 : -1)));
      if (arg === 'z') { st.e = st.z; st.n = ELEM[st.z][2] - st.z; }
    }
    const el = document.getElementById('sim'); if (el) el.innerHTML = simHtml(card, st);
  },
  htmlRun(v) {
    const L = UI.lesson; if (!L || !L.sim) return;
    if (v != null) L.sim.code = v;
    clearTimeout(UI._ht); UI._ht = setTimeout(() => { const f = document.getElementById('hsOut'); if (f) f.srcdoc = HTML_BASE + (L.sim.code || ''); }, v == null ? 0 : 350);
  },
  calc(kind) {
    const out = document.getElementById('calcOut'); if (!out) return;
    if (kind === 'velocidade') { const v = num('kmh'); out.innerHTML = `<b>${fmtN(v / 3.6)} m/s</b><span>${fmtN(v)} km/h ÷ 3,6</span>`; }
    if (kind === 'escala') { const d = num('des'), e = num('esc'); const realCm = d * e; out.innerHTML = `<b>${fmtN(realCm / 100)} m</b><span>${fmtN(d)} cm × ${fmtN(e, 0)} = ${fmtN(realCm)} cm na realidade</span>`; }
    if (kind === 'equilibrio') {
      const cf = num('cf'), pr = num('pr'), cv = num('cv'); const m = pr - cv;
      out.innerHTML = m <= 0 ? '<b class="c-red">Sem equilíbrio</b><span>O preço precisa ser maior que o custo variável.</span>'
        : `<b>${fmtN(Math.ceil(cf / m), 0)} unidades/mês</b><span>Margem: R$ ${fmtN(m)} • Receita no equilíbrio: R$ ${fmtN(Math.ceil(cf / m) * pr)}</span>`;
    }
    if (kind === 'margem') {
      const rec = num('rec'), cus = num('cus'); const l = rec - cus;
      out.innerHTML = rec <= 0 ? '<b class="c-red">Informe a receita</b><span>A margem é calculada sobre a receita.</span>'
        : `<b>${l >= 0 ? 'Lucro' : 'Prejuízo'}: R$ ${fmtN(Math.abs(l))}</b><span>Margem de lucro: ${fmtN(l / rec * 100, 1)}% • (${fmtN(rec)} − ${fmtN(cus)}) ÷ ${fmtN(rec)}</span>`;
    }
  },
  draft(key, v) {
    S.drafts[key] = v; const m = document.getElementById('draftMeta'); if (m) m.innerHTML = draftMeta(v);
    clearTimeout(UI._dt); UI._dt = setTimeout(save, 500);
  },
  draftChk(key, i, on) { const a = S.drafts[key + ':chk'] || []; a[i] = on; S.drafts[key + ':chk'] = a; save(); },
  closeWelcome() { UI.welcome = false; const el = document.querySelector('.welcome'); if (el) el.remove(); },
  tab(id) { UI.tab = id; UI.sheet = null; UI.screen = 'tabs'; render(); window.scrollTo(0, 0); },
  home() { UI.screen = 'tabs'; UI.tab = UI.backTab || 'home'; UI.lesson = null; UI.quiz = null; UI.backTab = null; UI.scrollToCurrent = UI.tab === 'home'; render(); if (UI.tab !== 'home') window.scrollTo(0, 0); },
  sheet(uid, i) { UI.sheet = { uid, i }; renderSheet(); },
  closeSheet() { UI.sheet = null; $layer.innerHTML = ''; },
  // back: string = aba de retorno; true = manter a aba atual de retorno
  lesson(fid, back) { if (back !== true) UI.backTab = back || null; UI.sheet = null; UI.lesson = { fid, i: 0, ans: null }; UI.screen = 'lesson'; render(); window.scrollTo(0, 0); },
  lessonNext() { const L = UI.lesson; if (L.i >= FASES[L.fid].f.lesson.length) return AP.faseQuiz(L.fid, true); L.i++; L.ans = null; render(); window.scrollTo(0, 0); },
  lessonBack() { if (UI.lesson.i > 0) { UI.lesson.i--; UI.lesson.ans = null; render(); } },
  check(v) { const L = UI.lesson; if (L.ans !== null) return; L.ans = v; beep(v === FASES[L.fid].f.lesson[L.i].answer); render(); },
  faseQuiz(fid, back) {
    if (back !== true) UI.backTab = back || null;
    UI.sheet = null; const f = FASES[fid].f;
    startQuiz({ mode: 'fase', fid, unitId: FASES[fid].u.id, keys: f.quiz.map((_, i) => fid + '#' + i) });
  },
  boss(uid, keep) {
    if (keep !== true) UI.backTab = null;
    UI.sheet = null; const u = K.units.find(x => x.id === uid);
    const keys = shuffle(visibleFases(u).flatMap(f => f.quiz.map((_, i) => f.id + '#' + i))).slice(0, 10);
    startQuiz({ mode: 'boss', fid: 'boss-' + uid, unitId: uid, keys });
  },
  review() { const keys = shuffle(Object.keys(S.errors).filter(getQ)).slice(0, 10); if (!keys.length) return; UI.backTab = 'rev'; startQuiz({ mode: 'review', keys }); },
  drill() {
    const pool = Object.keys(FASES).filter(id => isDone(id) && (!FASES[id].f.cargo || FASES[id].f.cargo === S.cargo)).flatMap(id => FASES[id].f.quiz.map((_, i) => id + '#' + i));
    if (!pool.length) return; UI.backTab = 'rev'; startQuiz({ mode: 'drill', keys: shuffle(pool).slice(0, 6) });
  },
  pick(i) { if (UI.quiz.checked) return; UI.quiz.sel = i; render(); },
  verify() {
    const z = UI.quiz; const it = z.queue[z.idx]; const q = getQ(it.key);
    if (z.sel === null || z.checked) return;
    const ok = it.order[z.sel] === q.a;
    z.checked = true; z.lastOk = ok; z.praise = pick(PRAISE); z.cheer = pick(CHEER);
    const area = q.unit.area;
    if (!it.retry) { z.firstTotal++; if (z.mode !== 'review') { S.stats[area].t++; if (ok) S.stats[area].r++; } }
    if (ok) {
      z.solved++; z.combo++; z.maxCombo = Math.max(z.maxCombo, z.combo);
      z.lastGain = it.retry ? 5 : (10 + (z.combo >= 3 ? 5 : 0)); z.xp += z.lastGain;
      if (!it.retry) { z.firstRight++; delete S.errors[it.key]; }
    } else {
      z.mistakes++; z.combo = 0; z.hearts--;
      S.errors[it.key] = { t: Date.now() };
      z.queue.push({ key: it.key, order: shuffle([0, 1, 2, 3]), retry: true });
    }
    save(); beep(ok); render();
  },
  next() {
    const z = UI.quiz;
    if (z.hearts <= 0) { UI.screen = 'fail'; return render(); }
    z.idx++; z.sel = null; z.checked = false;
    if (z.idx >= z.queue.length || z.solved >= z.distinct) return finishQuiz();
    render(); window.scrollTo(0, 0);
  },
  confirmExit() {
    $layer.innerHTML = `<div class="overlay"></div><div class="sheet center-t" role="dialog" aria-modal="true">
      ${mascot(110, 'duvida')}<h3>Espera, não vai embora!</h3><p class="muted">Se sair agora, o progresso desta fase será perdido.</p>
      <div class="stack"><button class="btn btn-navy" onclick="AP.closeSheet()">Continuar estudando</button><button class="danger-link" onclick="AP.home()">Sair da fase</button></div></div>`;
  },
  confirmReset() {
    $layer.innerHTML = `<div class="overlay" onclick="AP.closeSheet()"></div><div class="sheet center-t" role="dialog" aria-modal="true">
      ${mascot(100, 'atencao')}<h3>Zerar tudo?</h3><p class="muted">XP, estrelas, sequência, flashcards e caderno de erros desta trilha serão apagados deste aparelho.</p>
      <div class="stack"><button class="btn btn-red" onclick="AP.doReset()">Sim, zerar</button><button class="link-btn" onclick="AP.closeSheet()">Cancelar</button></div></div>`;
  },
  doReset() { store.del(keyOf(K.id)); const id = K.id; K = null; openConcurso(id); render(); },
  toggleSound() { S.sound = !S.sound; save(); render(); },
  topicFilter(id) { UI.topicFilter = id; render(); },
  searchTopics(v) {
    v = v.toLowerCase().trim();
    document.querySelectorAll('.topic').forEach(r => { r.style.display = r.dataset.q.includes(v) ? '' : 'none'; });
    document.querySelectorAll('.topic-group').forEach(g => { g.style.display = [...g.querySelectorAll('.topic')].some(r => r.style.display !== 'none') ? '' : 'none'; });
  },
  cardsOf(fid) { UI.fc = { filter: 'fase:' + fid, idx: 0, only: false }; AP.tab('cards'); },
  fcFilter(id) { UI.fc.filter = id; UI.fc.idx = 0; render(); },
  fcOnly() { UI.fc.only = !UI.fc.only; UI.fc.idx = 0; render(); },
  flip() { const el = document.getElementById('fcInner'); if (el) el.classList.toggle('flipped'); },
  fcNav(d) { const n = fcList().length; if (!n) return; UI.fc.idx = (UI.fc.idx + d + n) % n; render(); },
  fcMark(st) {
    const list = fcList(); if (!list.length) return;
    const c = list[UI.fc.idx]; const was = S.cards[c.id];
    S.cards[c.id] = st; save();
    if (st === 'known' && was !== 'known') addXP(2);
    beep(st === 'known');
    if (UI.fc.only && st === 'known') return render();
    AP.fcNav(1);
  }
};

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && $layer.innerHTML) { AP.closeSheet(); return; }
  if (!UI || !S || !S.onb || R === 'inicio' || R.startsWith('list:') || R.startsWith('curso:')) return;
  if (UI.screen === 'quiz' && !$layer.innerHTML) {
    const z = UI.quiz;
    if (!z.checked && ['1', '2', '3', '4', 'a', 'b', 'c', 'd'].includes(e.key.toLowerCase())) { const i = '1234'.indexOf(e.key) >= 0 ? '1234'.indexOf(e.key) : 'abcd'.indexOf(e.key.toLowerCase()); AP.pick(i); }
    else if (e.key === 'Enter') { e.preventDefault(); z.checked ? AP.next() : AP.verify(); }
  } else if (UI.screen === 'lesson' && e.key === 'Enter' && !$layer.innerHTML && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'INPUT') {
    const L = UI.lesson; const c = FASES[L.fid].f.lesson[L.i];
    if (!c || c.t !== 'check' || L.ans !== null) { e.preventDefault(); AP.lessonNext(); }
  }
});
window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); });
render();
})();
