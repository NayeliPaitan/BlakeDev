<template>
  <nav :class="{ scrolled }">
    <a href="#home" class="nav-logo">Blake<span>Dev</span></a>

    <ul class="nav-links">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href" :class="{ active: active === link.id }">
          {{ link.label }}
        </a>
      </li>
    </ul>

    <a href="https://whatsapp.com/channel/0029VajOHHoEgGfOOVcATs3l" class="nav-cta">Únete 🚀</a>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useActiveSection } from '../composables/useActiveSection.js'

const { active } = useActiveSection(['home','cursos','recursos','proyectos','comunidad'])

const scrolled = ref(false)
const onScroll = () => scrolled.value = window.scrollY > 40

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const links = [
  { href: '#cursos',    id: 'cursos',    label: 'Cursos'    },
  { href: '#recursos',  id: 'recursos',  label: 'Recursos'  },
  { href: '#proyectos', id: 'proyectos', label: 'Proyectos' },
  { href: '#comunidad', id: 'comunidad', label: 'Comunidad' },
]
</script>

<style scoped>
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.2rem 3rem;
  background: rgba(10,26,59,.7);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid transparent;
  transition: border-color .3s, background .3s;
}
nav.scrolled {
  background: rgba(10,26,59,.92);
  border-bottom-color: var(--border);
}

.nav-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem; letter-spacing: .08em;
  color: var(--text); text-decoration: none; cursor: none;
}
.nav-logo span { color: var(--p1); }

.nav-links {
  display: flex; align-items: center; gap: 2rem; list-style: none;
}
.nav-links a {
  font-size: .82rem; font-weight: 500;
  color: var(--muted); text-decoration: none;
  letter-spacing: .06em; text-transform: uppercase;
  transition: color .2s; cursor: none;
  position: relative; padding-bottom: 2px;
}
.nav-links a::after {
  content: '';
  position: absolute; bottom: -2px; left: 0; right: 0; height: 1px;
  background: var(--p2); transform: scaleX(0); transform-origin: left;
  transition: transform .25s;
}
.nav-links a:hover,
.nav-links a.active { color: var(--p3); }
.nav-links a.active::after,
.nav-links a:hover::after { transform: scaleX(1); }

.nav-cta {
  padding: .45rem 1.2rem;
  background: linear-gradient(135deg, var(--p1), var(--p2));
  border-radius: 6px;
  font-size: .8rem; font-weight: 600;
  color: #fff; cursor: none; text-decoration: none;
  transition: box-shadow .2s, transform .2s;
}
.nav-cta:hover { box-shadow: 0 4px 24px rgba(137,77,248,.45); transform: translateY(-1px); }

@media (max-width: 768px) {
  nav { padding: 1rem 1.5rem; }
  .nav-links { display: none; }
}
</style>
