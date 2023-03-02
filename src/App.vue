<script setup>
import AppIconSpritesheet from './components/AppIconSpritesheet.vue'
import AppIcon from './components/AppIcon.vue'

const icons = ['by', 'cc', 'nc-eu', 'nc-jp', 'nc', 'pd', 'remix', 'sa', 'share']
</script>

<template>
  <main>
    <section class="grid">
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
