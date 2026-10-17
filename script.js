(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Theme colours
  const r = document.documentElement.style;
  if (S.theme) {
    r.setProperty("--bg", S.theme.background);
    r.setProperty("--surface", S.theme.surface);
    r.setProperty("--text", S.theme.text);
    r.setProperty("--muted", S.theme.muted);
    r.setProperty("--accent", S.theme.accent);
  }

  // Meta
  document.title = S.name + " — Official Page";

  // Nav / hero
  $("nav-logo").textContent = S.name;
  [["nav-cta", S.ctaText], ["hero-cta", S.ctaText], ["cta-btn", S.ctaText]].forEach(([id, t]) => {
    $(id).textContent = t;
    $(id).href = S.onlyfansUrl;
  });
  $("hero-img").style.backgroundImage = `url('${S.hero.image}')`;
  $("hero-eyebrow").textContent = S.hero.eyebrow;
  $("hero-title").textContent = S.hero.title;
  $("hero-text").textContent = S.hero.text;
  $("hero-sub").textContent = S.ctaSubtext;

  // About
  $("about-title").textContent = S.about.title;
  $("about-img").src = S.about.image;
  $("about-img").alt = S.name;
  $("about-paras").innerHTML = S.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
  $("about-stats").innerHTML = S.about.stats
    .map((s) => `<div class="stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`)
    .join("");

  // Perks
  $("perks-title").textContent = S.perksTitle;
  $("perks-grid").innerHTML = S.perks
    .map((p, i) => `<div class="perk"><div class="perk__num">0${i + 1}</div><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div>`)
    .join("");

  // Gallery
  $("gallery-title").textContent = S.galleryTitle;
  $("gallery-grid").innerHTML = S.gallery
    .map((g, i) => `<figure class="gitem" data-i="${i}"><img src="${esc(g.src)}" alt="${esc(g.caption || S.name)}" loading="lazy"><span>${esc(g.caption || "")}</span></figure>`)
    .join("");

  // CTA
  $("cta-title").textContent = "Ready to join me?";
  $("cta-text").textContent = S.ctaSubtext;

  // FAQ
  $("faq-title").textContent = S.faqTitle;
  $("faq-list").innerHTML = S.faq
    .map((f) => `<div class="qa"><button type="button">${esc(f.q)}</button><div>${esc(f.a)}</div></div>`)
    .join("");
  $("faq-list").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (b) b.parentElement.classList.toggle("open");
  });

  // Footer
  $("footer-logo").textContent = S.name;
  $("footer-note").textContent = S.footerNote;
  $("footer-copy").textContent = `© ${new Date().getFullYear()} ${S.copyrightName} · ${S.domain}`;
  $("socials").innerHTML = Object.entries(S.socials || {})
    .filter(([, url]) => url)
    .map(([n, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(n)}</a>`)
    .join("");

  // Sticky nav style
  const nav = $("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Lightbox
  let cur = 0;
  const lb = $("lightbox");
  const show = (i) => {
    cur = (i + S.gallery.length) % S.gallery.length;
    $("lb-img").src = S.gallery[cur].src;
    $("lb-cap").textContent = S.gallery[cur].caption || "";
  };
  $("gallery-grid").addEventListener("click", (e) => {
    const f = e.target.closest(".gitem");
    if (!f) return;
    show(+f.dataset.i);
    lb.hidden = false;
  });
  $("lb-close").onclick = () => (lb.hidden = true);
  $("lb-prev").onclick = () => show(cur - 1);
  $("lb-next").onclick = () => show(cur + 1);
  lb.addEventListener("click", (e) => { if (e.target === lb) lb.hidden = true; });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") lb.hidden = true;
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });

  // Age gate
  const gate = $("agegate");
  let ok = false;
  try { ok = localStorage.getItem("age-ok") === "1"; } catch (_) {}
  if (S.ageGate && !ok) {
    $("ag-title").textContent = S.ageGateTitle;
    $("ag-text").textContent = S.ageGateText;
    $("ag-enter").textContent = S.ageGateEnter;
    $("ag-leave").textContent = S.ageGateLeave;
    $("ag-leave").href = S.ageGateLeaveUrl;
    gate.hidden = false;
    document.body.style.overflow = "hidden";
    $("ag-enter").onclick = () => {
      try { localStorage.setItem("age-ok", "1"); } catch (_) {}
      gate.hidden = true;
      document.body.style.overflow = "";
    };
  }
})();
