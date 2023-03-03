<script setup>
import anime from 'animejs'
import { ref, onMounted } from 'vue'

import AppIconSpritesheet from './components/AppIconSpritesheet.vue'
import AppIcon from './components/AppIcon.vue'

const icons = [
  'by',
  'cc',
  'nc-eu',
  'nc-jp',
  'nc',
  'zero',
  'remix',
  'sa',
  'share',
]

const grid = ref()

onMounted(() => {
  anime({
    targets: grid.value.children,
    scale: [
      { value: 0.5, easing: 'easeOutSine', duration: 500 },
      { value: 1, easing: 'easeInOutQuad', duration: 500 },
    ],
    delay: anime.stagger(200, { grid: [3, 3], from: 'center' }),
  })
})
</script>

<template>
  <main>
    <section class="grid" ref="grid">
      <AppIcon v-for="icon in icons" :key="icon" :name="icon" />
    </section>

    <AppIconSpritesheet />
  </main>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  align-items: center;
  justify-content: center;

  height: 100vh;
}
</style>
