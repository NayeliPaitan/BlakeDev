import { ref, onMounted, onUnmounted } from 'vue'

export function useActiveSection(sectionIds) {
  const active = ref(sectionIds[0])

  const onScroll = () => {
    for (const id of [...sectionIds].reverse()) {
      const el = document.getElementById(id)
      if (el && window.scrollY >= el.offsetTop - 130) {
        active.value = id
        break
      }
    }
  }

  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return { active }
}
