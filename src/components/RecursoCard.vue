<template>
  <a :href="href" :target="external ? '_blank' : '_self'" class="recurso-card reveal">
    <div class="recurso-icon">{{ icon }}</div>
    <div class="recurso-body">
      <div class="recurso-title">{{ titulo }}</div>
      <div class="recurso-desc">{{ desc }}</div>
      <span class="recurso-badge">{{ badge }}</span>
    </div>
  </a>
</template>

<script setup>
defineProps({
  icon:     String,
  titulo:   String,
  desc:     String,
  badge:    String,
  href:     { type: String, default: '#' },
  external: { type: Boolean, default: false },
})
</script>

<style scoped>
.recurso-card {
  border: 1px solid var(--border); border-radius: 10px;
  padding: 1.3rem 1.5rem;
  display: flex; gap: 1rem; align-items: flex-start;
  cursor: none; text-decoration: none; color: inherit;
  transition: all .2s; background: var(--surface);
}
.recurso-card:hover {
  border-color: rgba(137,77,248,.3);
  transform: translateX(5px);
  box-shadow: -4px 0 20px rgba(137,77,248,.08);
}
.recurso-icon {
  width: 38px; height: 38px; flex-shrink: 0;
  background: rgba(137,77,248,.1); border-radius: 8px;
  display: grid; place-items: center; font-size: 1.1rem;
}
.recurso-title { font-size: .9rem; font-weight: 600; margin-bottom: .3rem; }
.recurso-desc  { font-size: .78rem; color: var(--muted); line-height: 1.4; }
.recurso-badge {
  display: inline-block; margin-top: .5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: .58rem; color: var(--p2);
  background: rgba(168,85,247,.08);
  border: 1px solid rgba(168,85,247,.2);
  padding: .15rem .5rem; border-radius: 4px;
}
</style>
