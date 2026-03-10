<template>
  <div
    class="cursor"
    :class="{ hovered }"
    :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
  />
  <div
    class="cursor-ring"
    :class="{ hovered }"
    :style="{ left: ringX + 'px', top: ringY + 'px' }"
  />
</template>

<script setup>
import { useCursor } from '../composables/useCursor.js'
const { cursorX, cursorY, ringX, ringY, hovered } = useCursor()
</script>

<style scoped>
.cursor {
  width: 12px; height: 12px;
  background: var(--p1); border-radius: 50%;
  position: fixed; pointer-events: none; z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width .2s, height .2s;
  mix-blend-mode: screen;
}
.cursor.hovered { width: 20px; height: 20px; }

.cursor-ring {
  width: 36px; height: 36px;
  border: 1.5px solid rgba(137,77,248,.5);
  border-radius: 50%;
  position: fixed; pointer-events: none; z-index: 9998;
  transform: translate(-50%, -50%);
  transition: width .2s, height .2s;
}
.cursor-ring.hovered { width: 52px; height: 52px; }
</style>
