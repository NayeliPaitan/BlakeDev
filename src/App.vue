<template>
  <AppCursor />
  <AppNav />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<script setup>
import AppCursor from './components/AppCursor.vue'
import AppNav    from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style scoped>
main { position: relative; z-index: 1; }
</style>
