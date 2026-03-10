<template>
  <!-- ── HERO ── -->
  <section id="home" class="hero">
    <div class="hero-glow" />
    <div class="hero-glow2" />

    <div class="hero-badge">✦ Contenido Tech en Español</div>

    <h1 class="hero-title">
      Aprende con
      <span>BlakeDev</span>
    </h1>

    <p class="hero-sub">
      Programación, desarrollo web y tecnología.<br>
      <strong>Cursos, recursos y proyectos</strong> para que crezcas como dev.
    </p>

    <div class="hero-buttons">
      <a href="cursos"   class="btn-primary">🎓 Ver Cursos</a>
      <a href="recursos" class="btn-ghost">📦 Recursos Gratis</a>
    </div>

    <div class="hero-stats">
      <div class="stat" v-for="s in stats" :key="s.label">
        <div class="stat-num">{{ s.num }}</div>
        <div class="stat-label">{{ s.label }}</div>
      </div>
    </div>
  </section>

  <div class="section-divider" />

  <!-- ── CURSOS ── -->
  <section id="cursos" class="bg-gradient">
    <div class="section-inner">
      <div class="section-tag">Aprende a tu ritmo</div>
      <h2 class="section-title reveal">Nuestros <span>Cursos</span></h2>
      <p class="section-desc reveal reveal-delay-1">Contenido estructurado para llevar tus habilidades al siguiente nivel.</p>

      <div class="cursos-grid">
        <CursoCard
          v-for="(c, i) in cursos"
          :key="c.titulo"
          v-bind="c"
          :delay="(i % 4) + 1"
        />
      </div>
    </div>
  </section>

  <div class="section-divider" />

  <!-- ── RECURSOS ── -->
  <section id="recursos" class="bg-dark">
    <div class="section-inner">
      <div class="section-tag">Herramientas gratis</div>
      <h2 class="section-title reveal">Recursos <span>para Devs</span></h2>
      <p class="section-desc reveal reveal-delay-1">Cheatsheets, ejercicios y guías que uso en mi día a día. Todo para la comunidad.</p>

      <div class="recursos-grid">
        <RecursoCard
          v-for="r in recursos"
          :key="r.titulo"
          v-bind="r"
        />
      </div>
    </div>
  </section>

  <div class="section-divider" />

  <!-- ── PROYECTOS ── -->
  <section id="proyectos">
    <div class="section-inner">
      <div class="section-tag">Lo que hemos construido</div>
      <h2 class="section-title reveal">Proyectos <span>Destacados</span></h2>
      <p class="section-desc reveal reveal-delay-1">Open source y herramientas que puedes explorar, usar y aprender de ellos.</p>

      <div class="proyectos-grid">
        <ProyectoCard
          v-for="p in proyectos"
          :key="p.titulo"
          v-bind="p"
        />
      </div>
    </div>
  </section>

  <div class="section-divider" />

  <!-- ── COMUNIDAD ── -->
  <section id="comunidad" class="bg-gradient">
    <div class="comunidad-inner">
      <div class="section-tag center">Sígueme en redes</div>
      <h2 class="comunidad-title reveal">Únete a la<br><span>Comunidad</span></h2>
      <p class="comunidad-desc reveal reveal-delay-1">
        Contenido tech todos los días. Tips, tutoriales y recursos para devs en crecimiento.
      </p>

      <div class="social-grid">
        <SocialCard
          v-for="s in socials"
          :key="s.nombre"
          v-bind="s"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal.js'
import CursoCard    from '../components/CursoCard.vue'
import RecursoCard  from '../components/RecursoCard.vue'
import ProyectoCard from '../components/ProyectoCard.vue'
import SocialCard   from '../components/SocialCard.vue'

useReveal()

const stats = [
  { num: '3+',  label: 'Cursos'    },
  { num: '10+', label: 'Recursos'  },
  { num: '∞',   label: 'Comunidad' },
]

const cursos = [
  {
    icon: '🗄️', nivel: 'Básico → Avanzado', titulo: 'SQL Práctico',
    desc: 'Domina bases de datos con ejercicios reales. SELECT, JOINs, CTEs, Window Functions y más.',
    tag: 'MySQL', href: '#',
  },
  {
    icon: '🌐', nivel: 'Desde cero', titulo: 'HTML & CSS',
    desc: 'Aprende a construir páginas web desde cero. Estructura, estilos y diseño responsive.',
    tag: 'Web', href: '#',
  },
  {
    icon: '🔧', nivel: 'Esencial', titulo: 'Git & GitHub',
    desc: 'Control de versiones profesional. Aprende a colaborar y gestionar tu código como un pro.',
    tag: 'DevOps', href: '#',
  },
  {
    icon: '🚀', nivel: 'Intermedio', titulo: 'WordPress',
    desc: 'Crea sitios web profesionales sin código. Ideal para freelancers y emprendedores digitales.',
    tag: 'CMS', href: '#',
  },
]

const recursos = [
  { icon: '🗄️', titulo: 'SQL Playground · Básico',     desc: '27 ejercicios interactivos de SQL. Practica directamente en el navegador.', badge: 'INTERACTIVO', href: 'https://nayelipaitan.github.io/sql-practico-mysql', external: true  },
  { icon: '⚡',  titulo: 'SQL Playground · Intermedio', desc: '36 ejercicios: JOINs, CTEs, Window Functions y más.',                       badge: 'INTERACTIVO', href: 'https://nayelipaitan.github.io/sql-intermedio',      external: true  },
  { icon: '📋', titulo: 'SQL Cheatsheet',               desc: 'Los comandos SQL más usados en una sola hoja de referencia rápida.',         badge: 'PDF GRATIS',  href: '#', external: false },
  { icon: '🔗', titulo: 'Git Cheatsheet',               desc: 'Comandos Git esenciales para tu flujo de trabajo diario.',                   badge: 'PDF GRATIS',  href: '#', external: false },
  { icon: '🛠️', titulo: 'Dev Tools Favoritas',         desc: 'Las herramientas que uso para desarrollar, diseñar y crear contenido.',      badge: 'GUÍA',        href: '#', external: false },
  { icon: '📁', titulo: 'HTML Estructura Base',         desc: 'Template HTML5 listo para usar en cualquier proyecto web.',                  badge: 'TEMPLATE',    href: '#', external: false },
]

const proyectos = [
  {
    lang: 'SQL · SQLite', titulo: 'SQL Playground · Básico',
    desc: 'Editor SQL interactivo con 27 ejercicios, syntax highlighting y soluciones. Corre 100% en el navegador.',
    tags: ['HTML', 'JavaScript', 'SQL.js', 'CodeMirror'],
    linkLabel: 'Ver proyecto', meta: 'GitHub Pages',
    href: 'https://nayelipaitan.github.io/sql-practico-mysql', external: true,
  },
  {
    lang: 'SQL · SQLite', titulo: 'SQL Playground · Intermedio',
    desc: '36 ejercicios con CTEs, Window Functions, subconsultas correlacionadas y optimización de queries.',
    tags: ['HTML', 'JavaScript', 'SQL.js', 'Window Fn'],
    linkLabel: 'Ver proyecto', meta: 'GitHub Pages',
    href: 'https://nayelipaitan.github.io/sql-intermedio-practico', external: true,
  },
  {
    lang: 'SQL · SQLite', titulo: 'SQL Playground · Avanzado',
    desc: 'Stored Procedures, Triggers, Índices, Transacciones y Vistas en una plataforma interactiva.',
    tags: ['Procedures', 'Triggers', 'Índices'],
    linkLabel: 'Ver proyecto', meta: 'GitHub Pages',
    href: 'https://nayelipaitan.github.io/sql-avanzado/', external: true,
  },
]

const ig  = `<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`
const ignp  = `<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`
const whatsapp = `<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.43 0 .05 5.38.05 12c0 2.11.55 4.18 1.6 6.01L0 24l6.18-1.62A11.94 11.94 0 0012.05 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.21-3.53-8.52zM12.05 21.8c-1.8 0-3.57-.48-5.12-1.39l-.37-.22-3.67.96.98-3.58-.24-.37A9.8 9.8 0 012.25 12c0-5.41 4.39-9.8 9.8-9.8 2.62 0 5.09 1.02 6.94 2.87A9.74 9.74 0 0121.85 12c0 5.41-4.39 9.8-9.8 9.8zm5.37-7.36c-.29-.14-1.72-.85-1.99-.95-.27-.1-.46-.14-.66.14-.19.29-.76.95-.93 1.15-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.51.07-.78.36-.27.29-1.03 1-1.03 2.44 0 1.44 1.05 2.84 1.2 3.04.14.19 2.07 3.16 5.01 4.43.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.19-.56-.34z"/></svg>`
const linkedin = `<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452H16.9V14.87c0-1.331-.025-3.043-1.854-3.043-1.855 0-2.14 1.449-2.14 2.947v5.678H9.359V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.37-1.848 3.604 0 4.27 2.372 4.27 5.455v6.284zM5.337 7.433a2.063 2.063 0 110-4.125 2.063 2.063 0 010 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
const tt  = `<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z"/></svg>`
const yt  = `<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
const gh  = `<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>`

const socials = [
  { nombre: 'Instagram', handle: '@blakedev.np',     iconClass: 'si-ig', svg: ig, href: 'https://www.instagram.com/blakedev.np/'  },
  { nombre: 'Instagram', handle: '@nayeli.paitan',     iconClass: 'si-ignp', svg: ignp, href: 'https://www.instagram.com/nayeli.paitan/'  },
  { nombre: 'Whatsapp', handle: '@BlakeDev 👩🏻‍💻💜💙',     iconClass: 'si-whatsapp', svg: whatsapp, href: 'https://whatsapp.com/channel/0029VajOHHoEgGfOOVcATs3l'  },
  { nombre: 'Linkedin', handle: '@nayeli.paitan',     iconClass: 'si-linkedin', svg: linkedin, href: 'https://www.linkedin.com/in/nayeli-alison-paitan-ramirez/'  },
  { nombre: 'TikTok',    handle: '@nayeli.paitan',     iconClass: 'si-tt', svg: tt, href: 'https://www.tiktok.com/@nayeli.paitan'    },
  { nombre: 'YouTube',   handle: '@NayeliPaitan',     iconClass: 'si-yt', svg: yt, href: 'https://www.youtube.com/@NayeliPaitan'   },
  { nombre: 'GitHub',    handle: '@NayeliPaitan', iconClass: 'si-gh', svg: gh, href: 'https://github.com/NayeliPaitan' },
]
</script>

<style scoped>
/* ── HERO ── */
.hero {
  position: relative; z-index: 1;
  min-height: 100vh;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  text-align: center; padding: 8rem 2rem 5rem;
  overflow: hidden;
}
.hero-glow {
  position: absolute; width: 650px; height: 650px; border-radius: 50%;
  background: radial-gradient(circle, rgba(137,77,248,.18) 0%, transparent 70%);
  top: 50%; left: 50%; transform: translate(-50%,-50%); pointer-events: none;
}
.hero-glow2 {
  position: absolute; width: 320px; height: 320px; border-radius: 50%;
  background: radial-gradient(circle, rgba(192,132,252,.12) 0%, transparent 70%);
  top: 18%; right: 8%; pointer-events: none;
}
.hero-badge {
  display: inline-flex; align-items: center; gap: .5rem;
  background: rgba(137,77,248,.1); border: 1px solid rgba(137,77,248,.25);
  color: var(--p3); font-family: 'JetBrains Mono', monospace;
  font-size: .7rem; padding: .35rem .9rem;
  border-radius: 999px; margin-bottom: 1.5rem;
  animation: fadeUp .6s .1s both;
}
.hero-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(4rem, 12vw, 9rem);
  line-height: .92; letter-spacing: .02em;
  animation: fadeUp .6s .2s both;
}
.hero-title span { color: var(--p1); display: block; }

.hero-sub {
  font-size: clamp(1rem, 2vw, 1.2rem); color: var(--muted);
  max-width: 520px; line-height: 1.65; margin: 1.5rem auto 2.5rem; font-weight: 300;
  animation: fadeUp .6s .35s both;
}
.hero-sub strong { color: var(--p3); font-weight: 600; }

.hero-buttons {
  display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;
  animation: fadeUp .6s .45s both;
}
.hero-stats {
  display: flex; gap: 3rem; margin-top: 4.5rem;
  animation: fadeUp .6s .55s both;
}
.stat { text-align: center; }
.stat-num  { font-family: 'Bebas Neue', sans-serif; font-size: 2.4rem; color: var(--p1); line-height: 1; }
.stat-label { font-size: .7rem; color: var(--muted); text-transform: uppercase; letter-spacing: .12em; margin-top: .3rem; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── BACKGROUNDS ── */
.bg-dark     { background: var(--bg2); }
.bg-gradient { background: linear-gradient(180deg, transparent, rgba(137,77,248,.05) 50%, transparent); }

/* ── CURSOS ── */
.cursos-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(240px,1fr));
  gap: 1.2rem; margin-top: 3rem;
}

/* ── RECURSOS ── */
.recursos-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(270px,1fr));
  gap: 1rem; margin-top: 3rem;
}

/* ── PROYECTOS ── */
.proyectos-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(320px,1fr));
  gap: 1.4rem; margin-top: 3rem;
}

/* ── COMUNIDAD ── */
.comunidad-inner { max-width: 820px; margin: 0 auto; padding: 6rem 2rem; text-align: center; }
.comunidad-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 6vw, 5rem); line-height: .95; margin: 1rem 0 1.2rem;
}
.comunidad-title span { color: var(--p1); }
.comunidad-desc {
  color: var(--muted); font-size: 1rem; line-height: 1.7;
  max-width: 460px; margin: 0 auto 3rem; font-weight: 300;
}
.social-grid {
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 1rem; max-width: 540px; margin: 0 auto;
}
.center { justify-content: center; }

@media (max-width: 768px) {
  .hero-stats   { gap: 1.5rem; }
  .social-grid  { grid-template-columns: 1fr; }
  .proyectos-grid { grid-template-columns: 1fr; }
}
</style>
