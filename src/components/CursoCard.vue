<template>
  <a :href="href" class="curso-card reveal" :class="`reveal-delay-${delay}`">
    <div class="curso-icon">{{ icon }}</div>
    <div class="curso-level">{{ nivel }}</div>
    <div class="curso-title">{{ titulo }}</div>
    <div class="curso-desc">{{ desc }}</div>
    <div class="curso-footer">
      <span class="curso-tag">{{ tag }}</span>
      <span class="curso-arrow">→</span>
    </div>
  </a>
</template>

<script setup>
defineProps({
  icon:   String,
  nivel:  String,
  titulo: String,
  desc:   String,
  tag:    String,
  href:   { type: String, default: '#' },
  delay:  { type: Number, default: 0 },
})
</script>

<style scoped>
.curso-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  cursor: none; transition: all .25s;
  position: relative; overflow: hidden;
  text-decoration: none; color: inherit; display: block;
}
.curso-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--p1), var(--p3));
  transform: scaleX(0); transform-origin: left; transition: transform .3s;
}
.curso-card:hover { transform: translateY(-4px); border-color: rgba(137,77,248,.35); box-shadow: 0 12px 40px rgba(137,77,248,.12); }
.curso-card:hover::before { transform: scaleX(1); }

.curso-icon {
  width: 44px; height: 44px;
  background: rgba(137,77,248,.12); border-radius: 10px;
  display: grid; place-items: center; font-size: 1.3rem; margin-bottom: 1rem;
}
.curso-level {
  font-family: 'JetBrains Mono', monospace;
  font-size: .6rem; color: var(--p3);
  text-transform: uppercase; letter-spacing: .1em; margin-bottom: .4rem;
}
.curso-title { font-size: 1rem; font-weight: 600; margin-bottom: .5rem; }
.curso-desc  { font-size: .8rem; color: var(--muted); line-height: 1.5; }

.curso-footer {
  display: flex; align-items: center; justify-content: space-between;
  margin-top: 1.2rem; padding-top: 1rem; border-top: 1px solid var(--border);
}
.curso-tag {
  font-size: .65rem; font-weight: 600; padding: .2rem .6rem;
  border-radius: 4px; background: rgba(137,77,248,.1); color: var(--p3);
  font-family: 'JetBrains Mono', monospace;
}
.curso-arrow { color: var(--p2); font-size: 1rem; transition: transform .2s; }
.curso-card:hover .curso-arrow { transform: translateX(4px); }
</style>
