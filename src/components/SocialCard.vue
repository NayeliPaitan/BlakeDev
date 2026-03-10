<template>
  <a :href="href" target="_blank" class="social-card reveal" data-hover>
    <div class="social-icon" :class="iconClass" v-html="svg" />
    <div>
      <div class="social-name">{{ nombre }}</div>
      <div class="social-handle">{{ handle }}</div>
    </div>
  </a>
</template>

<script setup>
defineProps({
  nombre:    String,
  handle:    String,
  iconClass: String,
  svg:       String,
  href:      String,
})
</script>

<style scoped>
.social-card {
  display: flex; align-items: center; gap: 1rem;
  padding: 1.1rem 1.4rem;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 12px; text-decoration: none;
  color: var(--text); cursor: none; transition: all .2s;
}
.social-card:hover {
  transform: translateY(-3px);
  border-color: rgba(137,77,248,.4);
  box-shadow: 0 8px 28px rgba(137,77,248,.12);
}
.social-icon {
  width: 40px; height: 40px; border-radius: 10px;
  display: grid; place-items: center; flex-shrink: 0;
}
:global(.si-ig) { background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
:global(.si-ignp) { background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
:global(.si-whatsapp) { background: #25D366; }
:global(.si-linkedin) { background: #0A66C2; }
:global(.si-tt) { background: #000; }
:global(.si-yt) { background: #ff0000; }
:global(.si-gh) { background: #24292e; }

.social-name   { font-size: .9rem; font-weight: 600; }
.social-handle { font-size: .72rem; color: var(--muted); font-family: 'JetBrains Mono', monospace; }
</style>
