/* Corchete · lógica de la app (vanilla JS, sin dependencias) */
(function () {
  "use strict";
  var D = window.CORCHETE;
  var KEY = "corchete.v1";
  var VERSION = 1;

  /* ---------- Estado persistente ---------- */
  var defaults = { version: VERSION, theme: "system", unit: "u1", cards: {}, best: {}, hist: [], an: {} };
  var S = load();
  var saveWarned = false;

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return clone(defaults);
      var s = JSON.parse(raw);
      if (!s || s.version !== VERSION) return clone(defaults);
      for (var k in defaults) if (!(k in s)) s[k] = clone(defaults[k]);
      return s;
    } catch (e) { return clone(defaults); }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); return true; }
    catch (e) {
      if (!saveWarned) { toast("No se pudo guardar el progreso en este navegador."); saveWarned = true; }
      return false;
    }
  }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  /* ---------- Utilidades ---------- */
  function $(sel, el) { return (el || document).querySelector(sel); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function fmt(s) {
    return esc(s)
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/_([^_]+)_/g, "<em>$1</em>");
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function unitById(id) { for (var i = 0; i < D.units.length; i++) if (D.units[i].id === id) return D.units[i]; return D.units[0]; }
  function palItem(pal, id) { var it = D.palettes[pal].items; for (var i = 0; i < it.length; i++) if (it[i].id === id) return it[i]; return null; }
  function accepts(ans, id) { return Array.isArray(ans) ? ans.indexOf(id) > -1 : ans === id; }
  function firstAns(ans) { return Array.isArray(ans) ? ans[0] : ans; }
  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }
  function tag(it) { return '<span class="tag" data-c="' + it.c + '">' + esc(it.ab) + "</span>"; }

  /* ---------- Tema ---------- */
  var THEMES = ["system", "light", "dark"];
  var THEME_LABEL = { system: "Tema: sistema", light: "Tema: cuaderno", dark: "Tema: pizarrón" };
  function applyTheme() {
    var r = document.documentElement;
    if (S.theme === "system") r.removeAttribute("data-theme"); else r.setAttribute("data-theme", S.theme);
    var btns = document.querySelectorAll("[data-theme-btn]");
    for (var i = 0; i < btns.length; i++) btns[i].textContent = THEME_LABEL[S.theme];
  }
  function cycleTheme() { S.theme = THEMES[(THEMES.indexOf(S.theme) + 1) % 3]; applyTheme(); save(); }

  /* ---------- Navegación ---------- */
  var VIEWS = ["inicio", "apuntes", "analizar", "pruebas", "fichas", "practica"];
  var ICONS = {
    inicio: '<path d="M4 11l8-6 8 6v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>',
    apuntes: '<path d="M6 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6z"/><path d="M9 3v18M12 8h4M12 12h4"/>',
    analizar: '<path d="M7 5H4v14h3M17 5h3v14h-3"/><path d="M9 12h6"/>',
    pruebas: '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><path d="M8 6h4a4 4 0 0 1 4 4M8 18h4a4 4 0 0 0 4-4"/>',
    fichas: '<rect x="3" y="7" width="14" height="12" rx="2"/><path d="M7 4h12a2 2 0 0 1 2 2v10"/>',
    practica: '<path d="M9 11l2 2 4-4"/><rect x="4" y="4" width="16" height="16" rx="3"/>'
  };
  var LABELS = { inicio: "Inicio", apuntes: "Apuntes", analizar: "Analizar", pruebas: "Pruebas", fichas: "Fichas", practica: "Práctica" };

  function navHTML() {
    return VIEWS.map(function (v) {
      return '<button class="navbtn" data-go="' + v + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[v] + "</svg><span>" + LABELS[v] + "</span></button>";
    }).join("");
  }
  function current() { var h = location.hash.replace("#", ""); return VIEWS.indexOf(h) > -1 ? h : "inicio"; }
  function go(v) { if (location.hash !== "#" + v) location.hash = v; else render(); }

  function render() {
    var v = current();
    var btns = document.querySelectorAll(".navbtn");
    for (var i = 0; i < btns.length; i++) {
      if (btns[i].getAttribute("data-go") === v) btns[i].setAttribute("aria-current", "page"); else btns[i].removeAttribute("aria-current");
    }
    /* Se reemplaza el contenedor para descartar los listeners de la vista anterior. */
    var old = $("#view"), el = old.cloneNode(false);
    old.parentNode.replaceChild(el, old);
    el.innerHTML = RENDER[v]();
    if (AFTER[v]) AFTER[v](el);
    window.scrollTo(0, 0);
  }

  /* ---------- Progreso ---------- */
  function cardKey(u, i) { return u + ":" + i; }
  function unitProgress(u) {
    var n = u.cards.length, done = 0;
    for (var i = 0; i < n; i++) if ((S.cards[cardKey(u.id, i)] || 0) >= 2) done++;
    return { n: n, done: done, pct: n ? Math.round(done * 100 / n) : 0 };
  }
  function pendingCount(uid) {
    var c = 0;
    D.units.forEach(function (u) {
      if (uid && u.id !== uid) return;
      u.cards.forEach(function (_, i) { if ((S.cards[cardKey(u.id, i)] || 0) < 2) c++; });
    });
    return c;
  }

  /* ---------- Render de una oración analizada ---------- */
  function sentenceHTML(item, opts) {
    opts = opts || {};
    return '<div class="sentence">' + item.parts.map(function (p, i) {
      if (!p[0]) return "";
      if (p[1] === null) return '<span class="plain">' + fmt(p[0]) + "</span>";
      var shown = opts.labels ? opts.labels[i] : null;
      var it = shown ? palItem(item.pal, shown) : null;
      var cls = "cons";
      var fix = "";
      if (opts.checked) {
        var ok = accepts(p[1], shown);
        cls += ok ? " is-ok" : " is-bad";
        if (!ok) fix = '<span class="cons__fix">→ ' + esc(palItem(item.pal, firstAns(p[1])).ab) + "</span>";
      }
      if (opts.active === i) cls += " is-active";
      var inner = '<span class="cons__text">' + fmt(p[0]) + '</span><span class="cons__label">' + (it ? tag(it) : "") + fix + "</span>";
      var c = it ? ' data-c="' + it.c + '"' : "";
      if (opts.interactive) return '<button type="button" class="' + cls + '"' + c + ' data-part="' + i + '" aria-label="' + esc(p[0].replace(/_/g, "")) + (it ? ": " + esc(it.name) : ": sin etiquetar") + '">' + inner + "</button>";
      return '<span class="' + cls + '"' + c + ">" + inner + "</span>";
    }).join("") + "</div>";
  }

  /* ================= INICIO ================= */
  function dailyItem() {
    var fun = D.analysis.filter(function (a) { return a.pal === "fun"; });
    var day = Math.floor(Date.now() / 86400000);
    return fun[day % fun.length];
  }
  function viewInicio() {
    var item = dailyItem();
    var labels = item.parts.map(function (p) { return p[1] === null ? null : firstAns(p[1]); });
    var pend = pendingCount();
    var h = '<header class="pagehead"><span class="eyebrow">Gramática 2025 · Profesorado en Letras · UNaF</span>' +
      "<h1>Cuaderno de análisis</h1>" +
      '<p class="lede">Apuntes, análisis guiado, pruebas de reconocimiento, fichas y práctica, todo con la bibliografía de la cátedra.</p></header>';

    h += '<section class="hero" aria-labelledby="od-title"><span class="eyebrow" id="od-title">Oración del día</span>' +
      sentenceHTML(item, { labels: labels }) +
      '<div class="hero__foot"><span class="src">' + esc(item.src) + '</span><button class="btn btn--primary" data-go="analizar">Analizar oraciones</button></div></section>';

    h += '<section class="quick" aria-label="Accesos rápidos">' +
      '<button data-go="fichas"><strong>Repasar fichas</strong><span>' + pend + " pendientes de " + D.units.reduce(function (a, u) { return a + u.cards.length; }, 0) + "</span></button>" +
      '<button data-sim="1"><strong>Simulacro de 10 preguntas</strong><span>Todas las unidades, con cronómetro</span></button>' +
      '<button data-tree="se"><strong>¿Qué se es?</strong><span>Árbol de decisión de Di Tullio</span></button>' +
      "</section>";

    h += '<section><h2 class="section-title">Unidades <span class="muted small">fichas dominadas · mejor práctica</span></h2><ul class="units">' +
      D.units.map(function (u) {
        var p = unitProgress(u);
        var best = S.best[u.id];
        return '<li><button class="unitrow" data-unit="' + u.id + '"><span class="unitrow__n">' + u.n + '</span><span><span class="unitrow__title">' + esc(u.title) +
          '</span><br><span class="unitrow__meta">' + esc(u.blurb) + '</span></span><span class="unitrow__score"><span class="meter" aria-hidden="true"><i style="width:' + p.pct + '%"></i></span>' +
          p.done + "/" + p.n + " · " + (best != null ? best + "%" : "—") + "</span></button></li>";
      }).join("") + "</ul></section>";

    if (S.hist.length) {
      h += '<section><h2 class="section-title">Últimas prácticas</h2><ul class="history">' +
        S.hist.slice(-5).reverse().map(function (r) {
          var name = r.u === "mix" ? "Todas las unidades" : unitById(r.u).title;
          return "<li><span>" + esc(name) + ' <span class="muted">· ' + (r.m === "sim" ? "simulacro" : "práctica") + "</span></span><span>" + r.s + "/" + r.n + "</span></li>";
        }).join("") + "</ul></section>";
    }
    return h;
  }
  function afterInicio(el) {
    el.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      if (b.dataset.unit) { S.unit = b.dataset.unit; save(); go("apuntes"); }
      else if (b.dataset.sim) { PR = { u: "mix", m: "sim" }; startQuiz(); go("practica"); }
      else if (b.dataset.tree) { TR = { id: b.dataset.tree, path: [] }; go("pruebas"); }
    });
  }

  /* ================= APUNTES ================= */
  function unitChips(active, withAll) {
    return '<div class="chips" role="group" aria-label="Unidad">' + (withAll ? '<button class="chip" data-u="all" aria-pressed="' + (active === "all") + '">Todas</button>' : "") +
      D.units.map(function (u) { return '<button class="chip" data-u="' + u.id + '" aria-pressed="' + (active === u.id) + '"><b>' + u.n + "</b>" + esc(u.short) + "</button>"; }).join("") + "</div>";
  }
  function viewApuntes() {
    var u = unitById(S.unit);
    var h = unitChips(u.id);
    h += '<header class="unithead"><h1><small>UNIDAD ' + u.n + "</small>" + esc(u.title) + '</h1><p class="lede">' + esc(u.blurb) + '</p><ul class="sources">' +
      u.sources.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul></header>";
    h += '<ol class="toc">' + u.sections.map(function (s, i) { return '<li><a href="#apuntes" data-sec="' + i + '">' + esc(s.t) + "</a></li>"; }).join("") + "</ol>";
    h += u.sections.map(function (s, i) {
      var b = '<article class="note" id="sec-' + i + '"><h2>' + esc(s.t) + "</h2>";
      (s.p || []).forEach(function (p) { b += "<p>" + fmt(p) + "</p>"; });
      if (s.k) b += "<ul>" + s.k.map(function (k) { return "<li>" + fmt(k) + "</li>"; }).join("") + "</ul>";
      if (s.p2) b += "<p>" + fmt(s.p2) + "</p>";
      if (s.table) {
        b += '<div class="tablewrap"><table><thead><tr>' + s.table.head.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          s.table.rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + fmt(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
      }
      if (s.ej) b += '<ul class="examples">' + s.ej.map(function (e) {
        var bad = e.charAt(0) === "*";
        return "<li" + (bad ? ' class="bad"' : "") + ">" + fmt(bad ? e.slice(1) : e) + "</li>";
      }).join("") + "</ul>";
      if (s.src) b += '<span class="src">' + esc(s.src) + "</span>";
      return b + "</article>";
    }).join("");
    var hasTree = D.trees.filter(function (t) { return t.u === u.id; })[0];
    h += '<div class="btnrow"><button class="btn btn--primary" data-act="quiz">Practicar esta unidad</button><button class="btn" data-act="cards">Fichas de esta unidad</button>' +
      (hasTree ? '<button class="btn" data-act="tree" data-id="' + hasTree.id + '">' + esc(hasTree.title) + "</button>" : "") + "</div>";
    return h;
  }
  function afterApuntes(el) {
    el.addEventListener("click", function (e) {
      var a = e.target.closest("[data-sec]");
      if (a) { e.preventDefault(); var t = $("#sec-" + a.dataset.sec); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
      var b = e.target.closest("button"); if (!b) return;
      if (b.dataset.u) { S.unit = b.dataset.u; save(); render(); }
      else if (b.dataset.act === "quiz") { PR = { u: S.unit, m: "prac" }; startQuiz(); go("practica"); }
      else if (b.dataset.act === "cards") { FC = { u: S.unit, queue: null }; go("fichas"); }
      else if (b.dataset.act === "tree") { TR = { id: b.dataset.id, path: [] }; go("pruebas"); }
    });
  }

  /* ================= ANALIZAR ================= */
  var AN = { filter: "all", idx: 0, labels: {}, active: null, checked: false };
  var AN_FILTERS = [["all", "Todas"], ["fun", "Funciones"], ["vb", "Construcciones verbales"], ["se", "Valores de se"], ["prop", "Proposiciones"]];
  function anList() { return D.analysis.map(function (a, i) { return i; }).filter(function (i) { return AN.filter === "all" || D.analysis[i].pal === AN.filter; }); }
  function anItem() { var l = anList(); if (AN.idx >= l.length) AN.idx = 0; return { gi: l[AN.idx], item: D.analysis[l[AN.idx]], n: l.length }; }
  function anReset() {
    AN.labels = {}; AN.checked = false; AN.active = null;
    var it = anItem().item;
    for (var i = 0; i < it.parts.length; i++) if (it.parts[i][1] !== null && it.parts[i][0]) { AN.active = i; break; }
  }
  function viewAnalizar() {
    var cur = anItem(), item = cur.item, pal = D.palettes[item.pal];
    var doneN = Object.keys(S.an).length;
    var h = '<header class="pagehead"><span class="eyebrow">Análisis guiado · ' + doneN + " de " + D.analysis.length + ' resueltas</span><h1>Analizar</h1>' +
      '<p class="lede">Tocá cada constituyente entre corchetes y elegí su etiqueta. Cuando termines, comprobá.</p></header>';
    h += '<div class="chips" role="group" aria-label="Tipo de análisis">' + AN_FILTERS.map(function (f) { return '<button class="chip" data-f="' + f[0] + '" aria-pressed="' + (AN.filter === f[0]) + '">' + esc(f[1]) + "</button>"; }).join("") + "</div>";
    h += '<section class="panel" style="display:grid;gap:22px"><div class="qhead"><span>Oración ' + (AN.idx + 1) + " de " + cur.n + " · " + esc(pal.name) + '</span><span class="mono">' + esc(unitById(item.u).short) + "</span></div>";
    h += sentenceHTML(item, { interactive: true, labels: AN.labels, active: AN.checked ? null : AN.active, checked: AN.checked });
    if (!AN.checked) {
      h += '<div class="field"><span>' + (AN.active != null ? "Etiqueta para: " + fmt(item.parts[AN.active][0]) : "Elegí un constituyente") + '</span><div class="palette">' +
        pal.items.map(function (it) { return '<button class="pal" data-lab="' + it.id + '"' + (AN.active == null ? " disabled" : "") + ">" + tag(it) + "<span>" + esc(it.name) + "</span></button>"; }).join("") + "</div></div>";
      var total = item.parts.filter(function (p) { return p[1] !== null && p[0]; }).length;
      var assigned = Object.keys(AN.labels).length;
      h += '<div class="btnrow"><button class="btn btn--primary" data-act="check"' + (assigned < total ? " disabled" : "") + ">Comprobar (" + assigned + "/" + total + ')</button><button class="btn" data-act="show">Ver respuesta</button></div>';
    } else {
      var ok = 0, tot = 0;
      item.parts.forEach(function (p, i) { if (p[1] !== null && p[0]) { tot++; if (accepts(p[1], AN.labels[i])) ok++; } });
      h += '<div class="feedback ' + (ok === tot ? "ok" : "bad") + '" role="status"><strong>' + (ok === tot ? "Todo correcto" : ok + " de " + tot + " correctas") + "</strong></div>";
      h += '<ul class="explain">' + item.parts.map(function (p) {
        if (p[1] === null || !p[0]) return "";
        var it = palItem(item.pal, firstAns(p[1]));
        return "<li>" + tag(it) + '<span><span class="q">' + fmt(p[0]) + "</span>" + (p[2] ? " — " + fmt(p[2]) : "") + "</span></li>";
      }).join("") + "</ul>";
      h += '<span class="src">' + esc(item.src) + "</span>";
    }
    h += '<div class="btnrow"><button class="btn" data-act="prev">Anterior</button><button class="btn" data-act="rand">Al azar</button><button class="btn' + (AN.checked ? " btn--primary" : "") + '" data-act="next">Siguiente</button></div></section>';
    return h;
  }
  function afterAnalizar(el) {
    el.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      var cur = anItem(), item = cur.item;
      if (b.dataset.f) { AN.filter = b.dataset.f; AN.idx = 0; anReset(); render(); return; }
      if (b.dataset.part != null && !AN.checked) { AN.active = +b.dataset.part; rerender(); return; }
      if (b.dataset.lab && AN.active != null) {
        AN.labels[AN.active] = b.dataset.lab;
        var nxt = null;
        for (var i = 0; i < item.parts.length; i++) { var j = (AN.active + 1 + i) % item.parts.length; if (item.parts[j][1] !== null && item.parts[j][0] && !(j in AN.labels)) { nxt = j; break; } }
        AN.active = nxt != null ? nxt : AN.active;
        rerender(); return;
      }
      var act = b.dataset.act;
      if (act === "check" || act === "show") {
        if (act === "show") item.parts.forEach(function (p, i) { if (p[1] !== null && p[0] && !(i in AN.labels)) AN.labels[i] = firstAns(p[1]); });
        AN.checked = true;
        if (act === "check") { S.an[cur.gi] = 1; save(); }
        rerender(); return;
      }
      if (act === "next") { AN.idx = (AN.idx + 1) % cur.n; anReset(); rerender(); }
      if (act === "prev") { AN.idx = (AN.idx - 1 + cur.n) % cur.n; anReset(); rerender(); }
      if (act === "rand") { AN.idx = Math.floor(Math.random() * cur.n); anReset(); rerender(); }
    });
  }
  function rerender() {
    var y = window.scrollY; var el = $("#view"); el.innerHTML = RENDER[current()](); window.scrollTo(0, y);
  }

  /* ================= PRUEBAS ================= */
  var TR = null;
  function treeById(id) { for (var i = 0; i < D.trees.length; i++) if (D.trees[i].id === id) return D.trees[i]; return null; }
  function viewPruebas() {
    var h = '<header class="pagehead"><span class="eyebrow">Pruebas de reconocimiento</span><h1>Pruebas</h1><p class="lede">Árboles de decisión armados con las pruebas de la bibliografía. Respondé paso a paso sobre tu oración.</p></header>';
    if (!TR || !treeById(TR.id)) {
      return h + '<div class="treelist">' + D.trees.map(function (t) {
        return '<button class="treecard" data-tree="' + t.id + '"><span class="mono small" style="color:var(--margin)">Unidad ' + unitById(t.u).n + "</span><strong>" + esc(t.title) + "</strong><span>" + esc(t.desc) + "</span></button>";
      }).join("") + "</div>";
    }
    var t = treeById(TR.id);
    var nodeId = TR.path.length ? TR.path[TR.path.length - 1].go : t.start;
    var node = t.nodes[nodeId];
    h = '<header class="pagehead"><span class="eyebrow">Unidad ' + unitById(t.u).n + " · Pruebas</span><h1>" + esc(t.title) + "</h1></header>";
    if (TR.path.length) {
      h += '<ol class="trail">' + TR.path.map(function (s) { return "<li><span>" + fmt(t.nodes[s.from].q) + "</span><b>" + fmt(s.l) + "</b></li>"; }).join("") + "</ol>";
    }
    h += '<section class="panel step" aria-live="polite">';
    if (node.r) {
      h += '<div class="result"><span class="eyebrow">Resultado</span><h2>' + esc(node.r) + "</h2><p>" + fmt(node.x) + "</p></div>";
    } else {
      h += "<h2>" + fmt(node.q) + "</h2>" + (node.h ? '<p class="help">' + fmt(node.h) + "</p>" : "") +
        '<div class="opts">' + node.opts.map(function (o, i) { return '<button class="opt" data-opt="' + i + '">' + fmt(o.l) + "</button>"; }).join("") + "</div>";
    }
    h += '</section><div class="btnrow">' + (TR.path.length ? '<button class="btn" data-act="back">Paso atrás</button><button class="btn" data-act="restart">Empezar de nuevo</button>' : "") +
      '<button class="btn" data-act="list">Todas las pruebas</button></div>';
    return h;
  }
  function afterPruebas(el) {
    el.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      if (b.dataset.tree) { TR = { id: b.dataset.tree, path: [] }; render(); return; }
      if (!TR) return;
      var t = treeById(TR.id);
      if (b.dataset.opt != null) {
        var from = TR.path.length ? TR.path[TR.path.length - 1].go : t.start;
        var o = t.nodes[from].opts[+b.dataset.opt];
        TR.path.push({ from: from, go: o.go, l: o.l }); rerender(); return;
      }
      if (b.dataset.act === "back") { TR.path.pop(); rerender(); }
      if (b.dataset.act === "restart") { TR.path = []; rerender(); }
      if (b.dataset.act === "list") { TR = null; render(); }
    });
  }

  /* ================= FICHAS ================= */
  var FC = { u: "all", queue: null, flipped: false, all: false };
  function buildQueue() {
    var q = [];
    D.units.forEach(function (u) {
      if (FC.u !== "all" && u.id !== FC.u) return;
      u.cards.forEach(function (c, i) { var bx = S.cards[cardKey(u.id, i)] || 0; if (FC.all || bx < 2) q.push({ u: u.id, i: i, bx: bx }); });
    });
    q = shuffle(q).sort(function (a, b) { return a.bx - b.bx; });
    FC.queue = q; FC.flipped = false;
  }
  function boxCounts() {
    var c = [0, 0, 0];
    D.units.forEach(function (u) {
      if (FC.u !== "all" && u.id !== FC.u) return;
      u.cards.forEach(function (_, i) { c[S.cards[cardKey(u.id, i)] || 0]++; });
    });
    return c;
  }
  function viewFichas() {
    if (!FC.queue) buildQueue();
    var c = boxCounts();
    var h = '<header class="pagehead"><span class="eyebrow">Repaso espaciado</span><h1>Fichas</h1><p class="lede">Leé la pregunta, pensá la respuesta y girá la ficha. Si la sabías, pasa a dominadas; si no, vuelve al repaso.</p></header>';
    h += unitChips(FC.u, true);
    h += '<div class="boxes"><div><b>' + c[0] + "</b><span>Nuevas</span></div><div><b>" + c[1] + "</b><span>En repaso</span></div><div><b>" + c[2] + "</b><span>Dominadas</span></div></div>";
    if (!FC.queue.length) {
      h += '<section class="panel step"><h2>No quedan fichas pendientes</h2><p class="muted">Dominaste todas las fichas de esta selección.</p><div class="btnrow"><button class="btn btn--primary" data-act="all">Repasar todas igual</button><button class="btn" data-act="reset">Reiniciar esta selección</button></div></section>';
      return h;
    }
    var cur = FC.queue[0], u = unitById(cur.u), card = u.cards[cur.i];
    h += '<div class="qhead"><span>' + FC.queue.length + " en la pila" + (FC.all ? " (todas)" : "") + '</span><span class="mono">U' + u.n + " · " + esc(u.short) + "</span></div>";
    h += '<div class="flash' + (FC.flipped ? " is-flipped" : "") + '"><div class="flash__inner" role="button" tabindex="0" data-act="flip" aria-label="Girar ficha">' +
      '<div class="flash__face"><span class="flash__hint">Pregunta</span><p>' + fmt(card.f) + '</p></div>' +
      '<div class="flash__face flash__face--back"><span class="flash__hint">Respuesta</span><p>' + fmt(card.b) + "</p></div></div></div>";
    h += '<div class="btnrow">' + (FC.flipped ? '<button class="btn" data-act="again">Repasar</button><button class="btn btn--primary" data-act="know">La sé</button>' : '<button class="btn btn--primary" data-act="flip">Girar ficha</button>') + "</div>";
    return h;
  }
  function afterFichas(el) {
    function flip() { FC.flipped = !FC.flipped; var f = $(".flash", el); if (f) f.classList.toggle("is-flipped", FC.flipped); var row = $(".btnrow", el); if (row) row.innerHTML = FC.flipped ? '<button class="btn" data-act="again">Repasar</button><button class="btn btn--primary" data-act="know">La sé</button>' : '<button class="btn btn--primary" data-act="flip">Girar ficha</button>'; }
    el.addEventListener("click", function (e) {
      var b = e.target.closest("[data-u],[data-act]"); if (!b) return;
      if (b.dataset.u) { FC.u = b.dataset.u; FC.all = false; buildQueue(); rerender(); return; }
      var a = b.dataset.act;
      if (a === "flip") { flip(); return; }
      if (a === "know" || a === "again") {
        var cur = FC.queue.shift(), k = cardKey(cur.u, cur.i);
        if (a === "know") S.cards[k] = 2;
        else { S.cards[k] = 1; FC.queue.push({ u: cur.u, i: cur.i, bx: 1 }); }
        save(); FC.flipped = false; rerender(); return;
      }
      if (a === "all") { FC.all = true; buildQueue(); rerender(); }
      if (a === "reset") {
        D.units.forEach(function (u) { if (FC.u !== "all" && u.id !== FC.u) return; u.cards.forEach(function (_, i) { delete S.cards[cardKey(u.id, i)]; }); });
        save(); FC.all = false; buildQueue(); rerender(); toast("Fichas reiniciadas.");
      }
    });
    el.addEventListener("keydown", function (e) {
      if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("flash__inner")) { e.preventDefault(); flip(); }
    });
  }

  /* ================= PRÁCTICA ================= */
  var PR = { u: "all", m: "prac" };
  var QZ = null;
  function startQuiz() {
    var pool = [];
    D.units.forEach(function (u) { if (PR.u !== "mix" && PR.u !== "all" && u.id !== PR.u) return; u.quiz.forEach(function (q, i) { pool.push({ u: u.id, q: q, i: i }); }); });
    pool = shuffle(pool);
    if (PR.m === "sim") pool = pool.slice(0, 10);
    else if (PR.u === "all" || PR.u === "mix") pool = pool.slice(0, 15);
    QZ = {
      items: pool.map(function (p) { var order = shuffle(p.q.o.map(function (_, i) { return i; })); return { u: p.u, q: p.q, order: order, pick: null }; }),
      i: 0, t0: Date.now(), done: false, u: PR.u === "all" ? "mix" : PR.u, m: PR.m
    };
  }
  function viewPractica() {
    var h;
    if (!QZ) {
      h = '<header class="pagehead"><span class="eyebrow">Autoevaluación</span><h1>Práctica</h1><p class="lede">Elegí una unidad y un modo. En práctica ves la explicación después de cada respuesta; el simulacro corrige al final.</p></header>';
      h += '<section class="panel setup"><div class="field"><span>Unidad</span>' + unitChips(PR.u === "mix" ? "all" : PR.u, true) + "</div>" +
        '<div class="field"><span>Modo</span><div class="seg"><button class="chip" data-m="prac" aria-pressed="' + (PR.m === "prac") + '">Práctica con explicación</button><button class="chip" data-m="sim" aria-pressed="' + (PR.m === "sim") + '">Simulacro · 10 preguntas</button></div></div>' +
        '<div class="btnrow"><button class="btn btn--primary" data-act="start">Empezar</button></div></section>';
      if (S.hist.length) {
        h += '<section><h2 class="section-title">Historial</h2><ul class="history">' + S.hist.slice(-10).reverse().map(function (r) {
          var d = new Date(r.t);
          return "<li><span>" + esc(r.u === "mix" ? "Todas las unidades" : unitById(r.u).title) + ' <span class="muted">· ' + (r.m === "sim" ? "simulacro" : "práctica") + " · " + d.toLocaleDateString("es-AR") + "</span></span><span>" + r.s + "/" + r.n + "</span></li>";
        }).join("") + "</ul></section>";
      }
      return h;
    }
    if (QZ.done) return viewResults();
    var it = QZ.items[QZ.i], q = it.q, n = QZ.items.length;
    h = '<div class="qhead"><span>Pregunta ' + (QZ.i + 1) + " de " + n + '</span><span class="mono">' + (QZ.m === "sim" ? '<span id="clock">0:00</span> · ' : "") + "U" + unitById(it.u).n + "</span></div>";
    h += '<div class="progress"><i style="width:' + Math.round(QZ.i * 100 / n) + '%"></i></div>';
    h += '<section class="panel step"><p class="question">' + fmt(q.q) + '</p><div class="answers">' + it.order.map(function (oi, k) {
      var cls = "answer";
      var reveal = QZ.m === "prac" && it.pick !== null;
      if (reveal) { if (oi === q.a) cls += " is-ok"; else if (oi === it.pick) cls += " is-bad"; }
      else if (it.pick === oi) cls += " is-picked";
      return '<button class="' + cls + '" data-pick="' + oi + '"' + (reveal ? " disabled" : "") + "><b>" + "abcd".charAt(k) + ")</b><span>" + fmt(q.o[oi]) + "</span></button>";
    }).join("") + "</div>";
    if (QZ.m === "prac" && it.pick !== null) {
      var ok = it.pick === q.a;
      h += '<div class="feedback ' + (ok ? "ok" : "bad") + '" role="status"><strong>' + (ok ? "Correcto" : "Incorrecto") + "</strong><span>" + fmt(q.x) + "</span></div>";
    }
    h += "</section>";
    var canNext = it.pick !== null;
    h += '<div class="btnrow"><button class="btn btn--primary" data-act="next"' + (canNext ? "" : " disabled") + ">" + (QZ.i === n - 1 ? "Ver resultado" : "Siguiente") + '</button><button class="btn" data-act="quit">Salir</button></div>';
    return h;
  }
  function viewResults() {
    var ok = QZ.items.filter(function (it) { return it.pick === it.q.a; }).length, n = QZ.items.length;
    var secs = Math.round((QZ.t1 - QZ.t0) / 1000);
    var h = '<header class="pagehead"><span class="eyebrow">' + (QZ.m === "sim" ? "Simulacro" : "Práctica") + " · " + esc(QZ.u === "mix" ? "Todas las unidades" : unitById(QZ.u).title) + "</span>" +
      '<div class="score">' + ok + "<small> / " + n + "</small></div>" +
      '<p class="lede">' + Math.round(ok * 100 / n) + "% de aciertos" + (QZ.m === "sim" ? " en " + Math.floor(secs / 60) + ":" + ("0" + (secs % 60)).slice(-2) : "") + ".</p></header>";
    var wrong = QZ.items.filter(function (it) { return it.pick !== it.q.a; });
    if (wrong.length) {
      h += '<section><h2 class="section-title">Para revisar</h2><ul class="reviewlist">' + wrong.map(function (it) {
        return '<li><span class="question" style="font-size:1rem">' + fmt(it.q.q) + '</span><span><span class="muted">Tu respuesta:</span> ' + fmt(it.q.o[it.pick]) + '</span><span><span class="muted">Correcta:</span> <strong>' + fmt(it.q.o[it.q.a]) + "</strong></span><span>" + fmt(it.q.x) + "</span></li>";
      }).join("") + "</ul></section>";
    } else h += '<div class="feedback ok"><strong>Sin errores</strong><span>Respondiste todo bien.</span></div>';
    h += '<div class="btnrow"><button class="btn btn--primary" data-act="again">Repetir</button><button class="btn" data-act="setup">Elegir otra práctica</button></div>';
    return h;
  }
  function finishQuiz() {
    QZ.done = true; QZ.t1 = Date.now();
    var ok = QZ.items.filter(function (it) { return it.pick === it.q.a; }).length, n = QZ.items.length;
    var pct = Math.round(ok * 100 / n);
    if (QZ.u !== "mix") S.best[QZ.u] = Math.max(S.best[QZ.u] || 0, pct);
    S.hist.push({ t: Date.now(), u: QZ.u, s: ok, n: n, m: QZ.m });
    if (S.hist.length > 40) S.hist = S.hist.slice(-40);
    save();
  }
  var clockTimer = null;
  function afterPractica(el) {
    clearInterval(clockTimer);
    if (QZ && !QZ.done && QZ.m === "sim") {
      clockTimer = setInterval(function () {
        var c = $("#clock"); if (!c) { clearInterval(clockTimer); return; }
        var s = Math.round((Date.now() - QZ.t0) / 1000); c.textContent = Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2);
      }, 1000);
    }
    el.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      if (!QZ) {
        if (b.dataset.u) { PR.u = b.dataset.u === "all" ? "all" : b.dataset.u; rerender(); }
        if (b.dataset.m) { PR.m = b.dataset.m; rerender(); }
        if (b.dataset.act === "start") { startQuiz(); render(); }
        return;
      }
      if (b.dataset.pick != null) {
        var it = QZ.items[QZ.i];
        if (QZ.m === "prac" && it.pick !== null) return;
        it.pick = +b.dataset.pick; rerender(); return;
      }
      var a = b.dataset.act;
      if (a === "next") { if (QZ.i < QZ.items.length - 1) { QZ.i++; render(); } else { finishQuiz(); render(); } }
      if (a === "quit" || a === "setup") { QZ = null; render(); }
      if (a === "again") { startQuiz(); render(); }
    });
  }

  /* ---------- Registro de vistas ---------- */
  var RENDER = { inicio: viewInicio, apuntes: viewApuntes, analizar: viewAnalizar, pruebas: viewPruebas, fichas: viewFichas, practica: viewPractica };
  var AFTER = { inicio: afterInicio, apuntes: afterApuntes, analizar: afterAnalizar, pruebas: afterPruebas, fichas: afterFichas, practica: afterPractica };

  /* ---------- Arranque ---------- */
  function boot() {
    applyTheme();
    document.querySelectorAll("[data-nav]").forEach(function (n) { n.innerHTML = navHTML(); });
    document.addEventListener("click", function (e) {
      var g = e.target.closest("[data-go]");
      if (g && !e.target.closest("#view [data-unit]")) { go(g.dataset.go); }
      if (e.target.closest("[data-theme-btn]")) cycleTheme();
    });
    window.addEventListener("hashchange", render);
    anReset();
    render();

    var sp = $("#splash");
    if (sp) {
      requestAnimationFrame(function () { sp.classList.add("ready"); });
      var hide = function () { sp.classList.add("out"); setTimeout(function () { sp.hidden = true; }, 520); };
      var t = setTimeout(hide, 1500);
      sp.addEventListener("click", function () { clearTimeout(t); hide(); });
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
