<template>
  <footer>
    <div class="footer-logo">Blake<span>Dev</span></div>
    <div class="footer-by">
      Creado por
      <a href="#" data-hover>Nayeli Paitan</a>
      · Portafolio profesional →
    </div>
    <nav class="footer-links">
      <a v-for="l in links" :key="l.href" :href="l.href">{{ l.label }}</a>
    </nav>
  </footer>
</template>

<script setup>
const links = [
  { href: '#cursos',    label: 'Cursos'    },
  { href: '#recursos',  label: 'Recursos'  },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#comunidad', label: 'Comunidad' },
]
</script>

<style scoped>
footer {
  position: relative; z-index: 1;
  border-top: 1px solid var(--border);
  padding: 2rem 3rem;
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 1rem;
}
.footer-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.3rem; letter-spacing: .08em;
}
.footer-logo span { color: var(--p1); }

.footer-by {
  font-size: .75rem; color: var(--muted);
  font-family: 'JetBrains Mono', monospace;
}
.footer-by a { color: var(--p3); text-decoration: none; cursor: none; }
.footer-by a:hover { text-decoration: underline; }

.footer-links { display: flex; gap: 1.5rem; }
.footer-links a {
  font-size: .75rem; color: var(--muted);
  text-decoration: none; cursor: none; transition: color .2s;
}
.footer-links a:hover { color: var(--p3); }

@media (max-width: 768px) {
  footer { flex-direction: column; text-align: center; padding: 2rem 1.5rem; }
  .footer-links { flex-wrap: wrap; justify-content: center; }
}
</style>
