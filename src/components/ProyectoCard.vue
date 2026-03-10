<template>
  <a :href="href" :target="external ? '_blank' : '_self'" class="proyecto-card reveal">
    <div class="proyecto-header">
      <div class="proyecto-dots">
        <div class="dot dot-r" /><div class="dot dot-y" /><div class="dot dot-g" />
      </div>
      <span class="proyecto-lang">{{ lang }}</span>
    </div>
    <div class="proyecto-body">
      <div class="proyecto-title">{{ titulo }}</div>
      <div class="proyecto-desc">{{ desc }}</div>
      <div class="proyecto-tags">
        <span class="ptag" v-for="t in tags" :key="t">{{ t }}</span>
      </div>
    </div>
    <div class="proyecto-footer">
      <span class="proyecto-link">{{ linkLabel }} <span class="arrow">→</span></span>
      <span class="proyecto-meta">{{ meta }}</span>
    </div>
  </a>
</template>

<script setup>
defineProps({
  lang:      String,
  titulo:    String,
  desc:      String,
  tags:      Array,
  linkLabel: { type: String, default: 'Ver proyecto' },
  meta:      String,
  href:      { type: String, default: '#' },
  external:  { type: Boolean, default: false },
})
</script>

<style scoped>
.proyecto-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 14px; overflow: hidden; cursor: none;
  transition: all .25s; text-decoration: none; color: inherit; display: block;
}
.proyecto-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 48px rgba(137,77,248,.15);
  border-color: rgba(137,77,248,.3);
}

.proyecto-header {
  padding: 1.2rem 1.5rem .8rem;
  display: flex; align-items: center; justify-content: space-between;
  border-bottom: 1px solid var(--border);
}
.proyecto-dots { display: flex; gap: .4rem; }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot-r { background: #ff5f57; } .dot-y { background: #ffbd2e; } .dot-g { background: #28c840; }
.proyecto-lang {
  font-family: 'JetBrains Mono', monospace;
  font-size: .65rem; color: var(--p3);
  background: rgba(192,132,252,.1); padding: .2rem .6rem; border-radius: 4px;
}

.proyecto-body { padding: 1.2rem 1.5rem 1rem; }
.proyecto-title { font-size: 1.05rem; font-weight: 600; margin-bottom: .5rem; }
.proyecto-desc  { font-size: .82rem; color: var(--muted); line-height: 1.5; margin-bottom: 1rem; }
.proyecto-tags  { display: flex; gap: .4rem; flex-wrap: wrap; }
.ptag {
  font-size: .62rem; font-weight: 600; padding: .2rem .55rem; border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  background: rgba(137,77,248,.1); color: var(--p3);
}

.proyecto-footer {
  padding: .9rem 1.5rem; border-top: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
}
.proyecto-link {
  font-size: .78rem; color: var(--p2); font-weight: 500;
  display: flex; align-items: center; gap: .3rem;
}
.arrow { transition: transform .2s; }
.proyecto-card:hover .arrow { transform: translateX(4px); }
.proyecto-meta {
  font-family: 'JetBrains Mono', monospace;
  font-size: .65rem; color: var(--muted);
}
</style>
