/* =====================================================================
   Aprovaê — Plataforma de aprendizagem
   App estático (HTML + CSS + JS puro). Sem dependências.
   ===================================================================== */
(function () {
'use strict';

/* ------------------------------ PRODUTOS ------------------------------ */
const PRODUCTS = [
  { id: 'concursos', nome: 'Concursos', ico: '🏛️', robo: 'notebook', desc: 'Trilhas guiadas pelo edital do seu concurso público.', ativo: true },
  { id: 'enem', nome: 'ENEM', ico: '📝', robo: 'estudando', desc: 'Todas as áreas do ENEM, com foco no que mais cai.', ativo: false },
  { id: 'encceja', nome: 'ENCCEJA', ico: '📚', robo: 'revisao', desc: 'Conclua o ensino fundamental ou médio no seu ritmo.', ativo: false },
  { id: 'faetec', nome: 'Faetec', ico: '🛠️', robo: 'atencao', desc: 'Preparação para o processo seletivo da FAETEC.', ativo: false },
  { id: 'graduacao', nome: 'Graduação', ico: '🎓', robo: 'graduacao', desc: 'Reforço nas disciplinas da faculdade.', ativo: false }
];
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
const fmtDate = ([y, m, d]) => String(d).padStart(2, '0') + '/' + String(m + 1).padStart(2, '0') + '/' + y;
const daysTo = ([y, m, d]) => Math.max(0, Math.ceil((new Date(y, m, d) - new Date(new Date().toDateString())) / 86400000));
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
  comemoracao: [235, 286], conquista: [263, 285], duvida: [237, 254], atencao: [249, 250],
  revisao: [235, 243], planejamento: [295, 241], sus: [276, 345], saquarema: [331, 349],
  legislacao: [317, 343], graduacao: [285, 360], campo: [292, 344]
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
/** Robô na altura pedida (px). pose: chave de ROBO. opts: { float, enter, decorative, eager, cls } */
function mascot(size = 96, pose = 'principal', opts = {}) {
  if (!ROBO[pose]) pose = 'principal';
  const [w, h] = ROBO[pose];
  const W = Math.round(size * w / h);
  const cls = ['robo', opts.float ? 'robo-float' : '', opts.enter === false ? '' : 'robo-enter', opts.cls || ''].join(' ').trim();
  const alt = opts.decorative ? '' : ROBO_ALT[pose];
  return `<picture class="${cls}" style="--rw:${W}px;--rh:${size}px"><source srcset="assets/mascote/robo-${pose}.webp" type="image/webp"><img src="assets/mascote/robo-${pose}.png" width="${W}" height="${size}" alt="${alt}" ${opts.eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" draggable="false"></picture>`;
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
// #inicio  •  #concursos  •  #<id-do-concurso>
let R = 'inicio';
function readRoute() {
  const h = (location.hash || '').replace('#', '');
  R = h === 'concursos' ? 'concursos' : CONCURSOS[h] ? h : 'inicio';
}
function go(h) { if (location.hash === '#' + h) { readRoute(); render(); } else location.hash = h; window.scrollTo(0, 0); }

/* ------------------------------ ESTADO DO CONCURSO ------------------------------ */
let K = null;   // concurso ativo
let S = null;   // progresso salvo
let UI = null;  // estado da tela
let FASES = {}, FLASH = [];
const defaultState = () => ({ onb: false, cargo: null, goal: 50, xp: 0, streak: 0, lastDay: null, day: { d: null, xp: 0 }, done: {}, stats: { esp: { r: 0, t: 0 }, port: { r: 0, t: 0 }, leg: { r: 0, t: 0 } }, errors: {}, cards: {}, sound: true });
const keyOf = id => 'aprovae:v2:' + id;
function openConcurso(id) {
  if (K && K.id === id) return;
  K = CONCURSOS[id];
  S = Object.assign(defaultState(), store.get(keyOf(id)) || {});
  UI = { tab: 'home', screen: 'tabs', onbStep: 0, sheet: null, fc: { filter: 'todas', idx: 0, only: false }, topicFilter: 'todas', scrollToCurrent: true };
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
  const rows = Object.entries(K.areas).map(([k, a]) => { const s = S.stats[k] || { r: 0, t: 0 }; const acc = s.t ? s.r / s.t : null; return { k, a, s, acc, proj: acc === null ? null : acc * a.max }; });
  const ready = rows.every(r => r.acc !== null);
  const proj = ready ? Math.round(rows.reduce((t, r) => t + r.proj, 0)) : null;
  return { rows, proj, pass: proj !== null && proj >= K.corte && rows.every(r => r.s.r > 0) };
}

/* =====================================================================
   RENDER
   ===================================================================== */
function render() {
  readRoute();
  $layer.innerHTML = '';
  document.body.className = '';
  if (R === 'inicio') return renderLanding();
  if (R === 'concursos') return renderConcursos();
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
    <${p.ativo ? `button onclick="AP.go('concursos')"` : 'div aria-disabled="true"'} class="product ${p.ativo ? 'is-on' : 'is-off'}">
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
        <div class="land-lumi">${mascot(190, 'principal', { float: true, eager: true })}${speech('Escolha por onde começar! 👇')}</div>
      </div>
    </header>
    <section class="land-products" aria-label="Escolha sua trilha">${cards}</section>
    <section class="land-how">
      <div class="how"><span>📖</span><b>Aprenda</b><p>Uma lição curta e direta abre cada fase.</p></div>
      <div class="how"><span>🎯</span><b>Pratique</b><p>Questões originais no estilo da banca, com explicação.</p></div>
      <div class="how"><span>🧠</span><b>Revise</b><p>Seus erros voltam até você dominar o assunto.</p></div>
    </section>
    <footer class="land-foot">${wordmark()} · Plataforma de aprendizagem</footer>
  </div>`;
}

/* ---------- LISTA DE CONCURSOS ---------- */
function renderConcursos() {
  document.title = 'Aprovaê+Concursos';
  document.body.className = 'page-landing';
  const list = Object.values(CONCURSOS).map(c => {
    const saved = store.get(keyOf(c.id));
    const started = saved && saved.onb;
    const d = daysTo(c.prova);
    return `<article class="contest">
      <div class="contest-robo">${mascot(110, c.mascot || 'notebook', { decorative: true, enter: false })}</div>
      <div class="contest-top"><span class="tag tag-navy">${c.banca}</span><span class="tag tag-gold">${plural(c.vagas, 'vaga', 'vagas')}</span>${d ? `<span class="tag tag-red">faltam ${d} dias</span>` : ''}</div>
      <h2>${c.nome}</h2>
      <p class="contest-sub">${c.cargoGrupo}</p>
      <ul class="contest-meta"><li>📄 ${c.edital}</li><li>📅 Prova em ${fmtDate(c.prova)}</li><li>💰 ${c.salario}</li></ul>
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
    <div class="sub-title"><h1>${wordmark('Concursos')}</h1><p>Escolha o concurso que você vai prestar.</p></div>
    <section class="contests">${list}
      <div class="contest contest-soon">${mascot(84, 'planejamento')}<div><b>Novos concursos em breve</b><p>Estamos preparando as próximas trilhas a partir dos editais publicados.</p></div></div>
    </section>
  </div>`;
}

/* ---------- ONBOARDING ---------- */
function renderOnb() {
  document.body.className = 'page-focus';
  const s = UI.onbStep;
  let body = '', btn = '';
  if (s === 0) {
    body = `<div class="onb-center fade">
      ${mascot(180, 'principal', { float: true, eager: true })}
      <h1>Oi! Eu sou o <span class="c-gold">Lumi</span>.</h1>
      <p>Vou acender as ideias certas até a sua aprovação no concurso de <b>${K.nome}</b>. Primeiro você aprende, depois pratica.</p>
      <div class="onb-feats"><div><span>📖</span>Lição curta</div><div><span>🎯</span>Quiz da banca</div><div><span>🃏</span>Flashcards</div></div>
    </div>`;
    btn = `<button class="btn btn-green" onclick="AP.onb(1)">Começar</button>`;
  } else if (s === 1) {
    const opts = Object.entries(K.cargos).map(([id, c]) => `<button onclick="AP.setCargo('${id}')" class="opt big ${S.cargo === id ? 'sel' : ''}">
      <span class="opt-emoji">${c.emoji}</span><span class="opt-main"><b>${c.nome}</b><small>${c.desc}</small></span><span class="opt-side">${c.vagas} vagas</span></button>`).join('');
    body = `<div class="onb-pad fade">
      <div class="lumi-say">${mascot(84, 'notebook')}${speech('Para qual cargo você vai fazer a prova?')}</div>
      <div class="info-pill">🏛️ <span><small>CONCURSO</small><b>${K.nome} • ${K.edital}</b></span></div>
      <div class="stack">${opts}</div>
      <p class="muted small">Português e Legislação são iguais para os dois cargos. Muda o bloco de Específicos.</p>
    </div>`;
    btn = `<button class="btn btn-green" ${S.cargo ? '' : 'disabled'} onclick="AP.onb(2)">Continuar</button>`;
  } else {
    const g = (v, t, d) => `<button onclick="AP.setGoal(${v})" class="opt big ${S.goal === v ? 'sel' : ''}"><span class="opt-main"><b>${t}</b><small>${d}</small></span><span class="opt-side">${v} XP/dia</span></button>`;
    body = `<div class="onb-pad fade">
      <div class="lumi-say">${mascot(84, 'planejamento')}${speech(`Faltam <b class="c-red">${daysTo(K.prova)} dias</b> para a prova. Qual vai ser seu ritmo?`)}</div>
      <div class="stack">${g(30, 'Leve', '≈ 1 fase por dia')}${g(50, 'Firme', '≈ 2 fases por dia')}${g(100, 'Intenso', '≈ 4 fases por dia')}</div>
      <div class="note">💡 No ritmo <b>Firme</b>, você termina a trilha com folga e usa o resto do tempo para revisar seus erros.</div>
    </div>`;
    btn = `<button class="btn btn-green" onclick="AP.finishOnb()">Ir para a trilha</button>`;
  }
  $app.innerHTML = `<div class="focus">
    <div class="focus-top"><div class="focus-top-in">
      ${s > 0 ? `<button class="x-btn" onclick="AP.onb(${s - 1})" aria-label="Voltar">‹</button>` : `<button class="x-btn" onclick="AP.go('concursos')" aria-label="Voltar">‹</button>`}
      <div class="bar"><i style="width:${(s + 1) / 3 * 100}%"></i></div>
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
        <button class="side-item ${UI.tab === 'edital' ? 'on' : ''}" onclick="AP.tab('edital')"><span class="nav-ico">📋</span><span>Edital</span></button></nav>
      <div class="side-foot">
        <div class="side-contest"><small>SEU CONCURSO</small><b>${K.nome}</b><span>${cargo().emoji} ${cargo().curto}</span></div>
        <a href="#concursos" class="side-link">Trocar de concurso</a>
      </div>
    </aside>
    <div class="col-main">
      <header class="topbar">
        <a href="#inicio" class="topbar-brand"><img src="assets/img/mark-96.png?v=2" alt="" width="40" height="40">${wordmark()}</a>
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
  const d = daysTo(K.prova); const p = projection();
  const an = allNodes(); const tp = an.filter(n => isDone(n.id)).length / an.length * 100;
  const pct = Math.min(100, dayXP() / S.goal * 100);
  return `<div class="rail-stats">${statChips()}</div>
    <div class="card">
      <div class="countdown"><div class="cd-num"><b>${d}</b><small>DIAS</small></div><div><b>Prova em ${fmtDate(K.prova)}</b><p class="muted small">${cargo().curto} • turno da ${cargo().turno}</p></div></div>
      <div class="bar-row"><div class="bar thin"><i style="width:${tp}%"></i></div><small>${Math.round(tp)}% da trilha</small></div>
    </div>
    <div class="card">
      <div class="row-between"><b>Meta do dia</b><span class="c-gold"><b>${dayXP()}/${S.goal} XP</b></span></div>
      <div class="bar gold"><i style="width:${pct}%"></i></div>
      <p class="muted small">${pct >= 100 ? 'Meta batida! Sequência garantida 🔥' : 'Complete fases para manter sua sequência.'}</p>
    </div>
    <div class="card">
      <div class="row-between"><b>Nota projetada</b><span class="${p.proj === null ? 'c-faint' : p.pass ? 'c-green' : 'c-orange'}"><b>${p.proj === null ? '—' : p.proj} / ${K.total}</b></span></div>
      <div class="bar-cut"><div class="bar ${p.pass ? '' : 'gold'}"><i style="width:${p.proj === null ? 0 : p.proj / K.total * 100}%"></i></div><span class="cut" style="left:${K.corte / K.total * 100}%"></span></div>
      <p class="muted small">Corte do edital: ${K.corte} pontos.</p>
      <button class="link-btn" onclick="AP.tab('prog')">Ver meu desenvolvimento ›</button>
    </div>
    <div class="card lumi-card">${mascot(70, 'atencao', { decorative: true })}<p><b>Dica do Lumi:</b> Específicos valem 2/3 da prova. Cada acerto ali vale o triplo de um acerto de Legislação.</p></div>`;
}

/* ---------- TRILHA ---------- */
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
        <small>UNIDADE ${ui + 1} • ${a.curto.toUpperCase()} • ${a.pts} PT${a.pts > 1 ? 'S' : ''} POR QUESTÃO</small>
        <h2>${u.title}</h2>
        <p>${u.sub}</p>
        <div class="unit-prog"><div class="bar white"><i style="width:${doneU / nodes.length * 100}%"></i></div><b>${doneU}/${nodes.length}</b></div>
      </div>
      <div class="field"><div class="map" style="aspect-ratio:${map.ratio}">${map.svg}${nodesHtml}</div></div>
    </section>`;
  }).join('');
  return `<div class="fade page">
    <div class="trail-head">
      <div><small class="eyebrow">APROVAÊ+CONCURSOS</small><h1>${K.nome}</h1><p class="muted">${cargo().nome}</p></div>
      <button class="chip" onclick="AP.tab('edital')">📋 Edital</button>
    </div>
    <div class="card countdown-card">
      <div class="countdown"><div class="cd-num"><b>${d}</b><small>DIAS</small></div>
      <div class="grow"><b>Prova em ${fmtDate(K.prova)}</b><p class="muted small">Turno da ${cargo().turno}</p>
      <div class="bar-row"><div class="bar thin"><i style="width:${doneN / all.length * 100}%"></i></div><small>${Math.round(doneN / all.length * 100)}% da trilha</small></div></div></div>
    </div>
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
    info = 'Até 10 questões sorteadas de toda a unidade, sem lição antes. Mostre que domina o bloco!';
    if (unlocked) btns = `<button class="btn btn-gold" onclick="AP.boss('${u.id}')">${done ? 'Desafiar de novo' : 'Aceitar desafio'}</button>`;
  } else {
    const f = n.f;
    title = f.title;
    info = `<b>${f.topic}</b><br>📖 ${f.lesson.length} cartões de lição • 🎯 ${f.quiz.length} questões`;
    if (unlocked) btns = done
      ? `<button class="btn btn-green" onclick="AP.lesson('${f.id}')">Rever lição e praticar</button><button class="btn btn-ghost" onclick="AP.faseQuiz('${f.id}')">Só o quiz</button>`
      : `<button class="btn btn-green" onclick="AP.lesson('${f.id}')">Começar lição · +${10 * f.quiz.length + 10} XP</button>`;
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

/* ---------- LIÇÃO ---------- */
function renderLesson() {
  document.body.className = 'page-focus';
  const L = UI.lesson; const { f, u } = FASES[L.fid];
  const cards = f.lesson; const total = cards.length + 1;
  const isReady = L.i >= cards.length; const card = cards[L.i];
  let inner = '', canGo = true;
  if (isReady) {
    inner = `<div class="ready pop">
      ${mascot(140, 'atencao', { float: true })}
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
    <div class="focus-body"><small class="eyebrow" style="color:${u.cd}">LIÇÃO • ${f.title.toUpperCase()}</small>${inner}</div>
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
        <span class="fb-ico">${ok ? '✓' : '✕'}</span>
        <div><b class="fb-title">${ok ? z.praise : 'Resposta correta: ' + letters[correctPos]}</b>
        <small class="fb-sub">${ok ? `+${z.lastGain} XP${z.combo >= 3 ? ' • combo 🔥' + z.combo : ''}` : 'Essa questão volta no final • ❤️ −1'}</small>
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
        <span class="tag" style="color:${u.cd};border-color:${u.c}55">${area.curto} • ${area.pts} pt${area.pts > 1 ? 's' : ''}</span>
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
function renderResult() {
  document.body.className = 'page-focus';
  const r = UI.result;
  const titles = { fase: 'Fase concluída!', boss: 'Unidade dominada!', review: 'Revisão concluída!', drill: 'Treino concluído!' };
  const msg = r.acc === 100 ? 'Sem nenhum erro. Você está voando!' : r.acc >= 60 ? 'Acima da nota de corte do edital (60%). Continue assim!' : 'Errar faz parte. Os erros foram para o seu Caderno de Erros.';
  const showStars = r.mode === 'fase' || r.mode === 'boss';
  const tile = (c, label, val) => `<div class="tile" style="--tc:${c}"><small>${label}</small><b>${val}</b></div>`;
  $app.innerHTML = `<div class="focus">
    <div class="focus-body center result">
      ${mascot(170, r.mode === 'boss' ? 'conquista' : r.acc >= 60 ? 'comemoracao' : 'joinha', { float: true })}
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
      <p class="muted">Tudo bem! Cada erro foi salvo no <b>Caderno de Erros</b>. Rever a lição antes de tentar de novo costuma resolver.</p>
    </div>
    <div class="focus-foot"><div class="focus-foot-in">
      ${z.mode === 'fase' ? `<button class="btn btn-ghost" onclick="AP.lesson('${z.fid}', true)">Rever a lição</button>` : '<span class="foot-spacer"></span>'}
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
          <button class="chip" onclick="AP.lesson('${fa.id}', 'topics')">📖 Lição</button>
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
function viewProgress() {
  const { rows, proj, pass } = projection();
  const ready = proj !== null;
  const all = allNodes(); const doneN = all.filter(n => isDone(n.id)).length;
  const stat = (ico, v, l) => `<div class="stat-tile"><span>${ico}</span><div><b>${v}</b><small>${l}</small></div></div>`;
  const unitsProg = K.units.map(u => { const n = nodesOf(u); const d = n.filter(x => isDone(x.id)).length; return `<div class="u-prog"><span class="u-dot" style="background:${u.c}"></span><b>${u.title}</b><div class="bar thin"><i style="width:${d / n.length * 100}%;background:${u.c}"></i></div><small>${d}/${n.length}</small></div>`; }).join('');
  return `<div class="page fade narrow">
    <div class="page-title"><h1>Seu desenvolvimento até agora</h1><p class="muted">Tudo o que você já conquistou na trilha, nos tópicos e nos flashcards.</p></div>
    <div class="stat-grid">${stat('🔥', streakNow(), 'dias seguidos')}${stat('⚡', S.xp, 'XP • nível ' + level())}${stat('★', totalStars(), 'estrelas')}${stat('🗺️', doneN + '/' + all.length, 'fases concluídas')}${stat('🃏', fcKnown() + '/' + visibleCards().length, 'flashcards dominados')}${stat('🧠', Object.keys(S.errors).length, 'erros para revisar')}</div>
    <div class="card">
      <small class="eyebrow">NOTA PROJETADA NA PROVA</small>
      <div class="proj"><b class="${!ready ? 'c-faint' : pass ? 'c-green' : 'c-orange'}">${ready ? proj : '—'}</b><span>/ ${K.total} pts</span>
        ${ready ? `<span class="tag ${pass ? 'tag-green' : 'tag-gold'}">${pass ? 'APROVAÇÃO' : 'ABAIXO DO CORTE'}</span>` : ''}</div>
      <div class="bar-cut"><div class="bar ${pass ? '' : 'gold'}"><i style="width:${ready ? proj / K.total * 100 : 0}%"></i></div><span class="cut" style="left:${K.corte / K.total * 100}%"><em>corte ${K.corte}</em></span></div>
      <p class="muted small">${ready ? 'Calculada com a sua taxa de acerto na primeira tentativa, aplicada ao peso de cada bloco.' : 'Responda questões dos 3 blocos para ver a projeção.'}</p>
      <div class="stack">${rows.map(r => `<div class="area-row">
        <div class="row-between"><b>${r.a.nome}</b><b style="color:${r.a.cor}">${r.acc === null ? '—' : Math.round(r.acc * 100) + '%'}</b></div>
        <small class="muted">${r.a.q} questões × ${r.a.pts} pt = ${r.a.max} pts • projeção: ${r.proj === null ? '—' : r.proj.toFixed(1)} pts • ${r.s.r}/${r.s.t} acertos</small>
        <div class="bar thin"><i style="width:${r.acc === null ? 0 : r.acc * 100}%;background:${r.a.cor}"></i></div></div>`).join('')}</div>
      <div class="note">📌 Para passar: <b>${K.corte} de ${K.total} pontos</b> e <b>nenhuma disciplina zerada</b>. Exemplo: 14 acertos em Específicos (42 pts) + 6 em Português (12 pts) = 54.</div>
    </div>
    <div class="card"><small class="eyebrow">TRILHA POR UNIDADE</small><div class="stack">${unitsProg}</div></div>
    <div class="card settings">
      <small class="eyebrow">AJUSTES</small>
      <div><b>Cargo</b><div class="seg">${Object.entries(K.cargos).map(([id, c]) => `<button class="opt ${S.cargo === id ? 'sel' : ''}" onclick="AP.setCargo('${id}', true)">${c.emoji} ${c.curto}</button>`).join('')}</div></div>
      <div><b>Meta diária</b><div class="seg">${[30, 50, 100].map(g => `<button class="opt ${S.goal === g ? 'sel' : ''}" onclick="AP.setGoal(${g}, true)">${g} XP</button>`).join('')}</div></div>
      <div class="row-between"><b>Sons</b><button class="toggle ${S.sound ? 'on' : ''}" onclick="AP.toggleSound()" aria-label="Sons" aria-pressed="${S.sound}"></button></div>
      <button class="danger-link" onclick="AP.confirmReset()">Zerar todo o progresso deste concurso</button>
    </div>
  </div>`;
}

/* ---------- EDITAL ---------- */
function viewEdital() {
  const row = (l, v) => `<div class="kv"><span>${l}</span><b>${v}</b></div>`;
  const cg = K.cargos;
  return `<div class="page fade narrow">
    <button class="link-btn" onclick="AP.tab('home')">‹ Voltar para a trilha</button>
    <div class="page-title with-robo"><div><h1>Edital em 1 minuto</h1><p class="muted">${K.edital} • ${K.nome} • Banca ${K.banca}</p></div>${mascot(104, 'legislacao', { decorative: true })}</div>
    <div class="two">${Object.values(cg).map((c, i) => `<div class="hero-card ${i ? 'blue' : 'navy'}"><small>${c.curto}</small><h2>${c.vagas}</h2><p>vagas • ${c.nome}</p></div>`).join('')}</div>
    <div class="card"><small class="eyebrow">CARGO</small>${row('Salário', K.salario)}${row('Jornada', '40h semanais')}${row('Escolaridade', 'Ensino médio completo')}${row('ACS', 'Morar na área desde o edital')}</div>
    <div class="card"><small class="eyebrow">DATAS</small>${row('Inscrições', '17/11 a 22/12/2026')}${row('Taxa', 'R$ 94,00 (boleto até 23/12, 21h)')}${row('Prova objetiva', fmtDate(K.prova) + ' • 3 horas')}${row('ACS', 'Manhã: portão 8h, início 9h10')}${row('ACE', 'Tarde: portão 14h, início 15h10')}${row('Gabarito preliminar', '01/02/2027')}</div>
    <div class="card"><small class="eyebrow">ESTRUTURA DA PROVA • 40 QUESTÕES • 4 ALTERNATIVAS</small>
      <div class="stack">${Object.values(K.areas).map(a => `<div class="area-line"><span style="background:${a.cor}"></span><div class="grow"><b>${a.nome}</b><small class="muted">${a.q} questões × ${a.pts} pt</small></div><b style="color:${a.cor}">${a.max}</b></div>`).join('')}
      <div class="row-between total"><b>Total</b><b>${K.total} pts</b></div></div>
      <div class="note gold">Aprovação: mínimo de <b>${K.corte} pontos (60%)</b> e nenhuma disciplina zerada.</div></div>
    <div class="card"><small class="eyebrow">ETAPAS</small>${row('1. Prova objetiva', 'Eliminatória e classificatória')}${row('2. Títulos', 'Classificatória • até 8 pts')}${row('3. Curso de Formação Inicial', 'Eliminatório')}</div>
    <a class="btn btn-ghost" href="${K.editalUrl}" target="_blank" rel="noopener">📄 Abrir edital completo</a>
    <p class="muted small center-t">Inscrições em www.ibam-concursos.org.br</p>
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
  const goalHit = addXP(total);
  UI.result = { stars, xp: total, acc: z.firstTotal ? Math.round(z.firstRight / z.firstTotal * 100) : 100, combo: z.maxCombo, mode: z.mode, goalHit };
  UI.screen = 'result'; render(); window.scrollTo(0, 0); confetti();
}
const PRAISE = ['Mandou bem!', 'Excelente!', 'Isso aí!', 'Perfeito!', 'Arrasou!', 'Show!'];

window.AP = {
  go,
  onb(step) { UI.onbStep = step; render(); },
  setCargo(id, inApp) { S.cargo = id; if (inApp) save(); render(); },
  setGoal(v, inApp) { S.goal = v; if (inApp) save(); render(); },
  finishOnb() { S.onb = true; save(); UI.screen = 'tabs'; UI.tab = 'home'; UI.scrollToCurrent = true; render(); },
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
    z.checked = true; z.lastOk = ok; z.praise = PRAISE[Math.floor(Math.random() * PRAISE.length)];
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
      ${mascot(100, 'atencao')}<h3>Zerar tudo?</h3><p class="muted">XP, estrelas, sequência, flashcards e caderno de erros deste concurso serão apagados deste aparelho.</p>
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
  if (!UI || !S || !S.onb || R === 'inicio' || R === 'concursos') return;
  if (UI.screen === 'quiz' && !$layer.innerHTML) {
    const z = UI.quiz;
    if (!z.checked && ['1', '2', '3', '4', 'a', 'b', 'c', 'd'].includes(e.key.toLowerCase())) { const i = '1234'.indexOf(e.key) >= 0 ? '1234'.indexOf(e.key) : 'abcd'.indexOf(e.key.toLowerCase()); AP.pick(i); }
    else if (e.key === 'Enter') { e.preventDefault(); z.checked ? AP.next() : AP.verify(); }
  } else if (UI.screen === 'lesson' && e.key === 'Enter' && !$layer.innerHTML) {
    const L = UI.lesson; const c = FASES[L.fid].f.lesson[L.i];
    if (!c || c.t !== 'check' || L.ans !== null) { e.preventDefault(); AP.lessonNext(); }
  }
});
window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); });
render();
})();
