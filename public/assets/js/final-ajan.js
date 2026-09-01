/* JADSTACK LOTTO FINAL JS — consolidated in original execution order. Backend/API calls preserved. */

(function(){var s=localStorage.getItem('theme');if(s==='dark'||s==='light'){document.documentElement.dataset.theme=s;/* senkronize klas v72-dark la depi chajman paj la, anvan premye "paint",
   pou de mekanis tèm yo pa janm dezakò yon ti moman (evite "flash" koulè). */if(document.body)document.body.classList.toggle('v72-dark',s==='dark');else document.addEventListener('DOMContentLoaded',function(){document.body.classList.toggle('v72-dark',s==='dark');});}})();

/* =====================================================================
 * JADSTACK LOTTO — KONSTAN SANTRAL (v6)
 * Tous konstan sit la (tèks, imel, tel, lyen, pri, ikon) rasanble isit la.
 * Yo sèvi kòm VALÈ DEFO; tab `site_config` nan Supabase ka reekri yo
 * depi panel Super Admin -> "Modifier le système" (san touche kòd la).
 * ===================================================================== */
window.__SUPABASE_URL__ = "https://lauyrbuyegsgibfoawme.supabase.co";
window.__SUPABASE_ANON_KEY__ = "sb_publishable_lgCuP68AmL8lwVYAL6VWgg_1n0X7jKz";

window.JADSTACK_DEFAULTS = {
  version: "9.4-V79",

  brand: {
    name: "JADSTACK LOTTO",
    tagline: "Système de gestion de loterie multi-entreprises",
    logo_wide: "",     // L'administration le charge dans le bucket `public-branding`
    logo_mark: "",     // idem (vèsyon kare/wonn)
    favicon: ""
  },

  // Tèm separe an "light" ak "dark" pou yo pa janm chevoche (fè mòd fonse
  // itilize menm koulè ak mòd klè). Super Admin ka modifye chak grenn ladan
  // yo apa nan panel "Modifier le système -> En-tête, logo & couleurs".
  theme: {
    light: {
      "--primary": "#0E4C74",
      "--primary-hover": "#0A3A59",
      "--accent": "#D9A441",
      "--dark": "#0A2E44",
      "--bg": "#F6F8FA",
      "--surface": "#FFFFFF",
      "--text": "#12202B",
      "--radius": "14px"
    },
    dark: {
      "--primary": "#4FA3C7",
      "--primary-hover": "#6BB6D6",
      "--accent": "#E8BB5D",
      "--dark": "#040D14",
      "--bg": "#0A161F",
      "--surface": "#101E29",
      "--text": "#E7EEF3",
      "--radius": "14px"
    }
  },

  landing: {
    badge: "JADSTACK LOTTO",
    hero_title_1: "Lancez votre loterie avec",
    hero_title_2: "JadStack Lotto",
    hero_sub: "Gérez les compagnies, les agents, les tickets, les tirages et les rapports — le tout sur une seule plateforme rapide, sécurisée et en temps réel.",
    cta_primary: "Commencer — Se connecter",
    cta_secondary: "Demander une démo",
    mock: [
      { k: "Ventes totales", v: "18,226" },
      { k: "À payer",   v: "10,750" },
      { k: "Solde",     v: "7,476" }
    ],
    help_eyebrow: "NOS SERVICES",
    help_title: "En quoi JADSTACK LOTTO vous aide-t-il ?",
    help_sub: "Des outils concrets pour le quotidien de la banque de loterie.",
    help_cards: [
      { i: "fa-file-lines",     t: "Créer une fiche rapide" },
      { i: "fa-lightbulb",      t: "Fonctions automatisées" },
      { i: "fa-chart-column",   t: "Rapports fluides" },
      { i: "fa-briefcase",      t: "Limites de boules" },
      { i: "fa-chart-pie",      t: "Statistiques" },
      { i: "fa-rocket",         t: "Plus de tirages" },
      { i: "fa-building-columns", t: "Options prépayées" },
      { i: "fa-headset",        t: "Support 7/7" }
    ],
    clean_eyebrow: "CLEAN & CLEAR",
    clean_title: "Des informations claires, une interface moderne et épurée",
    clean_sub: "Chaque rôle dispose de son espace : Super Administrateur, Compagnie, Superviseur et Agent.",
    clean_cards: [
      { i: "fa-layer-group",    t: "Multi-tenant", d: "Chaque compagnie dispose de son propre espace et de ses propres agents." },
      { i: "fa-bolt",           t: "POS Rapid",    d: "Vendez des tickets en quelques secondes, avec impression automatique." },
      { i: "fa-shield-halved",  t: "Sécurité",     d: "RLS, journal d’audit, verrouillage IMEI et contrôle complet." },
      { i: "fa-chart-line",     t: "Rapport",         d: "Ventes, primes, solde — en temps réel." }
    ],
    plans_eyebrow: "TARIF",
    plans_title: "Forfait",
    plans_sub: "Choisissez le plan adapté à vos besoins.",
    plans: [
      { name: "Debaz",      price: "$29 / mwa", featured: false, items: ["10 agents", "Rapports de base", "Support e-mail"] },
      { name: "Pro",        price: "$79 / mwa", featured: true,  items: ["50 agents", "Rapports avancés", "Support 24/7"] },
      { name: "Enterprise", price: "Contacter",  featured: false, items: ["Agents illimités", "Domaine personnalisé", "SLA"] }
    ],
    faq_eyebrow: "FAQ",
    faq_title: "Questions fréquentes",
    faq_sub: "Réponses rapides.",
    faq: [
      { q: "Fonctionne-t-il hors ligne ?", a: "Le POS conserve un cache local et se synchronise automatiquement." },
      { q: "Comment le solde est-il calculé ?", a: "Solde = Ventes − À payer. Aucune commission n'est appliquée dans le système." },
      { q: "Puis-je utiliser mon propre logo ?", a: "Oui — le Super Administrateur téléverse le logo et il s’applique automatiquement partout." }
    ]
  },

  footer: {
    blurb: "Améliorez la gestion de votre entreprise de loterie avec JADSTACK LOTTO.",
    legal_title: "Mentions légales",
    legal_links: [
      { label: "Conditions d’utilisation", href: "legal.html#terms" },
      { label: "Politique de confidentialité", href: "legal.html#privacy" }
    ],
    contact_title: "Contact",
    email: "jadstacklotto@gmail.com",
    phone: "+50940973833",
    whatsapp: "+50940973833",
    address: "#55, Darbonne, Léogâne HTI",
    copyright: "© Jadstackstudio 2026 — tous droits réservés — JADSTACK LOTTO",
    socials: [
      { icon: "fa-brands fa-whatsapp", label: "WhatsApp", url: "https://wa.me/50940973833" },
      { icon: "fa-brands fa-facebook", label: "Facebook", url: "https://www.facebook.com/share/1HBXzKPJdt/?mibextid=wwXIfr" },
      { icon: "fa-brands fa-youtube",  label: "YouTube",  url: "" }
    ]
  },

  contact: {
    title: "Contactez-nous",
    sub: "Écrivez-nous — nous répondons en moins de 24 h.",
    emails: [
      { email: "ruthnodev@gmail.com",      active: true },
      { email: "jadstacklotto@gmail.com", active: true }
    ],
    subject_prefix: "JADSTACK LOTTO — Contact",
    whatsapp: "+50940973833",
    success_msg: "Votre message est parti ! Nous vous répondrons très vite."
  },

  legal: {
    terms_title: "Conditions d’utilisation",
    terms_body: "Le service JADSTACK LOTTO est fourni pour la gestion des opérations de loterie. Chaque compagnie est responsable des données qu'elle saisit.",
    privacy_title: "Politique de confidentialité",
    privacy_body: "Nous collectons uniquement les données nécessaires au fonctionnement du service. Nous ne vendons aucune donnée personnelle.",
    responsibility_title: "Responsabilité de l’utilisateur & sécurité des données",
    responsibility_body: "Fonctionnement du système : chaque fiche (ticket) créée par un agent est enregistrée directement dans le système en temps réel ; les résultats des tirages sont saisis par le Super Admin ou le Mini Super Admin (Employeur), puis les tickets sont évalués automatiquement. Responsabilité de l’utilisateur : toute personne qui saisit des données dans le système — Super Admin, Mini Super Admin, Compagnie, Agent — est responsable de leur exactitude. Ne créez pas de fiche pour plaisanter : chaque ticket créé engage de l’argent réel. Cas particulier — annulation d’une fiche : si une Compagnie supprime ou demande l’annulation d’une fiche sans approbation préalable du Super Admin ou du Mini Super Admin, la Compagnie est responsable en cas d’erreur ; dans ce cas, contactez immédiatement le support par WhatsApp ou par e-mail à jadstacklotto@gmail.com. Sécurité des données : les données des utilisateurs (nom, contacts, historique des tickets) sont conservées avec un accès limité selon le rôle de chacun (Agent, Compagnie, Mini Super Admin, Super Admin) ; aucune donnée n’est partagée avec des tiers sans consentement."
  },

  /* v9.4 §Faz1 — Kle `notify` a DWE toujou egziste.
     San li, sys-mail te fè JSON.parse(JSON.stringify(undefined)) epi paj
     super-admin nan te plante ak: SyntaxError: "undefined" is not valid JSON. */
  notify: {
    enabled: true,
    subject_prefix: "JADSTACK LOTTO",
    ghost_enabled: true,
    recipients: [{ email: "jadstacklotto@gmail.com", active: true }]
  },


  ticket: {
    system_name: "JADSTACK LOTTO",
    dotted: "- - - - - - - - - - - - - - -",
    legal: "La fiche est payable uniquement au porteur, une seule fois. Le montant doit être réclamé dans les 90 jours."
  },

  ops: {
    states: ["Georgia", "Texas", "Tennessee", "New York"],
    bet_formats: {
      borlette: { digits: 2, label: "Borlette" },
      lotto3:   { digits: 3, label: "Lotto 3" },
      lotto4:   { digits: 4, label: "Lotto 4" },
      lotto5:   { digits: 5, label: "Lotto 5" },
      mariage:  { digits: 4, label: "Mariage" }
    },
    max_ticket_amount: 100000,
    min_bet_amount: 1,
    session_timeout_min: 30
  }
};


/* =====================================================================
 * offline-guard.js (V49)
 * ---------------------------------------------------------------------
 * 1) Detekte koneksyon entènèt pèdi (navigator.onLine + ti "ping" reyèl
 *    sou Supabase, paske navigator.onLine sèl pa toujou fyab).
 * 2) Lè koneksyon pèdi: ti banyè anwo ekran an ("Aucune connexion...").
 * 3) Si li rete pèdi plis pase 5 minit: yon EKRAN CONPLE ki kache TOUT
 *    UI (z-index maksimòm) — moun nan pa ka klike/wè anyen dèyè l —
 *    jiskaske koneksyon an tounen. Li eseye rekonekte otomatikman.
 * 4) Du koneksyon an tounen: tout bagay disparèt, ekran an rekòmanse
 *    nòmal san moun nan pa gen pou refè aksyon li te fè a men.
 * Enkli senp sou nenpòt paj: <script defer src="assets/js/offline-guard.js"></script>
 * ===================================================================== */
(function () {
  window.Lotri = window.Lotri || {};
  if (window.Lotri.offlineGuard) return;

  var FULL_SCREEN_AFTER_MS = 5 * 60 * 1000; // 5 minit
  var PING_INTERVAL_MS     = 15 * 1000;     // eseye rekonekte chak 15s
  var PING_URL_FALLBACK    = 'favicon.svg?ping=' ;

  var offlineSince = null;
  var pingTimer = null;
  var fullscreenTimer = null;
  var banner = null;
  var overlay = null;

  function ensureStyles() {
    if (document.getElementById('lotri-offline-style')) return;
    var s = document.createElement('style');
    s.id = 'lotri-offline-style';
    s.textContent = [
      '.lotri-offline-banner{position:fixed;top:0;left:0;right:0;z-index:99998;',
      'display:flex;align-items:center;justify-content:center;gap:.5rem;',
      'padding:.55rem 1rem;font:600 .85rem/1.3 Inter,system-ui,sans-serif;',
      'background:var(--warning-soft,#FAF0D6);color:var(--warning,#B5810E);',
      'border-bottom:1px solid rgba(0,0,0,.08);transform:translateY(-110%);',
      'pointer-events:none;transition:transform .25s ease}',
      '.lotri-offline-banner.show{transform:translateY(0);pointer-events:auto}',
      '.lotri-offline-overlay{position:fixed;inset:0;z-index:99999;',
      'background:var(--bg,#0A161F);display:flex;align-items:center;justify-content:center;',
      'opacity:0;pointer-events:none;visibility:hidden;transition:opacity .3s ease}',
      '.lotri-offline-overlay.show{opacity:1;pointer-events:all;visibility:visible}',
      '.lotri-offline-card{max-width:22rem;padding:2rem 1.75rem;text-align:center;',
      'font-family:Inter,system-ui,sans-serif;color:var(--text,#eef2f6)}',
      '.lotri-offline-icon{width:56px;height:56px;margin:0 auto 1.1rem;border-radius:50%;',
      'display:flex;align-items:center;justify-content:center;font-size:1.5rem;',
      'background:var(--danger-soft,#33110E);color:var(--danger,#E4695C)}',
      '.lotri-offline-card h2{font-size:1.05rem;margin:0 0 .4rem}',
      '.lotri-offline-card p{font-size:.85rem;opacity:.7;margin:0 0 1.4rem}',
      '.lotri-offline-dots{display:inline-flex;gap:.3rem;margin-bottom:1.2rem}',
      '.lotri-offline-dots span{width:6px;height:6px;border-radius:50%;',
      'background:var(--accent,#4f8cff);opacity:.35;animation:lotriOfflinePulse 1.1s infinite}',
      '.lotri-offline-dots span:nth-child(2){animation-delay:.15s}',
      '.lotri-offline-dots span:nth-child(3){animation-delay:.3s}',
      '@keyframes lotriOfflinePulse{0%,80%,100%{opacity:.25}40%{opacity:1}}',
      '.lotri-offline-retry{border:0;border-radius:.6rem;padding:.6rem 1.3rem;font:600 .85rem Inter,sans-serif;',
      'background:var(--accent,#4f8cff);color:#fff;cursor:pointer}',
      '.lotri-offline-retry:active{transform:scale(.97)}'
    ].join('');
    document.head.appendChild(s);
  }

  function ensureBanner() {
    if (banner) return banner;
    banner = document.createElement('div');
    banner.className = 'lotri-offline-banner';
    banner.setAttribute('role', 'status');
    banner.innerHTML = '<i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>' +
      '<span>Aucune connexion Internet — tentative de reconnexion…</span>';
    document.body.appendChild(banner);
    return banner;
  }

  function ensureOverlay() {
    if (overlay) return overlay;
    overlay = document.createElement('div');
    overlay.className = 'lotri-offline-overlay';
    overlay.setAttribute('role', 'alertdialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<div class="lotri-offline-card">' +
        '<div class="lotri-offline-icon"><i class="fa-solid fa-wifi" aria-hidden="true"></i></div>' +
        '<h2>Aucune connexion Internet</h2>' +
        '<p>La connexion est perdue depuis plus de 5 minutes. L\'application attend son rétablissement.</p>' +
        '<div class="lotri-offline-dots"><span></span><span></span><span></span></div><br>' +
        '<button type="button" class="lotri-offline-retry" id="lotri-offline-retry-btn">Réessayer</button>' +
      '</div>';
    document.body.appendChild(overlay);
    overlay.querySelector('#lotri-offline-retry-btn').addEventListener('click', function () {
      checkConnection(true);
    });
    return overlay;
  }

  function showBanner(show) {
    ensureStyles();
    ensureBanner().classList.toggle('show', show);
  }

  function showOverlay(show) {
    ensureStyles();
    ensureOverlay().classList.toggle('show', show);
    document.documentElement.style.overflow = show ? 'hidden' : '';
  }

  function armFullscreenTimer() {
    if (fullscreenTimer) return;
    fullscreenTimer = setTimeout(function () {
      showOverlay(true);
    }, FULL_SCREEN_AFTER_MS);
  }

  function disarmFullscreenTimer() {
    if (fullscreenTimer) { clearTimeout(fullscreenTimer); fullscreenTimer = null; }
  }

  function markOffline() {
    if (offlineSince) return;
    offlineSince = Date.now();
    showBanner(true);
    armFullscreenTimer();
    if (!pingTimer) pingTimer = setInterval(function () { checkConnection(false); }, PING_INTERVAL_MS);
  }

  function markOnline() {
    if (!offlineSince) return;
    offlineSince = null;
    disarmFullscreenTimer();
    showBanner(false);
    showOverlay(false);
    if (pingTimer) { clearInterval(pingTimer); pingTimer = null; }
    if (window.Lotri.badges) window.Lotri.badges.refresh();
  }

  /* navigator.onLine pa toujou fyab (ka rete "true" menm sou wifi san
     entènèt reyèl). Nou konfime ak yon ti rekèt reyèl sou rezo a. */
  function checkConnection(manualRetry) {
    if (!navigator.onLine) { markOffline(); return; }
    var url = window.__SUPABASE_URL__
      ? window.__SUPABASE_URL__ + '/auth/v1/health'
      : PING_URL_FALLBACK + Date.now();
    fetch(url, { method: 'GET', cache: 'no-store', mode: 'no-cors' })
      .then(function () { markOnline(); })
      .catch(function () {
        markOffline();
        if (manualRetry) {
          var btn = document.getElementById('lotri-offline-retry-btn');
          if (btn) { btn.textContent = 'Toujours aucune connexion…'; setTimeout(function(){ btn.textContent = 'Réessayer'; }, 1600); }
        }
      });
  }

  window.addEventListener('online', function () { checkConnection(false); });
  window.addEventListener('offline', markOffline);

  document.addEventListener('DOMContentLoaded', function () { checkConnection(false); });
  checkConnection(false);

  window.Lotri.offlineGuard = { check: checkConnection, isOffline: function () { return !!offlineSince; } };
})();


/* =====================================================================
 * JADSTACK LOTTO — native-feel.js (V49)
 * ---------------------------------------------------------------------
 * ZEWO chanjman sou lojik: li jis ajoute yon klas CSS tanporè sou
 * #view chak fwa yon vi fini chaje (evènman `lotri:view` ki deja
 * egziste nan shell.js), pou bay yon ti antre dous olye yon "kout"
 * brital. Activer uniquement sou mobil.
 * ===================================================================== */
(function () {
  const isMobile = () => window.matchMedia('(max-width: 899px)').matches;

  function playEnter() {
    if (!isMobile()) return;
    const host = document.getElementById('view');
    if (!host) return;
    host.classList.remove('jl-view-enter');
    // force reflow pou animasyon an rejwe chak fwa
    void host.offsetWidth;
    host.classList.add('jl-view-enter');
  }

  document.addEventListener('lotri:view', playEnter);
})();


(function(){
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light') document.documentElement.dataset.theme = saved;
  window.Lotri = window.Lotri || {};
  window.Lotri.toggleTheme = function(){
    const cur = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    /* KOREKSYON: senkronize klas body.v72-dark AK KEY paramèt V72 la tou,
       pou de mekanis tèm yo pa janm dezakò (te lakòz "koulè monte sou
       lòt" lè yo itilize toggle sa a apre panèl reglaj la, oswa vice-versa). */
    document.body.classList.toggle('v72-dark', next === 'dark');
    try {
      const KEY = 'jadstack-ui-settings-v72';
      const s = JSON.parse(localStorage.getItem(KEY) || '{}');
      s.mode = next;
      localStorage.setItem(KEY, JSON.stringify(s));
    } catch (_) { /* pa bloke toggle a si storage echwe */ }
    document.dispatchEvent(new CustomEvent('theme-changed', { detail: next }));
  };
  window.Lotri.themeIcon = function(){
    return document.documentElement.dataset.theme === 'dark'
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
  };

  // Otokable bouton tèm nan sou paj piblik yo (#theme-btn)
  document.addEventListener('DOMContentLoaded', function(){
    var b = document.getElementById('theme-btn');
    if (!b || b.dataset.wired) return;
    b.dataset.wired = '1';
    var paint = function(){ b.innerHTML = window.Lotri.themeIcon(); };
    b.addEventListener('click', function(){ window.Lotri.toggleTheme(); paint(); });
    paint();
  });
})();


// Kliyan Supabase inik + zouti sesyon — ak pwoteksyon timeout
(function(){
  const URL_ = window.__SUPABASE_URL__;
  const KEY_ = window.__SUPABASE_ANON_KEY__;
  const client = supabase.createClient(URL_, KEY_);
  window.Lotri = window.Lotri || {};
  window.Lotri.supabase = client;

  // Anpeche nenpòt apèl rete "pending" pou tout tan san yon rezon klè.
  // Si pwomès la pa rezoud nan `ms` milisegond, nou rejte l ak yon erè
  // eksplisit olye pou nou kite yon spinner enfini san mesaj.
  function withTimeout(promise, ms, label){
    let t;
    const timeout = new Promise((_, rej)=>{
      t = setTimeout(()=> rej(new Error('Delè ekspire: ' + (label||'operasyon') + ' pran twòp tan pou reponn.')), ms);
    });
    return Promise.race([promise, timeout]).finally(()=> clearTimeout(t));
  }

  // Li sesyon an dirèkteman nan localStorage kòm sekou, si SDK a bloke.
  // supabase-js estoke sesyon an sou kle `sb-<ref>-auth-token`.
  function readSessionFromStorage(){
    try {
      const ref = new URL(URL_).hostname.split('.')[0];
      const raw = window.localStorage.getItem('sb-' + ref + '-auth-token');
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      // Fòma a ka soti kòm { currentSession: {...} } oswa dirèkteman { access_token, user, ... }
      const sess = parsed.currentSession || parsed;
      if (sess && sess.access_token && sess.user) return sess;
      return null;
    } catch(_) { return null; }
  }

  let cache = null;
  window.Lotri.getSession = async function(){
    try {
      const { data } = await withTimeout(client.auth.getSession(), 8000, 'chèche sesyon');
      if (data && data.session) return data.session;
    } catch(err) {
      console.warn('getSession timeout/erè, ap eseye fallback localStorage:', err.message);
    }
    // Fallback: si SDK a bloke men gen yon sesyon valab nan localStorage, itilize li.
    return readSessionFromStorage();
  };

  window.Lotri.getProfile = async function(force){
    if (cache && !force) return cache;
    const sess = await window.Lotri.getSession();
    if (!sess) return null;
    try {
      const { data, error } = await withTimeout(
        client.from('jl9_profiles')
          .select('id, role, company_id, agent_id, full_name, status, username, totp_enabled')
          .eq('id', sess.user.id).maybeSingle(),
        8000, 'chèche pwofil'
      );
      if (error) { console.error(error); return null; }
      cache = data ? { ...data, email: sess.user.email } : null;
      return cache;
    } catch(err) {
      console.error('getProfile echwe:', err.message);
      return null;
    }
  };

  /* V18 · KOREKSYON #3 — anile tout tan-datant an atant anvan dekoneksyon,
     konsa okenn popup (kontwòl fen mwa, fantom, notifikasyon…) pa ka
     deklannche pandan yon lòt moun konekte nan menm tab la. */
  window.Lotri.clearPendingTimers = function () {
    try { (window.Lotri.pendingTimers || []).forEach(t => clearTimeout(t)); } catch (_) {}
    window.Lotri.pendingTimers = [];
    try { window.Lotri.monthlyCheck && window.Lotri.monthlyCheck.cancel && window.Lotri.monthlyCheck.cancel(); } catch (_) {}
    try { window.Lotri.phantom && window.Lotri.phantom.cancel && window.Lotri.phantom.cancel(); } catch (_) {}
  };

  window.Lotri.signOut = async function(){
    window.Lotri.clearPendingTimers();
    window.__lotriProfile = null;
    try { await withTimeout(client.auth.signOut(), 5000, 'dekonekte'); } catch(_){}
    cache = null;
    try { window.localStorage.clear(); } catch(_){}
    /* Rechajman konplè: pa kite okenn kontèks SPA fantom nan memwa. */
    window.location.replace('ajan.html');
  };


  window.Lotri.homeFor = function(role){
    return role === 'agent' ? 'ajan.html' : 'ajan.html';
  };
  // Isolé pou signUp() (evite vòl sesyon) — rete la pou konpatibilite,
  // men nouvo kreyasyon kont dwe pase pa window.Lotri.createAccount().
  window.Lotri.isolatedClient = function(){
    return supabase.createClient(URL_, KEY_, {
      auth: { persistSession:false, autoRefreshToken:false, detectSessionInUrl:false, storageKey:'lotri-iso-'+Date.now() }
    });
  };

  // Kreye yon kont (Konpayi/Employeur/Ajan/Sipèvizè) — pase pa vrè
  // `auth.signUp()` Supabase (sèl fason ki KREYE yon itilizatè Auth reyèl
  // ak modpas bcrypt kòrèk — pa gen SQL ki ka fè sa an sekirite san yon
  // "service role key", e nou refize mete kle sa a nan navigatè a oswa
  // pase pa yon Edge Function pou rezon senplisite).
  //
  // Itilize `isolatedClient()` (kliyan tanporè, `persistSession:false`)
  // pou `signUp()` PA vòlè/ranplase sesyon operatè k ap kreye kont la
  // (super-admin, konpayi, elt.) — apre siyati a, nou jete kliyan
  // tanporè a san n pa janm rele `.auth.setSession()` sou li.
  //
  // `company_id`/`role`/`agent_id` pase kòm metadata (`options.data`) —
  // trigger `jl9_on_auth_user_created` (baz done) li yo otomatikman
  // pou ranpli `jl9_profiles` lè GoTrue kreye ranje a nan `auth.users`.
  window.Lotri.createAccount = async function(payload){
    const iso = window.Lotri.isolatedClient();
    const meta = { role: payload.role, full_name: payload.full_name || null };
    if (payload.company_id) meta.company_id = payload.company_id;
    if (payload.agent_id) meta.agent_id = payload.agent_id;

    const { data, error } = await withTimeout(
      iso.auth.signUp({
        email: payload.email,
        password: payload.password,
        options: { data: meta }
      }),
      15000, 'kreye kont'
    );
    if (error) throw new Error(error.message || 'Nou pa rive kreye kont lan.');
    if (!data || !data.user) throw new Error('Kreyasyon an echwe san rezon klè.');

    // Deskonekte sesyon kliyan tanporè a touswit (li pa dwe rete "konekte"
    // menm nan memwa, e li pa itilize localStorage pou kòmanse).
    try { await iso.auth.signOut(); } catch (_) {}

    return { ok: true, user_id: data.user.id };
  };
  // Toast helper
  window.Lotri.toast = function(msg, kind){
    let host = document.querySelector('.toast-host');
    if (!host) { host = document.createElement('div'); host.className='toast-host'; document.body.appendChild(host); }
    const el = document.createElement('div');
    el.className = 'toast' + (kind ? ' '+kind : '');
    el.textContent = msg;
    host.appendChild(el);
    setTimeout(()=> el.remove(), 3500);
  };
  window.Lotri.escapeHtml = function(s){
    return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  };
})();


/* =====================================================================
 * JADSTACK LOTTO — SISTÈM NOTIFIKASYON (bouton flotan + istwa jounen an)
 * ---------------------------------------------------------------------
 * Ranplase `window.Lotri.toast(msg, kind)` pa yon vèsyon ki:
 *   1) Kenbe MENM siyati fonksyon an (261 kote nan kòd la rele l konsa,
 *      pa gen anyen pou chanje lòt kote).
 *   2) Toujou anrejistre chak notifikasyon nan yon istwa JOUNEN AN,
 *      men SÈLMAN nan localStorage — JAM nan Supabase.
 *   3) Si gen plis pase 3 toast vizib an menm tan, toast siplemantè yo
 *      PA anpile sou ekran an — yo ale dirèkteman nan istwa a, e yon
 *      bouton flotan (klòch) parèt/mete ajou ak yon konpto.
 *   4) Klike bouton flotan la montre tout notifikasyon jounen an, ak lè
 *      yo te rive.
 * ===================================================================== */
(function () {
  window.Lotri = window.Lotri || {};
  const L = window.Lotri;
  const LS_KEY = 'jl-notif-log';
  const MAX_VISIBLE = 3;

  function todayKey() {
    return new Date().toISOString().slice(0, 10);
  }

  function readLog() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return { day: todayKey(), items: [] };
      const parsed = JSON.parse(raw);
      if (parsed.day !== todayKey()) return { day: todayKey(), items: [] }; // nouvo jou, kòmanse pwòp
      return parsed;
    } catch (_) { return { day: todayKey(), items: [] }; }
  }

  function writeLog(log) {
    try { localStorage.setItem(LS_KEY, JSON.stringify(log)); } catch (_) { /* localStorage plen/bloke — pa kritik */ }
  }

  function pushLog(msg, kind) {
    const log = readLog();
    log.items.push({ msg, kind: kind || 'info', at: Date.now() });
    // Limite rezonab pou pa fè localStorage grosi san limit sou yon
    // sèl jou (kenbe 300 pi resan yo).
    if (log.items.length > 300) log.items = log.items.slice(-300);
    writeLog(log);
    updateBell(log);
  }

  let bellEl = null, panelEl = null;

  function ensureBell() {
    if (bellEl) return bellEl;
    bellEl = document.createElement('button');
    bellEl.type = 'button';
    bellEl.className = 'jl-notif-bell';
    bellEl.setAttribute('aria-label', 'Notifications du jour');
    bellEl.innerHTML = '<i class="fa-solid fa-bell"></i><span class="jl-notif-count" hidden>0</span>';
    bellEl.style.cssText = 'position:fixed;bottom:1.25rem;right:1.25rem;z-index:99;' +
      'width:46px;height:46px;border-radius:50%;border:0;cursor:pointer;' +
      'background:var(--primary,#2563eb);color:#fff;box-shadow:var(--shadow-md,0 4px 12px rgba(0,0,0,.2));' +
      'display:flex;align-items:center;justify-content:center;font-size:1.1rem;';
    document.body.appendChild(bellEl);
    bellEl.addEventListener('click', togglePanel);
    return bellEl;
  }

  function updateBell(log) {
    const count = log.items.length;
    if (!count) { if (bellEl) bellEl.remove(); bellEl = null; return; }
    const b = ensureBell();
    const cEl = b.querySelector('.jl-notif-count');
    cEl.hidden = false;
    cEl.textContent = count > 99 ? '99+' : String(count);
    cEl.style.cssText = 'position:absolute;top:-4px;right:-4px;background:var(--danger,#dc2626);' +
      'color:#fff;border-radius:999px;font-size:.65rem;min-width:18px;height:18px;' +
      'display:flex;align-items:center;justify-content:center;padding:0 4px;font-weight:700;';
  }

  function fmtTime(ts) {
    return new Date(ts).toLocaleTimeString('fr-HT', { hour: '2-digit', minute: '2-digit' });
  }

  function togglePanel() {
    if (panelEl) { panelEl.remove(); panelEl = null; return; }
    const log = readLog();
    panelEl = document.createElement('div');
    panelEl.className = 'jl-notif-panel';
    panelEl.style.cssText = 'position:fixed;bottom:5.2rem;right:1.25rem;z-index:99;width:min(340px,90vw);' +
      'max-height:60vh;overflow:auto;background:var(--surface,#fff);border:1px solid var(--border,#e2e8f0);' +
      'border-radius:var(--radius,10px);box-shadow:var(--shadow-md,0 4px 20px rgba(0,0,0,.18));padding:.5rem;';
    const rows = log.items.slice().reverse().map(it => `
      <div style="padding:.5rem .6rem;border-bottom:1px solid var(--border,#eee);font-size:.85rem;display:flex;gap:.5rem;justify-content:space-between;">
        <span style="flex:1">${(it.msg || '').replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]))}</span>
        <span style="color:var(--muted,#888);white-space:nowrap;font-size:.75rem">${fmtTime(it.at)}</span>
      </div>`).join('') || '<div class="empty" style="padding:1rem;text-align:center;color:var(--muted,#888)">Aucune notification aujourd\'hui.</div>';
    panelEl.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:.4rem .6rem .6rem;font-weight:700;">
        <span>Notifications du jour</span>
        <button type="button" id="jl-notif-clear" style="background:none;border:0;color:var(--muted,#888);cursor:pointer;font-size:.78rem;">Vide</button>
      </div>${rows}`;
    document.body.appendChild(panelEl);
    panelEl.querySelector('#jl-notif-clear').onclick = () => {
      writeLog({ day: todayKey(), items: [] });
      updateBell({ items: [] });
      panelEl.remove(); panelEl = null;
    };
  }

  // Chaje bouton flotan si gen deja yon istwa pou jodi a (egz. moun nan
  // rechaje paj la, oswa li chanje paj).
  updateBell(readLog());

  /* ---------------- Toast vizib (limite a MAX_VISIBLE alafwa) --------------- */
  let visibleCount = 0;

  window.Lotri.toast = function (msg, kind) {
    pushLog(msg, kind); // toujou nan istwa a, kèlkeswa si l vizib ekran an

    if (visibleCount >= MAX_VISIBLE) return; // siplemantè yo — istwa uniquement, pa anpile sou ekran

    let host = document.querySelector('.toast-host');
    if (!host) { host = document.createElement('div'); host.className = 'toast-host'; document.body.appendChild(host); }
    const el = document.createElement('div');
    el.className = 'toast' + (kind ? ' ' + kind : '');
    el.textContent = msg;
    host.appendChild(el);
    visibleCount++;
    setTimeout(() => { el.remove(); visibleCount = Math.max(0, visibleCount - 1); }, 3500);
  };
})();

/* =====================================================================
 * V43 — SISTÈM NOTIFIKASYON REYÈL (baz done: jl43_notifications)
 * ---------------------------------------------------------------------
 * Fichye separe (IIFE apa) ki AJOUTE yon vrè sant notifikasyon ki sove
 * nan Supabase, san touche `Lotri.toast()` ki anwo a (sa rete egzakteman
 * jan l te ye a). Klòch la parèt nan header la (anwo, akote tèm/dekonèkte).
 *   • Super Admin ak Compagnie (employeur) : istwa san limit, bouton "Vide".
 *   • Agent ak Superviseur : 30 pi resan yo uniquement (retansyon otomatik bò SQL).
 * ===================================================================== */
(function () {
  window.Lotri = window.Lotri || {};
  const N = (window.Lotri.notifications = {});
  const SB = () => window.Lotri.supabase;
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const MONTHS = ['jan', 'fev', 'mas', 'avr', 'me', 'jen', 'jiy', 'out', 'sept', 'okt', 'nov', 'des'];
  const sameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  function groupLabel(ts) {
    const d = new Date(ts), now = new Date();
    if (sameDay(d, now)) return 'Aujourd\'hui';
    const yest = new Date(now); yest.setDate(now.getDate() - 1);
    if (sameDay(d, yest)) return 'Hier';
    return `${d.getDate()} ${MONTHS[d.getMonth()]}`;
  }
  function fmtTime(ts) {
    return new Date(ts).toLocaleTimeString('fr-HT', { hour: '2-digit', minute: '2-digit' });
  }

  let profile = null, items = [], unread = 0, knownIds = new Set(), firstLoad = true;
  let bellEl = null, panelEl = null, timer = null;

  function ensureBell() {
    if (bellEl) return bellEl;
    const right = document.querySelector('.appbar .right');
    if (!right) return null;
    bellEl = document.createElement('button');
    bellEl.type = 'button';
    bellEl.className = 'btn btn-icon btn-ghost jl43-bell';
    bellEl.setAttribute('aria-label', 'Notifications');
    bellEl.style.position = 'relative';
    bellEl.innerHTML = '<i class="fa-solid fa-bell"></i><span class="jl43-dot" hidden></span>';
    const themeBtn = document.getElementById('theme-btn');
    right.insertBefore(bellEl, themeBtn || right.firstChild);
    bellEl.addEventListener('click', togglePanel);
    return bellEl;
  }

  function paintBell() {
    const b = ensureBell();
    if (!b) return;
    const dot = b.querySelector('.jl43-dot');
    if (!unread) { dot.hidden = true; return; }
    dot.hidden = false;
    dot.textContent = unread > 99 ? '99+' : String(unread);
    dot.style.cssText = 'position:absolute;top:2px;right:2px;background:var(--danger,#dc2626);color:#fff;' +
      'border-radius:999px;font-size:.62rem;min-width:16px;height:16px;display:flex;align-items:center;' +
      'justify-content:center;padding:0 3px;font-weight:700;line-height:1';
  }

  function itemRow(it) {
    const TYPE_ICON = { win: 'fa-trophy', message: 'fa-comment', draw_result: 'fa-dice', system: 'fa-bell' };
    return `<div class="jl43-item${it.read_at ? '' : ' unread'}" data-id="${it.id}" data-link="${esc(it.link || '')}"
        style="display:flex;gap:.6rem;align-items:flex-start;padding:.55rem .6rem;border-bottom:1px solid var(--border,#eee);cursor:pointer">
      <i class="fa-solid ${TYPE_ICON[it.type] || 'fa-bell'}" style="margin-top:.2rem;color:var(--primary,#2563eb)"></i>
      <div style="flex:1;min-width:0">
        <div style="font-weight:${it.read_at ? '500' : '700'};font-size:.85rem">${esc(it.title)}</div>
        ${it.body ? `<div class="muted" style="font-size:.78rem">${esc(it.body)}</div>` : ''}
        <div class="muted" style="font-size:.68rem;margin-top:.15rem">${fmtTime(it.created_at)}</div>
      </div>
      ${it.read_at ? '' : '<span class="jl43-unread-mark" style="width:8px;height:8px;border-radius:50%;background:var(--primary,#2563eb);margin-top:.35rem;flex:0 0 auto"></span>'}
    </div>`;
  }

  function renderList() {
    if (!items.length) return '<div class="empty" style="padding:1.2rem;text-align:center;color:var(--muted,#888)">Aucune notification.</div>';
    let lastGroup = null, html = '';
    items.forEach(it => {
      const g = groupLabel(it.created_at);
      if (g !== lastGroup) {
        html += `<div class="muted" style="padding:.4rem .6rem .2rem;font-size:.7rem;font-weight:700;text-transform:uppercase">${esc(g)}</div>`;
        lastGroup = g;
      }
      html += itemRow(it);
    });
    return html;
  }

  function togglePanel() {
    if (panelEl) { panelEl.remove(); panelEl = null; return; }
    const b = ensureBell();
    if (!b) return;
    const canClear = profile && ['super_admin', 'employer', 'company'].includes(profile.role);
    panelEl = document.createElement('div');
    panelEl.className = 'jl43-panel';
    panelEl.style.cssText = 'position:fixed;top:56px;right:.75rem;z-index:120;width:min(360px,92vw);' +
      'max-height:70vh;overflow:auto;background:var(--surface,#fff);border:1px solid var(--border,#e2e8f0);' +
      'border-radius:var(--radius,10px);box-shadow:var(--shadow-md,0 4px 20px rgba(0,0,0,.18));';
    panelEl.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:.6rem .7rem;border-bottom:1px solid var(--border,#eee);position:sticky;top:0;background:var(--surface,#fff)">
        <span style="font-weight:700">Notifications</span>
        <div style="display:flex;gap:.6rem">
          <button type="button" id="jl43-mark-all" style="background:none;border:0;color:var(--primary,#2563eb);cursor:pointer;font-size:.75rem">Tout lire</button>
          ${canClear ? `<button type="button" id="jl43-clear" style="background:none;border:0;color:var(--muted,#888);cursor:pointer;font-size:.75rem">Vide</button>` : ''}
        </div>
      </div>
      <div id="jl43-list">${renderList()}</div>`;
    document.body.appendChild(panelEl);

    panelEl.querySelectorAll('.jl43-item').forEach(el => el.onclick = async () => {
      const id = el.dataset.id, link = el.dataset.link;
      if (id) { try { await SB().rpc('jl43_rpc_notifications_mark_read', { _ids: [id] }); } catch (_) {} }
      panelEl.remove(); panelEl = null;
      if (link && window.LotriShell) window.LotriShell.go(link);
      refresh();
    });
    panelEl.querySelector('#jl43-mark-all').onclick = async () => {
      try { await SB().rpc('jl43_rpc_notifications_mark_all_read'); } catch (_) {}
      panelEl.remove(); panelEl = null;
      refresh();
    };
    const clearBtn = panelEl.querySelector('#jl43-clear');
    if (clearBtn) clearBtn.onclick = async () => {
      if (!confirm('Tout vider\'historique des notifications ?')) return;
      try { await SB().rpc('jl43_rpc_notifications_clear'); } catch (e) { window.Lotri.toast(e.message, 'error'); }
      panelEl.remove(); panelEl = null;
      refresh();
    };
  }

  async function refresh() {
    if (!SB()) return;
    try {
      const [{ data: list }, { data: cnt }] = await Promise.all([
        SB().rpc('jl43_rpc_notifications_list', { _limit: 50 }),
        SB().rpc('jl43_rpc_notifications_unread_count')
      ]);
      items = Array.isArray(list) ? list : [];
      unread = Number(cnt || 0);
      paintBell();
      if (panelEl) { panelEl.querySelector('#jl43-list').innerHTML = renderList(); }

      /* Toast pou nouvo notifikasyon ki parèt depi dènye rafrechisman an
         (pa vale premye chajman an — sinon tout istwa a ta vin toast). */
      if (!firstLoad) {
        items.filter(it => !it.read_at && !knownIds.has(it.id)).slice(0, 3)
          .forEach(it => window.Lotri.toast(it.title, 'info'));
      }
      firstLoad = false;
      knownIds = new Set(items.map(it => it.id));
    } catch (_) { /* pa kritik */ }
  }

  N.arm = function (p) {
    profile = p || profile;
    if (!ensureBell()) {
      /* Header la poko nan DOM — eseye ankò byento (v9.4 badges.js gen
         menm kalite ka sa a). */
      setTimeout(() => N.arm(profile), 400);
      return;
    }
    refresh();
    document.addEventListener('lotri:view', refresh);
    if (timer) return;
    timer = setInterval(() => { if (document.visibilityState === 'visible') refresh(); }, 45000);
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') refresh(); });
  };
  N.refresh = refresh;
})();


/* JADSTACK LOTTO — V87 Push notifications natifs (Android)
 * Bridge: window.AndroidPush (Android WebView -> AndroidPush.java)
 * API piblik: window.Lotri.push.arm(profile), .onNativeToken(token),
 *             .onForegroundPush(title, body, link)
 *
 * Sekirite: menm jan ak bluetooth-printer.js — pa janm kraze paj la;
 * si bridge natif la pa la (ex. moun k ap itilize navigatè web), tout
 * fonksyon yo tonbe san danje.
 */
(function () {
  'use strict';

  window.Lotri = window.Lotri || {};
  if (window.Lotri.push && window.Lotri.push.__jadstack) return;

  const SB = () => window.Lotri.supabase;

  /* Rakousi pa defo selon wòl la — kle yo koresponn ak vi ki deja
     anrejistre nan LotriShell.register(...) pou chak paj wòl. */
  const QUICK_ACTIONS_BY_ROLE = {
    agent: [
      { label: 'Vendre des tickets', view: 'pos' },
      { label: 'Tikè yo', view: 'tickets' },
      { label: 'Mesaj', view: 'messages' },
    ],
    supervisor: [
      { label: 'Tikè yo', view: 'tickets' },
      { label: 'Rapports', view: 'reports' },
      { label: 'Mesaj', view: 'messages' },
    ],
    company: [
      { label: 'Facturation', view: 'billing-check' },
      { label: 'Rapports', view: 'reports' },
      { label: 'Mesaj', view: 'messages' },
    ],
    employer: [
      { label: 'Compagnies', view: 'employer-list' },
      { label: 'Sirveyans', view: 'employer-surveillance' },
      { label: 'Mesaj', view: 'messages' },
    ],
    super_admin: [
      { label: 'Dashboard', view: 'dashboard' },
      { label: 'Compagnies', view: 'companies' },
      { label: 'Mesaj', view: 'messages' },
    ],
  };

  function bridge() {
    try {
      return (typeof window !== 'undefined' && window.AndroidPush) ? window.AndroidPush : null;
    } catch (_) { return null; }
  }

  async function registerToken(token) {
    if (!token || !SB()) return;
    try { await SB().rpc('jl43_rpc_register_device_token', { _token: token, _platform: 'android' }); }
    catch (_) { /* pa kritik — n ap eseye ankò pwochen chajman paj */ }
  }

  const P = (window.Lotri.push = { __jadstack: true });

  /* Rele DIRÈKTEMAN pa Kotlin (FcmService.onNewToken) lè app la deja louvri. */
  P.onNativeToken = function (token) { registerToken(token); };

  /* Rele pa Kotlin (FcmService.onMessageReceived) lè yon push rive
     PANDAN app la nan premye plan — n ap sèlman fè yon toast, paske
     sistèm notifikasyon Supabase a (jl43) ap deja rafrechi klòch la. */
  P.onForegroundPush = function (title, body, link) {
    if (window.Lotri.toast) window.Lotri.toast(title || body || 'Nouvo notifikasyon', 'info');
    if (window.Lotri.notifications && window.Lotri.notifications.refresh) window.Lotri.notifications.refresh();
  };

  P.arm = function (profile) {
    const b = bridge();
    if (!b) return; // navigatè web nòmal — pa gen push natif

    // 1) Anrejistre tokèn FCM annatant si genyen (kreye lè app te fèmen).
    try {
      const pending = b.getPendingToken && b.getPendingToken();
      if (pending) registerToken(pending);
    } catch (_) {}

    // 2) Kòmanse notifikasyon "aksyon rapid" pèsistan selon wòl la.
    try {
      const role = String((profile && profile.role) || '').toLowerCase();
      const actions = QUICK_ACTIONS_BY_ROLE[role];
      if (actions && b.startQuickActions) {
        b.startQuickActions('JADSTACK LOTTO', JSON.stringify(actions));
      }
    } catch (_) {}
  };
})();


/* Branding + Configuration dinamik ----------------------------------------
 * `site_config` tab (Supabase) genyen menm fòm ak window.JADSTACK_DEFAULTS.
 * loadConfig() melanje defo yo ak sa ki nan baz done a e li aplike:
 *   - varyab CSS root (tèm)
 *   - logo header (rektangilè) + logo sidemenu (kare/wonn)
 *   - metadata paj (tit, favicon)
 *   - kontni footer/landing/kontak/legal/tikè (paj yo li state sa a)
 * ----------------------------------------------------------------------- */
(function(){
  window.Lotri = window.Lotri || {};
  const D = window.JADSTACK_DEFAULTS;
  const state = window.Lotri.config = JSON.parse(JSON.stringify(D));

  function merge(target, src){
    if (!src || typeof src !== 'object') return target;
    for (const k of Object.keys(src)){
      const v = src[k];
      if (v && typeof v === 'object' && !Array.isArray(v) && target[k] && typeof target[k]==='object' && !Array.isArray(target[k])){
        merge(target[k], v);
      } else if (v !== null && v !== undefined) {
        target[k] = v;
      }
    }
    return target;
  }

  // IMPORTANT: `theme` gen fòm { light:{...}, dark:{...} }. Nou aplike SÈLMAN
  // pakèt ki koresponn ak mòd aktyèl la (data-theme sou <html>), sinon
  // varyab yo ta ekri sou style inline la e yo ta REETE menm si moun nan
  // chanje pou mòd fonse — se sa ki te lakòz koulè/tèks chevoche nan dark mode.
  window.Lotri.applyTheme = function(theme){
    if (!theme) return;
    const root = document.documentElement;
    const mode = root.dataset.theme === 'dark' ? 'dark' : 'light';
    // Retirer ansyen override yo dabò pou pa gen rès ansyen mòd la ki kole.
    const known = ['--primary','--primary-hover','--accent','--accent-hover','--dark','--bg','--surface','--text','--radius'];
    known.forEach(k => root.style.removeProperty(k));
    const pack = theme[mode] || theme; // bak-konpatib ak ansyen fòma plat
    Object.keys(pack).forEach(k => { if (k.startsWith('--')) root.style.setProperty(k, pack[k]); });
  };

  // Lè moun nan chanje mòd (klè/fonse), reaplike pakèt koulè ki koresponn lan.
  document.addEventListener('theme-changed', () => window.Lotri.applyTheme(state.theme));

  // Fallback lokal — sèvi si `site_config` pa gen URL, OSWA si URL Supabase
  // a chaje men echwe reyèlman (bucket vid/prive/404). Konsa moun nan pa
  // janm wè yon logo kase, e nou gen yon plan B fyab san depann de Storage.
  const LOCAL_FALLBACK = {
    wide: 'assets/img/jadstacklotto_logo.png',
    mark: 'assets/img/logo.png'
  };

  function mountBrandImg(el, url, alt, localSrc, fallbackHtml){
    if (!url){ el.innerHTML = `<img alt="${escapeAttr(alt)}" src="${escapeAttr(localSrc)}">`; return; }
    const img = new Image();
    img.alt = alt;
    img.onload = () => { el.innerHTML=''; el.appendChild(img); };
    img.onerror = () => {
      console.warn('[branding] URL Supabase illisible, utilisation du repli local :', url);
      el.innerHTML = `<img alt="${escapeAttr(alt)}" src="${escapeAttr(localSrc)}">`;
    };
    img.src = url;
  }

  window.Lotri.paintBrand = function(){
    const b = state.brand || {};
    // Title / favicon
    if (b.name) document.title = document.title.replace(/JADSTACK LOTTO|Lovable/gi, b.name).trim() || b.name;
    if (b.favicon){
      let link = document.querySelector("link[rel='icon']");
      if (!link){ link=document.createElement('link'); link.rel='icon'; document.head.appendChild(link); }
      link.href = b.favicon;
    } else {
      let link = document.querySelector("link[rel='icon']");
      if (!link){ link=document.createElement('link'); link.rel='icon'; document.head.appendChild(link); }
      link.href = LOCAL_FALLBACK.mark;
    }
    // Logo rektangilè + kare/wonn — SÈLMAN si V34 (brand-logo.js) PA chaje.
    // V34 gen pwòp mekanis pentire pou [data-brand] avèk yon MutationObserver;
    // si toude script yo pentire sou menm eleman an an menm tan, sa kreye yon
    // kous kondisyon (logo ki fliker/enkonsistan). V34, lè li la, se sèl sous
    // verite a — `Lotri.v34.paintLogos` deja rele nan boot li.
    if (!window.Lotri.v34) {
      document.querySelectorAll('[data-brand="wide"]').forEach(el => {
        mountBrandImg(el, b.logo_wide, b.name || 'JADSTACK LOTTO', LOCAL_FALLBACK.wide);
      });
      document.querySelectorAll('[data-brand="mark"]').forEach(el => {
        mountBrandImg(el, b.logo_mark, b.name || 'JADSTACK LOTTO', LOCAL_FALLBACK.mark);
      });
    }
  };

  window.Lotri.paintFooter = function(){
    const f = state.footer || {};
    document.querySelectorAll('[data-footer]').forEach(host => {
      host.innerHTML = `
        <div class="fwrap">
          <div>
            <div class="logo-wide" data-brand="wide" style="height:44px;margin-bottom:.6rem"></div>
            <p class="muted" style="font-size:.9rem;max-width:340px">${escapeHtml(f.blurb||'')}</p>
            <div class="socials">${(f.socials||[]).filter(s=>s.url).map(s=>
              `<a href="${escapeAttr(s.url)}" target="_blank" rel="noopener" aria-label="${escapeAttr(s.label)}"><i class="${escapeAttr(s.icon)}"></i></a>`
            ).join('')}</div>
          </div>
          <div>
            <h4>${escapeHtml(f.legal_title||'Mentions légales')}</h4>
            ${(f.legal_links||[]).map(l=>`<a href="${escapeAttr(l.href)}">${escapeHtml(l.label)}</a>`).join('')}
          </div>
          <div>
            <h4>${escapeHtml(f.contact_title||'Contact')}</h4>
            ${f.phone   ? `<a href="tel:${escapeAttr(f.phone)}"><i class="fa-solid fa-phone fa-fw-icon"></i> ${escapeHtml(f.phone)}</a>`:''}
            ${f.email   ? `<a href="mailto:${escapeAttr(f.email)}"><i class="fa-solid fa-envelope fa-fw-icon"></i> ${escapeHtml(f.email)}</a>`:''}
            ${f.address ? `<a><i class="fa-solid fa-location-dot fa-fw-icon"></i> ${escapeHtml(f.address)}</a>`:''}
          </div>
        </div>
        <div class="copyright">${escapeHtml(f.copyright||'')}</div>`;
      window.Lotri.paintBrand();
    });
  };

  window.Lotri.loadConfig = async function(){
    // Chaje overrides depi tab site_config
    try {
      if (!window.Lotri.supabase) return state;
      const { data } = await window.Lotri.supabase.from('jl9_site_config').select('key,value');
      (data||[]).forEach(row => { if (state[row.key]!==undefined) merge(state[row.key], row.value); else state[row.key]=row.value; });
    } catch(_){}
    // Appliquer tèm + repentire mak/footer si yo prezan
    window.Lotri.applyTheme(state.theme);
    window.Lotri.paintBrand();
    window.Lotri.paintFooter();
    return state;
  };

  // Bak-konpatib ak ansyen kòd
  window.Lotri.loadBranding = window.Lotri.loadConfig;

  /* ---------------------------------------------------------------------
   * Panel "Dernière modification" — parèt sou paj ki gen chanjman konfig,
   * montre ansyen -> nouvo valè, ak bouton Retabli / Fermer (popup).
   * ------------------------------------------------------------------- */
  function diffSummary(oldV, newV){
    const o = oldV || {}, n = newV || {};
    const keys = Array.from(new Set([...Object.keys(o), ...Object.keys(n)]));
    const rows = [];
    for (const k of keys){
      const a = JSON.stringify(o[k]); const b = JSON.stringify(n[k]);
      if (a === b) continue;
      const short = s => { if (s===undefined) return '—'; s=String(s); return s.length>60 ? s.slice(0,57)+'…' : s; };
      rows.push({ k, before: short(a), after: short(b) });
      if (rows.length >= 4) break;
    }
    return rows;
  }

  window.Lotri.mountChangePanel = async function(){
    try {
      if (!window.Lotri.supabase) return;
      const { data, error } = await window.Lotri.supabase.rpc('jl9_rpc_recent_config_changes', { _limit: 1 });
      if (error || !data || !data.length) return;
      const chg = data[0];
      const seenKey = 'jl:seen-change:' + chg.id;
      if (localStorage.getItem(seenKey)) return; // moun nan deja fèmen/wè sa a

      const profile = await window.Lotri.getProfile();
      const canRestore = profile && profile.role === 'super_admin';
      const rows = diffSummary(chg.old_value, chg.new_value);
      if (!rows.length && chg.old_value) return; // pa gen diferans vizib

      let host = document.getElementById('change-panel');
      if (!host){ host = document.createElement('div'); host.id = 'change-panel'; host.className = 'change-panel'; document.body.appendChild(host); }
      host.innerHTML = `
        <div class="change-panel-hd">
          <strong><i class="fa-solid fa-clock-rotate-left"></i> Dernière modification — ${escapeHtml(chg.key)}</strong>
          <button class="btn btn-icon btn-ghost btn-sm" id="cp-close" aria-label="Fermer"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="change-panel-body">
          ${rows.length ? rows.map(r=>`<div class="cp-row"><span class="cp-k">${escapeHtml(r.k)}</span>
              <span class="cp-old">${escapeHtml(r.before)}</span><i class="fa-solid fa-arrow-right"></i>
              <span class="cp-new">${escapeHtml(r.after)}</span></div>`).join('')
            : `<div class="cp-row muted">Premye vèsyon konfigirasyon sa a.</div>`}
        </div>
        ${canRestore ? `<div class="change-panel-ft">
          <button class="btn btn-sm" id="cp-dismiss">Fermer</button>
          <button class="btn btn-sm btn-primary" id="cp-restore"><i class="fa-solid fa-rotate-left"></i> Restaurer l'ancienne valeur</button>
        </div>` : ''}`;

      const dismiss = () => { localStorage.setItem(seenKey, '1'); host.remove(); };
      document.getElementById('cp-close').onclick = dismiss;
      const dEl = document.getElementById('cp-dismiss'); if (dEl) dEl.onclick = dismiss;
      const rEl = document.getElementById('cp-restore');
      if (rEl) rEl.onclick = async () => {
        // Retabli = re-sove ANSYEN valè a (kreye yon nouvo antre istorik tou).
        if (!chg.old_value) { window.Lotri.toast('Aucune version antérieure à restaurer.', 'error'); return; }
        const { error: uerr } = await window.Lotri.supabase.from('jl9_site_config')
          .upsert({ key: chg.key, value: chg.old_value, updated_at: new Date().toISOString() });
        if (uerr) { window.Lotri.toast(uerr.message, 'error'); return; }
        window.Lotri.toast('Configuration retabli.', 'success');
        dismiss();
        await window.Lotri.loadConfig(); window.Lotri.paintBrand();
      };
    } catch(_){ /* silans — panel la pa kritik */ }
  };

  function escapeHtml(s){ return String(s??'').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function escapeAttr(s){ return escapeHtml(s); }
  window.Lotri.escapeHtml = window.Lotri.escapeHtml || escapeHtml;
})();


/* Fiche (tikè) — fòma final v6
 * Ordre: Compagnie -> detay tiraj/pari -> Total -> liy pwenntiye -> JADSTACK LOTTO -> legal
 */
(function(){
  window.Lotri = window.Lotri || {};
  const esc = s => String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  window.Lotri.renderFiche = function(t){
    const cfg = (window.Lotri.config && window.Lotri.config.ticket) || window.JADSTACK_DEFAULTS.ticket;
    const co = t.company || {};
    /* V42 · Seri kout — sèvi ak premye 8 karaktè seri a (avan premye "-" nan
       yon UUID) pou fiche a pa gen yon seri twò long. Seri konplè a rete
       toujou disponib nan t.serial pou nenpòt lòt verifikasyon/rechèch —
       epi kounye a rechèch nan "Fiche" la (V43) aksepte ni seri kout la ni
       seri konplè a, non pou non pou li mache vrèman. */
    const shortSerial = String(t.serial || '').split('-')[0].toUpperCase();
    /* V23 · C2-b — Fiche milti-tiraj: si `t.draws` prezan
       ([{draw_name, bets:[...]}, ...]) nou fè yon seksyon pa tiraj.
       Otreman (ansyen apèl) nou tonbe tounen sou t.draw_name + t.bets. */
    const drawSections = Array.isArray(t.draws) && t.draws.length
      ? t.draws
      : [{ draw_name: t.draw_name || '', bets: t.bets || [] }];
    return `
<div class="fiche">
  ${co.logo_url ? `<div class="fiche-logo"><img src="${esc(co.logo_url)}" alt="${esc(co.name || '')}"></div>` : ''}
  <div class="co${co.logo_url ? ' has-logo' : ''}">${esc(co.name || '')}</div>
  <div class="meta">${esc(co.address||'')}</div>
  <div class="meta">Réf. : ${esc(t.ref||'')} &nbsp; Tél. : ${esc(co.phone||'')}</div>
  <div class="meta">Série : ${esc(shortSerial)}</div>
  <div class="meta">Date : ${esc(t.date||'')} &nbsp; Heure : ${esc(t.time||'')}</div>
  <hr>
  <div class="row"><span>N° ticket : ${esc(t.number||'')}</span></div>
  ${drawSections.map(sec => `
  <hr>
  <div class="row"><strong>${esc(sec.draw_name||'')}</strong></div>
  ${(sec.bets||[]).map(b=>`<div class="row"><span>${esc(b.game_label||b.game_code||'')} ${esc(b.number||'')}</span><span>${Number(b.amount||0).toFixed(2)} ${esc(t.currency||'HTG')}</span></div>`).join('')}
  `).join('')}
  <hr>
  <div class="row"><strong>TOTAL</strong><strong>${esc(t.currency||'HTG')} ${Number(t.total||0).toFixed(2)}</strong></div>
  <div class="dotted">${esc(cfg.dotted)}</div>
  <div class="sys">${esc(cfg.system_name)}</div>
  <div class="legal">${esc(cfg.legal)}</div>
</div>`;
  };

  window.Lotri.printFiche = function(t){
    const w = window.open('', '_blank', 'width=380,height=640');
    if (!w) return;
    w.document.write(`<html><head><title>Fiche</title>
      <link rel="stylesheet" href="assets/css/tokens.css"><link rel="stylesheet" href="assets/css/components.css">
      </head><body>${window.Lotri.renderFiche(t)}<script>window.print()<\/script></body></html>`);
    w.document.close();
  };
})();


/* Validasyon pwodiksyon — kliyan-side (backend valide ankò nan RPC yo). */
(function(){
  window.Lotri = window.Lotri || {};
  const V = window.Lotri.validate = {};
  const OPS = () => (window.Lotri.config && window.Lotri.config.ops) || window.JADSTACK_DEFAULTS.ops;

  V.amount = function(value, opts){
    const o = Object.assign({ min: OPS().min_bet_amount, max: OPS().max_ticket_amount }, opts||{});
    const n = Number(value);
    if (!isFinite(n)) return 'Le montant n\'est pas un nombre valide.';
    if (n <= 0) return 'Le montant ne peut pas être nul ni négatif.';
    if (n < o.min) return 'Le montant minimum est de ' + o.min + '.';
    if (n > o.max) return 'Le montant dépasse la limite maximale (' + o.max + ').';
    return null;
  };

  V.quantity = function(value){
    const n = Number(value);
    if (!Number.isInteger(n)) return 'La quantité doit être un nombre entier.';
    if (n <= 0) return 'La quantité ne peut pas être nulle ni négative.';
    if (n > 1000) return 'Quantité a twò gwo.';
    return null;
  };

  /* Fòma boul selon jeu la: Borlette 2 chif, Lotto3 3 chif, elt. */
  V.betNumber = function(gameCode, num){
    const f = OPS().bet_formats[String(gameCode||'').toLowerCase()];
    const s = String(num||'').trim();
    if (!/^\d+$/.test(s)) return 'La boule doit contenir uniquement des chiffres.';
    if (f && s.length !== f.digits) return f.label + ' doit contenir exactement ' + f.digits + ' chif.';
    if (!f && (s.length < 2 || s.length > 6)) return 'Le format de la boule est invalide.';
    return null;
  };

  V.email = function(s){
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(s||'').trim()) ? null : 'E-mail la pa valab.';
  };
  V.url = function(s){
    if (!s) return null;
    return /^https:\/\/\S+$/i.test(String(s).trim()) ? null : 'Le lien doit commencer par https://';
  };

  /* Valide yon fiche konplè anvan li ale sou sèvè a */
  V.ticket = function(bets, total){
    if (!Array.isArray(bets) || bets.length === 0) return 'Fiche a vid.';
    let sum = 0;
    for (const b of bets){
      const e1 = V.betNumber(b.game_code, b.number); if (e1) return e1;
      const e2 = V.amount(b.amount);                 if (e2) return e2;
      sum += Number(b.amount);
    }
    if (total !== undefined && Math.abs(sum - Number(total)) > 0.001) return 'Le total ne correspond pas à la somme des paris.';
    if (sum > OPS().max_ticket_amount) return 'Le total de la fiche dépasse la limite maximale.';
    return null;
  };
})();


/* =====================================================================
 * JADSTACK LOTTO — SEKIRIZE ANTRE DONE (chif uniquement, san desimal,
 * bloke "null"/vid sou chan obligatwa)
 * ---------------------------------------------------------------------
 * 1) Tous <input type="number" data-int> (oswa ki gen step="1"/pa gen
 *    `step` ditou) — bloke tape "." "," "e" "+" "-" kòm klavye VIT,
 *    olye tann validation apre kou. Sa pi rapid pou moun k ap antre
 *    anpil chif (kantite, limit, montan antye).
 * 2) Nenpòt <form> — avant `submit`, verifye chan `required` yo pa
 *    vid E pa gen valè tèks literal "null"/"undefined" (ka rive si
 *    yon script mete `value = null` san kontwòl epi DOM konvèti l an
 *    tèks "null").
 * ===================================================================== */
(function () {
  const INT_BLOCK_KEYS = ['.', ',', 'e', 'E', '+', '-'];

  function isIntegerNumberInput(el) {
    if (!el || el.tagName !== 'INPUT' || el.type !== 'number') return false;
    // Antye pa defo, SÒF si moun nan te mete `step` ak yon desimal
    // eksprè (egz. step="0.01" pou yon montan lajan ki bezwen santim).
    const step = el.getAttribute('step');
    if (step && step !== '1' && step.toLowerCase() !== 'any') return false;
    if (el.hasAttribute('data-allow-decimal')) return false;
    return true;
  }

  document.addEventListener('keydown', (e) => {
    if (!isIntegerNumberInput(e.target)) return;
    if (INT_BLOCK_KEYS.includes(e.key)) e.preventDefault();
  });

  // Kole (paste) ka mete yon valè ak desimal/lèt menm si klavye bloke —
  // netwaye l apre kou.
  document.addEventListener('input', (e) => {
    if (!isIntegerNumberInput(e.target)) return;
    const clean = e.target.value.replace(/[^\d]/g, '');
    if (clean !== e.target.value) e.target.value = clean;
  });

  // Anpeche fòm soumèt si yon chan obligatwa vid oswa gen "null"/
  // "undefined" kòm tèks literal (pa vrè valè null JS — se yon string
  // ki antre pa aksidan/bug).
  const BAD_LITERALS = new Set(['null', 'undefined', 'NaN']);
  document.addEventListener('submit', (e) => {
    const form = e.target;
    if (!form || form.tagName !== 'FORM') return;
    const fields = form.querySelectorAll('[required]');
    for (const f of fields) {
      const v = (f.value || '').trim();
      if (!v || BAD_LITERALS.has(v)) {
        e.preventDefault();
        e.stopPropagation();
        f.focus();
        if (window.Lotri && window.Lotri.toast) {
          window.Lotri.toast('Chan «' + (f.getAttribute('data-label') || f.name || f.id || 'obligatwa') + '» ne peut pas rester vide.', 'error');
        }
        return;
      }
    }
  }, true); // kaptire AVAN lòt lisnè 'submit' fòm yo (pou bloke anvan RPC rele)
})();


/* =====================================================================
 * v41-input-guard.js — Sekirite + rapidite pou tout fòm yo (v2, pi entelijan)
 * ---------------------------------------------------------------------
 *  • Chan LAJAN (montan, prim, pri) → klavye chif + yon sèl pwen desimal
 *    otorize (santim). Chan KANTITE/LIMIT/KÒD/TELEFÒN → chif antye uniquement.
 *  • Deteksyon pi presi: limit sou mo antye (word-boundary), + li tèks
 *    <label> ki asosye ak chan an (pa uniquement id/name/class jenerik).
 *  • Devlopè ka fòse manyèlman ak data-numeric="1" / data-decimal="1" /
 *    data-text="1" si deteksyon otomatik la twonpe.
 *  • Chan obligatwa → pa janm voye yon valè vid oswa "null"/"undefined".
 *  • Antre pi rapid: Enter pase nan chan swivan an.
 *
 * Mete l nan chak paj APRE shell.js:
 *   <script defer src="final-bundle"></script>
 * ===================================================================== */
(function () {
  // Chan lajan — bezwen santim (pwen desimal otorize)
  const MONEY_HINT = /\b(montan|amount|prim|prime|price|pri|valè|value)\b/i;
  // Chan chif antye uniquement — pa janm desimal
  const INT_HINT = /\b(limit|kantite|qty|quantity|boul|nimewo|numero|number|pin|kod|code|phone|telefon|tel|sort[_-]?order|jou|day|max|min)\b/i;

  function labelTextFor(el) {
    let txt = '';
    if (el.id) {
      const lab = document.querySelector(`label[for="${CSS.escape(el.id)}"]`);
      if (lab) txt += ' ' + lab.textContent;
    }
    const closest = el.closest('label');
    if (closest) txt += ' ' + closest.textContent;
    const wrap = el.closest('.field,.form-group,.form-row,.fg');
    if (wrap) {
      const lab2 = wrap.querySelector('label');
      if (lab2 && lab2 !== closest) txt += ' ' + lab2.textContent;
    }
    return txt;
  }

  function classify(el) {
    if (el.dataset.text === '1') return 'text';
    if (el.dataset.decimal === '1') return 'money';
    if (el.dataset.numeric === '1') return 'int';

    const key = [el.id, el.name, el.placeholder, labelTextFor(el)].join(' ');
    const isMoney = MONEY_HINT.test(key);
    const isInt = INT_HINT.test(key);

    if (el.type === 'number') {
      // Respekte step la si markup la deja presize desimal (0.01, 0.5, any…)
      const step = String(el.step || '').trim();
      const stepIsDecimal = step && step !== '1' && step !== 'step';
      if (isMoney || stepIsDecimal) return 'money';
      return 'int';
    }
    if (isMoney) return 'money';
    if (isInt) return 'int';
    return 'text';
  }

  function hardenNumeric(el, kind) {
    if (el.dataset.v41 === kind) return;
    el.dataset.v41 = kind;
    el.setAttribute('inputmode', kind === 'money' ? 'decimal' : 'numeric');
    el.setAttribute('pattern', kind === 'money' ? '[0-9]*[.,]?[0-9]*' : '[0-9]*');
    if (el.type === 'number' && kind === 'int') el.step = '1';

    const allowedKeys = kind === 'money'
      ? ['0','1','2','3','4','5','6','7','8','9','.',',']
      : ['0','1','2','3','4','5','6','7','8','9'];

    el.addEventListener('keydown', (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return; // pèmèt copy/paste/select-all
      if (['Backspace','Delete','Tab','Escape','Enter','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key)) return;
      if (allowedKeys.includes(e.key)) {
        // yon sèl pwen desimal pou chan lajan
        if ((e.key === '.' || e.key === ',') && /[.,]/.test(el.value)) e.preventDefault();
        return;
      }
      e.preventDefault();
    });

    el.addEventListener('input', () => {
      let clean = kind === 'money'
        ? String(el.value).replace(/[^0-9.,]/g, '').replace(',', '.')
        : String(el.value).replace(/[^0-9]/g, '');
      if (kind === 'money') {
        const firstDot = clean.indexOf('.');
        if (firstDot !== -1) {
          clean = clean.slice(0, firstDot + 1) + clean.slice(firstDot + 1).replace(/\./g, '');
        }
      }
      if (clean !== el.value) el.value = clean;
    });

    el.addEventListener('paste', (e) => {
      const t = (e.clipboardData || window.clipboardData).getData('text');
      const re = kind === 'money' ? /[^0-9.,]/ : /[^0-9]/;
      if (re.test(t)) {
        e.preventDefault();
        const cleaned = kind === 'money' ? t.replace(/[^0-9.,]/g, '') : t.replace(/[^0-9]/g, '');
        document.execCommand('insertText', false, cleaned);
      }
    });
  }

  function hardenText(el) {
    if (el.dataset.v41t === '1') return;
    el.dataset.v41t = '1';
    el.addEventListener('blur', () => {
      const v = String(el.value || '').trim();
      // pa janm kite chèn "null"/"undefined" ale nan baz done a
      el.value = (v === 'null' || v === 'undefined') ? '' : v;
    });
  }

  // Enter = chan swivan (pi rapid pou antre done anpil)
  function fastEnter(form) {
    if (form.dataset.v41e === '1') return;
    form.dataset.v41e = '1';
    form.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' || e.target.tagName === 'TEXTAREA') return;
      const fields = [...form.querySelectorAll('input,select,textarea')]
        .filter(f => !f.disabled && f.type !== 'hidden');
      const i = fields.indexOf(e.target);
      if (i > -1 && i < fields.length - 1) { e.preventDefault(); fields[i + 1].focus(); }
    });
  }

  // Bloqué soumèt si yon chan obligatwa vid
  function guardSubmit(form) {
    if (form.dataset.v41s === '1') return;
    form.dataset.v41s = '1';
    form.addEventListener('submit', (e) => {
      const bad = [...form.querySelectorAll('[required]')]
        .find(f => !String(f.value || '').trim());
      if (bad) {
        e.preventDefault();
        e.stopImmediatePropagation();
        bad.focus();
        if (window.Lotri && window.Lotri.toast) window.Lotri.toast('Ce champ est obligatoire.', 'error');
      }
    }, true);
  }

  function scan(root) {
    (root || document).querySelectorAll('input').forEach(el => {
      if (['checkbox', 'radio', 'file', 'date', 'time', 'password', 'email'].includes(el.type)) return;
      const kind = classify(el);
      if (kind === 'text') hardenText(el);
      else hardenNumeric(el, kind);
    });
    (root || document).querySelectorAll('form').forEach(f => { fastEnter(f); guardSubmit(f); });
  }

  document.addEventListener('DOMContentLoaded', () => scan(document));
  document.addEventListener('lotri:view', () => scan(document));
  new MutationObserver(() => scan(document))
    .observe(document.documentElement, { childList: true, subtree: true });
})();


/* =====================================================================
 * JADSTACK LOTTO — MONTRE/KACHE MODPAS (tout chan modpas, otomatik)
 * ---------------------------------------------------------------------
 * Anwoule CHAK <input type="password"> nan yon ti wrapper ak yon
 * bouton "je" pou moun ka wè modpas la pandan y ap tape l. Mache sou
 * chan ki deja nan HTML la AK sou chan ki kreye pita (modal dinamik)
 * gras a yon MutationObserver.
 * ===================================================================== */
(function () {
  function wrap(input) {
    if (input.dataset.jlPwWrapped === '1') return;
    if (input.closest('.jl-pw-wrap')) { input.dataset.jlPwWrapped = '1'; return; }
    input.dataset.jlPwWrapped = '1';

    const wrapper = document.createElement('div');
    wrapper.className = 'jl-pw-wrap';
    wrapper.style.cssText = 'position:relative;display:block';
    input.parentNode.insertBefore(wrapper, input);
    wrapper.appendChild(input);
    input.style.paddingRight = '2.6rem';
    input.setAttribute('autocomplete', input.getAttribute('autocomplete') || 'current-password');

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'jl-pw-toggle';
    btn.setAttribute('tabindex', '-1');
    btn.setAttribute('aria-label', 'Afficher/masquer le mot de passe');
    btn.style.cssText = 'position:absolute;right:.5rem;top:50%;transform:translateY(-50%);' +
      'background:none;border:0;padding:.3rem;cursor:pointer;color:var(--muted,#888);line-height:1;';
    btn.innerHTML = '<i class="fa-solid fa-eye"></i>';
    wrapper.appendChild(btn);

    btn.addEventListener('click', () => {
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      btn.innerHTML = show ? '<i class="fa-solid fa-eye-slash"></i>' : '<i class="fa-solid fa-eye"></i>';
    });
  }

  function scan(root) {
    (root || document).querySelectorAll('input[type="password"]').forEach(wrap);
  }

  scan(document);
  if (window.MutationObserver) {
    let t = null;
    new MutationObserver((muts) => {
      let needs = false;
      for (const m of muts) {
        if (!m.addedNodes) continue;
        for (const n of m.addedNodes) {
          if (n.nodeType !== 1) continue;
          if (n.matches && n.matches('input[type="password"]')) { needs = true; break; }
          if (n.querySelector && n.querySelector('input[type="password"]')) { needs = true; break; }
        }
        if (needs) break;
      }
      if (!needs) return;
      clearTimeout(t);
      t = setTimeout(() => scan(document), 60);
    }).observe(document.body, { childList: true, subtree: true });
  }
})();


/* Zouti UI komen: anti-doub-voye, spinner sou bouton, badj notifikasyon,
   scroll+flash sou seksyon, konfimasyon. */
(function(){
  window.Lotri = window.Lotri || {};
  const U = window.Lotri.ui = {};

  /* busy(btn, fn) — dezaktive bouton an, desann opasite, mete spinner,
     e anpeche 2yèm apèl pandan premye a ap kouri (anti-doub-klik). */
  U.busy = async function(btn, fn){
    if (!btn) return fn();
    if (btn.dataset.busy === '1') return;
    btn.dataset.busy = '1';
    btn.disabled = true;
    btn.classList.add('is-loading');
    btn.style.opacity = '.6';
    try { return await fn(); }
    finally {
      btn.dataset.busy = '';
      btn.disabled = false;
      btn.classList.remove('is-loading');
      btn.style.opacity = '';
    }
  };

  /* once(key) — garanti yon aksyon fèt YON SÈL fwa (fallback anti-doub-voye) */
  const fired = new Set();
  U.once = function(key){ if (fired.has(key)) return false; fired.add(key); return true; };
  U.clearOnce = function(key){ fired.delete(key); };

  /* Badj notifikasyon: bat 3 min -> poz 2 min -> replay uniquement si gen nouvo.
     Si pa gen nouvo, li rete bloke (san bat) jiskaske gen nouvo.
     Hover sou host la retire pwen an. */
  U.notif = function(host, opts){
    if (!host) return { update(){} };
    const dot = document.createElement('span');
    dot.className = 'notif-dot';
    dot.style.display = 'none';
    host.setAttribute('data-notif-host','');
    host.appendChild(dot);
    let timer = null, cycle = null, seen = 0;
    function beat(){
      dot.classList.add('beating');
      clearTimeout(cycle);
      cycle = setTimeout(()=>{                     // 3 min bat
        dot.classList.remove('beating');
        cycle = setTimeout(()=>{                   // 2 min poz
          if (dot.dataset.fresh === '1') beat();   // replay uniquement si gen nouvo
        }, 2*60*1000);
      }, 3*60*1000);
    }
    host.addEventListener('mouseenter', ()=>{ dot.style.display='none'; dot.dataset.fresh='0'; dot.classList.remove('beating'); clearTimeout(cycle); });
    return {
      update(count){
        if (count > seen){ seen = count; dot.dataset.fresh='1'; dot.style.display='block'; beat(); }
        else if (count === 0){ dot.style.display='none'; dot.dataset.fresh='0'; }
      },
      stop(){ clearTimeout(timer); clearTimeout(cycle); }
    };
  };

  /* Scroll otomatik sou yon seksyon + ti kolorasyon pal ak animasyon */
  U.focusSection = function(id){
    const el = document.getElementById(id);
    if (!el) return false;
    el.scrollIntoView({ behavior:'smooth', block:'start' });
    el.classList.remove('section-flash');
    void el.offsetWidth;
    el.classList.add('section-flash');
    setTimeout(()=> el.classList.remove('section-flash'), 1800);
    return true;
  };

  /* confirm/prompt: pase pa modal.js la (fon flou, klavye, bèl sou mobil).
     Yo retounen yon Promise — tout apèl yo dwe `await`. */
  U.confirm = function(msg, detail, opts){
    if (window.Lotri.modal) return window.Lotri.modal.confirm(msg, detail, opts);
    return Promise.resolve(window.confirm(detail ? (msg + '\n\n' + detail) : msg));
  };
  U.prompt = function(o){
    if (window.Lotri.modal) return window.Lotri.modal.prompt(o);
    return Promise.resolve(window.prompt((o && o.title) || '', (o && o.value) || ''));
  };


  /* Session timeout otomatik apre inaktivite */
  U.armSessionTimeout = function(minutes){
    const ms = (minutes || 30) * 60 * 1000;
    let t;
    const reset = ()=>{ clearTimeout(t); t = setTimeout(()=>{
      window.Lotri.toast && window.Lotri.toast('La session a expiré pour cause d’inactivité.','error');
      window.Lotri.signOut();
    }, ms); };
    ['click','keydown','mousemove','touchstart'].forEach(e=> document.addEventListener(e, reset, { passive:true }));
    reset();
  };
})();


/* =====================================================================
 * JADSTACK LOTTO V16 — PATI D
 * KONPOZAN KOMEN: BAR RECHÈCH + FILTÈ (dat / estati / wòl / elt.)
 * ---------------------------------------------------------------------
 * Yon sèl zouti pou TOUT lis/tablo sit la (Agent, Compagnie, Ticket, Rapport,
 * Estatistik, Siveyans, Verifikasyon Paiement, Opérateur Paiement, Jwèt/Tiraj,
 * Kontak/Mesaj). Menm sistèm vizyèl toupatou — style nan assets/css/final.css
 *
 * ITILIZASYON
 * -----------
 *   const sf = Lotri.searchFilter.mount(host.querySelector('#bar'), {
 *     placeholder: 'Rechercher un agent…',
 *     date: true,                    // filtè dat: jou presi OSWA peryòd
 *     dateLabel: 'Date de création',
 *     filters: [
 *       { key:'status', label:'Statut', options:[
 *           {value:'active', label:'Actif'}, {value:'blocked', label:'Bloqué'} ] }
 *     ],
 *     onChange: (state) => redraw(state)   // debounce 300ms sou tèks la
 *   });
 *
 *   // Filtraj bò kliyan (opsyonèl):
 *   const rows = Lotri.searchFilter.apply(all, sf.state, {
 *     text: ['full_name','public_id','phone'],   // chan pou rechèch tèks
 *     date: 'created_at',                        // chan dat
 *     map:  { status: 'status' }                 // filtè → chan
 *   });
 * ===================================================================== */
(function () {
  window.Lotri = window.Lotri || {};
  const SF = (window.Lotri.searchFilter = {});
  const esc = s => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  let _seq = 0;

  SF.mount = function (host, opts) {
    if (!host) return null;
    const o = opts || {};
    const id = 'sf' + (++_seq);
    const filters = Array.isArray(o.filters) ? o.filters : [];

    host.classList.add('v16-sf');
    host.innerHTML = `
      <div class="v16-sf-search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input class="v16-sf-input" id="${id}-q" type="search"
               placeholder="${esc(o.placeholder || 'Rechercher…')}" aria-label="Rechercher">
        <button class="v16-sf-x" id="${id}-x" title="Supprimer" aria-label="Supprimer">
          <i class="fa-solid fa-xmark"></i></button>
      </div>
      ${filters.map(f => `
        <select class="v16-sf-sel" data-f="${esc(f.key)}" aria-label="${esc(f.label || f.key)}">
          <option value="">${esc(f.label || f.key)} — tous</option>
          ${(f.options || []).map(x => `<option value="${esc(x.value)}">${esc(x.label)}</option>`).join('')}
        </select>`).join('')}
      ${o.date === false ? '' : `
        <select class="v16-sf-sel" id="${id}-dm" aria-label="Filtres dat">
          <option value="">${esc(o.dateLabel || 'Date')} — tous</option>
          <option value="today">Aujourd'hui</option>
          <option value="7">7 dènye jou</option>
          <option value="30">30 dènye jou</option>
          <option value="day">Un jour précis</option>
          <option value="range">Période (soti → jiska)</option>
        </select>
        <input class="v16-sf-date" id="${id}-d1" type="date" hidden aria-label="Soti">
        <span class="v16-sf-arrow" id="${id}-ar" hidden>→</span>
        <input class="v16-sf-date" id="${id}-d2" type="date" hidden aria-label="Au">`}
      <button class="v16-sf-reset" id="${id}-r" title="Tous réinitialiser"><i class="fa-solid fa-rotate-left"></i></button>`;

    const $ = s => host.querySelector(s);
    const qEl = $('#' + id + '-q');
    const dm = $('#' + id + '-dm'), d1 = $('#' + id + '-d1'),
      d2 = $('#' + id + '-d2'), ar = $('#' + id + '-ar');

    const api = {
      state: { q: '', from: null, to: null, dateMode: '', filters: {} },
      host, read, reset
    };

    function iso(d, end) {
      if (!d) return null;
      return d + (end ? 'T23:59:59.999' : 'T00:00:00.000');
    }
    function daysAgo(n) {
      const t = new Date(); t.setDate(t.getDate() - n);
      return t.toISOString().slice(0, 10);
    }

    function read() {
      const st = api.state;
      st.q = (qEl.value || '').trim();
      st.filters = {};
      host.querySelectorAll('[data-f]').forEach(sel => {
        if (sel.value) st.filters[sel.dataset.f] = sel.value;
      });
      st.from = st.to = null;
      st.dateMode = dm ? dm.value : '';
      if (dm) {
        const m = dm.value;
        if (m === 'today') { const t = new Date().toISOString().slice(0, 10); st.from = iso(t); st.to = iso(t, true); }
        else if (m === '7') { st.from = iso(daysAgo(7)); }
        else if (m === '30') { st.from = iso(daysAgo(30)); }
        else if (m === 'day' && d1.value) { st.from = iso(d1.value); st.to = iso(d1.value, true); }
        else if (m === 'range') { st.from = iso(d1.value); st.to = iso(d2.value, true); }
      }
      return st;
    }

    function syncDate() {
      if (!dm) return;
      const m = dm.value;
      d1.hidden = !(m === 'day' || m === 'range');
      d2.hidden = m !== 'range';
      ar.hidden = m !== 'range';
    }

    function fire() { read(); if (typeof o.onChange === 'function') o.onChange(api.state, api); }

    let t = null;
    qEl.addEventListener('input', () => { clearTimeout(t); t = setTimeout(fire, o.debounce || 300); });
    qEl.addEventListener('search', fire);
    $('#' + id + '-x').onclick = () => { qEl.value = ''; fire(); qEl.focus(); };
    host.querySelectorAll('[data-f]').forEach(sel => sel.onchange = fire);
    if (dm) { dm.onchange = () => { syncDate(); fire(); }; d1.onchange = fire; d2.onchange = fire; }

    function reset() {
      qEl.value = '';
      host.querySelectorAll('[data-f]').forEach(s => s.value = '');
      if (dm) { dm.value = ''; d1.value = ''; d2.value = ''; syncDate(); }
      fire();
    }
    $('#' + id + '-r').onclick = reset;

    syncDate(); read();
    return api;
  };

  /* Filtraj bò kliyan — itil pou tout lis ki deja chaje an memwa. */
  SF.apply = function (rows, state, map) {
    if (!Array.isArray(rows)) return [];
    const st = state || {}, m = map || {};
    const q = (st.q || '').toLowerCase();
    const textFields = m.text || [];
    const dateField = m.date || 'created_at';
    const fmap = m.map || {};
    const from = st.from ? new Date(st.from) : null;
    const to = st.to ? new Date(st.to) : null;

    return rows.filter(r => {
      if (q) {
        const hay = (textFields.length ? textFields.map(f => r[f]) : Object.values(r))
          .filter(v => v != null && typeof v !== 'object').join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      for (const k in st.filters || {}) {
        const field = fmap[k] || k;
        if (String(r[field] == null ? '' : r[field]) !== String(st.filters[k])) return false;
      }
      if (from || to) {
        const v = r[dateField];
        if (!v) return false;
        const d = new Date(v);
        if (from && d < from) return false;
        if (to && d > to) return false;
      }
      return true;
    });
  };


  /* ---------------------------------------------------------------------
   * V16 · PATI D — OTO-APLIKASYON SOU TOUT LIS/TABLO SIT LA
   * Olye pou n modifye 15 fichye youn pa youn, nou obsève DOM nan: chak
   * tablo (`table`) oswa gri (`.v11-pay-grid`, `.v11-list`) ki anndan yon
   * `.card` san bar rechèch resevwa MENM konpozan an otomatikman.
   * Pou dezaktive sou yon kat: mete `data-nosf` sou kat la.
   * ------------------------------------------------------------------- */
  function rowsOf(container) {
    const tb = container.matches('table') ? container.querySelector('tbody') : null;
    if (tb) return Array.from(tb.rows);
    return Array.from(container.children).filter(el => el.nodeType === 1 && !el.classList.contains('empty'));
  }

  function autoAttach(container) {
    const card = container.closest('.card') || container.parentElement;
    if (!card || card.dataset.nosf !== undefined || card.dataset.sfDone) return;
    if (rowsOf(container).length < 3) return;          // pa itil sou yon ti lis
    card.dataset.sfDone = '1';

    const bar = document.createElement('div');
    const anchor = card.querySelector('.card-hd');
    if (anchor && anchor.nextSibling) card.insertBefore(bar, anchor.nextSibling);
    else card.insertBefore(bar, card.firstChild);

    // Dènye eta filtè a (ranpli pa onChange, itilize ankò pa
    // re-aplikasyon otomatik lè liy tablo a chanje pi ba a).
    let lastState = null;

    function runFilter(st) {
      const q = (st.q || '').toLowerCase();
      const from = st.from ? new Date(st.from) : null;
      const to = st.to ? new Date(st.to) : null;
      let shown = 0;
      rowsOf(container).forEach(row => {
        let ok = true;
        if (q) ok = (row.textContent || '').toLowerCase().includes(q);
        if (ok && (from || to)) {
          const raw = row.dataset.date || (row.textContent.match(/\d{4}-\d{2}-\d{2}/) || [])[0];
          if (!raw) ok = false;
          else {
            const d = new Date(raw);
            if (from && d < from) ok = false;
            if (to && d > to) ok = false;
          }
        }
        row.style.display = ok ? '' : 'none';
        if (ok) shown++;
      });
      let none = card.querySelector('.v16-sf-none');
      if (!shown && (q || from || to)) {
        if (!none) {
          none = document.createElement('div');
          none.className = 'empty v16-sf-none';
          none.textContent = 'Aucun résultat pour cette recherche/ce filtre.';
          container.parentElement.appendChild(none);
        }
      } else if (none) none.remove();
    }

    SF.mount(bar, {
      placeholder: 'Rechercher dans la liste…',
      date: true,
      onChange: (st) => { lastState = st; runFilter(st); }
    });

    // Bug konfime: lè lis la rechaje (egz. apre kreye/efase yon ranje),
    // tablo a ranplase (`innerHTML =`), men filtè a pa t janm re-aplike
    // sou nouvo liy yo — yo tout te parèt san filtraj menm si moun nan
    // te gen yon rechèch aktif. Obsève KONTNAN container a espesifikman
    // pou re-aplike dènye filtè a chak fwa liy yo chanje.
    if (window.MutationObserver) {
      let rt = null;
      new MutationObserver(() => {
        if (!lastState || (!lastState.q && !lastState.from && !lastState.to)) return;
        clearTimeout(rt);
        rt = setTimeout(() => runFilter(lastState), 40);
      }).observe(container, { childList: true, subtree: true });
    }
  }

  SF.scan = function (root) {
    (root || document).querySelectorAll('.card table, .card .v11-pay-grid, .card .v11-list')
      .forEach(autoAttach);
  };

  SF.auto = function () {
    if (SF._auto) return;
    SF._auto = true;
    let t = null;
    const kick = () => { clearTimeout(t); t = setTimeout(() => SF.scan(document), 250); };
    document.addEventListener('lotri:ready', kick);
    document.addEventListener('lotri:view', kick);
    new MutationObserver(kick).observe(document.body, { childList: true, subtree: true });
    kick();
  };

  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', () => SF.auto());
  else SF.auto();

  /* Rakoursi: kreye yon bar epi tache l anwo yon kat. */
  SF.attach = function (cardEl, opts) {
    if (!cardEl) return null;
    const bar = document.createElement('div');
    cardEl.insertBefore(bar, cardEl.firstChild);
    return SF.mount(bar, opts);
  };
})();


/* =====================================================================
 * JADSTACK LOTTO v8 — RAPÒ FANTOM (SEKRÈ)
 * ---------------------------------------------------------------------
 * Chak 30 minit, sistèm nan konpoze yon rapò AN TÈKS KONPREYANSIB
 * (pa JSON brit) — egzanp: « Ajan1 te vann 30 dola » — epi li voye l an
 * silans pa FormSubmit (AJAX, san redireksyon). Adresse la OBFISKE nan kòd
 * la (li rekonpoze nan memwa uniquement).
 *
 * Règ:
 *  - Rapport yo SEPARE STRIKTEMAN: Super Admin / Compagnie / Ajan.
 *    Chak wòl resevwa SÈLMAN done ki konsène l.
 *  - Chak rapò sovgade tou nan tab `phantom_reports`.
 *  - Anti-doub voye: yon anpwent (fingerprint) sou kontni mesaj la;
 *    si anpwent lan deja egziste, nou pa voye ankò.
 *  - Pa gen okenn tras vizib nan enterfas la.
 * ===================================================================== */
(function(){
  window.Lotri = window.Lotri || {};
  const P = window.Lotri.phantom = {};
  const EVERY_MS = 30 * 60 * 1000;
  const LS_LAST = 'jl:ph:last';

  // Adresse obfiske (base64 an mòso) — rekonpoze nan memwa uniquement.
  const PARTS = ['YXlpdGlk', 'ZXZsb3Bt', 'YW5AZ21h', 'aWwuY29t']; // V16 · A.3
  function target(){
    try { return PARTS.map(p => atob(p)).join(''); } catch(_) { return ''; }
  }

  function money(n){ return Number(n||0).toFixed(2); }

  function fp(str){
    let h = 5381;
    for (let i=0;i<str.length;i++) h = ((h*33) ^ str.charCodeAt(i)) >>> 0;
    return 'ph' + h.toString(36) + '-' + str.length;
  }

  /* ---- Konpoze tèks imen an pa wòl ---- */
  function textForSuperAdmin(d){
    const p = d.platform || {};
    const lines = [];
    lines.push('RAPPORT SUPER ADMINISTRATEUR — 30 dernières minutes');
    lines.push('Période : ' + new Date(d.from).toLocaleString() + ' → ' + new Date(d.to).toLocaleString());
    lines.push('');
    lines.push('Sur toute la plateforme, ' + (p.tickets||0) + ' fiches vendues pour un total ' + money(p.sales) + ' dola.');
    lines.push('Primes payées : ' + money(p.prizes) + ' dola.');
    lines.push('Nouvelle compagnie : ' + (p.new_companies||0) + ' — nouvel agent : ' + (p.new_agents||0) + '.');
    lines.push('');
    if ((d.companies||[]).length){
      lines.push('Détail par compagnie :');
      d.companies.forEach(c => lines.push('  • ' + c.company + ' te vann ' + money(c.sales) +
        ' dola sou ' + c.tickets + ' fiches (primes : ' + money(c.prizes) + ' dola).'));
    } else lines.push('Aucune compagnie n’a réalisé de vente sur cette période.');
    return lines.join('\n');
  }

  function textForCompany(d, companyName){
    const rows = (d.agents||[]).filter(a => a.company === companyName);
    const total = rows.reduce((s,a)=> s + Number(a.sales||0), 0);
    const lines = [];
    lines.push('RAPPORT COMPAGNIE — ' + companyName);
    lines.push('Période : ' + new Date(d.from).toLocaleString() + ' → ' + new Date(d.to).toLocaleString());
    lines.push('');
    lines.push('La compagnie a réalisé ' + money(total) + ' gourdes au cours des 30 dernières minutes.');
    if (rows.length){
      lines.push('');
      lines.push('Détail par agent :');
      rows.forEach(a => lines.push('  • ' + a.agent + ' te vann ' + money(a.sales) +
        ' dola sou ' + a.tickets + ' fich.'));
    } else lines.push('Aucun agent n’a réalisé de vente sur cette période.');
    return lines.join('\n');
  }

  function textForAgent(d, agentName, companyName){
    const me = (d.agents||[]).find(a => a.agent === agentName && a.company === companyName);
    const lines = [];
    lines.push('RAPPORT AGENT — ' + agentName + ' (' + companyName + ')');
    lines.push('Période : ' + new Date(d.from).toLocaleString() + ' → ' + new Date(d.to).toLocaleString());
    lines.push('');
    lines.push(me
      ? (agentName + ' te vann ' + money(me.sales) + ' dola sou ' + me.tickets + ' fich.')
      : (agentName + ' n\'a réalisé aucune vente au cours des 30 dernières minutes.'));
    return lines.join('\n');
  }

  /* ---- Envoyer pa FormSubmit (AJAX) + sovgade nan baz done a ---- */
  async function deliver(scope, body, meta){
    const finger = fp(scope + '|' + body);
    // Anti-doub lokal
    try {
      const seen = JSON.parse(localStorage.getItem('jl:ph:fp') || '[]');
      if (seen.includes(finger)) return false;
      seen.push(finger);
      localStorage.setItem('jl:ph:fp', JSON.stringify(seen.slice(-60)));
    } catch(_){}

    // Sovgade (li retounen false si anpwent lan deja nan baz la)
    let stored = true;
    try {
      const { data } = await window.Lotri.supabase.rpc('jl9_rpc_store_phantom', {
        _scope: scope, _company: meta.company_id || null, _agent: meta.agent_id || null,
        _from: meta.from, _to: meta.to, _body: body, _fingerprint: finger
      });
      stored = data !== false;
    } catch(_){}
    if (!stored) return false;

    const fd = new FormData();
    fd.append('name', 'JADSTACK LOTTO');
    fd.append('email', 'no-reply@jadstacklotto.app');
    fd.append('_subject', 'JADSTACK LOTTO — rapport automatique (' + scope + ')');
    fd.append('_captcha', 'false');
    fd.append('_template', 'basic');
    fd.append('message', body);
    try {
      /* PATI A.1 — fantom rete destinatè prensipal, sipò an `_cc`. */
      try { if (window.Lotri.mail) fd.append('_cc', window.Lotri.mail.studio()); } catch(_){}
      await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(target()), {
        method:'POST', headers:{ 'Accept':'application/json' }, body: fd
      });
    } catch(_){ /* silans total — fallback: rapò a deja sovgade nan baz la */ }
    return true;
  }

  async function runOnce(profile){
    if (!profile) return;
    let d;
    try {
      const { data, error } = await window.Lotri.supabase.rpc('jl9_rpc_phantom_data', { _minutes: 30 });
      if (error || !data) return;
      d = data;
    } catch(_) { return; }

    const meta = { from: d.from, to: d.to, company_id: profile.company_id || null, agent_id: profile.agent_id || null };

    if (profile.role === 'super_admin') {
      await deliver('super_admin', textForSuperAdmin(d), { ...meta, company_id: null, agent_id: null });
      return;
    }
    if (profile.role === 'company' || profile.role === 'supervisor') {
      const name = (window.Lotri._companyName || '').trim();
      if (!name) return;
      await deliver('company', textForCompany(d, name), { ...meta, agent_id: null });
      return;
    }
    if (profile.role === 'agent') {
      const name = (profile.full_name || '').trim();
      const co = (window.Lotri._companyName || '').trim();
      if (!name) return;
      await deliver('agent', textForAgent(d, name, co), meta);
    }
  }

  P.arm = function(profile){
    if (P._armed) return; P._armed = true;
    const due = ()=> {
      const last = Number(localStorage.getItem(LS_LAST) || 0);
      return Date.now() - last >= EVERY_MS;
    };
    const tick = async ()=>{
      if (!due()) return;
      localStorage.setItem(LS_LAST, String(Date.now()));
      try { await runOnce(profile); } catch(_){}
    };
    setTimeout(tick, 20000);            // premye pas: 20 segond apre chajman
    setInterval(tick, 5 * 60 * 1000);   // apre sa, li tcheke chak 5 min si 30 min pase
  };
})();


/* =====================================================================
 * JADSTACK LOTTO v8 — SEKIRITE
 *  - Rate limit koneksyon (lokal + sèvè)
 *  - 2FA TOTP (RFC 6238) pou Super Admin — verifikasyon nan navigatè a
 *  - Fèmti tiraj otomatik (poll chak minit)
 *  - Zouti validasyon limit boul an tan reyèl
 * ===================================================================== */
(function(){
  window.Lotri = window.Lotri || {};
  const S = window.Lotri.security = {};
  const LS_KEY = 'jl:login:';
  const MAX_FAILS = 5;
  const WINDOW_MIN = 15;

  /* ---------- Rate limit ---------- */
  function localFails(email){
    try {
      const raw = localStorage.getItem(LS_KEY + email);
      if (!raw) return [];
      const arr = JSON.parse(raw).filter(t => Date.now() - t < WINDOW_MIN*60*1000);
      return arr;
    } catch(_) { return []; }
  }

  S.loginGuard = async function(email){
    const fails = localFails(email);
    if (fails.length >= MAX_FAILS) {
      const wait = Math.ceil((WINDOW_MIN*60*1000 - (Date.now() - fails[0]))/60000);
      return { blocked:true, message:'Trop de tentatives. Patientez '+wait+' minutes avant de réessayer.' };
    }
    return { blocked:false };
  };

  S.noteLogin = async function(email, ok){
    try {
      if (!ok) {
        const arr = localFails(email); arr.push(Date.now());
        localStorage.setItem(LS_KEY + email, JSON.stringify(arr));
      } else {
        localStorage.removeItem(LS_KEY + email);
      }
    } catch(_){}
    try { await window.Lotri.supabase.rpc('jl9_rpc_login_guard', { _email: email, _ok: !!ok }); } catch(_){}
  };

  /* ---------- TOTP (RFC 6238, SHA-1, 30s, 6 chif) ---------- */
  function b32decode(s){
    const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let bits = '', out = [];
    s = String(s||'').toUpperCase().replace(/=+$/,'').replace(/\s/g,'');
    for (const c of s){ const i = A.indexOf(c); if (i < 0) continue; bits += i.toString(2).padStart(5,'0'); }
    for (let i = 0; i + 8 <= bits.length; i += 8) out.push(parseInt(bits.substr(i,8),2));
    return new Uint8Array(out);
  }

  S.totpCode = async function(secret, counter){
    const key = await crypto.subtle.importKey('raw', b32decode(secret),
      { name:'HMAC', hash:'SHA-1' }, false, ['sign']);
    const buf = new ArrayBuffer(8); const view = new DataView(buf);
    view.setUint32(0, Math.floor(counter / 0x100000000));
    view.setUint32(4, counter >>> 0);
    const sig = new Uint8Array(await crypto.subtle.sign('HMAC', key, buf));
    const off = sig[sig.length - 1] & 0x0f;
    const bin = ((sig[off] & 0x7f) << 24) | (sig[off+1] << 16) | (sig[off+2] << 8) | sig[off+3];
    return String(bin % 1000000).padStart(6,'0');
  };

  S.verifyTotp = async function(secret, code){
    if (!secret) return false;
    const t = Math.floor(Date.now()/1000/30);
    for (const d of [-1, 0, 1]) {
      if (await S.totpCode(secret, t + d) === String(code).trim()) return true;
    }
    return false;
  };

  S.newTotpSecret = function(){
    const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    const b = crypto.getRandomValues(new Uint8Array(20));
    return Array.from(b).map(x => A[x % 32]).join('');
  };

  S.totpUri = function(secret, label){
    return 'otpauth://totp/' + encodeURIComponent(label || 'JADSTACK LOTTO') +
           '?secret=' + secret + '&issuer=JADSTACK%20LOTTO&digits=6&period=30';
  };

  /* ---------- Fèmti tiraj otomatik ---------- */
  S.armDrawAutoClose = function(){
    if (S._drawTimer) return;
    const tick = async ()=>{
      try { await window.Lotri.supabase.rpc('jl9_rpc_close_due_draws'); } catch(_){}
    };
    tick();
    S._drawTimer = setInterval(tick, 60*1000);
  };

  /* ---------- Limites de boules an tan reyèl (tcheke anvan voye fich la) ---------- */
  S.checkBallLimit = async function(drawId, gameCode, number, amount){
    try {
      const SB = window.Lotri.supabase;
      const { data: limits } = await SB.from('jl9_risk_limits')
        .select('max_amount,game_code,bet_number,scope')
        .in('scope', ['number','agent_number']).eq('bet_number', number);
      const lim = (limits||[]).filter(l => !l.game_code || l.game_code.toLowerCase() === String(gameCode).toLowerCase())
                              .sort((a,b)=> a.max_amount - b.max_amount)[0];
      if (!lim || !lim.max_amount) return null;
      const { data: rows } = await SB.from('jl9_tickets').select('bets,status').eq('draw_id', drawId).neq('status','cancelled');
      let used = 0;
      (rows||[]).forEach(r => (r.bets||[]).forEach(b => { if (String(b.n) === String(number)) used += Number(b.a||0); }));
      if (used + Number(amount) > Number(lim.max_amount)) {
        return 'Limites de boules ' + number + ' survenu (' + used + ' / ' + lim.max_amount + '). Nous ne pouvons pas accepter ce montant.';
      }
      return null;
    } catch(_) { return null; }
  };
})();


/* JADSTACK LOTTO V88 — édition française par défaut.
 * Frontend uniquement : aucune table/RPC Supabase n'est modifiée.
 * Une fois l'édition initialisée, l'utilisateur peut toujours changer de langue.
 */
(function () {
  try {
    const EDITION = 'jl:fr-edition-v88';
    if (!localStorage.getItem(EDITION)) {
      localStorage.setItem('jl:lang', 'fr');
      localStorage.setItem(EDITION, '1');
    }
  } catch (_) {}
})();


/* =====================================================================
 * JADSTACK LOTTO V34 — i18n.js
 * ---------------------------------------------------------------------
 * Diksyonè a chaje pa RPC `jl30_rpc_get_dict(_lang)` (tab santral
 * `jl30_i18n_strings`). Langue aktif la PA soti nan localStorage uniquement: li
 * rezoud pa V34 (`jl34_rpc_lang_context`) — preferans moun nan an premye,
 * epi si li pa genyen, lang KONPAYI a, epi lang SISTÈM nan.
 *
 * Itilizasyon nan HTML :  <span data-i18n="ui.total">Total</span>
 * Itilizasyon nan JS   :  Lotri.t('ui.total', 'Total')
 * ===================================================================== */
(function () {
  window.Lotri = window.Lotri || {};
  const L = window.Lotri;
  const I = (L.i18n = {});
  let dict = {};
  I.dict = () => dict;

  I.available = ['fr', 'ht', 'en'];
  I.labels = { fr: 'Français', ht: 'Créole', en: 'English' };
  I.default = 'fr';   // V88: édition française — Français actif par défaut

  function detectDeviceLang() {
    try {
      const nav = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
      return I.available.includes(nav) ? nav : I.default;
    } catch (_) { return I.default; }
  }

  I.current = (function () {
    try {
      const saved = localStorage.getItem('jl:lang');
      if (saved && I.available.includes(saved)) return saved;
    } catch (_) {}
    return detectDeviceLang();
  })();

  L.t = function (key, fallback) {
    if (!key) return fallback || '';
    let v = (dict && typeof dict[key] === 'string') ? dict[key] : undefined;
    if (v === undefined)
      v = key.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : undefined, dict);
    return (typeof v === 'string' && v) ? v : (fallback !== undefined ? fallback : key);
  };

  I.apply = function (root) {
    (root || document).querySelectorAll('[data-i18n]').forEach(el => {
      const v = L.t(el.dataset.i18n, null);
      if (v !== null) el.textContent = v;
    });
    (root || document).querySelectorAll('[data-i18n-ph]').forEach(el => {
      const v = L.t(el.dataset.i18nPh, null);
      if (v !== null) el.placeholder = v;
    });
  };

  I.load = async function (code) {
    code = I.available.includes(code) ? code : I.default;
    try {
      const sb = L.supabase;
      if (sb) {
        const { data, error } = await sb.rpc('jl30_rpc_get_dict', { _lang: code });
        dict = (!error && data) ? data : {};
      } else { dict = {}; }
    } catch (_) { dict = {}; }
    I.current = code;
    try { localStorage.setItem('jl:lang', code); } catch (_) {}
    document.documentElement.lang = code;
    I.apply(document);
    // Retradui TOUT paj la (tèks ki hardcode nan JS/HTML tou)
    try { if (L.v33 && L.v33.apply) L.v33.apply(document.body); } catch (_) {}
    document.dispatchEvent(new CustomEvent('lang-changed', { detail: code }));
    return dict;
  };

  // Bak-konpatib
  L.loadLang = I.load;

  document.addEventListener('DOMContentLoaded', () => {
    // V34: `v34/lang-v34.js` rele I.load() apre li rezoud lang efektif la.
    // Si li pa prezan (ansyen paj), nou chaje lang lokal la kanmenm.
    setTimeout(() => {
      if (L.v34 && L.v34.loadContext) return;
      I.load(I.current);
    }, 120);
  });
})();


/* =====================================================================
 * Shell komen pou paj wòl yo (v6)
 *  - Header fiks ki PASE SOU TÈT sidemenu a; logo rektangilè nan kwen goch,
 *    wotè = header - 2px, lajè otomatik.
 *  - Sidemenu: logo kare/wonn santre anba header, FIKS pandan meni an skwol.
 *  - Menu dropdown estil w3schools: yon sèl antre prensipal ki ouvri sou-opsyon,
 *    flèch ki vire, animasyon 260ms, aria-expanded + sipò klavye.
 *  - Klik sou yon (sou)meni -> chanje vi + scroll/flash sou seksyon an.
 * ===================================================================== */
window.LotriShell = (function(){
  const views = {};
  function register(key, def){ views[key] = def; }
  /* V10 — konsolidasyon paj: yon vi ka reyitilize yon lòt vi ki deja anrejistre. */
  function get(key){ return views[key]; }
  function firstKey(){ return Object.keys(views)[0]; }
  function currentView(){ return new URL(location.href).searchParams.get('view'); }

  function go(view, section){
    const u = new URL(location.href);
    if (view) u.searchParams.set('view', view); else u.searchParams.delete('view');
    if (section) u.searchParams.set('sec', section); else u.searchParams.delete('sec');
    history.pushState({}, '', u.toString());
    render();
  }
  window.addEventListener('popstate', render);

  function markActive(){
    const cur = currentView() || firstKey();
    document.querySelectorAll('.side-link[data-view]').forEach(a=>{
      if (a.dataset.view === cur){
        a.setAttribute('aria-current','page');
        const sub = a.closest('.side-sub');
        if (sub && !sub.classList.contains('open')){
          sub.classList.add('open');
          const trg = document.querySelector(`[aria-controls="${sub.id}"]`);
          if (trg) trg.setAttribute('aria-expanded','true');
        }
      } else a.removeAttribute('aria-current');
    });
  }

  function render(){
    const key = currentView() || firstKey();
    const def = views[key] || views[firstKey()];
    markActive();
    const host = document.getElementById('view');
    if (!host || !def) return;
    host.innerHTML = '<div class="spinner"></div>';
    const guard = new Promise((_, rej)=> setTimeout(()=> rej(new Error('La page met trop de temps à charger.')), 15000));
    Promise.race([Promise.resolve(def.render(host)), guard])
      .then(()=>{
        if (window.Lotri.lockfield) window.Lotri.lockfield.wire(host);
        if (window.Lotri.syslock) window.Lotri.syslock.wire(host);
        /* v9.4 — chak vi ki fini chaje reklame yon rekonte badj yo. */
        if (window.Lotri.badges) window.Lotri.badges.refresh();
        document.dispatchEvent(new CustomEvent('lotri:view', { detail: host }));
        const sec = new URL(location.href).searchParams.get('sec');
        if (sec) setTimeout(()=> window.Lotri.ui.focusSection(sec), 120);
      })

      .catch(err=>{
        console.error(err);
        host.innerHTML = '<div class="empty"><i class="fa-solid fa-triangle-exclamation"></i>Erreur: '+window.Lotri.escapeHtml(err.message||String(err))+'</div>';
      });
  }

  /* Konstwi yon antre meni. `item` ka:
     { key, label, icon }                       -> lyen senp
     { label, icon, children:[{key,label,sec}] } -> dropdown w3schools */
  function menuHtml(items){
    const esc = window.Lotri.escapeHtml;
    return items.map((it, idx)=>{
      if (!it.children){
        return `<button class="side-link" data-view="${esc(it.key)}" ${it.sec?`data-sec="${esc(it.sec)}"`:''} type="button">
                  <span class="ico">${it.icon||''}</span><span class="lbl">${esc(it.label)}</span></button>`;
      }
      const id = 'sub-'+idx;
      return `<button class="side-link" type="button" aria-expanded="false" aria-controls="${id}" data-toggle="${id}">
                <span class="ico">${it.icon||''}</span><span class="lbl">${esc(it.label)}</span>
                <i class="fa-solid fa-chevron-right caret"></i></button>
              <div class="side-sub" id="${id}"><div>
                ${it.children.map(ch=>`<button class="side-link" type="button" data-view="${esc(ch.key)}" ${ch.sec?`data-sec="${esc(ch.sec)}"`:''}>
                    <span class="lbl">${esc(ch.label)}</span></button>`).join('')}
              </div></div>`;
    }).join('');
  }

  async function mount(menu, brandLabel){
    const profile = await (window.__lotriProfile
      ? Promise.resolve(window.__lotriProfile)
      : new Promise((res, rej)=>{
          const t = setTimeout(()=> rej(new Error('Profil non chargé')), 15000);
          document.addEventListener('lotri:ready', e=>{ clearTimeout(t); res(e.detail); }, { once:true });
        })).catch(err=>{
          document.body.innerHTML = `<div class="empty" style="margin-top:4rem">
            <i class="fa-solid fa-triangle-exclamation"></i><h3>Impossible de charger l'application</h3>
            <p class="muted">${window.Lotri.escapeHtml(err.message)}</p>
            <button class="btn btn-primary" onclick="location.reload()">Réessayer</button></div>`;
          return null;
        });
    if (!profile) return;

    const esc = window.Lotri.escapeHtml;
    /* V64 — grid PC fèt DIRÈK nan CSS (@media min-width:960px sou
       .shell). Okenn atribi `data-desktop` pa ekri ankò — se lajè
       ekran an sèl (CSS) ki deside, pou TOUT 4 wòl yo menm jan. */
    document.body.innerHTML = `
      <header class="appbar">
        <div class="left">
          <button class="btn btn-icon btn-ghost" id="collapse-btn" aria-label="Menu"><i class="fa-solid fa-bars"></i></button>
          <span class="logo-wide" data-brand="wide" aria-label="JADSTACK LOTTO"></span>
        </div>
        <div class="right">
          <span class="badge">${esc(String(profile.role||'').replace('_',' '))}</span>
          <button class="btn btn-icon btn-ghost" id="theme-btn" title="Changer de thème"></button>
          <div class="avatar">${esc((profile.full_name||profile.email||'?').charAt(0).toUpperCase())}</div>
          <button class="btn btn-sm btn-ghost" id="logout-btn"><i class="fa-solid fa-arrow-right-from-bracket"></i> Déconnexion</button>
        </div>
      </header>
      <div class="shell" id="shell">
        <div class="sidebar-backdrop" id="sidebar-backdrop"></div>
        <aside class="sidebar">
          ${profile.role === 'super_admin'
            ? `<div class="logo-mark" data-brand="mark" title="${esc(brandLabel||'')}"></div>`
            : ''}
          <div id="side-company"></div>
          <div class="side-scroll">
            <div class="side-search"><input class="input" id="menu-search" placeholder="Rechercher dans le menu…" aria-label="Rechercher dans le menu"></div>
            ${menuHtml(menu)}
          </div>
        </aside>
        <main class="view" id="view"></main>
      </div>`;

    window.Lotri.paintBrand();
    window.Lotri.loadConfig().then(()=> window.Lotri.paintBrand());
    renderCompanyBadge(profile);

    // Dropdown (klik + klavye)
    document.querySelectorAll('[data-toggle]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const sub = document.getElementById(btn.dataset.toggle);
        const open = sub.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      btn.addEventListener('keydown', e=>{ if (e.key==='Enter'||e.key===' '){ e.preventDefault(); btn.click(); } });
    });
    const shellEl = document.getElementById('shell');
    const isWide = ()=> window.matchMedia('(min-width: 960px) and (min-height: 651px), (min-width: 960px) and (pointer: fine)').matches;
    document.querySelectorAll('.side-link[data-view]').forEach(a=>{
      a.addEventListener('click', ()=>{
        go(a.dataset.view, a.dataset.sec);
        if (!isWide()) closeDrawer();
      });
    });
    function openDrawer(){
      shellEl.classList.add('drawer-open');
      // Sèl sistèm lock/unlock skwòl la se v34/scroll-fix.js — rele l isit
      // pou evite 2 sistèm k ap goumen pou menm klas la san youn konnen lòt.
      if (window.Lotri.v34 && window.Lotri.v34.syncScroll) window.Lotri.v34.syncScroll();
    }
    function closeDrawer(){
      shellEl.classList.remove('drawer-open');
      if (window.Lotri.v34 && window.Lotri.v34.syncScroll) window.Lotri.v34.syncScroll();
    }
    document.getElementById('sidebar-backdrop').addEventListener('click', closeDrawer);

    /* Jès swipe (ouvri/fèmen tiwa a) — jere pa v34/scroll-fix.js uniquement
       (`.jl34-edge` + gestures()) pou evite 2 lisnè touchstart/touchend
       ki ka konfonn menm jès la. shell.js uniquement ekspoze openDrawer/
       closeDrawer pi wo a pou lòt kòd (klik sou lyen meni, elt.) itilize. */


    // Rechèch nan meni
    const search = document.getElementById('menu-search');
    search.addEventListener('input', ()=>{
      const q = search.value.trim().toLowerCase();
      document.querySelectorAll('.side-scroll .side-link').forEach(l=>{
        const txt = (l.textContent||'').toLowerCase();
        l.style.display = (!q || txt.includes(q)) ? '' : 'none';
      });
      if (q) document.querySelectorAll('.side-sub').forEach(s=> s.classList.add('open'));
    });

    document.getElementById('logout-btn').addEventListener('click', ()=> window.Lotri.signOut());
    document.getElementById('collapse-btn').addEventListener('click', ()=>{
      if (isWide()) shellEl.classList.toggle('collapsed');
      else shellEl.classList.contains('drawer-open') ? closeDrawer() : openDrawer();
    });
    window.addEventListener('resize', ()=>{ if (isWide()) closeDrawer(); });
    const themeBtn = document.getElementById('theme-btn');
    const paint = ()=> themeBtn.innerHTML = window.Lotri.themeIcon();
    themeBtn.addEventListener('click', ()=>{ window.Lotri.toggleTheme(); paint(); });
    paint();

    window.Lotri.ui.armSessionTimeout((window.Lotri.config.ops||{}).session_timeout_min);
    render();
    if (window.Lotri.mountChangePanel) window.Lotri.mountChangePanel();

    /* v8 — sèvis an silans: rapò otomatik + fèmti tiraj + konte notifikasyon */
    if (window.Lotri.phantom) window.Lotri.phantom.arm(profile);
    if (window.Lotri.security && profile.role === 'super_admin') window.Lotri.security.armDrawAutoClose();
    if (window.Lotri.notifications) window.Lotri.notifications.arm(profile);
    /* V87 — push natif Android (tokèn FCM + notifikasyon aksyon rapid) */
    if (window.Lotri.push) window.Lotri.push.arm(profile);
    /* v9.4 — badj meni yo + tchèk fen mwa a (Super Admin uniquement). */
    if (window.Lotri.badges) window.Lotri.badges.arm();
    if (window.Lotri.monthlyCheck && profile.role === 'super_admin') window.Lotri.monthlyCheck.arm(profile);

    return profile;
  }


  /* Logo Compagnie — uniquement sou paj Compagnie ak Agent */
  /* Ki paj pwofil chak wòl ale ladan lè li klike logo konpayi an. */
  const PROFILE_VIEW = { company: 'cprofile', agent: 'aprofile', supervisor: 'aprofile' };

  async function renderCompanyBadge(profile){
    const host = document.getElementById('side-company');
    if (!host || !profile.company_id) return;
    // Logo de la compagnie an se SÈLMAN pou Compagnie / Agent / Sipèvizè.
    // Super Admin li menm wè logo platfòm nan (data-brand="mark") anwo a.
    if (!['company','agent','supervisor'].includes(profile.role)) return;
    const esc = window.Lotri.escapeHtml;
    try {
      const { data } = await window.Lotri.supabase.from('jl9_companies')
        .select('name, logo_url, email').eq('id', profile.company_id).maybeSingle();
      if (!data) return;
      const view = PROFILE_VIEW[profile.role];
      const editable = profile.role === 'company';
      const title = editable ? 'Aller au profil de la compagnie' : 'Consulter le profil de la compagnie (lecture seule)';
      host.innerHTML = `<button type="button" class="side-brand-btn" id="side-company-btn"
          title="${esc(title)}" aria-label="${esc(title)}">
        <div class="logo-mark" style="padding:.9rem 0">
          ${data.logo_url
            ? `<img src="${esc(data.logo_url)}" alt="${esc(data.name)}" style="width:56px;height:56px;border-radius:var(--radius-sm);object-fit:contain">`
            : `<span class="fallback" style="width:56px;height:56px;font-size:1.1rem;border-radius:var(--radius-sm)">${esc((data.name||'K').charAt(0).toUpperCase())}</span>`}
        </div>
        <div class="muted" style="text-align:center;font-size:.8rem;padding:.1rem 0 .6rem;font-weight:600">${esc(data.name)}</div>
      </button><div style="border-bottom:1px solid var(--border)"></div>`;
      window.Lotri._companyName = data.name || '';
      window.Lotri._companyLogo = data.logo_url || '';
      window.Lotri._companyEmail = data.email || '';   /* notifications e-mail (H.6) */
      const btn = document.getElementById('side-company-btn');
      if (btn && view) btn.addEventListener('click', ()=> go(view));
    } catch(_){}
  }


  return { register, get, mount, go, render };
})();


/* =====================================================================
 * JADSTACK LOTTO — mobile-shell.js
 * ---------------------------------------------------------------------
 * Activer SÈLMAN sou ekran <900px. Pa touche `LotriShell`/RPC/pèmisyon —
 * li LI DOM ki deja egziste (.side-link[data-view] ki soti nan menu
 * chak paj deja bay LotriShell.mount()) pou bati bottom-nav ak FAB,
 * kidonk ZEWO konfigirasyon pa wòl pou antreteni apa.
 * ===================================================================== */
(function () {
  const isMobile = () => window.matchMedia('(max-width: 959px), (max-height: 650px) and (pointer: coarse)').matches;

  function buildTopbar() {
    const appbar = document.querySelector('.appbar');
    if (!appbar || appbar.querySelector('.jl-wordmark')) return;
    const right = appbar.querySelector('.right');
    if (!right) return;

    const word = document.createElement('div');
    word.className = 'jl-wordmark';
    word.innerHTML = '<b>JADSTACK</b><span>lotto</span>';
    appbar.querySelector('.left')?.appendChild(word);

    const dots = document.createElement('button');
    dots.type = 'button';
    dots.className = 'jl-dots-btn';
    dots.setAttribute('aria-label', 'Menu');
    dots.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    right.appendChild(dots);
    dots.addEventListener('click', openSheet);
  }

  /* ------------------- Bottom-sheet (3 pwen) ------------------- */
  function openSheet() {
    const p = window.__lotriProfile || {};
    const esc = window.Lotri.escapeHtml;
    let backdrop = document.querySelector('.jl-sheet-backdrop');
    if (backdrop) backdrop.remove();

    backdrop = document.createElement('div');
    backdrop.className = 'jl-sheet-backdrop';
    backdrop.innerHTML = `
      <div class="jl-sheet" role="dialog" aria-label="Menu">
        <div class="jl-sheet-handle"></div>
        <div class="jl-sheet-head">
          <div class="jl-sheet-avatar">${esc((p.full_name || p.email || '?').charAt(0).toUpperCase())}</div>
          <div>
            <div class="jl-sheet-name">${esc(p.full_name || p.email || '—')}</div>
            <div class="jl-sheet-role">${esc(String(p.role || '').replace('_', ' '))}</div>
          </div>
        </div>
        <button class="jl-sheet-item" data-act="theme"><i class="fa-solid fa-circle-half-stroke"></i> Changer de thème</button>
        <button class="jl-sheet-item" data-act="lang"><i class="fa-solid fa-language"></i> Changer de langue</button>
        <button class="jl-sheet-item" data-act="lock"><i class="fa-solid fa-lock"></i> Sécuriser l’application</button>
        <button class="jl-sheet-item danger" data-act="logout"><i class="fa-solid fa-arrow-right-from-bracket"></i> Déconnexion</button>
      </div>`;
    document.body.appendChild(backdrop);
    requestAnimationFrame(() => backdrop.classList.add('open'));

    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeSheet(); });
    backdrop.querySelector('[data-act="theme"]').onclick = () => {
      document.getElementById('theme-btn')?.click(); closeSheet();
    };
    backdrop.querySelector('[data-act="lang"]').onclick = () => {
      closeSheet();
      (document.querySelector('.v30-lang-btn') || document.querySelector('[data-lang-btn]'))?.click();
    };
    backdrop.querySelector('[data-act="lock"]').onclick = () => {
      closeSheet();
      if (window.Lotri.appLock && window.Lotri.appLock.lockNow) window.Lotri.appLock.lockNow();
      else window.Lotri.toast('Cette fonction de sécurité arrive bientôt.', 'info');
    };
    backdrop.querySelector('[data-act="logout"]').onclick = () => { closeSheet(); window.Lotri.signOut(); };
  }
  function closeSheet() {
    const b = document.querySelector('.jl-sheet-backdrop');
    if (!b) return;
    b.classList.remove('open');
    setTimeout(() => b.remove(), 220);
  }

  /* ------------------- Bottom-nav (ak DOM meni ki egziste) ------------------- */
  function buildBottomNav() {
    if (document.querySelector('.jl-bottom-nav')) return;
    const links = Array.from(document.querySelectorAll('.sidebar > .side-scroll .side-link[data-view]'))
      .filter(a => !a.closest('.side-sub'));
    if (!links.length) return;

    /* V87 — Printer kòm opsyon dedye nan bottom-nav, imedyatman apre POS. */
    const ordered = links.slice();
    const printer = ordered.find(a => a.dataset.view === 'printer');
    const posIndex = ordered.findIndex(a => a.dataset.view === 'pos');
    if (printer) {
      ordered.splice(ordered.indexOf(printer), 1);
      ordered.splice(posIndex >= 0 ? posIndex + 1 : 0, 0, printer);
    }
    const picks = ordered.slice(0, 5);
    const nav = document.createElement('nav');
    nav.className = 'jl-bottom-nav';
    nav.innerHTML = picks.map(a => {
      const icoHtml = a.querySelector('.ico')?.innerHTML || '<i class="fa-solid fa-circle"></i>';
      const label = a.querySelector('.lbl')?.textContent || '';
      return `<button type="button" data-view="${a.dataset.view}">${icoHtml}<span>${label}</span></button>`;
    }).join('');
    document.body.appendChild(nav);

    nav.querySelectorAll('button[data-view]').forEach(btn => {
      btn.addEventListener('click', () => window.LotriShell.go(btn.dataset.view));
    });
    syncBottomNavActive();
  }
  function syncBottomNavActive() {
    const cur = new URL(location.href).searchParams.get('view');
    document.querySelectorAll('.jl-bottom-nav button[data-view]').forEach(b => {
      b.classList.toggle('active', b.dataset.view === cur);
    });
  }

  /* ------------------- FAB (rezilta tiraj, si vi a egziste pou wòl la) ------------------- */
  function buildFab() {
    if (document.querySelector('.jl-fab')) return;
    const hasResults = document.querySelector('.side-link[data-view="rezilta"]');
    if (!hasResults) return;
    const fab = document.createElement('button');
    fab.type = 'button';
    fab.className = 'jl-fab';
    fab.setAttribute('aria-label', 'Résultats des tirages');
    fab.innerHTML = '<i class="fa-solid fa-dice"></i>';
    fab.addEventListener('click', () => window.LotriShell.go('rezilta'));
    document.body.appendChild(fab);
  }

  function mountAll() {
    /* V64 — KOREKSYON RASIN "PC vid": `jl-appshell` se klas ki make
       "shell la monte" e tout koreksyon overflow/scroll pou desktop
       (v58-desktop-shell.css) mande `body.jl-appshell` pou yo aktive.
       Avant, klas la te SÈLMAN ajoute lè `isMobile()` te vre — sou PC
       li pa t janm parèt, kidonk okenn koreksyon desktop pa t janm
       pran efè. Klas la kounye a toujou prezan; se uniquement widget
       mobil yo (topbar 3-pwen, bottom-nav, FAB) ki rete gate pa
       isMobile(). */
    document.body.classList.add('jl-appshell');
    if (!isMobile()) return;
    buildTopbar();
    buildBottomNav();
    buildFab();
  }

  function unmountAll() {
    document.querySelector('.jl-bottom-nav')?.remove();
    document.querySelector('.jl-fab')?.remove();
    closeSheet();
  }

  document.addEventListener('lotri:ready', () => setTimeout(mountAll, 0));
  document.addEventListener('lotri:view', () => { syncBottomNavActive(); if (isMobile()) buildFab(); });
  window.addEventListener('resize', () => { isMobile() ? mountAll() : unmountAll(); });
})();


/* Agent navigation: bottom menu changes sections by click only. Swipe navigation and pull-to-refresh are intentionally disabled to avoid scroll conflicts. */

/* =====================================================================
 * JADSTACK LOTTO — cardify.js
 * ---------------------------------------------------------------------
 * Sou ekran <768px, transfòme chak `.table-wrap table` an lis kat —
 * SAN kreye okenn nouvo eleman DOM: menm <tr>/<td>/bouton, menm
 * `onclick`/`addEventListener` ki te deja tache sou yo kontinye mache
 * san chanje. Nou jis (1) ajoute yon `data-label` sou chak <td> ki soti
 * nan tèks `thead th` korespondan an, (2) ajoute yon klas CSS ki fè
 * rès la (v. app-shell-mobile.css §6).
 * ===================================================================== */
(function () {
  const isMobile = () => window.matchMedia('(max-width: 767px)').matches;

  function cardifyTable(table) {
    if (!table || table.dataset.jlCardified === '1') return;
    const heads = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent.trim());
    if (!heads.length) return;
    table.querySelectorAll('tbody tr').forEach(tr => {
      Array.from(tr.children).forEach((td, i) => {
        if (heads[i] !== undefined) td.setAttribute('data-label', heads[i]);
      });
    });
    table.classList.add('jl-cardified');
    table.dataset.jlCardified = '1';
  }

  function scan(root) {
    if (!isMobile()) return;
    (root || document).querySelectorAll('.table-wrap table.table').forEach(cardifyTable);
  }

  const mo = new MutationObserver((muts) => {
    if (!isMobile()) return;
    for (const m of muts) {
      if (m.addedNodes && m.addedNodes.length) { scan(document.getElementById('view') || document); break; }
    }
  });

  function start() {
    const host = document.getElementById('view');
    if (host) mo.observe(host, { childList: true, subtree: true });
    scan();
  }

  document.addEventListener('lotri:ready', start);
  document.addEventListener('lotri:view', () => scan());
})();


window.LotriStats = {
  async render(host, list){
    // Skeleton pandan chaje
    host.innerHTML = `<div class="grid-stats">${list.map(()=>`<div class="card stat"><div class="skeleton h-6" style="width:60%"></div><div class="skeleton h-10" style="margin-top:.5rem;width:75%"></div></div>`).join('')}</div>`;
    const { data, error } = await window.Lotri.supabase.rpc('jl9_rpc_dashboard_stats');
    if (error) { host.innerHTML = '<div class="empty"><i class="fa-solid fa-triangle-exclamation"></i>Erreur: '+window.Lotri.escapeHtml(error.message)+'</div>'; return; }
    const s = data || {};
    host.innerHTML = `<div class="grid-stats">${list.map(k=>`
      <div class="card stat"><div class="lbl">${window.Lotri.escapeHtml(k.label)}</div>
      <div class="val" data-target="${Number(s[k.key] ?? 0)}">0</div>
      ${k.sub?`<div class="sub">${k.sub}</div>`:''}</div>`).join('')}</div>`;

    // Chiffres ki monte
    host.querySelectorAll('.val[data-target]').forEach(el=>{
      const target = Number(el.dataset.target);
      const dur = 700, start = performance.now();
      const isFloat = !Number.isInteger(target);
      const fmt = (v)=> isFloat ? v.toLocaleString(undefined,{minimumFractionDigits:0, maximumFractionDigits:2}) : Math.round(v).toLocaleString();
      const step = (t)=>{
        const p = Math.min(1, (t - start)/dur);
        const eased = 1 - Math.pow(1-p, 3);
        el.textContent = fmt(target * eased);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = fmt(target);
      };
      requestAnimationFrame(step);
    });
  }
};


// Shared views itilize pa Super Admin, Compagnie ak Ajan.
// Yon sèl sous verite pou Messages / Odit / Rapport — pa gen doubling ankò.
(function(){
  const SB = () => window.Lotri.supabase;
  const esc = window.Lotri.escapeHtml;

  window._sharedReports = async (host)=>{
    host.innerHTML = `<div class="card"><div class="card-hd"><h3>Rapport</h3><button class="btn" id="csv"><i class="fa-solid fa-file-export"></i> Exporter CSV</button></div><div id="body"></div></div>`;
    const { data } = await SB().from('jl9_tickets').select('ticket_no,total,prize_amount,status,created_at').order('created_at',{ascending:false}).limit(500);
    const rows = data||[];
    const sum = rows.reduce((a,r)=> a + (r.status!=='cancelled'? Number(r.total):0), 0);
    const prizes = rows.reduce((a,r)=> a + Number(r.prize_amount||0), 0);
    document.getElementById('body').innerHTML = `
      <div class="grid-stats" style="margin-bottom:1.25rem;">
        <div class="card stat"><div class="lbl">Ticket</div><div class="val">${rows.length}</div></div>
        <div class="card stat"><div class="lbl">Ventes</div><div class="val">${sum.toFixed(2)} HTG</div></div>
        <div class="card stat"><div class="lbl">Prime</div><div class="val">${prizes.toFixed(2)} HTG</div></div>
        <div class="card stat"><div class="lbl">Bénéfice</div><div class="val">${(sum-prizes).toFixed(2)} HTG</div></div>
      </div>
      <div class="table-wrap"><table class="table"><thead><tr><th>#</th><th class="num">Total</th><th class="num">Prime</th><th>Statut</th><th>Date</th></tr></thead>
      <tbody>${rows.length ? rows.map(t=>`<tr data-ticket-no="${esc(t.ticket_no)}"><td class="mono">${esc(t.ticket_no)}</td><td class="num">${Number(t.total).toFixed(2)} HTG</td>
        <td class="num">${Number(t.prize_amount).toFixed(2)} HTG</td><td><span class="badge ${t.status==='won'?'badge-success':t.status==='cancelled'?'badge-danger':''}">${esc(t.status)}</span></td><td class="muted">${new Date(t.created_at).toLocaleString()}</td></tr>`).join('')
        : `<tr><td colspan="5"><div class="empty"><i class="fa-regular fa-folder-open"></i>Aucune donnée.</div></td></tr>`}
      </tbody></table></div>`;
    const role = String((window.__lotriProfile||{}).role||'');
    if (window.JadstackAgentCommission && ['super_admin','employer','company'].includes(role)) {
      const box=document.createElement('div'); box.style.margin='0 0 1rem'; document.getElementById('body').prepend(box);
      try { await window.JadstackAgentCommission.renderReportSummary(box); } catch(e) { box.innerHTML=''; }
    }
    document.getElementById('csv').onclick = ()=>{
      const csv = 'ticket_no,total,prize_amount,status,created_at\n' + rows.map(r=>[r.ticket_no,r.total,r.prize_amount,r.status,r.created_at].join(',')).join('\n');
      const blob = new Blob([csv], {type:'text/csv'}); const a=document.createElement('a');
      a.href=URL.createObjectURL(blob); a.download='rapo.csv'; a.click();
    };
  };

  window._sharedAudit = async (host)=>{
    host.innerHTML = `<div class="card"><div class="card-hd"><h3>Journal d'audit</h3></div><div id="list"></div></div>`;
    const { data } = await SB().from('jl9_audit_logs').select('*').order('created_at',{ascending:false}).limit(200);
    document.getElementById('list').innerHTML = (data||[]).length
      ? `<div class="table-wrap"><table class="table"><thead><tr><th>Date</th><th>Action</th><th>Cible</th><th>Méta</th></tr></thead><tbody>
         ${data.map(a=>`<tr><td class="muted">${new Date(a.created_at).toLocaleString()}</td>
           <td><span class="badge">${esc(a.action)}</span></td><td>${esc(a.target||'')}</td>
           <td class="mono" style="font-size:.72rem">${esc(JSON.stringify(a.meta||{}))}</td></tr>`).join('')}</tbody></table></div>`
      : '<div class="empty"><i class="fa-regular fa-file-lines"></i>Aucune entrée.</div>';
  };

  // Messages bi-direksyonèl (v8): filtè, nouvo mesaj toujou anwo, fenèt modifikasyon
  // 5 minit, efasman, epi yon ti ikon "je" ki montre done brit mesaj la.
  const EDIT_WINDOW_MS = 5 * 60 * 1000;

  window._sharedMessages = async (host)=>{
    const profile = window.__lotriProfile || await window.Lotri.getProfile();
    const uid = profile ? profile.id : null;
    host.innerHTML = `<div class="card"><div class="card-hd"><h3>Messages</h3>
      <button class="btn btn-primary" id="new"><i class="fa-solid fa-paper-plane"></i> Envoyer un message</button></div>
      <div class="msg-toolbar">
        <input class="input" id="q" placeholder="Rechercher un titre ou un contenu…">
        <select class="select input" id="f-state">
          <option value="all">Tous les messages</option>
          <option value="unread">Uniquement non lus</option>
          <option value="mine">Ceux que j’ai envoyés</option>
        </select>
        <select class="select input" id="f-role">
          <option value="">Tous les expéditeurs</option>
          <option value="super_admin">Super Admin</option>
          <option value="company">Compagnie</option>
          <option value="supervisor">Superviseur</option>
          <option value="agent">Agent</option>
        </select>
        <input class="input" id="f-date" type="date" aria-label="Filtrer par date">
        <button class="btn btn-ghost btn-sm" id="f-clear">Réinitialiser</button>
      </div>
      <div id="list"></div></div>`;

    let rows = [];
    const draw = ()=>{
      const q = document.getElementById('q').value.trim().toLowerCase();
      const st = document.getElementById('f-state').value;
      const rl = document.getElementById('f-role').value;
      const dt = document.getElementById('f-date').value;

      let list = rows.slice();
      if (q)  list = list.filter(m => ((m.title||'')+' '+(m.body||'')).toLowerCase().includes(q));
      if (rl) list = list.filter(m => m.sender_role === rl);
      if (dt) list = list.filter(m => new Date(m.created_at).toISOString().slice(0,10) === dt);
      if (st === 'unread') list = list.filter(m => uid && !(m.read_by||[]).includes(uid) && m.sender_id !== uid);
      if (st === 'mine')   list = list.filter(m => m.sender_id === uid);

      // Nouveau message toujou anwo
      list.sort((a,b)=> new Date(b.created_at) - new Date(a.created_at));

      const el = document.getElementById('list');
      if (!list.length){ el.innerHTML = '<div class="empty"><i class="fa-regular fa-envelope"></i>Aucun message correspondant.</div>'; return; }

      el.innerHTML = list.map(m=>{
        const unread = uid && !(m.read_by||[]).includes(uid) && m.sender_id !== uid;
        const mine = m.sender_id === uid;
        const editable = mine && (Date.now() - new Date(m.created_at).getTime() < EDIT_WINDOW_MS);
        return `<div class="msg-item ${unread?'unread':''}" data-id="${m.id}">
          <div class="row">
            <strong>${esc(m.title)}</strong>
            ${unread ? '<span class="badge badge-new">nouveau</span>' : ''}
            <span class="badge">${esc(m.audience)}</span>
            <span class="badge ${m.level==='error'?'badge-danger':m.level==='warning'?'badge-warning':m.level==='success'?'badge-success':''}">${esc(m.level)}</span>
            <span class="chip">${esc(m.sender_role||'—')}</span>
            <span class="right muted">${new Date(m.created_at).toLocaleString()}</span>
            <button class="eye-btn" data-raw="${m.id}" title="Voir les données brutes du message" aria-label="Données brutes"><i class="fa-regular fa-eye"></i></button>
          </div>
          <p class="muted" style="margin:.5rem 0 .6rem;">${esc(m.body||'')}</p>
          <div class="row">
            ${unread ? `<button class="btn btn-sm" data-read="${m.id}"><i class="fa-solid fa-check"></i> Marquer comme lu</button>` : ''}
            <button class="btn btn-sm btn-ghost" data-reply="${m.id}" data-title="${esc(m.title)}"><i class="fa-solid fa-reply"></i> Répondre</button>
            ${editable ? `<button class="btn btn-sm btn-ghost" data-edit="${m.id}"><i class="fa-solid fa-pen"></i> Modifier</button>` : ''}
            ${mine ? `<button class="btn btn-sm btn-danger" data-del="${m.id}"><i class="fa-solid fa-trash"></i></button>` : ''}
            ${mine && !editable ? '<span class="muted" style="font-size:.75rem">La fenêtre de modification de 5 min est fermée.</span>' : ''}
          </div>
          <div class="raw-box" id="raw-${m.id}" hidden>${esc(JSON.stringify(m, null, 2))}</div>
        </div>`;
      }).join('');
    };

    const load = async ()=>{
      const { data } = await SB().from('jl9_messages').select('*').is('deleted_at', null)
        .order('created_at',{ascending:false}).limit(200);
      rows = data || [];
      draw();
    };

    ['q','f-state','f-role','f-date'].forEach(id=>{
      document.getElementById(id).addEventListener('input', draw);
      document.getElementById(id).addEventListener('change', draw);
    });
    document.getElementById('f-clear').onclick = ()=>{
      document.getElementById('q').value = '';
      document.getElementById('f-state').value = 'all';
      document.getElementById('f-role').value = '';
      document.getElementById('f-date').value = '';
      draw();
    };

    host.addEventListener('click', async (e)=>{
      const ey = e.target.closest('[data-raw]');
      if (ey) { const b = document.getElementById('raw-'+ey.dataset.raw); if (b) b.hidden = !b.hidden; return; }
      const r = e.target.closest('[data-read]');
      if (r) { await SB().rpc('jl9_rpc_mark_message_read', { _message: r.dataset.read }); load(); return; }
      const rp = e.target.closest('[data-reply]');
      if (rp) { openMessageModal(profile, { parent_id: rp.dataset.reply, title: 'Re: ' + rp.dataset.title }, load); return; }
      const ed = e.target.closest('[data-edit]');
      if (ed) {
        const m = rows.find(x=> x.id === ed.dataset.edit); if (!m) return;
        const title = await window.Lotri.ui.prompt({ title:'Modifier le message', label:'Titre', value:m.title, required:true });
        if (title === null) return;
        const body = await window.Lotri.ui.prompt({ title:'Modifier le message', label:'Contenu', value:m.body || '', multiline:true });
        if (body === null) return;
        const { error } = await SB().rpc('jl9_rpc_edit_message', { _message: m.id, _title: title, _body: body });
        if (error) window.Lotri.toast(error.message,'error'); else window.Lotri.toast('Message modifié','success');
        load(); return;
      }
      const dl = e.target.closest('[data-del]');
      if (dl) {
        if (!await window.Lotri.ui.confirm('Supprimer ce message ?', 'Il sera déplacé vers la corbeille.', { danger:true })) return;
        const { error } = await SB().rpc('jl9_rpc_soft_delete', { _table: 'messages', _id: dl.dataset.del });
        if (error) window.Lotri.toast(error.message,'error'); else window.Lotri.toast('Message supprimé','success');
        load();
      }
    });
    document.getElementById('new').onclick = ()=> openMessageModal(profile, {}, load);
    await load();
  };


  async function openMessageModal(profile, opts, refresh){
    opts = opts || {};
    const role = profile ? profile.role : 'agent';
    // Choisir opsyon odyans selon wòl
    const audOptions = role === 'super_admin'
      ? [['all','Tous le monde'], ['company','Une compagnie spécifique'], ['agent','Un agent spécifique']]
      : role === 'company'
        ? [['company','Tous les agents de ma compagnie'], ['agent','Un agent spécifique'], ['super_admin','Super Admin']]
        : [['company','Pour ma compagnie']];
    const m = document.createElement('div');
    m.className='modal-backdrop';
    m.innerHTML = `<div class="modal"><h3>${opts.parent_id?'Répondre':'Envoyer un message'}</h3>
      <form id="f">
        <div class="form-row"><label class="label">Titre</label>
          <input class="input" name="title" required value="${esc(opts.title||'')}"></div>
        <div class="form-row"><label class="label">Contenu</label>
          <textarea class="textarea" name="body" rows="4" required></textarea></div>
        <div class="form-grid">
          <div><label class="label">Audience</label>
            <select class="select" name="audience" id="aud">
              ${audOptions.map(o=>`<option value="${o[0]}">${esc(o[1])}</option>`).join('')}
            </select></div>
          <div><label class="label">Niveau</label>
            <select class="select" name="level">
              <option value="info">Info</option><option value="success">Succès</option>
              <option value="warning">Attention</option><option value="error">Erreur</option>
            </select></div>
        </div>
        <div class="form-row" id="companyBox" style="display:${role==='super_admin'?'block':'none'};margin-top:.5rem;">
          <label class="label">Compagnie destinataire</label>
          <select class="select" name="company_id" id="companyPick"><option value="">— Choisir —</option></select>
        </div>
        <div class="form-row" id="agentBox" style="display:none;">
          <label class="label">Agent destinataire</label>
          <select class="select" name="agent_id" id="agentPick"><option value="">— Choisir —</option></select>
        </div>
        <div class="row" style="justify-content:flex-end;margin-top:1rem;">
          <button type="button" class="btn btn-ghost" id="cancel">Annuler</button>
          <button class="btn btn-primary">Envoyer</button>
        </div>
      </form></div>`;
    document.body.appendChild(m);
    m.querySelector('#cancel').onclick = ()=> m.remove();
    const aud = m.querySelector('#aud');
    const cBox = m.querySelector('#companyBox');
    const aBox = m.querySelector('#agentBox');
    const cPick = m.querySelector('#companyPick');
    const aPick = m.querySelector('#agentPick');

    // Chaje konpayi si SA
    if (role === 'super_admin') {
      const { data } = await window.Lotri.supabase.from('jl9_companies').select('id,name').order('name');
      cPick.innerHTML = '<option value="">— Choisir —</option>' +
        (data||[]).map(c=>`<option value="${c.id}">${esc(c.name)}</option>`).join('');
    }
    // Chaje ajan dinamikman
    async function loadAgents(companyId){
      let q = window.Lotri.supabase.from('jl9_agents').select('id,full_name,company_id').order('full_name');
      if (companyId) q = q.eq('company_id', companyId);
      const { data } = await q;
      aPick.innerHTML = '<option value="">— Choisir —</option>' +
        (data||[]).map(a=>`<option value="${a.id}">${esc(a.full_name)}</option>`).join('');
    }
    const syncBoxes = ()=>{
      const v = aud.value;
      cBox.style.display = (role==='super_admin' && (v==='company' || v==='agent')) ? 'block' : 'none';
      aBox.style.display = (v==='agent') ? 'block' : 'none';
      if (v==='agent') loadAgents(role==='super_admin' ? cPick.value : null);
    };
    aud.addEventListener('change', syncBoxes);
    if (role==='super_admin') cPick.addEventListener('change', ()=>{ if (aud.value==='agent') loadAgents(cPick.value); });
    syncBoxes();

    m.querySelector('#f').addEventListener('submit', async (ev)=>{
      ev.preventDefault();
      const fd = Object.fromEntries(new FormData(ev.target).entries());
      const { error } = await window.Lotri.supabase.rpc('jl9_rpc_send_message', {
        _audience:  fd.audience,
        _company_id: fd.company_id || null,
        _agent_id:  fd.agent_id || null,
        _title: fd.title,
        _body:  fd.body,
        _level: fd.level,
        _parent_id: opts.parent_id || null
      });
      if (error) { window.Lotri.toast(error.message, 'error'); return; }
      window.Lotri.toast('Message envoyé', 'success');
      m.remove(); refresh && refresh();
    });
  }
  window._openMessageModal = openMessageModal;
})();


/* =====================================================================
 * v8 — Vi pataje (Corbeille, Surveillance des machines, Ping prezans)
 * Chaje pa Compagnie ak Super Admin.
 * ===================================================================== */
(function(){
  const SB = () => window.Lotri.supabase;
  const esc = window.Lotri.escapeHtml;

  const TABLES = [
    { t:'agents',   label:'Agent',  cols:['full_name','username'] },
    { t:'tickets',  label:'Ticket',  cols:['ticket_no','total'] },
    { t:'messages', label:'Messages', cols:['title','audience'] }
  ];

  window._sharedTrash = async (host, scopeCompany)=>{
    host.innerHTML = `<div class="card"><div class="card-hd"><h3>Corbeille</h3>
      <span class="muted" style="font-size:.8rem">Les éléments supprimés restent 30 jours.</span></div>
      <div id="tw"></div></div>`;
    const parts = [];
    for (const spec of TABLES){
      let q = SB().from(spec.t).select('*').not('deleted_at','is',null).order('deleted_at',{ascending:false}).limit(50);
      if (scopeCompany) q = q.eq('company_id', scopeCompany);
      const { data } = await q;
      parts.push(`<h4 style="margin:1rem 0 .5rem">${spec.label}</h4>` + ((data||[]).length
        ? `<div class="table-wrap"><table class="table"><thead><tr>${spec.cols.map(c=>`<th>${esc(c)}</th>`).join('')}<th>Supprimer</th><th></th></tr></thead><tbody>
           ${data.map(r=>`<tr class="trash-row">${spec.cols.map(c=>`<td>${esc(r[c] ?? '')}</td>`).join('')}
             <td class="muted">${new Date(r.deleted_at).toLocaleString()}</td>
             <td><button class="btn btn-sm" data-restore="${spec.t}:${r.id}"><i class="fa-solid fa-rotate-left"></i> Restaurer</button></td></tr>`).join('')}
           </tbody></table></div>`
        : '<div class="empty"><i class="fa-regular fa-trash-can"></i>Vide.</div>'));
    }
    document.getElementById('tw').innerHTML = parts.join('');
    host.addEventListener('click', async (e)=>{
      const b = e.target.closest('[data-restore]'); if (!b) return;
      const [t, id] = b.dataset.restore.split(':');
      const { error } = await SB().rpc('jl9_rpc_restore', { _table: t, _id: id });
      if (error) window.Lotri.toast(error.message,'error');
      else { window.Lotri.toast('Restaurer','success'); window._sharedTrash(host, scopeCompany); }
    });
  };

  window._sharedMachines = async (host, companyId)=>{
    host.innerHTML = `<div class="card"><div class="card-hd"><h3>Surveillance des machines</h3>
      <button class="btn btn-sm" id="rf"><i class="fa-solid fa-rotate"></i> Actualiser</button></div>
      <div id="m"></div></div>`;
    const load = async ()=>{
      let q = SB().from('jl9_agents').select('id,full_name,username,status,last_seen_at,device_label,company_id')
        .is('deleted_at', null).order('full_name');
      if (companyId) q = q.eq('company_id', companyId);
      const { data } = await q;
      const rows = data || [];
      const online = (a)=> a.last_seen_at && (Date.now() - new Date(a.last_seen_at).getTime() < 5*60*1000);
      document.getElementById('m').innerHTML = rows.length
        ? `<div class="grid-stats" style="margin-bottom:1rem">
             <div class="card stat"><div class="lbl">Machines au total</div><div class="val">${rows.length}</div></div>
             <div class="card stat"><div class="lbl">En ligne</div><div class="val">${rows.filter(online).length}</div></div>
             <div class="card stat"><div class="lbl">Fermer</div><div class="val">${rows.filter(a=>!online(a)).length}</div></div>
           </div>
           <div class="table-wrap"><table class="table"><thead><tr><th>Agent</th><th>Appareil</th><th>Statut</th><th>Dernière activité</th></tr></thead><tbody>
           ${rows.map(a=>`<tr><td>${esc(a.full_name||a.username||'—')}</td>
             <td class="mono" style="font-size:.78rem">${esc(a.device_label||'—')}</td>
             <td><span class="machine-dot ${online(a)?'on':'off'}"></span>${online(a)?'En ligne':'Fermer'}</td>
             <td class="muted">${a.last_seen_at ? new Date(a.last_seen_at).toLocaleString() : '—'}</td></tr>`).join('')}
           </tbody></table></div>`
        : '<div class="empty"><i class="fa-solid fa-desktop"></i>Aucune machine.</div>';
    };
    document.getElementById('rf').onclick = load;
    await load();
  };

  /* Ping prezans — sa ki fè siveyans machin nan travay */
  const ping = async ()=>{
    try { await SB().rpc('jl9_rpc_ping_presence', { _device: navigator.userAgent.slice(0,120) }); } catch(_){}
  };
  document.addEventListener('lotri:ready', ()=>{ ping(); setInterval(ping, 2*60*1000); });
})();


/* JADSTACK LOTTO — Q2i Bluetooth ESC/POS (Bluetooth Classic / SPP)
 * Bridge: window.AndroidPrinter (Android WebView -> AndroidPrinter.java)
 * API piblik: window.JadStackPrinter, window.JadStackReceiptConfig,
 *             window.buildJadStackReceipt, window.connectQ2i,
 *             window.testQ2i, window.printLottoTicket
 *
 * Sekirite: pa janm lanse yon exception ki ka kraze POS la — tout erè
 * yo trete gracieusement epi retounen yon mesaj klè an kreyòl.
 */
(function () {
  'use strict';

  /* Anti double-loading */
  if (window.JadStackPrinter && window.JadStackPrinter.__jadstack) return;

  const CONFIG = {
    name: 'JADSTACK LOTTO',
    phone: '+50940973833',
    address: 'LÉOGÂNE, LAGONAVE, PORT AU PRINCE',
    footer: 'Merci et à bientôt'
  };

  const NO_BRIDGE = 'La fonction Q2i est disponible uniquement dans l\'APK Android.';

  function clean(v) {
    return String(v === undefined || v === null ? '' : v).replace(/\r?\n/g, ' ').trim();
  }
  function padRight(s, n) {
    s = clean(s);
    return s.length >= n ? s.slice(0, n) : s + ' '.repeat(n - s.length);
  }
  function padLeft(s, n) {
    s = clean(s);
    return s.length >= n ? s.slice(-n) : ' '.repeat(n - s.length) + s;
  }
  function line(width) {
    return '-'.repeat(width || 32);
  }

  function bridge() {
    try {
      return (typeof window !== 'undefined' && window.AndroidPrinter) ? window.AndroidPrinter : null;
    } catch (_) {
      return null;
    }
  }

  /* Rele yon metòd bridge san janm kraze. */
  async function callBridge(method, arg) {
    const b = bridge();
    if (!b || typeof b[method] !== 'function') return NO_BRIDGE;
    try {
      const r = arg === undefined ? b[method]() : b[method](arg);
      return await Promise.resolve(r);
    } catch (e) {
      return 'Erreur du pont Android : ' + ((e && e.message) || e);
    }
  }

  const Printer = {
    __jadstack: true,
    connected: false,

    available() {
      return !!bridge();
    },

    /* Android 12+ : mande BLUETOOTH_CONNECT / BLUETOOTH_SCAN anvan koneksyon. */
    async ensurePermissions() {
      const b = bridge();
      if (!b) return NO_BRIDGE;
      if (typeof b.hasPermissions !== 'function') return 'OK'; // ansyen bridge
      try {
        if (b.hasPermissions() === true || b.hasPermissions() === 'OK') return 'OK';
      } catch (_) { /* ignore */ }
      const r = await callBridge('requestPermissions');
      return r || 'OK';
    },

    async connect() {
      if (!bridge()) {
        this.connected = false;
        return { ok: false, message: NO_BRIDGE };
      }
      const perm = await this.ensurePermissions();
      if (perm !== 'OK' && perm !== 'GRANTED' && perm !== true) {
        this.connected = false;
        return { ok: false, message: String(perm || 'Permission Bluetooth refusée. Veuillez autoriser l’accès Bluetooth.') };
      }
      const r = await callBridge('connect');
      if (r === 'OK' || r === 'CONNECTED') {
        this.connected = true;
        return { ok: true, message: 'Q2i connecté ✅' };
      }
      this.connected = false;
      return { ok: false, message: String(r || 'Q2i introuvable. Veuillez appairer l\'imprimante dans les paramètres Bluetooth.') };
    },

    /* Sinkronize drapo `connected` a ak eta reyèl bridge la (synchrone). */
    isLive() {
      const b = bridge();
      if (!b) { this.connected = false; return false; }
      if (typeof b.isConnected === 'function') {
        try {
          const v = b.isConnected();
          this.connected = (v === true || v === 'true');
        } catch (_) { /* kenbe ansyen valè a */ }
      }
      return this.connected;
    },

    async status() {
      const b = bridge();
      if (!b) return { ok: false, message: NO_BRIDGE };
      const ok = this.isLive();
      return { ok, message: ok ? 'Q2i connecté ✅' : 'Q2i déconnecté' };
    },


    async print(text) {
      if (!bridge()) return { ok: false, message: NO_BRIDGE };
      if (!this.isLive()) {
        const c = await this.connect();
        if (!c.ok) return c;
      }
      const r = await callBridge('print', String(text || ''));
      if (r === 'PRINT_OK' || r === 'OK') return { ok: true, message: 'Imprimer ✅' };
      if (String(r).indexOf('non connecté') >= 0) this.connected = false;
      return { ok: false, message: String(r || "Échec de l’impression.") };
    },

    async testPrint() {
      return this.print(buildReceipt({
        test: true,
        uniqueNumber: 'XSD20190921000060',
        sequence: '1',
        date: '2019-09-21',
        seller: '',
        rows: [
          { lotto: 'B0', boule: '02', option: '-', amount: '50' },
          { lotto: 'L4', boule: '9825', option: '2', amount: '25' }
        ],
        total: '75',
        payment: 'Compte en especes',
        remarks: 'aucun',
        express: 'aucun',
        printTime: '2019-09-21 10:00:00'
      }));
    },

    async printTicket(data) {
      return this.print(buildReceipt(data || {}));
    },

    disconnect() {
      this.connected = false;
      if (bridge()) { callBridge('disconnect'); }
      return true;
    }
  };

  function buildReceipt(data) {
    data = data || {};
    const width = 32;
    const rows = Array.isArray(data.rows) ? data.rows : [];
    const isTest = !!data.test;

    const uniqueNumber = clean(data.uniqueNumber || data.ticketNumber || ('JAD' + Date.now()));
    const sequence = clean(data.sequence || '1');
    const date = clean(data.date || new Date().toLocaleDateString('fr-HT'));
    const seller = clean(data.seller || data.vendeur || '');
    const companyName = clean(data.companyName || data.company || (isTest ? 'JADSTACK LOTTO' : 'JADSTACK LOTTO'));
    const companyPhone = clean(data.companyPhone || data.phone || CONFIG.phone);
    const companyAddress = clean(data.companyAddress || data.address || CONFIG.address);
    const payment = clean(data.payment || 'Compte en especes');
    const remarks = clean(data.remarks || 'aucun');
    const express = clean(data.express || 'aucun');
    const printTime = clean(data.printTime || new Date().toLocaleString('fr-FR'));

    let total = data.total;
    if (total === undefined || total === null || total === '') {
      total = rows.reduce((sum, r) => {
        const n = Number(String((r && r.amount) || 0).replace(/[^\d.-]/g, ''));
        return sum + (Number.isFinite(n) ? n : 0);
      }, 0);
    }
    total = clean(total);

    let out = '';
    out += '\x1B\x40';             // initialize
    out += '\x1B\x61\x01';         // center
    out += '\x1B\x45\x01';         // bold
    out += companyName.toUpperCase() + '\n';
    out += '\x1B\x45\x00';
    if (isTest) out += 'POS Test Printer\n';
    out += '\x1B\x61\x00';

    out += 'Numero unique: ' + uniqueNumber + '\n';
    out += sequence + '\n';
    out += 'Date: ' + date + '\n';
    out += 'Vendeur : ' + seller + '\n';
    out += line(width) + '\n';

    out += padRight('Loto', 9) + padRight('Boule', 8) + padRight('Optio', 6) + 'Montant\n';
    rows.forEach(r => {
      r = r || {};
      out += padRight(r.lotto || r.game || '', 9)
          + padRight(r.boule || r.number || '', 8)
          + padRight(r.option || '-', 6)
          + padLeft(r.amount || '', 9).slice(-9) + '\n';
    });

    out += line(width) + '\n';
    out += padRight('Total', 10) + '=> ' + padLeft(total, 18) + '\n';
    out += line(width) + '\n';
    out += 'Compte de reglement: ' + payment + '\n';
    out += 'Remarques: ' + remarks + '\n';
    out += 'Numero express: ' + express + '\n';
    out += 'Heure d’impression: ' + printTime + '\n';
    out += line(width) + '\n';
    out += 'Telephone: ' + companyPhone + '\n';
    out += 'Adresse: ' + companyAddress + '\n';
    out += '\n';
    out += '\x1B\x61\x01';
    out += 'Bienvenue la prochaine fois\n';
    out += '\x1B\x61\x00';
    out += '\n\n\n';
    return out;
  }

  function notify(msg, kind) {
    try {
      if (window.Lotri && typeof window.Lotri.toast === 'function') {
        window.Lotri.toast(msg, kind || 'info');
        return;
      }
    } catch (_) { /* ignore */ }
    try { alert(msg); } catch (_) { /* ignore */ }
  }

  window.JadStackPrinter = Printer;
  window.JadStackReceiptConfig = CONFIG;
  window.buildJadStackReceipt = buildReceipt;
  window.JadStackNotify = notify;

  window.connectQ2i = async function () {
    const r = await Printer.connect();
    notify(r.ok ? 'Q2i Bluetooth connecté ✅' : 'Imprimante non connectée ❌ — ' + r.message, r.ok ? 'success' : 'error');
    try { document.dispatchEvent(new CustomEvent('q2i:status', { detail: r })); } catch (_) { /* ignore */ }
    return r.ok;
  };

  window.testQ2i = async function () {
    const r = await Printer.testPrint();
    notify(r.ok ? 'Test imprimé avec succès ✅' : 'Échec de l’impression ❌ — ' + r.message, r.ok ? 'success' : 'error');
    try { document.dispatchEvent(new CustomEvent('q2i:status', { detail: { ok: Printer.connected, message: r.message } })); } catch (_) { /* ignore */ }
    return r.ok;
  };

  /* printLottoTicket(ticketNumber, rows, total, extra) */
  window.printLottoTicket = async function (ticketNumber, rows, total, extra) {
    const r = await Printer.printTicket(Object.assign({
      ticketNumber: ticketNumber,
      rows: Array.isArray(rows) ? rows : [],
      total: total
    }, extra || {}));
    if (!r.ok) notify('Le ticket n\'a pas été imprimé ❌ — ' + r.message, 'error');
    else notify('Ticket imprimé sur Q2i ✅', 'success');
    try { document.dispatchEvent(new CustomEvent('q2i:status', { detail: { ok: Printer.connected, message: r.message } })); } catch (_) { /* ignore */ }
    return r.ok;
  };
})();


/* JADSTACK LOTTO — Q2i Bluetooth add-on pou POS AJAN SÈLMAN.
 * Li pa touche okenn lojik POS ki deja egziste: li jis ajoute yon panèl
 * "Printer" nan POS la epi voye done tikè ki deja kreye yo bay
 * window.printLottoTicket(...).
 *
 * Depann de: assets/js/q2i/bluetooth-printer.js (chaje anvan fichye sa a).
 */
(function () {
  'use strict';

  if (window.JadStackQ2iPOS) return;                    // anti double-loading
  if (document.documentElement.dataset.role !== 'agent') return; // AJAN uniquement

  const Q2I = () => window.JadStackPrinter || null;

  function notify(msg, kind) {
    if (typeof window.JadStackNotify === 'function') window.JadStackNotify(msg, kind);
  }

  let lastTicket = null;   // { rows, total, extra } dènye tikè valide a

  /* ---------- Mapping: done POS ki deja egziste -> receipt Q2i ---------- */
  function ficheToPrintData(fiche, ticket) {
    fiche = fiche || {};
    ticket = ticket || {};
    const rows = [];
    (fiche.draws || []).forEach(d => {
      (d.bets || []).forEach(b => {
        rows.push({
          lotto: String(b.game_code || b.game_label || ''),
          boule: String(b.number || ''),
          option: String(b.option || d.draw_name || '-').slice(0, 5),
          amount: Number(b.amount || 0).toFixed(2)
        });
      });
    });

    const prof = window.__lotriProfile || {};
    const seller = prof.full_name || prof.name || prof.username || prof.email || '';

    return {
      ticketNumber: fiche.number || fiche.ref || ticket.ticket_no || '',
      rows,
      total: Number(fiche.total != null ? fiche.total : (ticket.total || 0)).toFixed(2),
      extra: {
        uniqueNumber: fiche.number || fiche.ref || ticket.ticket_no || '',
        sequence: String(fiche.serial || ticket.serial || ticket.id || '1'),
        date: fiche.date || new Date().toLocaleDateString('fr-HT'),
        seller: seller,
        companyName: (window.__lotriCompany && window.__lotriCompany.name) || '',
        companyPhone: (window.__lotriCompany && window.__lotriCompany.phone) || '',
        companyAddress: (window.__lotriCompany && window.__lotriCompany.address) || '',
        payment: 'Compte en especes',
        remarks: 'aucun',
        express: 'aucun',
        printTime: new Date().toLocaleString('fr-HT')
      }
    };
  }


  /* ---------- Aperçu ticket apre validasyon ---------- */
  function esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, c => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
  }

  function showTicketPreview(data) {
    data = data || lastTicket;
    if (!data) return;
    closeTicketPreview();

    const rows = Array.isArray(data.rows) ? data.rows : [];
    const extra = data.extra || {};
    const total = data.total != null ? data.total : '0';
    const host = document.createElement('div');
    host.id = 'jadstack-ticket-preview';
    host.className = 'jl-ticket-overlay';
    host.innerHTML = `
      <div class="jl-ticket-sheet" role="dialog" aria-modal="true" aria-label="Aperçu du ticket">
        <button type="button" class="jl-ticket-close" aria-label="Fermer">×</button>
        <div class="jl-ticket-paper">
          <div class="jl-ticket-brand">JADSTACK LOTTO</div>
          <div class="jl-ticket-sub">TICKET DE JEU</div>
          <div class="jl-ticket-meta">
            <div><span>N°</span><b>${esc(data.ticketNumber || extra.uniqueNumber || '')}</b></div>
            <div><span>DATE</span><b>${esc(extra.date || '')}</b></div>
            <div><span>AGENT</span><b>${esc(extra.seller || '')}</b></div>
          </div>
          <div class="jl-ticket-rule"></div>
          <div class="jl-ticket-head"><span>JEU</span><span>BOULE</span><span>OPTION</span><span>MONTANT</span></div>
          <div class="jl-ticket-lines">
            ${rows.map(r => `
              <div class="jl-ticket-line">
                <b>${esc(r.lotto || '')}</b>
                <b>${esc(r.boule || '')}</b>
                <span>${esc(r.option || '-')}</span>
                <span>${esc(r.amount || '0')}</span>
              </div>`).join('')}
          </div>
          <div class="jl-ticket-rule"></div>
          <div class="jl-ticket-total"><span>TOTAL</span><strong>${esc(total)} HTG</strong></div>
          <div class="jl-ticket-info">
            <div>Référence : ${esc(extra.uniqueNumber || data.ticketNumber || '')}</div>
            <div>Heure : ${esc(extra.printTime || '')}</div>
          </div>
          <div class="jl-ticket-footer">Conservez votre ticket</div>
        </div>
        <div class="jl-ticket-actions">
          <button type="button" class="btn btn-secondary jl-ticket-cancel">Fermer</button>
          <button type="button" class="btn btn-primary jl-ticket-print">🖨️ Imprimer Ticket</button>
        </div>
      </div>`;

    document.body.appendChild(host);
    const close = () => closeTicketPreview();
    host.querySelector('.jl-ticket-close').onclick = close;
    host.querySelector('.jl-ticket-cancel').onclick = close;
    host.querySelector('.jl-ticket-print').onclick = async () => {
      const btn = host.querySelector('.jl-ticket-print');
      btn.disabled = true;
      const ok = await printTicket(data);
      btn.disabled = false;
      if (ok) closeTicketPreview();
    };
    host.addEventListener('click', e => { if (e.target === host) close(); });
    document.addEventListener('keydown', onPreviewKey);
    document.body.classList.add('jl-ticket-open');
  }

  function onPreviewKey(e) {
    if (e.key === 'Escape') closeTicketPreview();
  }

  function closeTicketPreview() {
    const el = document.getElementById('jadstack-ticket-preview');
    if (el) el.remove();
    document.removeEventListener('keydown', onPreviewKey);
    document.body.classList.remove('jl-ticket-open');
  }

  /* ---------- Action ---------- */
  async function connect() {
    if (!Q2I()) { notify('Le module Q2i n\'est pas chargé.', 'error'); return false; }
    const ok = await window.connectQ2i();
    paint();
    return ok;
  }

  async function test() {
    if (!Q2I()) { notify('Le module Q2i n\'est pas chargé.', 'error'); return false; }
    const ok = await window.testQ2i();
    paint();
    return ok;
  }

  async function printTicket(data) {
    data = data || lastTicket;
    if (!data) { notify('Aucun ticket à imprimer.', 'error'); return false; }
    if (!Q2I() || !Q2I().available()) {
      notify('La fonction Q2i est disponible uniquement dans l\'APK Android.', 'error');
      return false;
    }
    if (!Q2I().isLive()) {
      const c = await Q2I().connect();
      paint();
      if (!c.ok) {
        notify('Q2i non connecté — ' + c.message, 'error');
        return false;
      }
    }
    const ok = await window.printLottoTicket(data.ticketNumber, data.rows, data.total, data.extra);
    paint();
    return ok;
  }

  /* ---------- UI nan POS Agent an ---------- */
  function statusText() {
    const p = Q2I();
    if (!p || !p.available()) return { label: 'Q2i : non disponible (APK uniquement)', cls: 'q2i-off' };
    return p.isLive()
      ? { label: 'Q2i : Connecté ✅', cls: 'q2i-on' }
      : { label: 'Q2i : Déconnecté', cls: 'q2i-off' };
  }

  function paint() {
    document.querySelectorAll('.q2i-status').forEach(el => {
      const s = statusText();
      el.textContent = s.label;
      el.className = 'q2i-status ' + s.cls;
    });
    document.querySelectorAll('[data-q2i-print]').forEach(b => {
      b.disabled = !lastTicket;
    });
  }

  /* V87 — Printer pa parèt kòm yon card nan POS.
   * Li disponib sèlman kòm yon opsyon nan navigasyon anba a.
   */
  function mountPOS(host) {
    /* intentionally empty: Printer UI lives in the dedicated Printer view */
  }

  function renderPrinterView(host) {
    if (!host) return;
    const s = statusText();
    host.innerHTML = `
      <div class="printer-option-page">
        <div class="card">
          <div class="card-hd">
            <h3><i class="fa-solid fa-print"></i> Imprimante</h3>
            <span class="q2i-status ${s.cls}">${s.label}</span>
          </div>
          <p class="muted printer-option-note">
            Gérez l’imprimante Q2i ici. Vous pouvez la connecter, la tester et imprimer le dernier ticket validé.
          </p>
          <div class="q2i-actions printer-option-actions">
            <button type="button" class="btn btn-secondary" data-q2i-connect>🖨️ Connecter Q2i</button>
            <button type="button" class="btn btn-ghost" data-q2i-test>Tester l’imprimante Q2i</button>
            <button type="button" class="btn btn-primary" data-q2i-print ${lastTicket ? '' : 'disabled'}>🖨️ Imprimer Ticket</button>
          </div>
          <p class="muted q2i-note">Si l’imprimante n’est pas connectée, vous pouvez toujours créer et valider les tickets normalement dans le POS.</p>
        </div>
      </div>`;
    host.querySelector('[data-q2i-connect]')?.addEventListener('click', connect);
    host.querySelector('[data-q2i-test]')?.addEventListener('click', test);
    host.querySelector('[data-q2i-print]')?.addEventListener('click', printTicket);
    paint();
  }

  function registerPrinterView() {
    if (!window.LotriShell || window.LotriShell.get('printer')) return;
    window.LotriShell.register('printer', {
      render: async (host) => renderPrinterView(host)
    });
  }


  /* Rele apre yon tikè valide (done POS ki deja egziste). */
  function onTicket(fiche, ticket) {
    try {
      lastTicket = ficheToPrintData(fiche, ticket);
      paint();
      /* V87: apre tikè valide, montre fich la an premye.
         Enpresyon fèt sèlman lè ajan an peze "Imprimer Ticket". */
      showTicketPreview(lastTicket);
    } catch (e) {
      console.warn('[Q2i] onTicket', e);
    }
  }

  document.addEventListener('q2i:status', paint);
  document.addEventListener('lotri:ready', registerPrinterView);

  window.JadStackQ2iPOS = { mountPOS, onTicket, printTicket, connect, test, paint, showTicketPreview, closeTicketPreview,
                            get lastTicket() { return lastTicket; } };
})();


(function(){
  /* PATI A.2 — pa janm bay JSON.parse yon valè ki pa yon String. */
  function safeBets(v){
    if (Array.isArray(v)) return v;
    if (typeof v === 'string' && v.trim().length){
      try { const o = JSON.parse(v); return Array.isArray(o) ? o : []; } catch(_){ return []; }
    }
    return [];
  }
  const SB = () => window.Lotri.supabase;
  const esc = window.Lotri.escapeHtml;

  /* ------- V13 §A11 — Règ chif pa jeu : SÈL SOUS = BAZ DONE -------
     Ansyen V12 te gen yon tab `RULES` an dur; se poutèt sa yon ajan te ka
     antre 6 chif sou yon jeu 3 chif. Maintenant nou li jl13_rpc_game_rules()
     (ki soti nan jl9_games.digits_json), epi sèvè a re-valide ak yon
     trigger — kidonk pa gen mwayen kontounen l. */
  const GAME_RULES = new Map();
  const KEY = c => String(c||'').toUpperCase().replace(/[^A-Z0-9]/g,'');

  async function loadGameRules(){
    GAME_RULES.clear();
    const { data, error } = await SB().rpc('jl13_rpc_game_rules');
    if (error || !Array.isArray(data)) return GAME_RULES;
    data.forEach(g => {
      const len = (Array.isArray(g.lengths) && g.lengths.length ? g.lengths : [2])
        .map(Number).filter(n => n > 0).sort((a,b)=>a-b);
      GAME_RULES.set(KEY(g.code), {
        code: g.code, name: g.name, len,
        sep: g.separator || '',
        min: Number(g.min_amount || 1),
        max: g.max_amount == null ? null : Number(g.max_amount),
        hint: len.join(' oswa ') + ' chif'
             + (g.separator ? ` (egz. ${'9'.repeat(len[0]/2)}${g.separator}${'9'.repeat(len[0]/2)})` : '')
      });
    });
    return GAME_RULES;
  }
  function ruleFor(code){
    return GAME_RULES.get(KEY(code))
        || { len:[2], min:1, max:null, sep:'', hint:'2 chif' };
  }
  window.Lotri.gameRules = { load: loadGameRules, get: ruleFor, all: GAME_RULES };


  LotriShell.register('pos', {
    render: async (host)=>{
      const prof = window.__lotriProfile || {};
      await loadGameRules();                       /* V13 §A11 */
      /* Fallback si pg_cron pa aktive sou pwojè a: konfime tiraj jodi a
         senkronize (kreye/ouvri) ak fermer anvan nou li lis 'open' yo,
         menm jan jl12_rpc_tick() sèvi kòm fallback pou lòt sistèm nan. */
      try { await SB().rpc('jl9_rpc_tick_draws'); } catch(_){ /* silans — pa bloke vant */ }
      const [{data:draws},{data:games},{data:company}] = await Promise.all([
        /* V24 — nou li VI a `jl24_draws_today` (sous verite a) : li deja
           kalkile `sales_open` apati open_time/close_time Super-Admin an
           (lè Ayiti). Konsa un tirage re-ouvri otomatikman chak jou. */
        SB().from('jl24_draws_today').select('id,name,status,game_code,closes_at,sales_open,sort_order')
            .eq('sales_open', true).order('sort_order').order('name'),
        SB().from('jl9_games').select('code,name').eq('active',true).order('code'),
        /* v9.4 — antèt konpayi a pou resi ofisyèl la (Faz 4). */
        prof.company_id
          ? SB().from('jl9_companies').select('name,address,phone').eq('id', prof.company_id).maybeSingle()
          : Promise.resolve({ data: null })
      ]);
      window.__lotriCompany = company || window.__lotriCompany || null;

      host.innerHTML = `
      <section class="vente-layout-v88" aria-label="Vente de tickets">
        <article class="vente-panel-v88 vente-saisie-v88">
          <header class="vente-entete-v88">
            <div>
              <h3>POS — Vente de tickets</h3>
              <p>Ajoutez plusieurs tirages sur une même fiche.</p>
            </div>
          </header>

          <div class="vente-champ-v88">
            <label class="label" for="vente-tirage">Tirage</label>
            <select class="select" id="vente-tirage">
              ${(draws||[]).map(d=>`<option value="${d.id}" data-gc="${esc(d.game_code||'')}">${esc(d.name)}</option>`).join('') || '<option value="">Aucun tirage ouvert</option>'}
            </select>
          </div>

          <div class="vente-champ-v88">
            <span class="label">Jeu</span>
            <div class="vente-jeux-v88" id="vente-jeux" aria-label="Liste des jeux">
              <div class="vente-jeux-row-v88" data-game-row="1">
                ${(games||[]).filter((g,i)=>i % 2 === 0).map((g,i)=>`<button type="button" class="vente-jeu-v88" data-code="${esc(g.code)}" aria-pressed="${i===0?'true':'false'}">${esc(g.name||g.code)}</button>`).join('')}
              </div>
              <div class="vente-jeux-row-v88" data-game-row="2">
                ${(games||[]).filter((g,i)=>i % 2 === 1).map(g=>`<button type="button" class="vente-jeu-v88" data-code="${esc(g.code)}" aria-pressed="false">${esc(g.name||g.code)}</button>`).join('')}
              </div>
            </div>
          </div>

          <div class="vente-champ-v88">
            <label class="label" for="vente-numero">Numéro</label>
            <input class="input mono vente-numero-v88" id="vente-numero" type="text" inputmode="numeric"
                   pattern="[0-9]*" autocomplete="off" enterkeyhint="done" placeholder="––"
                   aria-label="Numéro du pari">
            <div class="vente-indication-v88" id="vente-indication"></div>
          </div>

          <div class="vente-champ-v88">
            <label class="label" for="vente-montant">Montant (HTG)</label>
            <input class="input mono" id="vente-montant" type="number" inputmode="decimal" step="0.01" min="1" placeholder="0.00">
          </div>

          <button class="btn btn-primary vente-ajouter-v88" id="vente-ajouter" type="button">
            <i class="fa-solid fa-plus"></i> Ajouter le pari
          </button>
        </article>

        <article class="vente-panel-v88 fiche-panel-v88">
          <header class="vente-entete-v88">
            <div>
              <h3>La fiche</h3>
              <p>Tous les tirages ajoutés apparaissent ici.</p>
            </div>
          </header>
          <div class="fiche-contenu-v88" id="fiche-contenu">
            <div class="empty"><i class="fa-regular fa-circle"></i>Aucun pari pour le moment.</div>
          </div>
          <footer class="fiche-action-v88" aria-label="Total et impression de la fiche">
            <strong class="fiche-total-v88">Total : <span id="fiche-total" class="mono">0.00</span> HTG</strong>
            <button class="fiche-print-v88" id="fiche-imprimer" type="button">
              <i class="fa-solid fa-print" aria-hidden="true"></i><span>Imprimer</span>
            </button>
          </footer>
        </article>
      </section>
      <div class="jl27-pos-foot">
        <button type="button" class="jl27-quiet" id="rapport-journalier-btn">
          <i class="fa-solid fa-chart-line"></i> Rapport journalier</button>
      </div>
      <div id="impression-resultat"></div>`;

      const posReport = host.querySelector('#rapport-journalier-btn');
      if (posReport) posReport.onclick = ()=> LotriShell.go('arapo');

      /* Q2i Bluetooth (add-on POS Agent) — panèl printer la, opsyonèl. */
      try { window.JadStackQ2iPOS && window.JadStackQ2iPOS.mountPOS(host); } catch(_) {}


      const sel = host.querySelector('#vente-tirage');
      const tabs = host.querySelector('#vente-jeux');
      const numInput = host.querySelector('#vente-numero');
      const hint = host.querySelector('#vente-indication');
      let game = (games||[])[0]?.code || '';

      function setGame(code){
        game = code;
        tabs.querySelectorAll('.vente-jeu-v88').forEach(b=> b.setAttribute('aria-pressed', b.dataset.code===code ? 'true':'false'));
        const r = ruleFor(code);
        hint.textContent = r.hint;
        numInput.value = '';
        numInput.maxLength = Math.max.apply(null, r.len);
      }
      tabs.addEventListener('click', e=>{
        const b = e.target.closest('.vente-jeu-v88'); if (!b) return;
        setGame(b.dataset.code);
      });
      sel.addEventListener('change', ()=>{
        const gc = sel.selectedOptions[0]?.dataset.gc;
        if (gc && tabs.querySelector(`[data-code="${gc}"]`)) setGame(gc);
      });
      setGame(game);
      if (sel.value) sel.dispatchEvent(new Event('change'));

      /* ---- PATI K.3 — klavye natif uniquement: nou jis netwaye antre a ---- */
      numInput.addEventListener('input', ()=>{
        const max = Math.max.apply(null, ruleFor(game).len);
        const only = numInput.value.replace(/\D+/g,'').slice(0, max);
        if (only !== numInput.value) numInput.value = only;
      });

      /* V23 · C2-b — FICHE MILTI-TIRAJ
         `lines` = [{ draw_id, draw_name, bets: [{n,a,game_code}, ...] }, ...]
         Yon liy pa tiraj chwazi; chak liy gen pwòp lis pari. */
      const lines = [];
      const findLine = (drawId) => lines.find(l => l.draw_id === drawId);

      const refresh = ()=>{
        host.querySelector('#fiche-contenu').innerHTML = lines.length
          ? lines.map((l,li)=>`
              <div class="fiche-tirage-v88">
                <div class="row" style="justify-content:space-between;align-items:center">
                  <strong>${esc(l.draw_name)}</strong>
                  <button class="btn btn-sm btn-ghost" data-rm-line="${li}" aria-label="Retirer tout ce tirage"><i class="fa-solid fa-xmark"></i> Retirer le tirage</button>
                </div>
                ${l.bets.map((b,bi)=>`<div class="fiche-pari-v88">
                    <span class="fiche-numero-v88">${esc(b.n)}</span>
                    <span class="muted">${esc(b.game_code)}</span>
                    <span class="mono">${Number(b.a).toFixed(2)} HTG</span>
                    <button class="btn btn-sm btn-icon btn-danger" data-rm-bet="${li}:${bi}" aria-label="Retirer"><i class="fa-solid fa-xmark"></i></button>
                  </div>`).join('')}
              </div>`).join('')
          : '<div class="empty"><i class="fa-regular fa-circle"></i>Aucun pari pour le moment.</div>';
        const grand = lines.reduce((s,l)=> s + l.bets.reduce((a,b)=>a+Number(b.a),0), 0);
        host.querySelector('#fiche-total').textContent = grand.toFixed(2);
      };

      host.querySelector('#vente-ajouter').onclick = async ()=>{
        const n = numInput.value.trim();
        const a = Number(host.querySelector('#vente-montant').value);
        const r = ruleFor(game);
        if (!sel.value) { window.Lotri.toast('Sélectionnez un tirage','error'); return; }
        if (!/^[0-9]+$/.test(n)) { window.Lotri.toast('Uniquement des chiffres dans la boule.', 'error'); return; }
        if (!r.len.includes(n.length)) {
          window.Lotri.toast(`Le jeu ${KEY(game)} demande ${r.hint} — vous avez saisi ${n.length}.`, 'error'); return; }
        if (!a || a <= 0) { window.Lotri.toast('Saisissez un montant valide','error'); return; }
        if (a < r.min) { window.Lotri.toast(`Le montant minimum pour ${KEY(game)} est de ${r.min} HTG.`,'error'); return; }
        if (r.max != null && a > r.max) { window.Lotri.toast(`Le montant maximum pour ${KEY(game)} est de ${r.max} HTG.`,'error'); return; }
        // Limites de boules an tan reyèl
        const blocked = await window.Lotri.security.checkBallLimit(sel.value, game, n, a);
        if (blocked) { window.Lotri.toast(blocked, 'error'); return; }
        let l = findLine(sel.value);
        if (!l) {
          l = { draw_id: sel.value, draw_name: sel.selectedOptions[0].textContent.trim(), bets: [] };
          lines.push(l);
        }
        l.bets.push({ n, a, game_code: game });
        numInput.value = ''; host.querySelector('#vente-montant').value = '';
        refresh();
      };

      host.querySelector('#fiche-contenu').addEventListener('click', e=>{
        const rmLine = e.target.closest('[data-rm-line]');
        if (rmLine) { lines.splice(Number(rmLine.dataset.rmLine),1); refresh(); return; }
        const rmBet = e.target.closest('[data-rm-bet]');
        if (rmBet) {
          const [li, bi] = rmBet.dataset.rmBet.split(':').map(Number);
          lines[li].bets.splice(bi, 1);
          if (!lines[li].bets.length) lines.splice(li, 1);
          refresh();
        }
      });

      host.querySelector('#fiche-imprimer').onclick = async ()=>{
        if (!lines.length) { window.Lotri.toast('Aucun pari','error'); return; }
        openFichePreview();
      };

      /* V27 FAZ 4b — olye finalize/enprime yon sèl kou, nou montre yon
         APÈSI (previzyon) fich la pandan 5s ak yon bouton X sou tèt li.
         · Kontdaoun fini san koupe → nou finalize VRÈMAN (kreye tikè +
           mak enprime + louvri enprimant otomatikman).
         · X klike anvan 5s → anile: `lines` pa touche, ajan ka modifye
           epi peze « Imprimer » à nouveau pou relanse yon nouvo apèsi. */
      function openFichePreview(){
        const snapshot = lines.map(l => ({ draw_id: l.draw_id, draw_name: l.draw_name, bets: l.bets.slice() }));
        const total = Number(snapshot.reduce((s,l)=> s + l.bets.reduce((a,b)=>a+Number(b.a),0), 0).toFixed(2));
        const draft = ficheData(
          { ticket_no: '', serial: '', total, created_at: Date.now() },
          snapshot.map(l => ({ draw_name: l.draw_name, bets: l.bets }))
        );
        draft.ref = 'APÈSI'; draft.serial = '—'; draft.number = '—';

        const back = document.createElement('div');
        back.className = 'modal-backdrop v9-modal jl-fiche-preview';
        back.innerHTML = `
          <div class="modal jl-fiche-preview-modal" role="dialog" aria-modal="true">
            <button type="button" class="btn btn-icon btn-ghost jl-fiche-x" aria-label="Fermer l\'aperçu" title="Fermer">
              <i class="fa-solid fa-xmark"></i></button>
            <div class="jl-fiche-preview-hd">
              <strong>Aperçu de la fiche</strong>
              <span class="jl-fiche-cd" id="jl-fiche-cd">5s</span>
            </div>
            <div class="fiche-wrap" style="max-width:320px;margin:.5rem auto 0">${window.Lotri.renderFiche(draft)}</div>
            <p class="muted jl-fiche-preview-note">La fiche s\'imprime automatiquement dans <span id="jl-fiche-cd2">5</span>s —
              appuyez sur <i class="fa-solid fa-xmark"></i> pour annuler et modifier.</p>
          </div>`;
        document.body.appendChild(back);

        let remaining = 5, cancelled = false, timerId = null;
        const cdEl = back.querySelector('#jl-fiche-cd'), cdEl2 = back.querySelector('#jl-fiche-cd2');

        const cleanup = () => { clearInterval(timerId); back.remove(); };
        const cancel = () => { if (cancelled) return; cancelled = true; cleanup(); };
        const finish = async () => {
          if (cancelled) return;
          cleanup();
          await commitTicket(snapshot, total);
        };

        back.querySelector('.jl-fiche-x').onclick = cancel;
        back.addEventListener('click', e => { if (e.target === back) cancel(); });
        const escKey = e => { if (e.key === 'Escape') cancel(); };
        document.addEventListener('keydown', escKey, { once: true });

        timerId = setInterval(() => {
          remaining -= 1;
          if (cdEl) cdEl.textContent = remaining + 's';
          if (cdEl2) cdEl2.textContent = remaining;
          if (remaining <= 0) finish();
        }, 1000);
      }

      async function commitTicket(snapshot, total){
        const payload = snapshot.map(l => ({ draw_id: l.draw_id, bets: l.bets }));
        const { data, error } = await SB().rpc('jl9_rpc_create_ticket', { _lines: payload, _total: total });
        if (error) { window.Lotri.toast(error.message,'error'); return; }
        window.Lotri.toast('Ticket créé : '+data.ticket_no,'success');
        const receiptLines = snapshot.map(l => ({ draw_name: l.draw_name, bets: l.bets.slice() }));
        lines.length = 0; refresh();
        renderReceipt(data, receiptLines);
        const realFiche = ficheData(data, receiptLines);
        try { await SB().rpc('jl17_rpc_mark_printed', { _ticket: data.id }); } catch(_) {}
        /* Q2i Bluetooth (add-on): pase done tikè a bay printer la si li disponib. */
        try { window.JadStackQ2iPOS && window.JadStackQ2iPOS.onTicket(realFiche, data); } catch(_) {}
        window.Lotri.printFiche(realFiche);
      }


      /* v9.4 §Faz4 — resi ofisyèl la: menm fòma sou tout ekran an ak sou papye.
         Nou sèvi ak window.Lotri.renderFiche/printFiche pou pa gen de modèl.
         V23 · C2-b — `receiptLines` se [{draw_name, bets:[{n,a,game_code}]}, ...]
         (yon seksyon pa tiraj sou la même fiche). */
      function ficheData(t, receiptLines){
        const co = (window.__lotriCompany || {});
        const d = new Date(t.created_at || Date.now());
        return {
          company: { name: co.name || (window.Lotri.config.brand||{}).name || 'JADSTACK LOTTO',
                     address: co.address || '', phone: co.phone || '' },
          ref: t.ticket_no, serial: t.serial || t.id || t.ticket_no,
          number: t.ticket_no,
          date: d.toLocaleDateString('fr-HT'), time: d.toLocaleTimeString('fr-HT'),
          currency: 'HTG', total: t.total,
          draws: (receiptLines||[]).map(l => ({
            draw_name: l.draw_name,
            bets: (l.bets||[]).map(b => ({ game_code: b.game_code, game_label: b.game_code,
                                           number: b.n, amount: b.a }))
          }))
        };
      }

      function renderReceipt(t, receiptLines){
        const f = ficheData(t, receiptLines);
        host.querySelector('#impression-resultat').innerHTML = `
          <div class="fiche-wrap" style="max-width:340px;margin-top:1rem">
            ${window.Lotri.renderFiche(f)}
            <button class="btn btn-primary btn-sm" style="margin-top:.75rem;width:100%" id="pf">
              <i class="fa-solid fa-print"></i> Imprimer Ticket</button>
          </div>`;
        document.getElementById('pf').onclick = async () => {
          /* V17 §2 — kontdaoun 10 min pou efase san apwobasyon kòmanse
             lè yo peze "Imprimer" pou premye fwa (idempotan: coalesce
             nan SQL a fè li pa ka reyekri yon 2yèm fwa). */
          if (t && t.id) {
            try { await SB().rpc('jl17_rpc_mark_printed', { _ticket: t.id }); }
            catch(_) {} /* si sa echwe, printFiche kontinye kanmenm */
          }
          window.Lotri.printFiche(f);
        };
      }
    }
  });

  LotriShell.register('tickets', {
    render: async (host)=>{
      host.innerHTML = `<div class="card"><div class="card-hd"><h3>Mes tickets</h3>
        <span class="muted" style="font-size:.8rem">Vous pouvez supprimer un ticket vous-même pendant <b>10 minutes</b> apre ou enprime l
          (epi toujou anvan tiraj la fermer). Après sa, se yon <b>demande</b> qui est envoyée au Super Admin / Mini Super Admin.</span></div>
        <div id="list"></div></div>`;

      const money = n => Number(n||0).toLocaleString('fr-HT',{minimumFractionDigits:2,maximumFractionDigits:2})+' HTG';
      const MIN10 = 10*60*1000;
      const selfWindow = t => {
        const base = t.printed_at ? new Date(t.printed_at).getTime() : null;
        return base ? (Date.now() - base) <= MIN10 : true; /* pa ankò enprime → toujou posib */
      };

      const load = async()=>{
        const { data } = await SB().from('jl9_tickets').select('*').is('deleted_at', null)
          .order('created_at',{ascending:false}).limit(200);
        const list = document.getElementById('list');
        if (!list) return; /* vi a chanje pandan chajman an */
        list.innerHTML = (data||[]).length
          ? `<div class="table-wrap"><table class="table"><thead><tr><th>#</th><th class="num">Total</th><th class="num">Prime</th><th>Statut</th><th>Imprimer</th><th>Date</th><th></th></tr></thead>
             <tbody>${data.map(t=>`<tr data-ticket="${t.id}"><td class="mono" data-copy-value="${esc(t.ticket_no)}">${esc(t.ticket_no)}</td>
               <td class="num mono" data-copy-value="${Number(t.total||0)}">${money(t.total)}</td>
               <td class="num mono" data-copy-value="${Number(t.prize_amount||0)}">${money(t.prize_amount)}</td>
               <td><span class="badge ${t.status==='won'?'badge-success':t.status==='cancelled'?'badge-danger':''}">${esc(t.status)}</span></td>
               <td class="muted">${t.printed_at? new Date(t.printed_at).toLocaleString('fr-HT') : '—'}</td>
               <td class="muted">${new Date(t.created_at).toLocaleString('fr-HT')}</td>
               <td>${t.status==='active'
                    ? (selfWindow(t)
                        ? `<button class="btn btn-sm btn-danger" data-del="${t.id}"><i class="fa-solid fa-trash"></i> Supprimer</button>`
                        : `<button class="btn btn-sm btn-ghost" data-req="${t.id}"><i class="fa-solid fa-paper-plane"></i> Demander l\'annulation</button>`)
                    : ''}</td></tr>`).join('')}</tbody></table></div>`
          : '<div class="empty"><i class="fa-solid fa-ticket"></i>Aucun ticket.</div>';
      };

      host.addEventListener('click', async(e)=>{
        const del = e.target.closest('[data-del]');
        const req = e.target.closest('[data-req]');
        if (del){
          const ok = await window.Lotri.ui.confirm('Supprimer ce ticket ?', 'Il sera déplacé vers la corbeille.');
          if (!ok) return;
          const { error } = await SB().rpc('jl9_rpc_delete_ticket', { _ticket: del.dataset.del });
          if (error) window.Lotri.toast(error.message,'error'); else window.Lotri.toast('Ticket supprimé','success');
          load(); return;
        }
        if (req){
          const reason = prompt('Pourquoi voulez-vous annuler ce ticket ? (L\'administration en prendra connaissance)');
          if (reason === null) return;
          const { error } = await SB().rpc('jl17_rpc_request_delete_ticket',
            { _ticket: req.dataset.req, _reason: reason || null });
          if (error) window.Lotri.toast(error.message,'error');
          else window.Lotri.toast('Demande envoyée — en attente d\'approbation.','success');
          load();
        }
      });

      await load();

      /* ---- V17-BUG-1: non channel INIK + bon non tab + dekoneksyon pwòp ----
         Avant: SB().channel('t') sou tab 'tickets' — menm non channel te
         reyitilize chak fwa vi a montre, sa ki lakòz konfli abònman
         (CHANNEL_ERROR / mize a jou ki rete kanpe). Maintenant chak montaj gen
         pwòp channel li, epi nou retire l lè vi a demonte. */
      const chName = 'jl17-tickets-' + Date.now() + '-' + Math.random().toString(36).slice(2,8);
      const ch = SB().channel(chName)
        .on('postgres_changes', { event:'*', schema:'public', table:'jl9_tickets' }, load)
        .subscribe();
      const stop = () => { try { SB().removeChannel(ch); } catch(_){} };
      document.addEventListener('lotri:view', stop, { once:true });
      window.addEventListener('beforeunload', stop, { once:true });
      return stop; /* si chasi a sipòte yon fonksyon netwayaj */
    }
  });

  LotriShell.register('messages', { render: async(h)=> window._sharedMessages(h) });
})();


/* =====================================================================
 * V27 FAZ 4b — « Conditions de l'agent » : paj kondisyon itilizasyon + ti gid,
 * espesifik pou wòl AJAN uniquement (pa menm ak legal.html jeneral sit la,
 * ki pale de tout wòl). Enspire nan estrikti legal.html (Kondisyon /
 * Konfidansyalite / Responsablite) men rekadre sou SA YON AJAN AKSEPTE
 * lè li chwazi travay pou yon konpayi sou platfòm nan.
 * Tout kòd paj ajan an rete nan menm dosye a: assets/js/ajan/.
 * ===================================================================== */
(function () {
  const L = window.Lotri || {};

  LotriShell.register('aterms', {
    render: async (host) => {
      host.innerHTML = `
        <div class="page-hd"><h2>Conditions de l'agent</h2>
          <p class="muted">Ce que vous acceptez en choisissant de travailler comme agent sur la plateforme.</p></div>

        <div class="card jl27-terms">
          <div class="card-hd"><h3><i class="fa-solid fa-file-shield"></i> 1. Conditions d'utilisation</h3></div>
          <ul class="jl27-terms-list">
            <li>Vous acceptez d'utiliser le compte agent <strong>uniquement</strong> pour vendre et gérer les tickets de la compagnie
              qui vous a créé un compte — pas pour d'autres entreprises et sans partager votre compte.</li>
            <li>Chaque numéro, montant et tirage saisi dans le POS relève de votre responsabilité — vérifiez
              les informations avant d'appuyer sur «&nbsp;Imprimer&nbsp;».</li>
            <li>Une fiche peut être annulée par vous-même uniquement pendant les 10 premières minutes après l'impression ; ensuite,
              une demande doit être approuvée par la Compagnie ou le Super Admin.</li>
            <li>Vous devez respecter les heures d'ouverture et de fermeture de chaque tirage ; le système peut refuser une vente si le tirage est
              fermé, et cela ne constitue pas une erreur du système.</li>
            <li>Votre compagnie peut suspendre ou retirer l'accès au compte agent à tout moment si ces règles ne sont pas respectées.</li>
          </ul>

          <div class="card-hd" style="margin-top:1rem"><h3><i class="fa-solid fa-user-shield"></i> 2. Confidentialité &amp; données</h3></div>
          <p class="jl27-terms-note">
            <i class="fa-solid fa-circle-info"></i>
            <strong>Vous êtes responsable de toutes les données que vous saisissez sur le site</strong> — numéros, montants, messages
            et informations de profil. Ne partagez jamais le mot de passe de votre compte ; la Compagnie ou le Super Admin ne vous le
            demandera jamais par message ou par appel.
          </p>

          <div class="card-hd" style="margin-top:1rem"><h3><i class="fa-solid fa-eye"></i> 3. Surveillance des activités</h3></div>
          <p class="jl27-terms-note">
            Pour protéger la compagnie et les fonds entrants et sortants, vos activités lorsque vous êtes connecté au système
            (ventes, fiches, modifications) peuvent être <strong>suivies et enregistrées</strong> à des fins d'audit. Cela aide à détecter
            rapidement les erreurs ou les abus et vous protège également en cas de litige concernant une fiche.
          </p>

          <div class="card-hd" style="margin-top:1rem"><h3><i class="fa-solid fa-book-open"></i> 4. Comment l’utiliser</h3></div>
          <ol class="jl27-terms-list jl27-terms-steps">
            <li>Choisissez le <strong>tirage</strong>, sélectionnez le <strong>jeu</strong>, saisissez le <strong>numéro</strong> et le <strong>montant</strong>, puis appuyez sur «&nbsp;Ajouter un pari&nbsp;».</li>
            <li>Répétez l'opération pour les autres tirages sur <strong>la même fiche</strong> si nécessaire.</li>
            <li>Appuyez sur «&nbsp;Imprimer&nbsp;» — un <strong>aperçu de 5&nbsp;secondes</strong> de la fiche s'affichera avant sa validation ; appuyez sur <i class="fa-solid fa-xmark"></i> si vous souhaitez la modifier.</li>
            <li>Consultez <strong>Mes tickets</strong> pour l'historique, <strong>Rapport du jour</strong> pour le total de la journée et <strong>Résultats des tirages</strong> / <strong>Fiches gagnantes</strong> après les tirages.</li>
          </ol>

          <p class="jl27-terms-note muted" style="margin-top:1rem">
            Ceci constitue les conditions spécifiques du rôle <strong>agent</strong>. Pour les conditions générales et la politique
            complète de confidentialité de la plateforme, consultez
            <a href="legal.html#responsabilite" target="_blank" rel="noopener">la page Légal du site</a>.
          </p>
        </div>`;
    }
  });
})();


/* =====================================================================
 * JADSTACK LOTTO V10 — «AKTIVE NOTIFIKASYON IMÈL» (PLAN V10 · H.3)
 * ---------------------------------------------------------------------
 * Vi `mail-optin` — disponib pou Compagnie, Agent ak Super Admin, nan paj
 * Messages yo. Twa etap klè, jan kliyan an mande yo:
 *   1. Switch «Activer les notifications e-mail» → montre ti fòm tès la.
 *   2. Itilizatè a voye yon imèl tès bay tèt li → eksplikasyon klè ke
 *      imèl la soti au nom de FormSubmit epi li dwe klike lyen aktivasyon an.
 *   3. Bouton «Activer le formulaire» → depi lè sa a li kòmanse resevwa vre e-mails.
 *
 * Èd (?) sou chak paramèt difisil — sitou «kiyès ki ka wè done pa imèl».
 * ===================================================================== */
(function () {
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const MAIL = () => window.Lotri.mail;

  const HELP = {
    optin: `Notifications yo pase pa FormSubmit (yon sèvis relè imèl). Nou pa gen backend:
      chak aksyon sou sit la rele FormSubmit dirèkteman epi FormSubmit voye imèl la nan bwat
      resepsyon w lan. Se pou sa premye fwa a mande yon konfimasyon manyèl.`,
    privacy: `Ki done ki pase nan imèl la? Sèlman done aksyon an: kiyès ki fè l, nan ki konpayi,
      ki eleman li touche, dat/lè, ak yon blòk ODIT JSON. Yon konpayi pa janm resevwa done yon
      lòt konpayi. Agent pa resevwa notifikasyon aksyon — li pa sou tèt pèsonn. Compte sipò
      platfòm nan resevwa yon kopi (CC) pou sipò ak odit.`,
    test: `E-mail de test la ale sou adrès ou antre a. Objè a ap kòmanse ak non platfòm nan.
      Si w pa wè l nan 2 minit, gade nan Spam / Promotions.`
  };

  const helpBtn = (k, label) => `<button type="button" class="help-dot" data-help="${esc(k)}"
      aria-label="Èd — ${esc(label)}" title="Comment ça fonctionne ?">?</button>`;

  function view(host) {
    const p = window.__lotriProfile || {};
    const mine = p.email || '';
    const st = MAIL().optin.get(mine);

    host.innerHTML = `
    <div class="page-hd">
      <h2>Notifications par e-mail</h2>
      <p class="muted">Recevez les actions directement par e-mail — sans devoir visiter le site chaque jour.</p>
    </div>

    <div class="card">
      <div class="card-hd">
        <h3>Activer les notifications e-mail ${helpBtn('optin', 'Activer les notifications e-mail')}</h3>
        <span class="badge ${st.on && st.confirmed ? 'badge-success' : st.on ? 'badge-warning' : ''}">
          ${st.on && st.confirmed ? 'Actif' : st.on ? 'En attente de confirmation' : 'Fermer'}</span>
      </div>
      <label class="switch" style="justify-content:space-between">
        <span>Recevoir les notifications d\'actions sur mon e-mail (<strong class="mono">${esc(mine || '—')}</strong>)</span>
        <input type="checkbox" id="oi-switch" ${st.on ? 'checked' : ''}><span class="track"></span>
      </label>

      <div id="oi-steps" ${st.on ? '' : 'hidden'} class="optin-steps">
        <ol class="optin-ol">
          <li><strong>Étape 1 — Envoyez-vous un e-mail de test.</strong>
            <div class="form-grid" style="margin-top:.6rem">
              <div><label class="label" for="oi-mail">Votre e-mail ${helpBtn('test', 'E-mail de test')}</label>
                <input class="input" id="oi-mail" type="email" value="${esc(mine)}"></div>
              <div><label class="label" for="oi-msg">Messages tès</label>
                <textarea class="textarea" id="oi-msg" rows="2" maxlength="400">Tès notifikasyon JADSTACK LOTTO.</textarea></div>
            </div>
            <button class="btn btn-primary" id="oi-send" style="margin-top:.6rem">
              <i class="fa-solid fa-paper-plane"></i> Envoyer l\'e-mail de test</button>
            <div class="alert" id="oi-res" hidden></div>
          </li>

          <li><strong>Étape 2 — Confirmez l\'adresse dans votre boîte de réception.</strong>
            <p class="muted">Vous allez recevoir un e-mail <strong>provenant du nom FormSubmit</strong>
              (objè a: «Confirm your email»). Vous dwe antre nan bwat resepsyon w lan
              (gade nan <em>Spam</em> tou) epi <strong>klike sou lyen aktivasyon an</strong>.
              Avant ou fè sa, okenn vre notifikasyon pa ka rive.</p>
          </li>

          <li><strong>Etap 3 — Peze «Activer le formulaire».</strong>
            <p class="muted">Du lè sa a, chak fwa yon moun ekri w oswa yon aksyon ki konsène w
              fèt, ou resevwa yon vre imèl sou kont Gmail ou.</p>
            <button class="btn ${st.confirmed ? 'btn-ghost' : 'btn-primary'}" id="oi-confirm">
              <i class="fa-solid fa-circle-check"></i> ${st.confirmed ? 'Form deja aktive' : 'Activer le formulaire'}</button>
          </li>
        </ol>
      </div>
    </div>

    <div class="card" style="margin-top:1.25rem">
      <div class="card-hd"><h3>Qui peut voir les données par e-mail ${helpBtn('privacy', 'Confidentialité des e-mails')}</h3></div>
      <ul class="muted rule-list">
        <li>La compagnie reçoit <strong>uniquement</strong> aksyon pa li ak aksyon ajan li yo.</li>
        <li>L\'administration reçoit l\'audit des compagnies et des agents — mais <strong>pa</strong> mesaj prive ant yon ajan ak konpayi li.</li>
        <li>Agent <strong>pa</strong> reçoit les notifications d\'actions (il ne surveille personne) ; il ne reçoit que les messages qui lui sont adressés.</li>
        <li>Le compte support de la plateforme reste en <strong>CC</strong> sur tous les messages, pour le support et l\'audit.</li>
      </ul>
    </div>

    <div class="help-pop" id="help-pop" hidden><div class="help-in"><p id="help-txt"></p>
      <button class="btn btn-sm btn-ghost" id="help-x">Fermer</button></div></div>`;

    /* --- Switch --- */
    const sw = host.querySelector('#oi-switch');
    sw.addEventListener('change', () => {
      MAIL().optin.set(mine, { on: sw.checked });
      host.querySelector('#oi-steps').hidden = !sw.checked;
      window.Lotri.toast(sw.checked
        ? 'Notifications activées — effectuez l\'étape de test maintenant.'
        : 'Notifications désactivées.', sw.checked ? 'success' : 'info');
    });

    /* --- Etap 1: imèl tès --- */
    host.querySelector('#oi-send').addEventListener('click', async () => {
      const to = host.querySelector('#oi-mail').value.trim();
      const msg = host.querySelector('#oi-msg').value.trim();
      const box = host.querySelector('#oi-res');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
        box.className = 'alert alert-error'; box.hidden = false;
        box.textContent = 'Saisissez une adresse e-mail valide.'; return;
      }
      await window.Lotri.ui.busy(host.querySelector('#oi-send'), async () => {
        const res = await MAIL().test(to, msg, { name: p.full_name || '', email: p.email });
        box.hidden = false;
        if (res && res.ok) {
          box.className = 'alert alert-success';
          box.innerHTML = `E-mail la pati sou <strong>${esc(to)}</strong>.
            Ouvrir bwat resepsyon w lan: si se premye fwa, ou pral wè yon imèl
            <strong>au nom de FormSubmit</strong> — klike lyen aktivasyon an, apre sa retounen
            peze <strong>« Activer le formulaire »</strong>.`;
          MAIL().optin.set(to, { on: true });
        } else {
          box.className = 'alert alert-error';
          box.textContent = 'Impossible de l\'envoyer : ' +
            ((res && res.payload && res.payload.message) || 'le service ne répond pas') +
            '. Vérifiez l\'adresse et réessayez.';
        }
      });
    });

    /* --- Etap 3: Activer le formulaire --- */
    host.querySelector('#oi-confirm').addEventListener('click', async () => {
      const to = host.querySelector('#oi-mail').value.trim() || mine;
      const ok = await window.Lotri.modal.confirm('Avez-vous cliqué sur le lien FormSubmit ?',
        'Cliquez sur « Oui, activer » uniquement après avoir cliqué sur le lien de confirmation dans votre boîte de réception.',
        { okText: 'Oui, activer', cancelText: 'Pas encore' });
      if (!ok) return;
      MAIL().optin.set(to, { on: true, confirmed: true });
      window.Lotri.toast('Formulaire activé — vous allez commencer à recevoir de vrais e-mails.', 'success');
      LotriShell.render();
    });

    /* --- Èd (?) --- */
    const pop = host.querySelector('#help-pop');
    host.querySelectorAll('[data-help]').forEach(b => b.addEventListener('click', () => {
      host.querySelector('#help-txt').textContent = HELP[b.dataset.help] || '';
      pop.hidden = false;
    }));
    host.querySelector('#help-x').addEventListener('click', () => { pop.hidden = true; });
  }

  /* V14 RÈG KRITIK #1 — uniquement Super Admin gen notifikasyon pa e-mails. */
  function jl14OnlySuper(host){
    const p = window.__lotriProfile || {};
    if (p.role === 'super_admin') return false;
    host.innerHTML = '<div class="empty"><i class="fa-solid fa-lock"></i>Les notifications par e-mail sont réservées à l\'administration.</div>';
    return true;
  }
  LotriShell.register('mail-optin', { render: async host => { if (jl14OnlySuper(host)) return; return view(host); } });
})();


/* =====================================================================
 * AJAN — V9.3 : « Profil de la compagnie » an LEKTI SÈLMAN
 *  - Menm antèt ak paj konpayi a (2 ti logo + non nan mitan).
 *  - Agent an PA ka chanje anyen: pa gen fòm, pa gen upload.
 *  - Yo rive isit la lè yo klike logo konpayi a nan sidemenu a.
 * ===================================================================== */
(function () {
  const SB = () => window.Lotri.supabase;
  const esc = window.Lotri.escapeHtml;

  LotriShell.register('aprofile', {
    render: async (host) => {
      const p = window.__lotriProfile;
      if (!p || !p.company_id) {
        host.innerHTML = `<div class="empty"><i class="fa-solid fa-building-circle-exclamation"></i>
          Compte ou pa lye ak yon konpayi.</div>`;
        return;
      }
      const { data: co, error } = await SB().from('jl9_companies')
        .select('id,public_id,name,email,phone,address,logo_url,created_at,country,department,email_2')
        .eq('id', p.company_id).maybeSingle();
      if (error || !co) {
        host.innerHTML = `<div class="empty"><i class="fa-solid fa-triangle-exclamation"></i>
          ${esc(error?.message || 'Votre compagnie est introuvable.')}</div>`;
        return;
      }
      const myAgentId = p.agent_id || null;

      const logoBox = (side) => `<div class="ph-logo" data-ph-logo="${side}">${co.logo_url
        ? `<img src="${esc(co.logo_url)}" alt="Logo ${esc(co.name)}">`
        : `<span class="fallback">${esc((co.name || 'K').charAt(0).toUpperCase())}</span>`}</div>`;

      const row = (label, val) => `<tr><th style="text-align:left;width:36%">${esc(label)}</th>
        <td>${esc(val || '—')}</td></tr>`;

      host.innerHTML = `
      <div class="profile-head">
        ${logoBox('left')}
        <div class="ph-mid">
          <h2 class="ph-name">${esc(co.name || '—')}</h2>
          <p class="ph-sub">Profil de la compagnie — lecture seule</p>
          <div class="ph-chips">
            <span class="chip mono">ID: ${esc(co.public_id || '—')}</span>
            <span class="badge"><i class="fa-solid fa-lock"></i> Vous ne pouvez pas modifier</span>
          </div>
        </div>
        ${logoBox('right')}
      </div>

      <div class="card" style="margin-top:1.25rem">
        <div class="card-hd"><h3>Informations de la compagnie</h3></div>
        <p class="muted">Se konpayi w ap travay pou li. Sèlman konpayi a (ak Super Admin)
          ki ka chanje enfòmasyon sa yo.</p>
        <div class="table-wrap"><table class="table">
          <tbody data-company-detail="${esc(co.id)}" style="cursor:pointer" title="Cliquez pour voir plus de détails">
            ${row('Nom de la compagnie', co.name)}
            ${row('E-mail', co.email)}
            ${row('Téléphone', co.phone)}
            ${row('Adresse', co.address)}
            ${row('Idantifyan piblik', co.public_id)}
            ${row('Pays', co.country)}
            ${row('Département', co.department)}
          </tbody>
        </table></div>
      </div>

      <div class="card" style="margin-top:1.25rem">
        <div class="card-hd"><h3>Mon compte</h3></div>
        <div class="table-wrap"><table class="table">
          <tbody ${myAgentId ? `data-agent-detail="${esc(myAgentId)}" style="cursor:pointer" title="Cliquez pour voir plus de détails"` : ''}>
            ${row('Nom', p.full_name)}
            ${row('E-mail', p.email)}
            ${row('Rôle', String(p.role || '').replace('_', ' '))}
          </tbody>
        </table></div>
      </div>`;
    }
  });
})();


/* =====================================================================
 * JADSTACK LOTTO — LOGIN ENTEGRE POU PAJ AJAN (V27)
 * Paj `ajan.html` la se aplikasyon an limenm (WebView APK/iOS), kidonk li
 * dwe genyen PWÒP paj login li anndan l — pa gen redireksyon sou
 * `ajan.html` gen pwòp login li. Si pa gen sesyon, yon ekran login plen-ekran parèt sou
 * plas la; apre koneksyon, paj la rechaje kòm app la.
 *
 * Chaje AVAN `auth-guard.js`. Si fichye sa a absan, auth-guard la
 * kontinye fè ansyen redireksyon an (okenn regresyon).
 * ===================================================================== */
(function () {
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g,
    c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  let el = null;

  function build() {
    if (el) return el;
    el = document.createElement('div');
    el.className = 'jl27-login';
    el.innerHTML = `
      <form class="jl27-login-card" id="jl27-login-form" autocomplete="on">
        <div class="jl27-login-brand">
          <img src="assets/img/logo.png" alt="JADSTACK LOTTO"
               onerror="this.style.display='none'">
          <h1>Connexion Agent</h1>
          <p>Saisissez vos informations pour ouvrir le POS.</p>
        </div>
        <label class="jl27-fld">
          <span>E-mail</span>
          <input type="email" id="jl27-email" inputmode="email" autocomplete="username"
                 required placeholder="email@exemple.com">
        </label>
        <label class="jl27-fld">
          <span>Mot de passe</span>
          <span class="jl27-pass">
            <input type="password" id="jl27-pass" autocomplete="current-password"
                   required placeholder="••••••••">
            <button type="button" id="jl27-eye" aria-label="Afficher le mot de passe">
              <i class="fa-solid fa-eye"></i>
            </button>
          </span>
        </label>
        <div class="jl27-err" id="jl27-err" hidden></div>
        <button class="jl27-submit" type="submit" id="jl27-submit">
          <i class="fa-solid fa-right-to-bracket"></i> Se connecter
        </button>
        <button class="jl27-link" type="button" id="jl27-reset">Mot de passe oublié ?</button>
      </form>`;
    return el;
  }

  function show() {
    document.querySelectorAll('.app-loading').forEach(n => n.remove());
    document.body.appendChild(build());
    const $ = s => el.querySelector(s);
    const err = $('#jl27-err');
    const showErr = m => { err.textContent = m; err.hidden = false; };

    $('#jl27-eye').onclick = () => {
      const i = $('#jl27-pass');
      i.type = i.type === 'password' ? 'text' : 'password';
      $('#jl27-eye').innerHTML = i.type === 'password'
        ? '<i class="fa-solid fa-eye"></i>' : '<i class="fa-solid fa-eye-slash"></i>';
    };

    $('#jl27-reset').onclick = async () => {
      const email = $('#jl27-email').value.trim().toLowerCase();
      if (!email) return showErr('Saisissez d\'abord votre e-mail.');
      const { error } = await window.Lotri.supabase.auth
        .resetPasswordForEmail(email, { redirectTo: location.origin + '/ajan.html' });
      if (error) showErr(error.message);
      else showErr('Nous avons envoyé un e-mail pour changer le mot de passe.');
    };

    $('#jl27-login-form').onsubmit = async (e) => {
      e.preventDefault();
      err.hidden = true;
      const email = $('#jl27-email').value.trim().toLowerCase();
      const password = $('#jl27-pass').value;
      const btn = $('#jl27-submit');
      btn.disabled = true;
      btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Connexion en cours...';
      try {
        const { error } = await window.Lotri.supabase.auth
          .signInWithPassword({ email, password });
        if (error) throw new Error(error.message === 'Invalid login credentials'
          ? 'L\'e-mail ou le mot de passe est incorrect.' : error.message);
        const prof = await window.Lotri.getProfile(true);
        if (!prof) throw new Error('Votre compte n\'a pas de profil. Contactez l\'administrateur.');
        if (prof.status !== 'active') throw new Error('Votre compte n\'est pas actif.');
        if (prof.role !== 'agent') {
          location.replace(window.Lotri.homeFor(prof.role));
          return;
        }
        location.reload();
      } catch (ex) {
        showErr(esc(ex.message || 'Erreur de connexion.'));
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Se connecter';
      }
    };

    setTimeout(() => { const f = el.querySelector('#jl27-email'); if (f) f.focus(); }, 60);
  }

  window.LotriInlineLogin = { show };
})();


/* =====================================================================
 * JADSTACK LOTTO — V27 FAZ 3 §3.3
 * VIEW « Rapport du jour » pou AJAN an (key: `arapo`)
 * ---------------------------------------------------------------------
 *  • Okenn nouvo RPC, okenn nouvo tab : nou li `jl9_tickets` dirèkteman
 *    (RLS deja limite ajan an sou pwòp tikè li).
 *  • Kat KPI sèvi menm sistèm koulè `v26.css` (.jl26-kpis > .jl26-kpi).
 *  • Chart.js pou koub lavant pa lè + repatisyon pa tiraj.
 *  • Liste des tickets jou a + filtè (tiraj · jeu · estati · dat).
 *  • Lojik Solde / Ventes / À payer PA touche :
 *        Ventes     = SUM(total)
 *        À payer = SUM(prize_amount)
 *        Solde   = Ventes − À payer
 * ===================================================================== */
(function () {
  const SB = () => window.Lotri.supabase;
  const esc = s => window.Lotri.escapeHtml(String(s ?? ''));
  const money = n => Number(n || 0)
    .toLocaleString('fr-HT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' HTG';
  const int = n => Number(n || 0).toLocaleString('fr-HT');
  const today = () => {
    const d = new Date(), p = x => String(x).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  };
  const betsOf = t => {
    const v = t && t.bets;
    if (Array.isArray(v)) return v;
    if (typeof v === 'string' && v.trim()) { try { const o = JSON.parse(v); return Array.isArray(o) ? o : []; } catch (_) { return []; } }
    return [];
  };
  /* Yon tikè ka gen bets plat [{n,a,game_code}] oswa pa tiraj
     [{draw_id, bets:[...]}] — nou aplati tou de fòm yo. */
  const flatBets = t => {
    const out = [];
    betsOf(t).forEach(b => {
      if (b && Array.isArray(b.bets)) b.bets.forEach(x => out.push(x));
      else if (b) out.push(b);
    });
    return out;
  };
  const gameOf = b => String((b && (b.game_code || b.game)) || 'borlette').toUpperCase();

  let chartSales = null, chartDraws = null;

  function destroyCharts() {
    [chartSales, chartDraws].forEach(c => { try { c && c.destroy(); } catch (_) {} });
    chartSales = chartDraws = null;
  }

  LotriShell.register('arapo', {
    render: async (host) => {
      destroyCharts();

      const [{ data: draws }, { data: games }] = await Promise.all([
        SB().from('jl24_draws_today').select('id,name,sort_order').order('sort_order')
          .then(r => r.error ? SB().from('jl9_draws').select('id,name').limit(200) : r),
        SB().from('jl9_games').select('code,name').eq('active', true).order('code')
      ]);
      const drawName = {};
      (draws || []).forEach(d => { drawName[d.id] = d.name; });

      host.innerHTML = `
      <div class="jl27-page">
        <div class="page-hd jl26-daily-hd">
          <div>
            <h2>Rapport du jour</h2>
            <p class="muted">Solde = Ventes − À payer. Uniquement vos propres fiches.</p>
          </div>
          <span class="date-pill"><i class="fa-solid fa-calendar-day"></i> <span id="jl27-day">—</span></span>
        </div>

        <div class="card jl27-filters">
          <div class="card-hd"><h3>Filtres</h3>
            <button class="btn btn-primary btn-sm" id="jl27-go"><i class="fa-solid fa-filter"></i> Appliquer</button></div>
          <div class="jl27-frow">
            <label class="jl27-f"><span class="label">Date</span>
              <input class="input" type="date" id="jl27-date" value="${today()}"></label>
            <label class="jl27-f"><span class="label">Tirage</span>
              <select class="input" id="jl27-draw"><option value="">Tous</option>
                ${(draws || []).map(d => `<option value="${esc(d.id)}">${esc(d.name)}</option>`).join('')}</select></label>
            <label class="jl27-f"><span class="label">Jeu</span>
              <select class="input" id="jl27-game"><option value="">Tous</option>
                ${(games || []).map(g => `<option value="${esc(g.code)}">${esc(g.name || g.code)}</option>`).join('')}</select></label>
            <label class="jl27-f"><span class="label">Statut</span>
              <select class="input" id="jl27-status"><option value="">Tous</option>
                <option value="active">Actif</option><option value="won">Gagnant</option>
                <option value="paid">Payé</option><option value="lost">Perdu</option>
                <option value="cancelled">Annuler</option></select></label>
          </div>
        </div>

        <div class="jl26-kpis jl27-kpis" id="jl27-kpis"></div>

        <div class="jl27-charts">
          <div class="card"><div class="card-hd"><h3>Ventes par heure</h3></div>
            <div class="jl27-canvas"><canvas id="jl27-c1"></canvas></div></div>
          <div class="card"><div class="card-hd"><h3>Répartition par tirage</h3></div>
            <div class="jl27-canvas"><canvas id="jl27-c2"></canvas></div></div>
        </div>

        <div class="card"><div class="card-hd"><h3>Fiches du jour</h3>
            <span class="muted" id="jl27-count" style="font-size:.78rem"></span></div>
          <div id="jl27-list"></div></div>
      </div>`;

      const $ = s => host.querySelector(s);

      async function load() {
        const day = $('#jl27-date').value || today();
        const drawId = $('#jl27-draw').value;
        const game = $('#jl27-game').value;
        const status = $('#jl27-status').value;
        $('#jl27-day').textContent = new Date(day + 'T12:00:00').toLocaleDateString('fr-HT');

        let q = SB().from('jl9_tickets')
          .select('id,ticket_no,draw_id,total,prize_amount,status,bets,created_at,printed_at')
          .is('deleted_at', null)
          .gte('created_at', day + 'T00:00:00')
          .lte('created_at', day + 'T23:59:59')
          .order('created_at', { ascending: false })
          .limit(2000);
        if (status) q = q.eq('status', status);
        const { data, error } = await q;
        if (error) throw new Error(error.message);

        let tickets = data || [];
        if (drawId) tickets = tickets.filter(t => String(t.draw_id) === drawId
          || flatBets(t).some(b => String(b.draw_id || '') === drawId));
        if (game) tickets = tickets.filter(t => flatBets(t).some(b => gameOf(b) === game.toUpperCase()));

        const sales = tickets.reduce((a, t) => a + Number(t.total || 0), 0);
        const pay = tickets.reduce((a, t) => a + Number(t.prize_amount || 0), 0);
        const wins = tickets.filter(t => t.status === 'won').length;
        const unpaid = tickets.filter(t => t.status === 'won')
          .reduce((a, t) => a + Number(t.prize_amount || 0), 0);

        $('#jl27-kpis').innerHTML = [
          { k: 'Ventes', v: money(sales), i: 'fa-solid fa-cash-register' },
          { k: 'Fiche', v: int(tickets.length), i: 'fa-solid fa-ticket' },
          { k: 'Fiches gagnantes', v: int(wins), i: 'fa-solid fa-trophy' },
          { k: 'À payer', v: money(unpaid), i: 'fa-solid fa-hand-holding-dollar' },
          { k: 'Solde', v: money(sales - pay), i: 'fa-solid fa-scale-balanced' }
        ].map(c => `<div class="jl26-kpi"><i class="ico ${c.i}"></i>
             <div class="k">${esc(c.k)}</div><div class="v mono">${esc(c.v)}</div></div>`).join('');

        /* ---- Chart 1 : lavant pa lè ---- */
        const byHour = new Array(24).fill(0);
        tickets.forEach(t => { byHour[new Date(t.created_at).getHours()] += Number(t.total || 0); });
        /* ---- Chart 2 : repatisyon pa tiraj ---- */
        const byDraw = {};
        tickets.forEach(t => {
          const k = drawName[t.draw_id] || 'Autre';
          byDraw[k] = (byDraw[k] || 0) + Number(t.total || 0);
        });

        destroyCharts();
        if (window.Chart) {
          const css = getComputedStyle(document.documentElement);
          const primary = css.getPropertyValue('--primary').trim() || '#2563eb';
          const accent = css.getPropertyValue('--accent').trim() || '#f59e0b';
          const text = css.getPropertyValue('--muted').trim() || '#888';
          Chart.defaults.color = text;
          Chart.defaults.font.family = 'Inter, system-ui, sans-serif';

          chartSales = new Chart($('#jl27-c1'), {
            type: 'line',
            data: {
              labels: byHour.map((_, h) => String(h).padStart(2, '0') + 'h'),
              datasets: [{
                label: 'Ventes (HTG)', data: byHour, tension: .35, fill: true,
                borderColor: primary, backgroundColor: `color-mix(in oklab, ${primary} 18%, transparent)`,
                pointRadius: 2, borderWidth: 2
              }]
            },
            options: {
              responsive: true, maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: { x: { grid: { display: false } }, y: { beginAtZero: true } }
            }
          });

          const labels = Object.keys(byDraw);
          chartDraws = new Chart($('#jl27-c2'), {
            type: 'doughnut',
            data: {
              labels: labels.length ? labels : ['Aucune donnée'],
              datasets: [{
                data: labels.length ? labels.map(k => byDraw[k]) : [1],
                backgroundColor: (labels.length ? labels : [1]).map((_, i) =>
                  i % 2 ? `color-mix(in oklab, ${accent} ${70 - i * 6}%, transparent)`
                        : `color-mix(in oklab, ${primary} ${80 - i * 6}%, transparent)`),
                borderWidth: 0
              }]
            },
            options: {
              responsive: true, maintainAspectRatio: false, cutout: '62%',
              plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, usePointStyle: true } } }
            }
          });
        }

        /* ---- Liste des tickets jou a ---- */
        $('#jl27-count').textContent = tickets.length + ' fich';
        $('#jl27-list').innerHTML = tickets.length
          ? `<div class="jl27-tickets">${tickets.map(t => {
              const bs = flatBets(t);
              return `<div class="jl27-tk" data-ticket="${esc(t.id)}">
                <div class="jl27-tk-hd">
                  <span class="mono no">${esc(t.ticket_no || '—')}</span>
                  <span class="badge ${t.status === 'won' ? 'badge-success' : t.status === 'cancelled' ? 'badge-danger' : ''}">${esc(t.status)}</span>
                </div>
                <div class="jl27-tk-bd">
                  <span class="muted"><i class="fa-solid fa-clock"></i> ${new Date(t.created_at).toLocaleTimeString('fr-HT')}</span>
                  <span class="muted"><i class="fa-solid fa-dice"></i> ${esc(drawName[t.draw_id] || '—')}</span>
                  <span class="muted"><i class="fa-solid fa-hashtag"></i> ${int(bs.length)} parye</span>
                </div>
                <div class="jl27-tk-ft">
                  <span class="mono tot">${esc(money(t.total))}</span>
                  ${Number(t.prize_amount || 0) > 0
                    ? `<span class="mono prize">+ ${esc(money(t.prize_amount))}</span>` : ''}
                </div>
              </div>`;
            }).join('')}</div>`
          : '<div class="empty"><i class="fa-solid fa-ticket"></i>Aucune fiche pour cette journée.</div>';
      }

      $('#jl27-go').onclick = () => load().catch(e => window.Lotri.toast(e.message, 'error'));
      ['#jl27-date', '#jl27-draw', '#jl27-game', '#jl27-status'].forEach(s => {
        $(s).addEventListener('change', () => load().catch(e => window.Lotri.toast(e.message, 'error')));
      });
      await load();
      /* Netwaye chart yo lè yon LÒT vi monte (setTimeout: pou nou pa kenbe
         evènman `lotri:view` ki soti nan pwòp montaj vi sa a). */
      setTimeout(() => document.addEventListener('lotri:view', destroyCharts, { once: true }), 0);
    }
  });
})();


/* =====================================================================
 * JADSTACK LOTTO — V26 · IKÒN KONTEKSTYÈL (FAZ 2 · PATI 5)
 * Bay chak lyen/bouton yon kontèks (tikè · ajan · konpayi · machin), epi
 * v26.css bay koulè a. Koulè tèks la = koulè ikòn nan; hover = --accent.
 * 100% pwogresif: si yon eleman pa rekonèt, li rete jan l te ye.
 * ===================================================================== */
(function () {
  const CTX = [
    ['ticket',  /tik(e|è)|ticket|fich|pos|vant|caisse|cash-register|receipt|award|trophy/i],
    ['agent',   /ajan|vand[eè]|agent|sip[eè]viz|superviz|ekip|users?\b|itilizat/i],
    ['company', /konpayi|company|sikisal|siksal|branch|building|pwofil konpayi/i],
    ['machine', /machin|machine|siveyans|surveillance|desktop|device|aparèy|app|apk/i],
  ];

  const ICON_CTX = [
    ['ticket',  /fa-(ticket|receipt|cash-register|file-invoice|award|trophy)/],
    ['agent',   /fa-(users?|user-group|user-tie|id-badge)/],
    ['company', /fa-(building|sitemap|city)/],
    ['machine', /fa-(desktop|display|mobile|tablet|laptop|tv)/],
  ];

  function ctxOf(node) {
    const icon = node.querySelector && node.querySelector('i[class*="fa-"]');
    if (icon) {
      for (const [k, re] of ICON_CTX) if (re.test(icon.className)) return k;
    }
    const txt = (node.dataset && node.dataset.view ? node.dataset.view + ' ' : '') +
                (node.textContent || '');
    for (const [k, re] of CTX) if (re.test(txt)) return k;
    return null;
  }

  function tag(root) {
    const scope = root || document;
    scope.querySelectorAll(
      'a[data-view], button[data-view], .side a, .sidebar a, nav a, .card-hd h3, .page-hd h2'
    ).forEach(n => {
      if (n.hasAttribute('data-v26-ctx')) return;
      const c = ctxOf(n);
      if (c) n.setAttribute('data-v26-ctx', c);
    });
  }

  function boot() {
    tag(document);
    const host = document.getElementById('view') || document.body;
    const mo = new MutationObserver(() => tag(document));
    mo.observe(host, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', boot);
  else boot();
  document.addEventListener('lotri:ready', () => setTimeout(() => tag(document), 120));
})();


/* =====================================================================
 * V71 — Anrichisman UI uniquement (pa gen okenn lojik metye).
 *  - Bouton aksyon prensipal santre sou dashboard (ale nan vi rapò a).
 *  - Bouton flotan "filtè" ki fè scroll rive sou premye zòn filtè/rechèch.
 * Tous bagay se prezantasyon : okenn done pa modifye.
 * ===================================================================== */
(function () {
  function reportKey() {
    if (!window.LotriShell || !window.LotriShell.get) return null;
    return ['reports', 'rapo-jounen', 'rapports', 'v12-stats'].find(k => window.LotriShell.get(k)) || null;
  }

  function currentView() {
    return new URL(location.href).searchParams.get('view') || '';
  }

  function addHeroAction(host) {
    if (host.querySelector('.v71-action')) return;
    const stats = host.querySelector('.grid-stats');
    if (!stats) return;
    const key = reportKey();
    if (!key) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'v71-action';
    btn.textContent = (window.Lotri && window.Lotri.t)
      ? window.Lotri.t('v71.rapo_jounalye', 'Rapport journalier')
      : 'Rapport journalier';
    btn.addEventListener('click', () => window.LotriShell.go(key));
    stats.insertAdjacentElement('afterend', btn);
  }

  function addFilterFab(host) {
    // V72 remplace le bouton flottant de filtre par un vrai panneau Réglages.
    // Hors tableau de bord, aucun bouton décoratif n’est ajouté ici.
    const old = document.querySelector('.v71-fab');
    if (old) old.remove();
  }

  document.addEventListener('lotri:view', (e) => {
    const host = e.detail;
    if (!host) return;
    try {
      if (currentView() === 'dashboard' || host.querySelector('.grid-stats')) addHeroAction(host);
      addFilterFab(host);
    } catch (_) { /* prezantasyon uniquement — pa janm bloke vi a */ }
  });
})();


/* JADSTACK LOTTO V72 — Réglages UI fonctionnels, sans modification du backend */
(function(){
  const L = window.Lotri = window.Lotri || {};
  const KEY = 'jadstack-ui-settings-v72';
  const COLORS = {
    blue:'#3f63c8', purple:'#6b43c7', cyan:'#2fa7c9', navy:'#173f63', orange:'#f39a24', red:'#ef3f3f'
  };
  function read(){ try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(_){return {}} }
  function write(v){ try{localStorage.setItem(KEY,JSON.stringify(v))}catch(_){} }
  function apply(s){
    const root=document.documentElement;
    const mode=s.mode==='dark'?'dark':'light';
    root.dataset.v72Theme=mode;
    root.dataset.theme=mode;
    try{localStorage.setItem('theme',mode)}catch(_){}
    document.body.classList.toggle('v72-dark',mode==='dark');
    const color=COLORS[s.color]||COLORS.blue;
    root.style.setProperty('--v72-accent',color);
    root.style.setProperty('--v72-accent-soft',color+'22');
    /* KOREKSYON: pa touche --primary/--primary-soft isit ankò. Yo se
       tokens SEMANTIK brand la (defini nan tokens.css, ak vèsyon
       light + dark pwòp yo). Chwa koulè "aksan" ajan an dwe rete
       LIMITE a --v72-accent* (bouton reglaj, seleksyon) — si li
       ekrase --primary li kraze idantite mak la AK distenksyon
       light/dark tokens.css defini. */
    document.querySelectorAll('.v72-color').forEach(b=>b.classList.toggle('selected',b.dataset.color===s.color));
    document.querySelectorAll('[data-v72-mode]').forEach(b=>b.classList.toggle('selected',b.dataset.v72Mode===mode));
  }
  function state(){ const s=read(); if(!s.mode)s.mode='light'; if(!s.color)s.color='blue'; return s; }
  function toast(msg,type){ if(L.toast) L.toast(msg,type||'success'); }
  function isDashboard(){ return (new URL(location.href)).searchParams.get('view')==='dashboard'; }
  function sidebarCompact(compact){
    const shell=document.getElementById('shell');
    if(!shell)return;
    shell.classList.toggle('v72-sidebar-compact',compact);
    const s=state(); s.compact=!!compact; write(s);
  }
  function toggleFullscreen(){
    const d=document;
    if(!d.fullscreenElement && !d.webkitFullscreenElement){
      const el=document.documentElement;
      const fn=el.requestFullscreen||el.webkitRequestFullscreen;
      if(fn){ Promise.resolve(fn.call(el)).catch(()=>toast('Le plein écran est limité par ce navigateur.','error')); }
      else toast('Le plein écran n’est pas disponible ici.','error');
    }else{
      const fn=d.exitFullscreen||d.webkitExitFullscreen;
      if(fn) Promise.resolve(fn.call(d)).catch(()=>{});
    }
  }
  function open(){
    let modal=document.getElementById('v72-settings-modal');
    if(!modal){
      modal=document.createElement('div'); modal.id='v72-settings-modal'; modal.className='v72-settings-modal';
      modal.innerHTML=`<div class="v72-settings-backdrop" data-v72-close></div><section class="v72-settings-panel" role="dialog" aria-modal="true" aria-labelledby="v72-settings-title">
        <header><h2 id="v72-settings-title">Réglages</h2><button type="button" class="v72-settings-close" data-v72-close aria-label="Fermer"><i class="fa-solid fa-xmark"></i></button></header>
        <div class="v72-settings-body">
          <h3>Mode</h3><div class="v72-mode-grid">
            <button type="button" class="v72-mode" data-v72-mode="light"><i class="fa-solid fa-sun"></i><span>Mode clair</span></button>
            <button type="button" class="v72-mode" data-v72-mode="dark"><i class="fa-solid fa-moon"></i><span>Mode sombre</span></button>
          </div>
          <h3>Couleur</h3><div class="v72-color-grid">
            <button class="v72-color blue" data-color="blue" aria-label="Bleu"></button><button class="v72-color purple" data-color="purple" aria-label="Violet"></button><button class="v72-color cyan" data-color="cyan" aria-label="Cyan"></button><button class="v72-color navy" data-color="navy" aria-label="Bleu foncé"></button><button class="v72-color orange" data-color="orange" aria-label="Orange"></button><button class="v72-color red" data-color="red" aria-label="Rouge"></button>
          </div>
          <h3>Déployer</h3><div class="v72-deploy"><button type="button" id="v72-expand" aria-label="Déployer"><i class="fa-solid fa-chevron-right"></i></button><button type="button" id="v72-compact" aria-label="Compacter"><i class="fa-solid fa-chevron-left"></i></button></div>
          <button type="button" class="v72-fullscreen" id="v72-fullscreen"><i class="fa-solid fa-expand"></i><span>Plein Écran</span></button>
        </div>
      </section>`;
      document.body.appendChild(modal);
      modal.addEventListener('click',e=>{ if(e.target.closest('[data-v72-close]')) close(); });
      modal.querySelectorAll('[data-v72-mode]').forEach(b=>b.addEventListener('click',()=>{const s=state();s.mode=b.dataset.v72Mode;write(s);apply(s);}));
      modal.querySelectorAll('.v72-color').forEach(b=>b.addEventListener('click',()=>{const s=state();s.color=b.dataset.color;write(s);apply(s);}));
      modal.querySelector('#v72-expand').addEventListener('click',()=>sidebarCompact(false));
      modal.querySelector('#v72-compact').addEventListener('click',()=>sidebarCompact(true));
      modal.querySelector('#v72-fullscreen').addEventListener('click',toggleFullscreen);
    }
    modal.classList.add('open'); document.body.classList.add('v72-modal-open'); apply(state());
    try{ if(!history.state || history.state.v72Settings!==true) history.pushState({...(history.state||{}),v72Settings:true},'',location.href); }catch(_){}
  }
  function close(){ const m=document.getElementById('v72-settings-modal'); if(m)m.classList.remove('open'); document.body.classList.remove('v72-modal-open'); }
  function addButton(){
    document.querySelectorAll('.v72-settings-fab').forEach(x=>x.remove());
    if(!isDashboard())return;
    const b=document.createElement('button'); b.type='button'; b.className='v72-settings-fab'; b.setAttribute('aria-label','Réglages'); b.innerHTML='<i class="fa-solid fa-sliders"></i>'; b.addEventListener('click',open); document.body.appendChild(b);
  }
  function init(){ const s=state(); apply(s); if(s.compact) sidebarCompact(true); addButton(); }
  document.addEventListener('lotri:view',()=>{ setTimeout(addButton,0); });
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
  L.openSettings=open; L.closeSettings=close;
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();


/* V77 — Commission individuelle par agent.
   Le backend JL68 reste la base. Ce module ajoute uniquement la table
   de commission dédiée (migration SQL fournie dans supabase/).
   Règles: Agent = lecture seule de sa commission; Employeur = lecture seule;
   Admin Compagnie = gestion de sa compagnie; Super Admin = gestion globale. */
(function(){
  if (!window.LotriShell) return;
  const SB=()=>window.Lotri&&window.Lotri.supabase;
  const esc=s=>window.Lotri&&window.Lotri.escapeHtml?window.Lotri.escapeHtml(String(s??'')):String(s??'');
  const money=n=>Number(n||0).toLocaleString('fr-FR',{minimumFractionDigits:2,maximumFractionDigits:2})+' HTG';
  const role=()=>String((window.__lotriProfile||{}).role||'').toLowerCase();
  const canEdit=()=>['company','super_admin'].includes(role());
  const isAgent=()=>role()==='agent';
  const isEmployer=()=>role()==='employer';
  const validRate=v=>{const n=Number(v); if(!Number.isFinite(n)||n<0||n>100) throw new Error('Le taux doit être compris entre 0 et 100 %.'); return Math.round(n*100)/100;};

  async function ensureProfile(){ const p=await window.Lotri.getProfile(); if(!p) throw new Error('Profil utilisateur introuvable.'); window.__lotriProfile=p; return p; }

  async function readCommissions(agentIds){
    if(!agentIds.length) return [];
    const {data,error}=await SB().from('jl9_agent_commissions').select('agent_id,company_id,commission_rate,updated_at,updated_by').in('agent_id',agentIds);
    if(error) throw new Error('Le module de commission V77 nécessite la migration SQL fournie dans supabase/ : '+error.message);
    return data||[];
  }

  async function saveRate(agentId, companyId, value){
    if(!canEdit()) throw new Error('Vous n\'avez pas l\'autorisation de modifier cette commission.');
    const rate=validRate(value);
    const p=await ensureProfile();
    if(role()==='company' && String(p.company_id)!==String(companyId)) throw new Error('Accès refusé : cet Agent appartient à une autre compagnie.');
    const {error}=await SB().from('jl9_agent_commissions').upsert({agent_id:agentId,company_id:companyId,commission_rate:rate,updated_by:p.id,updated_at:new Date().toISOString()},{onConflict:'agent_id'});
    if(error) throw new Error(error.message||'Impossible d’enregistrer la commission.');
    return rate;
  }

  async function loadSales(agentIds){
    if(!agentIds.length) return new Map();
    // V78: ne pas tronquer les données financières à 5 000 tickets.
    // On pagine les lignes côté client jusqu'à épuisement. Le calcul définitif
    // devrait idéalement être fait côté serveur/RPC pour les très gros volumes.
    const m=new Map(agentIds.map(id=>[String(id),0]));
    const pageSize=1000;
    for(let from=0;;from+=pageSize){
      const {data,error}=await SB().from('jl9_tickets').select('agent_id,total,status,created_by')
        .in('agent_id',agentIds).order('created_at',{ascending:false}).range(from,from+pageSize-1);
      if(error) throw error;
      const rows=data||[];
      rows.forEach(t=>{
        if(String(t.status||'').toLowerCase()==='cancelled') return;
        const id=t.agent_id;
        if(id==null) return;
        const amount=Number(t.total??0)||0;
        m.set(String(id),(m.get(String(id))||0)+amount);
      });
      if(rows.length<pageSize) break;
    }
    return m;
  }

  function renderTable(host, rows, editable){
    host.innerHTML=`<div class="table-wrap"><table class="table"><thead><tr><th>Agent</th><th>Compagnie</th><th>Taux</th><th class="num">Ventes</th><th class="num">Commission</th>${editable?'<th>Action</th>':''}</tr></thead><tbody>${rows.map(r=>`<tr>
      <td><strong>${esc(r.full_name||'—')}</strong><div class="muted mono">${esc(r.public_id||'')}</div></td>
      <td>${esc(r.company_name||'—')}</td>
      <td>${editable?`<input class="input input-sm" style="max-width:110px" type="number" min="0" max="100" step="0.01" value="${r.rate.toFixed(2)}" data-commission-input="${esc(r.id)}"> %`:`<strong>${r.rate.toFixed(2)} %</strong>`}</td>
      <td class="num">${money(r.sales)}</td><td class="num"><strong>${money(r.commission)}</strong></td>
      ${editable?`<td><button class="btn btn-sm btn-primary" data-save-commission="${esc(r.id)}">Enregistrer</button></td>`:''}
    </tr>`).join('')||`<tr><td colspan="${editable?6:5}"><div class="empty">Aucun Agent.</div></td></tr>`}</tbody></table></div>`;
    if(editable){
      host.querySelectorAll('[data-save-commission]').forEach(btn=>btn.onclick=async()=>{
        const id=btn.dataset.saveCommission, input=host.querySelector(`[data-commission-input="${CSS.escape(id)}"]`), row=rows.find(x=>String(x.id)===String(id));
        btn.disabled=true;
        try{ const rate=await saveRate(id,row.company_id,input.value); row.rate=rate; row.commission=row.sales*rate/100; window.Lotri.toast('Commission mise à jour avec succès.','success'); renderTable(host,rows,editable); }
        catch(e){window.Lotri.toast(e.message||'Erreur','error'); btn.disabled=false;}
      });
    }
  }

  async function agentsForCompany(companyId){
    const {data,error}=await SB().from('jl9_agents').select('id,public_id,full_name,status,company_id,jl9_companies(name)').eq('company_id',companyId).order('full_name');
    if(error) throw error;
    return (data||[]).map(a=>({...a,company_name:a.jl9_companies?.name||'—'}));
  }

  async function renderManager(host){
    const p=await ensureProfile();
    const superAdmin=role()==='super_admin';
    const companyId=superAdmin?null:p.company_id;
    host.innerHTML=`<section class="card v77-agent-commission"><div class="v77-commission-hero"><span class="eyebrow">Commission</span><h2>Centre des commissions</h2><p>Suivi basé sur les ventes réelles du backend JL68, avec un taux individuel pour chaque Agent.</p><span class="hero-rate" aria-hidden="true">%</span></div><div class="card-hd"><div><h2>Gestion des commissions</h2><p class="muted">Chaque Agent possède son propre taux de commission.</p></div><button class="btn btn-ghost" id="v77-refresh">Actualiser</button></div>
      ${superAdmin?'<div class="field" style="max-width:420px"><label class="label">Compagnie</label><select class="select" id="v77-company"><option value="">— Sélectionner une compagnie —</option></select></div>':''}
      <div id="v77-commission-body"><div class="empty">Chargement…</div></div></section>`;
    const companySel=host.querySelector('#v77-company');
    if(superAdmin){
      const {data,error}=await SB().from('jl9_companies').select('id,name').order('name');
      if(error) throw error;
      companySel.innerHTML='<option value="">— Sélectionner une compagnie —</option>'+(data||[]).map(c=>`<option value="${esc(c.id)}">${esc(c.name)}</option>`).join('');
      companySel.onchange=()=>load(companySel.value);
    }
    const load=async(cid=companyId)=>{
      const body=host.querySelector('#v77-commission-body');
      if(!cid){body.innerHTML='<div class="empty">Sélectionnez une compagnie pour afficher les Agents.</div>';return;}
      try{
        const agents=await agentsForCompany(cid), commissions=await readCommissions(agents.map(a=>a.id)), rates=new Map(commissions.map(c=>[String(c.agent_id),Number(c.commission_rate)||0])), sales=await loadSales(agents.map(a=>a.id));
        const rows=agents.map(a=>{const rate=rates.get(String(a.id))||0,s=sales.get(String(a.id))||0;return {...a,rate,sales:s,commission:s*rate/100};});
        const totals=rows.reduce((x,r)=>({sales:x.sales+r.sales,commission:x.commission+r.commission}),{sales:0,commission:0});
        body.innerHTML=`<div class="v77-ac-summary"><div class="v77-ac-stat"><small>Agents</small><strong>${rows.length}</strong></div><div class="v77-ac-stat"><small>Ventes</small><strong>${money(totals.sales)}</strong></div><div class="v77-ac-stat"><small>Commission totale</small><strong>${money(totals.commission)}</strong></div></div><div id="v77-table"></div>`;
        renderTable(body.querySelector('#v77-table'),rows,canEdit());
      }catch(e){body.innerHTML=`<div class="empty"><i class="fa-solid fa-triangle-exclamation"></i> ${esc(e.message||e)}</div>`;}
    };
    host.querySelector('#v77-refresh').onclick=()=>load(superAdmin?(companySel&&companySel.value):companyId);
    if(!superAdmin) await load(companyId);
  }

  async function renderReadOnlyAgent(host){
    const p=await ensureProfile();
    if(!p.agent_id){host.innerHTML='<div class="card"><div class="empty">Aucun Agent associé à ce compte.</div></div>';return;}
    const {data:agents,error:ae}=await SB().from('jl9_agents').select('id,public_id,full_name,company_id,jl9_companies(name)').eq('id',p.agent_id).maybeSingle();
    if(ae) throw ae;
    const commissions=await readCommissions(agents?[agents.id]:[]), c=commissions[0];
    const rate=Number(c?.commission_rate)||0, sales=(await loadSales([p.agent_id])).get(String(p.agent_id))||0;
    host.innerHTML=`<section class="card v77-agent-commission"><div class="card-hd"><div><h2>Ma Commission</h2><p class="muted">Votre taux est défini par un administrateur autorisé.</p></div></div><div class="v77-ac-summary"><div class="v77-ac-stat"><small>Taux de commission</small><strong>${rate.toFixed(2)} %</strong></div><div class="v77-ac-stat"><small>Ventes</small><strong>${money(sales)}</strong></div><div class="v77-ac-stat"><small>Commission</small><strong>${money(sales*rate/100)}</strong></div></div><p class="muted">Vous pouvez consulter votre commission, mais vous ne disposez d’aucune fonction permettant de la modifier.</p></section>`;
  }

  async function renderEmployer(host){
    // Employeur = consultation uniquement. Il ne reçoit aucun contrôle d’édition.
    const p=await ensureProfile();
    host.innerHTML='<section class="card v77-agent-commission"><div class="card-hd"><div><h2>Commissions</h2><p class="muted">Consultation uniquement.</p></div><button class="btn btn-ghost" id="v77-refresh">Actualiser</button></div><div id="v77-body"><div class="empty">Chargement…</div></div></section>';
    const load=async()=>{
      try{
        const {data:agents,error}=await SB().from('jl9_agents').select('id,public_id,full_name,company_id,jl9_companies(name)').order('full_name'); if(error) throw error;
        const as=(data||agents||[]).map(a=>({...a,company_name:a.jl9_companies?.name||'—'}));
        const commissions=await readCommissions(as.map(a=>a.id)), rates=new Map(commissions.map(c=>[String(c.agent_id),Number(c.commission_rate)||0])), sales=await loadSales(as.map(a=>a.id));
        const rows=as.map(a=>{const rate=rates.get(String(a.id))||0,s=sales.get(String(a.id))||0;return {...a,rate,sales:s,commission:s*rate/100};});
        renderTable(host.querySelector('#v77-body'),rows,false);
      }catch(e){host.querySelector('#v77-body').innerHTML=`<div class="empty">${esc(e.message||e)}</div>`;}
    };
    host.querySelector('#v77-refresh').onclick=load; await load();
  }

  async function renderReportSummary(host){
    const p=await ensureProfile();
    let q=SB().from('jl9_agents').select('id,company_id').order('id');
    if(role()==='company') q=q.eq('company_id',p.company_id);
    const {data:agents,error}=await q; if(error) throw error;
    const as=agents||[];
    if(!as.length){ host.innerHTML=''; return; }
    const commissions=await readCommissions(as.map(a=>a.id));
    const rates=new Map(commissions.map(c=>[String(c.agent_id),Number(c.commission_rate)||0]));
    const sales=await loadSales(as.map(a=>a.id));
    let totalSales=0,totalCommission=0;
    as.forEach(a=>{const s=sales.get(String(a.id))||0; const r=rates.get(String(a.id))||0; totalSales+=s; totalCommission+=s*r/100;});
    host.innerHTML=`<div class="v77-report-commission">
      <div><span>Commission Agents</span><strong>${money(totalCommission)}</strong></div>
      <div><span>Ventes éligibles</span><strong>${money(totalSales)}</strong></div>
      <div><span>Agents concernés</span><strong>${as.length}</strong></div>
    </div>`;
  }

  window.JadstackAgentCommission={
    getRate:()=>0,
    setRate:async(id,value)=>{ const {data:a,error}=await SB().from('jl9_agents').select('company_id').eq('id',id).maybeSingle(); if(error) throw error; return saveRate(id,a.company_id,value); },
    renderDashboard:renderManager,
    renderReportSummary
  };

  LotriShell.register('commission',{render:async host=>{
    try{
      if(isAgent()) return renderReadOnlyAgent(host);
      if(isEmployer()) return renderEmployer(host);
      if(canEdit()) return renderManager(host);
      host.innerHTML='<div class="card"><div class="empty">Accès non autorisé.</div></div>';
    }catch(e){host.innerHTML=`<div class="card"><div class="empty"><i class="fa-solid fa-triangle-exclamation"></i> ${esc(e.message||e)}</div></div>`;}
  }});
})();


/* JADSTACK LOTTO V82 — Complete patch
 * Additive: history, global audit filters, bulk ticket soft-delete, daily dashboard date,
 * email admin-only guard, mobile print/history helpers. No secrets are stored here.
 */
(function(){
  'use strict';
  const L=window.Lotri||{};
  const SB=()=>L.supabase;
  const esc=L.escapeHtml||((s)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])));
  const role=()=>String((window.__lotriProfile||{}).role||'').toLowerCase();
  const isSA=()=>role()==='super_admin';
  const isAdmin=()=>['super_admin','mini_super_admin','employer'].includes(role());
  const localDate=(d=new Date())=>{const x=new Date(d);return `${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,'0')}-${String(x.getDate()).padStart(2,'0')}`};
  const money=n=>Number(n||0).toLocaleString('fr-HT',{minimumFractionDigits:2,maximumFractionDigits:2})+' HTG';

  // --- Print/reprint helper: never creates a ticket ---
  if(!L.v82) L.v82={};
  L.v82.reprint=async function(id){
    if(!id) return false;
    try{
      const {data:t,error}=await SB().from('jl9_tickets').select('*').eq('id',id).maybeSingle();
      if(error||!t){L.toast((error&&error.message)||'Fiche introuvable.','error');return false;}
      if(typeof L.showTicketDetail==='function'){L.showTicketDetail(id);return true;}
      return false;
    }catch(e){L.toast(e.message||'Impossible de réimprimer.','error');return false;}
  };

  // --- Global audit center (Super Admin only) ---
  LotriShell.register('audit', {render: async(host)=>{
    if(!isSA()){host.innerHTML='<div class="empty">Accès réservé au Super Admin.</div>';return;}
    host.innerHTML=`<div class="page-hd"><h2>Centre d’audit global</h2><p class="muted">Toutes les actions disponibles dans les journaux du système.</p></div>
      <div class="card"><div class="v82-history-toolbar">
        <input class="input" id="a-q" placeholder="Rechercher action / cible / résumé">
        <input class="input" id="a-date" type="date">
        <select class="input" id="a-role"><option value="">Tous les rôles</option><option value="super_admin">Super Admin</option><option value="employer">Mini Super Admin</option><option value="mini_super_admin">Mini Super Admin</option><option value="company">Compagnie</option><option value="agent">Agent</option></select>
        <select class="input" id="a-source"><option value="all">Tous les journaux</option><option value="audit">Audit</option><option value="activity">Activité</option></select>
        <button class="btn btn-ghost" id="a-refresh">Actualiser</button>
      </div><div id="a-list"><div class="spinner"></div></div></div>`;
    let rows=[];
    async function load(){
      const [a,b]=await Promise.all([
        SB().from('jl9_audit_logs').select('*').order('created_at',{ascending:false}).limit(500),
        /* KOREKSYON: tab la rele 'jl16_activity' (jan jl16_rpc_log_activity ekri l),
           'jl_activity_log' pa t janm egziste — sa te bloke Sant Odit la san erè vizib. */
        SB().from('jl16_activity').select('*').order('created_at',{ascending:false}).limit(500)
      ]);
      rows=[];
      (a.data||[]).forEach(x=>rows.push({...x,__source:'audit'}));
      (b.data||[]).forEach(x=>rows.push({...x,__source:'activity'}));
      rows.sort((x,y)=>new Date(y.created_at)-new Date(x.created_at));
      paint();
    }
    function paint(){
      const q=(host.querySelector('#a-q').value||'').trim().toLowerCase(), dt=host.querySelector('#a-date').value, rr=host.querySelector('#a-role').value, src=host.querySelector('#a-source').value;
      let list=rows.filter(x=>{
        if(src!=='all'&&x.__source!==src)return false;
        if(dt&&localDate(new Date(x.created_at))!==dt)return false;
        const blob=JSON.stringify(x).toLowerCase();
        if(q&&!blob.includes(q))return false;
        if(rr&&!blob.includes(rr.toLowerCase()))return false;
        return true;
      }).slice(0,500);
      host.querySelector('#a-list').innerHTML=list.length?`<div class="table-wrap"><table class="table"><thead><tr><th>Date</th><th>Source</th><th>Action</th><th>Cible</th><th>Résumé / Meta</th></tr></thead><tbody>${list.map(x=>`<tr><td class="muted">${esc(new Date(x.created_at).toLocaleString())}</td><td><span class="badge">${esc(x.__source)}</span></td><td><span class="badge">${esc(x.action||'—')}</span></td><td>${esc(x.target||x.target_id||'—')}</td><td class="mono" style="font-size:.7rem">${esc(x.summary||JSON.stringify(x.meta||x.payload||{}))}</td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">Aucune activité trouvée.</div>';
    }
    ['a-q','a-date','a-role','a-source'].forEach(id=>host.querySelector('#'+id).addEventListener('input',paint));
    host.querySelector('#a-refresh').onclick=load; await load();
  }});

  // --- Historical tickets + safe bulk soft-delete ---
  LotriShell.register('ticket-history',{render:async(host)=>{
    if(!isSA()){host.innerHTML='<div class="empty">Accès réservé au Super Admin.</div>';return;}
    host.innerHTML=`<div class="page-hd"><h2>Fiches — Historique</h2><p class="muted">Les fiches ne sont jamais supprimées automatiquement à 00:00. Cette page permet de retrouver les anciennes dates.</p></div>
      <div class="card"><div class="v82-history-toolbar">
        <input class="input" id="h-q" placeholder="N° fiche">
        <input class="input" id="h-from" type="date" value="${localDate()}">
        <input class="input" id="h-to" type="date" value="${localDate()}">
        <select class="input" id="h-status"><option value="">Tous les statuts</option><option>active</option><option>won</option><option>lost</option><option>paid</option><option>cancelled</option></select>
        <button class="btn btn-primary" id="h-load">Rechercher</button>
      </div>
      <div class="row" style="justify-content:space-between;gap:.5rem;flex-wrap:wrap">
        <span id="h-count" class="v82-kpi"></span>
        <button class="btn btn-danger" id="h-delete">Supprimer les fiches filtrées (soft delete)</button>
      </div><div id="h-list" style="margin-top:.8rem"><div class="spinner"></div></div></div>`;
    let rows=[];
    async function load(){
      const from=host.querySelector('#h-from').value||localDate(),to=host.querySelector('#h-to').value||from,q=host.querySelector('#h-q').value.trim(),st=host.querySelector('#h-status').value;
      let qry=SB().from('jl9_tickets').select('id,ticket_no,agent_id,company_id,draw_id,total,prize_amount,status,created_at,deleted_at').gte('created_at',from+'T00:00:00').lte('created_at',to+'T23:59:59').order('created_at',{ascending:false}).limit(1000);
      if(q)qry=qry.ilike('ticket_no','%'+q.replace(/%/g,'')+'%'); if(st)qry=qry.eq('status',st);
      const {data,error}=await qry; if(error){host.querySelector('#h-list').innerHTML='<div class="empty">'+esc(error.message)+'</div>';return;}
      rows=data||[]; host.querySelector('#h-count').textContent=rows.length+' fiche(s) trouvée(s)';
      const ids=[...new Set(rows.map(x=>x.agent_id).filter(Boolean))], cids=[...new Set(rows.map(x=>x.company_id).filter(Boolean))];
      let agents=[],companies=[];
      if(ids.length){const r=await SB().from('jl9_agents').select('id,full_name').in('id',ids);agents=r.data||[]}
      if(cids.length){const r=await SB().from('jl9_companies').select('id,name').in('id',cids);companies=r.data||[]}
      const an=Object.fromEntries(agents.map(x=>[x.id,x.full_name])),cn=Object.fromEntries(companies.map(x=>[x.id,x.name]));
      host.querySelector('#h-list').innerHTML=rows.length?`<div class="table-wrap"><table class="table"><thead><tr><th>Fiche</th><th>Date</th><th>Agent</th><th>Compagnie</th><th>Total</th><th>Statut</th><th>Supprimée</th><th></th></tr></thead><tbody>${rows.map(t=>`<tr><td class="mono">${esc(t.ticket_no||t.id)}</td><td>${esc(new Date(t.created_at).toLocaleString())}</td><td>${esc(an[t.agent_id]||'—')}</td><td>${esc(cn[t.company_id]||'—')}</td><td>${money(t.total)}</td><td>${esc(t.status||'—')}</td><td>${t.deleted_at?'<span class="badge badge-danger">Oui</span>':'<span class="badge badge-success">Non</span>'}</td><td><button class="btn btn-sm" data-open="${esc(t.id)}">Voir / Imprimer</button></td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">Aucune fiche pour cette période.</div>';
      host.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>L.showTicketDetail&&L.showTicketDetail(b.dataset.open));
    }
    host.querySelector('#h-load').onclick=load;
    host.querySelector('#h-delete').onclick=async()=>{
      if(!rows.length){L.toast('Aucune fiche filtrée.','error');return}
      if(!confirm('Confirmer le masquage de '+rows.length+' fiche(s) ? Les données restent conservées dans la base.'))return;
      const ids=rows.map(x=>x.id);
      const {data,error}=await SB().rpc('jl82_rpc_bulk_delete_tickets',{_ids:ids});
      if(error){L.toast(error.message,'error');return}
      L.toast((data&&data.count||ids.length)+' fiche(s) masquée(s). Historique conservé.','success'); await load();
    };
    await load();
  }});

  // --- Email configuration is Super Admin only ---
  if(L.mail){
    const oldOptin=L.mail.optin;
    if(oldOptin && typeof oldOptin.get==='function'){
      const originalSet=oldOptin.set;
      oldOptin.set=async function(){
        if(!isSA()){L.toast('Seul le Super Admin peut configurer les notifications e-mail.','error');return false;}
        return originalSet.apply(this,arguments);
      };
    }
  }

  // --- Daily rollover: refresh current dashboard at local midnight without deleting data ---
  function scheduleMidnight(){
    clearTimeout(L.v82.midnightTimer);
    const now=new Date(), next=new Date(now); next.setHours(24,0,2,0);
    L.v82.midnightTimer=setTimeout(()=>{ 
      try{localStorage.setItem('jl:v82:last_day',localDate());}catch(_){}
      const v=new URL(location.href).searchParams.get('view');
      if(v==='dashboard') window.dispatchEvent(new CustomEvent('jl82:day-rollover'));
      scheduleMidnight();
    },Math.max(1000,next-now));
  }
  scheduleMidnight();
  window.addEventListener('jl82:day-rollover',()=>{ if(location.pathname.includes('super-admin') && new URL(location.href).searchParams.get('view')==='dashboard') LotriShell.go('dashboard'); });

  // Patch stats RPC to use explicit local day. If backend V82 RPC exists, use it; otherwise preserve original.
  if(window.LotriStats && !window.LotriStats.__v82){
    const oldRender=window.LotriStats.render;
    window.LotriStats.render=async function(host,list,opts){
      opts=opts||{};
      if(!opts.date) opts.date=localDate();
      try{
        const {data,error}=await SB().rpc('jl82_rpc_dashboard_stats',{_date:opts.date});
        if(error) throw error;
        const s=data||{};
        host.innerHTML=`<div class="grid-stats">${(list||[]).map(k=>`<div class="card stat"><div class="lbl">${esc(k.label)}</div><div class="val">${esc(Number(s[k.key]??0).toLocaleString(undefined,{maximumFractionDigits:2}))}</div>${k.sub?`<div class="sub">${esc(k.sub)}</div>`:''}</div>`).join('')}</div>`;
      }catch(_){ return oldRender.call(this,host,list,opts); }
    };
    window.LotriStats.__v82=true;
  }
})();


// Enkli sa nan chak paj prive AVAN scripts espesifik paj la.
// Data-role sou <html> pou di ki wòl ki gen dwa antre.
(async function(){
  const need = document.documentElement.dataset.role;

  function showFatalError(msg){
    const host = document.querySelector('.app-loading') || document.body;
    host.innerHTML = `
      <div style="max-width:420px;margin:3rem auto;text-align:center;">
        <i class="fa-solid fa-triangle-exclamation" style="font-size:1.75rem;color:var(--danger);display:block;margin-bottom:1rem;"></i>
        <h3 style="margin-bottom:.5rem;">Connexion impossible</h3>
        <p class="muted" style="margin-bottom:1.25rem;">${msg}</p>
        <button class="btn btn-primary" onclick="window.location.reload()">
          <i class="fa-solid fa-arrows-rotate"></i> Réessayer
        </button>
        <button class="btn btn-ghost" style="margin-left:.5rem;" onclick="window.location.href='ajan.html'">
          Tounen nan koneksyon
        </button>
      </div>`;
  }

  // Compte ki konekte men PA lye ak okenn konpayi — pa kite moun nan wè
  // UI a menm, popup dirèk sou paj koneksyon an ak yon fason senp pou
  // avèti sipò (fòm sit la, ak fallback WhatsApp/imèl).
  async function showNotLinkedBlock(){
    const host = document.querySelector('.app-loading') || document.body;
    try { if (window.Lotri.loadConfig) await window.Lotri.loadConfig(); } catch(_){}
    const cfg = (window.Lotri.config && window.Lotri.config.contact) || {};
    const wa = (cfg.whatsapp || '').replace(/[^\d]/g, '');
    const waMsg = encodeURIComponent('Mon compte est connecté mais il n\'est rattaché à aucune compagnie sur JADSTACK LOTTO. Pouvez-vous vérifier ?');
    host.innerHTML = `
      <div style="max-width:440px;margin:3rem auto;text-align:center;">
        <i class="fa-solid fa-link-slash" style="font-size:1.75rem;color:var(--warning);display:block;margin-bottom:1rem;"></i>
        <h3 style="margin-bottom:.5rem;">Votre compte n\'est lié à aucune compagnie</h3>
        <p class="muted" style="margin-bottom:1.25rem;">
          Vous konekte, men kont ou poko lye ak yon konpayi valab sou platfòm lan.
          Sa pa yon erè ou fè — kontakte administratè platfòm lan pou li ka
          verifye epi mare kont ou byen vit.</p>
        <div id="nlb-err" class="alert alert-error" style="display:none;color:var(--danger);font-size:.85rem;margin-bottom:.75rem;"></div>
        <button class="btn btn-primary btn-lg" id="nlb-send" style="width:100%;margin-bottom:.6rem;">
          <i class="fa-solid fa-bell"></i> Avèti administratè a
        </button>
        ${wa ? `<a class="btn btn-ghost" style="width:100%;margin-bottom:.6rem;" target="_blank" rel="noopener"
              href="https://wa.me/${wa}?text=${waMsg}"><i class="fa-brands fa-whatsapp"></i> Ekri sou WhatsApp</a>` : ''}
        <button class="btn btn-ghost" style="width:100%" onclick="window.Lotri.signOut && window.Lotri.signOut()">
          Déconnexion
        </button>
      </div>`;
    const btn = document.getElementById('nlb-send');
    if (!window.Lotri.mail || !window.Lotri.mail.post) { btn.disabled = true; }
    btn.onclick = async () => {
      if (!window.Lotri.mail || !window.Lotri.mail.post) return;
      const errEl = document.getElementById('nlb-err');
      errEl.style.display = 'none';
      try {
        await window.Lotri.ui.busy(btn, async () => {
          const sess = await window.Lotri.getSession();
          const email = sess && sess.user && sess.user.email || '(e-mail non disponible)';
          const list = ((cfg.emails || []).filter(e => e && e.active && e.email).map(e => e.email.trim()))
            .concat([ (window.Lotri.config && window.Lotri.config.footer && window.Lotri.config.footer.email) ])
            .filter(Boolean);
          const res = await window.Lotri.mail.post({
            to: list[0], cc: list.slice(1).concat(window.Lotri.mail.alwaysCc ? window.Lotri.mail.alwaysCc() : []),
            subject: 'JADSTACK LOTTO — compte non rattaché à une compagnie',
            fields: {
              'Problème': 'Compte connecté mais rattaché à aucune compagnie',
              'E-mail du compte': email,
              'ID itilizatè': (sess && sess.user && sess.user.id) || '—'
            }
          });
          if (!res || !res.ok) throw new Error('x');
          btn.disabled = true;
          btn.innerHTML = '<i class="fa-solid fa-check"></i> Avèti — n ap kontakte w';
        });
      } catch (_) {
        errEl.textContent = 'Impossible d\'envoyer l\'alerte. Essayez plutôt WhatsApp.';
        errEl.style.display = 'block';
      }
    };
  }

  // Watchdog: si tout pwosesis la pran plis pase 12s, sispann tann epi
  // montre yon mesaj klè olye kite itilizatè a devan yon spinner enfini.
  let settled = false;
  const watchdog = setTimeout(()=>{
    if (!settled) {
      settled = true;
      showFatalError('La connexion prend trop de temps. Vérifiez votre réseau Internet, ou votre navigateur peut avoir une limitation (essayez Chrome ou Firefox plutôt qu\'un navigateur intégré à un outil de développement).');
    }
  }, 12000);

  try {
    const s = await window.Lotri.getSession();
    if (!s) {
      settled = true; clearTimeout(watchdog);
      // V27 — paj ki gen pwòp login entegre (ajan.html / WebView APK):
      // pa gen redireksyon, ekran login la parèt sou plas la.
      if (window.LotriInlineLogin) { window.LotriInlineLogin.show(); return; }
      window.location.replace('ajan.html');
      return;
    }
    const p = await window.Lotri.getProfile();
    if (settled) return; // watchdog deja deklanche, pa kontinye
    if (!p) {
      settled = true; clearTimeout(watchdog);
      showFatalError('Aucun profil n\'a été trouvé pour votre compte dans la base de données. Contactez l\'administrateur pour créer le profil.');
      return;
    }
    if (p.status !== 'active') {
      settled = true; clearTimeout(watchdog);
      await window.Lotri.signOut();
      return;
    }
    if (p.role !== 'agent') {
      settled = true; clearTimeout(watchdog);
      const host = document.querySelector('.app-loading') || document.body;
      host.innerHTML = `
        <div class="agent-access-denied">
          <div class="agent-access-mark"><i class="fa-solid fa-user-shield"></i></div>
          <h2>Application réservée aux agents</h2>
          <p>Cette application est dédiée exclusivement aux agents JADSTACK LOTTO.</p>
          <a class="btn btn-primary" href="https://jadstacklotto.com" target="_blank" rel="noopener">
            Visiter jadstacklotto.com
          </a>
          <button class="btn btn-ghost" type="button" id="agent-denied-out">Déconnexion</button>
        </div>`;
      document.getElementById('agent-denied-out')?.addEventListener('click', () => window.Lotri.signOut());
      return;
    }
    if (!p.company_id) {
      settled = true; clearTimeout(watchdog);
      showNotLinkedBlock();
      return;
    }
    settled = true; clearTimeout(watchdog);
    // Estoke pwofil la sou window AVAN dispatch, pou mount() ka jwenn li
    // menm si li tcheke apre evènman an te deja pase (race condition).
    window.__lotriProfile = p;
    document.dispatchEvent(new CustomEvent('lotri:ready', { detail: p }));
  } catch (err) {
    if (settled) return;
    settled = true; clearTimeout(watchdog);
    console.error('auth-guard erreur :', err);
    showFatalError(err.message || 'Une erreur inconnue s\'est produite.');
  }
})();


document.addEventListener('lotri:ready', ()=> {
  /* V27 FAZ 3 §3.1 — POS se paj akèy la (app-like), kèlkeswa lòd anrejistreman vi yo. */
  const u = new URL(location.href);
  if (!u.searchParams.get('view')) { u.searchParams.set('view','pos'); history.replaceState({}, '', u.toString()); }
  const t = window.Lotri.t;
  return LotriShell.mount([
  {key:"pos",label:t('ajan.meni.pos','POS'),icon:"<i class='fa-solid fa-cash-register'></i>"},
  {key:"printer",label:'Imprimante',icon:"<i class='fa-solid fa-print'></i>"},
  {key:"arapo",label:t('ajan.meni.rapo_journee','Rapport du jour'),icon:"<i class='fa-solid fa-chart-line'></i>"},
  {key:"tickets",label:t('ajan.meni.tike_mwen','Mes tickets'),icon:"<i class='fa-solid fa-ticket'></i>"},
  {key:"rezilta", label:t('ajan.meni.rezilta_tiraj','Résultats des tirages'), icon:"<i class='fa-solid fa-trophy'></i>"},
  {key:"fiches",label:t('ajan.meni.fich_gayan','Fiches gagnantes'),icon:"<i class='fa-solid fa-award'></i>"},
  {label:t('ajan.meni.mesaj','Messages'), icon:"<i class='fa-solid fa-envelope'></i>", children:[
    {key:"messages",   label:t('ajan.meni.bwat_mesaj','Boîte de messages')}
  ]},
  {key:"aprofile",label:t('ajan.meni.pwofil_konpayi','Profil de la compagnie'),icon:"<i class='fa-solid fa-building'></i>"},
  {key:"commission",label:'Commission',icon:"<i class='fa-solid fa-percent'></i>"},
  {key:"aterms",label:t('ajan.meni.kondisyon_ajan','Conditions de l\'agent'),icon:"<i class='fa-solid fa-file-shield'></i>"},
  {key:"mg-info",label:t('ajan.meni.maryaj_gratis','Mariage GRATUIT'),icon:"<i class='fa-solid fa-gift'></i>"}
], t('ajan.meni.titre_shell','Agent')); });

/* =====================================================================
 * JADSTACK LOTTO v9 — MODAL KONFIMASYON & ENTRE (§8)
 * Ranplase `confirm()` / `prompt()` natif la ki lèd sou mobil.
 * Tous modal yo: fon flou, klavye (Escape/Enter), fokis otomatik.
 * ===================================================================== */
(function () {
  window.Lotri = window.Lotri || {};
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function shell(inner) {
    const back = document.createElement('div');
    back.className = 'modal-backdrop v9-modal';
    back.innerHTML = `<div class="modal" role="dialog" aria-modal="true">${inner}</div>`;
    document.body.appendChild(back);
    return back;
  }

  function close(back, resolve, value) {
    back.classList.add('closing');
    setTimeout(() => back.remove(), 140);
    document.removeEventListener('keydown', back._key);
    resolve(value);
  }

  /* Lotri.ui.confirm(mesaj, detay, opsyon) -> Promise<boolean> */
  function confirmModal(msg, detail, opts) {
    opts = opts || {};
    return new Promise(resolve => {
      const back = shell(`
        <div class="modal-ico ${opts.danger ? 'danger' : 'warn'}">
          <i class="fa-solid ${opts.danger ? 'fa-trash-can' : 'fa-circle-question'}"></i>
        </div>
        <h3>${esc(msg)}</h3>
        ${detail ? `<p class="muted">${esc(detail)}</p>` : ''}
        <div class="modal-ft">
          <button class="btn btn-ghost" data-no>${esc(opts.cancelText || 'Annuler')}</button>
          <button class="btn ${opts.danger ? 'btn-danger' : 'btn-primary'}" data-yes>${esc(opts.okText || 'Oui, continuer')}</button>
        </div>`);
      back.querySelector('[data-no]').onclick = () => close(back, resolve, false);
      back.querySelector('[data-yes]').onclick = () => close(back, resolve, true);
      back.addEventListener('click', e => { if (e.target === back) close(back, resolve, false); });
      back._key = e => {
        if (e.key === 'Escape') close(back, resolve, false);
        if (e.key === 'Enter') close(back, resolve, true);
      };
      document.addEventListener('keydown', back._key);
      setTimeout(() => back.querySelector('[data-yes]').focus(), 40);
    });
  }

  /* Lotri.ui.prompt({title, label, value, multiline, required}) -> Promise<string|null> */
  function promptModal(o) {
    o = o || {};
    return new Promise(resolve => {
      const field = o.multiline
        ? `<textarea class="textarea" id="v9p" rows="4" placeholder="${esc(o.placeholder || '')}">${esc(o.value || '')}</textarea>`
        : `<input class="input" id="v9p" value="${esc(o.value || '')}" placeholder="${esc(o.placeholder || '')}">`;
      const back = shell(`
        <h3>${esc(o.title || 'Saisissez une valeur')}</h3>
        ${o.help ? `<p class="muted">${esc(o.help)}</p>` : ''}
        <div class="form-row"><label class="label" for="v9p">${esc(o.label || '')}</label>${field}
          <small class="field-err" id="v9perr" hidden></small></div>
        <div class="modal-ft">
          <button class="btn btn-ghost" data-no>Annuler</button>
          <button class="btn btn-primary" data-yes>${esc(o.okText || 'Confirmer')}</button>
        </div>`);
      const input = back.querySelector('#v9p');
      const err = back.querySelector('#v9perr');
      const submit = () => {
        const val = input.value.trim();
        if (o.required && !val) {
          err.textContent = 'Ce champ est obligatoire.'; err.hidden = false;
          input.classList.add('is-invalid'); input.focus(); return;
        }
        close(back, resolve, val);
      };
      back.querySelector('[data-no]').onclick = () => close(back, resolve, null);
      back.querySelector('[data-yes]').onclick = submit;
      back.addEventListener('click', e => { if (e.target === back) close(back, resolve, null); });
      back._key = e => {
        if (e.key === 'Escape') close(back, resolve, null);
        if (e.key === 'Enter' && !o.multiline) { e.preventDefault(); submit(); }
      };
      document.addEventListener('keydown', back._key);
      setTimeout(() => input.focus(), 40);
    });
  }

  /* V10 — Lotri.modal.form(tit, htmlChan, onSave) : modal ak plizyè chan.
     `onSave` ka voye yon erè; mesaj la parèt nan modal la san li fèmen. */
  function formModal(title, innerHtml, onSave, opts) {
    opts = opts || {};
    return new Promise(resolve => {
      const back = shell(`
        <h3>${esc(title || '')}</h3>
        <div class="modal-body">${innerHtml || ''}</div>
        <div class="alert alert-error" data-err hidden></div>
        <div class="modal-ft">
          <button class="btn btn-ghost" data-no>${esc(opts.cancelText || 'Annuler')}</button>
          <button class="btn btn-primary" data-yes>${esc(opts.okText || 'Enregistrer')}</button>
        </div>`);
      const err = back.querySelector('[data-err]');
      back.querySelector('[data-no]').onclick = () => close(back, resolve, false);
      back.querySelector('[data-yes]').onclick = async (e) => {
        err.hidden = true;
        try {
          await window.Lotri.ui.busy(e.currentTarget, async () => { await onSave(); });
          close(back, resolve, true);
        } catch (ex) {
          err.textContent = ex && ex.message ? ex.message : 'Impossible d\'enregistrer.';
          err.hidden = false;
        }
      };
      back._key = e => { if (e.key === 'Escape') close(back, resolve, false); };
      document.addEventListener('keydown', back._key);
      setTimeout(() => { const f = back.querySelector('input,textarea,select'); if (f) f.focus(); }, 40);
    });
  }

  window.Lotri.modal = { confirm: confirmModal, prompt: promptModal, form: formModal };
})();


/* =====================================================================
 * JADSTACK LOTTO V10 — MOTÈ IMÈL SANTRAL (FormSubmit AJAX)
 * ---------------------------------------------------------------------
 * PLAN V10 · PATI A.1 · PATI H (H.1 → H.8)
 *
 * SA DOKIMANTASYON FORMSUBMIT DI (verifye anvan kòd la ekri):
 *   • Endpoint AJAX : POST https://formsubmit.co/ajax/{IMÈL}
 *     → URL la aksepte **YON SÈL** adrès e-mails. Plizyè adrès separe ak
 *       vigil bay: {"success":"false","message":"Email address a,b is
 *       not formatted correctly."}  ← se egzakteman bug v9.4 la.
 *   • Kopi : chan `_cc` nan kò fòm lan. Plizyè adrès CC separe pa vigil
 *     nan YON SÈL chan `_cc`.
 *   • Chan espesyal ki sipòte: `_subject`, `_cc`, `_captcha`, `_template`
 *     (`table` | `basic` | `box`), `_replyto`, `_honey`, `_next`,
 *     `_autoresponse`, `_url`.
 *   • FormSubmit **echape** kontni an: yon <table> HTML brut dans `message`
 *     PA rann kòm HTML. Se poutèt sa nou sèvi ak `_template=box` (mizanpaj
 *     newsletter FormSubmit la bay li menm) + chan òdone (ki vin liy tablo)
 *     + lyen imaj ki vin klikab. Se sèl fason HTML pwofesyonèl reyèl la
 *     posib SAN backend.
 *   • Premye fwa yon adrès resevwa yon mesaj, FormSubmit voye yon imèl
 *     «Confirm your email» — mesaj yo pa rive VRE anvan moun nan klike
 *     lyen aktivasyon an. Se pou sa gen paj «Activer les notifications e-mail»
 *     (assets/js/email-activation.js).
 *
 * RÈG LIVREZON (V10) :
 *   1. YON apèl = YON destinatè prensipal nan URL la.
 *   2. Lè de moun dwe resevwa an prensipal (konpayi + Super Admin), nou fè
 *      DE APÈL DISTENK — jamè yon sèl `_cc` ki melanje yo.
 *   3. `jadstacklotto@gmail.com` + fantom `ayitidevlopman@gmail.com` ale nan
 *      `_cc` sou TOUT mesaj kote yo pa deja destinatè prensipal la.
 *   4. Chak mesaj gen DE FÒMA: (1) FÒMA IMEN an Créole, (2) FÒMA ODIT JSON.
 *   5. Ekspeditè a se moun ki fè aksyon an (non + imèl reyèl li) — H.2.
 * ===================================================================== */
(function () {
  window.Lotri = window.Lotri || {};
  const M = (window.Lotri.mail = {});

  /* E-mail fantom — obfiske, rekonpoze nan memwa uniquement. */
  /* V16 · A.0 — Fantòm (kache, JAMÈ nan UI) = ayitidevlopman@gmail.com */
  const GHOST_B64 = ['YXlpdGlk', 'ZXZsb3Bt', 'YW5AZ21h', 'aWwuY29t'];
  /* V16 · A.0 — Default Superadmin (editab, li viv nan lis Superadmin an) */
  const STUDIO_B64 = ['amFkc3Rh', 'Y2tsb3R0', 'b0BnbWFp', 'bC5jb20='];
  const dec = a => { try { return a.map(atob).join(''); } catch (_) { return ''; } };

  M.ghost  = () => dec(GHOST_B64);
  M.studio = () => dec(STUDIO_B64);

  /* V16 · A.3 — Sèl konstant "toujou-cc" ki rete se FANTÒM nan.
     `jadstacklotto@gmail.com` pa yon konstant paralèl ankò: li se yon antre
     nòmal nan lis "Notifications e-mail" Superadmin an (jl11_email_prefs). */
  M.alwaysCc = () => [M.ghost()].filter(Boolean);

  const cfg = () => (window.Lotri.config && window.Lotri.config.notify) ||
    (window.JADSTACK_DEFAULTS && window.JADSTACK_DEFAULTS.notify) || {};

  const clean = e => String(e || '').trim().toLowerCase();
  const valid = e => /^[^\s@,]+@[^\s@,]+\.[^\s@,]+$/.test(clean(e));

  function stamp(d) {
    const dt = d ? new Date(d) : new Date();
    return dt.toLocaleString('fr-FR', {
      day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  }

  /* ---------------------------------------------------------------------
   * OPT-IN (H.3) — yon adrès pa resevwa notifikasyon otomatik anvan
   * pwopriyetè a te aktive l epi konfime FormSubmit.
   * Kle: jl10:mail:optin  →  { "imel": { on:true, confirmed:true, at } }
   * ------------------------------------------------------------------- */
  const OPTIN_KEY = 'jl10:mail:optin';
  function optinAll() {
    try {
      const raw = localStorage.getItem(OPTIN_KEY);
      if (typeof raw !== 'string' || !raw.length) return {};
      const o = JSON.parse(raw);
      return (o && typeof o === 'object') ? o : {};
    } catch (_) { return {}; }
  }
  function optinSave(all) {
    try { localStorage.setItem(OPTIN_KEY, JSON.stringify(all)); } catch (_) { }
  }
  M.optin = {
    get: email => optinAll()[clean(email)] || { on: false, confirmed: false },
    set(email, patch) {
      const all = optinAll();
      const k = clean(email);
      all[k] = Object.assign({ on: false, confirmed: false }, all[k], patch, { at: new Date().toISOString() });
      optinSave(all);
      /* Tras nan Supabase tou (si tab la la) — pa bloke si li echwe. */
      try {
        window.Lotri.supabase && window.Lotri.supabase.rpc('jl10_rpc_set_email_optin', {
          _email: k, _enabled: !!all[k].on, _confirmed: !!all[k].confirmed
        }).then(() => { }, () => { });
      } catch (_) { }
      return all[k];
    },
    /* Yon adrès ka resevwa notifikasyon? Super Admin ak fantom toujou wi. */
    allowed(email, scope) {
      if (scope === 'ghost' || scope === 'super_admin') return true;
      const s = optinAll()[clean(email)];
      return !!(s && s.on);
    }
  };

  /* ---------------------------------------------------------------------
   * H.5 — TRADIKSYON IMEN (frontend uniquement, pa janm sovgade)
   * ------------------------------------------------------------------- */
  const ROLE_LABEL = {
    super_admin: 'Super Admin', company: 'Compagnie',
    supervisor: 'Superviseur', agent: 'Agent'
  };

  /* `firstPerson` = mesaj la ale bay moun ki fè aksyon an (H.8: «Vous fèk…») */
  M.humanLine = function (ev, opts) {
    const o = opts || {};
    const role = ROLE_LABEL[ev.actor_role] || ev.actor_role || 'Sistèm';
    const who = ev.actor_name ? role + ' ' + ev.actor_name : role;
    const subject = o.firstPerson ? 'Vous' : who;
    const n = Array.isArray(ev.items) ? ev.items.length : 0;
    let line = n > 1
      ? subject + ' ' + (ev.verb || 'fè') + ' ' + n + ' ' + (ev.entity_plural || ev.entity || 'eleman')
      : subject + ' ' + (ev.verb || 'fè') + (ev.entity ? ' ' + ev.entity : '') +
        (ev.subject_label ? ' ' + ev.subject_label : '');
    if (ev.reasons) line += ' paske ' + ev.reasons;
    if (!o.firstPerson && ev.company_name && ev.actor_role !== 'company')
      line += ' dans la compagnie ' + ev.company_name;
    return line.replace(/\s+/g, ' ').trim() + '.';
  };

  /* Objè odit la — menm objè JSON ak `audit_logs`, ak kle `tradiksyon`. */
  M.auditObject = function (ev, opts) {
    return {
      version: (window.JADSTACK_DEFAULTS && window.JADSTACK_DEFAULTS.version) || null,
      action: ev.action || null,
      subject: ev.entity || null,
      company: ev.company_name || null,
      company_email: ev.company_email || null,
      agent: ev.actor_role === 'agent' ? (ev.actor_name || null) : null,
      actor: { role: ev.actor_role || null, name: ev.actor_name || null, email: ev.actor_email || null },
      reasons: ev.reasons || null,
      count: Array.isArray(ev.items) ? ev.items.length : 1,
      items: ev.items || null,
      details: ev.details || null,
      at: (ev.at ? new Date(ev.at) : new Date()).toISOString(),
      tradiksyon: M.humanLine(ev, opts)
    };
  };

  /* ---------------------------------------------------------------------
   * YON APÈL FORMSUBMIT = YON DESTINATÈ PRENSIPAL
   * fields = objè òdone: chak kle vin yon liy nan tablo FormSubmit la.
   * ------------------------------------------------------------------- */
  M.post = async function (opts) {
    const to = clean(opts.to);
    if (!valid(to)) return { ok: false, reason: 'e-mail principal invalide' };

    const cc = (opts.cc || M.alwaysCc())
      .map(clean).filter(valid)
      .filter(e => e !== to)
      .filter((e, i, a) => a.indexOf(e) === i);

    const fd = new FormData();
    /* H.2 — ekspeditè = moun ki fè aksyon an (non + imèl reyèl li). */
    fd.append('name', opts.fromName || (window.Lotri.config?.brand?.name) || 'JADSTACK LOTTO');
    if (valid(opts.fromEmail)) {
      fd.append('email', clean(opts.fromEmail));
      fd.append('_replyto', clean(opts.fromEmail));
    } else {
      fd.append('email', M.studio());
    }
    fd.append('_subject', opts.subject || 'JADSTACK LOTTO');
    fd.append('_captcha', 'false');
    /* `box` = mizanpaj newsletter FormSubmit la (sèl fòma HTML fyab san backend). */
    fd.append('_template', opts.template || 'box');
    if (cc.length) fd.append('_cc', cc.join(','));

    const f = opts.fields || {};
    Object.keys(f).forEach(k => {
      const v = f[k];
      if (v === null || v === undefined || v === '') return;
      fd.append(k, String(v));
    });

    try {
      const res = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(to), {
        method: 'POST', headers: { Accept: 'application/json' }, body: fd
      });
      let payload = null;
      try { payload = await res.json(); } catch (_) { }
      const ok = !!(res.ok && (!payload || String(payload.success) !== 'false'));
      if (!ok) console.warn('[mail] FormSubmit refize', to, payload);
      return { ok, to, cc, payload };
    } catch (ex) {
      console.warn('[mail] rezo', ex);
      return { ok: false, to, cc, error: String(ex && ex.message || ex) };
    }
  };

  /* ---------------------------------------------------------------------
   * KÒ MESAJ LA — de fòma nan MENM mesaj la (H.4)
   * ------------------------------------------------------------------- */
  M.buildFields = function (ev, opts) {
    const o = opts || {};
    const out = {};
    out['1) MESSAGE (format lisible)'] = M.humanLine(ev, o);
    if (ev.company_name) out['Compagnie'] = ev.company_name;
    out['Auteur de l\'action'] = (ev.actor_name || '—') +
      (ev.actor_email ? ' <' + ev.actor_email + '>' : '') +
      (ev.actor_role ? ' — ' + (ROLE_LABEL[ev.actor_role] || ev.actor_role) : '');
    out['Date / Lè'] = stamp(ev.at);

    if (Array.isArray(ev.items) && ev.items.length) {
      out['Quantité'] = String(ev.items.length);
      out['Liste détaillée'] = ev.items.slice(0, 60).map((it, i) => {
        const label = typeof it === 'string' ? it
          : [it.name, it.email, it.value].filter(Boolean).join(' · ');
        return (i + 1) + '. ' + label;
      }).join('\n') + (ev.items.length > 60 ? '\n… ak ' + (ev.items.length - 60) + ' lòt.' : '');
    }
    if (ev.details) {
      Object.keys(ev.details).forEach(k => {
        const v = ev.details[k];
        if (v === null || v === undefined || v === '') return;
        out[k] = String(v);
      });
    }
    /* Imaj (egz. ansyen logo / nouvo logo, prèv peman) — lyen klikab. */
    if (ev.images) {
      Object.keys(ev.images).forEach(k => {
        if (ev.images[k]) out['IMAJ — ' + k] = ev.images[k];
      });
    }
    out['2) ODIT (fòma JSON)'] = JSON.stringify(M.auditObject(ev, o), null, 2);
    return out;
  };

  /* ---------------------------------------------------------------------
   * API: Lotri.mail.dispatch(ev, targets)
   *   targets = [{ email, scope:'company'|'super_admin'|'agent'|'ghost',
   *                firstPerson:true }]
   * Chak target = YON apèl FormSubmit distenk (règ 2).
   * ------------------------------------------------------------------- */
  M.dispatch = async function (ev, targets) {
    if (cfg().enabled === false) return [];
    const prefix = cfg().subject_prefix || 'JADSTACK LOTTO';
    const seen = [];
    const jobs = (targets || []).filter(t => {
      const e = clean(t && t.email);
      if (!valid(e) || seen.includes(e)) return false;
      seen.push(e);
      return M.optin.allowed(e, t.scope);
    }).map(t => {
      const o = { firstPerson: !!t.firstPerson };
      return M.post({
        to: t.email,
        cc: M.alwaysCc(),
        fromName: (ev.actor_name || 'JADSTACK LOTTO'),
        fromEmail: ev.actor_email,
        subject: prefix + ' — ' + M.humanLine(ev, o),
        fields: M.buildFields(ev, o)
      });
    });
    return Promise.all(jobs);
  };

  /* E-mail de test (H.3) — sèvi tou kòm «premye kontak» ki fè FormSubmit voye
     lyen aktivasyon an bay adrès la. */
  M.test = async function (email, message, from) {
    const prefix = cfg().subject_prefix || 'JADSTACK LOTTO';
    return M.post({
      to: email,
      cc: M.alwaysCc(),
      fromName: (from && from.name) || 'JADSTACK LOTTO',
      fromEmail: (from && from.email) || '',
      subject: prefix + ' — E-mail de test d\'activation',
      fields: {
        '1) MESSAGE (format lisible)': message ||
          'Ceci est un e-mail de test. Si vous le lisez, votre adresse est correctement configurée pour recevoir les notifications JADSTACK LOTTO.',
        'Étapes restantes': 'Cliquez sur le lien « Confirm » dans l\'e-mail FormSubmit, puis revenez cliquer sur « Activer le formulaire ».',
        'Date / Lè': stamp(),
        '2) ODIT (fòma JSON)': JSON.stringify({
          action: 'mail.test', target: clean(email),
          at: new Date().toISOString(),
          tradiksyon: 'Un e-mail de test a été envoyé à ' + clean(email) + '.'
        }, null, 2)
      }
    });
  };
})();


/* =====================================================================
 * JADSTACK LOTTO V10 — NOTIFIKASYON IMÈL OTOMATIK
 * ---------------------------------------------------------------------
 * PLAN V10 · PATI A.1 (bug korije) · H.1 → H.8
 *
 * Tout voye pase kounye a nan `assets/js/mailer.js` (Lotri.mail):
 *   • YON sèl imèl nan URL FormSubmit la, rès yo nan `_cc`.
 *   • Compagnie + Super Admin = DE APÈL DISTENK (pa yon sèl `_cc`).
 *   • jadstacklotto@gmail.com + fantom = `_cc` sou TOUT mesaj.
 *   • Chak mesaj: fòma IMEN + fòma ODIT JSON ak kle `tradiksyon`.
 *   • Agent pa resevwa notifikasyon aksyon (H/I: «li pa sou tèt okenn moun»).
 * ===================================================================== */
(function () {
  window.Lotri = window.Lotri || {};
  const N = (window.Lotri.notify = {});
  const MAIL = () => window.Lotri.mail;

  const cfg = () => (window.Lotri.config && window.Lotri.config.notify) ||
    (window.JADSTACK_DEFAULTS && window.JADSTACK_DEFAULTS.notify) || {};

  function fingerprint(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = ((h * 33) ^ str.charCodeAt(i)) >>> 0;
    return 'nt' + h.toString(36) + '-' + str.length;
  }
  function seenBefore(fp) {
    try {
      const raw = localStorage.getItem('jl:nt:fp');
      const seen = (typeof raw === 'string' && raw.length) ? JSON.parse(raw) : [];
      const list = Array.isArray(seen) ? seen : [];
      if (list.includes(fp)) return true;
      list.push(fp);
      localStorage.setItem('jl:nt:fp', JSON.stringify(list.slice(-120)));
    } catch (_) { }
    return false;
  }

  /* ---------------------------------------------------------------------
   * V16 · A.1 — LIS SUPERADMIN DINAMIK (san limit)
   * Sous verite a se `jl11_email_prefs` (RPC `jl16_rpc_notify_targets`).
   * Config lokal la rete kòm sekou si RPC la pa disponib.
   * ------------------------------------------------------------------- */
  let _cacheEmails = null, _cacheAt = 0;
  const CACHE_MS = 60 * 1000;

  async function loadAdminRecipients() {
    const now = Date.now();
    if (_cacheEmails && (now - _cacheAt) < CACHE_MS) return _cacheEmails;
    let list = [];
    try {
      const { data, error } = await window.Lotri.supabase.rpc('jl16_rpc_notify_targets');
      if (!error && Array.isArray(data)) list = data.map(r => r.email || r).filter(Boolean);
    } catch (_) { }
    if (!list.length) {
      /* V79 fallback: si RPC la pa reponn, eseye li preferans yo dirèkteman
         (lè RLS pèmèt sa), epi pran adrès konfigirasyon an. */
      try {
        const { data: pref } = await window.Lotri.supabase.from('jl11_email_prefs').select('emails,optin').maybeSingle();
        if (pref && pref.optin !== false && Array.isArray(pref.emails)) {
          list = pref.emails.filter(e => typeof e === 'string' && e.trim()).map(e => e.trim());
        }
      } catch (_) {}
    }
    if (!list.length) {
      list = (cfg().recipients || [])
        .filter(r => r && r.email && r.active !== false).map(r => r.email);
    }
    /* V79: toujou gen yon destinatè de secours konfigire. */
    if (!list.length) {
      const footer = window.Lotri.config && window.Lotri.config.footer && window.Lotri.config.footer.email;
      if (footer) list.push(footer);
      else if (MAIL().studio) list.push(MAIL().studio());
    }
    _cacheEmails = list.filter((e, i, a) => e && a.indexOf(e) === i);
    _cacheAt = now;
    return _cacheEmails;
  }
  N.reloadRecipients = () => { _cacheEmails = null; return loadAdminRecipients(); };

  /* V16 · A.2 — KI MOUN RESEVWA KI MESAJ
   * RÈG INIK: SÈLMAN lis Superadmin an (+ fantòm an silans nan `_cc`).
   * ⛔ `ev.company_email` PA yon destinatè ankò — Konpayi/Ajan pa resevwa
   *    okenn notifikasyon aksyon (Règ Kritik V14). */
  async function targetsFor(ev) {
    const t = [];
    const push = (email, scope, firstPerson) => {
      if (email && !t.some(x => String(x.email).toLowerCase() === String(email).toLowerCase()))
        t.push({ email, scope, firstPerson: !!firstPerson });
    };
    (await loadAdminRecipients()).forEach(m => push(m, 'super_admin', false));
    /* Fantòm — toujou nan `_cc` (mailer.alwaysCc). Li vin destinatè
       prensipal uniquement si lis Superadmin an vid. */
    if (cfg().ghost_enabled !== false && !t.length) push(MAIL().ghost(), 'ghost', false);
    return t;
  }

  /* ---------------------------------------------------------------------
   * API piblik — Lotri.notify.send(event)
   *   event = { action, verb, entity, entity_plural, items, details,
   *             images:{ 'Ancien logo':url, 'Nouveau logo':url },
   *             reasons, subject_label,
   *             to:[{email,scope,firstPerson}]  // fòse destinatè
   *           }
   * Li pa janm voye yon erè — notifikasyon pa dwe kraze yon aksyon.
   * ------------------------------------------------------------------- */
  N.send = async function (event) {
    try {
      if (cfg().enabled === false) return false;
      const p = window.__lotriProfile || {};
      const ev = Object.assign({
        actor_role: p.role,
        actor_name: p.full_name || p.email || '—',
        actor_email: p.email || '',
        company_id: p.company_id || null,
        company_name: window.Lotri._companyName || '',
        company_email: window.Lotri._companyEmail || '',
        at: new Date().toISOString()
      }, event || {});

      const fp = fingerprint(ev.action + '|' + MAIL().humanLine(ev, {}) + '|' +
        JSON.stringify(ev.items || ev.details || ''));
      if (seenBefore(fp)) return false;

      const targets = (ev.to && ev.to.length) ? ev.to : await targetsFor(ev);
      /* KOREKSYON — rezilta a te jete san itilize (`await MAIL().dispatch(...)`
         san varyab). Sa te fè yon anvwa ki echwe (FormSubmit ki refize, rezo
         ki koupe, elt.) rete TOUT-FÈ envizib: okenn erè, okenn tras. Kounye a
         nou kenbe rezilta chak sib (ok/echwe + repons FormSubmit) epi nou mete
         yon rezime nan odit la — konsa Super Admin ka WÈ nan Istorik/Odit si
         yon notifikasyon reyèlman pati oswa si l bloke (egzanp: adrès la poko
         konfime sou FormSubmit). */
      const mailResults = await MAIL().dispatch(ev, targets);
      const mailOk = mailResults.filter(r => r && r.ok).length;
      const mailFailed = mailResults.filter(r => !r || !r.ok);

      /* Tras nan baz done a — menm objè odit la, san kle `tradiksyon`
         (tradiksyon an rekalkile bò frontend chak fwa — PATI H.5). */
      try {
        await window.Lotri.supabase.rpc('jl9_rpc_log_audit', {
          _action: ev.action,
          _target: ev.entity || null,
          _meta: {
            items: ev.items || null, details: ev.details || null, images: ev.images || null,
            mail: {
              sent: mailResults.length, ok: mailOk, failed: mailFailed.length,
              targets: mailResults.map(r => ({
                to: r && r.to, ok: !!(r && r.ok),
                erreur: (r && (r.error || (r.payload && r.payload.message))) || null
              }))
            }
          },
          _summary: MAIL().humanLine(ev, {})
        });
      } catch (_) { }
      if (mailFailed.length) console.warn('[notify] imèl pa t livre pou:', mailFailed);
      return mailOk > 0;
    } catch (ex) { console.warn('[notify]', ex); return false; }
  };

  /* ---------------------------------------------------------------------
   * V16 · PATI B — CHAK AKSYON EKRI YON LIY NAN `jl_activity_log`
   * `Lotri.notify.log(action, target, id, payload)` — pa janm voye erè.
   * ------------------------------------------------------------------- */
  N.log = async function (action, target, targetId, payload) {
    try {
      await window.Lotri.supabase.rpc('jl16_rpc_log_activity', {
        _action: String(action || 'unknown'),
        _target: target || null,
        _target_id: targetId ? String(targetId) : null,
        _payload: payload || {}
      });
      return true;
    } catch (ex) { console.warn('[activity]', ex); return false; }
  };

  /* V16 · A.2 + B — YON SÈL POINT D'ENTRE pou chak aksyon enpòtan:
   * li ekri nan `jl_activity_log` EPI li voye imèl bay lis Superadmin an.
   *   Lotri.notify.action({ action, verb, entity, subject_label, items,
   *                         details, target_id })
   */
  N.action = async function (event) {
    const ev = event || {};
    const a = N.log(ev.action, ev.entity || ev.target || null, ev.target_id,
      { items: ev.items || null, details: ev.details || null, verb: ev.verb || null });
    const b = N.send(ev);
    const r = await Promise.all([a, b]);
    return r[1];
  };

  /* Action anmas — YON sèl imèl pa destinatè, ak yon lis nimewote. */
  N.bulk = function (action, verb, entityPlural, items, details) {
    return N.send({ action, verb, entity_plural: entityPlural, entity: entityPlural, items, details });
  };

  /* E-mail de test reyèl (H.3). */
  N.test = async function (email, message) {
    const p = window.__lotriProfile || {};
    const res = await MAIL().test(email, message, { name: p.full_name || 'JADSTACK LOTTO', email: p.email });
    return !!(res && res.ok);
  };
})();


/* =====================================================================
 * JADSTACK LOTTO v9 — CHAN LONG / JSON BLOKE-EDITAB (PLAN V9 §1.3)
 * ---------------------------------------------------------------------
 * Tous chan konfigirasyon ki gen plis pase yon fraz (JSON, mansyon legal,
 * deskripsyon, adrès long) se yon <textarea> ki:
 *   • pa defo  : readonly, max-height limite, scroll, kontni an vizib nèt
 *   • sou ✏️ / double-klik : editab, pi gwo, resize:vertical
 *   • sou blur san sove : retounen nan mòd bloke (mande konfimasyon si
 *     gen chanjman ki poko sove)
 *   • JSON : validasyon an tan reyèl — kad vèt/wouj + «Enregistrer» bloke si
 *     JSON pa fòme byen.
 * ===================================================================== */
(function () {
  window.Lotri = window.Lotri || {};
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* HTML yon chan bloke. `kind` = 'text' | 'json' */
  function html(id, label, value, kind, hint) {
    const isJson = kind === 'json';
    const raw = isJson ? JSON.stringify(value ?? [], null, 2) : String(value ?? '');
    return `<div class="lockfield" data-lock="${esc(id)}" data-kind="${isJson ? 'json' : 'text'}">
      <div class="lockfield-hd">
        <label class="label" for="${esc(id)}">${esc(label)}</label>
        <div class="lockfield-tools">
          ${isJson ? `<button type="button" class="btn btn-sm btn-ghost lockfield-fmt"
                title="Fòmate JSON an (endantasyon 2 espas)" aria-label="Fòmate JSON ${esc(label)}"><i class="fa-solid fa-wand-magic-sparkles"></i></button>` : ''}
          <button type="button" class="btn btn-sm btn-ghost lockfield-edit" data-edit-for="${esc(id)}"
                title="Modifier le champ" aria-label="Modifier ${esc(label)}"><i class="fa-solid fa-pen"></i></button>
        </div>
      </div>
      <textarea class="input lockfield-area${isJson ? ' mono' : ''}" id="${esc(id)}"
                rows="${Math.min(24, Math.max(4, raw.split('\n').length + 1))}"
                readonly spellcheck="false" wrap="off"
                autocomplete="off" autocapitalize="off" autocorrect="off">${esc(raw)}</textarea>
      <small class="lockfield-msg" hidden></small>
      ${hint ? `<small class="muted">${esc(hint)}</small>` : ''}
    </div>`;
  }

  /* Grandi otomatikman pou tout liy yo (saut de liy) rete vizib. */
  function grow(area) {
    const lines = area.value.split('\n').length;
    area.rows = Math.min(area.closest('.lockfield')?.classList.contains('editing') ? 40 : 14,
                         Math.max(4, lines + 1));
  }

  function validate(wrap) {
    const area = wrap.querySelector('.lockfield-area');
    const msg = wrap.querySelector('.lockfield-msg');
    if (wrap.dataset.kind !== 'json') { wrap.classList.remove('invalid', 'valid'); msg.hidden = true; return true; }
    try {
      JSON.parse(area.value);
      wrap.classList.remove('invalid'); wrap.classList.add('valid');
      msg.hidden = false; msg.className = 'lockfield-msg ok'; msg.textContent = '✅ JSON valid';
      return true;
    } catch (ex) {
      wrap.classList.add('invalid'); wrap.classList.remove('valid');
      msg.hidden = false; msg.className = 'lockfield-msg err'; msg.textContent = '⛔ JSON invalide — ' + ex.message;
      return false;
    }
  }

  function syncSaveButtons(root) {
    const card = root.closest('.card') || document;
    const bad = card.querySelector('.lockfield.invalid');
    card.querySelectorAll('[data-save]').forEach(b => {
      b.disabled = !!bad;
      b.title = bad ? 'Corrigez le JSON invalide avant d\'enregistrer.' : '';
    });
  }

  function open(wrap) {
    if (wrap.classList.contains('editing')) return;
    const area = wrap.querySelector('.lockfield-area');
    wrap.classList.add('editing');
    area.readOnly = false;
    area.dataset.saved = area.value;
    grow(area);
    area.focus();
    validate(wrap); syncSaveButtons(wrap);
  }

  async function closeField(wrap) {
    const area = wrap.querySelector('.lockfield-area');
    if (!wrap.classList.contains('editing')) return;
    if (area.dataset.saved !== undefined && area.dataset.saved !== area.value) {
      const keep = await window.Lotri.modal.confirm(
        'Vous avez des modifications non enregistrées dans ce champ.',
        'Cliquez sur « Conserver » pour continuer la modification, ou sur « Annuler les modifications » pour revenir à la dernière valeur enregistrée.',
        { okText: 'Kenbe chanjman', cancelText: 'Annuler les modifications' });
      if (keep) { area.focus(); return; }
      area.value = area.dataset.saved;
    }
    wrap.classList.remove('editing');
    area.readOnly = true;
    grow(area);
    validate(wrap); syncSaveButtons(wrap);
  }

  /* Branche tout chan bloke ki nan `root` (yon vi ki fèk rann). */
  function wire(root) {
    root = root || document;
    root.querySelectorAll('.lockfield').forEach(wrap => {
      if (wrap.dataset.wired) return;
      wrap.dataset.wired = '1';
      const area = wrap.querySelector('.lockfield-area');
      wrap.querySelector('.lockfield-edit').addEventListener('click', () =>
        wrap.classList.contains('editing') ? closeField(wrap) : open(wrap));
      area.addEventListener('dblclick', () => open(wrap));
      const fmt = wrap.querySelector('.lockfield-fmt');
      if (fmt) fmt.addEventListener('click', () => {
        open(wrap);
        try {
          area.value = JSON.stringify(JSON.parse(area.value), null, 2);
          grow(area);
        } catch (_) { /* validate() ap montre erè a */ }
        validate(wrap); syncSaveButtons(wrap);
      });
      /* Tab andedan chan an = endantasyon, li pa sote sou lòt chan */
      area.addEventListener('keydown', e => {
        if (e.key !== 'Tab' || area.readOnly) return;
        e.preventDefault();
        const s0 = area.selectionStart, e0 = area.selectionEnd;
        area.value = area.value.slice(0, s0) + '  ' + area.value.slice(e0);
        area.selectionStart = area.selectionEnd = s0 + 2;
      });
      area.addEventListener('input', () => grow(area));
      grow(area);
      area.addEventListener('input', () => { validate(wrap); syncSaveButtons(wrap); });
      area.addEventListener('blur', () => setTimeout(() => {
        if (!wrap.contains(document.activeElement)) closeField(wrap);
      }, 120));
      validate(wrap);
    });
    syncSaveButtons(root.querySelector('.lockfield') || root);
  }

  /* Li valè a — JSON parse otomatik pou chan JSON. */
  function value(id) {
    const area = document.getElementById(id);
    const wrap = area.closest('.lockfield');
    if (wrap && wrap.dataset.kind === 'json') {
      try { return JSON.parse(area.value); }
      catch (_) { throw new Error('JSON invalide dans le champ « ' + id + ' ». Corrigez-le avant d\'enregistrer.'); }
    }
    return area.value;
  }

  window.Lotri.lockfield = { html, wire, value, validate, grow };
})();


/* =====================================================================
 * JADSTACK LOTTO v9.4 — BADGE / NOTIFIKASYON VIZYÈL (Faz 3)
 * ---------------------------------------------------------------------
 * Yon sèl sous verite: RPC `jl9_rpc_badge_counts()` ki konte an tan reyèl
 * nan Supabase (mesaj poko li, pèman an atant, chanjman an atant, fakti).
 *
 * De kalite endikatè, jan demann orijinal la mande l:
 *   • PWEN (badge-dot)   — «gen yon bagay nouvo», lè kantite a pa enpòtan.
 *   • NIMEWO (badge-count) — lè moun nan bezwen kantite egzat la.
 *
 * Li rafrechi: apre chak vi ki chaje, epi chak 60 segond pandan sesyon an.
 * ===================================================================== */
(function () {
  window.Lotri = window.Lotri || {};
  const B = (window.Lotri.badges = {});

  /* Ki konte ki ale sou ki antre meni, pa wòl.
     kind: 'count' = nimewo egzat · 'dot' = senp ti pwen */
  const MAP = {
    super_admin: {
      messages:     { key: 'messages', kind: 'count' },
      cchanges:     { key: 'changes',  kind: 'count' },
      'pay-review': { key: 'payments', kind: 'count' },
      invoices:     { key: 'overdue',  kind: 'count' },
      'billing-check': { key: 'overdue', kind: 'dot' }
    },
    company: {
      messages: { key: 'messages', kind: 'count' },
      invoices: { key: 'invoices', kind: 'count' },
      payments: { key: 'payments', kind: 'dot' }
    },
    agent:      { messages: { key: 'messages', kind: 'count' } },
    supervisor: { messages: { key: 'messages', kind: 'count' } }
  };

  let timer = null;
  let last = {};

  B.counts = () => last;

  function paintOne(link, n, kind) {
    link.querySelectorAll('.badge-dot, .badge-count').forEach(e => e.remove());
    if (!n || n < 1) { link.removeAttribute('data-has-badge'); return; }
    const el = document.createElement('span');
    if (kind === 'dot') {
      el.className = 'badge-dot';
      el.setAttribute('aria-label', 'Nouveaux éléments disponibles');
    } else {
      el.className = 'badge-count';
      el.textContent = n > 99 ? '99+' : String(n);
      el.setAttribute('aria-label', n + ' eleman nouvo');
    }
    el.setAttribute('role', 'status');
    link.appendChild(el);
    link.setAttribute('data-has-badge', '1');
  }

  function paint(counts) {
    const role = (window.__lotriProfile || {}).role || 'agent';
    const map = MAP[role] || MAP.agent;

    document.querySelectorAll('.side-link[data-view]').forEach(link => {
      const cfg = map[link.dataset.view];
      paintOne(link, cfg ? Number(counts[cfg.key] || 0) : 0, cfg && cfg.kind);
    });

    /* Menu paran (dropdown ki fermer) resevwa yon ti pwen si youn nan
       pitit li yo gen yon bagay nouvo — konsa ou wè l menm san ouvri l. */
    document.querySelectorAll('.side-link[data-toggle]').forEach(btn => {
      const sub = document.getElementById(btn.dataset.toggle);
      const total = sub
        ? Array.from(sub.querySelectorAll('[data-has-badge]')).length
        : 0;
      btn.querySelectorAll('.badge-dot').forEach(e => e.remove());
      if (total > 0) {
        const d = document.createElement('span');
        d.className = 'badge-dot';
        d.setAttribute('aria-label', 'Nouveaux éléments dans ce menu');
        btn.appendChild(d);
      }
    });

    document.dispatchEvent(new CustomEvent('lotri:badges', { detail: counts }));
  }

  B.refresh = async function () {
    try {
      const { data, error } = await window.Lotri.supabase.rpc('jl9_rpc_badge_counts');
      if (error || !data) return last;
      last = data;
      paint(last);
      return last;
    } catch (_) { return last; }
  };

  /* Rele une seule fois apre mount(); li menm ki mete polling nan. */
  B.arm = function () {
    if (timer) return;
    B.refresh();
    timer = setInterval(() => {
      if (document.visibilityState === 'visible') B.refresh();
    }, 60000);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') B.refresh();
    });
  };

  B.disarm = function () { if (timer) { clearInterval(timer); timer = null; } };
})();


/* =====================================================================
 * JADSTACK LOTTO V11 — NWAYO UI
 *   Lotri.v11.crumbs()    -> breadcrumb stil Supabase
 *   Lotri.v11.imgInput()  -> input imaj modèn (icon/kamera, bòdi pwenti)
 *   Lotri.v11.rowCard()   -> klike yon liy tablo -> card popup
 *   Lotri.v11.money()     -> HTG toupatou
 *   Lotri.v11.avatar()    -> lèt inisyal + koulè inik
 *   Lotri.v11.filters()   -> filtè dat fiks OSWA peryòd
 * ===================================================================== */
(function () {
  const L = (window.Lotri = window.Lotri || {});
  const esc = L.escapeHtml || (s => String(s ?? ''));
  const SB = () => L.supabase;
  const v11 = (L.v11 = L.v11 || {});

  /* ---------- Lajan: HTG toupatou ---------- */
  v11.money = n => Number(n || 0).toLocaleString('fr-HT', {
    minimumFractionDigits: 2, maximumFractionDigits: 2
  }) + ' HTG';
  v11.dt = s => (s ? new Date(s).toLocaleString('fr-HT') : '—');

  /* ---------- Koulè inik ki sanble ak koulè sit la ---------- */
  v11.hue = txt => {
    let h = 0;
    String(txt || '?').split('').forEach(c => { h = (h * 31 + c.charCodeAt(0)) % 360; });
    return h;
  };
  v11.color = txt => `hsl(${v11.hue(txt)} 58% 42%)`;
  v11.initial = txt => String(txt || '?').trim().charAt(0).toUpperCase() || '?';

  v11.avatar = (name, url, cls) => url
    ? `<span class="v11-av ${cls || ''}"><img src="${esc(url)}" alt="${esc(name || '')}"></span>`
    : `<span class="v11-av ${cls || ''}" style="--av:${v11.color(name)}">${esc(v11.initial(name))}</span>`;

  /* ---------- Breadcrumb (stil Supabase) ---------- */
  /* Lotri.v11.crumbs([{label:'dashboard', view:'dashboard'}, {label:'rezilta'}]) */
  v11.crumbs = function (items) {
    const arr = (items || []).filter(Boolean);
    if (!arr.length) return '';
    const parts = arr.map((it, i) => {
      const last = i === arr.length - 1;
      const lbl = esc(it.label);
      const node = last
        ? `<span class="cur">${lbl}</span>`
        : (it.view ? `<button type="button" data-crumb="${esc(it.view)}">${lbl}</button>` : `<span>${lbl}</span>`);
      return node + (last && arr.length === 1 ? ' <span class="sep">&rsaquo;</span>' : '');
    });
    return `<nav class="v11-crumbs" aria-label="Chemin">${parts.join(' <span class="sep">&rsaquo;</span> ')}</nav>`;
  };

  document.addEventListener('click', e => {
    const b = e.target.closest('[data-crumb]');
    if (b && window.LotriShell) window.LotriShell.go(b.dataset.crumb);
  });

  /* ---------- Input imaj modèn ---------- */
  /* <div data-v11-img data-bucket="jl11-media" data-round="1" data-src="..."></div>
     Evènman: element.addEventListener('v11:image', e => e.detail.url) */
  v11.imgInput = function (opts) {
    opts = opts || {};
    const id = 'v11img-' + Math.random().toString(36).slice(2, 8);
    return `<label class="v11-img ${opts.round ? 'round' : ''} ${opts.wide ? 'wide' : ''}"
              data-v11-img id="${id}" data-bucket="${esc(opts.bucket || 'jl11-media')}"
              data-folder="${esc(opts.folder || '')}" title="${esc(opts.title || 'Cliquez pour changer l\'image')}">
              ${opts.src
                ? `<img src="${esc(opts.src)}" alt="${esc(opts.alt || '')}">`
                : `<span class="v11-img-ph"><i class="fa-solid fa-camera"></i>${esc(opts.label || 'Ajouter une image')}</span>`}
              <input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" aria-label="${esc(opts.title || 'Imaj')}">
              <span class="v11-img-edit"><i class="fa-solid fa-pen"></i></span>
            </label>`;
  };

  async function upload(box, file) {
    if (!/^image\//.test(file.type)) throw new Error('Seules les images sont acceptées.');
    if (file.size > 4 * 1024 * 1024) throw new Error('Imaj la twò gwo (maks 4 Mo).');
    const bucket = box.dataset.bucket || 'jl11-media';
    const ext = (file.name.split('.').pop() || 'png').toLowerCase();
    const path = `${box.dataset.folder || 'general'}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error } = await SB().storage.from(bucket).upload(path, file, { upsert: false });
    if (error) throw new Error(error.message);
    const { data } = SB().storage.from(bucket).getPublicUrl(path);
    return (data && data.publicUrl) || null;
  }

  document.addEventListener('change', async e => {
    const input = e.target;
    if (!input.matches('[data-v11-img] input[type=file]')) return;
    const box = input.closest('[data-v11-img]');
    const file = input.files && input.files[0];
    if (!file) return;
    box.classList.add('busy');
    try {
      const url = await upload(box, file);
      box.querySelector('.v11-img-ph')?.remove();
      let img = box.querySelector('img');
      if (!img) { img = document.createElement('img'); box.prepend(img); }
      img.src = url;
      box.dataset.url = url;
      box.dispatchEvent(new CustomEvent('v11:image', { detail: { url }, bubbles: true }));
      L.toast && L.toast('L\'image est enregistrée.', 'success');
    } catch (err) {
      L.toast && L.toast(err.message, 'error');
    } finally {
      box.classList.remove('busy');
      input.value = '';
    }
  });

  /* ---------- Card popup detay ---------- */
  v11.popup = function (title, htmlOrRows, opts) {
    opts = opts || {};
    const body = Array.isArray(htmlOrRows)
      ? `<div class="v11-kv">${htmlOrRows.map(r =>
          `<div class="k">${esc(r[0])}</div><div class="v">${r[2] ? r[1] : esc(r[1] ?? '—')}</div>`).join('')}</div>`
      : (htmlOrRows || '');
    const back = document.createElement('div');
    back.className = 'v11-pop';
    back.innerHTML = `<div class="v11-pop-card" role="dialog" aria-modal="true">
        <div class="v11-pop-hd">
          <div><h3>${esc(title)}</h3>${opts.subtitle ? `<p class="muted" style="margin:.15rem 0 0;font-size:.78rem">${esc(opts.subtitle)}</p>` : ''}</div>
          <button class="btn btn-icon btn-ghost" data-close aria-label="Fermer"><i class="fa-solid fa-xmark"></i></button>
        </div>
        ${body}
        ${opts.footer ? `<div class="row" style="justify-content:flex-end;gap:.5rem;margin-top:1rem">${opts.footer}</div>` : ''}
      </div>`;
    document.body.appendChild(back);
    const close = () => { back.remove(); document.removeEventListener('keydown', key); };
    const key = ev => { if (ev.key === 'Escape') close(); };
    back.addEventListener('click', ev => { if (ev.target === back) close(); });
    back.querySelector('[data-close]').onclick = close;
    document.addEventListener('keydown', key);
    return { el: back, close };
  };

  /* ---------- Klike yon liy tablo -> card popup ---------- */
  /* Mete data-v11-row='{"Nom":"x","Montant":"y"}' ak data-v11-title sou <tr> */
  v11.wireRows = function (root) {
    (root || document).querySelectorAll('tr[data-v11-row]').forEach(tr => {
      if (tr.dataset.v11Wired) return;
      tr.dataset.v11Wired = '1';
      tr.classList.add('v11-clickable');
      tr.addEventListener('click', ev => {
        if (ev.target.closest('button,a,input,select,label')) return;
        let rows = [];
        try { rows = Object.entries(JSON.parse(tr.dataset.v11Row)); } catch (_) { return; }
        v11.popup(tr.dataset.v11Title || 'Détails', rows.map(([k, val]) => [k, val]));
      });
    });
  };
  document.addEventListener('lotri:view', e => v11.wireRows(e.detail));

  /* ---------- Filtres dat fiks / peryòd ---------- */
  v11.filters = function (extra) {
    return `<div class="v11-filters" data-v11-filters>
      <div class="fld"><label>Mòd</label>
        <select class="select" data-f="mode">
          <option value="all">Tous</option><option value="day">Une date fixe</option>
          <option value="range">Une période</option>
        </select></div>
      <div class="fld" data-only="day range"><label>Du</label><input class="input" type="date" data-f="from"></div>
      <div class="fld" data-only="range"><label>Au</label><input class="input" type="date" data-f="to"></div>
      ${extra || ''}
      <button class="btn btn-primary btn-sm" data-f="apply"><i class="fa-solid fa-filter"></i> Filtrer</button>
    </div>`;
  };
  v11.readFilters = function (root) {
    const box = (root || document).querySelector('[data-v11-filters]');
    if (!box) return { mode: 'all' };
    const g = k => box.querySelector(`[data-f="${k}"]`);
    return { mode: g('mode').value, from: g('from') ? g('from').value : '', to: g('to') ? g('to').value : '' };
  };
  v11.wireFilters = function (root, onApply) {
    const box = (root || document).querySelector('[data-v11-filters]');
    if (!box) return;
    const sync = () => {
      const m = box.querySelector('[data-f="mode"]').value;
      box.querySelectorAll('[data-only]').forEach(el => {
        el.style.display = el.dataset.only.split(' ').includes(m) ? '' : 'none';
      });
    };
    box.querySelector('[data-f="mode"]').addEventListener('change', sync);
    box.querySelector('[data-f="apply"]').addEventListener('click', () => onApply(v11.readFilters(root)));
    sync();
  };
  /* Appliquer filtè a sou yon lis objè ki gen yon chan dat */
  v11.applyDate = function (rows, field, f) {
    if (!f || f.mode === 'all') return rows;
    return (rows || []).filter(r => {
      const d = r[field] ? new Date(r[field]) : null;
      if (!d) return false;
      const iso = d.toISOString().slice(0, 10);
      if (f.mode === 'day') return !f.from || iso === f.from;
      return (!f.from || iso >= f.from) && (!f.to || iso <= f.to);
    });
  };

  /* ---------- Toast ki mennen yon kote ---------- */
  v11.toastLink = function (msg, view, kind) {
    let host = document.querySelector('.toast-host');
    if (!host) { host = document.createElement('div'); host.className = 'toast-host'; document.body.appendChild(host); }
    const el = document.createElement('div');
    el.className = 'toast ' + (kind || '') + ' clickable';
    el.style.cursor = 'pointer';
    el.textContent = msg;
    el.onclick = () => { el.remove(); if (window.LotriShell) window.LotriShell.go(view); };
    host.appendChild(el);
    setTimeout(() => el.remove(), 8000);
  };
})();


/* =====================================================================
 * JADSTACK LOTTO V86 — VIZYALIZÈ MEDYA (style WhatsApp)
 * ---------------------------------------------------------------------
 * Fichye jenerik, itilizab nan tout aplikasyon an (pa sèlman nan Mesaj).
 * Louvri yon foto/videyo an plenn ekran, ak zoom (pinch + molèt + double
 * tap) pou foto, lekti pou videyo, epi navige ant plizyè eleman (swipe
 * oswa flèch) si ou pase yon lis.
 *
 * API piblik:
 *   Lotri.openMediaViewer(items, startIndex)
 *     items: [{ url, type:'image'|'video', caption? }]
 *     startIndex: nimewo eleman pou kòmanse (default 0)
 * ===================================================================== */
(function () {
  window.Lotri = window.Lotri || {};
  if (window.Lotri.openMediaViewer) return; // deja chaje

  let root = null, items = [], idx = 0;
  let scale = 1, tx = 0, ty = 0;
  let pinchStart = null, dragStart = null, lastTap = 0;

  function ensureRoot() {
    if (root) return root;
    root = document.createElement('div');
    root.className = 'jlmv-root';
    root.innerHTML = `
      <div class="jlmv-backdrop"></div>
      <div class="jlmv-top">
        <button type="button" class="jlmv-close" aria-label="Fèmen"><i class="fa-solid fa-xmark"></i></button>
        <span class="jlmv-count"></span>
        <a class="jlmv-download" target="_blank" rel="noopener noreferrer" aria-label="Telechaje"><i class="fa-solid fa-download"></i></a>
      </div>
      <div class="jlmv-stage"><div class="jlmv-frame"></div></div>
      <button type="button" class="jlmv-nav jlmv-prev" aria-label="Anvan"><i class="fa-solid fa-chevron-left"></i></button>
      <button type="button" class="jlmv-nav jlmv-next" aria-label="Apre"><i class="fa-solid fa-chevron-right"></i></button>
      <div class="jlmv-caption"></div>`;
    document.body.appendChild(root);

    root.querySelector('.jlmv-backdrop').onclick = close;
    root.querySelector('.jlmv-close').onclick = close;
    root.querySelector('.jlmv-prev').onclick = () => go(idx - 1);
    root.querySelector('.jlmv-next').onclick = () => go(idx + 1);
    document.addEventListener('keydown', onKey);
    return root;
  }

  function onKey(e) {
    if (!root || !root.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') go(idx - 1);
    else if (e.key === 'ArrowRight') go(idx + 1);
  }

  function resetZoom() {
    scale = 1; tx = 0; ty = 0;
    const frame = root.querySelector('.jlmv-frame');
    const el = frame.firstElementChild;
    if (el) el.style.transform = 'translate(0px,0px) scale(1)';
  }

  function applyTransform() {
    const frame = root.querySelector('.jlmv-frame');
    const el = frame.firstElementChild;
    if (el) el.style.transform = `translate(${tx}px,${ty}px) scale(${scale})`;
  }

  function renderCurrent() {
    const it = items[idx];
    if (!it) return;
    const frame = root.querySelector('.jlmv-frame');
    frame.innerHTML = it.type === 'video'
      ? `<video src="${it.url}" controls playsinline autoplay></video>`
      : `<img src="${it.url}" alt="" draggable="false">`;
    root.querySelector('.jlmv-count').textContent = items.length > 1 ? `${idx + 1} / ${items.length}` : '';
    root.querySelector('.jlmv-download').href = it.url;
    root.querySelector('.jlmv-caption').textContent = it.caption || '';
    root.querySelector('.jlmv-prev').style.visibility = (items.length > 1 && idx > 0) ? 'visible' : 'hidden';
    root.querySelector('.jlmv-next').style.visibility = (items.length > 1 && idx < items.length - 1) ? 'visible' : 'hidden';
    resetZoom();
    wireGestures(it.type);
  }

  function go(n) {
    if (n < 0 || n >= items.length) return;
    idx = n;
    renderCurrent();
  }

  function wireGestures(type) {
    const frame = root.querySelector('.jlmv-frame');
    const el = frame.firstElementChild;
    if (!el || type === 'video') return; // videyo: kontwòl natif <video>, pa gen zoom

    // Double-tap / double-click pou zoom rapid
    el.addEventListener('click', () => {
      const now = Date.now();
      if (now - lastTap < 300) {
        scale = scale > 1 ? 1 : 2.4; tx = 0; ty = 0; applyTransform();
      }
      lastTap = now;
    });

    // Molèt souri (desktop) — zoom sant
    frame.addEventListener('wheel', (e) => {
      e.preventDefault();
      const d = e.deltaY < 0 ? 0.18 : -0.18;
      scale = Math.min(4, Math.max(1, scale + d));
      if (scale === 1) { tx = 0; ty = 0; }
      applyTransform();
    }, { passive: false });

    // Pinch-to-zoom + drag (mobil)
    frame.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) {
        pinchStart = { dist: touchDist(e), scale };
      } else if (e.touches.length === 1 && scale > 1) {
        dragStart = { x: e.touches[0].clientX - tx, y: e.touches[0].clientY - ty };
      }
    }, { passive: true });

    frame.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2 && pinchStart) {
        e.preventDefault();
        const d = touchDist(e);
        scale = Math.min(4, Math.max(1, pinchStart.scale * (d / pinchStart.dist)));
        applyTransform();
      } else if (e.touches.length === 1 && dragStart && scale > 1) {
        e.preventDefault();
        tx = e.touches[0].clientX - dragStart.x;
        ty = e.touches[0].clientY - dragStart.y;
        applyTransform();
      }
    }, { passive: false });

    frame.addEventListener('touchend', () => {
      pinchStart = null; dragStart = null;
      if (scale <= 1) { scale = 1; tx = 0; ty = 0; applyTransform(); }
    });
  }

  function touchDist(e) {
    const [a, b] = e.touches;
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  }

  function close() {
    if (!root) return;
    root.classList.remove('open');
    setTimeout(() => { root.querySelector('.jlmv-frame').innerHTML = ''; }, 180);
    document.body.style.overflow = '';
  }

  window.Lotri.openMediaViewer = function (list, startIndex) {
    items = (Array.isArray(list) ? list : [list]).filter(it => it && it.url);
    if (!items.length) return;
    idx = Math.min(Math.max(0, startIndex || 0), items.length - 1);
    ensureRoot();
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => root.classList.add('open'));
    renderCurrent();
  };
})();


/* JADSTACK LOTTO V86 — Mesajri ak Audience + Vwa + Kamera + Aksize lekti
 * ---------------------------------------------------------------------
 * Ranplase v78-chat-announcements.js (menm kle vi 'messages').
 * - Chak audience diferan parèt tankou yon konvèzasyon apa (lis konvèzasyon).
 * - Sèlman Super Admin + Employeur (Mini Super Admin) ka pibliye/chwazi audience.
 * - Audience posib: Sistèm (tout moun, dèfo) · Konpayi (yon sèl/lis/tout,
 *   "tout moun" oswa "admin sèlman") · Ajan (yon sèl/lis, pa konpayi).
 * - Nòt vokal (anrejistreman), Kamera an tan reyèl (foto/videyo), pyès jwenn
 *   ki tache parèt an aperçu anvan voye — tout sa ale nan menm bucket
 *   Storage "announcements" ak ansyen sistèm nan (san touche l).
 * - Vizyalizè medya style WhatsApp (media-viewer.js) pou zoom foto/videyo.
 * - Detay "Audience" (kiyes ki gen dwa li) + aksize lekti (kiyes ki li)
 *   disponib pou moun ki pibliye a + Super Admin/Employeur.
 */
(function () {
  const L = window.Lotri;
  const SB = () => L.supabase;
  const esc = L.escapeHtml;
  const DELETE_WINDOW_MS = 15 * 60 * 1000;

  let me = null;
  let host = null;
  let screen = 'list';           // 'list' | 'thread'
  let currentConv = null;        // { conversation_key, audience_type, audience_scope, audience_company_ids, audience_agent_ids }
  let audOptions = null;         // { companies:[], agents:[] } — sèlman pou super_admin/employer
  let pollTimer = null;

  /* ---------------------------------------------------------------------
   * Zouti
   * ------------------------------------------------------------------- */
  function greeting() {
    const h = new Date().getHours();
    return h < 14 ? 'Bonjou' : 'Bonswa';
  }

  async function loadAudienceOptions() {
    if (audOptions) return audOptions;
    const { data, error } = await SB().rpc('jl86_rpc_audience_options');
    if (error) throw error;
    audOptions = data || { companies: [], agents: [] };
    return audOptions;
  }

  function companyName(id) {
    if (!audOptions) return null;
    const c = (audOptions.companies || []).find(c => String(c.id) === String(id));
    return c ? c.name : null;
  }

  /* Etikèt lizib pou yon konvèzasyon (odyans) — itilize sa moun nan gen dwa wè. */
  function convLabel(c) {
    const t = c.audience_type, sc = c.audience_scope;
    const compIds = c.audience_company_ids || [];
    const agIds = c.audience_agent_ids || [];
    if (t === 'system') return { title: 'JadStack LOTTO', sub: 'Tout Sistèm nan', tag: 'Sistèm', icon: 'fa-bullhorn' };
    if (t === 'company') {
      if (sc === 'admin_only' && !compIds.length) return { title: 'Administrasyon — Tout Konpayi', sub: 'Sèlman admin konpayi yo (ajan pa jwenn)', tag: 'Admin', icon: 'fa-user-tie' };
      if (sc === 'admin_only') {
        const names = compIds.map(companyName).filter(Boolean);
        return { title: names.length ? 'Admin — ' + names.join(', ') : 'Admin Konpayi', sub: 'Sèlman admin konpayi a', tag: 'Admin', icon: 'fa-user-tie' };
      }
      if (!compIds.length) return { title: 'Tout Konpayi yo', sub: 'Admin + Ajan, tout konpayi', tag: 'Konpayi', icon: 'fa-building' };
      const names = compIds.map(companyName).filter(Boolean);
      return { title: names.length ? names.join(', ') : (compIds.length > 1 ? 'Lis Konpayi' : 'Konpayi'), sub: 'Admin + Ajan konpayi a', tag: 'Konpayi', icon: 'fa-building' };
    }
    if (t === 'agent') {
      return { title: agIds.length > 1 ? `Lis Ajan (${agIds.length})` : 'Ajan', sub: 'Mesaj vize sèlman', tag: 'Ajan', icon: 'fa-user' };
    }
    return { title: 'Mesaj', sub: '', tag: '', icon: 'fa-comment' };
  }

  /* ---------------------------------------------------------------------
   * Meday medya (foto/videyo/vwa) — tache nan yon mesaj
   * ------------------------------------------------------------------- */
  async function uploadMedia(fileOrBlob, name, me, kind) {
    const isAudio = kind === 'audio';
    const isVideo = kind === 'video';
    const maxSize = isVideo ? 60 * 1024 * 1024 : (isAudio ? 15 * 1024 * 1024 : 8 * 1024 * 1024);
    if (fileOrBlob.size > maxSize) throw new Error('Fichye a twò gwo pou voye.');
    const ext = isAudio ? 'webm' : (name && name.includes('.') ? name.split('.').pop().toLowerCase().replace(/[^a-z0-9]/g, '') : (isVideo ? 'mp4' : 'jpg'));
    const path = `${me.id}/${Date.now()}-${Math.random().toString(36).slice(2, 9)}.${ext || 'bin'}`;
    const contentType = fileOrBlob.type || (isAudio ? 'audio/webm' : undefined);
    const { error } = await SB().storage.from('announcements').upload(path, fileOrBlob, { upsert: false, cacheControl: '3600', contentType });
    if (error) throw new Error('Nou pa t ka voye fichye a: ' + error.message);
    const { data } = SB().storage.from('announcements').getPublicUrl(path);
    if (!data || !data.publicUrl) throw new Error('URL fichye a pa jwenn.');
    return { url: data.publicUrl, name: name || null };
  }

  function fmtDuration(sec) {
    sec = Math.max(0, Math.round(sec || 0));
    const m = Math.floor(sec / 60), s = sec % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  }

  function mediaHtml(m) {
    if (!m.image_url) return '';
    if (m.media_type === 'audio') {
      return `<div class="v86-voice-msg" data-play="${esc(m.image_url)}">
        <button type="button" class="v86-voice-play" aria-label="Jwe nòt vokal"><i class="fa-solid fa-play"></i></button>
        <div class="v86-voice-wave"></div>
        <span class="v86-voice-time">${fmtDuration(m.duration_seconds)}</span>
      </div>`;
    }
    if (m.media_type === 'video') {
      return `<div class="v785-image v785-video" data-view-media="${esc(m.image_url)}" data-view-type="video"><video src="${esc(m.image_url)}" preload="metadata" playsinline muted></video></div>`;
    }
    return `<div class="v785-image" data-view-media="${esc(m.image_url)}" data-view-type="image">
      <img src="${esc(m.image_url)}" alt="Foto anons" loading="lazy">
    </div>`;
  }

  function senderName(m) {
    if (m.author_role === 'super_admin') return 'Super Admin';
    if (m.author_role === 'employer') return 'Mini Super Admin';
    return 'JadStack LOTTO';
  }

  function deleteState(m) {
    if (me.role === 'super_admin') return m.deleted_at ? 'restore' : 'delete';
    if (m.deleted_at) return null;
    if (me.role === 'employer' && String(m.author_id) === String(me.id)) {
      const age = Date.now() - new Date(m.created_at).getTime();
      if (age <= DELETE_WINDOW_MS) return 'delete';
    }
    return null;
  }

  function renderMessage(m) {
    const mine = String(m.author_id) === String(me.id);
    const isDeleted = !!m.deleted_at;
    const action = deleteState(m);
    const body = m.body ? `<div class="v785-body">${esc(m.body)}</div>` : '';
    const media = mediaHtml(m);
    const time = new Date(m.created_at).toLocaleTimeString('fr-HT', { hour: '2-digit', minute: '2-digit' });
    let actionBtn = '';
    if (action === 'delete') actionBtn = `<button type="button" class="v785-del" data-id="${esc(m.id)}" aria-label="Efase mesaj la"><i class="fa-solid fa-trash"></i></button>`;
    else if (action === 'restore') actionBtn = `<button type="button" class="v785-restore" data-id="${esc(m.id)}" aria-label="Retabli mesaj la"><i class="fa-solid fa-clock-rotate-left"></i> Retabli</button>`;
    const deletedBadge = isDeleted ? `<div class="v785-deleted-tag"><i class="fa-solid fa-trash-can"></i> Efase</div>` : '';
    const canSeeReceipts = (me.role === 'super_admin' || me.role === 'employer') && !isDeleted;
    const receiptsBtn = canSeeReceipts ? `<button type="button" class="v785-del" data-receipts="${esc(m.id)}" aria-label="Wè detay"><i class="fa-solid fa-circle-info"></i> Detay</button>` : '';
    return `<article class="v785-msg ${mine ? 'out' : 'in'} ${isDeleted ? 'is-deleted' : ''}">
      <div class="v785-msg-bubble">
        ${!mine ? `<div class="v785-sender">${esc(senderName(m))}</div>` : ''}
        ${deletedBadge}
        ${media}${body}
        <div class="v785-meta">${receiptsBtn}${actionBtn}<span>${time}${mine ? ' <span class="v785-check">✓✓</span>' : ''}</span></div>
      </div>
    </article>`;
  }

  function scrollBottom(box, smooth) {
    if (!box) return;
    box.scrollTo({ top: box.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });
  }

  /* ---------------------------------------------------------------------
   * Panel jenerik (bay anba ekran an, style WhatsApp bottom-sheet)
   * ------------------------------------------------------------------- */
  function openPanel(title, bodyHtml) {
    const ov = document.createElement('div');
    ov.className = 'v86-panel-overlay';
    ov.innerHTML = `<div class="v86-panel">
      <div class="v86-panel-head"><strong>${esc(title)}</strong><button type="button" class="v86-panel-close" aria-label="Fèmen"><i class="fa-solid fa-xmark"></i></button></div>
      <div class="v86-panel-content">${bodyHtml}</div>
    </div>`;
    document.body.appendChild(ov);
    ov.addEventListener('click', e => { if (e.target === ov) ov.remove(); });
    ov.querySelector('.v86-panel-close').onclick = () => ov.remove();
    return ov;
  }

  async function showReceipts(id) {
    const ov = openPanel('Detay mesaj la', '<div class="spinner"></div>');
    try {
      const { data, error } = await SB().rpc('jl86_rpc_announcement_recipients', { _id: id });
      if (error) throw error;
      const rows = data || [];
      const readCount = rows.filter(r => r.read_at).length;
      const html = `<div class="v86-panel-help"><i class="fa-solid fa-users"></i> ${rows.length} moun gen dwa li mesaj sa a — ${readCount} deja li li.</div>` +
        (rows.length ? rows.map(r => `
          <div class="v86-recipient-row">
            <div class="v86-recipient-name">${esc(r.full_name)}<div class="v86-recipient-sub">${esc(r.role === 'company' ? 'Admin Konpayi' : r.role === 'agent' ? 'Ajan' : r.role)}${r.company_name ? ' · ' + esc(r.company_name) : ''}</div></div>
            ${r.read_at ? `<span class="v86-recipient-read"><i class="fa-solid fa-check-double"></i> Li</span>` : `<span class="v86-recipient-unread">Poko li</span>`}
          </div>`).join('') : '<div class="empty">Pesonn poko idantifye kòm destinatè.</div>');
      ov.querySelector('.v86-panel-content').innerHTML = html;
    } catch (e) {
      ov.querySelector('.v86-panel-content').innerHTML = `<div class="empty">${esc(e.message || e)}</div>`;
    }
  }

  /* ---------------------------------------------------------------------
   * Chwazi Audience (nouvo mesaj) — Sistèm / Konpayi / Ajan
   * ------------------------------------------------------------------- */
  async function openAudiencePicker() {
    let opts;
    try { opts = await loadAudienceOptions(); } catch (e) { L.toast(e.message || 'Nou pa t ka chaje lis konpayi/ajan yo.', 'error'); return; }

    let tab = 'system';
    let scope = 'all';
    const selCompanies = new Set();
    const selAgents = new Set();

    const ov = document.createElement('div');
    ov.className = 'v86-panel-overlay';
    ov.innerHTML = `<div class="v86-panel">
      <div class="v86-panel-head"><strong>Chwazi Audience</strong><button type="button" class="v86-panel-close" aria-label="Fèmen"><i class="fa-solid fa-xmark"></i></button></div>
      <div class="v86-aud-tabs">
        <button type="button" class="v86-aud-tab active" data-tab="system">Tout Sistèm nan</button>
        <button type="button" class="v86-aud-tab" data-tab="company">Konpayi</button>
        <button type="button" class="v86-aud-tab" data-tab="agent">Ajan</button>
      </div>
      <div class="v86-aud-body"></div>
      <button type="button" class="v86-aud-preview-btn" id="v86-aud-preview"><i class="fa-solid fa-eye"></i> Wè kiyès k ap resevwa mesaj la</button>
      <button type="button" class="v86-aud-confirm" id="v86-aud-confirm">Kontinye — Ekri Mesaj</button>
    </div>`;
    document.body.appendChild(ov);
    ov.addEventListener('click', e => { if (e.target === ov) ov.remove(); });
    ov.querySelector('.v86-panel-close').onclick = () => ov.remove();

    const bodyEl = ov.querySelector('.v86-aud-body');

    function renderTabBody() {
      if (tab === 'system') {
        bodyEl.innerHTML = `<div class="v86-aud-help">Mesaj sa a ap ale bay <strong>TOUT moun</strong> nan sistèm nan (tout konpayi, tout ajan, Administrasyon). Se chwa dèfo a.</div>`;
        return;
      }
      if (tab === 'company') {
        bodyEl.innerHTML = `
          <div class="v86-aud-help">Chwazi yon sèl konpayi, plizyè, oswa kite tout dekoche pou vize <strong>TOUT konpayi</strong>. Chwazi si se sèlman Admin Konpayi a k ap resevwa, oswa tout moun (Admin + Ajan).</div>
          <div class="v86-aud-scope">
            <label><input type="radio" name="v86-scope" value="all" checked> Tout moun nan konpayi a (Admin + Ajan)</label>
            <label><input type="radio" name="v86-scope" value="admin_only"> Sèlman Admin Konpayi a (ajan pa jwenn)</label>
          </div>
          <div class="v86-aud-list" id="v86-comp-list">
            <div class="v86-aud-item" data-all="1"><input type="checkbox" id="v86-comp-all"><span><strong>Tout Konpayi yo</strong></span></div>
            ${(opts.companies || []).map(c => `<div class="v86-aud-item"><input type="checkbox" value="${esc(c.id)}" class="v86-comp-chk"><span>${esc(c.name)}</span></div>`).join('') || '<div class="empty">Pa gen konpayi.</div>'}
          </div>`;
        const allChk = bodyEl.querySelector('#v86-comp-all');
        const chks = () => Array.from(bodyEl.querySelectorAll('.v86-comp-chk'));
        allChk.onchange = () => {
          if (allChk.checked) { selCompanies.clear(); chks().forEach(c => c.checked = false); }
        };
        chks().forEach(chk => chk.onchange = () => {
          if (chk.checked) { allChk.checked = false; selCompanies.add(chk.value); }
          else selCompanies.delete(chk.value);
        });
        bodyEl.querySelectorAll('input[name="v86-scope"]').forEach(r => r.onchange = () => { if (r.checked) scope = r.value; });
        return;
      }
      if (tab === 'agent') {
        const byCompany = {};
        (opts.agents || []).forEach(a => { (byCompany[a.company_id || 'none'] ||= []).push(a); });
        const companiesWithAgents = (opts.companies || []).filter(c => byCompany[c.id] && byCompany[c.id].length);
        bodyEl.innerHTML = `
          <div class="v86-aud-help">Konpayi yo parèt anwo, lis ajan yo anba chak konpayi. Chwazi youn oswa plizyè ajan.</div>
          <div class="v86-aud-list" id="v86-agent-list">
            ${companiesWithAgents.map(c => `
              <div class="v86-aud-company-head">${esc(c.name)}</div>
              ${byCompany[c.id].map(a => `<div class="v86-aud-item"><input type="checkbox" value="${esc(a.id)}" class="v86-agent-chk"><span>${esc(a.full_name)}</span></div>`).join('')}
            `).join('') || '<div class="empty">Pa gen ajan pou kounye a.</div>'}
          </div>`;
        bodyEl.querySelectorAll('.v86-agent-chk').forEach(chk => chk.onchange = () => {
          if (chk.checked) selAgents.add(chk.value); else selAgents.delete(chk.value);
        });
      }
    }
    renderTabBody();

    ov.querySelectorAll('.v86-aud-tab').forEach(btn => btn.onclick = () => {
      ov.querySelectorAll('.v86-aud-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tab = btn.dataset.tab;
      renderTabBody();
    });

    function currentSelection() {
      return {
        type: tab, scope,
        company_ids: tab === 'company' ? Array.from(selCompanies) : null,
        agent_ids: tab === 'agent' ? Array.from(selAgents) : null
      };
    }

    ov.querySelector('#v86-aud-preview').onclick = async () => {
      const s = currentSelection();
      if (s.type === 'agent' && !s.agent_ids.length) { L.toast('Chwazi omwen yon ajan.', 'error'); return; }
      try {
        const { data, error } = await SB().rpc('jl86_rpc_resolve_audience_preview', {
          _type: s.type, _scope: s.scope, _company_ids: s.company_ids && s.company_ids.length ? s.company_ids : null, _agent_ids: s.agent_ids
        });
        if (error) throw error;
        const rows = data || [];
        openPanel('Moun k ap resevwa mesaj la', `<div class="v86-panel-help"><i class="fa-solid fa-users"></i> ${rows.length} moun ap resevwa mesaj sa a.</div>` +
          (rows.length ? rows.map(r => `<div class="v86-recipient-row"><div class="v86-recipient-name">${esc(r.full_name)}<div class="v86-recipient-sub">${esc(r.role === 'company' ? 'Admin Konpayi' : 'Ajan')}${r.company_name ? ' · ' + esc(r.company_name) : ''}</div></div></div>`).join('') : '<div class="empty">Pesonn pa koresponn ak chwa sa a.</div>'));
      } catch (e) { L.toast(e.message || 'Nou pa t ka chaje lis la.', 'error'); }
    };

    ov.querySelector('#v86-aud-confirm').onclick = () => {
      const s = currentSelection();
      if (s.type === 'agent' && !s.agent_ids.length) { L.toast('Chwazi omwen yon ajan.', 'error'); return; }
      ov.remove();
      currentConv = {
        conversation_key: null, // ap kalkile lè l voye premye mesaj la
        audience_type: s.type, audience_scope: s.scope,
        audience_company_ids: s.company_ids && s.company_ids.length ? s.company_ids : null,
        audience_agent_ids: s.agent_ids
      };
      screen = 'thread';
      renderScreen();
    };
  }

  /* ---------------------------------------------------------------------
   * Anrejistreman vwa (MediaRecorder)
   * ------------------------------------------------------------------- */
  function wireVoiceRecorder(host, onReady) {
    const btn = host.querySelector('#v86-voice-btn');
    const composeRow = host.querySelector('.v785-compose-row');
    if (!btn) return;
    let mediaRecorder = null, chunks = [], startedAt = 0, timerId = null, stream = null;

    btn.onclick = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch (e) { L.toast('Nou pa ka jwenn aksè mikwo a.', 'error'); return; }
      chunks = [];
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
      mediaRecorder.start();
      startedAt = Date.now();

      const liveBar = document.createElement('div');
      liveBar.className = 'v86-rec-live';
      liveBar.innerHTML = `<span class="v86-rec-dot"></span><span id="v86-rec-time">0:00</span><span style="flex:1"></span>
        <button type="button" class="v86-rec-cancel" id="v86-rec-cancel"><i class="fa-solid fa-trash"></i> Anile</button>
        <button type="button" class="v785-send" id="v86-rec-send" aria-label="Voye nòt vokal"><i class="fa-solid fa-paper-plane"></i></button>`;
      composeRow.style.display = 'none';
      composeRow.insertAdjacentElement('afterend', liveBar);

      timerId = setInterval(() => {
        const el = liveBar.querySelector('#v86-rec-time');
        if (el) el.textContent = fmtDuration((Date.now() - startedAt) / 1000);
      }, 250);

      function stop(send) {
        clearInterval(timerId);
        if (mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop();
        stream.getTracks().forEach(t => t.stop());
        liveBar.remove();
        composeRow.style.display = '';
        if (!send) return;
        mediaRecorder.onstop = () => {
          const durSec = (Date.now() - startedAt) / 1000;
          if (durSec < 1) { L.toast('Nòt vokal la twò kout.', 'error'); return; }
          const blob = new Blob(chunks, { type: 'audio/webm' });
          onReady(blob, durSec);
        };
      }
      liveBar.querySelector('#v86-rec-cancel').onclick = () => stop(false);
      liveBar.querySelector('#v86-rec-send').onclick = () => stop(true);
    };
  }

  /* ---------------------------------------------------------------------
   * Kamera an tan reyèl (foto/videyo)
   * ------------------------------------------------------------------- */
  async function openCamera(onCapture) {
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: true });
    } catch (e) { L.toast('Nou pa ka jwenn aksè kamera a.', 'error'); return; }

    const ov = document.createElement('div');
    ov.className = 'v86-cam-overlay';
    ov.innerHTML = `
      <div class="v86-cam-mode">
        <button type="button" class="active" data-mode="photo">Foto</button>
        <button type="button" data-mode="video">Videyo</button>
      </div>
      <span class="v86-cam-timer" id="v86-cam-timer">0:00</span>
      <video class="v86-cam-video" autoplay playsinline muted></video>
      <div class="v86-cam-bar">
        <button type="button" class="v86-cam-close" aria-label="Fèmen"><i class="fa-solid fa-xmark"></i></button>
        <button type="button" class="v86-cam-shoot" aria-label="Pran"></button>
        <button type="button" class="v86-cam-flip" aria-label="Chanje kamera"><i class="fa-solid fa-camera-rotate"></i></button>
      </div>`;
    document.body.appendChild(ov);
    const videoEl = ov.querySelector('video');
    videoEl.srcObject = stream;

    let mode = 'photo', recorder = null, chunks = [], recStart = 0, recTimer = null, facing = 'environment';

    function close() {
      if (recorder && recorder.state !== 'inactive') recorder.stop();
      stream.getTracks().forEach(t => t.stop());
      clearInterval(recTimer);
      ov.remove();
    }
    ov.querySelector('.v86-cam-close').onclick = close;

    ov.querySelectorAll('.v86-cam-mode button').forEach(b => b.onclick = () => {
      ov.querySelectorAll('.v86-cam-mode button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      mode = b.dataset.mode;
    });

    ov.querySelector('.v86-cam-flip').onclick = async () => {
      facing = facing === 'environment' ? 'user' : 'environment';
      stream.getTracks().forEach(t => t.stop());
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: facing }, audio: true });
        videoEl.srcObject = stream;
      } catch (_) {}
    };

    const shootBtn = ov.querySelector('.v86-cam-shoot');
    const timerEl = ov.querySelector('#v86-cam-timer');

    shootBtn.onclick = () => {
      if (mode === 'photo') {
        const canvas = document.createElement('canvas');
        canvas.width = videoEl.videoWidth; canvas.height = videoEl.videoHeight;
        canvas.getContext('2d').drawImage(videoEl, 0, 0);
        canvas.toBlob(blob => { onCapture(blob, 'image'); close(); }, 'image/jpeg', 0.9);
        return;
      }
      // videyo: tap pou kòmanse, tap ankò pou sispann
      if (!recorder || recorder.state === 'inactive') {
        chunks = [];
        recorder = new MediaRecorder(stream, { mimeType: MediaRecorder.isTypeSupported('video/mp4') ? 'video/mp4' : 'video/webm' });
        recorder.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: recorder.mimeType || 'video/webm' });
          onCapture(blob, 'video');
          close();
        };
        recorder.start();
        recStart = Date.now();
        shootBtn.classList.add('recording');
        timerEl.classList.add('on');
        recTimer = setInterval(() => { timerEl.textContent = fmtDuration((Date.now() - recStart) / 1000); }, 250);
      } else {
        recorder.stop();
        clearInterval(recTimer);
        shootBtn.classList.remove('recording');
      }
    };
  }

  /* ---------------------------------------------------------------------
   * Ekran: Lis konvèzasyon
   * ------------------------------------------------------------------- */
  async function renderList() {
    const canPost = me.role === 'super_admin' || me.role === 'employer';
    if (canPost) { try { await loadAudienceOptions(); } catch (_) {} }

    host.innerHTML = `
      <section class="v86-convlist" aria-label="Mesaj">
        <div class="v86-convlist-head">
          <strong><i class="fa-solid fa-comments"></i> Mesaj</strong>
          ${canPost ? `<button type="button" class="v86-new-btn" id="v86-new"><i class="fa-solid fa-pen"></i> Nouvo Anons</button>` : ''}
        </div>
        <div id="v86-conv-rows"><div class="spinner"></div></div>
      </section>`;

    const rowsHost = host.querySelector('#v86-conv-rows');
    if (canPost) host.querySelector('#v86-new').onclick = openAudiencePicker;

    try {
      const { data, error } = await SB().rpc('jl86_rpc_conversations_list');
      if (error) throw error;
      const list = data || [];
      if (!list.length) {
        rowsHost.innerHTML = `<div class="v785-empty" style="padding:2rem"><i class="fa-regular fa-comment-dots"></i><strong>Okenn konvèzasyon</strong><span>${canPost ? 'Klike "Nouvo Anons" pou kòmanse.' : 'Anons ki vize w yo ap parèt isit.'}</span></div>`;
        return;
      }
      rowsHost.innerHTML = list.map(c => {
        const lbl = convLabel(c);
        const time = new Date(c.last_at).toLocaleDateString('fr-HT', { day: '2-digit', month: '2-digit' });
        const preview = c.last_body ? c.last_body : (c.last_media_type === 'audio' ? '🎤 Nòt vokal' : c.last_media_type === 'video' ? '🎥 Videyo' : c.last_media_type === 'image' ? '📷 Foto' : '');
        return `<div class="v86-conv-row" data-conv='${esc(JSON.stringify(c))}'>
          <div class="v86-conv-avatar"><i class="fa-solid ${lbl.icon}"></i></div>
          <div class="v86-conv-body">
            <div class="v86-conv-title">${esc(lbl.title)} ${lbl.tag ? `<span class="v86-conv-tag">${esc(lbl.tag)}</span>` : ''}</div>
            <div class="v86-conv-sub">${esc(preview || lbl.sub)}</div>
          </div>
          <div class="v86-conv-meta">
            <span class="v86-conv-time">${time}</span>
            ${c.unread_count ? `<span class="v86-conv-unread">${c.unread_count > 99 ? '99+' : c.unread_count}</span>` : ''}
          </div>
        </div>`;
      }).join('');
      rowsHost.querySelectorAll('.v86-conv-row').forEach(row => row.onclick = () => {
        currentConv = JSON.parse(row.dataset.conv);
        screen = 'thread';
        renderScreen();
      });
    } catch (e) {
      rowsHost.innerHTML = `<div class="v785-empty" style="padding:2rem"><i class="fa-solid fa-triangle-exclamation"></i><span>${esc(e.message || e)}</span></div>`;
    }
  }

  /* ---------------------------------------------------------------------
   * Ekran: Konvèzasyon (tred mesaj)
   * ------------------------------------------------------------------- */
  async function renderThread() {
    const canPost = me.role === 'super_admin' || me.role === 'employer';
    const lbl = convLabel(currentConv);
    const isNew = !currentConv.conversation_key;

    host.innerHTML = `
      <section class="v785-chat" aria-label="${esc(lbl.title)}">
        <header class="v785-header">
          <button type="button" class="v785-back" id="v785-back" aria-label="Retou"><i class="fa-solid fa-chevron-left"></i></button>
          <div class="v785-channel-avatar" aria-hidden="true"><i class="fa-solid ${lbl.icon}"></i></div>
          <div class="v785-head-copy"><strong>${esc(lbl.title)}</strong><span>${esc(lbl.sub)}</span></div>
          <div class="v785-head-spacer"></div>
          ${canPost ? `<button type="button" class="v86-audience-btn" id="v86-thread-audience"><i class="fa-solid fa-users"></i> Audience</button>` : ''}
        </header>
        <div class="v785-thread" id="v785-thread">${isNew ? `<div class="v785-empty"><i class="fa-regular fa-paper-plane"></i><strong>Nouvo konvèzasyon</strong><span>Ekri premye mesaj ou pou audience sa a.</span></div>` : `<div class="v785-day">${greeting()}</div><div class="spinner"></div>`}</div>
        ${canPost ? `
        <form class="v785-compose" id="v785-compose">
          <div class="v785-attach-preview" id="v785-preview" hidden>
            <div class="v785-attach-card">
              <div class="v785-attach-thumb" id="v785-preview-thumb"></div>
              <div class="v785-attach-info"><span class="v785-attach-name" id="v785-preview-name"></span><span class="v785-attach-type" id="v785-preview-type"></span></div>
              <button type="button" class="v785-attach-remove" id="v785-preview-remove" aria-label="Retire fichye a"><i class="fa-solid fa-xmark"></i></button>
            </div>
          </div>
          <div class="v785-compose-row">
            <button type="button" class="v785-add" id="v785-photo" aria-label="Ajoute yon foto oswa videyo"><i class="fa-solid fa-paperclip"></i></button>
            <button type="button" class="v785-add" id="v86-camera-btn" aria-label="Kamera"><i class="fa-solid fa-camera"></i></button>
            <input id="v785-file" type="file" accept="image/*,video/*" hidden>
            <div class="v785-input-wrap"><textarea id="v785-body" rows="1" placeholder="Mesaj" aria-label="Mesaj"></textarea></div>
            <button type="button" class="v86-rec-btn" id="v86-voice-btn" aria-label="Anrejistre nòt vokal"><i class="fa-solid fa-microphone"></i></button>
            <button type="submit" class="v785-send" aria-label="Voye"><i class="fa-solid fa-arrow-up"></i></button>
          </div>
        </form>` : `
        <div class="v785-readonly"><i class="fa-solid fa-bullhorn"></i><span>Sèlman Super Admin ak Mini Super Admin ka pibliye anons.</span></div>`}
      </section>`;

    const thread = host.querySelector('#v785-thread');
    host.querySelector('#v785-back').onclick = () => { screen = 'list'; currentConv = null; renderScreen(); };
    const audBtn = host.querySelector('#v86-thread-audience');
    if (audBtn) audBtn.onclick = async () => {
      try {
        const { data, error } = await SB().rpc('jl86_rpc_resolve_audience_preview', {
          _type: currentConv.audience_type, _scope: currentConv.audience_scope,
          _company_ids: currentConv.audience_company_ids, _agent_ids: currentConv.audience_agent_ids
        });
        if (error) throw error;
        const rows = data || [];
        openPanel('Audience — Moun ki gen dwa li', `<div class="v86-panel-help"><i class="fa-solid fa-users"></i> ${rows.length} moun gen dwa wè konvèzasyon sa a.</div>` +
          (rows.length ? rows.map(r => `<div class="v86-recipient-row"><div class="v86-recipient-name">${esc(r.full_name)}<div class="v86-recipient-sub">${esc(r.role === 'company' ? 'Admin Konpayi' : r.role === 'agent' ? 'Ajan' : r.role)}${r.company_name ? ' · ' + esc(r.company_name) : ''}</div></div></div>`).join('') : '<div class="empty">Okenn moun.</div>'));
      } catch (e) { L.toast(e.message || 'Nou pa t ka chaje audience a.', 'error'); }
    };

    function wireMessageActions() {
      thread.querySelectorAll('.v785-del[data-id]').forEach(btn => {
        btn.onclick = async () => {
          if (!confirm('Efase mesaj sa a?')) return;
          btn.disabled = true;
          try {
            const { error } = await SB().rpc('jl85_rpc_announcement_delete', { _id: btn.dataset.id });
            if (error) throw error;
            L.toast('Mesaj efase.', 'success');
            await load(true);
          } catch (e) { L.toast(e.message || 'Nou pa t ka efase mesaj la.', 'error'); btn.disabled = false; }
        };
      });
      thread.querySelectorAll('.v785-restore').forEach(btn => {
        btn.onclick = async () => {
          btn.disabled = true;
          try {
            const { error } = await SB().rpc('jl85_rpc_announcement_restore', { _id: btn.dataset.id });
            if (error) throw error;
            L.toast('Mesaj retabli.', 'success');
            await load(true);
          } catch (e) { L.toast(e.message || 'Nou pa t ka retabli mesaj la.', 'error'); btn.disabled = false; }
        };
      });
      thread.querySelectorAll('[data-receipts]').forEach(btn => {
        btn.onclick = () => showReceipts(btn.dataset.receipts);
      });
      thread.querySelectorAll('[data-view-media]').forEach(el => {
        el.onclick = () => window.Lotri.openMediaViewer({ url: el.dataset.viewMedia, type: el.dataset.viewType });
      });
      thread.querySelectorAll('.v86-voice-msg').forEach(el => {
        const btn = el.querySelector('.v86-voice-play');
        let audio = null;
        btn.onclick = () => {
          if (!audio) { audio = new Audio(el.dataset.play); audio.onended = () => { btn.innerHTML = '<i class="fa-solid fa-play"></i>'; }; }
          if (audio.paused) { audio.play(); btn.innerHTML = '<i class="fa-solid fa-pause"></i>'; }
          else { audio.pause(); btn.innerHTML = '<i class="fa-solid fa-play"></i>'; }
        };
      });
    }

    const load = async (keepBottom = true) => {
      if (isNew) return;
      try {
        const wasNearBottom = thread.scrollHeight - thread.scrollTop - thread.clientHeight < 80;
        const { data, error } = await SB().from('jl85_announcements').select('*')
          .eq('conversation_key', currentConv.conversation_key).order('created_at', { ascending: true }).limit(500);
        if (error) throw error;
        const rows = data || [];
        thread.innerHTML = `<div class="v785-day">${greeting()}</div>` +
          (rows.length ? rows.map(m => renderMessage(m)).join('') : `<div class="v785-empty"><i class="fa-regular fa-bell"></i><strong>Okenn mesaj</strong></div>`);
        wireMessageActions();
        if (keepBottom || wasNearBottom) requestAnimationFrame(() => scrollBottom(thread, false));
        const unreadIds = rows.filter(m => String(m.author_id) !== String(me.id)).map(m => m.id);
        // KOREKSYON: builder Supabase la se yon "thenable" (li gen .then() sèlman,
        // li PA gen .catch()). Rele .catch() dirèkteman sou li te jete yon
        // TypeError anndan menm try/catch ki ranpli mesaj yo — sa te fè tout
        // mesaj ki te fèk afiche yo ranplase pa yon ekran erè. .then(ok, err)
        // fè menm travay la san risk sa a, e li mache kit rekèt la reyisi kit li echwe.
        if (unreadIds.length) {
          SB().rpc('jl86_rpc_announcement_mark_read', { _ids: unreadIds }).then(() => {}, () => {});
        }
      } catch (e) {
        thread.innerHTML = `<div class="v785-empty"><i class="fa-solid fa-triangle-exclamation"></i><span>${esc(e.message || e)}</span></div>`;
      }
    };

    if (canPost) {
      const form = host.querySelector('#v785-compose');
      const body = host.querySelector('#v785-body');
      const file = host.querySelector('#v785-file');
      const preview = host.querySelector('#v785-preview');
      const previewThumb = host.querySelector('#v785-preview-thumb');
      const previewName = host.querySelector('#v785-preview-name');
      const previewType = host.querySelector('#v785-preview-type');
      const previewRemove = host.querySelector('#v785-preview-remove');
      let previewUrl = null, pendingBlob = null, pendingKind = null, pendingName = null;

      const clearPreview = () => {
        if (previewUrl) { URL.revokeObjectURL(previewUrl); previewUrl = null; }
        preview.hidden = true; previewThumb.innerHTML = ''; file.value = '';
        pendingBlob = null; pendingKind = null; pendingName = null;
      };

      function setPreview(blobOrFile, kind, name) {
        pendingBlob = blobOrFile; pendingKind = kind; pendingName = name || (kind === 'video' ? 'Videyo.mp4' : 'Foto.jpg');
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        previewUrl = URL.createObjectURL(blobOrFile);
        previewThumb.innerHTML = kind === 'video'
          ? `<video src="${previewUrl}" muted playsinline preload="metadata"></video><i class="fa-solid fa-circle-play v785-attach-playicon" aria-hidden="true"></i>`
          : `<img src="${previewUrl}" alt="">`;
        previewName.textContent = pendingName;
        previewType.textContent = kind === 'video' ? 'Videyo' : 'Foto';
        preview.hidden = false;
      }

      host.querySelector('#v785-photo').onclick = () => file.click();
      file.onchange = () => {
        const f = file.files && file.files[0];
        if (!f) { clearPreview(); return; }
        setPreview(f, /^video\//i.test(f.type) ? 'video' : 'image', f.name);
      };
      previewRemove.onclick = () => clearPreview();

      host.querySelector('#v86-camera-btn').onclick = () => {
        openCamera((blob, kind) => setPreview(blob, kind, kind === 'video' ? 'Videyo-kamera.mp4' : 'Foto-kamera.jpg'));
      };

      body.addEventListener('input', () => { body.style.height = 'auto'; body.style.height = Math.min(body.scrollHeight, 120) + 'px'; });

      async function sendMessage({ text, mediaBlob, mediaKind, mediaName, audioDuration }) {
        const send = form.querySelector('.v785-send');
        send.disabled = true;
        try {
          let image_url = null, image_name = null, media_type = 'image', duration = null;
          if (mediaBlob) {
            const up = await uploadMedia(mediaBlob, mediaName, me, mediaKind);
            image_url = up.url; image_name = up.name; media_type = mediaKind;
            if (mediaKind === 'audio') duration = audioDuration;
          }
          const { data, error } = await SB().rpc('jl86_rpc_announcement_send', {
            _body: text || '', _image_url: image_url, _image_name: image_name, _media_type: media_type,
            _duration_seconds: duration,
            _audience_type: currentConv.audience_type, _audience_scope: currentConv.audience_scope,
            _company_ids: currentConv.audience_company_ids, _agent_ids: currentConv.audience_agent_ids
          });
          if (error) throw error;
          if (data && data.conversation_key) currentConv.conversation_key = data.conversation_key;
          body.value = ''; body.style.height = 'auto'; clearPreview();
          L.toast('Mesaj pibliye' + (data && data.recipient_count ? ` — ${data.recipient_count} moun ap resevwa l.` : '.'), 'success');
          if (isNewFlag()) { renderThread(); return; }
          await load(true);
        } catch (err) { L.toast(err.message || 'Nou pa t ka voye mesaj la.', 'error'); }
        finally { send.disabled = false; }
      }
      function isNewFlag() { return !thread.querySelector('.v785-msg') && !!currentConv.conversation_key; }

      form.onsubmit = async e => {
        e.preventDefault();
        const text = body.value.trim();
        if (!text && !pendingBlob) return;
        await sendMessage({ text, mediaBlob: pendingBlob, mediaKind: pendingKind, mediaName: pendingName });
      };

      wireVoiceRecorder(host, async (blob, durSec) => {
        await sendMessage({ text: '', mediaBlob: blob, mediaKind: 'audio', mediaName: 'nòt-vokal.webm', audioDuration: durSec });
      });
    }

    await load(true);
    if (pollTimer) clearInterval(pollTimer);
    pollTimer = setInterval(() => { if (screen === 'thread' && !isNew) load(false).catch(() => {}); }, 15000);
    (L.pendingTimers ||= []).push(pollTimer);
  }

  /* ---------------------------------------------------------------------
   * Wout prensipal
   * ------------------------------------------------------------------- */
  async function renderScreen() {
    if (pollTimer) { clearInterval(pollTimer); pollTimer = null; }
    if (screen === 'thread' && currentConv) await renderThread();
    else await renderList();
  }

  async function render(h) {
    host = h;
    me = await L.getProfile();
    if (!me) { host.innerHTML = '<div class="empty">Profil utilisateur introuvable.</div>'; return; }
    screen = 'list'; currentConv = null;
    await renderScreen();
  }

  if (window.LotriShell) window.LotriShell.register('messages', { render });
})();


/* =====================================================================
 * JADSTACK LOTTO V11 — TIRAJ, BOUL REYALIS & REZILTA (3 LO)
 * ---------------------------------------------------------------------
 *  • Antèt sticky ki montre chak tiraj: logo (oswa boul reyalis ak lèt),
 *    non tiraj, epi 3 rezilta yo (1ye pi gwo, 2yèm mwayen, 3yèm pi piti).
 *  • Popup rezilta apre chak rafrechisman paj:
 *      – Superadmin: konfigire pou tout moun
 *      – Compagnie   : konfigire pwòp «lòt bolèt» li si Superadmin poko fè l
 *      – Agent      : gade selman
 *  • Sou-paj `rezilta` («kire rezilta»): tiraj fermer ki poko gen rezilta.
 *  • Avètisman 35 min anvan fèmti + rapèl sou chak aksyon.
 * ===================================================================== */
(function () {
  const L = window.Lotri, v11 = L.v11, SB = () => L.supabase, esc = L.escapeHtml;
  // Liste de référence demandée: les autres tirages restent invisibles et peuvent être désactivés via Super Admin.
  const KEEP = new Set(['GEORGIA MIDI','TEXAS MIDI','FLORIDA MIDI','NEW YORK MIDI','GEORGIA SOIR','TEXAS SOIR','TENNESSEE SOIR','FLORIDA SOIR','TENNESSEE MIDI','TENNESSEE MATIN','NEW YORK SOIR','TEXAS MATIN','TEXAS NIGHT','GEORGIA NIGHT']);
  const norm = v => String(v || '').trim().toUpperCase().replace(/\s+/g,' ');
  L.v72DrawWhitelist = L.v72DrawWhitelist || { keep: n => KEEP.has(norm(n)), names: () => Array.from(KEEP), norm };
  // V74 — date locale (évite le décalage UTC sur mobile) et rafraîchissement de la barre.
  const localDate = (d = new Date()) => {
    const x = new Date(d);
    const y = x.getFullYear(), m = String(x.getMonth() + 1).padStart(2, '0'), day = String(x.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };
  const today = () => localDate();
  const displayDate = (iso = today()) => {
    const [y, m, d] = String(iso).split('-');
    return y && m && d ? `${d}-${m}-${y}` : iso;
  };

  async function loadDraws() {
    const drawDate = today();
    const [{ data: media, error: mediaError }, { data: res, error: resultsError }] = await Promise.all([
      SB().from('jl11_draw_media').select('*').eq('active', true).order('sort_order'),
      SB().from('jl11_draw_results').select('*').eq('draw_date', drawDate)
    ]);
    if (mediaError) console.warn('[V74 results] media', mediaError);
    if (resultsError) console.warn('[V74 results] results', resultsError);

    const p = window.__lotriProfile || {};
    const byMedia = {};
    (res || []).forEach(r => {
      // Priorité : résultat de la compagnie courante, sinon résultat global existant.
      const isOwnCompany = r.scope === 'company' && p.company_id && r.company_id === p.company_id;
      const isGlobal = !r.scope || r.scope === 'global';
      const cur = byMedia[r.media_id];
      if (!cur || isOwnCompany || (isGlobal && cur.scope !== 'company')) byMedia[r.media_id] = r;
    });

    return (media || [])
      .filter(m => KEEP.has(norm(m.display_name)))
      .map(m => ({ ...m, result: byMedia[m.id] || null }))
      .sort((a, b) => String(a.close_time || '99:99').localeCompare(String(b.close_time || '99:99')));
  }

  function ball(d) {
    const color = d.color || v11.color(d.display_name);
    return d.logo_url
      ? `<span class="v11-ball"><img src="${esc(d.logo_url)}" alt="${esc(d.display_name)}"></span>`
      : `<span class="v11-ball" style="--ball:${color}">${esc(v11.initial(d.display_name))}</span>`;
  }

  function lots(r) {
    const values = r ? [r.lot1, r.lot2, r.lot3].filter(v => v != null && String(v).trim() !== '') : [];
    if (!values.length) return `<span class="v11-awaiting"><i class="fa-solid fa-clock"></i> En attente</span>`;
    return `<span class="v11-lots">${values.map((v, i) =>
      `<span class="v11-lot l${i + 1}">${esc(v)}</span>`).join('')}</span>`;
  }

  /* ---------- Antèt sticky vizib sou tout paj ---------- */
  async function mountHeader() {
    if (document.getElementById('v11-draws')) return;
    const shell = document.getElementById('shell');
    if (!shell) return;
    const bar = document.createElement('div');
    bar.className = 'v11-draws';
    bar.id = 'v11-draws';
    bar.innerHTML = `<div class="hd"><span class="v11-results-title"><i class="fa-solid fa-trophy"></i> Résultats des tirages</span><span class="v11-results-date">${displayDate(today())}</span>
      <button type="button" id="v11-draws-tog" aria-label="Réduire"><i class="fa-solid fa-chevron-up"></i></button></div>
      <div class="strip"><div class="spinner"></div></div>`;
    const view = document.getElementById('view');
    view.parentNode.insertBefore(bar, view);
    bar.querySelector('#v11-draws-tog').onclick = () => {
      bar.classList.toggle('collapsed');
      localStorage.setItem('v11-draws-collapsed', bar.classList.contains('collapsed') ? '1' : '0');
    };
    if (localStorage.getItem('v11-draws-collapsed') === '1') bar.classList.add('collapsed');
    await paintHeader();
  }

  async function paintHeader() {
    const bar = document.getElementById('v11-draws');
    if (!bar || bar.classList.contains('is-loading')) return;
    bar.classList.add('is-loading');
    try {
      const draws = await loadDraws();
      const strip = bar.querySelector('.strip');
      strip.innerHTML = draws.map(d => `
        <button type="button" class="v11-draw" data-draw="${esc(d.id)}" aria-label="Voir le résultat de ${esc(d.display_name)}">
          <span class="v11-draw-logo">${ball(d)}</span>
          <span class="nm">${esc(d.display_name)}</span>
          <span class="v11-draw-time"><i class="fa-regular fa-clock"></i> ${esc(d.close_time || '—')}</span>
          ${lots(d.result)}
        </button>`).join('') || '<div class="v11-results-empty"><i class="fa-solid fa-circle-info"></i><span>Aucun tirage autorisé disponible.</span></div>';

      strip.querySelectorAll('[data-draw]').forEach(el => el.onclick = () => {
        const d = draws.find(x => String(x.id) === el.dataset.draw);
        if (d) openResultCard(d);
      });
    } finally {
      bar.classList.remove('is-loading');
    }
  }

  /* ---------- Card / popup rezilta pou un tirage ---------- */
  function canEdit(role) { return role === 'super_admin' || role === 'company' || role === 'employer'; }

  function openResultCard(d) {
    const p = window.__lotriProfile || {};
    const r = d.result || {};
    const editable = canEdit(p.role);
    const body = `
      <div style="display:flex;gap:.9rem;align-items:center">${ball(d)}
        <div><strong>${esc(d.display_name)}</strong>
        <div class="muted" style="font-size:.75rem">Fèmti: ${esc(d.close_time || '—')} · ${today()}</div></div></div>
      ${editable ? `
        <div class="form-grid" style="margin-top:1rem">
          <div><label class="label">1ye lo (pi gwo)</label><input class="input" id="l1" maxlength="8" value="${esc(r.lot1 || '')}"></div>
          <div><label class="label">2e lot</label><input class="input" id="l2" maxlength="8" value="${esc(r.lot2 || '')}"></div>
          <div><label class="label">3e lot</label><input class="input" id="l3" maxlength="8" value="${esc(r.lot3 || '')}"></div>
        </div>
        <p class="muted" style="font-size:.74rem;margin-top:.5rem">
          ${(p.role === 'super_admin' || p.role === 'employer')
            ? 'Vous saisissez le résultat officiel pour tout le monde (vous pouvez aussi le corriger).'
            : 'Vous saisissez votre « autre borlette » — elle est valable uniquement pour votre compagnie. Seuls 3 lots sont acceptés.'}</p>`
        : `<div style="margin-top:1rem;text-align:center;font-size:1.4rem">${lots(r)}</div>
           <p class="muted" style="font-size:.74rem;text-align:center">C\'est votre compagnie ou l\'administration qui saisit les résultats.</p>`}`;

    const pop = v11.popup('Résultats des tirages', body, {
      subtitle: d.display_name,
      footer: editable
        ? `<button class="btn btn-ghost" id="goto">Voir tous les tirages</button>
           <button class="btn btn-primary" id="save"><i class="fa-solid fa-check"></i> Enregistrer</button>`
        : `<button class="btn btn-ghost" id="goto">Voir tous les tirages</button>`
    });
    pop.el.querySelector('#goto').onclick = () => { pop.close(); LotriShell.go('rezilta'); };
    const btn = pop.el.querySelector('#save');
    if (btn) btn.onclick = async () => {
      const g = id => (pop.el.querySelector('#' + id).value || '').trim() || null;
      if (!g('l1')) { L.toast('Le 1er lot est obligatoire.', 'error'); return; }
      const { error } = await SB().rpc('jl11_rpc_set_result', {
        _media: d.id, _date: today(), _lot1: g('l1'), _lot2: g('l2'), _lot3: g('l3'),
        _scope: (p.role === 'super_admin' || p.role === 'employer') ? 'global' : 'company'
      });
      if (error) { L.toast(error.message, 'error'); return; }
      pop.close(); L.toast('Résultat enregistré.', 'success');
      paintHeader();
    };
  }

  /* ---------- Sou-paj «rezilta jadya» ---------- */
  LotriShell.register('rezilta', {
    render: async (host) => {
      const p = await L.getProfile();
      const draws = await loadDraws();
      const pending = draws.filter(d => !d.result);
      host.innerHTML = `
        ${v11.crumbs([{ label: 'dashboard', view: 'dashboard' }, { label: 'tirage' }, { label: 'rezilta' }])}
        <div class="page-hd"><h2>Résultats des tirages</h2>
          <p class="muted">${pending.length
            ? pending.length + ' tirages n\'ont pas encore de résultat pour aujourd\'hui.'
            : 'Tous les tirages ont un résultat pour aujourd\'hui.'}</p></div>
        <div class="card v77-results-card"><div class="table-wrap"><table class="table">
          <thead><tr><th>Tirage</th><th>Fèmti</th><th>1ye lo</th><th>2yèm</th><th>3yèm</th><th>Sous</th><th></th></tr></thead>
          <tbody>${draws.map(d => {
            const r = d.result || {};
            return `<tr data-v11-title="${esc(d.display_name)}" data-v11-row='${esc(JSON.stringify({
              Tirage: d.display_name, Fèmti: d.close_time || '—',
              '1ye lo': r.lot1 || '—', '2e lot': r.lot2 || '—', '3e lot': r.lot3 || '—',
              Sous: r.scope === 'company' ? 'Autres borlettes de la compagnie' : (r.scope ? 'Ofisyèl' : 'Nom renseigné')
            }))}'>
              <td><div class="v77-result-draw">${ball(d)}<span><span class="v77-result-name">${esc(d.display_name)}</span><span class="v77-result-sub">Fermeture ${esc(d.close_time || '—')}</span></span></div></td>
              <td>${esc(d.close_time || '—')}</td>
              <td class="mono"><span class="v77-result-number">${esc(r.lot1 || '—')}</span></td>
              <td class="mono"><span class="v77-result-number">${esc(r.lot2 || '—')}</span></td>
              <td class="mono"><span class="v77-result-number">${esc(r.lot3 || '—')}</span></td>
              <td>${r.scope === 'company' ? '<span class="badge">Autre bolèt</span>'
                   : r.scope ? '<span class="badge badge-success">Ofisyèl</span>'
                   : '<span class="badge badge-warning">Nom renseigné</span>'}
                ${r.updated_at && (Date.now() - new Date(r.updated_at).getTime()) < 3 * 3600 * 1000
                  ? '<span class="badge badge-danger" style="margin-left:.3rem">Nouvo</span>' : ''}</td>
              <td><button class="btn btn-sm" data-open="${d.id}">
                ${canEdit(p.role) ? '<i class="fa-solid fa-pen"></i> Saisir le résultat' : '<i class="fa-solid fa-eye"></i> Voir'}</button></td>
            </tr>`;
          }).join('')}</tbody></table></div></div>`;
      v11.wireRows(host);
      host.querySelectorAll('[data-open]').forEach(b => b.onclick = e => {
        e.stopPropagation();
        openResultCard(draws.find(d => d.id === b.dataset.open));
      });
    }
  });

  /* ---------- Avètisman otomatik (35 min anvan / tiraj fermer) ---------- */
  async function alerts() {
    const p = window.__lotriProfile;
    if (!p) return;
    const draws = await loadDraws();
    const now = new Date();
    for (const d of draws) {
      if (!d.close_time || d.result) continue;
      const [h, m] = String(d.close_time).split(':').map(Number);
      const close = new Date(now); close.setHours(h, m, 0, 0);
      const mins = (close - now) / 60000;
      let stage = null;
      if (mins <= 35 && mins > 0) stage = 'warn35';
      else if (mins <= 0) stage = 'closed';
      if (!stage) continue;
      const { error } = await SB().from('jl11_result_alerts')
        .insert({ media_id: d.id, draw_date: today(), stage });
      if (error) continue; // deja voye (unique)
      const msg = stage === 'warn35'
        ? `Le tirage ${d.display_name} ferme dans 35 minutes — le résultat n\'est pas encore saisi.`
        : `Le tirage ${d.display_name} est fermé — le résultat n\'est pas encore saisi.`;
      if (p.role === 'super_admin' || p.role === 'company' || p.role === 'employer') {
        v11.toastLink(msg, 'rezilta', 'warn');
      }
      try {
        if (L.mailer && L.mailer.send) L.mailer.send({ subject: 'JADSTACK LOTTO — résultats', body: msg });
      } catch (_) { }
    }
  }

  /* ---------- Card rezilta apre chak rafrechisman ---------- */
  async function firstLoadCard() {
    const p = window.__lotriProfile;
    if (!p) return;
    const draws = await loadDraws();
    const missing = draws.filter(d => !d.result);
    if (!missing.length) return;
    if (sessionStorage.getItem('v11-result-card') === today()) return;
    sessionStorage.setItem('v11-result-card', today());
    const rows = missing.map(d => `<div class="v11-item" data-d="${d.id}">${ball(d)}
        <div class="meta"><div class="nm">${esc(d.display_name)}</div>
        <div class="sub">Fèmti ${esc(d.close_time || '—')} · résultat pas encore saisi</div></div></div>`).join('');
    const pop = v11.popup('Résultats d\'aujourd\'hui', `<div class="v11-list">${rows}</div>`, {
      subtitle: p.role === 'agent' ? 'Les résultats ne sont pas encore disponibles' : 'Cliquez sur un tirage pour saisir le résultat',
      footer: '<button class="btn btn-primary" id="all">Aller à la page des résultats</button>'
    });
    pop.el.querySelector('#all').onclick = () => { pop.close(); LotriShell.go('rezilta'); };
    pop.el.querySelectorAll('[data-d]').forEach(el => el.onclick = () => {
      pop.close(); openResultCard(missing.find(d => d.id === el.dataset.d));
    });
  }

  // V74 — mise à jour périodique des données réelles déjà fournies par le backend backend existant.
  let v74RefreshTimer = null;
  function startV74ResultsRefresh() {
    clearInterval(v74RefreshTimer);
    v74RefreshTimer = setInterval(() => {
      if (!document.hidden) paintHeader().catch(() => {});
    }, 60000);
  }
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) paintHeader().catch(() => {});
  });
  document.addEventListener('lotri:ready', () => {
    setTimeout(async () => {
      await mountHeader();
      await firstLoadCard();
      await alerts();
      startV74ResultsRefresh();
    }, 600);
  });
  /* chak aksyon (chanjman vi) re-verifye avètisman yo */
  document.addEventListener('lotri:view', () => { paintHeader(); alerts(); });
})();


/* =====================================================================
 * JADSTACK LOTTO V11 — FAKTIRASYON & PEMAN
 * ---------------------------------------------------------------------
 *  • Blòk «Où payer» pinned nan tèt TOUT paj faktirasyon,
 *    minimalis, pliyab/deplwayab, men toujou vizib.
 *  • Yon SÈL klik sou «Payé» ouvri fòm deklarasyon an (pa gen lòt paj).
 *  • Montant an dwe EGZAT (fakti 500 HTG pa aksepte 499 HTG).
 *  • Deklare = peye: san deklarasyon, peman an pa gen valè.
 *  • Konfimasyon superadmin ak rezon («mwen jwenn li» / «pa jwenn li»),
 *    mesaj la rete PRIVE ant Superadmin ak Konpayi.
 * ===================================================================== */
(function () {
  const L = window.Lotri, v11 = L.v11, SB = () => L.supabase, esc = L.escapeHtml;
  const money = v11.money;

  async function methods() {
    const { data } = await SB().from('jl11_payment_methods')
      .select('*').eq('active', true).order('sort_order');
    return data || [];
  }

  /* ---------- Blòk peman pinned ---------- */
  v11.payBar = async function () {
    const ops = await methods();
    return `<details class="v11-paybar" open>
      <summary><i class="fa-solid fa-wallet"></i> Où payer
        <i class="fa-solid fa-chevron-right chev"></i></summary>
      <div class="v11-pay-grid">
        ${ops.map(o => `<div class="v11-pay-op">
          ${o.image_url ? `<img src="${esc(o.image_url)}" alt="${esc(o.name)}">`
            : `<span class="v11-av" style="--av:${v11.color(o.name)}">${esc(v11.initial(o.name))}</span>`}
          <div><div class="nm">${esc(o.name)}</div>
            <div class="no">${esc(o.phone || '')}</div>
            <div>${esc(o.account_name || 'JADSTACK STUDIO')}</div>
            <div class="hint">${esc(o.instructions || '')}</div></div>
        </div>`).join('') || '<div class="hint">Aucun moyen de paiement configuré.</div>'}
      </div></details>`;
  };

  /* ---------- Fòm deklarasyon (yon sèl klik sou «Payé») ---------- */
  v11.declare = async function (invoice, onDone) {
    const ops = await methods();
    const pop = v11.popup('Déclarer le paiement', `
      <p class="muted" style="font-size:.8rem">Facture <strong>${esc(invoice.number || invoice.id.slice(0, 8))}</strong> —
        montan <strong>${money(invoice.amount)}</strong>. Déclaration an <strong>egal peman an</strong>:
        si w pa deklare, peman an pa gen valè.</p>
      <div class="form-grid" style="margin-top:.8rem">
        <div><label class="label">Mwayen</label><select class="select" id="m">
          ${ops.map(o => `<option value="${esc(o.name)}">${esc(o.name)}</option>`).join('')}</select></div>
        <div><label class="label">Trans ID</label><input class="input" id="tid" required></div>
        <div><label class="label">Montant egzat (HTG)</label>
          <input class="input" id="amt" type="number" step="0.01" value="${Number(invoice.amount).toFixed(2)}"></div>
      </div>
      <div style="margin-top:.8rem"><label class="label">Imaj konfimasyon</label><br>
        ${v11.imgInput({ folder: 'proofs', label: 'Foto resi a', wide: true })}</div>`,
      { footer: '<button class="btn btn-primary" id="ok"><i class="fa-solid fa-check"></i> Déclarer & payer</button>' });

    let proof = null;
    pop.el.addEventListener('v11:image', e => { proof = e.detail.url; });
    pop.el.querySelector('#ok').onclick = async () => {
      const amt = Number(pop.el.querySelector('#amt').value);
      const tid = pop.el.querySelector('#tid').value.trim();
      if (!tid) { L.toast('Trans ID a obligatwa.', 'error'); return; }
      if (Math.round(amt * 100) !== Math.round(Number(invoice.amount) * 100)) {
        L.toast('Le montant doit être EXACT : ' + money(invoice.amount), 'error'); return;
      }
      const { error } = await SB().rpc('jl11_rpc_declare_payment', {
        _invoice: invoice.id, _method: pop.el.querySelector('#m').value,
        _trans_id: tid, _amount: amt, _proof: proof
      });
      if (error) { L.toast(error.message, 'error'); return; }
      pop.close();
      L.toast('Déclaration enregistrée — le Super Administrateur est notifié.', 'success');
      onDone && onDone();
    };
  };

  /* ---------- Vi faktirasyon konpayi ---------- */
  LotriShell.register('invoices', {
    render: async (host) => {
      const p = await L.getProfile();
      const bar = await v11.payBar();
      const draw = async () => {
        const { data, error } = await SB().from('jl9_invoices').select('*')
          .eq('company_id', p.company_id).order('due_date', { ascending: false }).limit(200);
        if (error) { host.querySelector('#tbl').innerHTML = `<div class="empty">${esc(error.message)}</div>`; return; }
        const f = v11.readFilters(host);
        const rows = v11.applyDate(data || [], 'due_date', f);
        host.querySelector('#tbl').innerHTML = rows.length ? `
          <div class="table-wrap"><table class="table"><thead><tr>
            <th>Facture</th><th>Période</th><th class="num">Montant</th><th>Echeyans</th><th>Statut</th><th></th>
          </tr></thead><tbody>${rows.map(i => `
            <tr data-v11-title="Facture ${esc(i.number || i.id.slice(0, 8))}" data-v11-row='${esc(JSON.stringify({
              Facture: i.number || i.id, Montant: money(i.amount), Echeyans: i.due_date,
              Statut: i.status, Période : i.period || '—'
            }))}'>
              <td class="mono">${esc(i.number || i.id.slice(0, 8))}</td>
              <td>${esc(i.period || '—')}</td>
              <td class="num">${money(i.amount)}</td>
              <td>${esc(i.due_date || '—')}</td>
              <td><span class="badge ${i.status === 'paid' ? 'badge-success' : i.status === 'declared' ? 'badge-warning' : 'badge-danger'}">${esc(i.status)}</span></td>
              <td>${['unpaid', 'overdue'].includes(i.status)
                ? `<button class="btn btn-sm btn-primary" data-pay="${i.id}"><i class="fa-solid fa-money-bill-wave"></i> Payé</button>`
                : ''}</td></tr>`).join('')}</tbody></table></div>`
          : '<div class="empty"><i class="fa-solid fa-file-invoice"></i>Aucune facture.</div>';
        v11.wireRows(host);
        host.querySelectorAll('[data-pay]').forEach(b => b.onclick = ev => {
          ev.stopPropagation();
          v11.declare((data || []).find(x => x.id === b.dataset.pay), draw);
        });
      };
      host.innerHTML = `
        ${v11.crumbs([{ label: 'dashboard', view: 'dashboard' }, { label: 'finans' }, { label: 'faktirasyon' }])}
        ${bar}
        <div class="page-hd"><h2>Faktirasyon</h2>
          <p class="muted">Un seul clic sur « Payé » ouvre la déclaration. Le montant doit être exact.</p></div>
        ${v11.filters()}
        <div class="card" id="tbl"><div class="spinner"></div></div>`;
      v11.wireFilters(host, draw);
      await draw();
    }
  });

  /* ---------- Revizyon peman (Superadmin) ---------- */
  LotriShell.register('pay-review', {
    render: async (host) => {
      const bar = await v11.payBar();
      const draw = async () => {
        const { data, error } = await SB().from('jl9_payments').select('*')
          .order('created_at', { ascending: false }).limit(200);
        if (error) { host.querySelector('#tbl').innerHTML = `<div class="empty">${esc(error.message)}</div>`; return; }
        const rows = v11.applyDate(data || [], 'created_at', v11.readFilters(host));
        host.querySelector('#tbl').innerHTML = rows.length ? `
          <div class="table-wrap"><table class="table"><thead><tr>
            <th>Date</th><th>Mwayen</th><th>Trans ID</th><th class="num">Montant</th><th>Statut</th><th></th>
          </tr></thead><tbody>${rows.map(x => `
            <tr data-v11-title="Paiement ${esc(x.reference || '')}" data-v11-row='${esc(JSON.stringify({
              Date: v11.dt(x.created_at), Mwayen: x.method, 'Trans ID': x.reference,
              Montant: money(x.amount), Statut: x.status
            }))}'>
              <td>${v11.dt(x.created_at)}</td><td>${esc(x.method || '')}</td>
              <td class="mono">${esc(x.reference || '')}</td>
              <td class="num">${money(x.amount)}</td>
              <td><span class="badge ${x.status === 'apwouve' ? 'badge-success' : x.status === 'refize' ? 'badge-danger' : 'badge-warning'}">${esc(x.status)}</span></td>
              <td class="row">${x.status === 'en_attente' ? `
                <button class="btn btn-sm btn-primary" data-ok="${x.id}">Je l\'ai trouvé</button>
                <button class="btn btn-sm btn-danger" data-no="${x.id}">Je ne l\'ai pas trouvé</button>` : ''}</td>
            </tr>`).join('')}</tbody></table></div>`
          : '<div class="empty"><i class="fa-solid fa-receipt"></i>Aucun paiement.</div>';
        v11.wireRows(host);
        const act = async (id, ok) => {
          const reason = await L.ui.prompt({
            title: ok ? 'Confirmer le paiement' : 'Refuser le paiement',
            label: 'Motif (transmis uniquement à la compagnie)',
            value: ok ? 'Je l\'ai trouvé dans le compte.' : 'Je ne l\'ai pas trouvé dans le compte.'
          });
          if (reason === null) return;
          const { error: e2 } = await SB().rpc('jl11_rpc_confirm_payment',
            { _payment: id, _received: ok, _reason: reason });
          if (e2) { L.toast(e2.message, 'error'); return; }
          L.toast('La compagnie a reçu la réponse en privé.', 'success');
          draw();
        };
        host.querySelectorAll('[data-ok]').forEach(b => b.onclick = e => { e.stopPropagation(); act(b.dataset.ok, true); });
        host.querySelectorAll('[data-no]').forEach(b => b.onclick = e => { e.stopPropagation(); act(b.dataset.no, false); });
      };
      host.innerHTML = `
        ${v11.crumbs([{ label: 'dashboard', view: 'dashboard' }, { label: 'finans' }, { label: 'vérification des paiements' }])}
        ${bar}
        <div class="page-hd"><h2>Vérification des paiements</h2>
          <p class="muted">Votre réponse reste privée entre vous et la compagnie.</p></div>
        ${v11.filters()}
        <div class="card" id="tbl"><div class="spinner"></div></div>`;
      v11.wireFilters(host, draw);
      await draw();
    }
  });
})();


/* =====================================================================
 * JADSTACK LOTTO V11 — KONFIGIRASYON SUPERADMIN + PATCH YO
 *  • Moyen de paiement konfigirab (ak imaj)
 *  • Tirage: logo/non konfigirab pa Superadmin selman
 *  • Card validasyon (egz. chanjman logo konpayi)
 *  • Contrôle de fin de mois amelyore
 *  • Korije erè «{}» lè w kreye yon ajan
 * ===================================================================== */
(function () {
  const L = window.Lotri, v11 = L.v11, SB = () => L.supabase, esc = L.escapeHtml;

  /* ---------- Moyen de paiement ---------- */
  LotriShell.register('pay-methods', {
    render: async (host) => {
      const draw = async () => {
        const { data } = await SB().from('jl11_payment_methods').select('*').order('sort_order');
        host.querySelector('#list').innerHTML = (data || []).map(o => `
          <div class="v11-pay-op" data-op="${o.id}">
            ${v11.imgInput({ src: o.image_url, folder: 'pay', label: 'Logo', title: 'Changer l\'image' })}
            <div style="flex:1">
              <input class="input" data-k="name" value="${esc(o.name)}" placeholder="Nom">
              <input class="input" data-k="phone" value="${esc(o.phone || '')}" placeholder="+509 0000 0000" style="margin-top:.3rem">
              <input class="input" data-k="account_name" value="${esc(o.account_name || '')}" placeholder="Nom du compte" style="margin-top:.3rem">
              <textarea class="input" data-k="instructions" rows="2" style="margin-top:.3rem">${esc(o.instructions || '')}</textarea>
              <div class="row" style="margin-top:.4rem;gap:.4rem">
                <label class="row" style="gap:.3rem;font-size:.78rem"><input type="checkbox" data-k="active" ${o.active ? 'checked' : ''}> Actif</label>
                <button class="btn btn-sm btn-primary" data-save="${o.id}">Enregistrer</button>
                <button class="btn btn-sm btn-danger btn-icon" data-del="${o.id}"><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>
          </div>`).join('') || '<div class="empty">Aucun moyen de paiement.</div>';

        host.querySelectorAll('[data-op]').forEach(box => {
          box.addEventListener('v11:image', async e => {
            await SB().from('jl11_payment_methods').update({ image_url: e.detail.url }).eq('id', box.dataset.op);
          });
        });
        host.querySelectorAll('[data-save]').forEach(b => b.onclick = async () => {
          const box = b.closest('[data-op]');
          const g = k => box.querySelector(`[data-k="${k}"]`);
          const { error } = await SB().from('jl11_payment_methods').update({
            name: g('name').value, phone: g('phone').value, account_name: g('account_name').value,
            instructions: g('instructions').value, active: g('active').checked, updated_at: new Date().toISOString()
          }).eq('id', b.dataset.save);
          L.toast(error ? error.message : 'Enregistré.', error ? 'error' : 'success');
        });
        host.querySelectorAll('[data-del]').forEach(b => b.onclick = async () => {
          if (!await L.ui.confirm('Supprimer ce moyen de paiement ?', null, { danger: true })) return;
          await SB().from('jl11_payment_methods').delete().eq('id', b.dataset.del); draw();
        });
      };
      host.innerHTML = `
        ${v11.crumbs([{ label: 'dashboard', view: 'dashboard' }, { label: 'konfigirasyon' }, { label: 'moyen de paiement' }])}
        <div class="page-hd"><h2>Moyen de paiement</h2>
          <p class="muted">Ajoutez/modifiez les moyens de paiement et leurs images. Ils apparaissent en haut de toutes les pages de facturation.</p></div>
        <div class="card"><div class="card-hd"><h3>Lis</h3>
          <button class="btn btn-primary" id="new"><i class="fa-solid fa-plus"></i> Nouvo</button></div>
          <div id="list" class="v11-pay-grid" style="padding:.6rem"><div class="spinner"></div></div></div>`;
      host.querySelector('#new').onclick = async () => {
        const name = await L.ui.prompt({ title: 'Nouveau moyen de paiement', label: 'Nom', required: true });
        if (!name) return;
        const { error } = await SB().from('jl11_payment_methods').insert({ name, sort_order: 99 });
        if (error) L.toast(error.message, 'error'); else draw();
      };
      await draw();
    }
  });

  /* ---------- Configuration tiraj (Superadmin selman) — V16-BUG-2 ----------
   * Chak tiraj DWE lye ak yon vraies machines (jl9_machines). Pa gen "nom libre".
   * Antre ki deja egziste san machin gen yon UI "Lier à une machine réelle".
   * ------------------------------------------------------------------- */
  LotriShell.register('draw-config', {
    render: async (host) => {
      let machines = [];
      const loadMachines = async () => {
        const { data, error } = await SB().rpc('jl16_rpc_machines');
        if (!error && Array.isArray(data)) machines = data;
        else {
          const r = await SB().from('jl9_machines').select('*').eq('active', true).order('sort_order');
          machines = r.data || [];
        }
        return machines;
      };
      const machineOptions = (sel) => machines.map(m =>
        `<option value="${esc(m.id)}" ${String(sel) === String(m.id) ? 'selected' : ''}>${esc(m.name)}</option>`).join('');

      /* V18 — YON SÈL TABLO TIRAJ (kreye · modifye · logo · efase)
         Tous kolòn yo afiche nan yon tablo ki gen overflow orizontal sou mobil. */
      const DAYS = ['Dim', 'Len', 'Mad', 'Mèk', 'Jed', 'Van', 'Sam'];

      const draw = async () => {
        const { data } = await SB().from('jl11_draw_media').select('*').order('sort_order');
        const rows = (data || []).filter(d => !d.deleted_at);
        const orphans = rows.filter(d => !d.machine_id);

        host.querySelector('#orphan').innerHTML = orphans.length ? `
          <div class="card v16-warn" style="margin-bottom:.8rem">
            <div class="card-hd"><h3><i class="fa-solid fa-triangle-exclamation"></i>
              ${orphans.length} tiraj san vraies machines</h3></div>
            <div style="padding:.6rem">
              <p class="muted" style="font-size:.82rem">Antre sa yo te kreye ak yon nom libre
                (ansyen bug V11). Choisir vraies machines nan pou chak — logo ak koulè yo pa pèdi.</p>
              ${orphans.map(o => `
                <div class="row" style="gap:.4rem;margin-top:.5rem;align-items:center" data-o="${o.id}">
                  <strong style="flex:1">${esc(o.display_name)}</strong>
                  <select class="select" data-om><option value="">— Choisir une machine —</option>
                    ${machineOptions(null)}</select>
                  <button class="btn btn-sm btn-primary" data-link="${o.id}">Lye</button>
                </div>`).join('')}
            </div>
          </div>` : '';

        host.querySelector('#list').innerHTML = rows.length ? `
          <div class="draw-config-cards">${rows.map(d => `
            <div class="card v79-draw-card" data-d="${esc(d.id)}">
              <div class="row" style="justify-content:space-between;align-items:center;gap:.7rem">
                <div style="min-width:0"><strong>${esc(d.display_name)}</strong>
                  <div class="muted" style="font-size:.75rem">${esc(d.slug || '—')} · ${esc((d.open_time||'').slice(0,5) || '00:00')} → ${esc((d.close_time||'').slice(0,5) || '—')}</div>
                </div>
                <span class="badge ${d.active ? 'badge-success' : 'badge-danger'}">${d.active ? 'Actif' : 'Inactif'}</span>
              </div>
              <div class="row" style="justify-content:flex-end;gap:.4rem;margin-top:.65rem">
                <button class="btn btn-sm btn-primary" data-edit-draw="${esc(d.id)}"><i class="fa-solid fa-pen"></i> Modifier</button>
                <button class="btn btn-sm btn-danger" data-del="${esc(d.id)}"><i class="fa-solid fa-trash"></i> Supprimer</button>
              </div>
            </div>`).join('')}</div>` : '<div class="empty">Aucun tirage. Cliquez sur « Nouveau tirage ».</div>';

        host.querySelectorAll('[data-link]').forEach(b => b.onclick = async () => {
          const box = b.closest('[data-o]');
          const mid = box.querySelector('[data-om]').value;
          if (!mid) { L.toast('Sélectionnez une machine.', 'error'); return; }
          const { error } = await SB().rpc('jl16_rpc_link_draw_media', { _media: b.dataset.link, _machine: mid });
          if (error) { L.toast(error.message, 'error'); return; }
          L.toast('Le tirage est lié à la machine.', 'success');
          L.notify && L.notify.action && L.notify.action({
            action: 'draw_media.link', verb: 'lye', entity: 'un tirage avec une machine réelle',
            target_id: b.dataset.link });
          draw();
        });

        async function editDraw(id){
          const d = rows.find(x => String(x.id) === String(id));
          if (!d) return;
          const days = Array.isArray(d.days) && d.days.length ? d.days : [0,1,2,3,4,5,6];
          const pop = v11.popup('Modifier le tirage', `
            <div class="v79-draw-editor">
              <div class="v79-field"><label class="label">Nom du tirage</label><input class="input" id="ed-name" value="${esc(d.display_name||'')}"></div>
              <div class="v79-field"><label class="label">Machine</label><select class="select" id="ed-machine"><option value="">— Choisir une machine —</option>${machineOptions(d.machine_id)}</select></div>
              <div class="v79-field"><label class="label">Heure d'ouverture</label><input class="input" id="ed-open" type="time" value="${esc((d.open_time||'').slice(0,5))}"></div>
              <div class="v79-field"><label class="label">Heure de fermeture</label><input class="input" id="ed-close" type="time" value="${esc((d.close_time||'').slice(0,5))}"></div>
              <div class="v79-field"><label class="label">Ordre d'affichage</label><input class="input" id="ed-order" type="number" value="${Number(d.sort_order||0)}"></div>
              <div class="v79-field"><label class="label">Jours actifs</label><div class="v79-days">${DAYS.map((lbl,i)=>`<label><input type="checkbox" data-ed-day="${i}" ${days.includes(i)?'checked':''}> ${lbl}</label>`).join('')}</div></div>
              <div class="v79-field"><label class="label">Statut</label><label class="switch"><input id="ed-active" type="checkbox" ${d.active?'checked':''}><span class="track"></span><span>Actif</span></label></div>
              <div class="v79-field"><label class="label">Logo</label><div id="ed-logo">${v11.imgInput({src:d.logo_url,folder:'draws',round:true,label:'Modifier le logo'})}</div></div>
              <div class="v79-field"><label class="label">Slug</label><div class="input mono" style="background:var(--surface-2)">${esc(d.slug||'—')}</div></div>
            </div>`,
            { footer: '<button class="btn btn-primary" id="ed-save"><i class="fa-solid fa-floppy-disk"></i> Enregistrer les modifications</button>' });
          let logoUrl = d.logo_url || null;
          const logoBox = pop.el.querySelector('#ed-logo');
          if (logoBox) logoBox.addEventListener('v11:image', e => { logoUrl = e.detail.url || null; });
          pop.el.querySelector('#ed-save').onclick = async () => {
            const mid = pop.el.querySelector('#ed-machine').value;
            const nm = pop.el.querySelector('#ed-name').value.trim();
            const selectedDays = [...pop.el.querySelectorAll('[data-ed-day]')].filter(x=>x.checked).map(x=>Number(x.dataset.edDay));
            if (!nm) { L.toast('Le nom du tirage est obligatoire.', 'error'); return; }
            if (!mid) { L.toast('Vous devez sélectionner une machine réelle.', 'error'); return; }
            if (!selectedDays.length) { L.toast('Sélectionnez au moins un jour.', 'error'); return; }
            const { error } = await SB().from('jl11_draw_media').update({
              display_name:nm, machine_id:mid, open_time:pop.el.querySelector('#ed-open').value || '00:00',
              close_time:pop.el.querySelector('#ed-close').value || null, days:selectedDays,
              sort_order:Number(pop.el.querySelector('#ed-order').value||0), active:pop.el.querySelector('#ed-active').checked,
              logo_url:logoUrl, updated_at:new Date().toISOString()
            }).eq('id', id);
            if (error) { L.toast(error.message,'error'); return; }
            pop.close(); L.v13 && L.v13.bust && L.v13.bust('medias');
            L.notify && L.notify.action && L.notify.action({action:'draw_media.update',verb:'modifié',entity:'un tirage',subject_label:nm,target_id:id});
            L.toast('Tirage modifié avec succès.','success');
            draw();
          };
        }
        host.querySelectorAll('[data-edit-draw]').forEach(b => b.onclick = () => editDraw(b.dataset.editDraw));

        host.querySelectorAll('[data-del]').forEach(b => b.onclick = async () => {
          const row = rows.find(x => String(x.id) === String(b.dataset.del));
          const nm = row ? row.display_name : 'ce tirage';
          if (!await L.ui.confirm(`Supprimer définitivement le tirage « ${nm} » ?`,
            'Le tirage n\'apparaîtra plus nulle part (en-tête, résultats, fiches).', { danger: true })) return;
          const { error } = await SB().rpc('jl12_rpc_delete_draw', { _id: b.dataset.del });
          if (error) { L.toast(error.message, 'error'); return; }
          L.v13 && L.v13.bust && L.v13.bust('medias');
          L.toast('Tirage supprimé.', 'success');
          L.notify && L.notify.action && L.notify.action({
            action: 'draw_media.delete', verb: 'efase', entity: 'un tirage',
            subject_label: nm, target_id: b.dataset.del });
          draw();
        });
      };

      host.innerHTML = `
        ${v11.crumbs([{ label: 'dashboard', view: 'dashboard' }, { label: 'konfigirasyon' }, { label: 'tirage' }])}
        <div class="page-hd"><h2>Tirage & logo</h2>
          <p class="muted">Yon sèl kote pou tout tiraj yo: kreye, modifye non/lè/jou, mete logo, efase.
            Chak tiraj dwe lye ak yon <strong>vraies machines</strong>. Les compagnies et les agents les voient partout.</p></div>
        <div id="orphan"></div>
        <div class="card"><div class="card-hd"><h3>Liste des tirages</h3>
          <button class="btn btn-sm btn-danger" id="cleanup-v72"><i class="fa-solid fa-broom"></i> Nettoyer les tirages</button><button class="btn btn-primary" id="new"><i class="fa-solid fa-plus"></i> Nouveau tirage</button></div>
          <div id="list" style="padding:.6rem"><div class="spinner"></div></div></div>`;

      await loadMachines();

      const cleanupBtn = host.querySelector('#cleanup-v72');
      if (cleanupBtn) cleanupBtn.onclick = async () => {
        const { data, error } = await SB().from('jl11_draw_media').select('id,display_name,active').order('sort_order');
        if (error) { L.toast(error.message, 'error'); return; }
        const keep = (window.Lotri.v72DrawWhitelist && window.Lotri.v72DrawWhitelist.keep) || (()=>true);
        const remove = (data || []).filter(d => !keep(d.display_name) && d.active !== false);
        if (!remove.length) { L.toast('Aucun tirage supplémentaire à désactiver.', 'success'); return; }
        if (!await L.ui.confirm(`Désactiver ${remove.length} tirage(s) non présents dans la liste de référence ?`, 'Les relations et résultats sont conservés : seuls les tirages sont désactivés.', { danger:true })) return;
        for (const d of remove) {
          const { error: e } = await SB().from('jl11_draw_media').update({ active:false, updated_at:new Date().toISOString() }).eq('id', d.id);
          if (e) { L.toast(e.message, 'error'); return; }
        }
        L.v13 && L.v13.bust && L.v13.bust('medias');
        L.toast(`${remove.length} tirage(s) désactivé(s). Les tirages de référence sont conservés.`, 'success');
        draw();
      };

      host.querySelector('#new').onclick = async () => {
        if (!machines.length) { L.toast('Aucune machine active. Créez d\'abord une machine.', 'error'); return; }
        const pop = v11.popup('Nouveau tirage', `
          <label class="label">Machine (obligatwa)</label>
          <select class="select" id="nm"><option value="">— Choisir une machine réelle —</option>${machineOptions(null)}</select>
          <label class="label" style="margin-top:.5rem">Nom du tirage (egz. «Florida Midi»)</label>
          <input class="input" id="nn" placeholder="Nom du tirage">
          <label class="label" style="margin-top:.5rem">Heure d\'ouverture</label>
          <input class="input" id="no" type="time">
          <label class="label" style="margin-top:.5rem">Lè fermer</label>
          <input class="input" id="nc" type="time">`,
          { footer: '<button class="btn btn-primary" id="ok">Créer</button>' });
        pop.el.querySelector('#ok').onclick = async () => {
          const mid = pop.el.querySelector('#nm').value;
          const nm = pop.el.querySelector('#nn').value.trim();
          const ct = pop.el.querySelector('#nc').value || null;
          const ot = pop.el.querySelector('#no').value || null;
          if (!mid) { L.toast('Vous devez sélectionner une machine réelle dans la liste.', 'error'); return; }
          if (!nm) { L.toast('Le nom du tirage est obligatoire.', 'error'); return; }
          const { data, error } = await SB().rpc('jl16_rpc_create_draw_media', {
            _machine: mid, _display_name: nm, _close_time: ct, _open_time: ot, _game_code: null });
          if (error) { L.toast(error.message, 'error'); return; }
          pop.close(); L.toast('Tirage créé.', 'success');
          L.v13 && L.v13.bust && L.v13.bust('medias');
          L.notify && L.notify.action && L.notify.action({
            action: 'draw_media.create', verb: 'kreye', entity: 'un tirage',
            subject_label: nm, target_id: data });
          draw();
        };
      };
      await draw();

    }
  });

  /* ---------- Card validasyon (Superadmin) ---------- */
  LotriShell.register('validations', {
    render: async (host) => {
      const { data } = await SB().from('jl11_action_cards').select('*')
        .order('created_at', { ascending: false }).limit(100);
      host.innerHTML = `
        ${v11.crumbs([{ label: 'dashboard', view: 'dashboard' }, { label: 'validasyon' }])}
        <div class="page-hd"><h2>Demande de validation</h2>
          <p class="muted">Acceptez ou annulez directement ici. La compagnie reçoit votre réponse en privé.</p></div>
        <div class="v11-pay-grid">${(data || []).map(c => `
          <div class="v11-action" data-c="${c.id}">
            <strong>${esc(c.title)}</strong>
            <div class="imgs">
              <figure><img src="${esc(c.before_url || '')}" alt="anvan">Avant</figure>
              <i class="fa-solid fa-arrow-right"></i>
              <figure><img src="${esc(c.after_url || '')}" alt="apre">Après</figure>
            </div>
            <div class="row">
              ${c.status === 'pending' ? `
                <button class="btn btn-sm btn-primary" data-ok="${c.id}">Accepter</button>
                <button class="btn btn-sm btn-danger" data-no="${c.id}">Annuler</button>`
                : `<span class="badge ${c.status === 'approved' ? 'badge-success' : 'badge-danger'}">${esc(c.status)}</span>`}
            </div>
          </div>`).join('') || '<div class="empty">Aucune demande.</div>'}</div>`;
      const act = async (id, ok) => {
        const reason = await L.ui.prompt({ title: ok ? 'Accepter' : 'Annuler', label: 'Rezon (opsyonèl)' });
        const { error } = await SB().rpc('jl11_rpc_review_card', { _card: id, _ok: ok, _reason: reason || null });
        if (error) { L.toast(error.message, 'error'); return; }
        L.toast('Fèt.', 'success'); LotriShell.go('validations');
      };
      host.querySelectorAll('[data-ok]').forEach(b => b.onclick = () => act(b.dataset.ok, true));
      host.querySelectorAll('[data-no]').forEach(b => b.onclick = () => act(b.dataset.no, false));
    }
  });

  /* ---------- Notifications e-mail (maks 2) — konpayi ak superadmin ---------- */
  LotriShell.register('mail-optin', {
    render: async (host) => {
      /* V14/V16 RÈG KRITIK #1 — uniquement Super Admin (UI + backend RLS/RPC). */
      if ((window.__lotriProfile || {}).role !== 'super_admin') {
        host.innerHTML = '<div class="empty"><i class="fa-solid fa-lock"></i>Les notifications par e-mail sont réservées à l\'administration.</div>';
        return;
      }
      const { data } = await SB().from('jl11_email_prefs').select('*').maybeSingle();
      let emails = (data && Array.isArray(data.emails)) ? data.emails.slice() : [];
      /* V16 · A.0 — default editab, prepopile pa baz done a. */
      if (!emails.length) emails = ['jadstacklotto@gmail.com'];

      host.innerHTML = `
        ${v11.crumbs([{ label: 'dashboard', view: 'dashboard' }, { label: 'mesaj' }, { label: 'notifications e-mail' }])}
        <div class="page-hd"><h2>Notifications e-mail</h2></div>
        <div class="card" style="padding:1rem;max-width:640px">
          <p class="muted" style="font-size:.84rem">
            <strong>Kijan sa fonksyone:</strong> chak aksyon enpòtan sou platfòm nan
            (kreye ajan, bloke/debloke, deklare peman, saisir les résultats tiraj, mesaj…)
            voye yon imèl bay <strong>toutes les adresses de cette liste</strong>.
            Vous ka ajoute <strong>autant d\'e-mails que vous voulez</strong>. Sèlman ou menm (Super Admin)
            ki gen aksè a paj sa a — konpayi ak ajan pa gen okenn konfigirasyon e-mails.</p>
          <div id="rows" style="margin-top:.8rem"></div>
          <button class="btn btn-sm" id="add" style="margin-top:.5rem">
            <i class="fa-solid fa-plus"></i> Ajouter un e-mail</button>
          <label class="row" style="gap:.4rem;margin-top:.6rem;font-size:.84rem">
            <input type="checkbox" id="act" ${!data || data.active ? 'checked' : ''}> Activer les notifications</label>
          <div class="row" style="gap:.5rem;margin-top:.9rem">
            <button class="btn btn-primary" id="save"><i class="fa-solid fa-floppy-disk"></i> Enregistrer</button>
            <button class="btn" id="test"><i class="fa-solid fa-paper-plane"></i> Faire un test</button>
          </div>
        </div>`;

      const rowsEl = host.querySelector('#rows');
      const paint = () => {
        rowsEl.innerHTML = emails.map((e, i) => `
          <div class="row v16-mail-row" style="gap:.4rem;margin-top:.4rem" data-i="${i}">
            <input class="input" type="email" data-e="${i}" value="${esc(e)}" placeholder="nom@exemple.com">
            <button class="btn btn-sm btn-danger btn-icon" data-rm="${i}" title="Retirer">
              <i class="fa-solid fa-trash"></i></button>
          </div>`).join('') || '<div class="empty" style="padding:.8rem">Aucun e-mail. Cliquez sur « Ajouter un e-mail ».</div>';
        rowsEl.querySelectorAll('[data-e]').forEach(inp => inp.oninput = () => {
          emails[Number(inp.dataset.e)] = inp.value;
        });
        rowsEl.querySelectorAll('[data-rm]').forEach(b => b.onclick = () => {
          emails.splice(Number(b.dataset.rm), 1); paint();
        });
      };
      paint();

      host.querySelector('#add').onclick = () => { emails.push(''); paint(); };

      const read = () => emails.map(e => String(e || '').trim().toLowerCase())
        .filter(Boolean).filter((e, i, a) => a.indexOf(e) === i);

      host.querySelector('#save').onclick = async () => {
        const list = read();
        const bad = list.find(e => !/^[^\s@,]+@[^\s@,]+\.[^\s@,]+$/.test(e));
        if (bad) { L.toast('E-mail invalide : ' + bad, 'error'); return; }
        const { error } = await SB().rpc('jl11_rpc_set_emails',
          { _emails: list, _active: host.querySelector('#act').checked });
        if (error) { L.toast(error.message, 'error'); return; }
        emails = list; paint();
        L.notify && L.notify.reloadRecipients && L.notify.reloadRecipients();
        L.notify && L.notify.action && L.notify.action({
          action: 'email_prefs.update', verb: 'mis à jour', entity: 'liste des notifications e-mail',
          details: { 'Nombre d\'e-mails': list.length } });
        L.toast('Enregistrer — ' + list.length + ' e-mails.', 'success');
      };

      host.querySelector('#test').onclick = async () => {
        const list = read();
        if (!list.length) { L.toast('Indiquez au moins une adresse e-mail.', 'error'); return; }
        let ok = 0;
        for (const e of list) {
          try { if (await L.notify.test(e, 'Test de notification JADSTACK LOTTO V16.')) ok++; } catch (_) { }
        }
        L.toast('Test envoyé à ' + ok + '/' + list.length + ' adrès.', ok ? 'success' : 'error');
      };
    }
  });

  /* ---------- Contrôle de fin de mois amelyore ---------- */
  v11.monthControl = async function () {
    const { data, error } = await SB().rpc('jl11_rpc_month_control', { _as_of: new Date().toISOString().slice(0, 10) });
    if (error || !data || !data.length) return;
    const total = data.reduce((s, r) => s + Number(r.amount || 0), 0);
    const pop = v11.popup(`Contrôle de fin de mois — ${data.length} compagnies en retard`, `
      <p class="muted" style="font-size:.82rem">Total dû: <strong>${v11.money(total)}</strong></p>
      <div class="table-wrap"><table class="table"><thead><tr>
        <th>Compagnie</th><th class="num">Facture</th><th class="num">Montant</th><th class="num">Reta</th></tr></thead>
        <tbody>${data.map(r => `<tr data-v11-title="${esc(r.company_name)}" data-v11-row='${esc(JSON.stringify({
          Compagnie: r.company_name, Facture: r.invoices, Montant: v11.money(r.amount),
          Reta: r.days_late + ' jou', 'Pi ansyen echeyans': r.oldest_due
        }))}'><td>${esc(r.company_name)}</td><td class="num">${r.invoices}</td>
        <td class="num">${v11.money(r.amount)}</td><td class="num">${r.days_late} jou</td></tr>`).join('')}
        </tbody></table></div>`,
      { footer: '<button class="btn btn-primary" id="go">Aller à la facturation</button>' });
    v11.wireRows(pop.el);
    pop.el.querySelector('#go').onclick = () => { pop.close(); LotriShell.go('invoices'); };
  };
  /* V22 · B1 — ansyen otomatik "Contrôle de fin de mois" retire isit la:
     li pa t gen kontwòl wòl, kidonk ajan yo te wè popup la.
     monthly-check.js deja fè menm travay la ak 3 kontwòl wòl. */

  /* ---------- Korije erè «{}» lè w kreye yon ajan ---------- */
  v11.createAgent = async function (fields) {
    const { data, error } = await SB().rpc('jl11_rpc_create_agent', {
      _full_name: fields.full_name, _phone: fields.phone || null,
      _address: fields.address || null, _branch: fields.branch_id || null,
      _country: fields.country || null, _department: fields.department || null,
      _email_2: fields.email_2 || null,
      _alt_names: Array.isArray(fields.alt_names) ? fields.alt_names : null
    });
    if (error) throw new Error(error.message || error.details || error.hint || 'Impossible de créer l\'agent.');
    if (!data || !data.id) throw new Error('Le serveur n\'a pas renvoyé l\'agent. Réessayez.');
    /* V16 · PATI A.2 + B — chak aksyon: log + imèl bay lis Superadmin an. */
    L.notify && L.notify.action && L.notify.action({
      action: 'agent.create', verb: 'kreye', entity: 'yon ajan',
      subject_label: fields.full_name, target_id: data.id,
      details: { 'Nom de l\'agent': fields.full_name, 'ID piblik': data.public_id || '—' }
    });
    return data;
  };
})();


/* =====================================================================
 * JADSTACK LOTTO V12 — NWAYO
 *  • Lotri.v12.imageDrop()  : konpozan imaj inik (drag&drop + kamera)
 *    ki RANPLASE tout <input type=file accept=image> nan sistèm nan.
 *  • Lotri.v12.ball()       : boul reyalis (lo 1 / 2 / 3)
 *  • Lotri.v12.rpc()        : apèl RPC ak mesaj erè klè
 *  • Heartbeat siveyans machin + gadyen sesyon (kont bloke/efase)
 *  • Fallback ouvèti/fèmti tiraj otomatik (jl12_rpc_tick)
 * ===================================================================== */
(function () {
  const L = (window.Lotri = window.Lotri || {});
  const v12 = (L.v12 = L.v12 || {});
  const SB = () => L.supabase;
  const esc = L.escapeHtml || (s => String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])));
  v12.esc = esc;
  const toast = (m, k) => (L.toast ? L.toast(m, k) : console.log(k || 'info', m));

  /* ---------------- RPC ak mesaj klè ---------------- */
  v12.rpc = async function (name, args) {
    const { data, error } = await SB().rpc(name, args || {});
    if (error) throw new Error(error.message || 'Erreur du serveur.');
    return data;
  };

  /* ---------------- Boule reyalis ---------------- */
  v12.hue = t => { let h = 0; String(t || '?').split('').forEach(c => h = (h * 31 + c.charCodeAt(0)) % 360); return h; };
  v12.color = t => `hsl(${v12.hue(t)} 60% 42%)`;
  v12.ball = function (label, opts) {
    opts = opts || {};
    const cls = ['jl-ball', opts.size || '', label ? '' : 'empty'].filter(Boolean).join(' ');
    if (opts.img) return `<span class="${cls}"><img src="${esc(opts.img)}" alt="${esc(opts.alt || '')}"></span>`;
    const txt = label == null || label === '' ? '––' : String(label);
    return `<span class="${cls}" style="--b:${opts.color || v12.color(opts.alt || txt)}">${esc(txt)}</span>`;
  };
  /* 3 lo yo: 1ye pi gwo, 2yèm mwayen, 3yèm pi piti */
  v12.lots = (r, seed) => `<span class="jl-lots">
      ${v12.ball(r && r.lot1, { size: 'l1', color: v12.color(seed || 'l1') })}
      ${v12.ball(r && r.lot2, { size: 'l2', color: v12.color(seed || 'l2') })}
      ${v12.ball(r && r.lot3, { size: 'l3', color: v12.color(seed || 'l3') })}</span>`;

  /* ---------------- Konpozan imaj inik ---------------- */
  /* Itilizasyon: html += Lotri.v12.imageDrop({ name:'logo', src:url, round:true })
     Lekti: Lotri.v12.imageValue(root, 'logo')  -> URL (oswa null)
     Evènman: root.addEventListener('jl:image', e => e.detail.url) */
  v12.imageDrop = function (o) {
    o = o || {};
    return `<div class="jl-image-drop ${o.round ? 'round' : ''}" data-jl-image
      data-name="${esc(o.name || 'image')}" data-bucket="${esc(o.bucket || 'jl11-media')}"
      data-folder="${esc(o.folder || 'general')}" data-url="${esc(o.src || '')}"
      title="${esc(o.title || 'Klike, trennen yon imaj oswa pran yon foto')}">
      ${o.src ? `<img src="${esc(o.src)}" alt="${esc(o.alt || '')}">`
              : `<i class="fa-solid fa-image jl-id-ico"></i>
                 <span>${esc(o.label || 'Cliquez ou glissez une image ici')}</span>
                 <span style="font-size:.7rem;opacity:.75">PNG · JPG · WEBP · SVG — maks 4 Mo</span>`}
      <span class="jl-id-actions" style="${o.src ? '' : 'display:none'}">
        <button type="button" data-jl-cam title="Prendre une photo"><i class="fa-solid fa-camera"></i></button>
        <button type="button" data-jl-clear title="Retirer imaj la"><i class="fa-solid fa-xmark"></i></button>
      </span>
      <span class="jl-id-bar"></span>
      <input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" aria-label="${esc(o.title || 'Imaj')}">
    </div>`;
  };
  v12.imageValue = (root, name) => {
    const b = (root || document).querySelector(`[data-jl-image][data-name="${name}"]`);
    return b && b.dataset.url ? b.dataset.url : null;
  };

  async function upload(box, file) {
    if (!/^image\//.test(file.type)) throw new Error('Seules les images sont acceptées (PNG, JPG, WEBP, SVG).');
    if (file.size > 4 * 1024 * 1024) throw new Error('Imaj la twò gwo (maks 4 Mo).');
    const bucket = box.dataset.bucket || 'jl11-media';
    const ext = (file.name.split('.').pop() || 'png').toLowerCase();
    const path = `${box.dataset.folder || 'general'}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error } = await SB().storage.from(bucket).upload(path, file, { upsert: false });
    if (error) throw new Error('Impossible d\'envoyer l\'image : ' + error.message);
    const { data } = SB().storage.from(bucket).getPublicUrl(path);
    return (data && data.publicUrl) || null;
  }

  async function handleFile(box, file) {
    if (!file) return;
    box.classList.add('busy');
    const bar = box.querySelector('.jl-id-bar');
    if (bar) bar.style.width = '35%';
    try {
      const url = await upload(box, file);
      if (bar) bar.style.width = '100%';
      v12.setImage(box, url);
      toast('L\'image est enregistrée.', 'success');
    } catch (err) {
      toast(err.message, 'error');
    } finally {
      box.classList.remove('busy');
      setTimeout(() => { if (bar) bar.style.width = '0'; }, 400);
      const inp = box.querySelector('input[type=file]');
      if (inp) inp.value = '';
    }
  }

  v12.setImage = function (box, url) {
    box.dataset.url = url || '';
    box.querySelectorAll('.jl-id-ico, span:not(.jl-id-actions):not(.jl-id-bar)').forEach(el => {
      if (!el.closest('.jl-id-actions')) el.remove();
    });
    let img = box.querySelector('img');
    if (url) {
      if (!img) { img = document.createElement('img'); box.prepend(img); }
      img.src = url;
      const act = box.querySelector('.jl-id-actions'); if (act) act.style.display = '';
    } else if (img) {
      img.remove();
      const act = box.querySelector('.jl-id-actions'); if (act) act.style.display = 'none';
      box.insertAdjacentHTML('afterbegin',
        `<i class="fa-solid fa-image jl-id-ico"></i><span>Cliquez ou glissez une image ici</span>`);
    }
    box.dispatchEvent(new CustomEvent('jl:image', { detail: { url, name: box.dataset.name }, bubbles: true }));
  };

  document.addEventListener('change', e => {
    const inp = e.target;
    if (inp.matches('[data-jl-image] input[type=file]')) {
      handleFile(inp.closest('[data-jl-image]'), inp.files && inp.files[0]);
    }
  });
  document.addEventListener('click', e => {
    const clear = e.target.closest('[data-jl-clear]');
    if (clear) { e.preventDefault(); v12.setImage(clear.closest('[data-jl-image]'), ''); return; }
    const cam = e.target.closest('[data-jl-cam]');
    if (cam) {
      e.preventDefault();
      const box = cam.closest('[data-jl-image]');
      const inp = box.querySelector('input[type=file]');
      inp.setAttribute('capture', 'environment');
      inp.click();
      setTimeout(() => inp.removeAttribute('capture'), 800);
    }
  });
  ['dragenter', 'dragover'].forEach(ev => document.addEventListener(ev, e => {
    const box = e.target.closest && e.target.closest('[data-jl-image]');
    if (box) { e.preventDefault(); box.classList.add('drag'); }
  }));
  ['dragleave', 'drop'].forEach(ev => document.addEventListener(ev, e => {
    const box = e.target.closest && e.target.closest('[data-jl-image]');
    if (box) box.classList.remove('drag');
  }));
  document.addEventListener('drop', e => {
    const box = e.target.closest && e.target.closest('[data-jl-image]');
    if (!box) return;
    e.preventDefault();
    handleFile(box, e.dataTransfer.files && e.dataTransfer.files[0]);
  });

  /* --- Ranplase tout ansyen input file imaj (V9/V10/V11) otomatikman --- */
  v12.upgradeInputs = function (root) {
    (root || document).querySelectorAll('input[type=file]').forEach(inp => {
      if (inp.closest('[data-jl-image]') || inp.dataset.jlUpgraded) return;
      const acc = (inp.getAttribute('accept') || '').toLowerCase();
      if (acc && acc.indexOf('image') === -1) return;
      inp.dataset.jlUpgraded = '1';
      const holder = document.createElement('div');
      holder.innerHTML = v12.imageDrop({
        name: inp.name || inp.id || 'image',
        folder: inp.dataset.folder || 'general',
        bucket: inp.dataset.bucket || 'jl11-media',
        src: inp.dataset.src || ''
      });
      const box = holder.firstElementChild;
      inp.parentNode.insertBefore(box, inp);
      inp.style.display = 'none';
      /* ansyen kòd la ka toujou li yon URL sou input lan */
      box.addEventListener('jl:image', ev => {
        inp.dataset.url = ev.detail.url || '';
        inp.dispatchEvent(new CustomEvent('jl:image', { detail: ev.detail }));
      });
    });
    /* Ansyen konpozan V11 rete konpatib */
    (root || document).querySelectorAll('[data-v11-img]').forEach(el => el.classList.add('jl-legacy-img'));
  };
  document.addEventListener('lotri:view', e => v12.upgradeInputs(e.detail));
  document.addEventListener('DOMContentLoaded', () => v12.upgradeInputs(document));

  /* ---------------- Badj «verifye» (Superadmin) ---------------- */
  v12.verified = role => role === 'super_admin'
    ? ' <i class="fa-solid fa-circle-check jl-verified" title="Compte verifye — Administrasyon JADSTACK LOTTO"></i>' : '';

  /* ---------------- Klike yon liy -> popup (tout sistèm nan) -------- */
  v12.popup = function (title, body, opts) {
    if (L.v11 && L.v11.popup) return L.v11.popup(title, body, opts);
    const back = document.createElement('div');
    back.className = 'v11-pop';
    back.innerHTML = `<div class="v11-pop-card"><div class="v11-pop-hd"><h3>${esc(title)}</h3>
      <button class="btn btn-icon btn-ghost" data-close>&times;</button></div>${body || ''}
      ${opts && opts.footer ? `<div class="row" style="justify-content:flex-end;gap:.5rem;margin-top:1rem">${opts.footer}</div>` : ''}</div>`;
    document.body.appendChild(back);
    const close = () => back.remove();
    back.querySelector('[data-close]').onclick = close;
    back.addEventListener('click', ev => { if (ev.target === back) close(); });
    return { el: back, close };
  };
  v12.wireRows = function (root) {
    (root || document).querySelectorAll('tbody tr[data-jl-row]').forEach(tr => {
      if (tr.dataset.jlWired) return;
      tr.dataset.jlWired = '1';
      tr.style.cursor = 'pointer';
      tr.addEventListener('click', ev => {
        if (ev.target.closest('button,a,input,select,label,textarea')) return;
        let rows = [];
        try { rows = Object.entries(JSON.parse(tr.dataset.jlRow)); } catch (_) { return; }
        v12.popup(tr.dataset.jlTitle || 'Détails',
          `<div class="v11-kv">${rows.map(([k, val]) =>
            `<div class="k">${esc(k)}</div><div class="v">${esc(val ?? '—')}</div>`).join('')}</div>`);
      });
    });
  };
  document.addEventListener('lotri:view', e => v12.wireRows(e.detail));

  /* ---------------- Heartbeat + gadyen sesyon ---------------- */
  let hbTimer = null, guardTimer = null;
  async function heartbeat() {
    try { await v12.rpc('jl12_rpc_heartbeat', { _device: navigator.userAgent.slice(0, 90) }); } catch (_) {}
  }
  async function guard() {
    try {
      const st = await v12.rpc('jl12_rpc_session_state');
      if (st && st.valid === false) {
        clearInterval(hbTimer); clearInterval(guardTimer);
        try { await SB().auth.signOut(); } catch (_) {}
        alert(st.message || 'Sesyon w la fini.');
        location.replace('ajan.html?raison=' + encodeURIComponent(st.reason || 'blocked'));
      }
    } catch (_) {}
  }
  async function tick() { try { await v12.rpc('jl12_rpc_tick'); } catch (_) {} }

  v12.start = function () {
    if (hbTimer) return;
    heartbeat(); guard(); tick();
    hbTimer = setInterval(heartbeat, 2 * 60 * 1000);
    guardTimer = setInterval(guard, 60 * 1000);
    setInterval(tick, 5 * 60 * 1000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) { heartbeat(); guard(); } });
  };
  document.addEventListener('lotri:ready', () => v12.start());
  if (window.__lotriProfile) v12.start();
})();


/* JADSTACK LOTTO V12 — LIMIT & BOUL BLOKE (§5) */
(function () {
  const L = window.Lotri, v12 = L.v12, SB = () => L.supabase, esc = v12.esc;
  const q = (r, s) => r.querySelector(s);

  async function refs() {
    const [ag, md, gm] = await Promise.all([
      SB().from('jl9_agents').select('id,full_name,public_id').is('deleted_at', null).order('full_name'),
      SB().from('jl11_draw_media').select('id,display_name').eq('active', true).order('sort_order'),
      SB().from('jl12_game_prizes').select('game_name').eq('active', true).order('sort_order')
    ]);
    return { agents: ag.data || [], media: md.data || [], games: gm.data || [] };
  }
  const opt = (v, t, sel) => `<option value="${esc(v)}"${sel === v ? ' selected' : ''}>${esc(t)}</option>`;

  function selects(r, pfx) {
    return `
      <div><label class="label">Niveau</label><select class="select" id="${pfx}scope">
        ${opt('company', 'Toute la compagnie')}${opt('agent', 'Un agent')}</select></div>
      <div><label class="label">Agent</label><select class="select" id="${pfx}agent">
        ${opt('', '— Choisir —')}${r.agents.map(a => opt(a.id, (a.full_name || '') + ' · ' + (a.public_id || ''))).join('')}</select></div>
      <div><label class="label">Tirage</label><select class="select" id="${pfx}media">
        ${opt('', 'Tous les tirages')}${r.media.map(m => opt(m.id, m.display_name)).join('')}</select></div>
      <div><label class="label">Jeu</label><select class="select" id="${pfx}game">
        ${opt('', 'Tous jeu')}${r.games.map(g => opt(g.game_name, g.game_name)).join('')}</select></div>`;
  }

  /* ------------------ Créer Limite ------------------ */
  L.LotriShell = window.LotriShell;
  window.LotriShell.register('v12-limits', {
    async render(host) {
      const r = await refs();
      host.innerHTML = `
        ${L.v11 ? L.v11.crumbs([{ label: 'dashboard', view: 'dashboard' }, { label: 'Créer une limite' }]) : ''}
        <div class="jl-card"><h3><i class="fa-solid fa-gauge-high"></i> Créer une limite</h3>
          <div class="jl-form-grid">
            ${selects(r, 'l')}
            <div><label class="label">Boule (depi)</label><input class="input" id="lfrom" placeholder="00"></div>
            <div><label class="label">Boule (jiska)</label><input class="input" id="lto" placeholder="99"></div>
            <div><label class="label">Montant maksimòm (HTG)</label><input class="input" id="lmax" type="number" min="0" step="1"></div>
            <div><label class="label">Date kòmansman</label><input class="input" id="lstart" type="date" value="${new Date().toISOString().slice(0, 10)}"></div>
            <div><label class="label">Date fen (opsyonèl)</label><input class="input" id="lend" type="date"></div>
            <div><label class="label">Note</label><input class="input" id="lnote" placeholder="rezon limit la"></div>
          </div>
          <div class="row" style="justify-content:flex-end;margin-top:.9rem">
            <button class="btn btn-primary" id="lsave"><i class="fa-solid fa-plus"></i> Créer une limite la</button></div>
        </div>
        <div class="jl-card"><h3><i class="fa-solid fa-list"></i> Limites actives</h3>
          <div class="jl-scroll"><table class="table"><thead class="jl-sticky-hd"><tr>
            <th>Niveau</th><th>Tirage</th><th>Jeu</th><th>Boule</th><th>Maks</th><th>Période</th><th></th>
          </tr></thead><tbody id="lbody"><tr><td colspan="7"><div class="spinner"></div></td></tr></tbody></table></div>
        </div>`;
      const nameOf = (arr, id, k) => (arr.find(x => x.id === id) || {})[k] || '—';
      async function list() {
        const { data, error } = await SB().from('jl12_limits').select('*').order('created_at', { ascending: false });
        const b = q(host, '#lbody');
        if (error) { b.innerHTML = `<tr><td colspan="7" class="muted">${esc(error.message)}</td></tr>`; return; }
        b.innerHTML = (data || []).length ? data.map(x => `<tr data-jl-row='${esc(JSON.stringify({
          Niveau: x.scope, Boule: (x.number_from || '*') + ' → ' + (x.number_to || '*'),
          Maksimòm: x.max_amount + ' HTG', Kòmanse: x.starts_on, Terminé: x.ends_on || '—', Note: x.note || '—'
        }))}' data-jl-title="Limite">
          <td>${esc(x.scope === 'agent' ? 'Agent : ' + nameOf(r.agents, x.agent_id, 'full_name') : 'Compagnie')}</td>
          <td>${esc(x.media_id ? nameOf(r.media, x.media_id, 'display_name') : 'Tous')}</td>
          <td>${esc(x.game_name || 'Tous')}</td>
          <td>${esc((x.number_from || '*') + ' → ' + (x.number_to || '*'))}</td>
          <td>${esc(Number(x.max_amount).toLocaleString('fr-HT'))} HTG</td>
          <td>${esc(x.starts_on)} ${x.ends_on ? '→ ' + esc(x.ends_on) : ''}</td>
          <td><button class="btn btn-sm btn-ghost" data-del="${x.id}"><i class="fa-solid fa-trash"></i></button></td></tr>`).join('')
          : '<tr><td colspan="7" class="muted">Aucune limite pour le moment.</td></tr>';
        v12.wireRows(host);
        b.querySelectorAll('[data-del]').forEach(btn => btn.onclick = async () => {
          if (!confirm('Supprimer cette limite ?')) return;
          try {
            /* V17 §7 — Modifier = Supprimer, ak gadfou tikè aktif (jl17_rpc_delete_limit
               anpeche retire yon limit si gen fich aktif ki depann de li). */
            await SB().rpc('jl17_rpc_delete_limit', { _id: btn.dataset.del });
            L.toast('Limite supprimée.', 'success'); list();
          }
          catch (e) { L.toast(e.message, 'error'); }
        });
      }
      q(host, '#lsave').onclick = async () => {
        const g = id => (q(host, '#' + id).value || '').trim();
        try {
          await v12.rpc('jl12_rpc_save_limit', {
            _id: null, _scope: g('lscope'), _agent: g('lagent') || null, _media: g('lmedia') || null,
            _game: g('lgame') || null, _from: g('lfrom') || null, _to: g('lto') || null,
            _max: Number(g('lmax') || 0), _starts: g('lstart') || null, _ends: g('lend') || null,
            _note: g('lnote') || null, _active: true
          });
          L.toast('Limite créée.', 'success'); list();
        } catch (e) { L.toast(e.message, 'error'); }
      };
      await list();
    }
  });

  /* ------------------ Bloquer une boule ------------------ */
  window.LotriShell.register('v12-blocked', {
    async render(host) {
      const r = await refs();
      host.innerHTML = `
        ${L.v11 ? L.v11.crumbs([{ label: 'dashboard', view: 'dashboard' }, { label: 'Bloquer une boule' }]) : ''}
        <div class="jl-card"><h3><i class="fa-solid fa-ban"></i> Bloquer une boule</h3>
          <div class="jl-form-grid">
            ${selects(r, 'b')}
            <div><label class="label">Boule</label><input class="input" id="bnum" placeholder="ex. 77"></div>
            <div><label class="label">Rezon</label><input class="input" id="breason" placeholder="rezon blokaj la"></div>
            <div><label class="label">Date kòmansman</label><input class="input" id="bstart" type="date" value="${new Date().toISOString().slice(0, 10)}"></div>
            <div><label class="label">Date fen (opsyonèl)</label><input class="input" id="bend" type="date"></div>
          </div>
          <div class="row" style="justify-content:flex-end;margin-top:.9rem">
            <button class="btn btn-primary" id="bsave"><i class="fa-solid fa-ban"></i> Bloquer la boule</button></div>
        </div>
        <div class="jl-card"><h3><i class="fa-solid fa-list"></i> Boules bloquées</h3>
          <div class="jl-scroll"><table class="table"><thead class="jl-sticky-hd"><tr>
            <th>Boule</th><th>Niveau</th><th>Tirage</th><th>Jeu</th><th>Période</th><th>Rezon</th><th></th>
          </tr></thead><tbody id="bbody"><tr><td colspan="7"><div class="spinner"></div></td></tr></tbody></table></div>
        </div>`;
      const nameOf = (arr, id, k) => (arr.find(x => x.id === id) || {})[k] || '—';
      async function list() {
        const { data, error } = await SB().from('jl12_blocked').select('*').order('created_at', { ascending: false });
        const b = q(host, '#bbody');
        if (error) { b.innerHTML = `<tr><td colspan="7" class="muted">${esc(error.message)}</td></tr>`; return; }
        b.innerHTML = (data || []).length ? data.map(x => `<tr data-jl-row='${esc(JSON.stringify({
          Boule: x.number, Niveau: x.scope, Rezon: x.reason || '—', Kòmanse: x.starts_on, Terminé: x.ends_on || '—'
        }))}' data-jl-title="Boule bloquée">
          <td>${v12.ball(x.number, { size: 'sm' })}</td>
          <td>${esc(x.scope === 'agent' ? 'Agent : ' + nameOf(r.agents, x.agent_id, 'full_name') : 'Compagnie')}</td>
          <td>${esc(x.media_id ? nameOf(r.media, x.media_id, 'display_name') : 'Tous')}</td>
          <td>${esc(x.game_name || 'Tous')}</td>
          <td>${esc(x.starts_on)} ${x.ends_on ? '→ ' + esc(x.ends_on) : ''}</td>
          <td>${esc(x.reason || '—')}</td>
          <td><button class="btn btn-sm btn-ghost" data-del="${x.id}"><i class="fa-solid fa-unlock"></i></button></td></tr>`).join('')
          : '<tr><td colspan="7" class="muted">Aucune boule bloquée.</td></tr>';
        v12.wireRows(host);
        b.querySelectorAll('[data-del]').forEach(btn => btn.onclick = async () => {
          try { await v12.rpc('jl12_rpc_unblock_number', { _id: btn.dataset.del }); L.toast('La boule est débloquée.', 'success'); list(); }
          catch (e) { L.toast(e.message, 'error'); }
        });
      }
      q(host, '#bsave').onclick = async () => {
        const g = id => (q(host, '#' + id).value || '').trim();
        try {
          await v12.rpc('jl12_rpc_block_number', {
            _id: null, _scope: g('bscope'), _agent: g('bagent') || null, _media: g('bmedia') || null,
            _game: g('bgame') || null, _number: g('bnum'), _reason: g('breason') || null,
            _starts: g('bstart') || null, _ends: g('bend') || null, _active: true
          });
          L.toast('La boule est bloquée.', 'success'); list();
        } catch (e) { L.toast(e.message, 'error'); }
      };
      await list();
    }
  });
})();


/* JADSTACK LOTTO V12 — SIVEYANS MACHIN (§7) : Vèt / Wouj / Ble */
(function () {
  const L = window.Lotri, v12 = L.v12, esc = v12.esc;
  window.LotriShell.register('v12-machines', {
    async render(host) {
      host.innerHTML = `
        ${L.v11 ? L.v11.crumbs([{ label: 'dashboard', view: 'dashboard' }, { label: 'Surveillance des machines' }]) : ''}
        <div class="jl-card"><h3><i class="fa-solid fa-desktop"></i> Surveillance des machines
          <span class="jl-chip"><span class="jl-dot green"></span>Actif</span>
          <span class="jl-chip"><span class="jl-dot red"></span>Inactif (+10 min)</span>
          <span class="jl-chip"><span class="jl-dot blue"></span>Bloqué</span>
          <button class="btn btn-sm btn-ghost" id="ref" style="margin-left:auto"><i class="fa-solid fa-rotate"></i></button></h3>
          <div class="jl-scroll"><table class="table"><thead class="jl-sticky-hd"><tr>
            <th>Statut</th><th>Agent</th><th>ID</th><th>Compagnie</th><th>Machine</th><th>Dernier signe</th>
          </tr></thead><tbody id="mb"><tr><td colspan="6"><div class="spinner"></div></td></tr></tbody></table></div>
        </div>`;
      async function paint() {
        try {
          const rows = await v12.rpc('jl12_rpc_machines');
          host.querySelector('#mb').innerHTML = (rows || []).length ? rows.map(r => `
            <tr data-jl-title="Machine" data-jl-row='${esc(JSON.stringify({
              Agent : r.full_name, ID: r.public_id, Compagnie: r.company_name || '—',
              Statut: r.state, 'Minutes sans signe': r.minutes_off, Machine: r.device || '—',
              'Dernier signe': r.last_seen ? new Date(r.last_seen).toLocaleString('fr-HT') : 'Jamè'
            }))}'>
            <td><span class="jl-dot ${esc(r.color)}"></span>${esc(r.state)}</td>
            <td>${esc(r.full_name || '—')}</td><td>${esc(r.public_id || '—')}</td>
            <td>${esc(r.company_name || '—')}</td><td>${esc(r.device || '—')}</td>
            <td>${r.last_seen ? esc(new Date(r.last_seen).toLocaleString('fr-HT')) : '<span class="muted">Jamè</span>'}</td></tr>`).join('')
            : '<tr><td colspan="6" class="muted">Aucune machine.</td></tr>';
          v12.wireRows(host);
        } catch (e) {
          host.querySelector('#mb').innerHTML = `<tr><td colspan="6" class="muted">${esc(e.message)}</td></tr>`;
        }
      }
      host.querySelector('#ref').onclick = paint;
      await paint();
      const t = setInterval(() => { document.body.contains(host) ? paint() : clearInterval(t); }, 60000);
    }
  });
})();


/* JADSTACK LOTTO V12 — ESTATISTIK AK FILT DAT (§8) */
(function () {
  const L = window.Lotri, v12 = L.v12, esc = v12.esc;
  const money = n => Number(n || 0).toLocaleString('fr-HT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' HTG';
  const iso = d => d.toISOString().slice(0, 10);
  window.LotriShell.register('v12-stats', {
    async render(host) {
      const to = new Date(), from = new Date(Date.now() - 6 * 864e5);
      host.innerHTML = `
        ${L.v11 ? L.v11.crumbs([{ label: 'dashboard', view: 'dashboard' }, { label: 'Estatistik' }]) : ''}
        <div class="jl-card"><h3><i class="fa-solid fa-chart-line"></i> Estatistik</h3>
          <div class="jl-form-grid">
            <div><label class="label">Du</label><input class="input" type="date" id="f" value="${iso(from)}"></div>
            <div><label class="label">Au</label><input class="input" type="date" id="t" value="${iso(to)}"></div>
            <div style="align-self:end"><button class="btn btn-primary" id="go"><i class="fa-solid fa-filter"></i> Filtrer</button></div>
          </div>
          <div id="cards" style="margin-top:1rem"><div class="spinner"></div></div>
          <div class="jl-scroll" style="margin-top:1rem"><table class="table"><thead class="jl-sticky-hd">
            <tr><th>Date</th><th>Ticket</th><th>Ventes</th><th>Prime</th><th>Net</th></tr></thead>
            <tbody id="db"></tbody></table></div>
        </div>`;
      async function load() {
        const f = host.querySelector('#f').value, t = host.querySelector('#t').value;
        if (f && t && f > t) { L.toast('La date « Du » doit précéder la date « Au ».', 'error'); return; }
        host.querySelector('#cards').innerHTML = '<div class="spinner"></div>';
        try {
          const s = await v12.rpc('jl12_rpc_stats', { _from: f, _to: t });
          host.querySelector('#cards').innerHTML = `<div class="jl-form-grid">
            ${[['Ticket', s.tickets], ['Ventes', money(s.sales)], ['Prime', money(s.prizes)], ['Net', money(s.net)]]
              .map(([k, v]) => `<div class="jl-card" style="margin:0"><div class="muted" style="font-size:.75rem">${k}</div>
                <div style="font-size:1.15rem;font-weight:700">${esc(String(v))}</div></div>`).join('')}</div>`;
          host.querySelector('#db').innerHTML = (s.by_day || []).length ? s.by_day.map(d => `<tr>
            <td>${esc(d.d)}</td><td>${esc(String(d.tickets))}</td><td>${money(d.sales)}</td>
            <td>${money(d.prizes)}</td><td>${money(Number(d.sales || 0) - Number(d.prizes || 0))}</td></tr>`).join('')
            : '<tr><td colspan="5" class="muted">Aucune donnée pour cette période.</td></tr>';
        } catch (e) { host.querySelector('#cards').innerHTML = `<div class="empty">${esc(e.message)}</div>`; }
      }
      host.querySelector('#go').onclick = load;
      await load();
    }
  });
})();


/* JADSTACK LOTTO V12 — PAJ KONPAYI INIFYE (§1 + §2) */
(function () {
  const L = window.Lotri, v12 = L.v12, SB = () => L.supabase, esc = v12.esc;
  window.LotriShell.register('v12-company', {
    async render(host) {
      const p = window.__lotriProfile || {};
      let c = {};
      if (p.company_id) {
        const { data } = await SB().from('jl9_companies').select('*').eq('id', p.company_id).maybeSingle();
        c = data || {};
      }
      host.innerHTML = `
        ${L.v11 ? L.v11.crumbs([{ label: 'dashboard', view: 'dashboard' }, { label: 'Ma compagnie' }]) : ''}
        <div class="jl-card"><h3><i class="fa-solid fa-building"></i> Ma compagnie</h3>
          <p class="muted" style="font-size:.78rem;margin-top:-.4rem">
            Logo ak non konpayi a nan yon sèl kote — pa gen doub paj ankò.</p>
          <div class="jl-form-grid" style="align-items:start">
            <div>${v12.imageDrop({ name: 'logo', src: c.logo_url || '', round: true, folder: 'konpayi', label: 'Logo de la compagnie a' })}</div>
            <div><label class="label">Nom de la compagnie a</label><input class="input" id="cname" value="${esc(c.name || '')}"></div>
            <div><label class="label">E-mail</label><input class="input" id="cemail" type="email" value="${esc(c.email || '')}"></div>
            <div><label class="label">Téléphone</label><input class="input" id="cphone" value="${esc(c.phone || '')}"></div>
            <div><label class="label">Adresse</label><input class="input" id="caddr" value="${esc(c.address || '')}"></div>
            <div><label class="label">${esc(L.t ? L.t('ticket.lang.title', 'Langue de la fiche') : 'Langue de la fiche')}</label>
              <select class="input" id="cticketlang">
                <option value="">${esc(L.t ? L.t('ticket.lang.platform_default', '— Valeur par défaut de la plateforme —') : '— Valeur par défaut de la plateforme —')}</option>
                <option value="fr">Français</option>
                <option value="ht">Créole</option>
                <option value="en">English</option>
              </select>
              <small class="muted">${esc(L.t ? L.t('ticket.lang.help', 'Cela n\'affecte pas la langue de votre navigation.') : 'Cela n\'affecte pas la langue de votre navigation.')}</small></div>
          </div>
          <div class="row" style="justify-content:flex-end;margin-top:.9rem">
            <button class="btn btn-primary" id="csave"><i class="fa-solid fa-check"></i> Enregistrer</button></div>
        </div>`;
      const tlSel = host.querySelector('#cticketlang');
      if (tlSel) tlSel.value = c.ticket_lang || '';
      host.querySelector('#csave').onclick = async () => {
        const g = id => (host.querySelector('#' + id).value || '').trim();
        try {
          const res = await v12.rpc('jl12_rpc_save_company', {
            _name: g('cname'), _logo: v12.imageValue(host, 'logo'), _email: g('cemail'),
            _phone: g('cphone'), _address: g('caddr')
          });
          if (tlSel && tlSel.value !== (c.ticket_lang || '')) {
            const { error: tlErr } = await SB().rpc('jl30_rpc_set_own_ticket_lang', { _lang: tlSel.value || null });
            if (tlErr) throw tlErr;
          }
          L.toast('Les informations de la compagnie sont enregistrées.', 'success');
          if (window.Lotri.branding && res && res.logo_url) window.Lotri.branding.refresh && window.Lotri.branding.refresh();
        } catch (e) { L.toast(e.message, 'error'); }
      };
    }
  });
})();


/* =====================================================================
 * JADSTACK LOTTO V15 — NWAYO PATAJE POU TOUT MODIL V13
 *  • Lotri.v13.rpc()          : apèl RPC ak mesaj erè klè
 *  • Lotri.v13.modal()        : modal senp (reyitilize CSS .modal-backdrop)
 *  • Lotri.v13.lists          : konpayi / ajan / medya / jeu (kachè)
 *  • Lotri.v13.exportCSV/XLSX/print : ekspòtasyon 100% kliyan
 *  • Lotri.v13.ticketDetail() : detay yon fich "exactement tel qu'il est imprimé"
 *  • Lotri.v13.loadScript()   : chaje SheetJS / Chart.js sou demann
 *  RÈG: PA GEN OKENN KOLÒN NI KALKIL KOMISYON ISIT LA.
 *       Solde = Ventes − Pou peye.
 * ===================================================================== */
(function () {
  const L = (window.Lotri = window.Lotri || {});
  const v13 = (L.v13 = L.v13 || {});
  const SB = () => L.supabase;
  const esc = L.escapeHtml || (s => String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])));
  v13.esc = esc;
  v13.toast = (m, k) => (L.toast ? L.toast(m, k) : console.log(k || 'info', m));

  /* ---------------- RPC ---------------- */
  v13.rpc = async function (name, args) {
    const { data, error } = await SB().rpc(name, args || {});
    if (error) throw new Error(error.message || 'Erreur du serveur.');
    return data;
  };

  /* ---------------- Fòma ---------------- */
  /* V17 §8 — tout montan lajan dwe gen "HTG" dèyè yo. */
  v13.money = n => (Number(n || 0)).toLocaleString('fr-HT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' HTG';
  v13.int = n => (Number(n || 0)).toLocaleString('fr-HT');
  v13.date = d => (d ? new Date(d).toLocaleDateString('fr-HT') : '—');
  v13.dt = d => (d ? new Date(d).toLocaleString('fr-HT') : '—');
  v13.today = () => new Date().toISOString().slice(0, 10);
  v13.daysAgo = n => new Date(Date.now() - n * 864e5).toISOString().slice(0, 10);

  /* ---------------- Chajman script ekstèn ---------------- */
  const loaded = {};
  v13.loadScript = src => loaded[src] || (loaded[src] = new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = src; s.onload = res; s.onerror = () => rej(new Error('Impossible de charger ' + src));
    document.head.appendChild(s);
  }));
  v13.sheetjs = () => v13.loadScript('https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js');
  v13.chartjs = () => v13.loadScript('https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js');

  /* ---------------- Modal ---------------- */
  v13.modal = function (html, opts) {
    opts = opts || {};
    const m = document.createElement('div');
    m.className = 'modal-backdrop';
    m.innerHTML = `<div class="modal ${opts.wide ? 'jl13-modal-wide' : ''}">
      <button class="btn btn-icon btn-ghost jl13-modal-x" data-close aria-label="Fermer"><i class="fa-solid fa-xmark"></i></button>
      ${html}</div>`;
    document.body.appendChild(m);
    const close = () => m.remove();
    m.addEventListener('click', e => {
      if (e.target === m || e.target.closest('[data-close]')) close();
    });
    return { el: m, close };
  };

  /* ---------------- Lis kachè ---------------- */
  const cache = {};
  const cached = (k, fn) => (cache[k] = cache[k] || fn());
  v13.companies = () => cached('companies', async () => {
    const { data } = await SB().from('jl9_companies').select('id,name').order('name');
    return data || [];
  });
  v13.agents = () => cached('agents', async () => {
    const { data } = await SB().from('jl9_agents').select('id,full_name,company_id').order('full_name');
    return data || [];
  });
  v13.branches = () => cached('branches', async () => {
    const { data } = await SB().from('jl9_branches').select('id,name,company_id').order('name');
    return data || [];
  });
  v13.medias = () => cached('medias', async () => {
    const { data } = await SB().from('jl11_draw_media')
      .select('id,display_name').is('deleted_at', null).order('display_name');
    return (data || []).map(r => ({ id: r.id, name: r.display_name }));
  });
  v13.games = () => cached('games', async () => {
    const { data } = await SB().from('jl9_games').select('*').order('sort_order');
    return data || [];
  });
  v13.plans = () => cached('plans', async () => {
    const { data } = await SB().from('jl13_plans').select('*').order('sort_order');
    return data || [];
  });
  v13.bust = k => { if (k) delete cache[k]; else Object.keys(cache).forEach(x => delete cache[x]); };

  v13.options = (rows, val, idKey, lblKey) => rows.map(r =>
    `<option value="${esc(r[idKey || 'id'])}" ${String(val) === String(r[idKey || 'id']) ? 'selected' : ''}>${esc(r[lblKey || 'name'])}</option>`).join('');

  /* ---------------- Ekspòtasyon (kliyan uniquement) ---------------- */
  function tableToMatrix(table) {
    return [...table.querySelectorAll('tr')].map(tr =>
      [...tr.querySelectorAll('th,td')].map(td => td.innerText.trim()));
  }
  /* V18 · KOREKSYON #2 — pa janm pase `null` bay tableToMatrix().
     Lè tab la pa egziste (lis vid), nou bay yon mesaj klè an kreyòl. */
  v13.matrixOf = function (src) {
    if (typeof src === 'string') {
      const el = document.querySelector(src);
      if (!el) throw new Error('Aucune donnée à exporter.');
      return tableToMatrix(el);
    }
    if (src instanceof HTMLElement) return tableToMatrix(src);
    if (Array.isArray(src) && src.length) return src;
    throw new Error('Aucune donnée à exporter.');
  };


  v13.exportCSV = function (src, name) {
    const rows = v13.matrixOf(src);
    const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' }));
    const a = document.createElement('a'); a.href = url; a.download = (name || 'ekspò') + '.csv'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };
  v13.exportXLSX = async function (src, name) {
    await v13.sheetjs();
    const ws = window.XLSX.utils.aoa_to_sheet(v13.matrixOf(src));
    const wb = window.XLSX.utils.book_new();
    window.XLSX.utils.book_append_sheet(wb, ws, 'Données');
    window.XLSX.writeFile(wb, (name || 'ekspò') + '.xlsx');
  };
  v13.print = function (src, title) {
    const rows = v13.matrixOf(src);
    const w = window.open('', '_blank', 'width=1000,height=700');
    if (!w) return v13.toast('Autorisez les fenêtres pop-up pour pouvoir imprimer.', 'error');
    w.document.write(`<html><head><title>${esc(title || 'JADSTACK LOTTO')}</title>
      <style>body{font-family:Inter,Arial,sans-serif;padding:18px;color:#12202b}
      h1{font-size:1.1rem;margin:0 0 .8rem}
      table{border-collapse:collapse;width:100%;font-size:.8rem}
      th,td{border:1px solid #ccd;padding:5px 7px;text-align:left}
      th{background:#eef3f7}</style></head><body>
      <h1>${esc(title || 'JADSTACK LOTTO')}</h1>
      <table>${rows.map((r, i) => `<tr>${r.map(c => `<${i ? 'td' : 'th'}>${esc(c)}</${i ? 'td' : 'th'}>`).join('')}</tr>`).join('')}</table>
      </body></html>`);
    w.document.close(); w.focus(); setTimeout(() => w.print(), 300);
  };
  /* PDF = enprime -> "Enregistrer en PDF" (100% kliyan, san depandans) */
  v13.exportPDF = (src, title) => v13.print(src, title);

  v13.exportBar = (id, name) => `<div class="row jl13-exports" data-exp="${esc(id)}" data-expname="${esc(name || 'ekspò')}">
      <button class="btn btn-sm btn-ghost" data-x="csv"><i class="fa-solid fa-file-csv"></i> CSV</button>
      <button class="btn btn-sm btn-ghost" data-x="xlsx"><i class="fa-solid fa-file-excel"></i> Excel</button>
      <button class="btn btn-sm btn-ghost" data-x="pdf"><i class="fa-solid fa-file-pdf"></i> PDF</button>
      <button class="btn btn-sm btn-ghost" data-x="print"><i class="fa-solid fa-print"></i> Imprimer</button>
    </div>`;
  v13.wireExports = function (host) {
    host.querySelectorAll('.jl13-exports').forEach(bar => {
      /* V18 · KOREKSYON #2 — dezaktive bouton yo lè tab la pa la (lis vid). */
      const target = document.getElementById(bar.dataset.exp);
      const empty = !target || !target.querySelector('tbody tr');
      bar.style.opacity = empty ? '.45' : '';
      bar.querySelectorAll('[data-x]').forEach(b => {
        b.disabled = empty;
        b.title = empty ? 'Aucune donnée à exporter' : '';
        b.onclick = async () => {
          if (b.disabled) return;
          const sel = '#' + bar.dataset.exp, nm = bar.dataset.expname;
          const k = b.dataset.x;
          try {
            if (k === 'csv') v13.exportCSV(sel, nm);
            else if (k === 'xlsx') await v13.exportXLSX(sel, nm);
            else v13.print(sel, nm);
          } catch (e) { v13.toast(e.message || 'Aucune donnée à exporter.', 'error'); }
        };
      });
    });
  };


  /* ---------------- Kat estatistik ---------------- */
  v13.kpis = list => `<div class="jl13-kpis">${list.map(k => `
    <div class="jl13-kpi ${k.tone || ''}"><span class="k">${esc(k.k)}</span>
      <strong class="v">${esc(k.v)}</strong>${k.sub ? `<span class="s">${esc(k.sub)}</span>` : ''}</div>`).join('')}</div>`;

  /* ---------------- Détails du ticket (pataje V15-5 / V15-6 · amelyore V18) ----------------
   * opts.print  → montre footer la (enprime). Nan popup la nou kache l.
   * V18 · KOREKSYON #4 : chak lo gayan parèt an detay (pozisyon, miltiplikatè,
   * montan) apati t.win_detail, epi tout enfòmasyon jeneral fich la parèt.
   * ------------------------------------------------------------------------ */
  const RANK_LBL = { 1: '1ye lo', 2: '2e lot', 3: '3e lot' };

  v13.ticketHtml = function (d, opts) {
    opts = opts || {};
    const t = d.ticket || {}, c = d.company || {}, a = d.agent || {}, dr = d.draw || {}, res = d.result;
    const closed = !!res;
    const hide = opts.hideOpenBalls && !closed && t.status === 'pending';
    const bets = Array.isArray(t.bets) ? t.bets : [];
    const wins = Array.isArray(t.win_detail) ? t.win_detail : [];
    const wonOn = n => wins.filter(w => String(w.n) === String(n));

    const rows = hide
      ? `<tr><td colspan="4" class="muted" style="text-align:center">
           <i class="fa-solid fa-eye-slash"></i> Les boules sont masquées — le tirage n'est pas encore fermé.</td></tr>`
      : (bets.length ? bets.map(b => {
        const n = b.n ?? b.number ?? '';
        const w = wonOn(n);
        return `<tr${w.length ? ' class="jl13-win-row"' : ''}>
            <td class="mono"><b>${esc(n)}</b></td>
            <td>${esc(b.game_code || b.game || 'borlette')}</td>
            <td class="num mono">${v13.money(b.a ?? b.amount)}</td>
            <td class="num mono">${w.length
          ? w.map(x => `<b>${esc(RANK_LBL[x.rank] || ('lo ' + x.rank))} · ${v13.money(x.prize)}</b>`).join('<br>')
          : '—'}</td></tr>`;
      }).join('')
        : `<tr><td colspan="4" class="muted">Aucun pari.</td></tr>`);

    const st = { pending: 'En attente', active: 'Actif', won: 'Gagnant', lost: 'Perdu', cancelled: 'Annuler', paid: 'Payé' }[t.status] || t.status || '—';
    const isWin = Number(t.prize_amount) > 0 || t.status === 'won' || t.status === 'paid';
    const gagnant = isWin ? (t.status === 'paid' ? 'Oui — déjà payé' : 'Oui — pas encore payé') : 'Nom';

    /* Rezime "tirages (boule = prix)" */
    const betsLine = hide ? 'les boules sont masquées' :
      (bets.length ? bets.map(b => `${esc(b.n ?? b.number ?? '')} = ${v13.money(b.a ?? b.amount)}`).join(' · ') : '—');

    const info = [
      ['ID de la fiche', `#${esc(t.ticket_no || '')}`],
      ['Seri', `<span class="mono">${esc(String(t.serial || ''))}</span>`],
      ['Tirages, jeux, boules & prix', `<b>${esc(dr.name || '—')}</b> ( ${betsLine} )`],
      ['Agent', esc(a.name || '—') + (a.public_id ? ` <span class="muted mono">(${esc(a.public_id)})</span>` : '')],
      ['Compagnie', esc(c.name || '—') + (c.public_id ? ` <span class="muted mono">(${esc(c.public_id)})</span>` : '')],
      ['Statut', esc(st)],
      ['Gagnant', gagnant + (isWin ? ` — ${v13.money(t.prize_amount)}` : '')],
      ['Date', v13.dt(t.created_at)],
      ['Date du tirage', dr.date ? v13.date(dr.date) : '—'],
      ['Total joué', v13.money(t.total)],
      ['Regleman', t.settled_at ? v13.dt(t.settled_at) : '—'],
      t.cancel_reason ? ['Rezon anilasyon', esc(t.cancel_reason)] : null
    ].filter(Boolean);

    return `<div class="jl13-fiche" id="jl13-fiche-print">
      <div class="jl13-fiche-hd">
        <strong>${esc(c.name || 'JADSTACK LOTTO')}</strong>
        <span class="muted">${esc(c.address || '')} ${c.phone ? '· ' + esc(c.phone) : ''}</span>
      </div>
      <div class="jl13-fiche-meta">
        <span>Fiche <b class="mono">#${esc(t.ticket_no || '')}</b></span>
        <span>Seri <b class="mono">${esc(String(t.serial || '').slice(0, 8))}</b></span>
        <span>Agent <b>${esc(a.name || '—')}</b></span>
        <span>Tirage <b>${esc(dr.name || '—')}</b></span>
        <span>Date <b>${v13.dt(t.created_at)}</b></span>
        <span>Statut <b>${esc(st)}</b></span>
      </div>

      <div class="table-wrap"><table class="table jl13-fiche-tbl">
        <thead><tr><th>Boule</th><th>Jeu</th><th class="num">Montant</th><th class="num">Genyen</th></tr></thead>
        <tbody>${rows}</tbody>
        <tfoot><tr><th colspan="3">TOTAL JWE</th><th class="num mono">${v13.money(t.total)}</th></tr>
        ${Number(t.prize_amount) > 0 ? `<tr><th colspan="3">À PAYER</th><th class="num mono">${v13.money(t.prize_amount)}</th></tr>` : ''}
        </tfoot></table></div>

      ${wins.length ? `<div class="jl13-fiche-wins">
        <h4 style="margin:.7rem 0 .3rem;font-size:.9rem">Détails des lots gagnants</h4>
        <div class="table-wrap"><table class="table">
          <thead><tr><th>Position</th><th>Boule</th><th>Jeu</th><th class="num">Jwe</th>
            <th class="num">Miltiplikatè</th><th class="num">Paiement</th></tr></thead>
          <tbody>${wins.map(w => {
        const mult = Number(w.amount) > 0 ? (Number(w.prize) / Number(w.amount)) : 0;
        return `<tr><td>${esc(RANK_LBL[w.rank] || ('lo ' + w.rank))}</td>
              <td class="mono"><b>${esc(w.n)}</b></td>
              <td>${esc(w.game_code || 'borlette')}</td>
              <td class="num mono">${v13.money(w.amount)}</td>
              <td class="num mono">${mult ? mult.toLocaleString('fr-HT', { maximumFractionDigits: 2 }) + 'x' : '—'}</td>
              <td class="num mono"><b>${v13.money(w.prize)}</b></td></tr>`;
      }).join('')}</tbody>
          <tfoot><tr><th colspan="5">TOTAL À PAYER</th>
            <th class="num mono">${v13.money(t.prize_amount)}</th></tr></tfoot>
        </table></div></div>` : ''}

      ${res ? `<div class="jl13-fiche-res">Résultats ${esc(dr.name || '')} :
          ${(L.v12 && L.v12.lots) ? L.v12.lots(res, dr.name) :
        `<b class="mono">${esc(res.lot1)} · ${esc(res.lot2)} · ${esc(res.lot3)}</b>`}</div>` : ''}

      ${opts.noInfo ? '' : `<div class="jl13-fiche-info">
        <h4 style="margin:.7rem 0 .3rem;font-size:.9rem">Enfòmasyon jeneral</h4>
        <div class="table-wrap"><table class="table">
          <tbody>${info.map(r => `<tr><th style="white-space:nowrap">${r[0]}</th><td>${r[1]}</td></tr>`).join('')}</tbody>
        </table></div></div>`}

      ${opts.print ? `<div class="jl13-fiche-ft muted">Imprimer ${Number(t.printed_count || 0)} fwa · JADSTACK LOTTO</div>` : ''}
    </div>`;
  };


  v13.ticketDetail = async function (id, opts) {
    try {
      const d = await v13.rpc('jl13_rpc_ticket_detail', { _id: id });
      /* §5.4 (PLAN-PRIME-KONEKTE-JWET) — pati « Payé »: SÈLMAN pou Agent,
         SÈLMAN sou yon fich gayan ki poko peye. */
      const _t = d.ticket || {};
      const _P = window.Lotri.peyeGayan;
      const _canPay = !!(_P && _P.isAgent(d.viewer)
        && _t.status === 'won' && !_t.paid_at
        && (!d.viewer || d.viewer.is_owner_agent !== false));
      const m = v13.modal(`<h3>Détails du ticket</h3>${v13.ticketHtml(d, opts)}
        ${_t.paid_at ? `<div class="muted" style="margin-top:.5rem;font-size:.82rem">
            <i class="fa-solid fa-circle-check"></i> Ce ticket a été payé le ${esc(v13.dt(_t.paid_at))}.</div>` : ''}
        <div class="row" style="justify-content:flex-end;margin-top:.8rem;gap:.4rem">
          ${_canPay ? `<button class="btn btn-primary" id="jl13-peye">
              <i class="fa-solid fa-hand-holding-dollar"></i> Payé</button>` : ''}
          <button class="btn btn-ghost" id="jl13-fp"><i class="fa-solid fa-print"></i> Imprimer</button>
          <button class="btn btn-primary" data-close>Fermer</button></div>`, { wide: true });
      if (_canPay) {
        m.el.querySelector('#jl13-peye').onclick = () => _P.popup({
          id: _t.id, ticket_no: _t.ticket_no,
          prize_amount: _t.prize_amount, win_detail: _t.win_detail
        }, () => { m.close(); });
      }
      m.el.querySelector('#jl13-fp').onclick = () => {
        const w = window.open('', '_blank', 'width=420,height=760');
        if (!w) return v13.toast('Autorisez les fenêtres pop-up pour pouvoir imprimer.', 'error');
        /* Vèsyon enprime: ak footer, san blòk "Enfòmasyon jeneral". */
        const printHtml = v13.ticketHtml(d, Object.assign({}, opts, { print: true, noInfo: true }));
        w.document.write(`<html><head><title>Fiche</title>
          <link rel="stylesheet" href="${location.origin}${location.pathname.replace(/[^/]*$/, '')}assets/css/final.css">
          <style>body{font-family:Inter,Arial,sans-serif;padding:10px}</style></head>
          <body>${printHtml}</body></html>`);
        w.document.close(); setTimeout(() => w.print(), 400);
      };

      return m;
    } catch (e) { v13.toast(e.message, 'error'); }
  };

  /* ---------------- Barre filtè reyitilizab ---------------- */
  v13.filterRow = html => `<div class="jl13-filters">${html}</div>`;
  v13.field = (label, inner) => `<label class="jl13-f"><span>${esc(label)}</span>${inner}</label>`;
})();


/* =====================================================================
 * V15-6 — MENI "FICHE" (Agent · Compagnie · Superadmin)
 *  Liste des tickets yo selon wòl · filtè dat/estati/chèche · klike = detay enprimab
 *  Popup gayan: jl13_rpc_my_wins + jl13_rpc_mark_wins_seen
 *  RPC: jl13_rpc_fiches(_from,_to,_status,_company,_agent,_q)
 * ===================================================================== */
(function () {
  const L = window.Lotri, v13 = L.v13, esc = v13.esc;

  const STATUS = {
    active: ['Actif', 'badge'],
    pending: ['En attente', 'badge'],
    won: ['Gagnant', 'badge-success'],
    paid: ['Payé', 'badge-success'],
    lost: ['Perdu', 'badge-muted'],
    cancelled: ['Annuler', 'badge-danger']
  };
  const chip = s => { const x = STATUS[s] || [s, 'badge']; return `<span class="badge ${x[1]}">${esc(x[0])}</span>`; };

  LotriShell.register('fiches', {
    render: async host => {
      const isSuper = (L.session && (L.session.role === 'super_admin')) || false;
      const [companies, agents] = await Promise.all([v13.companies(), v13.agents()]);
      host.innerHTML = `
        <div class="page-hd"><h2>Fiche <span data-jl27-winner-badge></span></h2>
          <p class="muted">Cliquez sur une ligne pour voir le ticket exactement tel qu'il est imprimé.</p></div>
        <div class="card"><div class="card-hd"><h3>Filtres</h3>
            <div class="row" style="gap:.4rem">
              <button class="btn btn-sm" id="only-wins"><i class="fa-solid fa-crown"></i> Gagnants uniquement</button>
              <button class="btn btn-sm" id="wins"><i class="fa-solid fa-trophy"></i> Mes gagnants</button>
              <button class="btn btn-primary btn-sm" id="go"><i class="fa-solid fa-filter"></i> Appliquer</button>
            </div></div>
          ${v13.filterRow(`
            ${v13.field('Du', `<input class="input" type="date" id="from" value="${v13.today()}">`)}
            ${v13.field('Au', `<input class="input" type="date" id="to" value="${v13.today()}">`)}
            ${v13.field('Statut', `<select class="input" id="status"><option value="">Tous</option>
               ${Object.keys(STATUS).map(k => `<option value="${k}">${STATUS[k][0]}</option>`).join('')}</select>`)}
            ${isSuper ? v13.field('Compagnie', `<select class="input" id="company"><option value="">Tous</option>${v13.options(companies)}</select>`) : ''}
            ${v13.field('Agent', `<select class="input" id="agent"><option value="">Tous</option>${v13.options(agents, '', 'id', 'full_name')}</select>`)}
            ${v13.field('Rechercher (numéro de ticket / série)', `<input class="input mono" id="q" placeholder="egz. 10234">`)}
          `)}
        </div>
        <div id="kpis"></div>
        <div class="card"><div class="card-hd"><h3>Liste des tickets</h3>${v13.exportBar('fiche-tbl', 'fich')}</div>
          <div id="tbl"><div class="empty">Chargement…</div></div></div>`;

      const $ = s => host.querySelector(s);

      async function load() {
        const rows = await v13.rpc('jl13_rpc_fiches', {
          _from: $('#from').value || v13.today(),
          _to: $('#to').value || v13.today(),
          _status: $('#status').value || null,
          _company: (isSuper && $('#company') ? $('#company').value : '') || null,
          _agent: $('#agent').value || null,
          _q: $('#q').value.trim() || null
        }) || [];

        const sales = rows.reduce((a, r) => a + Number(r.total || 0), 0);
        const pay = rows.reduce((a, r) => a + Number(r.prize_amount || 0), 0);
        $('#kpis').innerHTML = v13.kpis([
          { k: 'Fiche', v: v13.int(rows.length) },
          { k: 'Gagnant', v: v13.int(rows.filter(r => r.status === 'won' || r.status === 'paid').length), tone: 'ok' },
          { k: 'Ventes', v: v13.money(sales) },
          { k: 'À payer', v: v13.money(pay), tone: 'warn' },
          { k: 'Solde', v: v13.money(sales - pay) }
        ]);

        /* V48 — boulTxt te li x.number/x.boul, men fòm reyèl yon bet se
           {n, a, game_code} (jan sa antre nan POS ajan an). Se poutèt sa
           kolòn "Les boules" te toujou vid menm apre `bets` te rive. */
        const boulTxt = r => {
          let b = r.bets;
          if (typeof b === 'string') { try { b = JSON.parse(b); } catch (_) { b = []; } }
          if (!Array.isArray(b) || !b.length) return '—';
          return b.map(x => `${esc(x.n ?? x.number ?? x.boul ?? '')}${x.a != null ? '=' + Number(x.a).toFixed(0) : ''}`).join(' · ');
        };

        $('#tbl').innerHTML = rows.length ? `<div class="table-wrap"><table class="table" id="fiche-tbl">
          <thead><tr><th>Fiche</th><th>Seri</th><th>Agent</th><th>Compagnie</th><th>Tirage</th>
            <th>Les boules</th><th class="num">Quantité</th><th class="num">Total</th><th class="num">À payer</th>
            <th>Statut</th><th>Date</th><th></th></tr></thead>
          <tbody>${rows.map(r => `<tr class="jl13-click" data-t="${esc(r.id)}">
            <td class="mono"><b>#${esc(r.ticket_no)}</b></td><td class="mono muted">${esc(r.serial || '—')}</td>
            <td>${esc(r.agent_name)}</td><td>${esc(r.company_name)}</td><td>${esc(r.draw_name)}</td>
            <td class="mono">${boulTxt(r)}</td>
            <td class="num">${v13.int(Array.isArray(r.bets) ? r.bets.length : (r.bets_count||0))}</td><td class="num mono">${v13.money(r.total)}</td>
            <td class="num mono">${Number(r.prize_amount) > 0 ? v13.money(r.prize_amount) : '—'}</td>
            <td>${chip(r.status)}</td><td class="muted">${v13.dt(r.created_at)}</td>
            <td><button class="btn btn-sm" data-detail="${esc(r.id)}"><i class="fa-solid fa-eye"></i> Détails</button></td>
            </tr>`).join('')}</tbody>
          </table></div>` : '<div class="empty">Aucun ticket pour ces filtres.</div>';

        $('#tbl').querySelectorAll('[data-t]').forEach(tr => tr.onclick = () => v13.ticketDetail(tr.dataset.t));
        $('#tbl').querySelectorAll('[data-detail]').forEach(b => b.onclick = e => {
          e.stopPropagation(); v13.ticketDetail(b.dataset.detail);
        });
        v13.wireExports(host);
      }

      $('#go').onclick = () => load().catch(e => v13.toast(e.message, 'error'));
      $('#q').addEventListener('keydown', e => { if (e.key === 'Enter') $('#go').click(); });
      $('#wins').onclick = () => winsPopup(false);
      /* §2 — filtè rapid "Gagnant" (fusion ansyen vi "Fiches gagnantes") */
      $('#only-wins').onclick = () => {
        $('#status').value = 'won';
        $('#go').click();
      };
      await load();
      /* §5.3 (PLAN-PRIME-KONEKTE-JWET) — badge « or » ak kantite fich
         gayan ki poko peye (li rafrechi apre chak chajman lis la). */
      if (window.Lotri.peyeGayan) window.Lotri.peyeGayan.refreshBadges();

      /* §1 — POPUP OTOMATIK RETIRE ISIT LA.
         final-bundle se sèl responsab popup otomatik la (tan
         reyèl + mark_wins_seen). De sistèm ansanm te bay 2 modal pou menm
         fich la ak yon race condition sou jl13_rpc_mark_wins_seen.
         Bouton "Mes gagnants" anwo a rete pou louvri l manyèlman. */
    }
  });

  async function winsPopup(onlyNew) {
    const list = await v13.rpc('jl13_rpc_my_wins', { _only_new: !!onlyNew }) || [];
    if (!list.length) { if (!onlyNew) v13.toast('Aucune fiche gagnante pour le moment.', 'info'); return; }
    const m = v13.modal(`
      <h3><i class="fa-solid fa-trophy" style="color:#D9A441"></i> ${onlyNew ? 'Nouvelle fiche gagnante !' : 'Les fiches gagnantes'}</h3>
      <div class="table-wrap"><table class="table">
        <thead><tr><th>Fiche</th><th>Tirage</th><th class="num">Prix</th><th>Date</th></tr></thead>
        <tbody>${list.map(w => `<tr class="jl13-click" data-t="${esc(w.ticket_id || w.id)}">
          <td class="mono"><b>#${esc(w.ticket_no)}</b></td><td>${esc(w.draw_name || '—')}</td>
          <td class="num mono">${v13.money(w.prize_amount)}</td>
          <td class="muted">${v13.dt(w.created_at)}</td></tr>`).join('')}</tbody></table></div>
      <div class="row jl13-modal-ft"><button class="btn btn-primary" data-close>Bien compris</button></div>`, { wide: true });
    m.el.querySelectorAll('[data-t]').forEach(tr => tr.onclick = () => { m.close(); v13.ticketDetail(tr.dataset.t); });
    if (onlyNew) {
      const ids = list.map(w => w.id).filter(Boolean);
      if (ids.length) v13.rpc('jl13_rpc_mark_wins_seen', { _ids: ids }).catch(() => {});
    }
  }
  v13.winsPopup = winsPopup;
})();


/* =====================================================================
 * JADSTACK LOTTO V17 §3 — POPUP «FICHE GAYAN» POU AJAN (tan reyèl)
 * ---------------------------------------------------------------------
 *  • Du rezilta un tirage antre, tikè yo règle (jl13_settle) e sa ki
 *    genyen pran `status='won'` ak `seen_at=null` (V48 — te gen yon
 *    fot 'winner' olye 'won' ki te anpeche popup sa a parèt janm).
 *  • Isit la nou koute chanjman sou jl9_tickets an tan reyèl EPI nou fè
 *    yon tchèk lè moun nan konekte — konsa ajan an wè popup la SAN
 *    rafrechi paj la.
 *  • Chak channel gen yon non INIK epi li dekonekte lè paj la fermer
 *    (menm règ ak V17-BUG-1).
 * ===================================================================== */
(function () {
  const L = (window.Lotri = window.Lotri || {});
  const SB = () => L.supabase;
  const esc = L.escapeHtml || (s => String(s ?? ''));
  const money = n => Number(n || 0).toLocaleString('fr-HT',
    { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' HTG';

  let busy = false, channel = null, shown = {};

  async function rpc(name, args) {
    const { data, error } = await SB().rpc(name, args || {});
    if (error) throw new Error(error.message);
    return data;
  }

  function popup(list) {
    const rows = list.map(w => `
      <tr data-t="${esc(w.id)}">
        <td class="mono"><b>#${esc(w.ticket_no)}</b></td>
        <td>${esc(w.draw_name || '—')}</td>
        <td class="num mono" data-copy-value="${Number(w.prize_amount || 0)}">${money(w.prize_amount)}</td>
      </tr>`).join('');
    const body = `
      <p style="margin:.2rem 0 .8rem">
        <strong>${list.length === 1 ? 'Une fiche gagnante !' : list.length + ' fiche gagnante !'}</strong>
        ${list.length === 1 ? `Fiche <b>#${esc(list[0].ticket_no)}</b> gagnant — vous gagnez ${money(list[0].prize_amount)}.` : ''}
      </p>
      <div class="table-wrap"><table class="table">
        <thead><tr><th>Fiche</th><th>Tirage</th><th class="num">Prime</th></tr></thead>
        <tbody>${rows}</tbody></table></div>`;

    const foot = `<button class="btn btn-primary" id="jl17-see"><i class="fa-solid fa-eye"></i> Voir le ticket</button>`;
    let pop;
    if (L.v11 && L.v11.popup) {
      pop = L.v11.popup('🏆 Fiche genyen', body, { footer: foot });
    } else if (L.v13 && L.v13.modal) {
      pop = L.v13.modal(`<h3>🏆 Fiche genyen</h3>${body}
        <div class="row" style="justify-content:flex-end;margin-top:.8rem">${foot}</div>`, { wide: true });
    } else {
      L.toast && L.toast('Fiche genyen! ' + list.length + ' fiches gagnantes.', 'success');
      return;
    }
    const go = () => {
      pop.close();
      if (window.LotriShell) window.LotriShell.go(window.LotriShell.get('fiches') ? 'fiches' : 'tickets');
    };
    const btn = pop.el.querySelector('#jl17-see');
    if (btn) btn.onclick = go;
    pop.el.querySelectorAll('[data-t]').forEach(tr => tr.onclick = go);
  }

  async function check() {
    if (busy || !SB() || !window.__lotriProfile) return;
    busy = true;
    try {
      const list = (await rpc('jl13_rpc_my_wins', { _only_new: true }) || [])
        .filter(w => !shown[w.id]);
      if (list.length) {
        list.forEach(w => { shown[w.id] = 1; });
        popup(list);
        const ids = list.map(w => w.id).filter(Boolean);
        if (ids.length) rpc('jl13_rpc_mark_wins_seen', { _ids: ids }).catch(() => { });
      }
    } catch (_) { /* an silans */ }
    busy = false;
  }

  function arm(profile) {
    const role = (profile || {}).role;
    if (!['agent', 'supervisor', 'company'].includes(role)) return;
    check();
    /* V17-BUG-1 modèl: non channel inik + dekoneksyon */
    const name = 'jl17-wins-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
    channel = SB().channel(name)
      .on('postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'jl9_tickets' },
        payload => { if (payload.new && payload.new.status === 'won') check(); })
      .subscribe();
    window.addEventListener('beforeunload', () => {
      try { if (channel) SB().removeChannel(channel); } catch (_) { }
      channel = null;
    });
    setInterval(check, 60000);
  }

  L.v17 = L.v17 || {};
  L.v17.winsCheck = check;
  document.addEventListener('lotri:ready', () => arm(window.__lotriProfile || {}));
})();


/* =====================================================================
 * JADSTACK LOTTO V17 §8 — FOOTER FIKS SOU TOUT PAJ
 * ---------------------------------------------------------------------
 *  • Sou paj piblik yo (index, kontak, legal) gwo footer `data-footer`
 *    (branding.js) rete jan li ye — nou pa touche l.
 *  • Sou paj wòl yo (ajan, konpayi, super-admin, employeur) nou mete yon
 *    ti footer konpak anba chasi a: © ane a + non sistèm, lyen Facebook
 *    (soti nan config `footer.socials`, PA kòde an dir), ak ti tèks
 *    responsablite ki mennen nan legal.html#responsabilite.
 * ===================================================================== */
(function () {
  const L = (window.Lotri = window.Lotri || {});
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function socials() {
    const f = (L.config && L.config.footer) || {};
    return (f.socials || []).filter(s => s && s.url);
  }

  function html() {
    const f = (L.config && L.config.footer) || {};
    const b = (L.config && L.config.brand) || {};
    const year = new Date().getFullYear();
    const name = b.name || 'JADSTACK LOTTO';
    const mail = f.email || 'jadstacklotto@gmail.com';
    /* V27 FAZ 4b — sou paj ajan an, lyen «responsablite» a mennen nan
       paj «Conditions de l'agent» (nan app la, espesifik wòl la) olye paj
       legal jeneral sit la; lòt wòl yo (konpayi/SA/employeur) rete
       menm jan yo te ye a. */
    const isAgent = document.documentElement.dataset.role === 'agent';
    const respHref = isAgent ? '?view=aterms' : 'legal.html#responsabilite';
    return `
      <div class="jl17-foot-in">
        <span class="jl17-foot-c">© ${year} ${esc(name)} — tous droits réservés.</span>
        <span class="jl17-foot-soc">${socials().map(s =>
          `<a href="${esc(s.url)}" target="_blank" rel="noopener"
              aria-label="${esc(s.label || 'Rezo sosyal')}" title="${esc(s.label || '')}">
             <i class="${esc(s.icon || 'fa-solid fa-link')}"></i></a>`).join('')}</span>
        <a class="jl17-foot-resp" href="${respHref}"${isAgent ? ' data-go="aterms"' : ''}>
          <i class="fa-solid fa-circle-info"></i>
          Vous responsab de tout done ou antre — li règ yo
        </a>
        <a class="jl17-foot-mail" href="mailto:${esc(mail)}">${esc(mail)}</a>
      </div>`;
  }

  function paint() {
    document.querySelectorAll('[data-footer-mini]').forEach(el => {
      el.innerHTML = html();
      const go = el.querySelector('[data-go]');
      if (go && window.LotriShell) go.onclick = (ev) => { ev.preventDefault(); LotriShell.go(go.dataset.go); };
    });
  }

  function mount() {
    const shell = document.getElementById('shell');
    if (!shell || document.querySelector('[data-footer-mini]')) return;
    const el = document.createElement('footer');
    el.className = 'jl17-foot';
    el.setAttribute('data-footer-mini', '');
    (document.getElementById('view') || shell).after
      ? shell.appendChild(el)
      : shell.appendChild(el);
    paint();
  }

  L.paintMiniFooter = paint;

  document.addEventListener('lotri:ready', () => { mount(); setTimeout(paint, 800); });
  document.addEventListener('lotri:view', paint);
  document.addEventListener('DOMContentLoaded', () => { mount(); paint(); });
})();


/* =====================================================================
 * JADSTACK LOTTO — V27 FAZ 4 · Lyen aplikasyon POS nan footer AJAN
 * ---------------------------------------------------------------------
 *  Agent an PA gen popup ni card: paj `ajan.html` LI MENM se aplikasyon
 *  an (WebView), kidonk yon sèl lyen diskrè nan footer la — minimalist.
 *  Ti pwen limen (badge/pulse) parèt uniquement si Super Admin aktive l.
 *
 *  Modil sa a rete nan `assets/js/ajan/` pou tout kòd ajan an rete nan
 *  YON SÈL DOSYE (egzijans « primordial »): login-ajan.js, views.js,
 *  profile.js, rapo-jounen.js, apk-footer-ajan.js, ajan-app.css.
 *  Li otonòm: li pa depann de final-bundle
 * ===================================================================== */
(function () {
  const L = (window.Lotri = window.Lotri || {});
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const TABLE = 'jl_agent_app_links';
  const BUCKET = 'agent-apps';
  let painted = false;

  function urlFor(r) {
    if (r.external_url) return r.external_url;
    if (!r.file_path) return null;
    try { return L.supabase.storage.from(BUCKET).getPublicUrl(r.file_path).data.publicUrl; }
    catch (_) { return null; }
  }

  async function firstLink() {
    try {
      const { data, error } = await L.supabase.from(TABLE)
        .select('*').eq('is_active', true).order('sort_order').limit(5);
      if (error) return null;
      const rows = (data || []).map(r => ({ ...r, url: urlFor(r) })).filter(r => r.url);
      return rows[0] || null;
    } catch (_) { return null; }
  }

  async function mount() {
    if (painted) return;
    if (document.documentElement.dataset.role !== 'agent') return;
    const foot = document.querySelector('[data-footer-mini]');
    if (!foot) return;
    const row = await firstLink();
    if (!row) return;
    painted = true;
    const el = document.createElement('div');
    el.className = 'jl27-ajan-applink';
    el.innerHTML = `
      <a href="${esc(row.url)}" download target="_blank" rel="noopener">
        <i class="fa-solid fa-mobile-screen-button"></i>
        ${esc(row.platform_label || 'Application POS')}${row.version_label ? ' · ' + esc(row.version_label) : ''}
      </a>
      ${row.badge_enabled ? `<span class="jl27-dot">${esc(row.badge_text || 'Nouvelle version disponible')}</span>` : ''}`;
    foot.appendChild(el);
  }

  document.addEventListener('lotri:ready', () => setTimeout(mount, 900));
  document.addEventListener('lotri:view', () => { if (!painted) mount(); });
})();


/* =====================================================================
 * JADSTACK LOTTO V17 §9.2 — KOPYE DONE (double-klik sou PC · long-press sou mobil)
 * ---------------------------------------------------------------------
 *  • Yon sèl delegasyon evènman sou `document` (pa yon listener pa done).
 *  • Valeur kopye a: `data-copy-value` si li egziste (valè brit, san fòmataj),
 *    sinon tèks eleman an (oswa seleksyon an si moun nan te seleksyone).
 *  • Yon sèl klik pa janm kopye. Lyen (<a>), bouton ak chan fòm rete entak.
 *  • Feedback disrè: yon ti "Copié ✓" bò kote klik la (stil WhatsApp).
 * ===================================================================== */
(function () {
  const OK_TAGS = /^(TD|TH|SPAN|STRONG|B|EM|P|DIV|LI|H1|H2|H3|H4|H5|LABEL|SMALL|CODE)$/;
  const SKIP = 'a,button,input,textarea,select,[contenteditable="true"],[data-no-copy]';

  function targetOf(node) {
    if (!node || node.nodeType !== 1) return null;
    // Yon eleman ki gen `data-copy` eksprè (bouton "kopye lyen", elt.) toujou
    // aksesib menm si li se yon <button>/<a> — se rezon pou li egziste.
    const explicit = node.closest('[data-copy]');
    if (explicit) return explicit;
    if (node.closest(SKIP)) return null;
    const el = node.closest('[data-copy-value]') || node;
    if (!OK_TAGS.test(el.tagName)) return null;
    return el;
  }

  function valueOf(el) {
    // Bouton kopye eksplisit (`data-copy="valè"` sou <button>/<a data-no-copy>) —
    // valè a se atribi a limenm, pa `data-copy-value`.
    const explicit = el.getAttribute('data-copy');
    if (explicit != null && explicit !== '') return explicit.trim();
    const raw = el.getAttribute('data-copy-value');
    if (raw != null && raw !== '') return raw.trim();
    const sel = String(window.getSelection ? window.getSelection() : '').trim();
    if (sel && el.contains((window.getSelection().anchorNode || {}).parentNode || null)) return sel;
    const txt = (el.textContent || '').replace(/\s+/g, ' ').trim();
    return txt.length > 400 ? txt.slice(0, 400) : txt;
  }

  function flash(x, y, msg) {
    const t = document.createElement('div');
    t.className = 'jl17-copy-tip';
    t.textContent = msg;
    t.style.left = Math.max(8, Math.min(window.innerWidth - 120, x - 30)) + 'px';
    t.style.top = Math.max(8, y - 38) + 'px';
    document.body.appendChild(t);
    setTimeout(() => t.classList.add('out'), 700);
    setTimeout(() => t.remove(), 1100);
  }

  async function write(text) {
    if (!text) return false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (_) { /* tonbe sou fallback la */ }
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch (_) { return false; }
  }

  async function copyFrom(node, x, y) {
    const el = targetOf(node);
    if (!el) return;
    const val = valueOf(el);
    if (!val) return;
    const ok = await write(val);
    flash(x, y, ok ? 'Copié ✓' : 'Copie impossible');
  }

  /* ---- Bouton kopye eksplisit (`data-copy`) : yon sèl klik ---- */
  document.addEventListener('click', e => {
    const el = e.target.closest && e.target.closest('[data-copy]');
    if (!el) return;
    e.preventDefault();
    copyFrom(el, e.clientX, e.clientY);
  });

  /* ---- PC: double-klik ---- */
  document.addEventListener('dblclick', e => {
    copyFrom(e.target, e.clientX, e.clientY);
  });

  /* ---- Mobil/tablèt: long-press ~500ms san touchmove ---- */
  let timer = null, sx = 0, sy = 0, node = null;
  const clear = () => { if (timer) { clearTimeout(timer); timer = null; } node = null; };

  document.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) return clear();
    const t = e.touches[0];
    sx = t.clientX; sy = t.clientY; node = e.target;
    clear();
    node = e.target;
    timer = setTimeout(() => { timer = null; copyFrom(node, sx, sy); }, 500);
  }, { passive: true });

  document.addEventListener('touchmove', e => {
    const t = e.touches[0];
    if (!t) return clear();
    if (Math.abs(t.clientX - sx) > 10 || Math.abs(t.clientY - sy) > 10) clear();
  }, { passive: true });

  document.addEventListener('touchend', clear, { passive: true });
  document.addEventListener('touchcancel', clear, { passive: true });

  /* Zouti pou lòt modil: mete valè brit sou yon montan fòmate. */
  window.Lotri = window.Lotri || {};
  window.Lotri.copyable = (html, rawValue) =>
    `<span data-copy-value="${String(rawValue ?? '').replace(/"/g, '&quot;')}">${html}</span>`;
})();


/* =====================================================================
 * JADSTACK LOTTO — §5 PLAN-PRIME-KONEKTE-JWET
 *  5.3  Badge « or » : kantite nouvo fich gayan ki poko peye.
 *  5.4  Bouton « Payé » (AJAN uniquement, sou fich gayan) + popup
 *       verifikasyon ak kont a rebou 10 segond.
 * ---------------------------------------------------------------------
 * RÈG POPUP (jan plan §5.4 di l):
 *   • ID de la fiche la ekri AN GWO LÈT (pou konpare ak tikè fizik kliyan an).
 *   • Boule gayan yo ekri AN GWO LÈT tou.
 *   • « X » → anile: fich la RETE « poko peye ».
 *   • Klike DEYÒ kad la → menm bagay ak « X » (anile).
 *   • 10 segond pase san aksyon → fich la RETE « poko peye » (okenn
 *     peman otomatik san Agent pa aji).
 *   • « Confirmer » → jl9_rpc_mark_paid(ticket_id).
 * Fichye sa a pa touche okenn lòt lojik ki deja egziste.
 * ===================================================================== */
(function () {
  const L = (window.Lotri = window.Lotri || {});
  const SB = () => L.supabase;
  const esc = L.escapeHtml || (s => String(s == null ? '' : s)
    .replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])));
  const money = n => Number(n || 0).toLocaleString('fr-HT',
    { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' HTG';
  const toast = (m, k) => (L.toast ? L.toast(m, k) : console.log(k || 'info', m));

  const P = (L.peyeGayan = L.peyeGayan || {});

  /* ---- Rôle aktyèl la (Agent uniquement gen bouton « Payé ») ---- */
  P.isAgent = function (viewer) {
    if (viewer && viewer.role) return viewer.role === 'agent' || viewer.role === 'supervisor';
    const r = (L.session && L.session.role)
      || (window.__lotriProfile && window.__lotriProfile.role) || '';
    return r === 'agent' || r === 'supervisor';
  };

  /* ---- Boule gayan yo, apati win_detail ---- */
  const RANK_LBL = { 1: '1ye lo', 2: '2e lot', 3: '3e lot' };
  P.winningBalls = function (winDetail) {
    let w = winDetail;
    if (typeof w === 'string') { try { w = JSON.parse(w); } catch (_) { w = []; } }
    if (!Array.isArray(w)) w = [];
    return w.map(x => ({
      n: String(x.n ?? x.number ?? x.boul ?? ''),
      rank: Number(x.rank || 1),
      prize: Number(x.prize || x.amount_won || 0)
    })).filter(x => x.n);
  };

  /* =====================================================================
   * POPUP VERIFIKASYON + KONT A REBOU 10s
   * ticket = { id, ticket_no, prize_amount, win_detail }
   * onPaid = callback opsyonèl apre peman an valide
   * ===================================================================== */
  P.popup = function (ticket, onPaid) {
    if (!ticket || !ticket.id) return;
    const balls = P.winningBalls(ticket.win_detail);
    const idTxt = String(ticket.ticket_no || ticket.id).toUpperCase();

    const m = document.createElement('div');
    m.className = 'modal-backdrop jl27-peye-backdrop';
    m.innerHTML = `
      <div class="modal jl27-peye" role="dialog" aria-modal="true" aria-label="Vérification du paiement des fiches gagnantes">
        <button class="btn btn-icon btn-ghost jl27-peye-x" data-cancel aria-label="Annuler">
          <i class="fa-solid fa-xmark"></i></button>
        <h3 class="jl27-peye-hd"><i class="fa-solid fa-hand-holding-dollar"></i> Payer le ticket gagnant</h3>

        <p class="jl27-peye-q">Le client vous a-t-il remis le ticket portant cet ID ?</p>
        <div class="jl27-peye-id mono">${esc(idTxt)}</div>

        <p class="jl27-peye-q">Voici les boules gagnantes :</p>
        <div class="jl27-peye-balls">
          ${balls.length
            ? balls.map(b => `<span class="jl27-peye-ball mono">${esc(b.n)}
                 <small>${esc(RANK_LBL[b.rank] || ('lo ' + b.rank))}</small></span>`).join('')
            : '<span class="muted">—</span>'}
        </div>

        <div class="jl27-peye-total">Montant à payer : <strong>${esc(money(ticket.prize_amount))}</strong></div>

        <div class="jl27-peye-cd">
          <i class="fa-regular fa-clock"></i>
          <span data-cd>10</span> s — si le délai est dépassé, le ticket reste <b>poko peye</b>.
        </div>

        <div class="row jl27-peye-ft" style="justify-content:flex-end;gap:.5rem;margin-top:1rem">
          <button class="btn btn-ghost" data-cancel>Annuler</button>
          <button class="btn btn-primary" data-confirm>
            <i class="fa-solid fa-check"></i> Confirmer le paiement</button>
        </div>
      </div>`;
    document.body.appendChild(m);

    let done = false;
    let left = 10;
    const cdEl = m.querySelector('[data-cd]');
    const timer = setInterval(() => {
      left -= 1;
      if (cdEl) cdEl.textContent = String(Math.max(left, 0));
      if (left <= 0) {
        /* 10s pase san aksyon → EGAL ak « X » : anyen pa chanje. */
        close();
        toast('Le délai est écoulé — la fiche reste impayée.', 'info');
      }
    }, 1000);

    function close() {
      if (done) return;
      done = true;
      clearInterval(timer);
      m.remove();
    }

    m.querySelectorAll('[data-cancel]').forEach(b => b.onclick = () => close());
    /* Klike deyò kad la = menm bagay ak « X » */
    m.addEventListener('click', e => { if (e.target === m) close(); });

    m.querySelector('[data-confirm]').onclick = async () => {
      const btn = m.querySelector('[data-confirm]');
      btn.disabled = true;
      try {
        const { data, error } = await SB().rpc('jl9_rpc_mark_paid', { _ticket: ticket.id });
        if (error) throw error;
        close();
        toast('Fiche ' + idTxt + ' peye.', 'success');
        P.refreshBadges();
        if (typeof onPaid === 'function') onPaid(data);
      } catch (e) {
        btn.disabled = false;
        toast((e && e.message) || 'Impossible de marquer la fiche comme payée.', 'error');
      }
    };
  };

  /* =====================================================================
   * §5.3 — BADGE « OR » : kantite fich gayan ki poko peye
   * Nenpòt eleman ki gen [data-jl27-winner-badge] jwenn konte a.
   * ===================================================================== */
  P.count = async function () {
    try {
      const { data, error } = await SB().rpc('jl9_rpc_winner_badge');
      if (error) throw error;
      return data || { new_winners: 0, unpaid_winners: 0 };
    } catch (_) { return { new_winners: 0, unpaid_winners: 0 }; }
  };

  P.refreshBadges = async function () {
    const holders = document.querySelectorAll('[data-jl27-winner-badge]');
    if (!holders.length) return;
    const c = await P.count();
    const nNew = Number(c.new_winners || 0);
    const nAll = Number(c.unpaid_winners || 0);
    holders.forEach(h => {
      h.innerHTML = nAll
        ? `<span class="jl27-badge-gold${nNew ? ' is-new' : ''}"
              title="${nNew ? nNew + ' nouveau' : ''} fich gayan ki poko peye">
             <i class="fa-solid fa-trophy"></i> ${nAll}${nNew ? ' · ' + nNew + ' nouveau' : ''}</span>`
        : '';
    });
  };

  /* Estil badge/popup — mete isit la pou pa touche okenn CSS ki egziste */
  const st = document.createElement('style');
  st.textContent = `
    .jl27-badge-gold{display:inline-flex;align-items:center;gap:.35rem;padding:.12rem .5rem;
      border-radius:999px;background:linear-gradient(180deg,#F3C969,#D9A441);color:#3a2a05;
      font-weight:700;font-size:.78rem;box-shadow:0 1px 3px rgba(0,0,0,.25)}
    .jl27-badge-gold.is-new{animation:jl27GoldPulse 1.4s ease-in-out infinite}
    @keyframes jl27GoldPulse{0%,100%{box-shadow:0 0 0 0 rgba(217,164,65,.55)}
      50%{box-shadow:0 0 0 .35rem rgba(217,164,65,0)}}
    .jl27-peye{max-width:460px;text-align:center;position:relative}
    .jl27-peye-x{position:absolute;top:.4rem;right:.4rem}
    .jl27-peye-hd{margin:.2rem 0 .6rem}
    .jl27-peye-q{margin:.6rem 0 .3rem;font-size:.9rem}
    .jl27-peye-id{font-size:2rem;line-height:1.15;font-weight:800;letter-spacing:.06em;
      text-transform:uppercase;word-break:break-all;padding:.4rem .3rem;border-radius:.4rem;
      border:2px dashed var(--border,#bbb)}
    .jl27-peye-balls{display:flex;flex-wrap:wrap;gap:.45rem;justify-content:center;margin:.2rem 0 .4rem}
    .jl27-peye-ball{display:inline-flex;flex-direction:column;align-items:center;
      padding:.3rem .7rem;border-radius:.5rem;background:linear-gradient(180deg,#F3C969,#D9A441);
      color:#3a2a05;font-size:1.8rem;font-weight:800;line-height:1.05}
    .jl27-peye-ball small{font-size:.62rem;font-weight:700;text-transform:uppercase;opacity:.8}
    .jl27-peye-total{margin:.5rem 0 .2rem;font-size:1rem}
    .jl27-peye-cd{margin-top:.5rem;font-size:.82rem;opacity:.85}
    .jl27-peye-cd [data-cd]{font-weight:800}`;
  document.head.appendChild(st);
})();


/* =====================================================================
 * V22/V23 · C2 — POPUP « DETAY FICHE » PATAJE (ajan / konpayi / super-admin)
 * ---------------------------------------------------------------------
 * Yon sèl fonksyon: window.Lotri.showTicketDetail(idOrNo)
 * Nenpòt <tr data-ticket="…"> (id) oswa <tr data-ticket-no="…"> vin klikab.
 * V23 · C2-b — La fiche ka gen PLIZYÈ tiraj (jl9_ticket_draws, N-a-N).
 * Chak tiraj gen pwòp estati (pending/settled/cancelled), pwòp bets,
 * pwòp prim/win_detail; fich la (jl9_tickets) rete 'active' jiskaske
 * TOUT tiraj ladan l rezoud.
 * ===================================================================== */
(function () {
  const L = window.Lotri || (window.Lotri = {});
  const SB = () => window.Lotri.supabase;
  const esc = (s) => window.Lotri.escapeHtml(String(s == null ? '' : s));
  const money = (n) => Number(n || 0).toLocaleString('fr-HT', {
    minimumFractionDigits: 2, maximumFractionDigits: 2
  }) + ' HTG';

  const STATUS_LBL = {
    active: 'Actif', won: 'Gagnant', lost: 'Nom gagnant',
    cancelled: 'Annuler', paid: 'Payé', pending: 'En attente'
  };

  function betsHtml(bets) {
    let list = [];
    if (Array.isArray(bets)) list = bets;
    else if (bets && typeof bets === 'object') {
      list = Object.keys(bets).map(k => ({ number: k, amount: bets[k] }));
    }
    if (!list.length) return '<span class="muted">—</span>';
    return list.map(b => {
      const num = b.number ?? b.num ?? b.boul ?? b.n ?? '—';
      const amt = b.amount ?? b.mise ?? b.price ?? b.montan ?? 0;
      const gm = b.game ?? b.game_code ?? '';
      return `<span class="chip" style="margin:.15rem .2rem 0 0">${esc(num)}${gm ? ' · ' + esc(gm) : ''} = ${esc(money(amt))}</span>`;
    }).join('');
  }

  const TD_STATUS_LBL = { pending: 'En attente', settled: 'Rezoud', cancelled: 'Annuler' };

  function winHtml(win) {
    const rows = Array.isArray(win) ? win : [];
    if (!rows.length) return '';
    return `<div class="table-wrap" style="margin-top:.6rem"><table class="table"><thead><tr>
      <th>Lo</th><th>Boule</th><th class="num">Miltiplikatè</th><th class="num">Montant</th>
      </tr></thead><tbody>${rows.map(w => `<tr>
        <td>${esc(w.lot || w.position || w.lo || '—')}</td>
        <td class="mono">${esc(w.number || w.boul || '—')}</td>
        <td class="num">${esc(w.multiplier || w.payout_x || '—')}</td>
        <td class="num">${esc(money(w.amount || w.montan || 0))}</td>
      </tr>`).join('')}</tbody></table></div>`;
  }

  L.showTicketDetail = async function (idOrNo) {
    if (!idOrNo) return;
    const sel = '*, jl9_agents(full_name,public_id), jl9_companies(name)';
    const isUuid = /^[0-9a-f-]{36}$/i.test(String(idOrNo));
    let q = SB().from('jl9_tickets').select(sel);
    q = isUuid ? q.eq('id', idOrNo) : q.eq('ticket_no', idOrNo);
    const { data: t, error } = await q.limit(1).maybeSingle();
    if (error || !t) {
      window.Lotri.toast((error && error.message) || 'Cette fiche est introuvable.', 'error');
      return;
    }

    /* V23 · C2-b — chaje TOUT tiraj ki sou fich la (jl9_ticket_draws) */
    const { data: tds, error: tdErr } = await SB().from('jl9_ticket_draws')
      .select('*, jl9_draws(name)').eq('ticket_id', t.id).order('created_at');
    const drawLines = tdErr ? [] : (tds || []);

    const gayan = t.status === 'won' || t.status === 'paid' || Number(t.prize_amount || 0) > 0;
    const peye = !!(t.paid_at || t.paid || t.status === 'paid');
    const fullySettled = drawLines.length > 0 && drawLines.every(d => d.status === 'settled' || d.status === 'cancelled');

    const drawSectionsHtml = drawLines.length
      ? drawLines.map(d => `
        <div style="margin:.5rem 0;padding:.5rem;border:1px solid var(--border);border-radius:.4rem">
          <div class="row" style="justify-content:space-between;align-items:center">
            <strong>${esc((d.jl9_draws && d.jl9_draws.name) || '—')}</strong>
            <span class="badge ${d.status === 'settled' ? (Number(d.prize_amount||0) > 0 ? 'badge-success' : '') : d.status === 'cancelled' ? 'badge-danger' : 'badge-warning'}">${esc(TD_STATUS_LBL[d.status] || d.status)}</span>
          </div>
          <div style="margin:.35rem 0 .2rem"><span class="muted" style="font-size:.8rem">Boule &amp; Prix :</span></div>
          <div>${betsHtml(d.bets)}</div>
          <div class="row" style="gap:1rem;margin-top:.35rem;font-size:.85rem">
            <div><span class="muted">Sou-total :</span> <strong>${esc(money(d.subtotal))}</strong></div>
            ${d.status === 'settled' ? `<div><span class="muted">Prime :</span> <strong>${esc(money(d.prize_amount))}</strong></div>` : ''}
          </div>
          ${d.status === 'settled' && Number(d.prize_amount || 0) > 0
            ? `<div class="muted" style="margin-top:.5rem;font-size:.8rem">Détails des lots</div>${winHtml(d.win_detail) || '<span class="muted">Aucun détail de lot.</span>'}`
            : ''}
        </div>`).join('')
      : `<div style="margin:.35rem 0 .2rem"><span class="muted">Boule &amp; Prix :</span></div><div>${betsHtml(t.bets)}</div>`;

    const body = `
      <div class="form-grid" style="gap:.45rem">
        <div><span class="muted">ID :</span> <strong class="mono">${esc(t.ticket_no || t.id)}</strong></div>
        <div><span class="muted">Date :</span> <strong>${t.created_at ? new Date(t.created_at).toLocaleString('fr-HT') : '—'}</strong></div>
        <div><span class="muted">Agent :</span> <strong>${esc((t.jl9_agents && t.jl9_agents.full_name) || '—')}</strong></div>
        <div><span class="muted">Compagnie :</span> <strong>${esc((t.jl9_companies && t.jl9_companies.name) || '—')}</strong></div>
      </div>
      <hr style="margin:.7rem 0;border:0;border-top:1px solid var(--border)">
      <div class="muted" style="font-size:.8rem;margin-bottom:.2rem">
        Tirage / Jeu / Boule &amp; Prix ${drawLines.length > 1 ? '(' + drawLines.length + ' tirages sur la fiche)' : ''} :
      </div>
      ${drawSectionsHtml}
      <hr style="margin:.7rem 0;border:0;border-top:1px solid var(--border)">
      <div class="row" style="gap:.5rem;flex-wrap:wrap">
        <span class="badge ${t.status === 'won' ? 'badge-success' : t.status === 'cancelled' ? 'badge-danger' : ''}">Statut du ticket : ${esc(STATUS_LBL[t.status] || t.status || '—')}</span>
        <span class="badge ${gayan ? 'badge-success' : ''}">Gagnant : ${gayan ? 'Oui' : 'Nom'}</span>
        <span class="badge ${peye ? 'badge-success' : 'badge-warning'}">Payé : ${peye ? 'Oui' : 'Nom'}</span>
        ${drawLines.length > 1 && t.status === 'active'
          ? `<span class="badge badge-warning">${fullySettled ? 'Tous les tirages sont réglés' : 'En attente d\'autres tirages'}</span>` : ''}
      </div>
      <div class="row" style="gap:1.2rem;margin-top:.6rem">
        <div><span class="muted">Total :</span> <strong>${esc(money(t.total))}</strong></div>
        <div><span class="muted">Prime total :</span> <strong>${esc(money(t.prize_amount))}</strong></div>
      </div>
    `;

    const m = document.createElement('div');
    m.className = 'modal-backdrop';
    m.innerHTML = `<div class="modal" style="max-width:560px">
      <h3>Détails du ticket</h3>${body}
      <div class="row" style="justify-content:flex-end;margin-top:1rem">
        <button class="btn btn-ghost" data-close>Fermer</button></div></div>`;
    document.body.appendChild(m);
    const close = () => m.remove();
    m.querySelector('[data-close]').onclick = close;
    m.addEventListener('click', (e) => { if (e.target === m) close(); });
  };

  /* Delegasyon global — travay sou tout paj (ajan, konpayi, super-admin) */
  document.addEventListener('click', (e) => {
    if (e.target.closest('button, a, input, select, [data-del], [data-req]')) return;
    const row = e.target.closest('[data-ticket],[data-ticket-no]');
    if (!row) return;
    L.showTicketDetail(row.dataset.ticket || row.dataset.ticketNo);
  });

  /* Kursè "klikab" sou liy fich yo */
  const st = document.createElement('style');
  st.textContent = 'tr[data-ticket],tr[data-ticket-no]{cursor:pointer}'
    + 'tr[data-ticket]:hover,tr[data-ticket-no]:hover{background:var(--bg-soft,rgba(0,0,0,.04))}';
  document.head.appendChild(st);
})();


/* =====================================================================
 * V22 · C3 — POPUP DETAY KONPAYI / AJAN + etikèt non plan
 * ---------------------------------------------------------------------
 *   window.Lotri.showCompanyDetail(id)
 *   window.Lotri.showAgentDetail(id)
 *   window.Lotri.planLabel(companyId)  → « Starter » | null
 * Delegasyon: <tr data-company="…"> / <tr data-agent="…">
 * ===================================================================== */
(function () {
  const L = window.Lotri || (window.Lotri = {});
  const SB = () => window.Lotri.supabase;
  const esc = (s) => window.Lotri.escapeHtml(String(s == null ? '' : s));

  let planCache = null;
  L.companyPlans = async function () {
    if (planCache) return planCache;
    const { data } = await SB().from('jl13_company_plan_v').select('*');
    planCache = {};
    (data || []).forEach(r => { planCache[r.company_id] = r; });
    return planCache;
  };
  L.planLabel = async function (companyId) {
    const p = await L.companyPlans();
    const r = p[companyId];
    return r && r.plan_name ? r.plan_name : null;
  };

  const tel = (v) => v ? `<a href="tel:${esc(v)}">${esc(v)}</a>` : '<span class="muted">—</span>';
  const mail = (v) => v ? `<a href="mailto:${esc(v)}">${esc(v)}</a>` : '<span class="muted">—</span>';
  const line = (k, v) => `<div><span class="muted">${esc(k)} :</span> ${v}</div>`;

  function modal(title, body) {
    const m = document.createElement('div');
    m.className = 'modal-backdrop';
    m.innerHTML = `<div class="modal" style="max-width:520px"><h3>${esc(title)}</h3>
      <div class="form-grid" style="gap:.45rem">${body}</div>
      <div class="row" style="justify-content:flex-end;margin-top:1rem">
        <button class="btn btn-ghost" data-close>Fermer</button></div></div>`;
    document.body.appendChild(m);
    const close = () => m.remove();
    m.querySelector('[data-close]').onclick = close;
    m.addEventListener('click', (e) => { if (e.target === m) close(); });
  }

  L.showCompanyDetail = async function (id) {
    const { data: c, error } = await SB().from('jl9_companies').select('*').eq('id', id).maybeSingle();
    if (error || !c) { window.Lotri.toast((error && error.message) || 'Compagnie introuvable', 'error'); return; }
    const plan = await L.planLabel(id);
    modal(`${c.name}${plan ? ' (' + plan + ')' : ''}`, [
      line('Nom', `<strong>${esc(c.name)}</strong>`),
      line('Forfait', plan ? `<span class="chip">${esc(plan)}</span>` : '<span class="muted">—</span>'),
      line('Statut', `<span class="badge ${c.status === 'active' ? 'badge-success' : 'badge-danger'}">${esc(c.status)}</span>`),
      line('Téléphone', tel(c.phone)),
      line('E-mail', mail(c.email)),
      line('Deuxième e-mail', mail(c.email_2)),
      line('Adresse', esc(c.address || '—')),
      line('Département', esc(c.department || '—')),
      line('Pays', esc(c.country || '—')),
      line('Créer', c.created_at ? new Date(c.created_at).toLocaleDateString('fr-HT') : '—')
    ].join(''));
  };

  L.showAgentDetail = async function (id) {
    const { data: a, error } = await SB().from('jl9_agents')
      .select('*, jl9_companies(name)').eq('id', id).maybeSingle();
    if (error || !a) { window.Lotri.toast((error && error.message) || 'Agent introuvable', 'error'); return; }
    const plan = a.company_id ? await L.planLabel(a.company_id) : null;
    const alt = Array.isArray(a.alt_names) && a.alt_names.length ? a.alt_names.join(', ') : '—';
    modal(a.full_name || 'Agent', [
      line('ID piblik', `<strong class="mono">${esc(a.public_id || '—')}</strong>`),
      line('Nom complet', `<strong>${esc(a.full_name || '—')}</strong>`),
      line('Autre nom', esc(alt)),
      line('Compagnie', esc((a.jl9_companies && a.jl9_companies.name) || '—') + (plan ? ` <span class="chip">${esc(plan)}</span>` : '')),
      line('Statut', `<span class="badge ${a.status === 'active' ? 'badge-success' : 'badge-danger'}">${esc(a.status)}</span>`),
      line('Téléphone', tel(a.phone)),
      line('E-mail', mail(a.email)),
      line('Deuxième e-mail', mail(a.email_2)),
      line('Adresse', esc(a.address || '—')),
      line('Département', esc(a.department || '—')),
      line('Pays', esc(a.country || '—'))
    ].join(''));
  };

  document.addEventListener('click', (e) => {
    if (e.target.closest('button, a, input, select')) return;
    const rc = e.target.closest('[data-company-detail]');
    if (rc) { L.showCompanyDetail(rc.dataset.companyDetail); return; }
    const ra = e.target.closest('[data-agent-detail]');
    if (ra) { L.showAgentDetail(ra.dataset.agentDetail); }
  });

  const st = document.createElement('style');
  st.textContent = 'tr[data-company-detail],tr[data-agent-detail]{cursor:pointer}';
  document.head.appendChild(st);
})();


/* =====================================================================
 * V22 · B3 — WIDGET DAT/LÈ AYITI (header + sidemenu) + paj Super-Admin
 * pou ajiste yon offset afichaj (jl12_rpc_set_clock_offset).
 * ===================================================================== */
(function () {
  const SB = () => window.Lotri.supabase;
  const esc = (s) => window.Lotri.escapeHtml(String(s == null ? '' : s));
  let state = { ht_date: '—', ht_time: '--:--', offset_minutes: 0, ht_offset: '' };

  const css = document.createElement('style');
  css.textContent = `
  .ht-clock{display:flex;flex-direction:column;align-items:center;line-height:1.15;
    font-weight:600;font-family:var(--font-display,inherit);white-space:nowrap}
  .ht-clock .d{font-size:.74rem;opacity:.75}
  .ht-clock .t{font-size:.95rem}
  .ht-clock-side{padding:.5rem 0 .7rem;border-bottom:1px solid var(--border)}`;
  document.head.appendChild(css);

  function paint() {
    document.querySelectorAll('.ht-clock').forEach(el => {
      el.innerHTML = `<span class="d">${esc(state.ht_date)}</span><span class="t">${esc(state.ht_time)}</span>`;
      el.title = 'Heure Haïti ' + (state.ht_offset || '');
    });
  }

  async function refresh() {
    try {
      const { data } = await SB().rpc('jl12_rpc_clock');
      if (data) { state = Object.assign(state, data); paint(); }
    } catch (_) { /* silans */ }
  }

  function tickLocal() {
    /* avanse lè lokal ant chak apèl sèvè */
    if (!/^\d{2}:\d{2}$/.test(state.ht_time)) return;
    let [h, m] = state.ht_time.split(':').map(Number);
    m += 1; if (m >= 60) { m = 0; h = (h + 1) % 24; }
    state.ht_time = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
    paint();
  }

  function mount() {
    const right = document.querySelector('.appbar .right');
    if (right && !right.querySelector('.ht-clock')) {
      const el = document.createElement('div');
      el.className = 'ht-clock';
      right.insertBefore(el, right.firstChild);
    }
    const side = document.getElementById('side-company');
    if (side && !side.parentNode.querySelector('.ht-clock-side')) {
      const el = document.createElement('div');
      el.className = 'ht-clock ht-clock-side';
      side.parentNode.insertBefore(el, side);
    }
    paint();
  }

  document.addEventListener('lotri:ready', () => {
    setTimeout(mount, 300);
    refresh();
    setInterval(refresh, 60000);
    setInterval(tickLocal, 60000);
  });

  /* ---------- Paj Super-Admin : « Heure du système » ---------- */
  if (window.LotriShell && LotriShell.register) {
    LotriShell.register('sys-clock', {
      render: async (host) => {
        const { data } = await SB().rpc('jl12_rpc_clock');
        const c = data || {};
        host.innerHTML = `<div class="card"><div class="card-hd"><h3>Heure du système (Ayiti)</h3></div>
          <div class="grid-stats" style="margin-bottom:1rem">
            <div class="card stat"><div class="lbl">Date Ayiti</div><div class="val">${esc(c.ht_date || '—')}</div></div>
            <div class="card stat"><div class="lbl">Heure Haïti</div><div class="val">${esc(c.ht_time || '—')}</div></div>
            <div class="card stat"><div class="lbl">Fizo</div><div class="val">${esc(c.ht_offset || '—')}</div></div>
            <div class="card stat"><div class="lbl">Ajisteman</div><div class="val">${esc(c.offset_minutes || 0)} min</div></div>
          </div>
          <p class="muted" style="font-size:.82rem">L\'ajustement est pour <strong>afichaj</strong> uniquement
            (li pa chanje fizo orè Postgres la). Sèvi ak li uniquement si w remake yon dekalaj.</p>
          <div class="row" style="gap:.6rem;align-items:flex-end">
            <div><label class="label">Ajisteman (minit)</label>
              <input class="input" id="off" type="number" step="1" min="-720" max="720" value="${Number(c.offset_minutes || 0)}"></div>
            <button class="btn btn-primary" id="save"><i class="fa-solid fa-floppy-disk"></i> Enregistrer</button>
            <button class="btn btn-ghost" id="reset">Restaurer 0</button>
          </div></div>`;
        const save = async (v) => {
          const { error } = await SB().rpc('jl12_rpc_set_clock_offset', { _minutes: Number(v) });
          if (error) { window.Lotri.toast(error.message, 'error'); return; }
          window.Lotri.toast('L\'heure du système est mise à jour', 'success');
          refresh(); LotriShell.go('sys-clock');
        };
        host.querySelector('#save').onclick = () => save(host.querySelector('#off').value);
        host.querySelector('#reset').onclick = () => save(0);
      }
    });
  }
})();


/* =====================================================================
 * JADSTACK LOTTO V30 §2.6 — MIGRASYON lang-v28.js (Mariage GRATUIT)
 * ---------------------------------------------------------------------
 * Ansyen DICT 3-lang hardcoded la RETIRE isit — kontni an migre kòm
 * break-point nòmal nan `jl30_i18n_strings` (kle mg.title, mg.msg,
 * mg.gotIt, mg.ball, mg.price, mg.free, mg.subtitle, mg.close, mg.lang),
 * chaje pa i18n.js santral (RPC). Seleksyonè lang pwòp a Mariage Gratis
 * la retire tou — lang navigasyon GLOBAL la (§2.5, v30/lang-switch.js)
 * kontwole tout paj yo kounye a, ansanm ak Mariage Gratis.
 * ===================================================================== */
(function () {
  const L = (window.Lotri = window.Lotri || {});
  const V = (L.v28 = L.v28 || {});

  // Ti sekou si diksyonè santral la poko fin chaje (rezo lan, etc).
  const FALLBACK_HT = {
    'mg.title': 'Mariage GRATUIT',
    'mg.msg': 'Le Mariage GRATUIT est un cadeau reçu automatiquement lors de la création d\'un ticket. Le système peut vous l\'attribuer selon les règles programmées par l\'administration. Son prix affichera toujours 0.',
    'mg.gotIt': 'Vous venez de recevoir un Mariage GRATUIT !',
    'mg.ball': 'Boule cadeau',
    'mg.price': 'Prix',
    'mg.free': 'GRATIS · 0 HTG',
    'mg.lang': 'Langue',
    'mg.subtitle': 'Message du système',
    'mg.close': 'Fermer',
  };

  /* Langue aktyèl la se toujou lang navigasyon GLOBAL la (§2.5) — pa gen
     lang apa pou Mariage Gratis ankò. Paramètres `code` nan V.t rete pou
     konpatibilite ak ansyen apèl (bubbleHtml(code)) men pa itilize. */
  V.lang = function () {
    return (L.i18n && L.i18n.current) || 'fr';
  };

  V.setLang = function (code) {
    if (L.i18n && typeof L.i18n.load === 'function') L.i18n.load(code);
  };

  V.t = function (key) {
    const v = L.t ? L.t(key, null) : null;
    return (v !== null && v !== undefined) ? v : (FALLBACK_HT[key] || key);
  };

  // Ansyen picker pwòp (jl28-lang) retire — pa gen anyen pou rann ankò.
  // Rete pou konpatibilite ak kòd ki rele l toujou (retounen vid).
  V.langPickerHtml = function () { return ''; };
})();


/* =====================================================================
 * JADSTACK LOTTO V28 — MARYAJ GRATIS (bò AJAN)
 * ---------------------------------------------------------------------
 * • Messages enfòmasyon an nan 3 lang (Créole / Français / English), ak yon
 *   prezantasyon tankou mesaj WhatsApp sou iPhone (bul, ke bul, lè).
 * • Lè yon fich fin kreye, sistèm nan mande baz done a si ajan an merite
 *   yon Mariage GRATUIT (règ yo se Superadmin ki pwograme yo). Si wi, boul
 *   kado a ajoute sou fich la ak PRI 0 et marquée « bonus/cadeau ».
 * • Okenn lòt lojik (POS, enprime, gayan, faktirasyon) pa modifye — nou
 *   uniquement koute apèl `jl9_rpc_create_ticket` ki deja egziste.
 * ===================================================================== */
(function () {
  const L = (window.Lotri = window.Lotri || {});
  const V = (L.v28 = L.v28 || {});
  const SB = () => L.supabase;
  const esc = L.escapeHtml || (s => String(s == null ? '' : s)
    .replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])));
  const now = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const MG = (V.mg = V.mg || {});

  /* ---------------------------------------------------------------
   * 1) Bul mesaj estil WhatsApp iOS
   * ------------------------------------------------------------- */
  MG.bubbleHtml = function (code) {
    const c = code || V.lang();
    return `
      <div class="jl28-ios">
        <div class="jl28-ios-bar">
          <div class="jl28-ios-av"><i class="fa-solid fa-gift"></i></div>
          <div>
            <div class="jl28-ios-name">${esc(V.t('mg.title', c))}</div>
            <div class="jl28-ios-sub">${esc(V.t('mg.subtitle', c))}</div>
          </div>
        </div>
        <div class="jl28-ios-body">
          <div class="jl28-ios-day">${esc(new Date().toLocaleDateString())}</div>
          <div class="jl28-msg jl28-in">
            <p>${esc(V.t('mg.msg', c))}</p>
            <span class="jl28-time">${esc(now())}</span>
          </div>
          <div class="jl28-msg jl28-out">
            <p><strong>${esc(V.t('mg.price', c))}: 0 HTG</strong></p>
            <span class="jl28-time">${esc(now())} <i class="fa-solid fa-check-double"></i></span>
          </div>
        </div>
      </div>`;
  };

  /* Panno konplè (seleksyonè lang + bul mesaj) */
  MG.panelHtml = function () {
    return `<div class="card jl28-card" data-jl28-panel>
        <div class="card-hd"><h3><i class="fa-solid fa-gift"></i> ${esc(V.t('mg.title'))}</h3></div>
        ${V.langPickerHtml()}
        <div data-jl28-bubbles>${MG.bubbleHtml()}</div>
      </div>`;
  };

  function rerender() {
    document.querySelectorAll('[data-jl28-bubbles]').forEach(h => { h.innerHTML = MG.bubbleHtml(); });
    document.querySelectorAll('[data-jl28-panel] .jl28-lang').forEach(h => {
      h.outerHTML = V.langPickerHtml();
    });
  }
  document.addEventListener('jl28:lang', rerender);

  /* ---------------------------------------------------------------
   * 2) Popup « ou fèk resevwa kado a »
   * ------------------------------------------------------------- */
  MG.showAward = function (award) {
    const c = V.lang();
    const m = document.createElement('div');
    m.className = 'modal-backdrop';
    m.innerHTML = `
      <div class="modal jl28-modal" role="dialog" aria-modal="true" aria-label="${esc(V.t('mg.title', c))}">
        <div class="jl28-ios">
          <div class="jl28-ios-bar">
            <div class="jl28-ios-av"><i class="fa-solid fa-gift"></i></div>
            <div>
              <div class="jl28-ios-name">${esc(V.t('mg.title', c))}</div>
              <div class="jl28-ios-sub">${esc(V.t('mg.subtitle', c))}</div>
            </div>
          </div>
          <div class="jl28-ios-body">
            <div class="jl28-msg jl28-in">
              <p>${esc(V.t('mg.gotIt', c))}</p>
              <span class="jl28-time">${esc(now())}</span>
            </div>
            <div class="jl28-msg jl28-out">
              <p>${esc(V.t('mg.ball', c))} : <strong class="mono">${esc(award.number || '')}</strong><br>
                 ${esc(V.t('mg.price', c))} : <strong>${esc(V.t('mg.free', c))}</strong></p>
              <span class="jl28-time">${esc(now())} <i class="fa-solid fa-check-double"></i></span>
            </div>
          </div>
        </div>
        <div class="row" style="justify-content:flex-end;margin-top:.8rem">
          <button class="btn btn-primary" data-close>${esc(V.t('mg.close', c))}</button>
        </div>
      </div>`;
    document.body.appendChild(m);
    const close = () => m.remove();
    m.querySelector('[data-close]').onclick = close;
    m.addEventListener('click', e => { if (e.target === m) close(); });
  };

  /* ---------------------------------------------------------------
   * 3) Rele kado a apre yon fich kreye — san touche kòd POS la.
   *    Nou anvlope `supabase.rpc` une seule fois: si non RPC la se
   *    `jl9_rpc_create_ticket` epi li reyisi, nou mande kado a.
   * ------------------------------------------------------------- */
  MG.claim = async function (ticketId) {
    if (!ticketId) return null;
    try {
      const { data, error } = await SB().rpc('jl28_rpc_mg_maybe_award', { _ticket: ticketId });
      if (error) return null;
      if (data && data.awarded) { MG.showAward(data); return data; }
      /* [V30 §1.3] Kado a kounye a bay SOU SERVÈ A (triger
         jl30_trg_mg_after_ticket sou jl9_tickets) — donk apèl sa a ka
         retounen 'already'. Nan ka sa a nou li kado a ki deja sou fich la
         pou UI a montre l kanmenm. */
      if (data && data.reason === 'already') {
        const r = await SB().rpc('jl30_rpc_mg_award_of_ticket', { _ticket: ticketId });
        if (r && r.data && r.data.awarded) { MG.showAward(r.data); return r.data; }
      }
      return data || null;
    } catch (_) { return null; }
  };

  function wrapRpc() {
    const sb = SB();
    if (!sb || typeof sb.rpc !== 'function' || sb.__jl28Wrapped) return !!(sb && sb.__jl28Wrapped);
    const orig = sb.rpc.bind(sb);
    sb.rpc = function (name, args, opts) {
      const p = orig(name, args, opts);
      if (name === 'jl9_rpc_create_ticket' && p && typeof p.then === 'function') {
        return p.then(res => {
          const id = res && res.data && (res.data.id || (res.data[0] && res.data[0].id));
          if (!res || !res.error) { setTimeout(() => MG.claim(id), 400); }
          return res;
        });
      }
      return p;
    };
    sb.__jl28Wrapped = true;
    return true;
  }
  if (!wrapRpc()) {
    document.addEventListener('lotri:ready', wrapRpc);
    let tries = 0;
    const iv = setInterval(() => { if (wrapRpc() || ++tries > 40) clearInterval(iv); }, 250);
  }

  /* ---------------------------------------------------------------
   * 4) Vi « Mariage GRATUIT » pou ajan an (enfòmasyon uniquement)
   * ------------------------------------------------------------- */
  if (window.LotriShell) {
    LotriShell.register('mg-info', {
      title: 'Mariage GRATUIT',
      render(host) { host.innerHTML = MG.panelHtml(); }
    });
  }

  /* ---------------------------------------------------------------
   * 5) Estil (iOS / WhatsApp) — pou pa touche okenn CSS ki egziste
   * ------------------------------------------------------------- */
  const st = document.createElement('style');
  st.textContent = `
    .jl28-lang{display:flex;gap:.4rem;flex-wrap:wrap;margin:.6rem 0 .9rem}
    .jl28-lang-b{border:1px solid var(--border,#d5d7db);background:var(--card,#fff);
      color:inherit;border-radius:999px;padding:.32rem .8rem;font-size:.85rem;font-weight:600;
      cursor:pointer;transition:all .18s}
    .jl28-lang-b.is-on{background:#0b8f4a;border-color:#0b8f4a;color:#fff}
    .jl28-card{max-width:560px}
    .jl28-modal{max-width:480px}
    .jl28-ios{border-radius:1rem;overflow:hidden;border:1px solid rgba(0,0,0,.08);
      box-shadow:0 8px 24px rgba(0,0,0,.12);background:#efe7dd;
      font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","Helvetica Neue",Inter,sans-serif}
    .jl28-ios-bar{display:flex;align-items:center;gap:.6rem;padding:.6rem .8rem;
      background:rgba(246,246,246,.92);backdrop-filter:saturate(180%) blur(20px);
      border-bottom:1px solid rgba(0,0,0,.08)}
    .jl28-ios-av{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;
      background:linear-gradient(180deg,#25D366,#0b8f4a);color:#fff;font-size:.95rem}
    .jl28-ios-name{font-weight:700;font-size:.95rem;color:#111}
    .jl28-ios-sub{font-size:.72rem;color:#6b7280}
    .jl28-ios-body{padding:.8rem;display:flex;flex-direction:column;gap:.5rem;
      background-image:radial-gradient(rgba(0,0,0,.035) 1px,transparent 1px);background-size:14px 14px}
    .jl28-ios-day{align-self:center;font-size:.68rem;color:#5b5b5b;background:rgba(255,255,255,.75);
      padding:.15rem .6rem;border-radius:999px}
    .jl28-msg{position:relative;max-width:86%;padding:.5rem .7rem .95rem;border-radius:1rem;
      font-size:.9rem;line-height:1.35;color:#111;box-shadow:0 1px 1px rgba(0,0,0,.12)}
    .jl28-msg p{margin:0;white-space:pre-line}
    .jl28-in{align-self:flex-start;background:#fff;border-bottom-left-radius:.25rem}
    .jl28-out{align-self:flex-end;background:#dcf8c6;border-bottom-right-radius:.25rem}
    .jl28-time{position:absolute;right:.6rem;bottom:.25rem;font-size:.62rem;color:#54656f}
    .jl28-out .jl28-time i{color:#34b7f1}
    .jl28-in:after,.jl28-out:after{content:"";position:absolute;bottom:0;width:10px;height:14px}
    .jl28-in:after{left:-6px;background:#fff;clip-path:polygon(100% 0,100% 100%,0 100%)}
    .jl28-out:after{right:-6px;background:#dcf8c6;clip-path:polygon(0 0,100% 100%,0 100%)}`;
  document.head.appendChild(st);
})();


/* =====================================================================
 * JADSTACK LOTTO V30 — §2.5 SELEKSYONÈ LANG — 1 dropdown, ikòn "world"
 * ---------------------------------------------------------------------
 * Ranplase konplètman v29/lang-switch.js (dwapo emoji). Sèl 1
 * bouton/ikòn "world" (SVG senp) nan tèt paj la; klike ouvri yon
 * dropdown ak 3 opsyon FR / HT / EN (kòd kout, san dwapo).
 * PA parèt sou yon fich (ticket) deja enprime — lang fich la se lang
 * Compagnie a chwazi (§2.3), pa lang moun k ap gade l — donc pa mount
 * si `[data-no-lang-switch]` prezan sou <body> oswa host la.
 * ===================================================================== */
(function () {
  const L = (window.Lotri = window.Lotri || {});
  const V = (L.v30 = L.v30 || {});

  V.LANGS = [
    { code: 'fr', label: 'Français' },
    { code: 'ht', label: 'Créole' },
    { code: 'en', label: 'English' },
  ];

  const WORLD_SVG = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"
       stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
       aria-hidden="true">
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M3 12h18M12 3c2.6 2.6 4 5.7 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.7-4-9s1.4-6.4 4-9z"></path>
  </svg>`;

  const cur = () => {
    try { return localStorage.getItem('jl:lang') || (L.i18n ? L.i18n.default : 'ht'); }
    catch (_) { return 'ht'; }
  };

  // V35: yon sèl chemen pou chanje lang (evite doub chajman + boucle).
  V.setLang = function (code) {
    if (!V.LANGS.some(l => l.code === code)) code = 'ht';
    try { localStorage.setItem('jl:lang', code); } catch (_) {}
    document.documentElement.lang = code;
    paintAll(code);
    closeAll();
    if (L.v34 && typeof L.v34.setLang === 'function') {
      // v34 sere preferans lan nan baz done a epi li retradui paj la
      // (li menm ki voye `lang-changed` / `jl28:lang`).
      L.v34.setLang(code);
      return;
    }
    if (L.i18n && typeof L.i18n.load === 'function') L.i18n.load(code);
    else document.dispatchEvent(new CustomEvent('lang-changed', { detail: code }));
  };

  function widgetHtml(place) {
    const c = cur();
    const curLabel = (V.LANGS.find(l => l.code === c) || V.LANGS[0]);
    return `<div class="v30-lang" data-v30-lang-place="${place}">
      <button type="button" class="v30-lang-btn" data-v30-toggle aria-haspopup="listbox"
              aria-expanded="false" title="${L.t ? L.t('nav.lang', 'Langue') : 'Langue'}">
        ${WORLD_SVG}<span class="v30-lang-code">${curLabel.code.toUpperCase()}</span>
      </button>
      <div class="v30-lang-menu" role="listbox" hidden>
        ${V.LANGS.map(l => `<button type="button" role="option" class="v30-lang-opt${l.code === c ? ' is-on' : ''}"
             data-v30-lang="${l.code}" aria-selected="${l.code === c}">
             <span class="cd">${l.code.toUpperCase()}</span><span class="lb">${l.label}</span></button>`).join('')}
      </div>
    </div>`;
  }

  function paintAll(code) {
    document.querySelectorAll('.v30-lang').forEach(w => {
      const codeEl = w.querySelector('.v30-lang-code');
      if (codeEl) codeEl.textContent = code.toUpperCase();
      w.querySelectorAll('.v30-lang-opt').forEach(b => {
        const on = b.dataset.v30Lang === code;
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-selected', String(on));
      });
    });
  }

  function closeAll() {
    document.querySelectorAll('.v30-lang-menu').forEach(m => m.hidden = true);
    document.querySelectorAll('.v30-lang-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
  }

  function mount() {
    if (document.body && document.body.hasAttribute('data-no-lang-switch')) return;
    if (!document.querySelector('[data-v30-lang-place="header"]')) {
      // V35: priyorite pou barè navigasyon an (nav .right) — sinon topbar/header
      const host = document.querySelector('.nav .nav-inner .right, .nav .right')
                || document.querySelector('header .actions, header .hdr-actions, .topbar .actions')
                || document.querySelector('.topbar, header');
      if (host && !host.closest('[data-no-lang-switch]')) host.insertAdjacentHTML('afterbegin', widgetHtml('header'));
    }
    if (!document.querySelector('[data-v30-lang-place="footer"]')) {
      const f = document.querySelector('footer .footer-bottom, footer .container, footer.footer, footer');
      if (f && !f.closest('[data-no-lang-switch]')) f.insertAdjacentHTML('beforeend', widgetHtml('footer'));
    }
    paintAll(cur());
  }

  document.addEventListener('click', (e) => {
    const toggle = e.target.closest && e.target.closest('[data-v30-toggle]');
    if (toggle) {
      e.preventDefault();
      const menu = toggle.parentElement.querySelector('.v30-lang-menu');
      const willOpen = menu.hidden;
      closeAll();
      if (willOpen) { menu.hidden = false; toggle.setAttribute('aria-expanded', 'true'); }
      return;
    }
    const opt = e.target.closest && e.target.closest('[data-v30-lang]');
    if (opt) { e.preventDefault(); V.setLang(opt.dataset.v30Lang); return; }
    if (!e.target.closest('.v30-lang')) closeAll();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(); });

  document.addEventListener('DOMContentLoaded', () => {
    mount();
    setTimeout(mount, 400);
    setTimeout(mount, 1200);
  });
  document.addEventListener('lang-changed', (e) => paintAll(e.detail || cur()));
})();


/* =====================================================================
 * JADSTACK LOTTO — DIKSYONÈ TRADIKSYON EMBAKE (HT / FR / EN)
 * ---------------------------------------------------------------------
 * Sous verite lokal la. Chak antre : [ht, fr, en]. Kle a jenere
 * otomatikman apati tèks Kreyòl la (slug), konsa MENM kle yo itilize
 * nan tab `jl30_i18n_strings`. Valeur ki soti nan baz done a (Super Admin
 * ka modifye yo) PRAN PRIYORITE sou valè embake yo — gade
 * v33/i18n-runtime.js pou lojik tradiksyon an.
 *
 * (Fizyone soti nan ansyen v33/i18n-dict.js + v34/i18n-extra.js —
 * menm 2 tablo yo, `L.V33_PHRASES` ak `L.V34_PHRASES`, rete separe
 * paske i18n-runtime.js li yo apa; uniquement fichye a fizyone.)
 * ===================================================================== */
(function () {
  const L = (window.Lotri = window.Lotri || {});

  L.slugKey = function (s) {
    return 'ui.' + String(s || '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/&nbsp;/g, ' ')
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '')
      .slice(0, 60);
  };

  /* [Kreyòl, Français, English] */
  L.V33_PHRASES = [
    // --- Navigasyon / kokiy ---
    ['POS', 'POS', 'POS'],
    ['Rapò Journée', 'Rapport du jour', 'Daily report'],
    ['Rapò Jounalye', 'Rapport journalier', 'Daily report'],
    ['Tikè mwen', 'Mes tickets', 'My tickets'],
    ['Tikè mwen yo', 'Mes tickets', 'My tickets'],
    ['Rezilta tiraj', 'Résultats des tirages', 'Draw results'],
    ['Fich Gayan', 'Fiches gagnantes', 'Winning slips'],
    ['Mesaj', 'Messages', 'Messages'],
    ['Bwat mesaj', 'Boîte de messages', 'Message box'],
    ['Pwofil konpayi', 'Profil de la compagnie', 'Company profile'],
    ['Kondisyon Ajan', "Conditions de l'agent", 'Agent terms'],
    ['Maryaj GRATIS', 'Mariage GRATUIT', 'FREE marriage'],
    ['Akèy', 'Accueil', 'Home'],
    ['Meni', 'Menu', 'Menu'],
    ['Chanje tèm', 'Changer de thème', 'Change theme'],
    ['Dekonekte', 'Déconnexion', 'Sign out'],
    ['Chèche nan meni…', 'Rechercher dans le menu…', 'Search the menu…'],
    ['Chèche nan meni', 'Rechercher dans le menu', 'Search the menu'],
    ['Ap chaje...', 'Chargement...', 'Loading...'],
    ['Pa kapab chaje aplikasyon an', "Impossible de charger l'application", 'Unable to load the application'],
    ['Eseye ankò', 'Réessayer', 'Try again'],
    ['Lang', 'Langue', 'Language'],

    // --- Mo jeneral ---
    ['Dat', 'Date', 'Date'],
    ['Estati', 'Statut', 'Status'],
    ['— Choisir —', '— Choisir —', '— Select —'],
    ['Tout', 'Tous', 'All'],
    ['Prim', 'Prime', 'Prize'],
    ['Ajan', 'Agent', 'Agent'],
    ['ajan', 'agent', 'agent'],
    ['Tiraj', 'Tirage', 'Draw'],
    ['tiraj', 'tirage', 'draw'],
    ['Jwèt', 'Jeu', 'Game'],
    ['jwèt', 'jeu', 'game'],
    ['Anile', 'Annuler', 'Cancel'],
    ['Enprime', 'Imprimer', 'Print'],
    ['Total', 'Total', 'Total'],
    ['Total:', 'Total :', 'Total:'],
    ['Efase', 'Supprimer', 'Delete'],
    ['Fèmen', 'Fermer', 'Close'],
    ['Tikè', 'Ticket', 'Ticket'],
    ['Tit', 'Titre', 'Title'],
    ['Kontni', 'Contenu', 'Content'],
    ['Filtè', 'Filtres', 'Filters'],
    ['Aplike', 'Appliquer', 'Apply'],
    ['Aktif', 'Actif', 'Active'],
    ['Gayan', 'Gagnant', 'Winner'],
    ['Peye', 'Payé', 'Paid'],
    ['Pèdi', 'Perdu', 'Lost'],
    ['Vant', 'Ventes', 'Sales'],
    ['Vant (HTG)', 'Ventes (HTG)', 'Sales (HTG)'],
    ['Montan (HTG)', 'Montant (HTG)', 'Amount (HTG)'],
    ['Benefis', 'Bénéfice', 'Profit'],
    ['Aksyon', 'Action', 'Action'],
    ['Sib', 'Cible', 'Target'],
    ['Meta', 'Méta', 'Meta'],
    ['Odyans', 'Audience', 'Audience'],
    ['Nivo', 'Niveau', 'Level'],
    ['Info', 'Info', 'Info'],
    ['Siksè', 'Succès', 'Success'],
    ['Atansyon', 'Attention', 'Warning'],
    ['Erè', 'Erreur', 'Error'],
    ['Voye', 'Envoyer', 'Send'],
    ['Reponn', 'Répondre', 'Reply'],
    ['Modifye', 'Modifier', 'Edit'],
    ['Restore', 'Restaurer', 'Restore'],
    ['Aktyalize', 'Actualiser', 'Refresh'],
    ['Retire', 'Retirer', 'Remove'],
    ['Reyinisyalize', 'Réinitialiser', 'Reset'],
    ['Ekspòte CSV', 'Exporter CSV', 'Export CSV'],
    ['Imèl', 'E-mail', 'Email'],
    ['Modpas', 'Mot de passe', 'Password'],
    ['Super Admin', 'Super Admin', 'Super Admin'],
    ['Konpayi', 'Compagnie', 'Company'],
    ['Sipèvizè', 'Superviseur', 'Supervisor'],
    ['Vid.', 'Vide.', 'Empty.'],
    ['Kont mwen', 'Mon compte', 'My account'],
    ['nouvo', 'nouveau', 'new'],
    ['Aparèy', 'Appareil', 'Device'],
    ['An liy', 'En ligne', 'Online'],

    // --- POS ---
    ['POS — Vann Tikè', 'POS — Vente de tickets', 'POS — Sell tickets'],
    ['Ou ka mete plizyè tiraj sou', 'Vous pouvez mettre plusieurs tirages sur', 'You can put several draws on'],
    ['menm fich la', 'la même fiche', 'the same slip'],
    ['Pa gen tiraj ouvè', 'Aucun tirage ouvert', 'No open draw'],
    ['Ajoute parye pou tiraj sa a', 'Ajouter un pari pour ce tirage', 'Add a bet for this draw'],
    ['Ajoute parye', 'Ajouter un pari', 'Add bet'],
    ['Fich la (tout tiraj)', 'La fiche (tous les tirages)', 'The slip (all draws)'],
    ['Finalize &amp; Enprime', 'Finaliser &amp; Imprimer', 'Finalize &amp; Print'],
    ['Finalize & Enprime', 'Finaliser & Imprimer', 'Finalize & Print'],
    ['Retire tiraj', 'Retirer le tirage', 'Remove draw'],
    ['Retire tout tiraj sa a', 'Retirer tout ce tirage', 'Remove this whole draw'],
    ['Apèsi fich la', 'Aperçu de la fiche', 'Slip preview'],
    ['Fèmen apèsi a', "Fermer l'aperçu", 'Close preview'],
    ['Fich la ap enprime otomatikman nan', "La fiche s'imprime automatiquement dans", 'The slip prints automatically in'],
    ['pou anile epi modifye.', 'pour annuler et modifier.', 'to cancel and edit.'],
    ['Nimewo parye a', 'Numéro du pari', 'Bet number'],
    ['Okenn parye ankò.', 'Aucun pari pour le moment.', 'No bets yet.'],
    ['Pa gen tikè.', 'Aucun ticket.', 'No tickets.'],
    ['Pa gen done.', 'Aucune donnée.', 'No data.'],
    ['Pa gen antre.', 'Aucune entrée.', 'No entries.'],
    ['Pa gen machin.', 'Aucune machine.', 'No machines.'],
    ['Klike pou wè plis detay', 'Cliquez pour voir plus de détails', 'Click to see more details'],
    ['Ou ka efase yon tikè pou kont ou pandan', 'Vous pouvez supprimer un ticket vous-même pendant', 'You can delete a ticket yourself within'],
    ['10 minit', '10 minutes', '10 minutes'],
    ['demann', 'demande', 'request'],
    ['ki ale bay Super Admin / Mini Super Admin.', 'qui est envoyée au Super Admin / Mini Super Admin.', 'that goes to the Super Admin / Mini Super Admin.'],
    ['Mande anilasyon', "Demander l'annulation", 'Request cancellation'],

    // --- Rapò ---
    ['Rapò', 'Rapport', 'Report'],
    ['Balans = Vant − Pou peye. Se pwòp fich ou yo uniquement.', 'Solde = Ventes − À payer. Uniquement vos propres fiches.', 'Balance = Sales − To pay. Only your own slips.'],
    ['Lavant pa lè', 'Ventes par heure', 'Sales per hour'],
    ['Repatisyon pa tiraj', 'Répartition par tirage', 'Breakdown by draw'],
    ['Fich jou a', 'Fiches du jour', "Today's slips"],
    ['Pa gen fich pou jou sa a.', 'Aucune fiche pour cette journée.', 'No slips for this day.'],
    ['Jounal Odit', "Journal d'audit", 'Audit log'],

    // --- Pwofil / kondisyon ---
    ['Pwofil konpayi — lekti uniquement', 'Profil de la compagnie — lecture seule', 'Company profile — read only'],
    ['Ou pa ka modifye', 'Vous ne pouvez pas modifier', 'You cannot edit'],
    ['Enfòmasyon konpayi', 'Informations de la compagnie', 'Company information'],
    ['Sa ou aksepte lè ou chwazi travay kòm ajan sou platfòm nan.',
      "Ce que vous acceptez en choisissant de travailler comme agent sur la plateforme.",
      'What you accept when you choose to work as an agent on the platform.'],
    ['1. Kondisyon itilizasyon', "1. Conditions d'utilisation", '1. Terms of use'],
    ['2. Konfidansyalite &amp; done', '2. Confidentialité &amp; données', '2. Privacy &amp; data'],
    ['3. Siveyans aktivite', '3. Surveillance des activités', '3. Activity monitoring'],
    ['4. Kijan pou itilize l', '4. Comment l’utiliser', '4. How to use it'],
    ['paj Legal sit la', 'la page Légal du site', "the site's Legal page"],

    // --- Login ---
    ['Koneksyon Ajan', 'Connexion Agent', 'Agent sign in'],
    ['Antre enfòmasyon w pou louvri POS la.', 'Entrez vos informations pour ouvrir le POS.', 'Enter your details to open the POS.'],
    ['Bliye modpas ou?', 'Mot de passe oublié ?', 'Forgot your password?'],
    ['Montre modpas', 'Afficher le mot de passe', 'Show password'],
    ['imel@egzanp.com', 'email@exemple.com', 'email@example.com'],

    // --- Mesaj ---
    ['Voye Mesaj', 'Envoyer un message', 'Send message'],
    ['Tout mesaj', 'Tous les messages', 'All messages'],
    ['Sèlman ki poko li', 'Uniquement non lus', 'Unread only'],
    ['Sa m voye', 'Ceux que j’ai envoyés', 'Sent by me'],
    ['Tout voyè', 'Tous les expéditeurs', 'All senders'],
    ['Pa gen mesaj ki matche.', 'Aucun message correspondant.', 'No matching messages.'],
    ['Make kòm li', 'Marquer comme lu', 'Mark as read'],
    ['Fenèt modifikasyon 5 min lan fèmen.', 'La fenêtre de modification de 5 min est fermée.', 'The 5-minute edit window is closed.'],
    ['Modifye mesaj la', 'Modifier le message', 'Edit message'],
    ['Konpayi destinatè', 'Compagnie destinataire', 'Recipient company'],
    ['Ajan destinatè', 'Agent destinataire', 'Recipient agent'],
    ['Chèche tit oswa kontni…', 'Rechercher un titre ou un contenu…', 'Search title or content…'],
    ['Filtre pa dat', 'Filtrer par date', 'Filter by date'],
    ['Gade done brit mesaj la', 'Voir les données brutes du message', 'View raw message data'],
    ['Done brit', 'Données brutes', 'Raw data'],

    // --- Kòbèy / siveyans ---
    ['Kòbèy', 'Corbeille', 'Trash'],
    ['Eleman efase yo rete la pou 30 jou.', 'Les éléments supprimés restent 30 jours.', 'Deleted items stay for 30 days.'],
    ['Siveyans machin', 'Surveillance des machines', 'Device monitoring'],
    ['Machin total', 'Machines au total', 'Total devices'],
    ['Dènye aktivite', 'Dernière activité', 'Last activity'],
  ];

  /* [Kreyòl, Français, English] */
  L.V34_PHRASES = [
    /* --- Navigasyon / kokiy --- */
    ['Tablo debò', 'Tableau de bord', 'Dashboard'],
    ['Paramèt', 'Paramètres', 'Settings'],
    ['Konfigirasyon', 'Configuration', 'Configuration'],
    ['Reglaj', 'Réglages', 'Settings'],
    ['Pwofil', 'Profil', 'Profile'],
    ['Kont mwen', 'Mon compte', 'My account'],
    ['Konekte', 'Se connecter', 'Sign in'],
    ['Dekonekte', 'Déconnexion', 'Sign out'],
    ['Kreye yon kont', 'Créer un compte', 'Create an account'],
    ['Modpas', 'Mot de passe', 'Password'],
    ['Imèl', 'E-mail', 'Email'],
    ['Telefòn', 'Téléphone', 'Phone'],
    ['Adrès', 'Adresse', 'Address'],
    ['Non', 'Nom', 'Name'],
    ['Konpayi', 'Compagnie', 'Company'],
    ['Sipèvizè', 'Superviseur', 'Supervisor'],
    ['Ajan yo', 'Agents', 'Agents'],
    ['Kontak', 'Contact', 'Contact'],
    ['Legal', 'Mentions légales', 'Legal'],
    ['Sipò', 'Support', 'Support'],
    ['Retounen', 'Retour', 'Back'],
    ['Fèmen', 'Fermer', 'Close'],
    ['Anile', 'Annuler', 'Cancel'],
    ['Konfime', 'Confirmer', 'Confirm'],
    ['Anrejistre', 'Enregistrer', 'Save'],
    ['Sove', 'Enregistrer', 'Save'],
    ['Ajoute', 'Ajouter', 'Add'],
    ['Modifye', 'Modifier', 'Edit'],
    ['Efase', 'Supprimer', 'Delete'],
    ['Chèche', 'Rechercher', 'Search'],
    ['Filtre', 'Filtrer', 'Filter'],
    ['Enprime', 'Imprimer', 'Print'],
    ['Telechaje', 'Télécharger', 'Download'],
    ['Voye', 'Envoyer', 'Send'],
    ['Voye mesaj', 'Envoyer un message', 'Send a message'],
    ['Nouvo mesaj', 'Nouveau message', 'New message'],
    ['Reponn', 'Répondre', 'Reply'],
    ['Kache', 'Masquer', 'Hide'],
    ['Remete', 'Restaurer', 'Restore'],
    ['Poubèl', 'Corbeille', 'Trash'],
    ['Poubèl mesaj', 'Corbeille des messages', 'Message trash'],
    ['Lis kontak', 'Liste de contacts', 'Contact list'],
    ['Pa gen konvèsasyon.', 'Aucune conversation.', 'No conversations.'],
    ['Pa gen mesaj ankò.', 'Aucun message pour le moment.', 'No messages yet.'],
    ['Ekri yon mesaj…', 'Écrivez un message…', 'Write a message…'],
    ['Mesaj la vid.', 'Le message est vide.', 'The message is empty.'],
    ['Mesaj voye', 'Message envoyé', 'Message sent'],
    ['Mesaj la pa rive', "Le message n'est pas parti", 'The message was not sent'],
    ['Poubèl la vid.', 'La corbeille est vide.', 'The trash is empty.'],
    ['modifye', 'modifié', 'edited'],
    ['Ou', 'Vous', 'You'],

    /* --- Lotri / jwèt --- */
    ['Fich', 'Fiche', 'Slip'],
    ['Fich la', 'La fiche', 'The slip'],
    ['Tikè', 'Ticket', 'Ticket'],
    ['Nimewo', 'Numéro', 'Number'],
    ['Kantite', 'Quantité', 'Quantity'],
    ['Montan', 'Montant', 'Amount'],
    ['Total', 'Total', 'Total'],
    ['Balans', 'Solde', 'Balance'],
    ['Vant', 'Ventes', 'Sales'],
    ['Gayan', 'Gagnant', 'Winner'],
    ['Gayan yo', 'Gagnants', 'Winners'],
    ['Peye gayan', 'Payer les gagnants', 'Pay winners'],
    ['Rezilta', 'Résultats', 'Results'],
    ['Boul', 'Boule', 'Ball'],
    ['Lotri', 'Loterie', 'Lottery'],
    ['Bòlèt', 'Borlette', 'Borlette'],
    ['Loto 3', 'Loto 3', 'Loto 3'],
    ['Maryaj', 'Mariage', 'Marriage'],
    ['Pozisyon', 'Position', 'Position'],
    ['Limit', 'Limite', 'Limit'],
    ['Peman', 'Paiement', 'Payment'],
    ['Fakti', 'Facture', 'Invoice'],
    ['Plan', 'Forfait', 'Plan'],
    ['Abònman', 'Abonnement', 'Subscription'],
    ['Rapò', 'Rapport', 'Report'],
    ['Rapò jounen', 'Rapport du jour', 'Daily report'],
    ['Sipèvizyon', 'Surveillance', 'Monitoring'],
    ['Istorik', 'Historique', 'History'],
    ['Aktif', 'Actif', 'Active'],
    ['Inaktif', 'Inactif', 'Inactive'],
    ['Bloke', 'Bloqué', 'Blocked'],
    ['An atant', 'En attente', 'Pending'],
    ['Apwouve', 'Approuvé', 'Approved'],
    ['Refize', 'Refusé', 'Rejected'],
    ['Peye', 'Payé', 'Paid'],
    ['Poko peye', 'Non payé', 'Unpaid'],
    ['Jodi a', "Aujourd'hui", 'Today'],
    ['Yè', 'Hier', 'Yesterday'],
    ['Semèn nan', 'Cette semaine', 'This week'],
    ['Mwa a', 'Ce mois', 'This month'],
    ['Depi', 'Du', 'From'],
    ['Jiska', 'Au', 'To'],

    /* --- Lang / reglaj lang --- */
    ['Lang', 'Langue', 'Language'],
    ['Lang mwen', 'Ma langue', 'My language'],
    ['Lang prefere', 'Langue préférée', 'Preferred language'],
    ['Lang sistèm', 'Langue du système', 'System language'],
    ['Lang jeneral', 'Langue générale', 'General language'],
    ['Lang fich', 'Langue de la fiche', 'Slip language'],
    ['Lang fich jeneral', 'Langue générale des fiches', 'General slip language'],
    ['Lang entèfas konpayi', "Langue de l'interface de la compagnie", 'Company interface language'],
    ['— Defo jeneral —', '— Défaut général —', '— General default —'],
    ['Lang chanje', 'Langue modifiée', 'Language changed'],
    ['Lang pa valab', 'Langue invalide', 'Invalid language'],

    /* --- Mesaj sistèm --- */
    ['Ap chaje…', 'Chargement…', 'Loading…'],
    ['Tanpri tann…', 'Veuillez patienter…', 'Please wait…'],
    ['Fini', 'Terminé', 'Done'],
    ['Siksè', 'Succès', 'Success'],
    ['Erè', 'Erreur', 'Error'],
    ['Atansyon', 'Attention', 'Warning'],
    ['Pa gen done', 'Aucune donnée', 'No data'],
    ['Pa gen anyen pou montre', 'Rien à afficher', 'Nothing to show'],
    ['Ou pa gen dwa fè sa', "Vous n'avez pas cette permission", 'You are not allowed to do this'],
    ['Ou pa konekte', 'Vous n’êtes pas connecté', 'You are not signed in'],
    ['Eseye ankò', 'Réessayer', 'Try again'],
    ['Ou sèten?', 'Êtes-vous sûr ?', 'Are you sure?'],
    ['Wi', 'Oui', 'Yes'],
    ['Non, mèsi', 'Non, merci', 'No, thanks'],
  ];

  // key -> { ht, fr, en }
  L.V33_DICT = {};
  // tèks Kreyòl nòmalize -> key
  L.V33_INDEX = {};

  L.normText = function (s) {
    return String(s || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
  };

  L.V33_PHRASES.forEach(([ht, fr, en]) => {
    const k = L.slugKey(ht);
    L.V33_DICT[k] = { ht, fr, en };
    L.V33_INDEX[L.normText(ht)] = k;
  });
})();


/* =====================================================================
 * JADSTACK LOTTO V34 (ranplase V33) — KOUCH TRADIKSYON RUNTIME
 * ---------------------------------------------------------------------
 * PWOBLÈM V33: li te uniquement konnen tradui tèks ki ekri an KREYÒL nan kòd
 * la ('ht' -> fr/en). Donk depi yon paj te gen tèks an Fransè oswa an
 * Anglè (oswa tèks ki te deja tradui), li pa t chanje — se poutèt sa se
 * kèk bouton uniquement ki te chanje lang.
 * V34: endèks la bati sou TOUT 3 LANG (fr / ht / en) an menm tan, epi
 * tradiksyon fèt SOUS -> SIB kèlkeswa lang sous la. Diksyonè baz done a
 * (jl34_rpc_dict_all) melanje ak diksyonè embake a, konsa Super Admin ka
 * korije/ajoute yon fraz san deplwaman.
 * ===================================================================== */
(function () {
  const L = (window.Lotri = window.Lotri || {});
  const R = (L.v33 = L.v33 || {});

  const ORIG = new WeakMap();      // node -> tèks orijinal
  const OATTR = new WeakMap();     // element -> { attr: orijinal }
  const ATTRS = ['placeholder', 'title', 'aria-label', 'alt', 'data-tip'];
  const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE', 'TEXTAREA', 'SVG']);
  const LANGS = ['fr', 'ht', 'en'];

  const norm = (s) => String(s || '')
    .replace(/\s+/g, ' ')
    .trim();
  const nkey = (s) => norm(s)
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

  /* ---- 1. Endèks: fraz (nenpòt lang) -> kle ---- */
  R.INDEX = Object.create(null);   // nkey(fraz) -> kle
  R.ROWS  = Object.create(null);   // kle -> { fr, ht, en }

  function addRow(key, row) {
    if (!key || !row) return;
    const cur = R.ROWS[key] || {};
    LANGS.forEach((c) => { if (row[c]) cur[c] = row[c]; });
    R.ROWS[key] = cur;
    LANGS.forEach((c) => { const v = cur[c]; if (v) { const k = nkey(v); if (k) R.INDEX[k] = key; } });
  }
  R.addRow = addRow;

  function buildEmbedded() {
    // 1) Fòm V33: L.V33_PHRASES = [[ht, fr, en], ...]
    (L.V33_PHRASES || []).forEach((p) => {
      const key = L.slugKey ? L.slugKey(p[1] || p[0]) : null;
      if (key) addRow(key, { ht: p[0], fr: p[1], en: p[2] });
    });
    // 2) Fòm V33 dic objè: L.V33_DICT = { kle: {ht,fr,en} }
    Object.keys(L.V33_DICT || {}).forEach((k) => addRow(k, L.V33_DICT[k]));
    // 3) Fraz anplis V34
    (L.V34_PHRASES || []).forEach((p) => {
      const key = L.slugKey ? L.slugKey(p[1] || p[0]) : null;
      if (key) addRow(key, { ht: p[0], fr: p[1], en: p[2] });
    });
  }

  /* ---- 2. Diksyonè baz done a (Super Admin) ---- */
  R.loadDb = async function () {
    const sb = L.supabase;
    if (!sb) return;
    try {
      const { data, error } = await sb.rpc('jl34_rpc_dict_all');
      if (error || !data) return;
      Object.keys(data).forEach((k) => addRow(k, data[k]));
    } catch (_) {}
  };

  function lang() {
    try {
      const c = localStorage.getItem('jl:lang');
      if (LANGS.includes(c)) return c;
    } catch (_) {}
    return (L.i18n && L.i18n.current) || 'fr';
  }

  /* ---- 3. Tradiksyon yon fraz, kèlkeswa lang sous la ---- */
  R.translate = function (text, code) {
    const k = nkey(text);
    if (!k) return null;
    const key = R.INDEX[k];
    if (!key) return null;
    // valè baz done (L.t) an premye, apre sa valè embake
    if (L.t) { const v = L.t(key, null); if (v && v !== key) return v; }
    const row = R.ROWS[key];
    const v2 = row && row[code];
    return (typeof v2 === 'string' && v2) ? v2 : null;
  };

  /* ---- 4. Pase sou DOM la ---- */
  function walkText(root, code) {
    const it = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p = n.parentElement;
        if (!p || SKIP.has(p.tagName)) return NodeFilter.FILTER_REJECT;
        if (p.closest('[data-no-i18n]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    const nodes = []; let n;
    while ((n = it.nextNode())) nodes.push(n);
    nodes.forEach((node) => {
      if (!ORIG.has(node)) ORIG.set(node, node.nodeValue);
      const orig = ORIG.get(node);
      const trimmed = norm(orig);
      if (!trimmed) return;
      const tr = R.translate(trimmed, code);
      const next = (tr === null) ? orig : orig.replace(trimmed, tr);
      if (node.nodeValue !== next) node.nodeValue = next;
    });
  }

  function walkAttrs(root, code) {
    const els = [root].concat(Array.prototype.slice.call(
      root.querySelectorAll ? root.querySelectorAll('*') : []));
    els.forEach((el) => {
      if (!el || el.nodeType !== 1) return;
      ATTRS.forEach((a) => {
        if (!el.hasAttribute || !el.hasAttribute(a)) return;
        let store = OATTR.get(el);
        if (!store) { store = {}; OATTR.set(el, store); }
        if (store[a] === undefined) store[a] = el.getAttribute(a);
        const orig = store[a];
        if (!orig || !orig.trim()) return;
        const tr = R.translate(orig, code);
        const next = (tr === null) ? orig : tr;
        if (el.getAttribute(a) !== next) el.setAttribute(a, next);
      });
      // <option> / <input value> bouton
      if (el.tagName === 'INPUT' && (el.type === 'button' || el.type === 'submit') && el.value) {
        let store = OATTR.get(el) || {}; OATTR.set(el, store);
        if (store.value === undefined) store.value = el.value;
        const tr = R.translate(store.value, code);
        el.value = (tr === null) ? store.value : tr;
      }
    });
  }

  /* ---------------------------------------------------------------
   * V35 KORIJE: BOUCLE ENFINI LANG LAN
   * -------------------------------------------------------------
   * Problème: `R.apply()` modifye DOM la. MutationObserver la resevwa
   * chanjman sa yo APRE (nan yon microtask), donk drapo `busy` te deja
   * tounen `false` -> li relanse `R.apply()` -> ki refè lòt mitasyon...
   * konsa UI a te kontinye chanje lang san kanpe.
   * Solisyon: nou DEKONEKTE obsèvatè a pandan n ap ekri, nou jete
   * mitasyon nou menm nou fè (`takeRecords()`), epi nou rekonekte l nan
   * yon `setTimeout(0)`. Anplis, `R.apply` pa fè anyen si lang lan pa
   * chanje e paj la deja tradui (`_lastCode` + kontwòl re-antre).
   * ------------------------------------------------------------- */
  let observer = null;
  let applying = false;
  let timer = null;
  R._lastCode = null;

  function pause() {
    if (!observer) return;
    try { observer.takeRecords(); observer.disconnect(); } catch (_) {}
  }
  function resume() {
    if (!observer || !document.body) return;
    try {
      observer.takeRecords();
      observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    } catch (_) {}
  }

  R.apply = function (root) {
    const code = lang();
    const target = (root && root.nodeType) ? root : document.body;
    if (!target || applying) return;
    applying = true;
    pause();
    try { walkText(target, code); walkAttrs(target, code); } catch (_) {}
    // V36: konsolide isit la — sa a ranplase ansyen obsèvatè apa
    // v30/lang-switch.js te genyen pou re-aplike I.apply() (diksyonè
    // baz done, [data-i18n]/[data-i18n-ph]) sou nouvo eleman. Yon sèl
    // obsèvatè/pas kounye a jere toude kouch tradiksyon an.
    try { if (L.i18n && typeof L.i18n.apply === 'function') L.i18n.apply(target); } catch (_) {}
    R._lastCode = code;
    // Rekonekte SÈLMAN apre navigatè a fin livre mitasyon nou yo,
    // konsa pwòp ekriti nou yo pa deklanche yon lòt tou.
    setTimeout(() => { applying = false; resume(); }, 0);
  };

  R.refresh = function (root) {
    if (applying) return;
    clearTimeout(timer);
    timer = setTimeout(() => R.apply(root || document.body), 80);
  };

  async function boot() {
    buildEmbedded();
    R.apply(document.body);
    await R.loadDb();
    R.apply(document.body);
    if (window.MutationObserver && !observer) {
      observer = new MutationObserver((muts) => {
        if (applying) return;
        for (const m of muts) {
          // Nou inyore chanjman `characterData` ki soti nan tradiksyon
          // (yo pase pandan `applying`), uniquement nouvo kontni konte.
          if ((m.addedNodes && m.addedNodes.length) || m.type === 'characterData') {
            R.refresh(document.body); return;
          }
        }
      });
      resume();
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  // Yon sèl reyaksyon pou tout evènman lang (pa youn pa evènman).
  let langEvtTimer = null;
  ['lang-changed', 'jl28:lang'].forEach((ev) =>
    document.addEventListener(ev, () => {
      clearTimeout(langEvtTimer);
      langEvtTimer = setTimeout(() => { R._lastCode = null; R.apply(document.body); }, 40);
    }));
})();


/* =====================================================================
 * JADSTACK LOTTO V34 — SKWÒL + JÈS (mobil)
 * ---------------------------------------------------------------------
 * • Jwenn epi netwaye kouch `position:fixed; inset:0` ki rete louvri —
 *   se SA ki te prensipalman bloke skwòl la (ou te oblije bale nan pye
 *   ekran an oswa ak plizyè dwèt).
 * • Lock skwòl la fèt SÈLMAN lè yon popup/tiwa reyèlman louvri, epi
 *   pozisyon skwòl la remèt egzakteman kote l te ye.
 * • Jès: bale dwèt ADWAT = ouvri meni · bale AGOCH = fermer meni.
 *   (Yon sèl dwèt, nenpòt kote nan paj la lè meni louvri.)
 * ===================================================================== */
(function () {
  const L = (window.Lotri = window.Lotri || {});
  const V = (L.v34 = L.v34 || {});
  let locks = 0, savedY = 0;

  /* ---------- 1. Lock / unlock skwòl ---------- */
  V.lockScroll = function () {
    if (locks++ > 0) return;
    savedY = window.scrollY || document.documentElement.scrollTop || 0;
    document.body.style.top = -savedY + 'px';
    document.body.classList.add('jl34-lock');
  };
  V.unlockScroll = function (force) {
    if (force) locks = 0; else locks = Math.max(0, locks - 1);
    if (locks > 0) return;
    document.body.classList.remove('jl34-lock');
    document.body.style.top = '';
    window.scrollTo(0, savedY);
  };

  /* ---------- 2. Kouch aktif? ---------- */
  const OVERLAY_SEL = '.v11-pop, .modal-backdrop, .jl-modal, [data-overlay], .jl-sheet-backdrop.open';
  function visible(el) {
    if (!el || el.hidden) return false;
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) === 0) return false;
    if (cs.pointerEvents === 'none') return false;
    // V49.2 — kèk popup ansyen fermer tèt yo lè yo POZISYONE DEYÒ EKRAN AN
    // (left:-9999px, elt.) olye `display:none`. `offsetWidth>0` sèl pa t
    // ka detekte sa: yon eleman konsa te ka "vizib" pou nou pou tout tan,
    // e sa te kenbe skwòl la bloke pou tout tan. Maintenant nou verifye l
    // reyèlman anndan ekran vizib la.
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return false;
    if (r.bottom <= 0 || r.top >= window.innerHeight || r.right <= 0 || r.left >= window.innerWidth) return false;
    return true;
  }
  function overlayOpen() {
    return Array.prototype.some.call(document.querySelectorAll(OVERLAY_SEL), visible);
  }
  function drawerOpen() {
    const s = document.getElementById('shell') || document.querySelector('.shell');
    return !!(s && s.classList.contains('drawer-open'));
  }

  /* Sinkronize klas backdrop la (CSS retire pointer-events lè fermer) */
  function syncBackdrop() {
    document.querySelectorAll('.sidebar-backdrop').forEach((b) =>
      b.classList.toggle('is-open', drawerOpen()));
  }

  let wanted = false;
  function sync() {
    syncBackdrop();
    const need = overlayOpen() || (drawerOpen() && window.innerWidth < 960);
    if (need === wanted) return;
    wanted = need;
    if (need) V.lockScroll(); else V.unlockScroll(true);
  }
  V.syncScroll = sync;

  /* ---------- 3. Sekirite: pa janm kite paj la bloke ---------- */
  V.releaseAll = function () { V.unlockScroll(true); wanted = false; };
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setTimeout(sync, 30); });
  window.addEventListener('pageshow', () => V.releaseAll());
  window.addEventListener('resize', () => setTimeout(sync, 60));

  /* ---------- 4. Jès dwèt (mobil) ---------- */
  function mountEdge() {
    if (document.querySelector('.jl34-edge')) return;
    const d = document.createElement('div');
    d.className = 'jl34-edge';
    document.body.appendChild(d);
  }

  function shell() { return document.getElementById('shell') || document.querySelector('.shell'); }
  function openDrawer() { const s = shell(); if (s) { s.classList.add('drawer-open'); sync(); } }
  function closeDrawer() { const s = shell(); if (s) { s.classList.remove('drawer-open'); sync(); } }
  V.openDrawer = openDrawer; V.closeDrawer = closeDrawer;

  (function gestures() {
    let sx = 0, sy = 0, t0 = 0, track = false;
    document.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1 || window.innerWidth >= 960) { track = false; return; }
      const t = e.touches[0];
      sx = t.clientX; sy = t.clientY; t0 = Date.now();
      // Bale pou ouvri: sot nan bò goch (<=32px) · bale pou fermer: nenpòt kote
      track = drawerOpen() || sx <= 32;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      if (!track) return; track = false;
      const t = e.changedTouches[0];
      const dx = t.clientX - sx, dy = Math.abs(t.clientY - sy);
      const dt = Date.now() - t0;
      if (dy > 55 || dt > 700) return;           // se yon skwòl vètikal, kite l
      if (dx > 50 && !drawerOpen()) openDrawer();
      else if (dx < -50 && drawerOpen()) closeDrawer();
    }, { passive: true });
  })();

  /* Klike sou backdrop = fermer */
  document.addEventListener('click', (e) => {
    if (e.target.classList && e.target.classList.contains('sidebar-backdrop')) closeDrawer();
  });

  /* ---------- 5. Obsèvatè ---------- */
  function boot() {
    mountEdge();
    sync();
    if (window.MutationObserver) {
      let tmr = null;
      new MutationObserver(() => { clearTimeout(tmr); tmr = setTimeout(sync, 80); })
        .observe(document.documentElement, { childList: true, subtree: true, attributes: true,
          attributeFilter: ['class', 'hidden', 'style'] });
    }
    setInterval(sync, 500);   // filè sekirite kont kouch fantom (V49.2: pi rapid, .5s)
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  /* ---------- 6. Filè sekirite siplemantè (V49.2) ----------
     Chak fwa moun nan navige sou yon nouvo vi (evènman `lotri:view` ki
     deja egziste nan shell.js), sa vle di li REYÈLMAN ka enteraji ak
     paj la — kidonk okenn blokaj pa ta dwe rete. Nou fòse yon
     verifikasyon imedya olye n tann pwochen tik 500ms lan. */
  document.addEventListener('lotri:view', () => setTimeout(sync, 0));
})();


/* =====================================================================
 * JADSTACK LOTTO V50 — FAZ 1 : SKWÒL LIB TOUPATOU
 * ---------------------------------------------------------------------
 * Objektif: itilizatè a dwe ka kòmanse jès skwòl li NENPÒT KOTE (mitan
 * ekran, sou yon kat, sou tèks, sou yon lis) — pa uniquement sou header oswa
 * bottom-nav.
 *
 * Kòz ki rete apre V49:
 *  1. `body.jl34-lock` ka rete aktive san okenn modal vizib (lock
 *     konte nan scroll-fix.js ka dezekilibre si yon modal detwi nan DOM
 *     san `unlockScroll`). Lè lock la rete, `position:fixed` +
 *     `touch-action:none` sou <body> touye tout skwòl nan zòn kontni an,
 *     pandan header/bottom-nav (ki fikse, deyò flux la) rete "skwolab".
 *  2. Popup ki "fermer" ak `left:-9999px` / `opacity:0` / `visibility` men
 *     ki rete nan DOM: yo konte kòm louvri pou kèk detektè.
 *  3. Listener `touchmove` ki rele `preventDefault()` san kondisyon.
 *
 * Solisyon isit la (frontend uniquement, zewo backend):
 *  A. Watchdog: si `jl34-lock` rete > 3s san okenn overlay reyèlman
 *     vizib → lage lock la otomatikman.
 *  B. Nòmalizasyon overlay fermer: tout popup ki pozisyone deyò ekran an
 *     (-9999px, elt.) resevwa `display:none` + `pointer-events:none`.
 *  C. Pwoteksyon touchmove: nenpòt `preventDefault()` san kondisyon sou
 *     `document`/`body`/`window` vin pasif (li pa ka anile skwòl la),
 *     eksepte lè yon overlay reyèlman louvri.
 *  D. Netwayaj kontni: okenn konteyner prensipal pa kenbe yon
 *     `overflow` ki bloke skwòl paj la.
 * ===================================================================== */
(function () {
  'use strict';

  var LOCK = 'jl34-lock';
  var OVERLAY_SEL = '.v11-pop, .modal-backdrop, .jl-modal, .jl-sheet-backdrop.open, [data-overlay], .sidebar-backdrop.is-open';
  var GRACE_MS = 3000;   // Faz 1 — lage lock la apre 3 segonn san modal
  var lockSince = 0;

  /* ---------- 1. Èske yon overlay REYÈLMAN vizib? ---------- */
  function reallyVisible(el) {
    if (!el || el.hidden) return false;
    var cs = window.getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') return false;
    if (parseFloat(cs.opacity) === 0) return false;
    if (cs.pointerEvents === 'none') return false;
    var r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return false;
    // Pozisyone deyò ekran an (left:-9999px, translate, elt.) = fermer
    if (r.bottom <= 0 || r.top >= window.innerHeight) return false;
    if (r.right <= 0 || r.left >= window.innerWidth) return false;
    return true;
  }

  function overlayList() {
    var out = [];
    var nodes = document.querySelectorAll(OVERLAY_SEL);
    for (var i = 0; i < nodes.length; i++) if (reallyVisible(nodes[i])) out.push(nodes[i]);
    return out;
  }

  function drawerOpen() {
    var s = document.getElementById('shell') || document.querySelector('.shell');
    return !!(s && s.classList.contains('drawer-open'));
  }

  function needLock() {
    return overlayList().length > 0 || (drawerOpen() && window.innerWidth < 960);
  }

  /* ---------- 2. Nòmalize popup fermer (pa gen pozisyon negatif) ---------- */
  function normalizeClosed() {
    var nodes = document.querySelectorAll('.v11-pop, .modal-backdrop, .jl-modal, .jl-sheet-backdrop');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var cs = window.getComputedStyle(el);
      if (cs.display === 'none') continue;
      var r = el.getBoundingClientRect();
      var offscreen = r.right <= 0 || r.left >= window.innerWidth ||
                      r.bottom <= 0 || r.top >= window.innerHeight;
      var invisible = cs.visibility === 'hidden' || parseFloat(cs.opacity) === 0 || el.hidden;
      if (offscreen || invisible) {
        el.setAttribute('data-jl50-closed', '1');
        el.style.setProperty('display', 'none', 'important');
        el.style.setProperty('pointer-events', 'none', 'important');
        el.style.removeProperty('left');
      } else if (el.getAttribute('data-jl50-closed')) {
        // li reouvri: n ap retire nòmalizasyon nou an
        el.removeAttribute('data-jl50-closed');
        el.style.removeProperty('display');
        el.style.removeProperty('pointer-events');
      }
    }
  }

  /* ---------- 3. Lage lock la ---------- */
  function releaseLock(reason) {
    var b = document.body;
    var y = Math.abs(parseInt(b.style.top || '0', 10)) || 0;
    try {
      if (window.Lotri && window.Lotri.v34 && window.Lotri.v34.releaseAll) {
        window.Lotri.v34.releaseAll();
      }
    } catch (_) {}
    b.classList.remove(LOCK);
    b.style.removeProperty('top');
    b.style.removeProperty('position');
    b.style.removeProperty('overflow');
    b.style.removeProperty('touch-action');
    document.documentElement.style.removeProperty('overflow');
    if (y) window.scrollTo(0, y);
    lockSince = 0;
    if (window.console && window.JL50_DEBUG) console.log('[V50] lock lage —', reason);
  }

  /* ---------- 4. Watchdog ---------- */
  function tick() {
    normalizeClosed();
    var locked = document.body.classList.contains(LOCK);
    if (!locked) { lockSince = 0; return; }
    if (needLock()) { lockSince = 0; return; }      // lock lejitim
    if (!lockSince) { lockSince = Date.now(); return; }
    if (Date.now() - lockSince >= GRACE_MS) releaseLock('watchdog 3s san modal');
  }
  setInterval(tick, 500);

  /* Lage imedya nan moman ki pa dwe janm bloke */
  ['pageshow', 'popstate', 'focus'].forEach(function (ev) {
    window.addEventListener(ev, function () { if (!needLock()) releaseLock(ev); });
  });
  document.addEventListener('lotri:view', function () {
    setTimeout(function () { if (!needLock()) releaseLock('chanjman vi'); }, 0);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setTimeout(function () { if (!needLock()) releaseLock('escape'); }, 60);
  });

  /* Si moun nan touche ekran an epi paj la bloke san rezon: lage TOUSWIT */
  document.addEventListener('touchstart', function () {
    if (document.body.classList.contains(LOCK) && !needLock()) releaseLock('touch san modal');
  }, { passive: true, capture: true });

  /* ---------- 5. Pwoteksyon touchmove ---------- *
   * Nenpòt listener `touchmove`/`wheel` sou document/body/window ki pa
   * deklare tèt li kòm non-pasif eksprè vin PASIF: konsa li pa ka rele
   * `preventDefault()` epi touye skwòl la. Lè yon overlay reyèlman
   * louvri, kòd modal la kontinye travay nòmalman paske listener sa yo
   * viv sou eleman modal la, pa sou document.                          */
  (function hardenTouchMove() {
    var proto = EventTarget.prototype;
    var orig = proto.addEventListener;
    if (!orig || orig.__jl50) return;
    function patched(type, fn, opts) {
      if ((type === 'touchmove' || type === 'wheel') &&
          (this === document || this === window || this === document.body ||
           this === document.documentElement)) {
        var explicitActive = opts && typeof opts === 'object' && opts.passive === false;
        if (!explicitActive) {
          var o = (typeof opts === 'object' && opts) ? opts : { capture: !!opts };
          opts = { capture: !!o.capture, once: !!o.once, passive: true };
        }
      }
      return orig.call(this, type, fn, opts);
    }
    patched.__jl50 = true;
    proto.addEventListener = patched;
  })();

  /* ---------- 6. Contenu prensipal pa dwe janm kapte skwòl la ---------- */
  function unblockContainers() {
    var sel = '#view, .view, .app-main, .main, .content, .page, main';
    var nodes = document.querySelectorAll(sel);
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var cs = window.getComputedStyle(el);
      if (cs.overflowY === 'hidden' || cs.overflowY === 'auto' || cs.overflowY === 'scroll') {
        // Sèl konteyner ki gen yon wotè fiks ta jistifye pwòp skwòl pa l.
        if (cs.maxHeight === 'none' && cs.height !== 'auto') continue;
        el.style.setProperty('overflow-y', 'visible', 'important');
      }
      if (cs.touchAction === 'none') el.style.setProperty('touch-action', 'pan-y', 'important');
    }
  }
  function boot() { normalizeClosed(); unblockContainers(); tick(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  document.addEventListener('lotri:view', function () { setTimeout(unblockContainers, 30); });

  /* Zouti manyèl pou tès: window.JL50.unlock() */
  window.JL50 = { unlock: function () { releaseLock('manyèl'); }, overlays: overlayList, needLock: needLock };
})();


/* =====================================================================
 * JADSTACK LOTTO V51 — FAZ 2 : NAVIGASYON MOBIL TANKOU APK NATIF
 * ---------------------------------------------------------------------
 * Objektif: yon nouvo itilizatè dwe konprann li ka RALE meni an, san
 * okenn eksplikasyon.
 *
 * Sa fichye sa a ajoute (frontend uniquement, zewo backend):
 *   1) Yon ti HANDLE vizyèl sou bò goch ekran an (grabber) — endikasyon
 *      klè ke gen yon tiwa la.
 *   2) Menu ki SWIV DWÈT la an tan reyèl (drag 1:1) pandan w ap rale.
 *   3) Animasyon RUBBER-BAND lè w rale pi lwen pase limit la.
 *   4) FÈMTI ak swipe invès (soti nan tiwa a oswa nan backdrop la).
 *   5) Desizyon ouvè/fèmen ak distans + velosite (flick).
 *
 * Li respekte FAZ 1: nou pa janm bloke skwòl vètikal — `preventDefault()`
 * rive SÈLMAN lè jès la konfime kòm orizontal (ak passive:false eksplisit,
 * sa ki pèmèt li pase gad V50 la).
 * ===================================================================== */
(function () {
  'use strict';

  var MOBILE = '(max-width: 959px)';
  var EDGE = 28;          // zòn depa sou bò goch (px)
  var SLOP = 10;          // konbyen px anvan nou deside jès la orizontal
  var RUBBER = 0.22;      // rezistans rubber-band
  var FLICK = 0.35;       // px/ms — vitès ki sifi pou deside san distans

  function isMobile() { return window.matchMedia(MOBILE).matches; }
  function shell() { return document.getElementById('shell') || document.querySelector('.shell'); }
  function sidebar() { return document.querySelector('.sidebar'); }
  function backdrop() { return document.querySelector('.sidebar-backdrop'); }
  function isOpen() { var s = shell(); return !!(s && s.classList.contains('drawer-open')); }
  function width() { var el = sidebar(); return el ? el.getBoundingClientRect().width || 280 : 280; }

  function overlayOpen() {
    var sel = '.v11-pop, .modal-backdrop, .jl-modal, .jl-sheet-backdrop.open, [data-overlay]';
    return Array.prototype.some.call(document.querySelectorAll(sel), function (el) {
      var cs = getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) === 0) return false;
      return el.offsetWidth > 2 && el.offsetHeight > 2;
    });
  }

  function open() {
    var s = shell(); if (!s) return;
    s.classList.add('drawer-open');
    if (window.Lotri && window.Lotri.v34 && window.Lotri.v34.syncScroll) window.Lotri.v34.syncScroll();
    buzz(8);
  }
  function close() {
    var s = shell(); if (!s) return;
    s.classList.remove('drawer-open');
    if (window.Lotri && window.Lotri.v34 && window.Lotri.v34.syncScroll) window.Lotri.v34.syncScroll();
  }
  function buzz(ms) { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (_) {} }

  /* ---------- 1) HANDLE VIZYÈL ---------- */
  function mountHandle() {
    if (document.querySelector('.jl51-handle')) return;
    var h = document.createElement('div');
    h.className = 'jl51-handle';
    h.setAttribute('aria-hidden', 'true');
    h.innerHTML = '<span></span>';
    document.body.appendChild(h);
    // Yon sèl tap sou handle la ouvè tiwa a tou (aksesiblite dwèt).
    h.addEventListener('click', function () { if (!isOpen()) open(); });
  }

  /* ---------- 2/3/4) DRAG KI SWIV DWÈT LA ---------- */
  var startX = 0, startY = 0, startT = 0, lastX = 0, lastT = 0;
  var mode = null;         // null | 'pending' | 'drag' | 'off'
  var fromOpen = false;

  function setDrag(on) {
    var s = shell(); if (s) s.classList.toggle('jl51-dragging', !!on);
  }

  function paint(x) {
    var W = width();
    var sb = sidebar(), bd = backdrop();
    var progress = Math.max(0, Math.min(1, x / W));
    if (sb) sb.style.transform = 'translateX(' + (x - W) + 'px)';
    if (bd) {
      bd.style.display = 'block';
      bd.style.opacity = String(progress);
      bd.style.pointerEvents = progress > 0.05 ? 'auto' : 'none';
    }
  }

  function clearPaint() {
    var sb = sidebar(), bd = backdrop();
    if (sb) sb.style.removeProperty('transform');
    if (bd) {
      bd.style.removeProperty('display');
      bd.style.removeProperty('opacity');
      bd.style.removeProperty('pointer-events');
    }
  }

  document.addEventListener('touchstart', function (e) {
    mode = null;
    if (!isMobile() || e.touches.length !== 1 || overlayOpen()) { mode = 'off'; return; }
    var t = e.touches[0];
    var tgt = e.target;
    // Pa kònfli ak chan tèks / eleman ki gen pwòp jès orizontal pa yo.
    if (tgt.closest && tgt.closest('input,textarea,select,[contenteditable="true"],.side-link,.jl-scroll-x,table')) {
      mode = 'off'; return;
    }
    fromOpen = isOpen();
    if (!fromOpen && t.clientX > EDGE) { mode = 'off'; return; }
    startX = lastX = t.clientX; startY = t.clientY; startT = lastT = Date.now();
    mode = 'pending';
  }, { passive: true, capture: true });

  document.addEventListener('touchmove', function (e) {
    if (mode === 'off' || mode === null || e.touches.length !== 1) return;
    var t = e.touches[0];
    var dx = t.clientX - startX, dy = t.clientY - startY;

    if (mode === 'pending') {
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > SLOP) { mode = 'off'; return; }  // se skwòl vètikal
      if (Math.abs(dx) < SLOP) return;
      if (!fromOpen && dx < 0) { mode = 'off'; return; }
      mode = 'drag';
      setDrag(true);
    }

    if (mode !== 'drag') return;
    var W = width();
    var raw = fromOpen ? W + dx : dx;
    var x;
    if (raw > W) x = W + (raw - W) * RUBBER;        // rubber-band lè w depase ouvèti a
    else if (raw < 0) x = raw * RUBBER;             // rubber-band lè w depase fèmti a
    else x = raw;
    paint(x);
    lastX = t.clientX; lastT = Date.now();
    e.preventDefault();                             // uniquement lè jès la konfime orizontal
  }, { passive: false, capture: true });

  function finish() {
    if (mode !== 'drag') { mode = null; return; }
    mode = null;
    var W = width();
    var dx = lastX - startX;
    var dt = Math.max(1, lastT - startT);
    var v = dx / dt;                                // px/ms (siyen)
    var raw = fromOpen ? W + dx : dx;
    var shouldOpen;
    if (Math.abs(v) >= FLICK) shouldOpen = v > 0;    // flick rapid deside
    else shouldOpen = raw > W * 0.4;

    setDrag(false);
    clearPaint();                                   // CSS transition pran relè a
    if (shouldOpen) open(); else close();
  }

  document.addEventListener('touchend', finish, { passive: true, capture: true });
  document.addEventListener('touchcancel', function () {
    if (mode === 'drag') { setDrag(false); clearPaint(); if (fromOpen) open(); else close(); }
    mode = null;
  }, { passive: true, capture: true });

  /* Tap sou backdrop = fermer (redondan men garanti) */
  document.addEventListener('click', function (e) {
    if (e.target && e.target.classList && e.target.classList.contains('sidebar-backdrop')) close();
  });

  /* Lè ekran an vin laj, pa kite ankenn style inline */
  window.addEventListener('resize', function () { if (!isMobile()) { clearPaint(); setDrag(false); } });

  function boot() { mountHandle(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  document.addEventListener('lotri:view', function () { setTimeout(mountHandle, 30); });

  window.JL51 = { open: open, close: close };
})();


/* =====================================================================
 * JADSTACK LOTTO V52 — FAZ 3 : PÈFÒMANS & ANIMASYON (frontend uniquement)
 * ---------------------------------------------------------------------
 *  • Transisyon vi : chak fwa `lotri:view` tire, #view antre ak yon
 *    fade+rise 190ms (opacity/transform uniquement => GPU, 60fps).
 *  • Skeleton loading : lè shell.js mete yon `.spinner` nan #view,
 *    nou ranplase l ak yon skeleton (menm DOM host, zewo lojik chanje).
 *  • Haptic : ti vibrasyon 8ms sou aksyon (si aparèy la sipòte l).
 *  • Ripple : feedback touche natif sou .btn / .side-link / bottom-nav.
 *  • Zewo backend, zewo SQL, zewo chanjman sou done.
 * ===================================================================== */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const host = () => document.getElementById('view');

  /* ---------- 1) Skeleton olye spinner ---------- */
  const SKEL = `
    <div class="jl52-skel" data-jl52-skel>
      <div class="jl52-skel-card">
        <div class="jl52-line tall w40"></div>
        <div class="jl52-line w80"></div>
        <div class="jl52-line w60"></div>
      </div>
      <div class="jl52-skel-card">
        <div class="jl52-line w60"></div>
        <div class="jl52-line w80"></div>
      </div>
      <div class="jl52-skel-card">
        <div class="jl52-line w40"></div>
        <div class="jl52-line w60"></div>
      </div>
    </div>`;

  function swapSpinner(el) {
    if (!el) return;
    const sp = el.querySelector(':scope > .spinner');
    if (!sp || el.querySelector('[data-jl52-skel]')) return;
    sp.style.display = 'none';
    el.insertAdjacentHTML('beforeend', SKEL);
  }

  /* ---------- 2) Transisyon vi ---------- */
  let raf = 0;
  function animateView(el) {
    if (!el || reduce) return;
    el.classList.remove('jl52-enter', 'jl52-enter-done');
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      el.classList.add('jl52-enter');
      const done = () => {
        el.classList.remove('jl52-enter');
        el.classList.add('jl52-enter-done');
      };
      setTimeout(done, 320);
    });
  }

  /* ---------- 3) Haptic ---------- */
  function buzz(ms) {
    try { if (navigator.vibrate) navigator.vibrate(ms); } catch (_) {}
  }

  /* ---------- 4) Ripple ---------- */
  function ripple(ev) {
    if (reduce) return;
    const t = ev.target.closest('.btn, .side-link, .jl-sheet-item, .jl-bottom-nav button');
    if (!t || t.disabled) return;
    const r = t.getBoundingClientRect();
    const size = Math.max(r.width, r.height) * 1.15;
    const x = (ev.clientX ?? r.left + r.width / 2) - r.left;
    const y = (ev.clientY ?? r.top + r.height / 2) - r.top;
    const s = document.createElement('span');
    s.className = 'jl52-ripple';
    s.style.width = s.style.height = size + 'px';
    s.style.left = (x - size / 2) + 'px';
    s.style.top = (y - size / 2) + 'px';
    t.appendChild(s);
    setTimeout(() => s.remove(), 520);
  }

  document.addEventListener('pointerdown', (ev) => {
    ripple(ev);
    const t = ev.target.closest('.btn, .side-link, .jl-sheet-item, .jl-bottom-nav button');
    if (t) buzz(8);
  }, { passive: true });

  /* ---------- 5) Obsèvatè: kaptire spinner shell.js ---------- */
  function observe() {
    const el = host();
    if (!el || el.dataset.jl52 === '1') return;
    el.dataset.jl52 = '1';
    swapSpinner(el);
    new MutationObserver(() => swapSpinner(el)).observe(el, { childList: true });
  }

  document.addEventListener('lotri:view', (ev) => {
    const el = (ev && ev.detail) || host();
    animateView(el);
  });
  document.addEventListener('lotri:ready', observe);
  document.addEventListener('DOMContentLoaded', () => { observe(); animateView(host()); });
  observe();
})();


/* =====================================================================
 * JADSTACK LOTTO V34 — LANG: REZOLISYON + PÈSISTANS + APLIKASYON TOTAL
 * ---------------------------------------------------------------------
 * • Langue efektif = preferans moun nan (baz done) > lang konpayi a >
 *   lang SISTÈM (Super Admin). Si moun nan pa gen preferans, li pran
 *   lang jeneral la OTOMATIKMAN.
 * • Lè yon moun chanje lang: nou sere l nan baz done (jl34_rpc_set_my_lang)
 *   + localStorage, epi TOUT paj la retradui (tit, meni, bouton, tab,
 *   etikèt done, placeholder, title, aria-label) — pa uniquement kèk bouton.
 * • Langue FICHE (tikè) separe: konpayi a chwazi pa l, Super Admin mete defo
 *   jeneral la. `Lotri.v34.ficheLang()` bay lang fich la.
 * ===================================================================== */
(function () {
  const L = (window.Lotri = window.Lotri || {});
  const V = (L.v34 = L.v34 || {});
  const LANGS = ['fr', 'ht', 'en'];
  const KEY = 'jl:lang';

  V.LANGS = [
    { code: 'fr', label: 'Français' },
    { code: 'ht', label: 'Créole' },
    { code: 'en', label: 'English' },
  ];

  V.ctx = { system_lang: 'fr', user_pref: null, company_ui_lang: null,
            company_ticket_lang: null, ticket_lang_default: 'fr',
            effective: 'fr', fiche: 'fr' };

  const SB = () => (L.supabase || null);
  const get = (k) => { try { return localStorage.getItem(k); } catch (_) { return null; } };
  const set = (k, v) => { try { localStorage.setItem(k, v); } catch (_) {} };

  V.current = function () {
    const c = get(KEY);
    return LANGS.includes(c) ? c : V.ctx.effective || 'fr';
  };
  V.ficheLang = function () { return V.ctx.fiche || V.ctx.ticket_lang_default || 'fr'; };

  /* ---------- 1. Chaje kontèks lang depi baz done a ---------- */
  V.loadContext = async function () {
    const sb = SB();
    if (!sb) return V.ctx;
    try {
      const { data, error } = await sb.rpc('jl34_rpc_lang_context');
      if (!error && data) V.ctx = Object.assign(V.ctx, data);
    } catch (_) {}
    // Preferans moun nan gen priyorite; si li pa genyen, nou pran jeneral la
    const eff = LANGS.includes(V.ctx.user_pref) ? V.ctx.user_pref
              : (LANGS.includes(V.ctx.effective) ? V.ctx.effective : 'fr');
    set(KEY, eff);
    return V.ctx;
  };

  /* ---------- 2. Chanje lang (tout paj la) ---------- */
  V.setLang = async function (code, opts) {
    if (!LANGS.includes(code)) code = 'fr';
    set(KEY, code);
    document.documentElement.lang = code;

    // 2a. Sere preferans lan nan baz done a (si moun nan konekte)
    const sb = SB();
    if (sb && !(opts && opts.localOnly)) {
      try { await sb.rpc('jl34_rpc_set_my_lang', { _lang: code }); V.ctx.user_pref = code; }
      catch (_) {}
    }
    // 2b. Recharge diksyonè a epi retradui TOUT paj la
    try { if (L.i18n && L.i18n.load) await L.i18n.load(code); } catch (_) {}
    try { if (L.v33 && L.v33.apply) L.v33.apply(document.body); } catch (_) {}
    document.dispatchEvent(new CustomEvent('lang-changed', { detail: code }));
    document.dispatchEvent(new CustomEvent('jl28:lang', { detail: code }));
    return code;
  };

  /* ---------- 3. Réglages administratè ---------- */
  V.setSystemLang = async function (code) {          // Super Admin
    const sb = SB(); if (!sb) return;
    const { error } = await sb.rpc('jl34_rpc_set_system_lang', { _lang: code });
    if (error) throw error;
    V.ctx.system_lang = code;
  };
  V.setDefaultFicheLang = async function (code) {    // Super Admin — fich jeneral
    const sb = SB(); if (!sb) return;
    const { error } = await sb.rpc('jl34_rpc_set_default_fiche_lang', { _lang: code });
    if (error) throw error;
    V.ctx.ticket_lang_default = code;
  };
  V.setCompanyLang = async function (uiLang, ficheLang, companyId) {  // Compagnie
    const sb = SB(); if (!sb) return;
    const { error } = await sb.rpc('jl34_rpc_set_company_lang', {
      _ui_lang: uiLang || null, _ticket_lang: ficheLang || null, _company: companyId || null });
    if (error) throw error;
    V.ctx.company_ui_lang = uiLang || null;
    V.ctx.company_ticket_lang = ficheLang || null;
  };

  /* ---------- 4. Demarraj ---------- */
  async function boot() {
    await V.loadContext();
    const code = V.current();
    document.documentElement.lang = code;
    try { if (L.i18n) { L.i18n.current = code; await L.i18n.load(code); } } catch (_) {}
    try { if (L.v33 && L.v33.apply) L.v33.apply(document.body); } catch (_) {}
    document.dispatchEvent(new CustomEvent('lang-changed', { detail: code }));
  }

  function start() {
    if (SB()) boot();
    else setTimeout(start, 80);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();

  /* ---------- 5. Konpatiblite ak ansyen seleksyonè (v30/lang-switch.js) ---------- */
  const V30 = (L.v30 = L.v30 || {});
  V30.setLang = function (code) { V.setLang(code); };
})();


/* =====================================================================
 * JADSTACK LOTTO V34 — LOGO: BAZ DONE AN PREMYE, LOKAL AN SEKOU
 * ---------------------------------------------------------------------
 * Règ: logo ki nan baz done a (site_config / branding: logo_wide,
 * logo_mark, oswa logo konpayi a) TOUJOU pase an premye. Se uniquement si li
 * pa egziste, si li vid, oswa si imaj la pa ka chaje (404/Storage anpàn)
 * nou tonbe sou fichye lokal la.
 * ===================================================================== */
(function () {
  const L = (window.Lotri = window.Lotri || {});
  const V = (L.v34 = L.v34 || {});

  const LOCAL = {
    wide: 'assets/img/jadstacklotto_logo.png',
    mark: 'assets/img/logo.png',
  };

  function dbUrl(kind) {
    const c = L.config || {};
    const b = c.brand || c.branding || {};
    const co = (L.companyBrand || {});   // logo konpayi a (paj konpayi/ajan)
    const pick = kind === 'mark'
      ? [co.logo_mark, co.logo, b.logo_mark, b.logo_square, b.logo]
      : [co.logo_wide, co.logo, b.logo_wide, b.logo, b.logo_mark];
    return pick.map((v) => (typeof v === 'string' ? v.trim() : '')).find(Boolean) || '';
  }

  V.paintLogos = function (root) {
    const scope = root && root.querySelectorAll ? root : document;
    scope.querySelectorAll('[data-brand]').forEach((host) => {
      const kind = host.dataset.brand === 'mark' ? 'mark' : 'wide';
      const url = dbUrl(kind);
      const local = LOCAL[kind];
      const alt = (L.config && L.config.brand && L.config.brand.name) || 'JADSTACK LOTTO';

      // Toutan konfig (site_config/brand konpayi) POKO fin chaje nan memwa,
      // pa gen ni url Supabase ni fallback ki fyab ankò — montre yon kat
      // "loading" (menm jan ak YouTube) olye yon logo vid ki ka sanble kase.
      if (!L.configLoaded) {
        if (!host.querySelector('.jl34-logo-skel')) {
          host.innerHTML = '<div class="skeleton jl34-logo-skel" style="width:100%;height:100%;border-radius:var(--radius-sm)"></div>';
        }
        return;
      }

      let img = host.querySelector('img[data-jl34]');
      if (!img) {
        img = document.createElement('img');
        img.setAttribute('data-jl34', '1');
        img.alt = alt;
        img.loading = 'eager';
        img.style.cssText = 'object-fit:contain;display:block';
        host.innerHTML = '';
        host.appendChild(img);
      }
      const want = url || local;
      if (img.getAttribute('data-src-want') === want) return;
      img.setAttribute('data-src-want', want);
      img.onerror = function () {
        if (img.getAttribute('data-fallback') === '1') return;   // deja sou lokal
        img.setAttribute('data-fallback', '1');
        img.src = local;                                         // plan B lokal
      };
      img.removeAttribute('data-fallback');
      img.src = want;
    });
  };

  /* Kenbe ansyen API a: `Lotri.paintBrand()` rele koreksyon V34 la tou */
  const prev = L.paintBrand;
  L.paintBrand = function () {
    try { if (typeof prev === 'function') prev.apply(this, arguments); } catch (_) {}
    V.paintLogos(document);
  };

  function boot() {
    V.paintLogos(document);
    if (L.loadConfig) {
      try {
        L.loadConfig().then(() => { L.configLoaded = true; V.paintLogos(document); })
          .catch(() => { L.configLoaded = true; V.paintLogos(document); }); // pa rete sou "loading" pou tout tan si rezo a echwe
      } catch (_) { L.configLoaded = true; }
    } else {
      L.configLoaded = true; // pa gen sistèm konfig — pa gen rezon pou kat "loading" la rete
    }
    if (window.MutationObserver) {
      let t = null;
      new MutationObserver(() => { clearTimeout(t); t = setTimeout(() => V.paintLogos(document), 120); })
        .observe(document.body, { childList: true, subtree: true });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();


/*
 * JADSTACK LOTTO V35 — I18N CACHE / REQUEST LOOP PATCH
 */
(function () {
  'use strict';

  const L = (window.Lotri = window.Lotri || {});
  const I = (L.i18n = L.i18n || {});
  const V = (L.v34 = L.v34 || {});

  const LANGS = ['fr', 'ht', 'en'];
  const LANG_KEY = 'jl:lang';
  const CACHE_PREFIX = 'jl:i18n:dict:v35:';
  const CTX_KEY = 'jl:i18n:context:v35';

  const CACHE_TTL = 7 * 24 * 60 * 60 * 1000;
  const CTX_TTL = 15 * 60 * 1000;

  const memory = Object.create(null);
  const pending = Object.create(null);

  let contextPromise = null;
  let switching = false;
  let bootLocked = false;

  function safeGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (_) {
      return null;
    }
  }

  function safeSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (_) {}
  }

  function safeJsonGet(key) {
    const raw = safeGet(key);
    if (!raw) return null;

    try {
      return JSON.parse(raw);
    } catch (_) {
      return null;
    }
  }

  function safeJsonSet(key, value) {
    try {
      safeSet(key, JSON.stringify(value));
    } catch (_) {}
  }

  function validLang(code) {
    return LANGS.includes(code) ? code : 'fr';
  }

  function currentLang() {
    const saved = safeGet(LANG_KEY);

    if (LANGS.includes(saved)) {
      return saved;
    }

    return validLang(
      I.current ||
      (V.ctx && V.ctx.effective) ||
      'fr'
    );
  }

  function cacheKey(code) {
    return CACHE_PREFIX + validLang(code);
  }

  function readDictCache(code) {
    code = validLang(code);

    if (memory[code]) {
      return memory[code];
    }

    const item = safeJsonGet(cacheKey(code));

    if (
      !item ||
      !item.data ||
      typeof item.data !== 'object'
    ) {
      return null;
    }

    memory[code] = item.data;

    return item.data;
  }

  function writeDictCache(code, data) {
    code = validLang(code);

    if (
      !data ||
      typeof data !== 'object'
    ) {
      return;
    }

    memory[code] = data;

    safeJsonSet(cacheKey(code), {
      version: 35,
      lang: code,
      savedAt: Date.now(),
      data: data
    });
  }

  function isFresh(code) {
    const item = safeJsonGet(
      cacheKey(validLang(code))
    );

    return !!(
      item &&
      item.data &&
      (
        Date.now() -
        Number(item.savedAt || 0)
      ) < CACHE_TTL
    );
  }

  /*
   * Cache translation lookup
   */
  if (
    typeof L.t === 'function' &&
    !L.t.__v35CachePatched
  ) {
    const originalT = L.t;

    const patchedT = function (key, fallback) {
      const d = I._cachedDict;

      if (d && key) {
        let v =
          typeof d[key] === 'string'
            ? d[key]
            : undefined;

        if (v === undefined) {
          v = String(key)
            .split('.')
            .reduce(
              (o, k) =>
                o && o[k] !== undefined
                  ? o[k]
                  : undefined,
              d
            );
        }

        if (
          typeof v === 'string' &&
          v
        ) {
          return v;
        }
      }

      return originalT.call(
        L,
        key,
        fallback
      );
    };

    patchedT.__v35CachePatched = true;

    L.t = patchedT;
  }

  /*
   * Apply cached dictionary immediately.
   */
  function applyCached(code, data) {
    if (!data) {
      return false;
    }

    try {
      I._cachedDict = data;
      I.current = code;

      document.documentElement.lang = code;

      if (typeof I.apply === 'function') {
        I.apply(document);
      }

      try {
        if (
          L.v33 &&
          typeof L.v33.apply === 'function'
        ) {
          L.v33.apply(document.body);
        }
      } catch (_) {}

      return true;

    } catch (_) {
      return false;
    }
  }

  /*
   * Patch I.load
   */
  const originalLoad = I.load;

  if (
    typeof originalLoad === 'function' &&
    !originalLoad.__v35CachePatched
  ) {
    const patchedLoad = async function (
      code,
      opts
    ) {
      code = validLang(code);
      opts = opts || {};

      /*
       * Menm lang lan deja chaje:
       * pa fè okenn request.
       */
      if (
        !opts.force &&
        I.current === code &&
        I._lastLoadedLang === code &&
        I._lastLoadedDict
      ) {
        return I._lastLoadedDict;
      }

      /*
       * Si gen yon request pou lang sa deja,
       * retounen menm Promise la.
       */
      if (
        pending[code] &&
        !opts.force
      ) {
        return pending[code];
      }

      const cached = readDictCache(code);

      /*
       * Cache toujou fre:
       * ZERO RPC.
       */
      if (
        cached &&
        isFresh(code) &&
        !opts.force
      ) {
        I._lastLoadedLang = code;
        I._lastLoadedDict = cached;

        applyCached(
          code,
          cached
        );

        return cached;
      }

      /*
       * Menm si cache ekspire,
       * montre ansyen tradiksyon an touswit.
       */
      if (
        cached &&
        !opts.force
      ) {
        applyCached(
          code,
          cached
        );
      }

      const run = (async () => {
        try {
          const result =
            await originalLoad.call(
              I,
              code
            );

          const data =
            result &&
            typeof result === 'object'
              ? result
              : null;

          if (
            data &&
            Object.keys(data).length
          ) {
            writeDictCache(
              code,
              data
            );

            I._lastLoadedDict =
              data;
          } else if (cached) {
            I._lastLoadedDict =
              cached;
          }

          I._lastLoadedLang =
            code;

          return (
            data ||
            cached ||
            {}
          );

        } catch (err) {

          /*
           * Offline:
           * sèvi ak cache.
           */
          if (cached) {
            applyCached(
              code,
              cached
            );

            I._lastLoadedLang =
              code;

            I._lastLoadedDict =
              cached;

            return cached;
          }

          throw err;

        } finally {
          delete pending[code];
        }
      })();

      pending[code] = run;

      return run;
    };

    patchedLoad.__v35CachePatched =
      true;

    I.load = patchedLoad;
    L.loadLang = patchedLoad;
  }

  /*
   * Cache V34 language context.
   */
  const originalContext =
    typeof V.loadContext === 'function'
      ? V.loadContext
      : null;

  if (
    originalContext &&
    !originalContext.__v35CachePatched
  ) {
    const patchedContext =
      async function (opts) {
        opts = opts || {};

        if (
          contextPromise &&
          !opts.force
        ) {
          return contextPromise;
        }

        if (!opts.force) {
          const cached =
            safeJsonGet(CTX_KEY);

          if (
            cached &&
            cached.data &&
            (
              Date.now() -
              Number(
                cached.savedAt || 0
              )
            ) < CTX_TTL
          ) {
            V.ctx = Object.assign(
              V.ctx || {},
              cached.data
            );

            const eff =
              validLang(
                V.ctx.user_pref ||
                V.ctx.effective ||
                safeGet(LANG_KEY) ||
                'fr'
              );

            safeSet(
              LANG_KEY,
              eff
            );

            return V.ctx;
          }
        }

        contextPromise =
          (async () => {
            try {
              const ctx =
                await originalContext.call(
                  V,
                  opts
                );

              if (
                ctx &&
                typeof ctx === 'object'
              ) {
                safeJsonSet(
                  CTX_KEY,
                  {
                    savedAt: Date.now(),
                    data: ctx
                  }
                );
              }

              return ctx;

            } finally {
              contextPromise = null;
            }
          })();

        return contextPromise;
      };

    patchedContext.__v35CachePatched =
      true;

    V.loadContext =
      patchedContext;
  }

  /*
   * Prevent duplicate language switching.
   */
  const originalSetLang =
    typeof V.setLang === 'function'
      ? V.setLang
      : null;

  if (
    originalSetLang &&
    !originalSetLang.__v35CachePatched
  ) {
    const patchedSetLang =
      async function (
        code,
        opts
      ) {
        code = validLang(code);
        opts = opts || {};

        /*
         * Gen yon switch deja:
         * pa lanse yon lòt.
         */
        if (switching) {
          if (V._switchPromise) {
            return V._switchPromise;
          }
        }

        /*
         * Menm lang:
         * pa fè request.
         */
        if (
          !opts.force &&
          currentLang() === code &&
          I._lastLoadedLang === code
        ) {
          applyCached(
            code,
            readDictCache(code)
          );

          return code;
        }

        switching = true;

        V._switchPromise =
          (async () => {
            try {

              /*
               * Sere lang lokalman an premye.
               */
              safeSet(
                LANG_KEY,
                code
              );

              document.documentElement.lang =
                code;

              const result =
                await originalSetLang.call(
                  V,
                  code,
                  opts
                );

              /*
               * Mete nouvo lang nan context cache.
               */
              safeJsonSet(
                CTX_KEY,
                {
                  savedAt: Date.now(),
                  data: Object.assign(
                    {},
                    V.ctx || {},
                    {
                      user_pref: code,
                      effective: code
                    }
                  )
                }
              );

              return result;

            } finally {
              switching = false;
              V._switchPromise = null;
            }
          })();

        return V._switchPromise;
      };

    patchedSetLang.__v35CachePatched =
      true;

    V.setLang =
      patchedSetLang;
  }

  /*
   * Prevent old V30 picker
   * from creating duplicate calls.
   */
  if (
    L.v30 &&
    typeof L.v30.setLang === 'function' &&
    !L.v30.setLang.__v35CachePatched
  ) {
    const old =
      L.v30.setLang;

    L.v30.setLang =
      function (code) {
        code = validLang(code);

        if (
          currentLang() === code &&
          I._lastLoadedLang === code
        ) {
          return Promise.resolve(code);
        }

        return V.setLang(code);
      };

    L.v30.setLang.__v35CachePatched =
      true;
  }

  /*
   * Manual cache controls.
   */
  L.i18nCache = {

    clear: function (code) {

      if (code) {
        code = validLang(code);

        delete memory[code];

        try {
          localStorage.removeItem(
            cacheKey(code)
          );
        } catch (_) {}

        return;
      }

      LANGS.forEach(function (c) {
        delete memory[c];

        try {
          localStorage.removeItem(
            cacheKey(c)
          );
        } catch (_) {}
      });

      try {
        localStorage.removeItem(
          CTX_KEY
        );
      } catch (_) {}
    },

    status: function () {
      return {
        lang: currentLang(),

        cached: LANGS.reduce(
          function (o, c) {
            o[c] =
              !!readDictCache(c);

            return o;
          },
          {}
        ),

        contextCached:
          !!safeJsonGet(CTX_KEY)
      };
    }
  };

  /*
   * Premye load:
   * si cache egziste,
   * itilize li touswit.
   */
  function warmStart() {

    if (bootLocked) {
      return;
    }

    bootLocked = true;

    const code =
      currentLang();

    const cached =
      readDictCache(code);

    if (cached) {
      applyCached(
        code,
        cached
      );
    }
  }

  if (
    document.readyState ===
    'loading'
  ) {
    document.addEventListener(
      'DOMContentLoaded',
      warmStart,
      { once: true }
    );
  } else {
    warmStart();
  }

  console.info(
    '[JADSTACK] I18N V35 cache patch active'
  );

})();

/* =====================================================================
 * JADSTACK LOTTO V54 — FAZ 4 : WINNER CARD + REZILTA TIRAJ
 * ---------------------------------------------------------------------
 *  • Chanje badge « Won / Gayan » an « Winner 🏆 ».
 *  • Make fich/ranje gayan yo (bòdi dore + glow) — sèlman yo.
 *  • Konfeti yon sèl fwa pa sesyon (sessionStorage).
 *  • Zewo backend, zewo SQL — prezantasyon sèlman.
 *
 * KOREKSYON BUG (Out 2026) — WIN_RE te sèlman gade PREMYE mo tèks
 * badge la (^gayan\b), kidonk yon badge ki di « Gayan : Non » te MATCH
 * paske li KOMANSE ak « Gayan », menm si valè a se Non. Sa te fè fich
 * ki poko gen rezilta parèt kòm « Winner 🏆 » ak konfeti fo. Kounye a
 * nou egzije badge la deja gen classe .badge-success — sinyal reyèl
 * app la sèvi PATOUT (ticket-detail, rapò, lis fich, elatriye) sèlman
 * lè fich la VREMAN genyen — anvan nou konsidere l kòm yon viktwa.
 * ===================================================================== */
(function () {
  'use strict';

  var WIN_RE = /^(won|gayan|winner|genyen)\b/i;
  var SS_KEY = 'jl54.confetti';

  function isWinText(t) { return WIN_RE.test(String(t || '').trim()); }

  function upgradeBadges(root) {
    var nodes = (root || document).querySelectorAll('.badge:not([data-jl54])');
    for (var i = 0; i < nodes.length; i++) {
      var b = nodes[i];
      if (!isWinText(b.textContent)) continue;
      /* Sèl sinyal fyab: badge-success pa janm mete sof si fich la
         VREMAN gayan (gade jl9_is_super()/ticket-detail-v22.js,
         rapo-jounen.js, konpayi/views.js, super-admin/views.js —
         yo TOUT itilize menm règ la). Sa elimine fo-pozitif yo. */
      if (!b.classList.contains('badge-success')) continue;
      b.setAttribute('data-jl54', '1');
      b.classList.add('jl54-winner');
      b.textContent = 'Winner 🏆';
      markContainer(b);
    }
  }

  function markContainer(badge) {
    var row = badge.closest('tr');
    if (row) { row.classList.add('jl54-win-row'); return; }
    var card = badge.closest('.card, .jl-card, .ticket-card, .stat-card');
    if (card) card.classList.add('jl54-win-card');
  }

  /* ---------- Konfeti (yon sèl fwa pa sesyon) ---------- */
  function confetti() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    try { if (sessionStorage.getItem(SS_KEY) === '1') return; sessionStorage.setItem(SS_KEY, '1'); }
    catch (_) { /* sessionStorage bloke: nou kontinye yon sèl fwa */ }

    var wrap = document.createElement('div');
    wrap.className = 'jl54-confetti';
    var colors = ['#d4a017', '#f6cf5e', '#2e8b57', '#3b82f6', '#e05d5d', '#ffffff'];
    for (var i = 0; i < 60; i++) {
      var p = document.createElement('i');
      p.style.left = (Math.random() * 100) + 'vw';
      p.style.background = colors[i % colors.length];
      p.style.setProperty('--dx', (Math.random() * 160 - 80).toFixed(0) + 'px');
      p.style.animationDuration = (1.8 + Math.random() * 1.6).toFixed(2) + 's';
      p.style.animationDelay = (Math.random() * .5).toFixed(2) + 's';
      wrap.appendChild(p);
    }
    document.body.appendChild(wrap);
    setTimeout(function () { wrap.remove(); }, 4200);
  }

  function scan() {
    upgradeBadges(document);
    if (document.querySelector('.jl54-winner')) confetti();
  }

  var t = null;
  function schedule() { clearTimeout(t); t = setTimeout(scan, 60); }

  function boot() {
    scan();
    new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
    document.addEventListener('lotri:view', schedule);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.JL54 = { scan: scan, confetti: confetti };
})();


/* =====================================================================
 * JADSTACK LOTTO V55 — FAZ 5 : TABLO RESPONSIVE (rezize ak dwèt)
 * ---------------------------------------------------------------------
 *  • Chak tablo `.table` resevwa poignée rezize sou chak kolòn.
 *  • Drag ak dwèt (pointer events) — travay sou tach ak sourit.
 *  • Lajè yo sove nan localStorage pa siyati tablo a (tèt kolòn yo).
 *  • Tablo rete tablo: pa gen konvèsyon an kat.
 *  • Zewo backend.
 * ===================================================================== */
(function () {
  'use strict';

  var MIN = 56;
  var store = {
    key: function (t) {
      var hs = [].map.call(t.querySelectorAll('thead th'), function (th) {
        return (th.textContent || '').trim().slice(0, 14);
      }).join('|');
      return 'jl55.cols::' + location.pathname + '::' + hs;
    },
    get: function (t) {
      try { return JSON.parse(localStorage.getItem(store.key(t)) || 'null'); } catch (_) { return null; }
    },
    set: function (t, widths) {
      try { localStorage.setItem(store.key(t), JSON.stringify(widths)); } catch (_) {}
    }
  };

  function headers(t) { return [].slice.call(t.querySelectorAll('thead th')); }

  function applySaved(t) {
    var w = store.get(t);
    if (!w) return;
    headers(t).forEach(function (th, i) { if (w[i]) th.style.width = w[i] + 'px'; });
  }

  function saveAll(t) {
    store.set(t, headers(t).map(function (th) { return Math.round(th.getBoundingClientRect().width); }));
  }

  function attach(t) {
    if (t.dataset.jl55 === '1') return;
    var ths = headers(t);
    if (ths.length < 2) return;
    t.dataset.jl55 = '1';
    t.classList.add('jl55-resizable');
    t.style.tableLayout = 'fixed';
    applySaved(t);

    ths.forEach(function (th, idx) {
      if (idx === ths.length - 1) return;         // dènye kolòn nan pran rès la
      var grip = document.createElement('span');
      grip.className = 'jl55-grip';
      grip.setAttribute('aria-hidden', 'true');
      th.appendChild(grip);

      var startX = 0, startW = 0, id = null;
      grip.addEventListener('pointerdown', function (e) {
        e.preventDefault();
        e.stopPropagation();
        id = e.pointerId;
        grip.setPointerCapture(id);
        grip.classList.add('is-drag');
        t.classList.add('jl55-resizing');
        startX = e.clientX;
        startW = th.getBoundingClientRect().width;
      });
      grip.addEventListener('pointermove', function (e) {
        if (id === null) return;
        var w = Math.max(MIN, startW + (e.clientX - startX));
        th.style.width = w + 'px';
      });
      function end() {
        if (id === null) return;
        try { grip.releasePointerCapture(id); } catch (_) {}
        id = null;
        grip.classList.remove('is-drag');
        t.classList.remove('jl55-resizing');
        saveAll(t);
      }
      grip.addEventListener('pointerup', end);
      grip.addEventListener('pointercancel', end);
      // Double-tap = remèt lajè otomatik
      grip.addEventListener('dblclick', function () {
        ths.forEach(function (h) { h.style.width = ''; });
        t.style.tableLayout = 'auto';
        setTimeout(function () { t.style.tableLayout = 'fixed'; saveAll(t); }, 0);
      });
    });
  }

  function scan() { document.querySelectorAll('table.table').forEach(attach); }

  var timer = null;
  function schedule() { clearTimeout(timer); timer = setTimeout(scan, 80); }

  function boot() {
    scan();
    new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
    document.addEventListener('lotri:view', schedule);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.JL55 = { scan: scan };
})();


/* =====================================================================
 * JADSTACK LOTTO V56 — FAZ 6 : EKSPERYANS APK NATIF
 * ---------------------------------------------------------------------
 *  1) Toast olye `alert()` / `confirm()` mesaj enfòmatif.
 *  2) Vibrasyon lejè (Android) sou aksyon bouton.
 *  3) Deteksyon klavye telefòn (bottom-nav kache pandan w ap tape).
 *  4) Bouton enstalasyon PWA (beforeinstallprompt).
 *  Zewo backend, zewo SQL.
 * ===================================================================== */
(function () {
  'use strict';

  /* ---------- 1) TOAST ---------- */
  function host() {
    var h = document.querySelector('.jl56-toasts');
    if (!h) {
      h = document.createElement('div');
      h.className = 'jl56-toasts';
      h.setAttribute('role', 'status');
      h.setAttribute('aria-live', 'polite');
      document.body.appendChild(h);
    }
    return h;
  }

  function toast(msg, kind, ms) {
    if (msg === undefined || msg === null || msg === '') return;
    var el = document.createElement('div');
    el.className = 'jl56-toast';
    el.dataset.kind = kind || 'info';
    el.textContent = String(msg);
    host().appendChild(el);
    var life = ms || Math.min(6000, 2400 + String(msg).length * 35);
    var t = setTimeout(close, life);
    function close() {
      clearTimeout(t);
      el.classList.add('is-out');
      setTimeout(function () { el.remove(); }, 200);
    }
    el.addEventListener('click', close);
    return close;
  }

  // Ranplase alert() — menm API, san blokaj natif la
  if (!window.__jl56Alert) {
    window.__jl56Alert = window.alert.bind(window);
    window.alert = function (m) { toast(m, 'info'); };
  }

  /* ---------- 2) VIBRASYON LEJÈ ---------- */
  function haptic(ms) {
    try { if (navigator.vibrate) navigator.vibrate(ms || 8); } catch (_) {}
  }
  document.addEventListener('pointerdown', function (e) {
    var t = e.target.closest && e.target.closest('.btn, .jl-bottom-nav button, .side-link, .jl-sheet-item, .jl-fab');
    if (t) haptic(8);
  }, { passive: true });

  /* ---------- 3) KLAVYE TELEFÒN ---------- */
  (function keyboard() {
    var vv = window.visualViewport;
    if (!vv) {
      document.addEventListener('focusin', function (e) {
        if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) document.body.classList.add('jl56-keyboard');
      });
      document.addEventListener('focusout', function () {
        setTimeout(function () {
          var a = document.activeElement;
          if (!a || !/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)) document.body.classList.remove('jl56-keyboard');
        }, 80);
      });
      return;
    }
    var base = vv.height;
    vv.addEventListener('resize', function () {
      var open = (base - vv.height) > 140;
      document.body.classList.toggle('jl56-keyboard', open);
      if (!open) base = Math.max(base, vv.height);
    });
  })();

  /* Fè chan an vizib lè klavye a ouvè */
  document.addEventListener('focusin', function (e) {
    var el = e.target;
    if (!/^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return;
    setTimeout(function () {
      try { el.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (_) {}
    }, 260);
  });

  /* ---------- 4) ENSTALASYON PWA ---------- */
  var deferred = null;
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
    try { if (sessionStorage.getItem('jl56.install.hide') === '1') return; } catch (_) {}
    if (document.querySelector('.jl56-install')) return;
    var b = document.createElement('button');
    b.className = 'jl56-install';
    b.type = 'button';
    b.innerHTML = '<i class="fa-solid fa-mobile-screen-button"></i> Enstale aplikasyon an';
    b.addEventListener('click', function () {
      b.remove();
      try { sessionStorage.setItem('jl56.install.hide', '1'); } catch (_) {}
      if (deferred) { deferred.prompt(); deferred = null; }
    });
    document.body.appendChild(b);
    setTimeout(function () { if (b.isConnected) b.remove(); }, 15000);
  });
  window.addEventListener('appinstalled', function () { toast('Application installée ✔', 'success'); });

  window.JL56 = { toast: toast, haptic: haptic };
  window.Lotri = window.Lotri || {};
  window.Lotri.toast = toast;
})();


/* JADSTACK LOTTO V73 — comportements mobile proches d'une application native */
(function(){
  const doc = document, root = doc.documentElement;
  const isMobile = () => matchMedia('(max-width: 959px)').matches;
  const isAndroidWebView = /\bwv\b/.test(navigator.userAgent) || /Version\/4\.0.*Chrome/.test(navigator.userAgent);
  const isStandalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;

  function markNative(){
    if(!isMobile()) return;
    doc.body.dataset.jlNative = 'true';
    if(isAndroidWebView) doc.body.classList.add('jl-android-apk');
    if(isStandalone) doc.body.classList.add('jl-standalone');
  }

  function offlineUI(){
    let el = doc.querySelector('.jl-native-offline');
    if(!el){ el = doc.createElement('div'); el.className='jl-native-offline'; el.setAttribute('role','status'); doc.body.appendChild(el); }
    function sync(){
      const offline = !navigator.onLine;
      el.textContent = offline ? 'Connexion Internet indisponible' : 'Connexion rétablie';
      el.classList.toggle('show', offline);
      if(!offline){ el.classList.add('show'); setTimeout(()=>el.classList.remove('show'), 2200); }
    }
    addEventListener('offline', sync);
    addEventListener('online', sync);
  }

  /* Sur mobile, fermer un modal avec le geste Retour du navigateur/APK quand possible. */
  addEventListener('popstate', ()=>{
    const modal = doc.getElementById('v72-settings-modal');
    if(modal && modal.classList.contains('open') && window.Lotri && Lotri.closeSettings) Lotri.closeSettings();
  });

  /* Après ouverture du clavier, garder le champ actif visible dans la WebView APK. */
  doc.addEventListener('focusin', e=>{
    if(!isMobile()) return;
    const t=e.target;
    if(t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)){
      setTimeout(()=>t.scrollIntoView({block:'center', inline:'nearest', behavior:'smooth'}), 180);
    }
  }, true);

  /* Donne un feedback tactile visuel aux vrais boutons sans modifier leur logique métier. */
  doc.addEventListener('pointerdown', e=>{
    if(!isMobile()) return;
    const el=e.target.closest('button,.btn,[role="button"]');
    if(!el) return;
    el.classList.add('jl-native-pressed');
    setTimeout(()=>el.classList.remove('jl-native-pressed'), 130);
  }, {passive:true});

  function start(){ markNative(); offlineUI(); }
  if(doc.readyState==='loading') doc.addEventListener('DOMContentLoaded', start); else start();
})();


/*
 * JADSTACK LOTTO V87 — FINAL SCROLL WATCHDOG
 * Releases stale V34 scroll locks and repairs #view after view changes.
 */
(function () {
  'use strict';

  function visibleOverlay() {
    var selectors = [
      '.v11-pop', '.modal-backdrop', '.jl-modal',
      '.jl-sheet-backdrop.open', '[data-overlay]',
      '.sidebar-backdrop.is-open'
    ];
    var nodes = document.querySelectorAll(selectors.join(','));
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (!el || el.hidden) continue;
      var cs = getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden' ||
          parseFloat(cs.opacity || '1') === 0 ||
          cs.pointerEvents === 'none') continue;
      var r = el.getBoundingClientRect();
      if (r.width > 2 && r.height > 2 &&
          r.bottom > 0 && r.top < innerHeight &&
          r.right > 0 && r.left < innerWidth) return true;
    }
    return false;
  }

  function drawerOpen() {
    var s = document.getElementById('shell') || document.querySelector('.shell');
    return !!(s && s.classList.contains('drawer-open'));
  }

  function repair() {
    var app = document.body && document.body.classList.contains('jl-appshell');
    if (!app) return;

    var legit = visibleOverlay() || (drawerOpen() && innerWidth < 960);
    if (!legit && document.body.classList.contains('jl34-lock')) {
      try {
        if (window.Lotri && Lotri.v34 && Lotri.v34.releaseAll) Lotri.v34.releaseAll();
      } catch (_) {}
      document.body.classList.remove('jl34-lock');
      document.body.style.removeProperty('position');
      document.body.style.removeProperty('top');
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('touch-action');
      document.documentElement.style.removeProperty('overflow');
    }

    var view = document.getElementById('view');
    if (view) {
      view.style.setProperty('overflow-y', 'auto', 'important');
      view.style.setProperty('overflow-x', 'hidden', 'important');
      view.style.setProperty('max-height', 'none', 'important');
      view.style.setProperty('touch-action', 'pan-y', 'important');
    }
  }

  function boot() {
    repair();
    setTimeout(repair, 100);
    setTimeout(repair, 500);
    setTimeout(repair, 1200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  window.addEventListener('pageshow', repair, { passive: true });
  window.addEventListener('resize', repair, { passive: true });
  document.addEventListener('lotri:view', function () {
    setTimeout(repair, 0);
    setTimeout(repair, 150);
  });
  document.addEventListener('touchstart', function () {
    if (!visibleOverlay() && !drawerOpen()) repair();
  }, { passive: true, capture: true });

  setInterval(repair, 1500);
})();

