import { ref, onMounted, onUnmounted } from 'vue'

export function useCursor() {
  const cursorX  = ref(0)
  const cursorY  = ref(0)
  const ringX    = ref(0)
  const ringY    = ref(0)
  const hovered  = ref(false)

  let animId, rx = 0, ry = 0

  const onMove = (e) => {
    cursorX.value = e.clientX
    cursorY.value = e.clientY
  }

  const loop = () => {
    rx += (cursorX.value - rx) * 0.12
    ry += (cursorY.value - ry) * 0.12
    ringX.value = rx
    ringY.value = ry
    animId = requestAnimationFrame(loop)
  }

  const addHoverListeners = () => {
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', () => hovered.value = true)
      el.addEventListener('mouseleave', () => hovered.value = false)
    })
  }

  onMounted(() => {
    document.addEventListener('mousemove', onMove)
    loop()
    // slight delay so DOM is painted
    setTimeout(addHoverListeners, 300)
  })

  onUnmounted(() => {
    document.removeEventListener('mousemove', onMove)
    cancelAnimationFrame(animId)
  })

  return { cursorX, cursorY, ringX, ringY, hovered }
}
