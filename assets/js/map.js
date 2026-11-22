/* =====================================================================
   Aprovaê — desenho da trilha: grama, caminho e ilustrações por tema
   ===================================================================== */
(function () {
  const W = 360, STEP = 118, TOP = 74;
  const OFFS = [0, 70, 100, 70, 0, -70, -100, -70];

  const shadow = (w = 28) => `<ellipse cx="0" cy="27" rx="${w}" ry="5.5" fill="#2f5d1e" opacity=".14"/>`;

  // Cada ilustração fica centrada em (0,0), com ~60px de largura
  const DECOR = {
    /* ---- Base do SUS ---- */
    clinic: `${shadow(32)}<rect x="-27" y="-12" width="54" height="38" rx="4" fill="#fff" stroke="#d3dce8" stroke-width="2"/>
      <path d="M-32 -10 L0 -30 L32 -10Z" fill="#2f80ed"/><rect x="-7" y="8" width="14" height="18" rx="2" fill="#9cc3f5"/>
      <rect x="-21" y="2" width="10" height="9" rx="2" fill="#d6e6fb"/><rect x="11" y="2" width="10" height="9" rx="2" fill="#d6e6fb"/>
      <rect x="-3" y="-14" width="6" height="15" rx="1.5" fill="#ef4444"/><rect x="-7.5" y="-9.5" width="15" height="6" rx="1.5" fill="#ef4444"/>`,
    law: `${shadow(30)}<path d="M0 -12 C-10 -18 -22 -18 -30 -14 V20 C-22 16 -10 16 0 22Z" fill="#fff" stroke="#c9d3e0" stroke-width="2"/>
      <path d="M0 -12 C10 -18 22 -18 30 -14 V20 C22 16 10 16 0 22Z" fill="#f8fafc" stroke="#c9d3e0" stroke-width="2"/>
      <g stroke="#9fb3cc" stroke-width="2" stroke-linecap="round"><path d="M-24 -6 h17 M-24 1 h17 M-24 8 h12 M7 -6 h17 M7 1 h17 M7 8 h12"/></g>
      <circle cx="0" cy="-22" r="7" fill="#ffb800"/><text x="0" y="-18.5" font-size="10" font-weight="900" text-anchor="middle" fill="#0b2a5b">§</text>`,
    people: `${shadow(30)}<g><circle cx="-16" cy="-6" r="7" fill="#f6c39b"/><path d="M-27 22 v-8 a11 11 0 0 1 22 0 v8Z" fill="#2f80ed"/></g>
      <g><circle cx="16" cy="-6" r="7" fill="#c98b60"/><path d="M5 22 v-8 a11 11 0 0 1 22 0 v8Z" fill="#f97316"/></g>
      <g><circle cx="0" cy="-12" r="8" fill="#e8a87c"/><path d="M-12 22 v-10 a12 12 0 0 1 24 0 v10Z" fill="#0b2a5b"/></g>`,
    heart: `${shadow(24)}<path d="M0 22 C-30 2 -26 -22 -10 -22 C-4 -22 0 -16 0 -12 C0 -16 4 -22 10 -22 C26 -22 30 2 0 22Z" fill="#ff6b81"/>
      <path d="M-18 -2 h8 l4 -8 l6 16 l4 -8 h14" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

    /* ---- Específicos: trabalho de campo ---- */
    house: `${shadow(30)}<rect x="-24" y="-6" width="48" height="32" rx="3" fill="#fff4df" stroke="#e7d3ae" stroke-width="2"/>
      <path d="M-30 -4 L0 -28 L30 -4Z" fill="#f97316"/><rect x="-7" y="8" width="14" height="18" rx="2" fill="#b7791f"/>
      <rect x="-19" y="2" width="9" height="9" rx="1.5" fill="#bfe3ff"/><rect x="10" y="2" width="9" height="9" rx="1.5" fill="#bfe3ff"/>`,
    tank: `${shadow(22)}<rect x="-16" y="6" width="4" height="20" fill="#94a3b8"/><rect x="12" y="6" width="4" height="20" fill="#94a3b8"/>
      <rect x="-20" y="-16" width="40" height="24" rx="6" fill="#38bdf8"/><ellipse cx="0" cy="-16" rx="20" ry="6" fill="#0ea5e9"/>
      <ellipse cx="0" cy="-18" rx="17" ry="4.5" fill="#0369a1"/><path d="M-14 -4 h28" stroke="#bae6fd" stroke-width="2.5" stroke-linecap="round"/>`,
    clipboard: `${shadow(22)}<rect x="-18" y="-22" width="36" height="46" rx="5" fill="#b7791f"/><rect x="-14" y="-16" width="28" height="36" rx="2" fill="#fff"/>
      <rect x="-8" y="-26" width="16" height="8" rx="3" fill="#64748b"/>
      <path d="M-9 -6 l3 3 l6 -6 M-9 6 l3 3 l6 -6" stroke="#58cc02" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 -5 h7 M3 7 h7" stroke="#cbd5e1" stroke-width="2.6" stroke-linecap="round"/>`,
    magnifier: `${shadow(20)}<path d="M8 8 L22 22" stroke="#7c4a1d" stroke-width="8" stroke-linecap="round"/>
      <circle cx="-4" cy="-4" r="17" fill="#e0f2fe" stroke="#0b2a5b" stroke-width="5"/><path d="M-13 -9 a10 10 0 0 1 8 -6" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>`,

    /* ---- Língua Portuguesa ---- */
    books: `${shadow(30)}<rect x="-28" y="10" width="56" height="13" rx="3" fill="#8b5cf6"/><rect x="-24" y="-3" width="50" height="13" rx="3" fill="#ffb800"/>
      <rect x="-26" y="-16" width="48" height="13" rx="3" fill="#2f80ed"/><path d="M-22 16 h44 M-18 3 h38 M-20 -10 h36" stroke="#fff" stroke-width="2" opacity=".55"/>`,
    pencil: `${shadow(20)}<g transform="rotate(-35)"><rect x="-8" y="-28" width="16" height="44" rx="2" fill="#ffb800"/><rect x="-8" y="-32" width="16" height="7" rx="2" fill="#ff8fa3"/>
      <path d="M-8 16 L0 30 L8 16Z" fill="#f6d7a7"/><path d="M-3 25 L0 30 L3 25Z" fill="#1f2937"/><path d="M-2.5 -24 v38" stroke="#e09600" stroke-width="2"/></g>`,
    bubble: `${shadow(26)}<path d="M-28 -20 h56 a8 8 0 0 1 8 8 v22 a8 8 0 0 1 -8 8 h-30 l-12 10 v-10 h-14 a8 8 0 0 1 -8 -8 v-22 a8 8 0 0 1 8 -8Z" fill="#fff" stroke="#d8ccff" stroke-width="2"/>
      <text x="0" y="8" font-size="20" font-weight="900" text-anchor="middle" fill="#6d3fd6" font-family="Nunito, sans-serif">Aa</text>`,
    abc: `${shadow(28)}<rect x="-28" y="-4" width="26" height="26" rx="5" fill="#ff6b81"/><rect x="2" y="-4" width="26" height="26" rx="5" fill="#2f80ed"/><rect x="-13" y="-30" width="26" height="26" rx="5" fill="#ffb800"/>
      <g font-size="15" font-weight="900" text-anchor="middle" fill="#fff" font-family="Nunito, sans-serif"><text x="-15" y="14">B</text><text x="15" y="14">C</text><text x="0" y="-12">A</text></g>`,

    /* ---- Saquarema ---- */
    church: `${shadow(34)}<path d="M-36 26 C-30 4 -14 -4 0 -4 C14 -4 30 4 36 26Z" fill="#9aa8a0"/>
      <rect x="-14" y="-6" width="28" height="22" fill="#fff" stroke="#d9e1e8" stroke-width="1.5"/><path d="M-17 -6 L0 -18 L17 -6Z" fill="#e9eef2"/>
      <rect x="-5" y="-34" width="10" height="30" fill="#fff" stroke="#d9e1e8" stroke-width="1.5"/><path d="M-7 -34 L0 -44 L7 -34Z" fill="#06a6c9"/>
      <path d="M0 -50 v-0 M0 -52 v8 M-3 -49 h6" stroke="#ffb800" stroke-width="2" stroke-linecap="round"/><path d="M-4 16 v-9 a4 4 0 0 1 8 0 v9Z" fill="#b7791f"/>`,
    waves: `<g fill="none" stroke-linecap="round" stroke-width="5"><path d="M-30 -6 q7.5 -8 15 0 t15 0 t15 0 t15 0" stroke="#06a6c9"/>
      <path d="M-26 6 q7.5 -8 15 0 t15 0 t15 0" stroke="#38bdf8"/><path d="M-30 18 q7.5 -8 15 0 t15 0 t15 0 t15 0" stroke="#7dd3fc"/></g>`,
    surf: `${shadow(16)}<g transform="rotate(18)"><ellipse cx="0" cy="-2" rx="11" ry="30" fill="#ffb800"/><path d="M0 -30 V26" stroke="#ff6b81" stroke-width="4"/><path d="M-4 20 l-6 8 h8Z" fill="#0b2a5b"/></g>`,
    sun: `<g stroke="#ffb800" stroke-width="4" stroke-linecap="round"><path d="M0 -30 v-6 M0 30 v6 M-30 0 h-6 M30 0 h6 M-21 -21 l-4 -4 M21 21 l4 4 M-21 21 l-4 4 M21 -21 l4 -4"/></g><circle r="18" fill="#ffd43b"/>`,
    boat: `${shadow(28)}<path d="M-28 6 h56 l-10 16 h-36Z" fill="#b7791f"/><path d="M0 4 V-30" stroke="#64748b" stroke-width="3"/><path d="M3 -28 L24 2 H3Z" fill="#fff" stroke="#d9e1e8"/><path d="M-3 -22 L-20 2 H-3Z" fill="#06a6c9"/>`
  };
  const THEMES = {
    sus: ['clinic', 'law', 'people', 'heart'],
    campo: ['house', 'tank', 'clipboard', 'magnifier'],
    letras: ['books', 'bubble', 'pencil', 'abc'],
    saquarema: ['church', 'waves', 'surf', 'boat', 'sun']
  };

  function rng(seed) { let s = seed * 9301 + 49297; return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }

  function layout(n) {
    const pts = [];
    for (let i = 0; i < n; i++) pts.push({ x: W / 2 + OFFS[i % OFFS.length], y: TOP + i * STEP });
    return { pts, H: TOP + (n - 1) * STEP + 92 };
  }
  function pathD(pts, H) {
    let d = `M ${pts[0].x} -10 L ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i], my = (a.y + b.y) / 2;
      d += ` C ${a.x} ${my}, ${b.x} ${my}, ${b.x} ${b.y}`;
    }
    const l = pts[pts.length - 1];
    return d + ` L ${l.x} ${H + 10}`;
  }

  /** Devolve o SVG de fundo (caminho + ilustrações) e as posições dos nós */
  function build(theme, n, seed) {
    const { pts, H } = layout(n);
    const kinds = THEMES[theme] || THEMES.sus;
    const r = rng(seed + 3);
    let tufts = '';
    for (let k = 0; k < n * 4; k++) {
      const y = 20 + r() * (H - 40), x = 14 + r() * (W - 28);
      const near = pts.reduce((m, p) => Math.abs(p.y - y) < Math.abs(m.y - y) ? p : m, pts[0]);
      if (Math.abs(near.x - x) < 58) continue;
      if (r() < 0.25) tufts += `<g transform="translate(${x.toFixed(0)} ${y.toFixed(0)})"><circle r="3.2" fill="#fff"/><circle r="1.5" fill="#ffd43b"/></g>`;
      else tufts += `<path transform="translate(${x.toFixed(0)} ${y.toFixed(0)})" d="M0 0 l-4 -8 M0 0 l0 -10 M0 0 l4 -8" stroke="#7fbf5c" stroke-width="2.2" stroke-linecap="round" fill="none"/>`;
    }
    let decor = '';
    pts.forEach((p, i) => {
      const off = OFFS[i % OFFS.length];
      const left = off > 0 ? true : off < 0 ? false : (i + seed) % 2 === 0;
      const x = left ? 56 : W - 56;
      const y = p.y + (i % 2 ? 14 : -4);
      const kind = kinds[(i + seed) % kinds.length];
      const s = 0.92 + ((i * 7 + seed) % 3) * 0.06;
      decor += `<g class="decor" transform="translate(${x} ${y}) scale(${s.toFixed(2)})">${DECOR[kind]}</g>`;
    });
    const d = pathD(pts, H);
    const svg = `<svg class="map-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      ${tufts}
      <path d="${d}" stroke="#d8c48e" stroke-width="44" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>
      <path d="${d}" stroke="#f4e6bd" stroke-width="36" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="${d}" stroke="#fbf3da" stroke-width="4" fill="none" stroke-dasharray="1 16" stroke-linecap="round"/>
      ${decor}
    </svg>`;
    return { svg, pts: pts.map(p => ({ left: p.x / W * 100, top: p.y / H * 100 })), ratio: `${W} / ${H}` };
  }

  window.AprovaeMap = { build, W };
})();
