import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let observer

  const init = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, i * 90)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  }

  onMounted(() => setTimeout(init, 100))
  onUnmounted(() => observer?.disconnect())
}
