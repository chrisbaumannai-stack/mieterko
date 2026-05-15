// ============================================
// Mieterbund Mittelrhein – Shared Components
// ============================================

// SVG Icons (inline for performance)
const Icons = {
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
  mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  scales: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="M2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>',
  shield: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>',
  newspaper: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6z"/></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  checkCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
  chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>',
  chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
  arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  home: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  building: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>',
  info: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
  alertTriangle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
  fileText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
  download: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
  trendingUp: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>',
  droplets: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 14.69c1.56 0 2.83-1.29 2.83-2.88 0-.82-.4-1.6-1.21-2.26-.81-.66-1.35-1.52-1.62-2.55-.27 1.03-.81 1.89-1.62 2.55-.81.66-1.21 1.44-1.21 2.26 0 1.59 1.27 2.88 2.83 2.88z"/><path d="M17 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S17.29 6.75 17 5.3c-.29 1.45-1.14 2.84-2.29 3.76S13 11.1 13 12.25c0 2.22 1.8 4.05 4 4.05z"/></svg>',
  clipboardCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>',
  send: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',
  externalLink: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
  fax: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"/><polyline points="14 2 14 8 20 8"/><path d="M5 12H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3"/><rect x="5" y="10" width="4" height="12" rx="1"/></svg>'
};

// Determine base path for links
function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/pages/')) {
    return '../';
  }
  return '';
}

// Render Top Bar
function renderTopBar() {
  const base = getBasePath();
  return `
  <div class="top-bar">
    <div class="container top-bar-inner">
      <div class="top-bar-contact">
        <span>${Icons.phone} <a href="tel:026115096">0261 – 15 0 96</a></span>
        <span>${Icons.mail} <a href="mailto:koblenz@mieterbund-mittelrhein.de">koblenz@mieterbund-mittelrhein.de</a></span>
      </div>
      <div class="top-bar-hours">
        ${Icons.clock} <span>Mo, Mi, Fr: 8:30–12:00 | Di, Do: 13:30–17:00</span>
      </div>
    </div>
  </div>`;
}

// Render Header
function renderHeader(activePage) {
  const base = getBasePath();
  const pages = [
    { id: 'home', label: 'Startseite', href: `${base}index.html` },
    { id: 'leistungen', label: 'Leistungen', href: `${base}pages/mitgliedschaft.html` },
    { id: 'beratungsstellen', label: 'Beratungsstellen', href: `${base}pages/beratungsstellen.html` },
    { id: 'mietrecht', label: 'Mietrecht-Tipps', href: `${base}pages/mietrecht-tipps.html` },
    { id: 'kontakt', label: 'Kontakt', href: `${base}pages/kontakt.html` }
  ];

  const navLinks = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.id ? 'active' : ''}">${p.label}</a>`
  ).join('');

  return `
  <header class="header">
    <div class="container header-inner">
      <a href="${base}index.html" class="logo">
        <img src="${base}assets/images/logo.svg" alt="Mieterbund Mittelrhein e.V. Logo" class="logo-img">
        <div class="logo-text">
          <span class="logo-name">Mieterbund Mittelrhein e.V.</span>
          <span class="logo-subtitle">Ihr starker Partner im Mietrecht</span>
        </div>
      </a>
      <button class="menu-toggle" aria-label="Menü öffnen" onclick="toggleMenu()">
        ${Icons.menu}
      </button>
      <nav class="nav-main" id="mainNav">
        ${navLinks}
        <a href="${base}pages/mitgliedschaft.html#beitritt" class="btn btn-primary btn-sm">Mitglied werden</a>
      </nav>
    </div>
  </header>`;
}

// Render Footer
function renderFooter() {
  const base = getBasePath();
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <div class="logo-text">
            <span class="logo-name">Mieterbund Mittelrhein e.V.</span>
            <span class="logo-subtitle">Ihr starker Partner im Mietrecht</span>
          </div>
          <p>Wir schützen die Interessen unserer Mitglieder in Miet- und Wohnungsangelegenheiten und treten für eine soziale Wohnungspolitik in Gemeinde, Land und Bund ein.</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul class="footer-links">
            <li><a href="${base}index.html">Startseite</a></li>
            <li><a href="${base}pages/mitgliedschaft.html">Leistungen & Mitgliedschaft</a></li>
            <li><a href="${base}pages/beratungsstellen.html">Beratungsstellen</a></li>
            <li><a href="${base}pages/mietrecht-tipps.html">Mietrecht-Tipps</a></li>
            <li><a href="${base}pages/kontakt.html">Kontakt</a></li>
          </ul>
        </div>
        <div>
          <h4>Mietrecht</h4>
          <ul class="footer-links">
            <li><a href="${base}pages/mietrecht-tipps.html#mieterhoehung">Mieterhöhung</a></li>
            <li><a href="${base}pages/mietrecht-tipps.html#kuendigungsfristen">Kündigungsfristen</a></li>
            <li><a href="${base}pages/mietrecht-tipps.html#schimmel">Feuchtigkeit & Schimmel</a></li>
            <li><a href="${base}pages/mietrecht-tipps.html#betriebskosten">Betriebskosten</a></li>
            <li><a href="${base}pages/mietrecht-tipps.html#schoenheitsreparaturen">Schönheitsreparaturen</a></li>
          </ul>
        </div>
        <div>
          <h4>Kontakt</h4>
          <div class="footer-contact-item">
            ${Icons.mapPin}
            <span>Markenbildchenweg 15<br>56068 Koblenz</span>
          </div>
          <div class="footer-contact-item">
            ${Icons.phone}
            <span><a href="tel:026115096" style="color: var(--gray-400)">0261 – 15 0 96</a></span>
          </div>
          <div class="footer-contact-item">
            ${Icons.mail}
            <span><a href="mailto:koblenz@mieterbund-mittelrhein.de" style="color: var(--gray-400)">koblenz@mieterbund-<br>mittelrhein.de</a></span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} Mieterbund Mittelrhein e.V. Alle Rechte vorbehalten.</span>
        <span class="footer-credit">Konzept &amp; Realisierung: <strong>Brain Arts</strong></span>
        <div class="footer-bottom-links">
          <a href="${base}pages/impressum.html">Impressum</a>
          <a href="${base}pages/datenschutz.html">Datenschutz</a>
        </div>
      </div>
    </div>
  </footer>`;
}

// Render CTA Section
function renderCTA() {
  const base = getBasePath();
  return `
  <section class="cta-section">
    <div class="container">
      <h2>Werden Sie jetzt Mitglied</h2>
      <p>Schützen Sie Ihre Rechte als Mieter mit professioneller Unterstützung durch qualifizierte Volljuristen.</p>
      <div class="cta-actions">
        <a href="${base}pages/mitgliedschaft.html#beitritt" class="btn btn-primary btn-lg">Jetzt Mitglied werden</a>
        <a href="${base}pages/kontakt.html" class="btn btn-secondary btn-lg">Kontakt aufnehmen</a>
      </div>
    </div>
  </section>`;
}

// Initialize page
function initPage(activePage) {
  // Insert top bar
  const topBarEl = document.getElementById('top-bar');
  if (topBarEl) topBarEl.innerHTML = renderTopBar();

  // Insert header
  const headerEl = document.getElementById('header');
  if (headerEl) headerEl.innerHTML = renderHeader(activePage);

  // Insert CTA
  const ctaEl = document.getElementById('cta-section');
  if (ctaEl) ctaEl.innerHTML = renderCTA();

  // Insert footer
  const footerEl = document.getElementById('footer');
  if (footerEl) footerEl.innerHTML = renderFooter();

  // Insert back to top button
  if (!document.querySelector('.back-to-top')) {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Nach oben scrollen');
    btn.innerHTML = Icons.arrowUp;
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.appendChild(btn);
  }

  // Scroll listener: back-to-top button + condensed header
  const headerEl2 = document.querySelector('.header');
  const onScroll = () => {
    const btn = document.querySelector('.back-to-top');
    if (btn) {
      btn.classList.toggle('visible', window.scrollY > 400);
    }
    if (headerEl2) {
      headerEl2.classList.toggle('scrolled', window.scrollY > 20);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Intersection observer for staggered scroll reveal.
  // Deferred so that .animate-in elements injected by inline page
  // scripts (which run after initPage) are also observed.
  setTimeout(() => {
    const animateElements = document.querySelectorAll('.animate-in');
    if (animateElements.length === 0) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const siblings = el.parentElement
            ? Array.from(el.parentElement.querySelectorAll(':scope > .animate-in'))
            : [el];
          const index = siblings.indexOf(el);
          el.style.transitionDelay = (Math.max(index, 0) % 4) * 90 + 'ms';
          el.classList.add('visible');
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    animateElements.forEach(el => observer.observe(el));
  }, 0);

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById('mainNav');
  const btn = document.querySelector('.menu-toggle');
  nav.classList.toggle('open');
  btn.innerHTML = nav.classList.contains('open') ? Icons.x : Icons.menu;
}

// Make functions globally available
window.initPage = initPage;
window.toggleMenu = toggleMenu;
window.Icons = Icons;
window.getBasePath = getBasePath;
