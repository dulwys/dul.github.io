/* ============================================================
   aktif.js — Portofolio Abdulloh
   ============================================================ */

/* ════════════════════════════════════════════════════════════
   ░░  DATA — UBAH DI SINI SESUAI KEBUTUHAN  ░░
   ════════════════════════════════════════════════════════════ */

const SKILLS = [
  // ── Bahasa Pemrograman & Web ──────────────────────────────
  { nama: "HTML",       persen: 10,  ikon: "🌐" },
  { nama: "CSS",        persen: 10,  ikon: "🎨" },
  { nama: "JavaScript", persen: 10,  ikon: "⚡" },
  { nama: "Python",     persen: 15,  ikon: "🐍" },
  { nama: "PHP",        persen: 1,  ikon: "🛠️" },

  // ── Akademik ──────────────────────────────────────────────
  { nama: "Saintek (Fisika, Kimia, Bio, Mtk)", persen: 80, ikon: "🔬" },
  { nama: "Soshum",     persen: 50,  ikon: "📚" },

  // ── Lainnya ───────────────────────────────────────────────
  { nama: "Mobile Legends", persen: 90, ikon: "🎮" },
];

const PRESTASI = [
  // ── Tingkat Kabupaten / Antar Sekolah ─────────────────────
  {
    medal:  "🏆",
    level:  "Kab. Gresik",
    judul:  "Juara 1 — PRISA BATTLEFIELD",
    cabang: "Mobile Legends",
    tahun:  "2024/2025",
    desc:   "Turnamen Mobile Legends antar sekolah yang diselenggarakan oleh SMK PGRI 1 Gresik.",
  },
  {
    medal:  "🥈",
    level:  "Kab. Gresik",
    judul:  "Juara 2 — SMECTRA COMPETITION",
    cabang: "Mobile Legends",
    tahun:  "2024/2025",
    desc:   "Kompetisi Mobile Legends antar sekolah yang diselenggarakan oleh SMK NU Gresik.",
  },
  {
    medal:  "🧮",
    level:  "OSN",
    judul:  "Perwakilan OSN — Matematika",
    cabang: "Olimpiade Sains Nasional",
    tahun:  "2x (2 Tahun)",
    desc:   "Mewakili SMP Semen Gresik dalam Olimpiade Sains Nasional cabang Matematika selama dua tahun berturut-turut.",
  },

  // ── Tingkat Sekolah ───────────────────────────────────────
  {
    medal:  "🌟",
    level:  "Tingkat Sekolah",
    judul:  "Peserta Didik Teladan 1",
    cabang: "SMP Semen Gresik",
    tahun:  "2025",
    desc:   "Meraih predikat peserta didik teladan pertama, diumumkan pada wisuda tahun ajaran 2024/2025 SMP Semen Gresik.",
  },
  {
    medal:  "📊",
    level:  "Tingkat Sekolah",
    judul:  "Nilai Asesmen Tertinggi",
    cabang: "SMP Semen Gresik",
    tahun:  "2025",
    desc:   "Peraih nilai asesmen tertinggi di SMP Semen Gresik, diumumkan pada wisuda tahun ajaran 2024/2025.",
  },
  {
    medal:  "📝",
    level:  "Tingkat Sekolah",
    judul:  "Nilai Rapot Tertinggi",
    cabang: "SMP Semen Gresik",
    tahun:  "2025",
    desc:   "Peraih nilai rapot tertinggi di SMP Semen Gresik, diumumkan pada wisuda tahun ajaran 2024/2025.",
  },
];

const KONTAK = [
  {
    platform: "WhatsApp",
    handle:   "+62 859-3615-2331",
    ikon:     "💬",
    href:     "https://wa.me/6285936152331",
  },
  {
    platform: "Email",
    handle:   "abdulabdulloh216@gmail.com",
    ikon:     "✉️",
    href:     "mailto:abdulabdulloh216@gmail.com",
  },
  {
    platform: "Instagram",
    handle:   "@dul.wys",
    ikon:     "📸",
    href:     "https://instagram.com/dul.wys",
  },
];

/* ════════════════════════════════════════════════════════════
   ░░  TYPEWRITER  ░░
   ════════════════════════════════════════════════════════════ */

const typewriterLines = [
  "Siswa SMA Kelas XI — Saintek",
  "Web Developer (in progress) 🚀",
  "Python Enthusiast 🐍",
  "Mobile Legends Player 🎮",
  "Lifelong Learner 📚",
];

let twIdx = 0, twChar = 0, twDeleting = false;
const twEl = document.getElementById("typewriterText");

function typewrite() {
  const line = typewriterLines[twIdx];
  if (!twDeleting) {
    twEl.textContent = line.slice(0, twChar + 1);
    twChar++;
    if (twChar === line.length) {
      twDeleting = true;
      setTimeout(typewrite, 1800);
      return;
    }
  } else {
    twEl.textContent = line.slice(0, twChar - 1);
    twChar--;
    if (twChar === 0) {
      twDeleting = false;
      twIdx = (twIdx + 1) % typewriterLines.length;
    }
  }
  setTimeout(typewrite, twDeleting ? 45 : 85);
}
typewrite();

/* ════════════════════════════════════════════════════════════
   ░░  NAVBAR  ░░
   ════════════════════════════════════════════════════════════ */

const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
  updateActiveNav();
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// close mobile nav on link click
navLinks.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

function updateActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  let current = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.section === current);
  });
}
updateActiveNav();

/* ════════════════════════════════════════════════════════════
   ░░  CUSTOM CURSOR  ░░
   ════════════════════════════════════════════════════════════ */

const cursor = document.getElementById("cursor");
const cursorDot = document.getElementById("cursorDot");
let mouseX = 0, mouseY = 0;
let curX = 0, curY = 0;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + "px";
  cursorDot.style.top  = mouseY + "px";
});

function animateCursor() {
  curX += (mouseX - curX) * 0.12;
  curY += (mouseY - curY) * 0.12;
  cursor.style.left = curX + "px";
  cursor.style.top  = curY + "px";
  requestAnimationFrame(animateCursor);
}
animateCursor();

/* ════════════════════════════════════════════════════════════
   ░░  SCROLL REVEAL  ░░
   ════════════════════════════════════════════════════════════ */

const revealEls = document.querySelectorAll(
  ".reveal-up, .reveal-left, .reveal-right"
);

const revealObs = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach(el => revealObs.observe(el));

/* ════════════════════════════════════════════════════════════
   ░░  COUNTER ANIMATION (Tentang)  ░░
   ════════════════════════════════════════════════════════════ */

const counters = document.querySelectorAll(".stat-number");

const counterObs = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.target;
      const duration = 1400;
      const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterObs.unobserve(el);
    });
  },
  { threshold: 0.5 }
);

counters.forEach(c => counterObs.observe(c));

/* ════════════════════════════════════════════════════════════
   ░░  RENDER SKILLS  ░░
   ════════════════════════════════════════════════════════════ */

const skillGrid = document.getElementById("skillGrid");

SKILLS.forEach((sk, i) => {
  const item = document.createElement("div");
  item.className = "skill-item reveal-up";
  item.style.transitionDelay = (i * 0.06) + "s";
  item.innerHTML = `
    <div class="skill-header">
      <span class="skill-name">
        <span class="skill-icon">${sk.ikon}</span>
        ${sk.nama}
      </span>
      <span class="skill-pct" data-pct="${sk.persen}">0%</span>
    </div>
    <div class="skill-bar-bg">
      <div class="skill-bar-fill" data-width="${sk.persen}"></div>
    </div>
  `;
  skillGrid.appendChild(item);
  revealObs.observe(item);
});

/* trigger skill bars on scroll */
const skillObs = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const bar = e.target.querySelector(".skill-bar-fill");
      const pctEl = e.target.querySelector(".skill-pct");
      const targetW = +bar.dataset.width;

      // animate bar
      setTimeout(() => { bar.style.width = targetW + "%"; }, 100);

      // animate counter
      const start = performance.now();
      const dur = 1200;
      function countPct(now) {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        pctEl.textContent = Math.round(ease * targetW) + "%";
        if (p < 1) requestAnimationFrame(countPct);
      }
      requestAnimationFrame(countPct);

      skillObs.unobserve(e.target);
    });
  },
  { threshold: 0.4 }
);

document.querySelectorAll(".skill-item").forEach(el => skillObs.observe(el));

/* ════════════════════════════════════════════════════════════
   ░░  RENDER PRESTASI  ░░
   ════════════════════════════════════════════════════════════ */

const prestasiGrid = document.getElementById("prestasiGrid");

PRESTASI.forEach((p, i) => {
  const card = document.createElement("div");
  card.className = "prestasi-card reveal-up";
  card.style.transitionDelay = (i * 0.08) + "s";
  card.innerHTML = `
    <span class="prestasi-medal">${p.medal}</span>
    <span class="prestasi-level">${p.level}</span>
    <h3 class="prestasi-title">${p.judul}</h3>
    <div class="prestasi-year">📅 ${p.tahun} &nbsp;·&nbsp; ${p.cabang}</div>
    <p class="prestasi-desc">${p.desc}</p>
  `;
  prestasiGrid.appendChild(card);
  revealObs.observe(card);
});

/* ════════════════════════════════════════════════════════════
   ░░  RENDER KONTAK  ░░
   ════════════════════════════════════════════════════════════ */

const kontakGrid = document.getElementById("kontakGrid");

KONTAK.forEach((k, i) => {
  const a = document.createElement("a");
  a.className = "kontak-card reveal-up";
  a.href = k.href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.style.transitionDelay = (i * 0.1) + "s";
  a.innerHTML = `
    <div class="kontak-icon">${k.ikon}</div>
    <div class="kontak-info">
      <div class="kontak-platform">${k.platform}</div>
      <div class="kontak-handle">${k.handle}</div>
    </div>
  `;
  kontakGrid.appendChild(a);
  revealObs.observe(a);
});

/* ════════════════════════════════════════════════════════════
   ░░  SMOOTH ANCHOR SCROLL  ░░
   ════════════════════════════════════════════════════════════ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 8;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  });
});
