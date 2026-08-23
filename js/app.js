/* ============================================================
   EUREX FITNESS: APP LOGIC
   You normally don't need to edit this file.
   It reads everything from content.js and posts.js
   and builds the pages automatically.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  buildHeader();
  buildFooter();
  buildPopup();
  const page = document.body.dataset.page;
  if (page === "home") buildHome();
  if (page === "about") buildAbout();
  if (page === "plans") buildPlans();
  if (page === "blog") buildBlogList();
  if (page === "post") buildSinglePost();
  if (page === "books") buildBooks();
  if (page === "courses") buildCourses();
  if (page === "join") buildJoin();
});

/* ---------- helpers ---------- */
function el(sel) { return document.querySelector(sel); }
function esc(s) { return String(s ?? ""); }
function imgOrPh(src, alt, label, eager) {
  const loading = eager ? `loading="eager" fetchpriority="high"` : `loading="lazy"`;
  return `<img src="${esc(src)}" alt="${esc(alt)}" ${loading}
    onerror="this.outerHTML='<div class=&quot;ph&quot;>${esc(label || alt)}</div>'">`;
}
function initialsAvatar(t) {
  return t.image
    ? `<div class="avatar"><img src="${esc(t.image)}" alt="${esc(t.name)}" loading="lazy" onerror="this.parentElement.innerHTML='${esc(t.initials)}'"></div>`
    : `<div class="avatar">${esc(t.initials)}</div>`;
}

/* ---------- header / footer ---------- */
function buildHeader() {
  const links = SITE.footer.links;
  const current = location.pathname.split("/").pop() || "index.html";
  el("#site-header").innerHTML = `
    <nav class="nav wrap">
      <a class="logo" href="index.html" aria-label="${esc(SITE.brand.name)} home">
        <img src="${esc(SITE.brand.logo)}" alt="${esc(SITE.brand.name)} logo">
      </a>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links">
        ${links.map(l => {
          const isJoin = l.link === "join.html";
          const active = current === l.link ? "active" : "";
          return `<li><a class="${isJoin ? "nav-cta" : active}" href="${esc(l.link)}">${esc(l.text)}</a></li>`;
        }).join("")}
      </ul>
    </nav>`;
  const toggle = el(".nav-toggle"), menu = el(".nav-links");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}

function buildFooter() {
  const b = SITE.brand;
  el("#site-footer").innerHTML = `
    <div class="wrap">
      <div class="footer-top">
        <div class="footer-logo">
          <img src="${esc(b.logo)}" alt="${esc(b.name)} logo">
          <p>${esc(SITE.footer.text)}</p>
          <div class="footer-social">
            <a href="${esc(b.instagram)}" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
            <a href="${esc(b.whatsapp)}" target="_blank" rel="noopener" aria-label="WhatsApp">WA</a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>${SITE.footer.links.slice(0, 4).map(l => `<li><a href="${esc(l.link)}">${esc(l.text)}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>More</h4>
          <ul>${SITE.footer.links.slice(4).map(l => `<li><a href="${esc(l.link)}">${esc(l.text)}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:${esc(b.email)}">${esc(b.email)}</a></li>
            <li><a href="tel:${esc(b.phone).replace(/\s+/g, "")}">${esc(b.phone)}</a></li>
          </ul>
        </div>
      </div>
      <p class="copyright">© ${new Date().getFullYear()} ${esc(b.name)}. All rights reserved.</p>
    </div>`;
}

/* ---------- popup ---------- */
function buildPopup() {
  const p = SITE.popup;
  if (!p.enabled) return;
  if (document.body.dataset.page === "join") return;
  if (p.showOncePerVisit && sessionStorage.getItem("eurexPopupSeen")) return;

  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  overlay.innerHTML = `
    <div class="popup" role="dialog" aria-modal="true" aria-label="${esc(p.title)}">
      <button class="popup-close" aria-label="Close popup">✕</button>
      ${p.image ? `<div class="popup-img">${imgOrPh(p.image, p.title, "Eurex Fitness")}</div>` : ""}
      <div class="popup-body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.text)}</p>
        <a class="btn btn-solid" href="${esc(p.buttonLink)}">${esc(p.buttonText)}</a>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  const close = () => {
    overlay.classList.remove("show");
    sessionStorage.setItem("eurexPopupSeen", "1");
    setTimeout(() => overlay.remove(), 300);
  };
  overlay.querySelector(".popup-close").addEventListener("click", close);
  overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); }, { once: true });

  setTimeout(() => overlay.classList.add("show"), 120000);
}

/* ---------- home ---------- */
function buildHome() {
  const h = SITE.home;

  el("#hero").innerHTML = `
    <div class="wrap hero-grid">
      <div>
        <h1>${esc(h.heroTitle)}</h1>
        <p class="lead">${esc(h.heroText)}</p>
        <div class="hero-actions">
          <a class="btn btn-solid" href="${esc(h.heroButton1.link)}">${esc(h.heroButton1.text)}</a>
          <a class="btn btn-ghost" href="${esc(h.heroButton2.link)}">${esc(h.heroButton2.text)}</a>
        </div>
      </div>
      <div class="hero-media">
        ${imgOrPh(h.heroImage, "Eurex Fitness training", "Your photo here: assets/hero.jpg", true)}
        <div class="float-card">
          <span class="fc-num">${esc(h.stats[0].number)}</span>
          <span class="fc-lbl">${esc(h.stats[0].label)}</span>
        </div>
      </div>
    </div>`;

  el("#marquee").innerHTML = `
    <div class="marquee-track">
      ${[...h.marquee, ...h.marquee].map(t => `<span>${esc(t)}</span>`).join("")}
    </div>`;

  el("#stats").innerHTML = `
    <div class="wrap"><div class="stat-row">
      ${h.stats.map(s => `<div class="stat"><div class="num">${esc(s.number)}</div><div class="lbl">${esc(s.label)}</div></div>`).join("")}
    </div></div>`;

  el("#pillars").innerHTML = `
    <div class="wrap">
      <div class="section-head"><span class="eyebrow">${esc(h.pillarsEyebrow)}</span><h2>${esc(h.pillarsTitle)}</h2></div>
      <div class="pillar-list">
        ${h.pillars.map(c => `
          <div class="pillar-row">
            <div class="pillar-mark">${esc(c.mark)}</div>
            <div><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p></div>
          </div>`).join("")}
      </div>
    </div>`;

  el("#how-it-works").innerHTML = `
    <div class="wrap">
      <div class="section-head center" style="margin-left:auto;margin-right:auto">
        <span class="eyebrow">${esc(h.howItWorksEyebrow)}</span><h2>${esc(h.howItWorksTitle)}</h2>
      </div>
      <div class="steps-grid">
        ${h.howItWorks.map(s => `
          <div class="step-card">
            <div class="step-num">${esc(s.step)}</div>
            <h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>
          </div>`).join("")}
      </div>
    </div>`;

  el("#testimonials").innerHTML = `
    <div class="wrap">
      <div class="section-head"><span class="eyebrow">${esc(h.testimonialEyebrow)}</span><h2>${esc(h.testimonialTitle)}</h2></div>
      <div class="quote-scroller">
        ${h.testimonials.map(t => `
          <div class="quote-card">
            <p class="quote-text">“${esc(t.quote)}”</p>
            <div class="quote-foot">
              ${initialsAvatar(t)}
              <div class="quote-who"><div class="name">${esc(t.name)}</div><div class="result">${esc(t.result)}</div></div>
            </div>
          </div>`).join("")}
      </div>
    </div>`;

  buildBlogPreview();
  buildCtaBand();
}

function buildBlogPreview() {
  const target = el("#blog-preview");
  if (!target) return;
  target.innerHTML = `
    <div class="wrap">
      <div class="section-head"><span class="eyebrow">From the blog</span><h2>Latest articles</h2></div>
      <div class="post-grid">${POSTS.slice(0, 3).map(postCard).join("")}</div>
      <p style="margin-top:38px"><a class="btn btn-ghost" href="blog.html">Read all articles</a></p>
    </div>`;
}

function buildCtaBand() {
  const target = el("#cta-band");
  if (!target) return;
  target.innerHTML = `
    <div class="wrap">
      <span class="eyebrow">Start today</span>
      <h2>Ready to change<br>how this feels?</h2>
      <p>Tell us your goal and we'll match you with the right plan: classes, coaching or courses.</p>
      <div class="cta-actions">
        <a class="btn btn-light" href="join.html">Join Now</a>
        <a class="btn btn-outline-light" href="plans.html">View Plans</a>
      </div>
    </div>`;
}

/* ---------- about ---------- */
function buildAbout() {
  const a = SITE.about;
  el("#page-hero").innerHTML = `<div class="wrap"><span class="eyebrow">${esc(a.eyebrow)}</span><h1>${esc(a.title)}</h1><p>${esc(a.intro)}</p></div>`;
  el("#about-main").innerHTML = `
    <div class="wrap about-grid">
      <div class="about-media">${imgOrPh(a.image, "Eurex Fitness coach", "Photo of your coach: assets/coach.jpg", true)}</div>
      <div class="about-copy">
        ${a.story.map(p => `<p>${esc(p)}</p>`).join("")}
        <h3 style="margin-top:8px">${esc(a.credentialsTitle)}</h3>
        <ul class="credential-list">${a.credentials.map(c => `<li>${esc(c)}</li>`).join("")}</ul>
        <span class="eyebrow" style="margin-bottom:22px">${esc(a.valuesEyebrow)}</span>
        <div class="card-grid">
          ${a.values.map(v => `<div class="card"><h3>${esc(v.title)}</h3><p>${esc(v.text)}</p></div>`).join("")}
        </div>
      </div>
    </div>`;
  buildCtaBand();
}

/* ---------- plans ---------- */
function buildPlans() {
  const p = SITE.plans;
  el("#page-hero").innerHTML = `<div class="wrap"><span class="eyebrow">${esc(p.eyebrow)}</span><h1>${esc(p.title)}</h1><p>${esc(p.intro)}</p></div>`;
  el("#plans-main").innerHTML = `
    <div class="wrap">
      <div class="pricing-grid">
        ${p.items.map(item => `
          <div class="price-card ${item.featured ? "featured" : ""}">
            ${item.badge ? `<span class="badge">${esc(item.badge)}</span>` : ""}
            <h3>${esc(item.name)}</h3>
            <div class="price">${esc(item.price)}<span class="period"> ${esc(item.period)}</span></div>
            <ul class="tick-list">${item.features.map(f => `<li>${esc(f)}</li>`).join("")}</ul>
            <a class="btn ${item.featured ? "btn-solid" : "btn-ghost"}" href="${esc(item.buttonLink)}">${esc(item.buttonText)}</a>
          </div>`).join("")}
      </div>
      <p style="margin-top:36px;color:var(--muted)">${esc(p.note)}</p>
    </div>`;
  buildCtaBand();
}

/* ---------- blog ---------- */
function postCard(p) {
  return `
    <div class="card post-card">
      <a class="thumb" href="post.html?id=${encodeURIComponent(p.id)}">${imgOrPh(p.image, p.title, p.category)}</a>
      <div class="body">
        <div class="post-meta">${esc(p.category)} · ${esc(p.date)}</div>
        <h3><a href="post.html?id=${encodeURIComponent(p.id)}">${esc(p.title)}</a></h3>
        <p>${esc(p.excerpt)}</p>
        <a class="read-more" href="post.html?id=${encodeURIComponent(p.id)}">Read article →</a>
      </div>
    </div>`;
}

function buildBlogList() {
  el("#page-hero").innerHTML = `<div class="wrap"><span class="eyebrow">Eurex Fitness Blog</span><h1>Articles & Tips</h1><p>Weight loss, wellness and motivation, written by the Eurex Fitness team.</p></div>`;
  el("#blog-main").innerHTML = `<div class="wrap"><div class="post-grid">${POSTS.map(postCard).join("")}</div></div>`;
  buildCtaBand();
}

function buildSinglePost() {
  const id = new URLSearchParams(location.search).get("id");
  const post = POSTS.find(p => p.id === id) || POSTS[0];
  document.title = `${post.title} | ${SITE.brand.name}`;
  el("#post-main").innerHTML = `
    <div class="wrap article">
      <p><a href="blog.html">← All articles</a></p>
      <div class="post-meta" style="margin-top:22px">${esc(post.category)} · ${esc(post.date)}</div>
      <h1>${esc(post.title)}</h1>
      <div class="post-hero">${imgOrPh(post.image, post.title, post.category, true)}</div>
      <div class="article-body">${post.body}</div>
      <p style="margin-top:44px"><a class="btn btn-solid" href="join.html">Join Eurex Fitness</a></p>
    </div>`;
}

/* ---------- books / courses ---------- */
function buildBooks() {
  const b = SITE.books;
  el("#page-hero").innerHTML = `<div class="wrap"><span class="eyebrow">${esc(b.eyebrow)}</span><h1>${esc(b.title)}</h1><p>${esc(b.intro)}</p></div>`;
  el("#books-main").innerHTML = `
    <div class="wrap"><div class="product-grid">
      ${b.items.map(item => `
        <div class="card product-card">
          <div class="thumb">${imgOrPh(item.image, item.title, "Book cover")}</div>
          <div class="body">
            <h3>${esc(item.title)}</h3>
            <div class="price-tag">${esc(item.price)}</div>
            <p>${esc(item.description)}</p>
            <a class="btn btn-solid" href="${esc(item.buttonLink)}">${esc(item.buttonText)}</a>
          </div>
        </div>`).join("")}
    </div></div>`;
  buildCtaBand();
}

function buildCourses() {
  const c = SITE.courses;
  el("#page-hero").innerHTML = `<div class="wrap"><span class="eyebrow">${esc(c.eyebrow)}</span><h1>${esc(c.title)}</h1><p>${esc(c.intro)}</p></div>`;
  el("#courses-main").innerHTML = `
    <div class="wrap"><div class="product-grid">
      ${c.items.map(item => `
        <div class="card product-card">
          <div class="thumb">${imgOrPh(item.image, item.title, "Course")}</div>
          <div class="body">
            <div class="meta">${esc(item.lessons)}</div>
            <h3>${esc(item.title)}</h3>
            <div class="price-tag">${esc(item.price)}</div>
            <p>${esc(item.description)}</p>
            <a class="btn btn-solid" href="${esc(item.buttonLink)}">${esc(item.buttonText)}</a>
          </div>
        </div>`).join("")}
    </div></div>`;
  buildCtaBand();
}

/* ---------- join ---------- */
function buildJoin() {
  const j = SITE.join;
  el("#page-hero").innerHTML = `<div class="wrap"><span class="eyebrow">${esc(j.eyebrow)}</span><h1>${esc(j.title)}</h1><p>${esc(j.intro)}</p></div>`;
}
